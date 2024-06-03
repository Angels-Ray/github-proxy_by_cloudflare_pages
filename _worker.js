const hostnames = [
    "raw.githubusercontent.com",
    "objects.githubusercontent.com",
    "alive.github.com",
    "api.github.com",
    "assets-cdn.github.com",
    "avatars.githubusercontent.com",
    "avatars0.githubusercontent.com",
    "avatars1.githubusercontent.com",
    "avatars2.githubusercontent.com",
    "avatars3.githubusercontent.com",
    "avatars4.githubusercontent.com",
    "avatars5.githubusercontent.com",
    "camo.githubusercontent.com",
    "central.github.com",
    "cloud.githubusercontent.com",
    "codeload.github.com",
    "collector.github.com",
    "desktop.githubusercontent.com",
    "favicons.githubusercontent.com",
    "gist.github.com",
    "github-cloud.s3.amazonaws.com",
    "github-com.s3.amazonaws.com",
    "github-production-release-asset-2e65be.s3.amazonaws.com",
    "github-production-repository-file-5c1aeb.s3.amazonaws.com",
    "github-production-user-asset-6210df.s3.amazonaws.com",
    "github.blog",
    "github.community",
    "github.githubassets.com",
    "github.global.ssl.fastly.net",
    "github.io",
    "github.map.fastly.net",
    "githubstatus.com",
    "live.github.com",
    "media.githubusercontent.com",
    "objects.githubusercontent.com",
    "pipelines.actions.githubusercontent.com",
    "raw.githubusercontent.com",
    "user-images.githubusercontent.com",
    "education.github.com",
];

function updateUrlForHost(url, hostnames) {
    for (const hostname of hostnames) {
        if (url.pathname.includes(hostname)) {
            const prefixes = [
                `/https://${hostname}/`,
                `/http://${hostname}/`,
                `/${hostname}/`,
                "/github.com/",
            ];
            for (const prefix of prefixes) {
                if (url.pathname.startsWith(prefix)) {
                    url.pathname = url.pathname.substring(prefix.length - 1);
                    break;
                }
            }
            url.hostname = hostname;
            break;
        }
    }
}

export default {
    async fetch(request, env) {
        let url = new URL(request.url);
        if (hostnames.some((hostname) => url.pathname.includes(hostname))) {
            updateUrlForHost(url, hostnames);
        } else {
            url.hostname = "github.com";

            const hostname_prefixes = [
                "/https://github.com/",
                "/http://github.com/",
                "/github.com/",
            ];
            for (const hostname_prefix of hostname_prefixes) {
                if (url.pathname.startsWith(hostname_prefix)) {
                    url.pathname = url.pathname.substring(
                        hostname_prefix.length - 1
                    );
                    break;
                }
            }

            if (url.pathname.includes("releases/download")) {
                let headers = new Headers(request.headers);
                // Create a new request for the HEAD method
                let headRequest = new Request(url, {
                    method: "HEAD",
                    headers: headers,
                    redirect: "manual",
                });
                let response = await fetch(headRequest);

                if (response.status >= 300 && response.status < 400) {
                    let location = response.headers.get("Location");
                    if (location) {
                        url = new URL(location);
                    }
                }
            } else if (url.pathname.startsWith("/login")) {
                url.pathname = "";
            }
        }
        return fetch(new Request(url, request));
    },
};

# github-proxy_by_cloudflare_pages
[github-proxy_by_cloudflare_pages](https://github.com/Angels-Ray/github-proxy_by_cloudflare_pages)

通过Cloudflare Pages反代github资源。仅支持public的资源。

已搭建好的：[https://github-6lp.pages.dev/](https://github-6lp.pages.dev/)

# 安装教程

1. 首先，注册Cloudflare。
2. 进入[控制台](https://dash.cloudflare.com/)，点击Workers和Pages。
3. 点击：创建应用程序》Pages》上传资产。
4. 填入项目名称，创建项目。
5. 点击上传压缩文件，上传`github-proxy.zip`。
6. 用Cloudflare提供的域名进行反代即可。

# 使用方法

使用`{反代域名}/{需要代理的地址}`即可。

注：仅支持public的资源。

例：

```bash
https://反代域名/https://github.com/deanxv/coze-discord-proxy/releases/download/v4.4.12/coze-discord-proxy
https://反代域名/http://github.com/deanxv/coze-discord-proxy/releases/download/v4.4.12/coze-discord-proxy
https://反代域名/github.com/deanxv/coze-discord-proxy/releases/download/v4.4.12/coze-discord-proxy

https://反代域名/https://avatars.githubusercontent.com/u/122529705?s=64&v=4
https://反代域名/http://avatars.githubusercontent.com/u/122529705?s=64&v=4
https://反代域名/avatars.githubusercontent.com/u/122529705?s=64&v=4

# 注：github.com 可使用以下方法：
https://反代域名/deanxv/coze-discord-proxy/releases/download/v4.4.12/coze-discord-proxy

```



# 支持的域名

仅支持public的资源。

**大概支持：**

```
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
```


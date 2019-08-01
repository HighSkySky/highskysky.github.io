# highskysky.github.io
个人站点

## 项目部署
本项目运行基于 docker-compose，请先确定 docker-compose 已安装
```
初次部署：
1. 拉取代码
git clone https://github.com/HighSkySky/highskysky.github.io.git
2. 上传 https 证书
scp -r nginx/ssl username@192.168.0.1:~/highskysky.github.io/nginx/ssl

启动 nginx：
docker-compose up -d
```

## 项目代码
使用 git subtree 拉取代码
```
添加应用依赖（仅第一次使用）：
git subtree add -P pages/blog git@github.com:HighSkySky/blog-ui.git master --squash
git subtree add -P api git@github.com:HighSkySky/blog-backend.git master --squash
正常更新代码：
git subtree pull -P pages/blog git@github.com:HighSkySky/blog-ui.git master --squash
git subtree pull -P api git@github.com:HighSkySky/blog-backend.git master --squash
```

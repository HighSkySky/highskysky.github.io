# highskysky.github.io
个人站点

## 项目部署
本项目运行基于 docker-compose，请先确定 docker-compose 已安装
```
初次部署：
1. 拉取代码
git clone https://github.com/HighSkySky/highskysky.github.io.git
2. 上传 https 证书
scp -r ssl username@192.168.0.1:~/highskysky.github.io/nginx/ssl

启动 nginx
docker-compose up -d
```

## 项目结构

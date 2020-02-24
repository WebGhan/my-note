# npm 及 yarn 修改源

## npm

1.查询当前配置的镜像  
```
npm config get registry

// 默认源 https://registry.npmjs.org
```

2.设置成淘宝镜像  
```
npm config set registry https://registry.npm.taobao.org
```

## nrm

nrm(npm registry manager)是npm的镜像源管理工具，可通过nrm来切换镜像源

1.安装nrm  
```
npm install -g nrm
```

2.查看可选的源  
```
nrm ls

// 结果如下
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```
其中，带*的是当前使用的源  

3.切换  
如果要切换到taobao源，执行命令`nrm use taobao`

4.测试速度  
可以通过`nrm test`测试所有或指定源的响应时间

## yarn

1.查询当前配置的镜像  
```
yarn config get registry

// 默认源 https://registry.yarnpkg.com
```

2.设置成淘宝镜像  
```
yarn config set registry https://registry.npm.taobao.org/
```

## 注意

- taobao源与cnpm是不同的，cnpm是淘宝定制过的
- cnpm与npm混用会导致一些错误
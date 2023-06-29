# Vue 3 + TypeScript + Vite

> 基于 vite4.x + vue3.x + vue-router4.x + vant4.x + typescript4.x 的H5页面

- `rem` 响应式页面

    阿里flexible.js、`postcss-pxtorem`

- 环境配置文件

    .env[mode]

- eslint + eslintrc.cjs + vscode自动保存

    .vscode/setting.json
    
    ``` json
    {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
    }
    ```

- 自动引入组件和样式：不需要在import引入

- 二次封装axios

## 搭建步骤

- 获取源码

```bash
git clone 
```

- 安装依赖

```bash
npm install
```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build:prod 或 npm run build:dev 或 npm run build:stage
```

## 项目目录

```js
├── public                               # 模板文件
├── src
│   ├── api                            # 接口文件
│   ├── assets                         # 资源目录
│   ├── components                     # 公共组件
│   ├── router                         # 路由
│   ├── types                          # ts声明module
│   ├── utils                          # 工具
│   │   ├── request.ts               # 二次封装axios
│   ├── views                          # 页面组件
│   ├── App.vue                        # 组件入口
│   ├── main.ts                        # 项目入口
│   ├── style.css                      # 样式
│   ├── vite-env.d.ts                  # ts声明
├── .eslintignore                        # eslint忽略校验文件
├── .eslintrc.cjs                        # eslint规则配置文件
├── .gitignore                           # git忽略文件
├── index.html                           # 静态网页入口
├── tsconfig.json                        # ts配置文件,项目在浏览器运行
├── tsconfig.node.json                   # ts配置文件,vite在node环境中运行
├── vite.config.js                       # 脚手架配置文件
```
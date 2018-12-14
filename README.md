# browser-demo

> 一个基于[vue](https://github.com/vuejs/vue) 和 [element](https://github.com/ElemeFE/element)的管理后台Demo，内置菜单路由、权限验证等功能

## 前期准备

#### 安装[elementUI](http://element-cn.eleme.io/#/zh-CN)
```bash
npm install element-ui -S
```

#### 安装[normalize.css](http://necolas.github.io/normalize.css/)
```bash
npm install normalize.css -S
```

#### 安装[svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)
```bash
npm install svg-sprite-loader -S
```

#### 安装[less](http://lesscss.cn/)
```bash
npm install less less-loader --save-dev
```

#### 安装[vuex](https://vuex.vuejs.org/zh-cn/)
```bash
npm install vuex --save
```

#### 安装[axios](https://www.kancloud.cn/yunye/axios/234845)
```bash
npm install axios -S
```

#### 安装工具库[lodash](https://www.lodashjs.com/)
```bash
npm i --save lodash
```

## 路由结构

- 登录
- 账号管理
    - 查找账号
    - 新建账号
    - 编辑账号
    - 删除账号
- 角色权限管理
    - 角色管理
      - 新建角色
      - 编辑角色
    - 权限配置
- 个人中心

## 功能
  * 表单校验
  * 路由跳转逻辑
  * 路由权限逻辑
  * 全局Loading开关
  * 请求拦截器
  * 注册组件模块/过滤器/指令
  * 本地模拟数据
  * 雪碧图、svg图引用


## 微校手机 移动端 APP

本项目用于毕业设计的前端文件，基于`React Native`和`SpringBoot`开发

## 使用说明

### 短信验证码

由于阿里云短信限制个人一天只能发10条，所以项目目前测试阶段的验证码在[点击此处获取验证码](http://code.miaoroom.com)

## 参考文献

踩坑不易，走在前人的肩上砥砺前行，以下为本项目全程开发所参考过的文章，感谢你们。

### 项目规范

基于 Alloy Team 的代码风格，详情可看这里：https://github.com/AlloyTeam/tslint-config-alloy

### TypeScript + React Native

本项目在开始使用这两者结合的时候比较陌生，所以踩了许多坑，参考了大量文章配置。

- 请参考：https://github.com/Microsoft/TypeScript-React-Native-Starter
- TypeScript 在 React 中使用总结：https://juejin.im/post/5bab4d59f265da0aec22629b#heading-10
- TypeScript 实践：https://juejin.im/post/5a9c004a6fb9a028b92c9e91
- React + TS 2.8：终极组件设计模式指南：https://segmentfault.com/a/1190000015326439#articleHeader2

### 本项目实现 Iconfont 参考了以下几篇文章

- https://www.vanadis.cn/2016/07/01/react-native-iconfont/
- https://juejin.im/post/5ac80a265188255569193bb0
- https://www.jianshu.com/p/c900f6a0797f

### React Navigation 参考

本项目使用的版本为：`"@types/react-navigation": "^3.0.1"`和`"react-navigation": "^3.2.1"`，由于版本更新部分 API 已有变动，所以本项目只参考配置和设计，具体实现在本项目`/app/navigation/`中。

- https://www.jianshu.com/p/aca22ef29bfe
- https://juejin.im/post/5af12a836fb9a07aa11425a0#heading-4
- https://www.kancloud.cn/daiji/webapp/509781
- https://github.com/react-navigation/react-navigation/issues/888
- Tab Bar 问题：https://github.com/react-navigation/react-navigation/issues/581 、 https://github.com/react-navigation/react-navigation/issues/464
- Redux 和 React Navigation 结合： https://stackoverflow.com/questions/53846615/react-native-navigation-v3-with-redux
- Add strong typing for react navigation props： https://stackoverflow.com/questions/47924501/add-strong-typing-for-react-navigation-props
- navigationOptions from nested TabNavigator inside StackNavigator:
  - https://github.com/react-navigation/react-navigation/issues/4357
  - https://github.com/react-navigation/react-navigation-tabs/issues/19
- 子组件没有 this.navigation.navigate()：https://stackoverflow.com/questions/45978679/react-native-cannot-read-property-navigate-of-undefined

### 架构设计参考

- https://juejin.im/post/59f83c33f265da433226e0f4

### 状态管理 Redux

- React Nativa 中使用 Redux https://www.jianshu.com/p/2a327a235f2d
- React Redux 中 connect()详解：
  - http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
  - http://taobaofed.org/blog/2016/08/18/react-redux-connect/
  - https://www.redux.org.cn/docs/basics/UsageWithReact.html
  - https://imweb.io/topic/5a426d32a192c3b460fce354

### React Native 获取设备信息组件

- https://github.com/rebeccahughes/react-native-device-info

### React Native 第三方组件

- React Native 常用三方组件库大全：https://juejin.im/post/5b915770e51d450e9f66de40#heading-85
- 视频全屏播放：
  - https://github.com/abbasfreestyle/react-native-af-video-player#fullscreen-videos-inside-a-scrollview
  - 最外层宽度不能写死
  - 用了组件的 ScrollView 之后，不能与其他内容部分同层，不然会有内容在全屏后无法消失

### 网络请求库 Axios

- [官方文档](https://github.com/axios/axios)

### 小工具

- [常用正则表达式大全](https://www.html.cn/archives/7991)

### 图像上传

- [react-native-image-picker图片上传](https://www.jianshu.com/p/c2aecf93e1af)

### 下拉刷新

- [React Native开发之——组件RefreshControl](https://blog.csdn.net/calvin_zhou/article/details/79680056)

### 真机调试 + 离线打包

- [真机调试](https://github.com/facebook/react-native/issues/21480#issuecomment-428547909)

- [React Native 中设置 APP 名称、图标和启动页](https://www.jianshu.com/p/727c6057fc0a)

- [React Native ios离线打包并上传App Store](http://www.huangyuhong.com/2018/03/react-native-ios%E7%A6%BB%E7%BA%BF%E6%89%93%E5%8C%85/)

- [ReactNative - 打离线包 (一) 原生RN命令打包](https://www.jianshu.com/p/bb7c5f1d304e)
## 微校手机 移动端 APP

本项目用于毕业设计的前端文件，基于`React Native`和`SpringBoot`开发

## 参考文献

踩坑不易，走在前人的肩上砥砺前行，以下为本项目全程开发所参考过的文章，感谢你们。

### 项目规范

基于 Alloy Team 的代码风格，详情可看这里：https://github.com/AlloyTeam/tslint-config-alloy

### TypeScript + React Native

本项目在开始使用这两者结合的时候比较陌生，所以踩了许多坑，参考了大量文章配置。

- 请参考：https://github.com/Microsoft/TypeScript-React-Native-Starter
- TypeScript 在 React 中使用总结：https://juejin.im/post/5bab4d59f265da0aec22629b#heading-10
- TypeScript 实践：https://juejin.im/post/5a9c004a6fb9a028b92c9e91

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

### 架构设计参考

- https://juejin.im/post/59f83c33f265da433226e0f4

### 状态管理 Redux

- React Nativa 中使用 Redux https://www.jianshu.com/p/2a327a235f2d
- React Redux 中 connect()详解：
  - http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
  - http://taobaofed.org/blog/2016/08/18/react-redux-connect/
  - https://www.redux.org.cn/docs/basics/UsageWithReact.html

## 0.0.11（2022-11-15）
1. 新增
   - 支持自定义属性

## 0.0.10（2022-10-12）
1. 新增
   - `$ABTestTrigger` 触发逻辑优化

## 0.0.9（2022-4-15）
1. 优化
   - 请求 `A/B` 实验的用户 `ID` 兼容 `loginWithKey` 登录的用户 `ID`

## 0.0.8（2022-3-18）

1. 新增
   - 新增支付宝 `A/B Testing` （需要支付宝 SDK v1.2.0 及以上版本）



## 0.0.7（2022-2-25）

1. 新增
   - 支持本地数据存储加密

## 0.0.6（2022-2-21）

1. 新增
   - `A/B Testing` 支持延迟初始化

## 0.0.5（2022-2-9）

1. 修复
   - 修复在开发者工具上真机调试模式异常问题


## 0.0.4（2021-09-30）

1. 优化
   - `fastFetchABTest` 接口请求优化

## 0.0.3（2021-07-28）

1. 新增
   - 新增快应用 `A/B Testing SDK`

## 0.0.2（2021-04-26）

1. 修复
   - `login` 后立马获取试验时，使用的仍是本地缓存的问题;
   - 清空缓存后立即调用 `abtest.fastFetchABTest()` 接口会报错问题

## 0.0.1（2021-04-02）

1. 新增
   - 微信小程序 `A/B Testing SDK` 第一个版本;

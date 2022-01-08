---
title: Cookie
date: 2021-07-25
categories: 
 - JavaScript
---

## 组成
- 名称，唯一表示cookie的名称
- 值
- 域path
- 路径domain
- 过期时间expire或者有效期max-age
- 安全标识secure

其他的
- HttpOnly js无法访问
- SameSite 限制请求中cookie的携带
  - None 浏览器会在同站请求、跨站请求继续发送cookie
  - Strict 只有访问相同站点时发送cookie
  - Lax 只能在get方法提交表单或者a标签发送get请求
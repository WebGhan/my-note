# JS常用正则

## 手机号验证

前端切忌过度验证，验证以下两点即可：
- 数字"1"开头
- 共11位数

```javascript
const checkPhoneNumber = (str) => {
  let pattern = /^1\d{10}$/;
  return pattern.test(str)
}
```

## 隐藏手机号中间位数

```javascript
const hidePhoneNumber = (str) => {
  return str.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
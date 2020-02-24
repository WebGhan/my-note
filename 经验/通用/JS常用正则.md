# JS常用正则验证

## JS手机号验证

前端切忌过度验证，验证以下两点即可：
- 数字"1"开头
- 共11位数

```javascript
const checkPhoneNumber = (str) => {
  let pattern = /^1\d{10}$/;
  return pattern.test(str)
}
```
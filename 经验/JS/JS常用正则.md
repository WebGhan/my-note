# JS常用正则

> 前端切忌过度验证

## 手机号验证

切忌过度验证，验证以下两点即可：
- 数字"1"开头
- 共11位数

```javascript
const checkPhoneNumber = (str) => {
  let pattern = /^1\d{10}$/
  return pattern.test(str)
}
```

## 隐藏手机号中间位数

```javascript
const hidePhoneNumber = (str) => {
  return str.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
```

## 用户名验证

用户名由中文、英文、数字、下划线组成，一个中文表示两个字符

```javascript
const checkUserName = (_str, minLength, maxLength) => {
  let _fomat = /^[\w\u4e00-\u9fa5]+$/.test(_str)
  if (_fomat) {
    let _zh = _str.match(/[\u4e00-\u9fa5]*/g).join('').length
    let _en = _str.match(/\w*/g).join('').length
    let _length = _zh * 2 + _en
    return _length >= minLength && _length <= maxLength
  }
  return false
}
```
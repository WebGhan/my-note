# ios对new Date() 的兼容问题

在IOS上，`new Date(dateString)`的 dateString 参数支持"yyyy/mm/dd hh:mm:ss"格式，不支持"yyyy-mm-dd hh:mm:ss"格式  

**利用正则替换格式**  
```js
const format = (str) => {
  return str.replace(/-/g, '/')
}
```
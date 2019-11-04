## `<rich-text>`图片宽度
```javascript
// 利用正则替换富文本图片样式
content.replace(/<img/gi, '<img style="max-width:100%;height:auto"')
```
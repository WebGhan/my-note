## `<rich-text>`图片宽度
```javascript
// 利用正则替换富文本图片样式
content.replace(/style="[^=]*?"([(\s+\w+=)|>])/g, '')
content.replace(/<img/gi, '<img style="display: block; margin: 0 auto; width: 100%; height: auto;"')
```
# canvas 文本换行

```js
// 处理文本换行
function renderText(x, y, maxWidth, lineHeight, text) {
  let _arrText = text.split('')
  let _line = ''
  for (let n = 0; n < _arrText.length; n++) {
    let testLine = _line + _arrText[n]
    let metrics = ctx.measureText(testLine)
    let testWidth = metrics.width
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(_line, 25, y)
      _line = _arrText[n]
      y += lineHeight
    } else {
      _line = testLine
    }
  }
  ctx.fillText(_line, 25, y);
  return y
}
```
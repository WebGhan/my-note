# onLanuchReady 方法

```js
function onLaunchReady(callBack) {
  const globalData = getApp().globalData
  let result = globalData.lanuchReady
  if (result) {
    callBack()
  } else {
    Object.defineProperty(globalData, 'lanuchReady', {
      get() {
        return result
      },
      set(value) {
        result = value
        if (value) {
          callBack()
        }
      }
    })
  }
}
```
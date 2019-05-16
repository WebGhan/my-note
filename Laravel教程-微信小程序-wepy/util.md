## 封装接口请求
文件：src/utils/util.js
```javascript
import moment from 'moment'
import 'moment/locale/zh-cn'
```
#### 格式化日期（moment.js）
```javascript
const diffForHumans = (date, format='YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}
```
别忘了导出
```javascript
export default {
  diffForHumans
}
```
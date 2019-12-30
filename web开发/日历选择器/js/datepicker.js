(function () {
  let datepicker = {};
  datepicker.getMonthDate = function (year, month) {
    let ret = [];
    // 默认日期为当天
    if (!year || !month) {
      let today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }
    // 获取当月第一天的星期
    let firstDate = new Date(year, month - 1, 1);
    let firstDayWeek = firstDate.getDay();
    if (firstDayWeek === 0) {
      firstDayWeek = 7;
    }
    // 获取当月最后一天
    let lastDate = new Date(year, month, 0);
    let lastDay = lastDate.getDate();
    // 获取上一个月最后一天
    let prevMonthLastDate = new Date(year, month - 1, 0);
    let prevMonthLastDay = prevMonthLastDate.getDate();
    // 展示上一个月的天数
    let prevMonthDayCount = firstDayWeek - 1;

    for (let i = 0; i < 7 * 6; i++) {
      let date = i + 1 - prevMonthDayCount;
      let showDate = date;
      let thisMonth = month;
      let isCurrentMonth = true;
      // 上一月
      if (date <= 0) {
        thisMonth = month - 1;
        showDate = prevMonthLastDay + date;
        isCurrentMonth = false;
      } else if (date > lastDay) {
        // 下一月
        thisMonth = month + 1;
        showDate = showDate - lastDay;
        isCurrentMonth = false;
      } else {
        isCurrentMonth = true;
      }
      ret.push({
        month: thisMonth,
        date: date,
        showDate,
        isCurrentMonth
      })
    }
    return {
      year: year,
      month: month,
      days: ret
    };
  }
  window.datepicker = datepicker
})();

(function () {
  datepicker.buildUi = function (year, month) {
    let monthData = datepicker.getMonthDate(year, month);
    let html = `
      <div class="gh-datepicker-header">
        <span class="gh-datepicker-btn gh-datepicker-btn-prev">&lt;</span>
        <span class="gh-datepicker-current-month">${monthData.year}-${monthData.month}</span>
        <span class="gh-datepicker-btn gh-datepicker-btn-prev">&gt;</span>
      </div>
      <div class="gh-datepicker-body">
        <table>
          <thead>
            <tr>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
              <th>日</th>
            </tr>
          </thead>
          <tbody>
            ${monthData.days.map((item, index) => `
              ${index % 7 === 0 ? '<tr>' : ''}
                <td class="${item.isCurrentMonth ? '' : 'low'}">${item.showDate}</td>
              ${index % 7 === 6 ? '</tr>' : ''}
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    return html;
  };
  datepicker.init = function ($dom) {
    var html = datepicker.buildUi();
    $dom.innerHTML = html;
  }
})();

datepicker.init(document.getElementById('myDatePicker'))
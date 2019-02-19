// JavaScript函数：
let minute = 1000 * 60
let hour = minute * 60
let day = hour * 24
let halfamonth = day * 15
let month = day * 30
let year = month * 12
let result

function getDateDiff(dateTimeStamp: number) {
  let now = new Date().getTime()
  let diffValue = now - dateTimeStamp
  if (diffValue < 0) {
    // 若日期不符则弹出窗口告之
    // alert("结束日期不能小于开始日期！");
  }
  let yearC = diffValue / year
  let monthC = diffValue / month
  let weekC = diffValue / (7 * day)
  let dayC = diffValue / day
  let hourC = diffValue / hour
  let minC = diffValue / minute
  if (yearC >= 1) {
    result = '发表于' + ~~yearC + '年前'
  } else if (monthC >= 1) {
    result = '发表于' + ~~monthC + '月前'
  } else if (weekC >= 1) {
    result = '发表于' + ~~weekC + '周前'
  } else if (dayC >= 1) {
    result = '发表于' + ~~dayC + '天前'
  } else if (hourC >= 1) {
    result = '发表于' + ~~hourC + '个小时前'
  } else if (minC >= 1) {
    result = '发表于' + ~~minC + '分钟前'
  } else result = '刚刚发表'
  return result
}

export default getDateDiff

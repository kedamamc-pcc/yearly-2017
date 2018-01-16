const data = require('./20180101.json')
console.log(data.players.filter(p => p.data.time_start >= new Date('2018-01-01 00:00:00 +0800')).length)

console.log(`玩家总数: ${data.players.length}`)
console.log(`数据更新时间: ${new Date(data.update).toLocaleString()}`)
console.log(`服务器运行时间: ${data.world_lived}`)

let firstLogin = Date.now()
let newbieCount = 0
let firstNewbie = {data: {time_start: Date.now()}}
let lastNewbie = {data: {time_start: 0}}
let totalLiveTime = 0

for (const p of data.players) {
  const pdata = p.data
  if (pdata.time_start < firstLogin) firstLogin = pdata.time_start
  if (pdata.time_start >= new Date('2017-01-01 00:00:00 +0800') && pdata.time_start < new Date('2018-01-01 00:00:00 +0800')) newbieCount++
  if (pdata.time_start < firstNewbie.data.time_start) firstNewbie = p
  if (pdata.time_start > lastNewbie.data.time_start) lastNewbie = p
  totalLiveTime += pdata.time_lived
}

console.log(`首位玩家入服时间: ${new Date(firstLogin).toLocaleString()}`)
console.log(`服务器创建至今: ${data.update - firstLogin}`)
console.log(`2017 萌新总数: ${newbieCount} (${(newbieCount / data.players.length * 100).toFixed(3)}%)`)
console.log(`第一位萌新: ${firstNewbie.data.playername} (${firstNewbie.data.names.length})`)
console.log(`最后一位萌新: ${lastNewbie.data.playername} (${lastNewbie.data.names.length})`)
console.log(`总计在线时长: ${totalLiveTime} (${secs2time(totalLiveTime)})`)

function secs2time(secs) {
  const days = Math.floor(secs / 86400)
  secs = secs % 86400
  const hours = Math.floor(secs / 3600)
  secs = secs % 3600
  const minutes = Math.floor(secs / 60)
  secs = secs % 60
  return `${days}:${hours}:${minutes}:${secs}`
}
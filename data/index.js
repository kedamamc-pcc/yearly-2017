const data = require('./20180101.json')

console.log(`玩家总数: ${data.players.length}`)
console.log(`数据更新时间: ${new Date(data.update).toLocaleString()}`)
console.log(`服务器运行时间: ${data.world_lived}`)

let firstLogin = Date.now()

for (const p of data.players) {
  const pdata = p.data
  if (pdata.time_start < firstLogin) firstLogin = pdata.time_start
}

console.log(`首位玩家入服时间: ${new Date(firstLogin).toLocaleString()}`)
console.log(`服务器创建至今: ${data.update - firstLogin}`)
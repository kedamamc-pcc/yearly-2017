const ITEMS = require('./items.json')
const data = require('./20180101.json')

// console.log(`玩家总数: ${data.players.length}`)
// console.log(`数据更新时间: ${new Date(data.update).toLocaleString()}`)
// console.log(`服务器运行时间: ${data.world_lived}`)

let firstLogin = Date.now()
let newbieCount = 0
let firstNewbie = {data: {time_start: Date.now()}}
let lastNewbie = {data: {time_start: 0}}
let totalLiveTime = 0
let totalMineBlock = newbieMineBlock = 0
let useRailCount = useRailNewbie = 0
let aviateCount = aviateNewbie = 0
let walkCount = walkNewbie = 0

const result = {}
const logFuncs = []

for (const p of data.players) {
  const pstat = p.stats
  const pdata = p.data
  // if (pdata.time_start < firstLogin) firstLogin = pdata.time_start
  const isNewbie = pdata.time_start >= new Date('2017-01-01 00:00:00 +0800') && pdata.time_start < new Date('2018-01-01 00:00:00 +0800')
  // if (isNewbie) newbieCount++
  // if (pdata.time_start < firstNewbie.data.time_start) firstNewbie = p
  // if (pdata.time_start > lastNewbie.data.time_start) lastNewbie = p
  // totalLiveTime += pdata.time_lived
  // const mineblock = sumStats(pstat, ITEMS.mineBlocks, 'stat.mineBlock.minecraft.')
  // totalMineBlock += mineblock
  // if (isNewbie) newbieMineBlock += mineblock
  // const useRail = sumStats(pstat, ITEMS.rails, 'stat.useItem.minecraft.') - sumStats(pstat, ITEMS.rails, 'stat.mineBlock.minecraft.')
  // useRailCount += useRail
  // if (isNewbie) useRailNewbie += useRail
  // const aviate = sumStats(pstat, ['aviateOneCm'], 'stat.')
  // aviateCount += aviate
  // if (isNewbie) aviateNewbie += aviate
  //
  // const walk = sumStats(pstat, ['walkOneCm', 'sprintOneCm'], 'stat.')
  // walkCount += walk
  // if (isNewbie) walkNewbie += walk
  //
  // if (!result.minecart) result.minecart = [0, 0]
  // const minecart = sumStats(pstat, ['minecartOneCm'], 'stat.')
  // result.minecart[0] += minecart
  // if (isNewbie) result.minecart[1] += minecart
  //
  // if (!result.boat) result.boat = [0, 0]
  // const boat = sumStats(pstat, ['boatOneCm'], 'stat.')
  // result.boat[0] += boat
  // if (isNewbie) result.boat[1] += boat
  //
  // if (!result.killRabbit) {
  //   result.killRabbit = [0, 0]
  //   logFuncs.push(_ => log('累计杀兔子', ...result.killRabbit))
  // }
  // const killRabbit = sumStats(pstat, ['Rabbit'], 'stat.killEntity.')
  // result.killRabbit[0] += killRabbit
  // if (pdata.time_start >= 1487302941632) result.killRabbit[1] += killRabbit

  // {
  //   if (!result.killMonster) {
  //     result.killMonster = [0, 0]
  //     result.killMonsterStats = Object.assign({}, ...ITEMS.monsters.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => log('累计杀怪物', ...result.killMonster))
  //     logFuncs.push(_ => {
  //       const ens = Object.entries(result.killMonsterStats).sort((a, b) => a[1] - b[1])
  //       console.log(`- Max: ${ens[ens.length - 1].join(' ')}`)
  //       console.log(JSON.stringify(result.killMonsterStats, null, 2))
  //     })
  //   }
  //   const sum = sumStats(pstat, ITEMS.monsters, 'stat.killEntity.')
  //   result.killMonster[0] += sum
  //   if (isNewbie) result.killMonster[1] += sum
  //   for (const en of Object.entries(pstat).filter(en => en[0].startsWith('stat.killEntity.') && ITEMS.monsters.includes(en[0].slice('stat.killEntity.'.length)))) {
  //     result.killMonsterStats[en[0].slice('stat.killEntity.'.length)] += en[1]
  //   }
  // }
  //
  // {
  //   if (!result.killedBy) {
  //     result.killedBy = [0, 0]
  //     result.killedByStats = Object.assign({}, ...ITEMS.monsters.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => log('累计被怪物杀死', ...result.killedBy))
  //     logFuncs.push(_ => {
  //       const ens = Object.entries(result.killedByStats).sort((a, b) => a[1] - b[1])
  //       console.log(`- Max: ${ens[ens.length - 1].join(' ')}`)
  //       console.log(JSON.stringify(result.killedByStats, null, 2))
  //     })
  //   }
  //   const sum = sumStats(pstat, ITEMS.monsters, 'stat.entityKilledBy.')
  //   result.killedBy[0] += sum
  //   if (isNewbie) result.killedBy[1] += sum
  //   for (const en of Object.entries(pstat).filter(en => en[0].startsWith('stat.entityKilledBy.') && ITEMS.monsters.includes(en[0].slice('stat.entityKilledBy.'.length)))) {
  //     result.killedByStats[en[0].slice('stat.entityKilledBy.'.length)] += en[1]
  //   }
  // }

  {
    if (!result.useFood) {
      result.useFood = [0, 0]
      logFuncs.push(_ => log('累计使用食物', ...result.useFood))
    }
    const sum = sumStats(pstat, ITEMS.foods, 'stat.useItem.minecraft.')
    result.useFood[0] += sum
    if (isNewbie) result.useFood[1] += sum
  }
}

// console.log(`首位玩家入服时间: ${new Date(firstLogin).toLocaleString()}`)
// console.log(`服务器创建至今: ${data.update - firstLogin}`)
// console.log(`2017 萌新总数: ${newbieCount} (${(newbieCount / data.players.length * 100).toFixed(3)}%)`)
// console.log(`第一位萌新: ${firstNewbie.data.playername} (${firstNewbie.data.names.length})`)
// console.log(`最后一位萌新: ${lastNewbie.data.playername} (${lastNewbie.data.names.length})`)
// console.log(`总计在线时长: ${totalLiveTime} (${secs2time(totalLiveTime)})`)
// console.log(`累计开采方块: ${totalMineBlock} (${(newbieMineBlock / totalMineBlock * 100).toFixed(2)}%)`)
// console.log(`累计铺设铁路: ${useRailCount} (${(useRailNewbie / useRailCount * 100).toFixed(2)}%)`)
// log('累计飞行', aviateCount / 100, aviateNewbie / 100)
// log('累计行走', walkCount / 100, walkNewbie / 100)
// log('累计行驶矿车', ...result.minecart.map(n => n / 100))
// log('累计划船', ...result.boat.map(n => n / 100))

for (const func of logFuncs) {
  func()
}

function secs2time(secs) {
  const days = Math.floor(secs / 86400)
  secs = secs % 86400
  const hours = Math.floor(secs / 3600)
  secs = secs % 3600
  const minutes = Math.floor(secs / 60)
  secs = secs % 60
  return `${days}:${hours}:${minutes}:${secs}`
}

function sumStats(stat, names, prefix) {
  return Object.entries(stat).filter(en => names.includes(en[0].slice(prefix.length))).reduce((acc, en) => acc + en[1], 0)
}

function subStats(stat, names, prefix) {
  return Object.assign({}, ...Object.entries(stat).filter(en => names.includes(en[0].slice(prefix.length))).map(en => ({[en[0]]: en[1]})))
}

function log(title, total, newbie) {
  console.log(`${title}: ${total} (${(newbie / total * 100).toFixed(2)}%)`)
}

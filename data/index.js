const ITEMS = require('./items.json')
const data = require('./20180101.json')

// console.log(`玩家总数: ${data.players.length}`)
// console.log(`数据更新时间: ${new Date(data.update).toLocaleString()}`)
// console.log(`服务器运行时间: ${data.world_lived}`)

let firstLogin = Date.now()
let newbieCount = 0
let firstNewbie = {data: {time_start: Date.now()}}
let lastNewbie = {data: {time_start: 0}}

const result = {}
const logFuncs = []

for (const p of data.players) {
  const pstat = p.stats
  const pdata = p.data
  const isNewbie = pdata.time_start >= new Date('2017-01-01 00:00:00 +0800') && pdata.time_start < new Date('2018-01-01 00:00:00 +0800')

  // if (pdata.time_start < firstLogin) firstLogin = pdata.time_start
  // if (isNewbie) newbieCount++
  // if (pdata.time_start < firstNewbie.data.time_start) firstNewbie = p
  // if (pdata.time_start > lastNewbie.data.time_start) lastNewbie = p

  // {
  //   const title = '累计在线时间'
  //   if (!result.lived) {
  //     result.lived = [0, 0]
  //     logFuncs.push(_ => console.log(`${title}: ${secs2time(result.lived[0])}`))
  //     result.deaths = 0
  //     logFuncs.push(_ => console.log(`累计死亡次数: ${result.deaths}`))
  //     logFuncs.push(_ => console.log(`平均存活时间: ${secs2time(result.lived[0] / result.deaths)}`))
  //   }
  //   result.lived[0] += pdata.time_lived
  //   result.deaths += pstat['stat.deaths'] || 0
  // }

  // {
  //   const title = '累计开采方块'
  //   if (!result.mineBlock) {
  //     result.mineBlock = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.mineBlock))
  //   }
  //   const sum = sumStats(pstat, ITEMS.mineBlocks, 'stat.mineBlock.minecraft.')
  //   result.mineBlock[0] += sum
  //   if (isNewbie) result.mineBlock[1] += sum
  // }

  // {
  //   const title = '累计使用铁轨'
  //   if (!result.useRail) {
  //     result.useRail = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.useRail))
  //   }
  //   const sum = sumStats(pstat, ITEMS.rails, 'stat.useItem.minecraft.') - sumStats(pstat, ITEMS.rails, 'stat.mineBlock.minecraft.')
  //   result.useRail[0] += sum
  //   if (isNewbie) result.useRail[1] += sum
  // }

  // {
  //   const title = '累计飞行'
  //   if (!result.aviate) {
  //     result.aviate = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.aviate.map(n => n / 100)))
  //   }
  //   const aviate = sumStats(pstat, ['aviateOneCm'], 'stat.')
  //   result.aviate[0] += aviate
  //   if (isNewbie) result.aviate[1] += aviate
  // }

  // {
  //   const title = '累计行走'
  //   if (!result.walk) {
  //     result.walk = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.walk.map(n => n / 100)))
  //   }
  //   const walk = sumStats(pstat, ['walkOneCm', 'sprintOneCm'], 'stat.')
  //   result.walk[0] += walk
  //   if (isNewbie) result.walk[1] += walk
  // }

  // {
  //   const title = '累计行驶矿车'
  //   if (!result.minecart) {
  //     result.minecart = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.minecart.map(n => n / 100)))
  //   }
  //   const minecart = sumStats(pstat, ['minecartOneCm'], 'stat.')
  //   result.minecart[0] += minecart
  //   if (isNewbie) result.minecart[1] += minecart
  // }

  // {
  //   const title = '累计划船'
  //   if (!result.boat) {
  //     result.boat = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.boat.map(n => n / 100)))
  //   }
  //   const boat = sumStats(pstat, ['boatOneCm'], 'stat.')
  //   result.boat[0] += boat
  //   if (isNewbie) result.boat[1] += boat
  // }

  // {
  //   const title = '累计骑马'
  //   if (!result.horse) {
  //     result.horse = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.horse.map(n => n / 100)))
  //   }
  //   const sum = sumStats(pstat, ['horseOneCm'], 'stat.')
  //   result.horse[0] += sum
  //   if (isNewbie) result.horse[1] += sum
  // }

  // {
  //   const title = '累计杀兔子'
  //   if (!result.killRabbit) {
  //     result.killRabbit = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.killRabbit))
  //   }
  //   const killRabbit = sumStats(pstat, ['Rabbit'], 'stat.killEntity.')
  //   result.killRabbit[0] += killRabbit
  //   if (pdata.time_start >= 1487302941632) result.killRabbit[1] += killRabbit
  // }

  // {
  //   const title = '累计杀怪物'
  //   if (!result.killMonster) {
  //     result.killMonster = [0, 0]
  //     result.killMonsterStats = Object.assign({}, ...ITEMS.monsters.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => log(title, ...result.killMonster))
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

  // {
  //   const tile = '累计被怪物杀死'
  //   if (!result.killedBy) {
  //     result.killedBy = [0, 0]
  //     result.killedByStats = Object.assign({}, ...ITEMS.monsters.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => log(title, ...result.killedBy))
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

  // {
  //   const title = '累计饮食'
  //   if (!result.useFood) {
  //     result.useFood = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.useFood))
  //     result.useFoodStats = Object.assign({}, ...ITEMS.foods.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => {
  //       const ens = Object.entries(result.useFoodStats).sort((a, b) => b[1] - a[1])
  //       console.log(`- Max: ${ens[0].join(' ')}`)
  //       // console.log(ens.map(en => `    ${en.join(' ')}`).join('\n'))
  //     })
  //   }
  //   const sum = sumStats(pstat, ITEMS.foods, 'stat.useItem.minecraft.', result.useFoodStats)
  //   result.useFood[0] += sum
  //   if (isNewbie) result.useFood[1] += sum
  // }

  // {
  //   const title = '累计合成'
  //   if (!result.craft) {
  //     result.craft = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.craft))
  //     result.craftStats = {}
  //     logFuncs.push(_ => {
  //       const ens = Object.entries(result.craftStats).sort((a, b) => b[1] - a[1])
  //       console.log(`- Max: ${ens[0].join(' ')}`)
  //     })
  //   }
  //   const sum = Object.entries(pstat).filter(en => en[0].includes('stat.craftItem.')).reduce((acc, en) => {
  //     result.craftStats[en[0]] = (result.craftStats[en[0]] || 0) + en[1]
  //     return acc + en[1]
  //   }, 0)
  //   result.craft[0] += sum
  //   if (isNewbie) result.craft[1] += sum
  // }

  // {
  //   const title = '累计使用方块'
  //   if (!result.useBlock) {
  //     result.useBlock = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.useBlock))
  //     result.useBlockStats = Object.assign({}, ...ITEMS.mineBlocks.map(k => ({[k]: 0})))
  //     logFuncs.push(_ => {
  //       const ens = Object.entries(result.useBlockStats).sort((a, b) => b[1] - a[1])
  //       console.log(`- Max: ${ens[0].join(' ')}`)
  //       console.log(ens.map(en => `    ${en.join(' ')}`).join('\n'))
  //     })
  //   }
  //   const sum = sumStats(pstat, ITEMS.mineBlocks, 'stat.useItem.minecraft.', result.useBlockStats)
  //   result.useBlock[0] += sum
  //   if (isNewbie) result.useBlock[1] += sum
  // }

  // {
  //   const title = '累计繁殖动物'
  //   if (!result.bred) {
  //     result.bred = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.bred))
  //   }
  //   const sum = sumStats(pstat, ['stat.animalsBred'], '')
  //   result.bred[0] += sum
  //   if (isNewbie) result.bred[1] += sum
  // }

  // {
  //   const title = '累计附魔物品'
  //   if (!result.enchant) {
  //     result.enchant = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.enchant))
  //   }
  //   const sum = sumStats(pstat, ['stat.itemEnchanted'], '')
  //   result.enchant[0] += sum
  //   if (isNewbie) result.enchant[1] += sum
  // }

  // {
  //   const title = '累计钓到鱼'
  //   if (!result.fishCaught) {
  //     result.fishCaught = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.fishCaught))
  //   }
  //   const sum = sumStats(pstat, ['stat.fishCaught'], '')
  //   result.fishCaught[0] += sum
  //   if (isNewbie) result.fishCaught[1] += sum
  // }

  // {
  //   const title = '累计开箱'
  //   if (!result.chestOpened) {
  //     result.chestOpened = [0, 0]
  //     logFuncs.push(_ => log(title, ...result.chestOpened))
  //   }
  //   const sum = sumStats(pstat, ['stat.chestOpened'], '')
  //   result.chestOpened[0] += sum
  //   if (isNewbie) result.chestOpened[1] += sum
  // }

  {
    const title = '累计击杀玩家'
    if (!result.playerKills) {
      result.playerKills = [0, 0]
      logFuncs.push(_ => log(title, ...result.playerKills))
    }
    const sum = sumStats(pstat, ['stat.playerKills'], '')
    result.playerKills[0] += sum
    if (isNewbie) result.playerKills[1] += sum
  }
}

// console.log(`首位玩家入服时间: ${new Date(firstLogin).toLocaleString()}`)
// console.log(`服务器创建至今: ${data.update - firstLogin}`)
// console.log(`2017 萌新总数: ${newbieCount} (${(newbieCount / data.players.length * 100).toFixed(3)}%)`)
// console.log(`第一位萌新: ${firstNewbie.data.playername} (${firstNewbie.data.names.length})`)
// console.log(`最后一位萌新: ${lastNewbie.data.playername} (${lastNewbie.data.names.length})`)

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

function sumStats(stat, names, prefix, subStats) {
  return Object.entries(stat).filter(en => names.includes(en[0].slice(prefix.length))).reduce((acc, en) => {
    if (subStats) subStats[en[0].slice(prefix.length)] += en[1]
    return acc + en[1]
  }, 0)
}

function log(title, total, newbie) {
  console.log(`${title}: ${total} (${(newbie / total * 100).toFixed(2)}%)`)
}

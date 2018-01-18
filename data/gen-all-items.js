const fs = require('fs')

const data = require('./20180101.json')

const items = new Set()

for (const p of data.players) {
  const names = Object.keys(p.stats).filter(k => k.includes('mineBlock')).map(k => k.slice('stat.mineBlock.'.length))
  if (names.length) items.add(...names)
}

fs.writeFileSync('./items.json', JSON.stringify(Array.from(items), null, 2), 'utf-8')
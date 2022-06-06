var input = require('fs').readFileSync('./CASES_MODULO_ZERO/3343_attackOnGasparini/stdin', 'utf8');
var lines = input.split('\n');

const [_titans, fortressLife] = lines[0].split(' ');
const fortressMonsters = Array.from(lines[1]);
const [damageP, damageM, damageG] = lines[2].split(' ');
let countDamage = 0;

const monsterDict = {
  'P': Number(damageP),
  'M': Number(damageM),
  'G': Number(damageG)
};

fortressMonsters.forEach(index => countDamage += monsterDict[index]);
const walls = Math.ceil(countDamage / fortressLife);

console.log(walls);


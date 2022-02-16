var segtotal = 556
var hora = parseInt(segtotal / 3600)
segtotal = segtotal % 3600

var minuto = parseInt(segtotal / 60)
segtotal = segtotal % 60

console.log(`${hora}:${minuto}:${segtotal}`)

const Suspect = require('./suspects')
const Alibi = require('./alibis')
const Guest = require('./guests')

Alibi.hasMany(Suspect)
Suspect.belongsTo(Alibi)

Suspect.hasOne(Guest)
Guest.belongsTo(Suspect)

Guest.belongsTo(Guest, {as: 'date'})

module.exports = {
  Suspect,
  Alibi,
  Guest
}

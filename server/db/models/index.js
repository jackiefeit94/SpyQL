const Suspect = require('./suspects')
const Alibi = require('./alibis')
const Guest = require('./guests')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Suspect.hasOne(Alibi)
Alibi.belongsTo(Suspect)

Suspect.hasOne(Guest)
Guest.belongsTo(Suspect)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Suspect,
  Alibi,
  Guest
}

const router = require('koa-router')()

const users = require('./users')
const address = require('./address')
const shop = require('./shop')
const order = require('./order')
router.use(users.routes(), users.allowedMethods())
router.use(address.routes(),address.allowedMethods())
router.use(shop.routes(),shop.allowedMethods())
router.use(order.routes(),order.allowedMethods())
module.exports = router

/**
 * @description order route
 * @author 刘永奇
 */

const router = require('koa-router')()
const {SuccessModel,ErrorModel} = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')
const {createOrder,getOrderList} = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/',loginCheck,async function(ctx,next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body
  // console.log(username);
  try{
    const newOrder = await createOrder(username,data)
    ctx.body = new SuccessModel(newOrder)
  }catch(err){
    ctx.body = new ErrorModel(1000,`创建订单失败${err}`)
  }
})

//获取某一商店订单列表
router.get('/',loginCheck,async(ctx,next)=>{
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const orderList = await getOrderList(username)

  ctx.body = new SuccessModel(orderList)
  
})


module.exports = router





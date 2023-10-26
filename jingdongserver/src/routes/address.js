/**
 * @description address route
 * @author 刘永奇
 */

const router = require('koa-router')()
const {SuccessModel,ErrorModel} = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')
const { createAddress,getAllAddress,getOneAddress,updateAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/',loginCheck,async function(ctx,next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body

  try{
    const newAddress = await createAddress(username,data)
    ctx.body = new SuccessModel(newAddress)
  }catch(err){
    console.log(err);
    ctx.body = new ErrorModel(1004,`创建收货地址失败`)
  }
})
// 获取收获地址列表
router.get('/',loginCheck,async function(ctx,next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  try{
    const addressList = await getAllAddress(username)
    ctx.body = new SuccessModel(addressList)
  }catch(err){
    ctx.body = new ErrorModel(1005,'获取地址失败')
  }

})

// 获取单个收货地址
router.get('/:id',loginCheck,async function(ctx,next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const id = ctx.params.id
  try{
    const address = await getOneAddress(username,id)
    ctx.body = new SuccessModel(address)
  }catch(err){
    ctx.body = new ErrorModel(1006,'获取当前地址失败')
  }

})

// 更新收货地址
router.post('/:id',loginCheck,async function(ctx,next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const id = ctx.params.id
  const data = ctx.request.body
  try{
    const newAddress = await updateAddress(username,id,data)
    ctx.body = new SuccessModel(newAddress)
  }catch(err){
    ctx.body = new ErrorModel(1007,'更新当前地址失败')
  }
})

module.exports = router
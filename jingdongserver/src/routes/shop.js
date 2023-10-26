/**
 * @description shop router
 * @author 刘永奇
 */

const { SuccessModel,ErrorModel } = require('../res-model')
const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const {getHotList,getShopInfo,getProductsByShopId} = require('../controller/shop')

router.prefix('/api/shop')

// 获取附件店铺
router.get('/hot-list',async function(ctx,next){
  try{
    const hotList = await getHotList()
    ctx.body = new SuccessModel(hotList)
  }catch(err){
    ctx.body = new ErrorModel(1007,`获取店铺信息失败${err}`)
  }
})

// 获取商店详情
router.get('/:id',async function(ctx,next){
  // 获取参数id
  const id = ctx.params.id
  try{
    const shopInfo = await getShopInfo(id)
    ctx.body = new SuccessModel(shopInfo)
  }catch(err){
    ctx.body = new ErrorModel(1008,'获取店铺详情失败')
  }
})

// 获取商店商品信息
router.get('/:id/products',async function(ctx,next){
  const shopId = ctx.params.id
  const tab = ctx.query.tab || 'all'
  try{
    const products = await getProductsByShopId(shopId,tab)
    ctx.body = new SuccessModel(products)
  }catch(err){
    ctx.body = new ErrorModel(1009,"获取商店商品信息出错")
  }
})

module.exports = router

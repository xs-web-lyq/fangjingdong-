/**
 * @description 附近店铺
 * @author 刘永奇
 */

const Shop = require('../models/Shop')
const Products = require('../models/Products')

/**
 * 获取附近店铺信息
 * @returns 店铺信息列表
 */
async function getHotList(){
  const hotList = await Shop.find()
  return hotList
}
/**
 * 获取商店详情
 * @param {String} id 商店id
 * @returns 商店详情
 */
async function getShopInfo(id){
  const shopInfo = await Shop.findById(id)
  return shopInfo
}

/**
 * 根据商店获取商品
 * @param {*} shopId 商店id
 * @param {*} tab tab 分类
 * @returns 
 */
async function getProductsByShopId(shopId,tab='all'){
  const list = await Products.find({
    shopId,
    tabs:{
      $in:tab
    }
  }).sort({_id:-1})
  return list
}

module.exports = {getHotList,getShopInfo,getProductsByShopId}


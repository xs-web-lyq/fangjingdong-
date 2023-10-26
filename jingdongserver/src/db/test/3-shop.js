/**
 * @description 商店数据操作
 * @author 刘永奇
 */

const Shop = require('../../models/Shop')

!(async()=>{
  // 创建两个商店
  // await Shop.create({
  //   name:'沃尔玛',
  //   imgUrl:'/images/shop/wmt.jpeg',
  //   sales:10000,
  //   expressLimit:0,
  //   expressPrice:5,
  //   slogan:'VIP 尊享满89元减 4 元优惠券'
  // })
  // await Shop.create({
  //   name:'山脉会员商店',
  //   imgUrl:'/images/shop/sam.jpeg',
  //   sales:2000,
  //   expressLimit:0,
  //   expressPrice:5,
  //   slogan:'联合利华洗护满十减五'
  // })

  // 附近商店
  // const shopList = await Shop.find().sort({_id:-1})
  // console.log(shopList);

  // 更新商店
  const shop = {
    name:'山姆会员商店',
    imgUrl:'/images/shop/sam.jpeg',
    sales:2000,
    expressLimit:0,
    expressPrice:5,
    slogan:'联合利华洗护满十减五'
  }
  const id = '653534ddab245f2340028e97'
  const newshop = await Shop.findByIdAndUpdate(
    {_id:id},
    shop,
    {
      new:true
    }
  )
    console.log(newshop);
  // 获取商店详情
  // const id = '653534ddab245f2340028e94'
  // const shop = await Shop.findById(id)
  // console.log(shop);
})()
/**
 * @description 创建商品
 * @author 刘永奇
 */

const Products = require('../../models/Products')

!(async()=>{
  await Products.create({
    shopId:'653534ddab245f2340028e97',
    name:'葡萄',
    imgUrl:'http://localhost:3000/images/product/apple.jpeg',
    sales:110,
    price:32.6,
    oldPrice:40.6,
    tabs:['all','fruit']
  })
  await Products.create({
    shopId:'653534ddab245f2340028e97',
    name:'桃子',
    imgUrl:'http://localhost:3000/images/product/peach.jpeg',
    sales:50,
    price:16,
    oldPrice:19,
    tabs:['all','seckill','fruit']
  })

  // // 更新
  // await Products.findByIdAndUpdate(
  //   {_id:'6535d76b37414429585ad88f'},
  //   {
  //     shopId:'653534ddab245f2340028e94',
  //     name:'葡萄',
  //     imgUrl:'/images/product/grape.jpeg',
  //     sales:10,
  //     price:33.6,
  //     oldPrice:43.6,
  //     tabs:['all','seckill','fruit']
  //   }
  // )
  const list = await Products.find({
    shopId:'653534ddab245f2340028e94',
    tabs:{
      $in:'abc'
    }
  })
  console.log(list);
})()
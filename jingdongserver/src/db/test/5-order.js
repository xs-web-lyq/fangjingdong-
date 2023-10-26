/**
 * @description 订单数据操作
 * @author 刘永奇
 */
const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Products = require('../../models/Products')

!(async()=>{


  // 常见订单
  const requestBody = {
    addressId:'65352de32747d9722036187c',
    shopId:'653534ddab245f2340028e94',
    shopName:'沃尔玛',
    isCanceled:false, //订单支付状态
    products:[
      {
        id:'6535d76b37414429585ad88f',
        num:3 //购买数量
      },
      {
        id:'6535d8e2b8375159d4b23846',
        num:5 //购买数量
      }
  
    ]
  }
  // 获取address
  const address = await Address.findById(requestBody.addressId)

  // 获取商品id
  const pIds = requestBody.products.map(p=>p.id)
  // 获取商品信息
  const productList = await Products.find({
    shopId:requestBody.shopId,
    _id:{
      $in:pIds
    }
  })

  // 整合订单购买数量
  const productListWidthSales = productList.map(p=>{
    // 商品id
    const id = p._id.toString()

    // 找到商品的购买数量
    const filterProducts = requestBody.products.filter(item => item.id == id)
    if(filterProducts.length == 0){
      throw Error('未找到匹配的销量数据')

    }
    return {
      product:p,
      num:filterProducts[0].num
    }
  })
  
   // 创建订单
   await Order.create({
    username:'zhangsan',
    shopId:requestBody.shopId,
    shopName:requestBody.shopName,
    isCanceled:requestBody.isCanceled,
    address,
    products:productListWidthSales
  })

})()
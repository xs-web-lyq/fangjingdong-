/**
 * @description 地址数据操作
 * @author 刘永奇
 */


const Address = require('../../models/Address')

!(async()=>{
 
  await Address.create({
    username:'liuyongqi', //用户关联
    city:'周口市',
    department:'鹿邑县',
    houseNumber:'门牌号113',
    name:'刘永奇',
    phone:'18677778887'
  })

  // 获取收获地址列表(获取zhangsan 的地址)

  // const addressList = await Address.find({username:'zhangsan'}).sort({time})

  // 通过Id查找地址
  // const addr = await Address.findById('65352de32747d9722036187c')
  // console.log(addr);


  // // 更新收货地址
  // const id = '65352de32747d9722036187c'
  // const newAddr = {
  //   username:'zhangsan',
  //   city:'北京市',
  //   department:'yyy小区A',
  //   houseNumber:'门牌号2A',
  //   name:'张三A',
  //   phone:'1583852852'
  // }
  // const address = await Address.findByIdAndUpdate(
  //   {_id:id,username:'zhangsan'},
  //   newAddr,
  //   {
  //     new:true //返回更新之后的最新数据（默认说false）
  //   }
  // )
  // console.log(address);
})()
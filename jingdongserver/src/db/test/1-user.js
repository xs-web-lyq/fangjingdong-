/**
 * @description 用户数据操作
 * @author 刘永奇
 */

const User = require('../../models/User')
!(async()=>{
  // 注册：创建一个新的用户
  // await User.create({
  //   username:'zhangsan',
  //   password:'123'
  // })
  await User.create({
    username:'wangwu',
    password:'1234'
  })

  // 登录： 查询单个用户
  // const zhangsan = await User.findOne({
  //   username:'zhangsan',
  //   password:'all',
  // })
  // console.log('zhangsan',zhangsan);
})()
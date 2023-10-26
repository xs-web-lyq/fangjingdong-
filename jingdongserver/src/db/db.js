/**
 * @description mongoose 连接数据库
 * @author 刘永奇
 */
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' // 本地默认的mongodb服务地址
const dbName = 'testdb' //数据库名称

// 配置
mongoose.set('useCreateIndex',true)
mongoose.set('useFindAndModify',false)

// 开始连接
mongoose.connect(`${url}/${dbName}`,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log('mongoose 连接成功');
}).catch((err)=>{
  console.log('mongoose connect error',err);
})

// 连接对象
// const db = mongoose.connection

// db.on('error',(err)=>{
//   console.log('mongoose connect error',err);
// })

// db.once('open',()=>{
//   console.log('mongoose 连接成功');
// })

module.exports = mongoose
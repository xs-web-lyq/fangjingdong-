const router = require('koa-router')()
const {register,login}  = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../res-model/index')

// 本文件加处理的路由公共路由片段
router.prefix('/api/user')

router.post('/register',async(ctx,next)=>{
  const {username,password} = ctx.request.body
  try{
    const newUser = await register(username,password)
    // ctx.body = {
    //   errno:0,
    //   data:newUser //多返回信息，防止前端需要编导那个以后修改代码
    // }
    // 将返回信息封装到SuccessModel中提升代码复用性
    ctx.body = new SuccessModel(newUser)
  }catch(err){
    // ctx.body={
    //   errno:1001,
    //   message:`注册失败-${err.message}`
    // }
    ctx.body = new ErrorModel(101,`注册失败-${err.message}`)
  }

})

router.post('/login',async(ctx,next)=>{
  const {username,password} = ctx.request.body
  const res = await login(username,password)
  if(res){
    //登录成功
    ctx.session.userInfo  = { username } // 设置session
    ctx.body = new SuccessModel()

  }else{
    //登录失败

    ctx.body = new ErrorModel(1002,'登录验证失败')
  }
})

module.exports = router

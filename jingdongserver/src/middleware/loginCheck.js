/**
 * @description 登录验证中间件
 * @author 刘永奇
 */

const {ErrorModel} = require('../res-model/index')

// 进行登录校验，查看服务端是否存有session.userInfo信息，以确保已登录
module.exports = async(ctx,next)=>{
    const session = ctx.session
    if(session && session.userInfo){
      await next()
      return
    }else{
      // ctx.body = {
      //   errno:-1,
      //   message:'登录验证失败'
      // }
      ctx.body = new ErrorModel(1003,'登录验证失败')
    }
}
 

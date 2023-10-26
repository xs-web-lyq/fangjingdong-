/**
 * @description 错误返回的数据模型
 * @author 刘永奇
 */

class ErrorModel{
  constructor(errno = -1,message = "error"){
    this.errno = errno
    this.message = message
  }

}

module.exports =  ErrorModel

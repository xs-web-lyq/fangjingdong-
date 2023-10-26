/**
 * @description 成功返回的数据模型
 * @author 刘永奇
 */

class SuccessModel {
  constructor(data){
    this.errno = 0 // 成功返回的数据类型
    if(data != null){
      this.data = data
    }
  }
}

module.exports = SuccessModel

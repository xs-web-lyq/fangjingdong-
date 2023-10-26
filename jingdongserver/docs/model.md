# 数据模型设计

列举各个模型的示例，写明属性


## 用户
```js
{
  _id:1,
  name:'1593674585', //唯一
  password:''
}
```

## 地址
```js
{
  _id:1,
  username:'1593674585',
  city:'北京',
  department:'小区名',
  houseNumber:'门牌号',
  name:'张三',
  phone:'1546658555'
}
```

## 商店


```js
{
  _id:1,
  name:'沃尔玛',
  imgUrl:'png',
  sales:10000,
  expressLimit:0,
  expressPrice:5,
  solgan:'红色标语'
}
```

## 商品
```js
{
  _id:1,
  shopId:1
  name:'番茄',
  imgUrl:'xxx.png',
  sales:10,
  price:33.6,
  orderPrice:40.3,
  tabs:['all','seckill']
}
```

## 订单

```js
{
  _id:'',
  shopId:'商店id',
  shopName:'沃尔玛',
  isCanceled:false, // 订单是否取消
  
  address:{
    "username":'zhangsan',
    "city":"北京市",
    "department":'小区名',
    "houseNumber":'门牌号',
    "name":'张三',
    "phone":'1546658555'
  },
  products:[
    {
      product:{
        "name":'番茄',
        "shopId":'.....'
        "imgUrl":'xxx.png',
        "sales":10,
        "price":33.6,
        "orderPrice":40.3,
        "tabs":['all','seckill']
      },
      orderSales:3
    }
  ]
}
```
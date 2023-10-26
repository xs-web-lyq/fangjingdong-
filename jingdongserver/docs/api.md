# 接口模板

## 标题
### url
### method

### request body
```js
{

}
```

### response body
```js
{

}
```

## 注册
### url
`/api/user/register`

### method
`post`

### request body
```js
{
  username:'1865255236',
  password:'dlsjf',
}
```

### response body
```js
{
  errno:0,
  message:'errno !== 0 时 的错误信息'
}
```

## 获取用户信息
### url
`/api/user/info`

### method
`get`

### request body
无

### response body
```js
{
  errno:0,
  data:{
    username:'',
    password:''
  }
  message:'errno !== 0 时 的错误信息'
}
```


## 收货地址
### url
`/api/user/address`

### method
`post`

### request body
```js
{
  city:'北京',
  department:"..小区",
  houseNmuber:"门牌号",
  name:"张三",
  phone:'1552554455'
}
```

### response body
```js
{
  errno:0,
  data:{
    _id:"收货地址id",
    city:'北京',
    department:"..小区",
    houseNmuber:"门牌号",
    name:"张三",
    phone:'1552554455',
    createAt:Date,
    updatedAt:Date,
  },
  message:'errno !== 0 时 的错误信息',
}
```



## 获取单个收货地址
### url
`/api/user/address:id`

### method
`get`

### request body

无

### response body
```js
{
  errno:0,
  data:{
    _id:"收货地址id",
    city:'北京',
    department:"..小区",
    houseNmuber:"门牌号",
    name:"张三",
    phone:'1552554455',
    createAt:Date,
    updatedAt:Date,
  },
  message:'errno !== 0 时 的错误信息',
}
```




## 获取收货地址列表
### url
`/api/user/address`

### method
`get`

### request body
无

### response body
```js
{
  errno:0,
  data:[
    {
      _id:"收货地址id",
      city:'北京',
      department:"..小区",
      houseNmuber:"门牌号",
      name:"张三",
      phone:'1552554455',
      createAt:Date,
      updatedAt:Date,
    },
        {
      _id:"收货地址id",
      city:'北京',
      department:"..小区",
      houseNmuber:"门牌号",
      name:"张三",
      phone:'1552554455',
      createAt:Date,
      updatedAt:Date,
    },
  ]

  message:'errno !== 0 时 的错误信息',
}
```


## 更新收货地址
### url
`/api/user/address:id`

### method
`patch`

### request body
```js
{
  city:'北京',
  department:"..小区",
  houseNmuber:"门牌号",
  name:"张三",
  phone:'1552554455',
}
```

### response body
```js
{
  errno:0,

  message:'errno !== 0 时 的错误信息',
}
```


## 登录
### url
`/api/user/login`

### method
`post`

### request body
```js
{
  username:'1865255236',
  password:'dlsjf',
}
```

### response body
```js
{
  errno:0,
  message:'errno !== 0 时 的错误信息',
}
```



## 附近商店列表
### url
`/api/shop/hot-list`

### method
`get`

### request body
```js
无
```

### response body
```js
{
  errno:0,
  data:[
    {
      _id:'店铺id',
      imgUrl:"http",
      name:'沃尔玛',
      sales:10000,
      expressLimit:0, //起售价格,
      exprerssPrice:5, //快递价格
      slogen:'VIP 尊享满90元减4元运费券'
    }
  ]
  message:'errno !== 0 时 的错误信息',
}
```

## 商店详情
### url
`/api/shop/:id`

### method
`get`

### request body
```js
{
 无
}
```

### response body
```js
{
  errno:0,
  data:{
    _id:'店铺id',
      imgUrl:"http",
      name:'沃尔玛',
      sales:10000,
      expressLimit:0, //起售价格,
      exprerssPrice:5, //快递价格
      slogen:'VIP 尊享满90元减4元运费券'
  }
  message:'errno !== 0 时 的错误信息',
}
```


## 商店商品信息
### url
`/api/shop/:id/products`

### query
`tab=all`
举例 `/api/shop/10/products?tab=all`


### method
`get`

### request body
无

### response body
```js
{
  errno:0,
  data:[
    {
      _id:'商品id',
      name:'番茄250g/份',
      imgUrl:'png',
      sales:10,
      price:33.6,
      oldPrice:43.6,
      tabs:['all','skill','friut']
    }
  ]
  message:'errno !== 0 时 的错误信息',
}
```


## 创建订单
### url
`/api/order`

### method
`post`

### request body
```js
{
  addressId:'收货地址id',
  shopId:'商店的ID',
  shopName:'沃尔玛',
  isCanceled:false, //订单支付状态
  products:[
    {
      id:'商品id',
      num:3 //购买数量
    },
    {
      id:'商品id',
      num:3 //购买数量
    }

  ]
}
 
```

### response body
```js
{
  errno:0,
  data:{
    _id:'订单 id'
  }
  message:'errno !== 0 时 的错误信息',
}
```


## 获取订单
### url
`/api/order`

### method
`get`

### request body
```js
无
 
```

### response body
```js
{
  errno:0,
  data:{
    "errno": 0,
    "data": {
        "isCanceled": false,
        "_id": "65367cd44930972958dc5849",
        "username": "zhangsan",
        "shopId": "653534ddab245f2340028e94",
        "shopName": "沃尔玛",
        "address": {
            "username": "zhangsan",
            "city": "郑州市",
            "department": "天喜广场小区",
            "houseNumber": "门牌号2A",
            "name": "张三",
            "phone": "1552554455"
        },
        "products": [
            {
                "product": {
                    "tabs": [
                        "all",
                        "seckill",
                        "fruit"
                    ],
                    "shopId": "653534ddab245f2340028e94",
                    "name": "葡萄",
                    "imgUrl": "/images/product/grape.jpeg",
                    "sales": 10,
                    "price": 33.6,
                    "oldPrice": 43.6
                },
                "_id": "65367cd44930972958dc584a",
                "orderSales": 3
            },
            {
                "product": {
                    "tabs": [
                        "all",
                        "seckill",
                        "fruit"
                    ],
                    "shopId": "653534ddab245f2340028e94",
                    "name": "西瓜",
                    "imgUrl": "/images/product/watermelon.jpeg",
                    "sales": 200,
                    "price": 10.6,
                    "oldPrice": 20.6
                },
                "_id": "65367cd44930972958dc584b",
                "orderSales": 5
            }
        ],
        "createdAt": "2023-10-23T14:01:56.297Z",
        "updatedAt": "2023-10-23T14:01:56.297Z",
        "__v": 0
    }
  }
  message:'errno !== 0 时 的错误信息',
}
```
const menuData = [
  [
    {
      page: "dashboard",
      title: "概览",
      exact: true,
      icon: "icon-gailan1",
      url: "/service/dashboard"
    },
    {
      page: "operations",
      title: "运营",
      exact: true,
      icon: "icon-hulianwangyingxiao-",
      url: "/service/operations"
    }
  ],
  [
    {
      page: "member",
      title: "用户",
      exact: true,
      icon: "icon-yonghu",
      url: "/service/member"
    }
  ],
  [
    {
      page: "shop-pv",
      title: "数据",
      exact: true,
      icon: "icon-shuju",
      url: "/service/dashboard/shop-pv"
    }
  ],
  [
    {
      page: "prodservice",
      title: "服务",
      exact: true,
      icon: "icon-fuwu",
      url: "/service/prodservice"
    },
    {
      page: "setting",
      title: "设置",
      exact: true,
      icon: "icon-shezhi",
      url: "/service/setting"
    }
  ]
]
const menuChildData = {
  "dashboard": [
    {
      "1000": [
        {
          title: "订单管理",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "1001": [
        {
          title: "订单管理2",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "1002": [
        {
          title: "订单管理3",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ]
    }
  ],
  "member": [
    {
      "2000": [
        {
          title: "订单管理",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "2001": [
        {
          title: "订单管理2",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "2002": [
        {
          title: "订单管理3",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ]
    }
  ],
  "shop-pv": [
    {
      "3000": [
        {
          title: "订单管理",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "3001": [
        {
          title: "订单管理2",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "3002": [
        {
          title: "订单管理3",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ]
    }
  ],
  "prodservice": [
    {
      "4000": [
        {
          title: "订单管理",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "4001": [
        {
          title: "订单管理2",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "4002": [
        {
          title: "订单管理3",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ]
    }
  ],
  "setting": [
    {
      "4000": [
        {
          title: "订单管理",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "4001": [
        {
          title: "订单管理2",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ],
      "4002": [
        {
          title: "订单管理3",
          exact: false,
          icon: "icon-xiala",
          url: "true",
          child: [
            {
              title: "代理商品订单",
              exact: false,
              url: "true",
            },
            {
              title: "售后订单",
              exact: false,
              url: "true",
            },
            {
              title: "我的业绩订单",
              exact: false,
              url: "true",
            },
            {
              title: "业绩下单",
              exact: false,
              url: "true",
            },
          ]
        }
      ]
    }
  ]
}
export {
  menuData,
  menuChildData
}
Page({
  data:{
    postsList: [],
    navList: [
      {
        id: 'all',
        title: '全部'
      },{
        id: 'good',
        title: '精华'
      },{
        id: 'share',
        title: '分享'
      },{
        id: 'ask',
        title: '问答'
      },{
        id: 'job',
        title: '招聘'
      }
    ],
    activeIndex: 0,
    hidden: false
  },
  onTapTag: function(e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // setTimeout (() => {
    //   this.setData ({
    //     hidden: true
    //   })
    // }, 3000)
    var api_url = 'https://cnodejs.org/api/v1/topics';
    api_url += '?tab=all&page=0&limit=10';
    console.log(api_url);
    var that = this;
    wx.request({
      url: api_url,
      method: 'GET',
      success: function (res) {
        console.log();
        that.setData({
          hidden: true,
          postsList: res.data.data
        })
      }
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
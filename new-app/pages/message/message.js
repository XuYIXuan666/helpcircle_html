// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listShow: true,
    inputVal: '',
    articleList: [
      {
        id:'1',
        url:'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital:'丢失的树叶',
        content:'在小湖边捡到的树叶，找失主！'
      },
      {
        id: '2',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '在小湖边捡到的树叶，找失主！'
      },
      {
        id: '3',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '在小湖边捡到的树叶，找失主！'
      },
      {
        id: '4',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '在小湖边捡到的树叶，找失主！'
      },
      {
        id: '5',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '在小湖边捡到的树叶，找失主！'
      },
    ],
    articleLists: [
      {
        id: '1',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '我的树叶丢了，有人找到嘛！'
      },
      {
        id: '2',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '我的树叶丢了，有人找到嘛！'
      },
      {
        id: '3',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '我的树叶丢了，有人找到嘛！'
      },
      {
        id: '4',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '我的树叶丢了，有人找到嘛！'
      },
      {
        id: '5',
        url: 'https://static.dingtalk.com/media/lADPDgQ9qkuRuDDNA1_NA0g_840_863.jpg',
        tital: '丢失的树叶',
        content: '我的树叶丢了，有人找到嘛！'
      },
    ],
    
  },
  search: function () {
    this.getList(this.data.inputVal)
  },
  cancel() {
    this.setData({
      inputVal: ''
    })
    this.getList(this.data.inputVal)
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  find:function(e){
    var that = this;
    let type = e.currentTarget.dataset['type'];
    if (type === '1'){
      that.setData({
        listShow: true
      })
    }else{
      that.setData({
        listShow: false
      })
    }
  },
  getList: function (inputVal) {
    var that = this;
    wx.request({
      url: 'http://47.99.185.55:8081/ques/list',
      method: 'Get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        lostName: inputVal,
        pageSize: 10,
        page: 1
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            forumList: res.data.returnData
          })
        } else {
          console.log('服务器异常');
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList(23)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})
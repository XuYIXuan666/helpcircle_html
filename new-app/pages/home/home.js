// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forumList: [
      {
        id: '1',
        postName: '朱一龙版《盗墓笔记重启》吴邪名字的含义，你们真的知道吗？',
        postDelete:`近日由朱一龙主演的《盗墓笔记重启之极海听雷》即将八月线上首播，细心的网友发现，这版《盗墓笔记》改编网剧竟然有72集，这不就是活脱脱的一部大型电视剧吗？
网友忐忑吐槽“这个夏天凉快了，72集基本可以熬到开学了”
一时间《盗墓笔记》粉丝炸开了锅，三叔刚刚收回版权就是不一样，先来一波粉丝福利！
全球即时战斗玩法,联盟作战!`
      }
    ],
    inputVal: '',
    page: 1,
  },
  search: function(){
    this.getFroumList(this.data.inputVal)
  },
  cancel(){
    this.setData({
      inputVal: ''
    })
    this.getFroumList(this.data.inputVal)
  },
  inputTyping: function(e){
    this.setData({
      inputVal: e.detail.value
    })
  },
  seeDetails: function(e) {
    let openNo = e.currentTarget.dataset['openno'];
    console.log(openNo)
    wx.navigateTo({
      url: '../home/details?openNo=' + openNo
    })
  },
  getFroumList: function (inputVal){
    var that = this;
    wx.request({
      url: 'http://47.99.185.55:8081/post/list',
      method: 'Get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        lostName: inputVal,
        pageSize: 10,
        postName: 1,
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
    var that = this;
    wx.request({
      url: 'http://47.99.185.55:8081/post/list',
      method: 'Get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        lostName: this.data.inputVal,
        pageSize: 10,
        postName: 1,
        page: this.data.page
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            forumList: that.data.forumList.concat(res.data.returnData)
          })
        } else {
          console.log('服务器异常');
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page: this.data.page + 1
    })
    var that = this;
    wx.request({
      url: 'http://47.99.185.55:8081/post/list',
      method: 'Get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        lostName: this.data.inputVal,
        pageSize: 10,
        postName: 1,
        page: this.data.page
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            forumList: that.data.forumList.concat(res.data.returnData)
          })
        } else {
          console.log('服务器异常');
        }
      }
    })
    // this.getForumList(this.data.inputVal, this.data.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
  },
  //事件处理函数
  postArticle: function () {
    wx.navigateTo({
      url: '../user/release'
      // url: '/pages/detail/detail?id=' + entid
    })
  },
  onLoad: function () {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
})

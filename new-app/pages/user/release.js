// pages/user/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleCount: 0, //标题字数
    contentCount: 0, //正文字数
    title: '', //标题内容
    content: '', //正文内容
    images: []
  },

  handleTitleInput(e) {
    const value = e.detail.value
    this.setData({
      title: value,
      titleCount: value.length  //计算已输入的标题字数
    })
  },

  handleContentInput(e) {
    const value = e.detail.value
    this.setData({
      content: value,
      contentCount: value.length  //计算已输入的正文字数
    })
  },

  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        // console.log(123)
        
        this.setData({
          images: this.data.images.concat(res.tempFilePaths)
        })
        // // 限制最多只能留下3张照片
        // this.data.images = images.length <= 3 ? images : images.slice(0, 3)

      }
    })
  },
  removeImage(e) {
    const idx = e.currentTarget.dataset['idx']
    let arr = this.data.images
    arr.splice(idx, 1)
    this.setData({
      images: arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
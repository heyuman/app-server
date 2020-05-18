// pages/video/pages/detailed/detailed.js
var Api = require("../../../utils/Apiurl.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailed: '',
    detaild_loading_show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    console.log(options)
    this.getvideodetailed(options)
  },

  getvideodetailed: function (options){
    /**
     * 获取电影详情
     */
    
    var self = this
    this.setData({
      detailed: []
    })
    wx.request({
      url: Api.url +'video/detailed',
      method: 'POST',
      data: options,
      success: function (response) {
        console.log(response.data)
        if (response.statusCode == 200) {
          self.setData({
            detailed: response.data,
            detaild_loading_show:true
          })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
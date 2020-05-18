// pages/video/pages/actor/actor.js
var Api = require("../../../utils/Apiurl.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actors:'',
    actor_loading_show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.getactors(options)
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

  getactors: function (options){
    /**
     * 获取演员的详细信息
     */
    var self = this
    this.setData({
      actors: []
    })
    wx.request({
      url: Api.url +'video/actor',
      data:options,
      method:'post',
      success: function (response){
        console.log(response.data)
        if (response.statusCode==200){
          self.setData({
            actors: response.data,
            actor_loading_show:true
          })
        }
      }

    })
  }
})
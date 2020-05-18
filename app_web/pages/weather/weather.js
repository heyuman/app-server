// pages/detail/detail.js
var Api = require("../../utils/Apiurl.js")
var app = getApp()
Page({
  /*
    * 页面的初始数据
    */
  data: {
    Locationcity: "",
    citySelected: {},
    current: 0,
    currentSwiper: 0,
    //未来的天气
    FutureWeather: {},
    //实时天气
    RealtimeWeather: {},
    //城市名称
    CityName: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    console.log(that.data.current++)
    app.globalData.SearchName = '深圳'
    var cityname = app.globalData.SearchName
    options = {
      name: cityname
    }
    that.getweathers(options)
  },
  //渲染完成
  onReady: function() {

  },
  onShow: function() {
    this.setData({
      CityName: app.globalData.SearchName
    })
    var that = this
    var cityname = that.data.CityName
    var options = {
      name: cityname
    }
    that.getweathers(options)
  },
  getweathers: function(options) {
    /**
     * 获取演员的详细信息
     */
    var self = this
    this.setData({
      // FutureWeather: [],
      // RealtimeWeather:[]
    })
    wx.request({
      url: Api.url+'weather',
      data: options,
      method: 'post',
      success: function(response) {
        console.log(response)
        if (response.statusCode == 200) {
          var data = response.data
          self.setData({
            FutureWeather: data.days,
            RealtimeWeather: data.realday,
            CityName:data.cityname
          })
          // wx.setNavigationBarTitle({
          //   title: data.cityname + "天气"
          // })
        }
      }

    })
  },
  bindBeginCityView: function() {
    wx.navigateTo({
      url: './searchcity/searchcity',
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad(); 
    wx.showNavigationBarLoading()
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  }
})
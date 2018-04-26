// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winHeight: 500,
    isStatus: 'mycomment', //10添加留言，20我的留言，30精选留言
    commentList: [
      { id: 0, title: "菜品意见", content: "今天的菜啊，要改进！",reply: "请稍等，正在解决" },
      { id: 1, title: "餐具", content: "餐具太脏！", reply: "请稍等，正在解决"},
      { id: 2, title: "餐厅环境", content: "餐厅环境需要改善！", reply: "请稍等，正在解决"}],
    commentList0: [
      { id: 0, title: "菜品意见", content: "今天的菜啊，要改进！", reply: "请稍等，正在解决"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initSystemInfo();
    this.setData({
      currentTab: parseInt(options.currentTab),
      isStatus: options.otype
    });
  },
  //切换函数
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var current = e.target.dataset.current;
      that.setData({
        currentTab: parseInt(current),
        isStatus: e.target.dataset.otype,
      });
    }
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ 
          currentTab: e.detail.current 
    });
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
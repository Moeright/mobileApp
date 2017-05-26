require(['../config'],function () {
  require(['jquery'],function ($) {

    var addHistory = JSON.parse(localStorage.getItem("addHistory"));
    $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:addHistory[0].goodsID},function (data) {
      console.log(data);
      $("img").attr("src",data[0].goodsListImg);
      var str="";
      str+=`
      <p>产品名称：${data[0].goodsName}</p>
      <p>已购人数：${data[0].buynumber}</p>
      <p>产品介绍：${data[0].detail}</p>
      <p>折扣：${data[0].discount}</p>
      <p>产品分类：${data[0].goodsName}</p>
      `
      $('.canshu').html(str);
    })

  });
});

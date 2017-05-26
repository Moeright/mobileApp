require(['../config'],function () {
  require(['jquery'],function ($) {


    var addHistory = JSON.parse(localStorage.getItem("addHistory"));
    var numHistory = localStorage.getItem("numHistory");
    var str="";
    str+=`
    <img src="${addHistory[0].goodsListImg}" alt="" />
    <div class="detIist">
      <p>${addHistory[0].goodsName}</p>
      <p>单价：￥${addHistory[0].price}</p>
      <p>数量：${numHistory}</p>
    </div>
    `
    $('.cart-item').html(str);
  });
});

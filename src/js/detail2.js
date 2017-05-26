require(['../config'],function () {
  require(['jquery'],function ($) {
      var detail = function () {
        var $wrapper = $(".swiper-wrapper");
          var swiper = new Swiper('.swiper-container',{
            pagination:'.my-pagination',
            slidesPerView:3,
            loop:true
        });
        return{
          init : function () {
            this.getData()
          },
          getData:function () {
            var aData = [];
            $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?&goodsID=3",function (data) {
              // console.log(data[0].imgsUrl);
              var aImgs = JSON.parse(data[0].imgsUrl);
              var str = "";
              aData  = data;
              console.log(aData);
              for (var i = 0; i < aImgs.length; i++) {
                str+='<div class="swiper-slide"><img src="'+aImgs[i]+'"></div>'
              }
              $wrapper.html(str);
              swiper.update();
              swiper.reLoop();
              var str1="";
              str1+=`
              <p>${data[0].goodsName}</p>
              <p>￥:${data[0].price}</p>
              <p>折扣：${data[0].discount}</p>
              `;
              $('.desc').html(str1);
              // 添加到购物车
              var num = 0;
                console.log(aData);
              $('.tgou').on("tap",function () {

                  var addHistory = aData;
                  localStorage.setItem("addHistory",JSON.stringify(addHistory));
                  num++;
                  var  numHistory = num;
                  localStorage.setItem("numHistory",JSON.stringify(numHistory));
                  numHistory = localStorage.getItem("numHistory");
                  console.log(numHistory);
              });

                // 添加到购物车
            })
          }
        }
      }();
      detail.init();

  });
});

$('.dxiang').on("tap",function () {
    window.location.href="detail1.html";
});

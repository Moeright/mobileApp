var list = (function() {
    var myScroll = new IScroll('.content');
    var $listContent = $('.listContent');
    var $listNav = $('.list-nav');
    var pageCode = 0;
    var linenumber = 6;
    var classID = 0; //初始ID默认为0
    return {
        init: function() {
            this.getData();
            this.getListData();
            // this.onlist();
            this.bindEvent();
        },
        //获取数据
        getData: function() {
            common.showLoading();
	    var aData = [];
            $.getJSON('http://datainfo.duapp.com/shopdata/getGoods.php?callback=?', { classID: classID, pageCode: pageCode, linenumber: linenumber }, function(data) {
                console.log(data)
		aData = data;
                var str = '';
                for (var i = 0; i < data.length; i++) {
                    str += '<li><img data-id="'+data[i].goodsID+'" src="' + data[i].goodsListImg + ' " alt="' + data[i].goodsName + '" "><p>' + data[i].goodsName + '</p><div><b>￥' + data[i].price + '</b><del>￥' + data[i].price * 2 + '</del></div></li>'

                }
                if (pageCode == 0) {
                    $listContent.html(str);
                } else {
                    $listContent.html($listContent.html() + str + '<li></li>');
                }
                myScroll.refresh();
                common.hideLoading();
            })
	    // 点击事件
            $(document).on("tap",'img',function () {
                var id = $(this).attr("data-id");
                var proData = {};
                for (var i = 0; i < aData.length; i++) {
                  if (aData[i].goodsID == id) {
                    proData = aData[i];
                    break
                  }
                }
                // console.log(proData);
                var proHistory = JSON.parse(localStorage.getItem("proHistory")||'[]');
                for (var i = 0; i < proHistory.length; i++) {
                  if(proHistory[i].goodsID == id){
                  proHistory.splice(i,1);
                  }
                }
                proHistory.unshift(proData);
                localStorage.setItem("proHistory",JSON.stringify(proHistory));
                // window.location.href="detail.html?goodsID"+id;

            });
            // 点击事件
        },

        // 获取分类数据
        getListData: function() {
            $.get('http://datainfo.duapp.com/shopdata/getclass.php', function(data) {
                var data = JSON.parse(data);
                var str = '';
                for (var i = 0; i < data.length; i++) {
                    str += '<li id=' + data[i].classID + '><a href="javascript:;">' + data[i].className + '</a></li>'
                }
                $listNav.html(str);
            })
        },
        //上拉加载
        bindEvent: function() {
            var _this = this;
            $listNav.on('touchend', 'li', function() {
                console.log(this.id)
                classID = this.id;
                pageCode = 0;
                _this.getData();
            })
            myScroll.on('scrollEnd', function() {
                console.log(this.y); //当前值
                console.log(this.maxScrollY) //最大值
                if (this.y == this.maxScrollY) {
                    pageCode++;
                    // console.log(111)
                    _this.getData();
                }
            })
        }
    }

})()
list.init();
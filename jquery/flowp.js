$(window).on('load',function(){
	waterfall();
	 var datas={"data":[{"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"},{"src":"20.jpg"},{"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},
                             {"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"},{"src":"29.jpg"}
                             ]};
    var checkFlag =0;
	$('.load').click(function(){
              if(datas.data.length>0){
                  //if(checkFlag){
						//checkFlag=0;
						//alert('hello');
			           $.each(datas.data,function(i,value){
			              var oBox = $('<div>').addClass('box').appendTo($('#main'));
			              var oPic = $('<div>').addClass('pic').appendTo($(oBox));
			              var oImg = $('<img>').attr('src','image/'+$(value).attr('src')).appendTo($(oPic));
			           });
			       setTimeout(waterfall,300); 
			       // checkFlag=0;
					//}
              }
	    })
})

function waterfall(){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();    //这里的宽度是包括了padding和border，而width()则不包括
	var pagew = $(window).width();
	var col =Math.floor(pagew/w);
	$('#main').width(w*col).css('margin','0 auto');
	var hArr = [];
	$boxs.each(function(i){
		var h = $(this).outerHeight();
       if(i<col){
          hArr.push(h);
		}else{
		  var minH = Math.min.apply(null,hArr);
		  var index = $.inArray(minH,hArr);
		  $(this).css({
           'position':'absolute',
           'top':minH+'px',
           'left':w*index+'px'
		  });
		  hArr[index]+=h;
		}
	});
	var $lastBox = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top+$lastBox.outerHeight();
	$('.load').css('top',lastBoxDis+20+'px');
	$('.load').css('left',Math.floor($(window).width()/2)+'px');
}

//function checkScrollSlide(){
	/*var $lastBox = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var hBrowser = $(window).height();*/
	
//return (lastBoxDis<scrollTop+hBrowser)?true:false;
//}
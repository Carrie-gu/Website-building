$(document).ready(function(){
            
            //index.html
            $('#menu li:has("ul")').click(function(){
                $(this).children('ul').slideToggle();
            });

            var i=0;
            var clone=$('.banner .img li').first().clone();
            $('.banner .img').append(clone);
            var size=$('.banner .img li').size();

            for(var j=0;j<size-1;j++){
                $('.banner .num').append('<li></li>');
            }

            $('.banner .num li').first().addClass('on');

            var t=setInterval(function(){i++;move();},3000);

            $('.banner').hover(function() {
                clearInterval(t);
            },function(){
                t=setInterval(function(){i++;move();},3000);
            });

            $('.banner .num li').hover(function(){
                var index=$(this).index();
                i=index;
                $('.banner .img').stop().animate({left:-800*index},800);
                $(this).addClass('on').siblings().removeClass('on');
            });

            //鼠标滑过banner，左右按钮进行显示和隐藏
            $('.banner').hover(function() {
                $('.lr').show();
            },function(){
                $('.lr').hide();
            });

            $('.banner .pre').click(function(){
                i--;
                move();
            });

            $('.banner .next').click(function(){
                i++;
                move();
            });

            //移动事件
            function move(){
                if(i==size){
                    $('.banner .img').css({left:0});
                    i=1;
                }
                if(i==-1){
                    $('.banner .img').css({left:-(size-1)*800},800);
                    i=size-2;
                }
                $('.banner .img').stop().animate({left:-i*800},800);

                if(i==size-1) {
                    $('.banner .num li').eq(0).addClass('on').siblings().removeClass('on');
                }else{
                    $('.banner .num li').eq(i).addClass('on').siblings().removeClass('on');
                }
            }

            //product.html  产品右下角标动画
            $('.product .product-pic a img').hover(function(){
                $(this).next().stop().animate({right:'0px'},400);
            },function(){
                $(this).next().stop().animate({right:'500px'},400);
            });

            //detail.html 放大镜效果
            $('#etalage').etalage({
                thumb_image_width: 300,
                thumb_image_height: 400,
                source_image_width: 900,
                source_image_height: 1200,
                zoom_area_width: 500,
                zoom_area_height: 500,
            });

            //detail.html 旋转木马
            $("#flexiselDemo1").flexisel({
                visibleItems: 5,
                animationSpeed: 1000,
                autoPlay: true,
                autoPlaySpeed: 3000,
                pauseOnHover: true,
                enableResponsiveBreakpoints: true,
                responsiveBreakpoints: {
                    portrait: {
                        changePoint:480,
                        visibleItems: 1
                    },
                    landscape: {
                        changePoint:640,
                        visibleItems: 2
                    },
                    tablet: {
                        changePoint:768,
                        visibleItems: 3
                    }
                }
            });

        })
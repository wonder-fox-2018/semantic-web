 // event pada saat link di klik
 $('.page-scroll').on('click', function(e){
 	//ambil isi href
 	var tujuan=$(this).attr('href');
 	 	
 	//tangkap elemen yang bersangkutan
 	var elemenTujuan=$(tujuan);
	console.log(elemenTujuan);
	//pindahkan scroll
	//body scrolltop kan ke atas
	//$('html').scrollTop(elemenTujuan.offset().top-'40');
	$('html').animate({
		scrollTop:elemenTujuan.offset().top-50
	},1000,'easeInOutExpo'); //delay nya ms 1 detik
	e.preventDefault();
});

 //tombol navbar-brand ditekan
 $('.navbar .navbar-brand.page-scroll').on('click', function(e){
 	//ambil isi href
 	var tujuan=$(this).attr('href');
 	 	
 	//tangkap elemen yang bersangkutan
 	var elemenTujuan=$(tujuan);
	console.log(elemenTujuan);
	//pindahkan scroll
	//body scrolltop kan ke atas
	//$('html').scrollTop(elemenTujuan.offset().top-'40');
	$('.jumbotron .btn').removeClass('hilang');
	e.preventDefault();
});

//tombol masuk ditekan
 $('.jumbotron .btn').on('click', function(e){
 	//ambil isi href
 	var tujuan=$(this).attr('href');
 	 	
 	//tangkap elemen yang bersangkutan
 	var elemenTujuan=$(tujuan);
	console.log(elemenTujuan);
	//pindahkan scroll
	//body scrolltop kan ke atas
	//$('html').scrollTop(elemenTujuan.offset().top-'40');
	$('.jumbotron .btn').addClass('hilang');
	e.preventDefault();
});



//paralaxx pada saat di scroll
$(window).scroll(function(){
	var wScroll=$(this).scrollTop();
	//mencari nilai pada saat di scroll
	//console.log(wScroll);

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+ wScroll/1.2 +'%)'
	});
	//console.log(wScroll);
	//portfolio
	if(wScroll>$('.portfolio').offset().top-200 && wScroll<$('.contact').offset().top-200){
		//console.log($('.contact').offset().top);
	 	$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});
	 	//$('.portfolio .thumbnail').addClass('muncul');
	 }else{
	 	$('.portfolio .thumbnail').removeClass('muncul');
	 }

});
	

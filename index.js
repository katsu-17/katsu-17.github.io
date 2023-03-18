$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function(){
	// 移動先を56px下にずらす
	var adjust = -56;
	// スクロールの速度
	var speed = 1;
	// アンカーの値取得
	var href= $(this).attr("href");
	// 移動先を取得
	var target = $(href == "#" || href == "" ? 'html' : href);
	// 移動先を調整
	var position = target.offset().top + adjust;
	// スムーススクロール
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
	});
});

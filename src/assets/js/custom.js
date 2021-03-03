$(window).scroll(function() {
    $(window).scrollTop() < 50 ? ($("#rocketmeluncur").slideUp(500),
	$(".navbar.navi").removeClass("fixed-top")) : ($("#rocketmeluncur").slideDown(500),
	$(".navbar.navi").addClass("fixed-top"));
	var e = $("#ft")[0] ? $("#ft")[0] : $(document.body)[0],
	t = $("rocketmeluncur"),
	a = (parseInt(document.documentElement.clientHeight), parseInt(document.body.getBoundingClientRect().top), parseInt(e.clientWidth)),
	n = t.clientWidth;
	if (1e3 > a) {
	  var o = parseInt(fetchOffset(e).left);
	  o = n > o ? 2 * o - n : o, t.style.left = a + o + "px"
	}
}), 
$("#rocketmeluncur, .dot").click(function() {
    $("html, body").animate({
      scrollTop: "0px",
      display: "none"
    }, {
      duration: 600,
      easing: "linear"
    });
    var e = this;
    this.className += " launchrocket", setTimeout(function() {
      e.className = "showrocket"
    }, 800)
})

setTimeout(function(){ 
  $(".sidebar li a").click(function(){
    $(".sidebar li").removeClass("active");
    $(this).parent().addClass("active");
  });
  $("#rocketmeluncur").click(function(){
    $(".sidebar li").removeClass("active");
  });
 }, 300);

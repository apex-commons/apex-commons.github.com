 $(document).ready(function(){
		$(".more-info h4").click(function () {
			var contentdiv = $(this).parent().find(".more-content")
			var h4 = $(this).parent().find("h4")
			h4.toggleClass("compressed expanded")
			if (contentdiv.is(":hidden")) {
				contentdiv.slideDown("50")
			} else {
				contentdiv.slideUp("50")
			}
		})
 });



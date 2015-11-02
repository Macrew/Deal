 jQuery(document).ready(function(){
 	$('body').on("click",'.fb-login',function(){

                FB.login(
                         function(response) {
							jQuery('body').load('deal.html');
                         },
                         { scope: "email" }
                         );
            });
			})
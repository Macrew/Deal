 document.addEventListener('deviceready', function() {
                                      try {
                                   //   alert('Device is ready! Make sure you set your app_id below this alert.');
                                


								FB.init({ appId: "779854598826619", nativeInterface: CDV.FB, useCachedDialogs: false });
                              
                                      } catch (e) {
                                  //  alert(e);
                                      }
                                      }, false);
									  




				$(document).ready(function() {

jQuery( "body" ).on("focus","#username",function(event) {
alert('tett')
 jQuery('.index_pane').css("position","relative");
    event.preventDefault();
     event.stopPropagation();
    jQuery(window).scrollTop(0);
				// });

});


jQuery( "body" ).on("focus","#password",function() {
 jQuery('.index_pane').css("position","relative");
   $('html, body').animate({
        scrollTop: 2000
    }, 'slow');
});
					jQuery('body').load('home.html');
					var height=$( document ).height();
			jQuery('.index_pane').css("height",height);
				function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
				// $( "body" ).on( "click","#username", function(event) {
					// alert('erer'); 
				// if(event.which == 13) {
					// $( "#password" ).focus()
				// }
				// });
				$( "#username" ).on( "keydown", function(event) {
					alert('erer')
				if(event.which == 13) {
					$( "#password" ).focus()
				}
				});



				// jQuery('#deal').hide();
				// jQuery('#create_deal').load('create_deal.html');
            // $("#tabs").tabs({active: document.tabTest.currentTab.value});
				
			$('body').on("click",'.sign_in',function(e){
				if($.trim($( "#username" ).val()) == "") {
					
					alert("Please enter your email")
					$( "#username" ).focus()
					return false;
				} else if($( "#password" ).val() == "") {
					alert("Please enter your password")
					$( "#password" ).focus()
					return false;
				}
				$('body').loadingOverlay();
				 var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
			// e.preventDefault();
			var page=jQuery(this).attr("rel");
			
			$.ajax({
				url:API_URL+'login.php',
				type:'post',
				
				data:{email:jQuery("#username").val(),password:jQuery("#password").val()},
				success:function(data){
				$('body').loadingOverlay('remove');
			if(data.status == "TRUE") {
				
					jQuery("#email").val("")
					jQuery("#password").val("")
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
						
					// setTimeout(function(){ 
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest.currentTab.value = curTabIndex;
					
				 // }, 500);
					} else {
					 alert("Invalid Login credentilas");
					}
				},
				
			});
			
			
			
		});	
				
				
				
				
				
			// $('body').on("click",'.sign_in',function(e){
			// e.preventDefault();
			// var page=jQuery(this).attr("rel");
			// $.ajax({
				// url:'check_sign_user.php',
				// type:'post',
				// data:{hello:'heeello'},
				// success:function(){
					// jQuery('body').html(" ");
					// jQuery('body').load(page+'.html');
					// setTimeout(function(){ 
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest.currentTab.value = curTabIndex;
					
				 // }, 500);
				// },
				
			// });
		// });
		$('body').on("click",'.create-deal',function(e){
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.walkthrough-1',function(e){
			
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.sign-up-up',function(e){
			
		//	alert("hii");
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'#logout',function(e){
			
		//	alert("hii");
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'#signup_submit',function(e){
			  if($( "#sign_name" ).val() == "") {
					alert("Please enter your name")
					$( "#sign_name" ).focus()
					return false;
				}
				else if($.trim($( "#sign_email" ).val()) == "") {
					
					alert("Please enter your email")
					$( "#sign_email" ).focus()
					return false;
				} else if(isEmail($( "#sign_email" ).val()) == "") {
					
					alert("Please enter a valid email")
					$( "#sign_email" ).focus()
					return false;
				} 
				 else if($( "#sign_password" ).val() == "") {
					alert("Please enter your password")
					$( "#sign_password" ).focus()
					return false;
				}
			$('body').loadingOverlay();
			///alert('test')
		$.ajax({
				url:API_URL+'register.php',
				type:'post',
				
				data:{
					email:jQuery("#sign_email").val(),
					password:jQuery("#sign_password").val(),
					user_type:"normal",
					name:jQuery("#sign_name").val()
				},
				success:function(data){
				$('body').loadingOverlay('remove');
			if(data.status == "TRUE") {
				jQuery("#sign_email").val("")
				jQuery("#sign_name").val("")
				jQuery("#sign_password").val("")
				jQuery("#sign_birthday").val("")
					alert("You have successfully signed up. You can now login with your credentilas")
						
					// setTimeout(function(){ 
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest.currentTab.value = curTabIndex;
					
				 // }, 500);
					} else {
						alert(data.message)
					}
				},
				
			});
			
				
		});
		$('body').on("click",'.deal-link',function(e){
		//	alert("hii");
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.profile-link',function(e){
		//	alert("hii");
			var page=jQuery(this).attr("rel");
			
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.mydeals',function(e){
		//	alert("hii");
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.sidebar-menu',function(e){
			//alert("hii");
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
		$('body').on("click",'.settings-link',function(e){
			var page=jQuery(this).attr("rel");
					var curTab = $('.ui-tabs-active');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					
				 }, 500);
				
		});
				
            // $('body').on("click",'#tabs a',function(){
					// var page=jQuery(this).attr("rel");
					// jQuery('body').html(" ");
					// jQuery('body').load(page+'.html');
					// setTimeout(function(){ 
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest.currentTab.value = curTabIndex;
					
				 // }, 500);
					
					
					// jQuery('#tabs').remove();
			// });
			
			
			// jQuery('#deal').on("click",'#tabs2 a',function(){
				// var page=jQuery(this).attr("rel");
					// jQuery('#'+page).load(page+'.html');
					// jQuery('.deal_pane').remove();
					// setTimeout(function(){ 
						
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest2.currentTab2.value = curTabIndex;
					 // }, 500);
					
			// })
			 // $('#tabs2 a').bind("click",function(e) {	
					// alert("hello");
					// var curTab = $('.ui-tabs-active');
					// curTabIndex = curTab.index();
					// document.tabTest2.currentTab2.value = curTabIndex;
			// });
			    
        });
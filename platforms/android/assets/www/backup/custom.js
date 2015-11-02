
        $(document).ready(function() {
				
				// jQuery('#deal').hide();
				// jQuery('#create_deal').load('create_deal.html');
            $("#tabs").tabs({active: document.tabTest.currentTab.value});
				
            $('body').on("click",'#tabs a',function(){
					var page=jQuery(this).attr("rel");
					// jQuery('#'+page).load(page+'.html');
					jQuery('body').html(" ");
					jQuery('body').load(page+'.html');
					// jQuery('.index_pane').remove();
					setTimeout(function(){ 
					var curTab = $('.ui-tabs-active');
					curTabIndex = curTab.index();
					document.tabTest.currentTab.value = curTabIndex;
					// jQuery('.not_in_use').hide();
					// jQuery('#deal').show();
					// jQuery('#deal .not_in_use').show();
				 }, 500);
					
					
					// jQuery('#tabs').remove();
			});
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
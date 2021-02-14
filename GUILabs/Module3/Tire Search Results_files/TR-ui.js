$(document).ready(function(){
	// Left Navigation Open/Close
	$('.expandable').find('.text').on('click',function(e){
		if($(e.target).hasClass('tooltip')) return;
		if($(this).parent('form').parents('.expandable').hasClass('multipleSublist')){
			if($(this).parents('.multipleSublist').hasClass('expanded')){
				$(this).parents('.multipleSublist').find('.subCategory1').slideToggle("slow", function() {
					$(this).parents('.multipleSublist').removeClass('expanded');
				});
			} else {
				$(this).parents('.multipleSublist').addClass('expanded');
				$(this).parents('.multipleSublist').find('.subCategory1').slideToggle("slow", function() {});
			}				
		}else{
			if($(this).parents('.expandable').find('.subCategory').length) {
				if($(this).closest('.expandable').hasClass('expanded')) {
					$(this).closest('.expandable').find('.subCategory').first().slideToggle("slow", function() {
						$(this).closest('.expandable').removeClass('expanded');
					});
				} else {
					$(this).closest('.expandable').addClass('expanded');
					$(this).closest('.expandable').find('.subCategory').first().slideToggle("slow", function() {});
				}
			}
		}
	});
    // Updated Button Left Navigation Open/Close
    $('button.expandable').on('click',function(e){
        if($(this).parents('form').parents('.expandable').hasClass('multipleSublist')){
            if($(this).parents('.multipleSublist').hasClass('expanded')){
                $(this).attr('aria-expanded', false);
                $(this).removeAttr('aria-disabled');
                $(this).parents('.multipleSublist').find('.subCategory1').slideToggle("slow", function() {
                    $(this).parents('.multipleSublist').toggleClass('expanded');
                });
            } else {
                $(this).parents('.multipleSublist').toggleClass('expanded');
                $(this).attr('aria-expanded', true);
                $(this).attr('aria-disabled', true);
                $(this).parents('.multipleSublist').find('.subCategory1').slideToggle("slow", function() {});
            }
        }
        else{
            if($(this).parents('.expandable').find('.filterSubCategory').length) {
                if($(this).parents('.expandable').hasClass('expanded')) {
                    $(this).attr('aria-expanded', false);
                    $(this).removeAttr('aria-disabled');
                    $(this).parents('.expandable').find('.filterSubCategory').first().slideToggle("slow", function() {
                        $(this).parents('.expandable').toggleClass('expanded');
                    });
                } else {
                    $(this).parents('.expandable').toggleClass('expanded');
                    $(this).attr('aria-expanded', true);
                    $(this).attr('aria-disabled', true);
                    $(this).parents('.expandable').find('.filterSubCategory').first().slideToggle("slow", function() {});
                }
            } else if($(this).parents('.expandable').find('.checkboxContainer').children('ul').length) {
                if($(this).parents('.expandable').hasClass('expanded')) {
                    $(this).attr('aria-expanded', false);
                    $(this).removeAttr('aria-disabled');
                    $(this).parents('.expandable').find('.checkboxContainer').children('ul').slideToggle("slow", function() {
                        $(this).parents('.expandable').toggleClass('expanded');
                    });
                } else {
                    $(this).parents('.expandable').toggleClass('expanded');
                    $(this).attr('aria-expanded', true);
                    $(this).attr('aria-disabled', true);
                    $(this).parents('.expandable').find('.checkboxContainer').children('ul').slideToggle("slow", function() {});
                }
            } else if($(this).parents('.expandable').find('.checkboxContainer').children('#priceToggle').length) {
                if($(this).parents('.expandable').hasClass('expanded')) {
                    $(this).attr('aria-expanded', false);
                    $(this).removeAttr('aria-disabled');
                    $(this).parents('.expandable').find('.checkboxContainer').children('#priceToggle').slideToggle("slow", function() {
                        $(this).parents('.expandable').toggleClass('expanded');
                    });
                } else {
                    $(this).parents('.expandable').toggleClass('expanded');
                    $(this).attr('aria-expanded', true);
                    $(this).attr('aria-disabled', true);
                    $(this).parents('.expandable').find('.checkboxContainer').children('#priceToggle').slideToggle("slow", function() {});
                }
            }
        }
        return false;
    });

    $('button.expandableSubCategory').on('click',function(e){
        if($(this).parents('.expandable:first').hasClass('subCategoryLi')){
            if($(this).parents('.expandable:first').hasClass('expanded')){
                $(this).attr('aria-expanded', false);
                $(this).removeAttr('aria-disabled');
                $(this).parents('.expandable:first').children('.checkboxContainer').slideToggle("slow", function() {
                    $(this).parents('.expandable:first').toggleClass('expanded');
                });
            } else {
                $(this).parents('.expandable:first').toggleClass('expanded');
                $(this).attr('aria-expanded', true);
                $(this).attr('aria-disabled', true);
                $(this).parents('.expandable:first').children('.checkboxContainer').slideToggle("slow", function() {});
            }
        }
        return false;
    });

	// Price Slider
	if($('#priceSelected').length>0) var defaultSlidePos  = $('#priceSelected').html().replace(/\D/g,'');
	$("#price_slider").slider({
		min: 0,
		max: 400,
		step:20,
		range: "min",
		value: defaultSlidePos,
		slide: function( event, ui ) {
			$("#priceSelected").html(ui.value);
			if(ui.value=='400') $("#priceSelected").append('+');
		},
		change: function( event, ui ) {
			 $("#priceSelected").html(ui.value);
			 if(ui.value=='400') $("#priceSelected").append('+');
			 $("#sliderValue").val(ui.value);
			 filterPrice();
	       }
	});
	// Tab Slide/Switching
	$('.activeslide').each(function(){
		$(this).css('width',$(this).parents('.TabbedPanels').find('.TabbedPanelsTab.active').outerWidth());
	});
	$('.TabbedPanelsTab').on('click',function(){
		var animateOnly = $(this).parent().hasClass("animateOnly");
		var showTb = $(this).index(), parentId = $(this).parents('.TabbedPanels').attr('id');
		var aslider = $(this).parents('#'+parentId).find('.activeslide')
		if(!animateOnly) {
			$('#'+parentId+' .TabbedPanelsTab').removeClass('active');
			$(this).addClass('active');
			$('#'+parentId+' .TabbedPanelsContent').removeClass('show');
			$('#'+parentId+' .TabbedPanelsContent').eq(showTb).addClass('show');
		}
		$(aslider).css('width',$(this).outerWidth());
		$(aslider).animate({ left:$(this).position().left },300);
		if($('#'+parentId+' .TabbedPanelsContent').eq(showTb).hasClass('offerRebateSlider')){
			$('#'+parentId+' .TabbedPanelsContent').eq(showTb).find('.flexslider:not(.noLoad)').flexslider({
				animation: "slide",
				animationLoop: false,
				itemWidth: 521,
				itemMargin: 0,
				minItems: 1,
				controlNav: false,
				directionNav: true,
				slideshow: false
			});
		}
		if($('#'+parentId+' .TabbedPanelsContent').eq(showTb).hasClass('productTabSlider')){
			$('#'+parentId+' .TabbedPanelsContent').eq(showTb).find('.flexslider:not(.noLoad)').flexslider({
				animation: "slide",
				animationLoop: false,
				itemWidth: '100%',
				itemMargin: 0,
				minItems: 1,
				controlNav: true,
				directionNav: true,
				slideshow: false
			});
		}
	});
	$('ul.TabbedPanelsTabGroup li.active').trigger('click');
});
function resetToFirstTab(tabPanelID) {
	$('#' + tabPanelID + ' li:first-of-type').trigger('click');
}

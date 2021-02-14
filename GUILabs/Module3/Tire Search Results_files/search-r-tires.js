$(document).ready(function(){		
	//SRLoadAnalytics();	
	$('#otherProdsSelect').on('change', function(e){
		linkTracking({
			linkName: s.pageName + ': change search results',
			prop7: $(this).find(':selected').text().toLowerCase()
		},'','',$("#otherprodsvehform").submit());
	});
	$('#sortValue').on('change', function(e){
		var selectedText = $("#sortValue option:selected").text();
		if (selectedText.indexOf("Price (Lowest to Highest)")>-1 || selectedText.indexOf("UTQG (Highest to Lowest)")>-1)
			$("#sortHighLow").val('lowToHigh');
		else
			$("#sortHighLow").val('highToLow');
		document.forms.sortByForm.submit();
	});
		
	if($('#oeLiTab checkbox input').is(':checked')) changeTab('OE',true);
	else if($('#bsLiTab checkbox input').is(':checked')) changeTab('BS',true);
	else if($('#tdgLiTab checkbox input').is(':checked')) changeTab('TDG',true);
	else if($('#rsLiTab checkbox input').is(':checked')) changeTab('RS',true);
	else if($('#asLiTab checkbox input').is(':checked')) changeTab('AS',true);
	else filterTires("init");

	$(document).on("click","checkbox",function(eve){
		if($(this).hasClass('disabled') || $(this).parent().hasClass('disabled')) {
			$(this).removeClass("on").addClass('off').find('input[type="Checkbox"]').prop("checked",false);
			filterTires();
		}
	});
	/*
	s.t();//analytics on load event
	*/		
})		

function filterPrice() {
	priceFilter = $('#sliderValue').val();
	filterTires();
	if(typeof trackFilterClick == 'function') trackFilterClick('price', priceFilter);
}

function cusButtonCheck(p) {
	if ($(p).hasClass('disabled')) {
	} else {
		if($(p).hasClass("on")) {
			$(p).removeClass("on").addClass('off').find('input').prop("checked", false).trigger('change');
		} else {
			$(p).removeClass('off').addClass("on").find('input').prop("checked", true).trigger('change');
		}
	}
}

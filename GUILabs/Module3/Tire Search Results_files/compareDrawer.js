var isWinterCompareDrawer = false;
var compareDrawerTimer;

function undoClearCompareDrawer(){
	updateCompareTiresList('query','');
	if($('.compareDrawer').hasClass('prevReturnState')) $('.compareDrawer').addClass('returnState');
	$('.compareDrawer').removeClass('undoState prevReturnState');
	if($('.compareDrawer .compareTile').length > 3) {
		$('.compareDrawer .leftArrow').show();
		$('.compareDrawer .rightArrow').show();
	}
	clearTimeout(compareDrawerTimer);
}

function clearDrawerImmediately(partnum){
    clearTimeout(compareDrawerTimer);
	$('.compare checkbox').removeClass('on').addClass('off').find('input').prop('checked',false);
	$('.compareDrawer').hide();
	$('.compareTile').remove();
	var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=clear";
	if(isWinterCompareDrawer) fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=clear&set=false";
	$.ajax({
		url: fURL + "&fingerPrint="+(typeof compareDrawerFingerPrint !== "undefined"?encodeURIComponent(compareDrawerFingerPrint):""),
		dataType: "xml",
		cache: false,
        success: function(){
            updateCompareTiresList(partnum,'');
        }
	});
	$('.tiles .tile').remove();
	$('div.compareDrawer').removeClass('undoState prevReturnState');
}

function recoverCompareDrawer(){
	$('.compareDrawer').removeClass('returnState');
	 updateCompareTiresList('recover','');
}

function clearCompareDrawer(){
	$('.compare checkbox').removeClass('on').addClass('off').find('input').prop('checked',false);
	$('.compareDrawer').hide();
    updateCompareTiresList('undoclear','');
	if($('.compareDrawer').hasClass('returnState')) $('.compareDrawer').removeClass('returnState').addClass('prevReturnState');
	$('.compareDrawer').addClass("undoState");
	$('.compareDrawer .leftArrow').hide();
	$('.compareDrawer .rightArrow').hide();
	$('.compareDrawer').show();
	compareDrawerTimer = setTimeout(function(){
		updateCompareTiresList('clear','');
		$('.tiles .tile').remove();
		$('div.compareDrawer').removeClass('undoState prevReturnState');
	},5000);
}

function updateCompareTiresList(partnum, set, holdTrack){
    var holdTrackCheck = (typeof holdTrack !== "undefined" && holdTrack);
	var $ele = $('#check'+(isWinterCompareDrawer&&set?'Set':'')+'-'+partnum);
	if($ele.length==0) $ele = $('#drawer'+(isWinterCompareDrawer&&set?'Set':'')+'-'+partnum);
	if(!holdTrackCheck && $ele.find('input').is(':checked')) {
        var eVar45Val = isWinterCompareDrawer?"winter "+(window.wtpackage=="true"?"tire package":"tires by vehicle"):(window.fromWinter?"winter ":"")+(window.vehicleSearch?window.wtpackage=="true"?"tire package":"tires by vehicle":"tires by size")
        var event100Val = "";
        if($('.compareDrawer .tiles .tile').length==3) {
            if($.cookie('compareDrawerFull') != undefined && $.cookie('compareDrawerFull') != ""){
                var compareDrawerFull = JSON.parse($.cookie('compareDrawerFull'));
                if(compareDrawerFull.indexOf(eVar45Val)<0) {
                    compareDrawerFull.push(eVar45Val);
                    $.cookie('compareDrawerFull', JSON.stringify(compareDrawerFull), { path: '/' });
                    event100Val = "event100"; 
                }
            } else {
                $.cookie('compareDrawerFull', JSON.stringify([eVar45Val]), { path: '/' });
                event100Val = "event100";
            }
        }
		linkTracking({
			linkName: "tr: tires: click to compare",
			eVar44: "Click to Compare",
            eVar45: eVar45Val,
            events: event100Val
		});
	}
	if(partnum == 'clear'){
		$('.compare checkbox').removeClass('on').addClass('off').find('input').prop('checked',false);
		$('.compareDrawer').hide();
		$('.compareTile').remove();
		var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=clear";
		if(isWinterCompareDrawer) fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=clear&set=false";
		$.ajax({
			url: fURL + "&fingerPrint="+(typeof compareDrawerFingerPrint !== "undefined"?encodeURIComponent(compareDrawerFingerPrint):""),
			dataType: "xml",
			cache: false
		});
    } else if(partnum == 'undoclear'){
		var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=undoclear";
		if(isWinterCompareDrawer) fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=undoclear&set=false";
		$.ajax({
			url: fURL,
			dataType: "xml",
			cache: false
		});
	} else if(partnum == 'recover'){
		var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=recover";
		if(isWinterCompareDrawer) fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=recover&set=false";
		$.ajax({
			url: fURL + "&fingerPrint="+(typeof compareDrawerFingerPrint !== "undefined"?encodeURIComponent(compareDrawerFingerPrint):""),
			dataType: "xml",
			cache: false
		}).done(function(data) {
			compareTiresCallback(data);
		});
	} else if(partnum == 'recoverCheck'){
		var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=recover&checkOnly=true";
		if(isWinterCompareDrawer) fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=recover&checkOnly=true&set=false";
		$.ajax({
			url: fURL + "&fingerPrint="+(typeof compareDrawerFingerPrint !== "undefined"?encodeURIComponent(compareDrawerFingerPrint):""),
			dataType: "xml",
			cache: false
		}).done(function(responseXML){
			var hasStoredItems = responseXML.getElementsByTagName("hasStoredItems")[0].firstChild.data;
			if(hasStoredItems == 'Y') {
				$('div.compareDrawer').addClass('returnState').show();
			}
		});
	} else {
        if($(".undoState").is(":visible") && partnum != 'query'){
            clearDrawerImmediately(partnum);
        } else {
	    	var fURL = "/tires/TireSearchControlServlet?ajax=true&action=updateCompareTiresList&partnum=" + partnum;
		    if(isWinterCompareDrawer){
			    var index = $ele.data('index');
                if(partnum != 'query'){
        			if(set){
	        			if(typeof tireSet !== "undefined") tireSet[index].isSelected = !tireSet[index].isSelected;
		        	} else {
			        	if(typeof tireList !== "undefined") tireList[index].isSelected = !tireList[index].isSelected;
        			}
                    // Exists in drawer and need to remove checkbox
	        		if($('#drawer'+(set?'Set':'')+'-'+partnum).length>0) $('#check'+(set?'Set':'')+'-'+partnum).removeClass('on').addClass('off').find('input').prop('checked',false);
                    }
    			    fURL = "/snow/WinterTireSearchControlServlet?ajax=true&action=updateCompareTiresList&index=" + index + "&set=" + set;
    		} else {
                // Exists in drawer and need to remove checkbox
		    	if($('#drawer-'+partnum).length>0) $('#check-'+partnum).removeClass('on').addClass('off').find('input').prop('checked',false);
    		}
	    	$.ajax({
		    	url: fURL + "&fingerPrint="+(typeof compareDrawerFingerPrint !== "undefined"?encodeURIComponent(compareDrawerFingerPrint):""),
			    dataType: "xml",
    			cache: false
	    	}).done(function(data){
		    	compareTiresCallback(data);
    		});
	    }
	}
}

function compareTiresCallback(responseXML){
	if(responseXML){
		if(responseXML.getElementsByTagName("sessionexpired").length > 0){
			document.location = "/sessionexpired.jsp";
		} else {
            var haveTires = (responseXML.getElementsByTagName("haveTiresToCompare").length>0?responseXML.getElementsByTagName("haveTiresToCompare")[0].firstChild.data:'N');
			compareTiresList = new Array();

			if(haveTires == "Y"){
				recoverCompareDrawerFlag = false;
				haveTiresToCompare = true;
				$('div.compareDrawer').removeClass('returnState');
                window.compareTiresList = new Array();
				
				var compareTires = responseXML.getElementsByTagName("compareTire");
				if(compareTires.length > 0){
                    $('#compareDrawerBtn span').text(' (' + compareTires.length + ')');
					var prevIndex = $('.tiles').hasClass('slick-initialized')?$('.tiles').slickCurrentSlide():0;
                    if(undoTireClear == "true"){ 
                        clearCompareDrawer();
                    } else {
					    $('.compareDrawer').show();
                    }
					$('.compareDrawer .tile').addClass('remove');
					var comparePagePartNumber = typeof pagePartNumber !== "undefined"?pagePartNumber:false;
					var compareRearPagePartNumber = typeof rearPagePartNumber !== "undefined"?rearPagePartNumber:false;
					var tirePartNumber = responseXML.getElementsByTagName("partNumber");
					var rearPartNumber = responseXML.getElementsByTagName("rearPartNumber");
					var tireMake = responseXML.getElementsByTagName("tireMake");
					var tireModel = responseXML.getElementsByTagName("tireModel");
					var tireImage = responseXML.getElementsByTagName("tireImage");
					var tireURL = responseXML.getElementsByTagName("tireURL");
					var tirePrice = responseXML.getElementsByTagName("tirePrice");
					var tirePrice2 = responseXML.getElementsByTagName("tirePrice2");
					var tireMapLayout = responseXML.getElementsByTagName("tireMapLayout");
                    var tireMapLayout2 = responseXML.getElementsByTagName("tireMapLayout2");
					var tireSetType = responseXML.getElementsByTagName("tireSet");
					var tireIndex = responseXML.getElementsByTagName("tireIndex");
					for(i = 0; i<compareTires.length; i++){
						var tire = tirePartNumber[i].firstChild.data;
						var rearPartNum = (rearPartNumber[i] && rearPartNumber[i].childNodes[0]?rearPartNumber[i].childNodes[0].nodeValue:'');
						var isSet = (rearPartNum && rearPartNum!='');
						var isSelected = comparePagePartNumber == tirePartNumber[i].childNodes[0].nodeValue && ((!isSet && !compareRearPagePartNumber) || (isSet && compareRearPagePartNumber == rearPartNumber[i].childNodes[0].nodeValue));
						isSet = (rearPartNum && rearPartNum!='') && isWinterCompareDrawer;
						$('#check'+(isSet?'Set':'')+'-'+tirePartNumber[i].childNodes[0].nodeValue).addClass('on').removeClass('off').find('input').prop('checked',true);
						compareTiresList[i] = tire;
						$drawerTile = $('#drawer'+(isSet?'Set':'')+'-'+tirePartNumber[i].childNodes[0].nodeValue);
						if($drawerTile.length==0){
                            var $tileDiv = $('<div />', {'id':'drawer'+(isSet?'Set':'')+'-' + tirePartNumber[i].childNodes[0].nodeValue,'class':'tile'}).data('index',isWinterCompareDrawer?tireIndex[i].childNodes[0].nodeValue:0).data('set',isSet?true:false);
                            var $tileDivA = $('<a />', {'href':'javascript:void(0);','class':'compareTile'+(isSelected?' selected':'')}).data('url',tireURL[i].childNodes[0].nodeValue+(window.wtpackage=="true"?"&wtpackage=true":""));
                            $tileDivA.click(function(){
                                var href = $(this).data('url');
                                window.location = href + (vehicleEncoded!=''?'&'+vehicleEncoded:'');
                            });
                            var $spanClose = $('<span />', {'class':'close'}).data('partnum',tirePartNumber[i].childNodes[0].nodeValue);
                            $spanClose.click(function(event){
                                var partnum = $(this).data('partnum');
                                event.stopPropagation();
                                updateCompareTiresList(partnum, $(this).closest('.tile').data('set'), true);
                            });
                            var $tileDivName = $('<div />', {'class':'namePrice'});
                            var $tileDivPrice = $('<div />', {'class':'price'});
                            var $tileDivPrice2 = '';
                            if(tireMapLayout[i].childNodes[0].nodeValue == '3' || tireMapLayout2[i].childNodes[0].nodeValue == '3'){
                                $tileDivPrice.append('<span><sbold>See Tire Rack Delivered<br>Price in Cart</sbold></span>');
                            } else if(tireMapLayout[i].childNodes[0].nodeValue != 'None' || tireMapLayout2[i].childNodes[0].nodeValue != 'None'){
                                $tileDivPrice.append('<span><sbold>See Tire Rack <br>Price in Cart</sbold></span>');
                            } else if(tireSetType[i].childNodes[0].nodeValue == 'AA'){
                                $tileDivPrice.append('<sup>$</sup><span>' + tirePrice[i].childNodes[0].nodeValue + '</span>');
                            } else if(tireSetType[i].childNodes[0].nodeValue == 'FR'){
                                $tileDivPrice.append('<sup>$</sup><span>' + tirePrice[i].childNodes[0].nodeValue + '</span><span>Front</span>');
                            } else if(tireSetType[i].childNodes[0].nodeValue == 'LR'){
                                $tileDivPrice.append('<div class="fR"><sup>$</sup><span>' + tirePrice[i].childNodes[0].nodeValue + '</span><span>Right</span>');
                            } else if(tireSetType[i].childNodes[0].nodeValue == 'SET'){
                                $tileDivPrice.append('<sup>$</sup><span>' + tirePrice[i].childNodes[0].nodeValue + '</span><span>(Starting at)</span>');
                            }
                            if(tireSetType[i].childNodes[0].nodeValue == 'FR'){
                                $tileDivPrice2 = $('<div />', {'class':'price'});
                                $tileDivPrice2.append('<sup>$</sup><span>' + tirePrice2[i].childNodes[0].nodeValue + '</span><span>Rear</span></div>');
                            } else if(tireSetType[i].childNodes[0].nodeValue == 'LR'){
                                $tileDivPrice2 = $('<div />', {'class':'price'});
                                $tileDivPrice2.append('<sup>$</sup><span>' + tirePrice2[i].childNodes[0].nodeValue + '</span><span>Left</span></div>');
                            }
                            $tileDiv.append($tileDivA.append($spanClose));
                            $tileDivA.append('<h5 class="productName"><span>' + tireMake[i].childNodes[0].nodeValue + '</span><span>' + tireModel[i].childNodes[0].nodeValue + '</span></h5>');
                            $tileDivA.append('<div class="productImageHalf"><img src="' + tireImage[i].childNodes[0].nodeValue + '" alt="' + tireMake[i].childNodes[0].nodeValue + ' ' + tireModel[i].childNodes[0].nodeValue + '"></div>');
                            $tileDivA.append($tileDivName);
                            $tileDivName.append('<div class="priceLabel">Per Tire:</div>');
                            $tileDivName.append($tileDivPrice);
                            $tileDivName.append($tileDivPrice2);
                            $('.tiles').slickAdd($tileDiv, true);
						} else {
							$drawerTile.removeClass('remove');
						}
					}
					$('.tiles .remove').remove();
					if($('.tiles').length>0) $('.tiles')[0].slick.refresh();
					var currentTileCount = $('.tiles .tile').length;
					if(currentTileCount>3 && prevIndex+3>currentTileCount) prevIndex = currentTileCount-3;
					$('.tiles').slickGoTo(prevIndex);
				} else {
					$('.compare checkbox').removeClass('on').addClass('off').find('input').prop('checked', false);
					$('.compareDrawer').hide();
					$('.compareDrawer .tile').remove();
				}
				if(compareTires.length < 4) {
                    if(undoTireClear == "true") undoTireClear = "false";
					$('.tiles').slickGoTo(0);
					$('.compareDrawer .leftArrow').hide();
					$('.compareDrawer .rightArrow').hide();
				} else {
                    if(undoTireClear == "true"){
                        undoTireClear = "false";
                    } else {
                        $('.compareDrawer .leftArrow').show();
                        $('.compareDrawer .rightArrow').show();
                    }
				}
				var currentIndex = $('.tiles').hasClass('slick-initialized')?$('.tiles').slickCurrentSlide():0;
				if(currentIndex == 0){
					$('.compareDrawer .leftArrow').addClass('disabled');
				} else {
					$('.compareDrawer .leftArrow').removeClass('disabled');
				}
				if($('.tile').length == currentIndex + 3) {
					$('.compareDrawer .rightArrow').addClass('disabled');
				} else {
					$('.compareDrawer .rightArrow').removeClass('disabled');
				}
			} else {
				haveTiresToCompare = false;
				$('.compareDrawer:not(.returnState)').hide();
				if(recoverCompareDrawerFlag && haveTires != 'N') updateCompareTiresList('recoverCheck','');
			}
		}
	}
}

$(document).ready(function(){
	$('.tiles').slick({
		draggable: false,
		infinite: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		onAfterChange: function(slide, index){
			if(index == 0){
				$('.compareDrawer .leftArrow').addClass('disabled'); 
			} else { 
				$('.compareDrawer .leftArrow').removeClass('disabled');
			}
			if($('.tile').length == index + 3){
				$('.compareDrawer .rightArrow').addClass('disabled');
			} else {
				$('.compareDrawer .rightArrow').removeClass('disabled');
			}
		}
	});
	if($('.compareDrawer .compareTile').length < 4){
		$('.compareDrawer .leftArrow').hide();
		$('.compareDrawer .rightArrow').hide();
	}
	$('#clearCompare, #clearCompareReturn').click(function(event){ 
		clearCompareDrawer();
		linkTracking({linkName:'tr: tires: compare drawer: clear'});
	});
	$('#undoClearCompare').click(function(event){
        undoClearCompareDrawer();
		linkTracking({linkName:'tr: tires: compare drawer: undo clear'});
	});
	$('#recoverCompare').click(function(event){ 
		recoverCompareDrawer();
		return false;
	});
    $('#compareDrawerBtn').one('click', function(e){
        e.preventDefault();
        var href = '/tires/CompareTires.jsp';
        if($('section').hasClass('headerBannerSelectOption')) href += '?wtpackage=true';
        if(isWinterCompareDrawer) href = '/snow/CompareTires.jsp';
        window.location = href;
        $(this).prop('disabled', true);
    });
	$('.compareDrawer .close').click(function(event){
		var partnum = $(this).data('partnum');
		event.stopPropagation();
		updateCompareTiresList(partnum, $(this).closest('.tile').data('set'), true);
		if($('.compareTile').length <= $('.tiles').slickCurrentSlide() + 2) $('.tiles').slickGoTo(parseInt($('.tiles').slickCurrentSlide()-1));
	});
	$('.compareDrawer .tile a').click(function(event){
		href = $(this).data('url');
		window.location = href + (vehicleEncoded!=''?'&'+vehicleEncoded:'');
	});
	$('.compareDrawer .rightArrow').click(function(event){
		$('.tiles').slickNext();
		linkTracking({linkName:'tr: tires: compare drawer: next arrow'});
	});
	$('.compareDrawer .leftArrow').click(function(event){
		$('.tiles').slickPrev();
		linkTracking({linkName:'tr: tires: compare drawer: previous arrow'});
	});
});

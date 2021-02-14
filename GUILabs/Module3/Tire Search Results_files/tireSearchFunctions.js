var instantRebateText = "Instant Rebate";
var instantRebateTextLower = "instant rebate";
if(!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement, fromIndex) {
		if ( this === undefined || this === null ) throw new TypeError( '"this" is null or not defined' );
		var length = this.length >>> 0; // Hack to convert object.length to a UInt32
		fromIndex = +fromIndex || 0;
		if (Math.abs(fromIndex) === Infinity) fromIndex = 0;
		if (fromIndex < 0) {
			fromIndex += length;
			if (fromIndex < 0) fromIndex = 0;
		}
		for (;fromIndex < length; fromIndex++) {
			if (this[fromIndex] === searchElement) return fromIndex;
		}
		return -1;
	};
}
var filterInit = false;

var div = document.createElement("DIV");
var input = document.createElement("INPUT");
var pages = 1;

var brandList = new Array();
var performanceCategoryList = new Array();
var speedRatingList = new Array();
var loadRatingList = new Array();

var runFlatChoice = "N";
var nonRunFlatChoice = "N"
var lrrChoice = "N";
var lrrNoChoice = "N";
var newChoice = "N";
var scChoice = "N";
var day1Choice = "N";
var day2Choice = "N";
var sssrChoice = "N";
var sssrWChoice = "N";
var sssrAChoice = "N";
var sssrNoChoice = "N";
var sidewallBWChoice = "N";
var sidewallWWChoice = "N";
var sidewallWLChoice = "N";
var sidewallODChoice = "N";

var filterExclusion = "";

var pages = 0;
var maxPages = 10; 
var startPage = 1;
var endPage = 0;

var avonCount = 0;
var bfgCount = 0;
var bridgestoneCount = 0;
var continentalCount = 0;
var cooperCount = 0;
var dickCepekCount = 0;
var dunlopCount = 0;
var falkenCount = 0;
var firestoneCount = 0;
var fuzionCount = 0;
var generalCount = 0;
var gitiCount = 0;
var goodyearCount = 0;
var hankookCount = 0;
var hoosierCount = 0;
var jkTyreCount = 0;
var kumhoCount = 0;
var laufennCount = 0;
var michelinCount = 0;
var nexenCount = 0;
var pirelliCount = 0;
var powerKingCount = 0;
var rikenCount = 0;
var sumitomoCount = 0;
var toyoCount = 0;
var uniroyalCount = 0;
var yokohamaCount = 0;
var vredesteinCount = 0

var perfCatEPCount = 0;
var perfCatMPCount = 0;
var perfCatUHPCount = 0;
var perfCatHPCount = 0;
var perfCatGTCount = 0;
var perfCatDRYCount = 0;
var perfCatWETCount = 0;
var perfCatSTRTCount = 0;
var perfCatDRAGCount = 0;
var perfCatUHPASCount = 0;
var perfCatHPASCount = 0;
var perfCatPASCount = 0;
var perfCatGTASCount = 0;
var perfCatSTCount = 0;
var perfCatASCount = 0;

var perfCatPPWCount = 0;
var perfCatPSISCount = 0;
var perfCatPSWCount = 0;

var perfCatSSTASCount = 0;
var perfCatSSTCount = 0;
var perfCatHRCount = 0;
var perfCatCSTASCount = 0;
var perfCatHASCount = 0;
var perfCatORATCount = 0;
var perfCatORCTCount = 0;
var perfCatORMTCount = 0;

var perfCatLTPWCount = 0;
var perfCatLTSISCount = 0;
var perfCatLTSWCount = 0;

var perfCatTEMPCount = 0;
var perfCatTSCount = 0;
											
var speedNRCount = 0;
var speedLCount = 0;
var speedMCount = 0;
var speedNCount = 0;
var speedPCount = 0;
var speedQCount = 0;
var speedRCount = 0;
var speedSCount = 0;
var speedTCount = 0;
var speedUCount = 0;
var speedHCount = 0;
var speedVCount = 0;
var speedZCount = 0;
var speedWCount = 0;
var speedYCount = 0;
var speedYPlusCount = 0;

var loadLLCount = 0;
var loadSCount = 0;
var loadRFCount = 0;
var loadXLCount = 0;
var loadCCount = 0;
var loadDCount = 0;
var loadECount = 0;
var loadFCount = 0;
var loadGCount = 0;
var loadHCount = 0;

var runFlatNoCount = 0;
var runFlatOnlyCount = 0;

var lrrNoCount = 0;
var lrrOnlyCount = 0;
var sssrNoCount = 0;
var sssrOnlyCount = 0;
var sssrWOnlyCount = 0;
var sssrAOnlyCount = 0;

var sidewallNoCount = 0;
var sidewallTotalCount = 0;
var sidewallBWCount = 0;
var sidewallWWCount = 0;
var sidewallWLCount = 0;
var sidewallODCount = 0;

var newCount = 0;
var scCount = 0;
var del1Count = 0;
var del2Count = 0;

var recSpeedRatingsBuilt = false;
var instantRebateObj = {};
var instantRebateTotal = 0;
var affirmPrice = 0;
var promos = new Array();
var rebateContent = new Array();
var GY_CC = "Goodyear Credit Card ";
var BS_CC = "Bridgestone Tire Rack Credit Card ";
var CO_CC = "Continental Tire Credit Card ";
var GE_CC = "Continental Tire Credit Card ";
var GY_CC_PROMO_TYPE = "GY";
var BS_CC_PROMO_TYPE = "BS";
var CO_CC_PROMO_TYPE = "CO";
var GE_CC_PROMO_TYPE = "GE";
var GY_content =  {classFile:'brandedCC', landingPage:'goodyearCC.jsp', ccFullName:'Goodyear <nobr>Credit Card</nobr>', cardText: 'Goodyear Visa Prepaid Card by mail.'};
var BS_content =  {classFile:'brandedCC', landingPage:'bridgestoneCC.jsp', ccFullName:'Bridgestone Tire Rack <nobr>Credit Card</nobr>', cardText: 'Bridgestone Tire Rack Visa Prepaid Card by mail.'};
var CO_content =  {classFile:'brandedCC', landingPage:'continentalCC.jsp', ccFullName:'Continental Tire <nobr>Credit Card</nobr>', cardText: 'Visa Prepaid Card by mail.'};
var GE_content =  {classFile:'brandedCC', landingPage:'generalCC.jsp', ccFullName:'General <nobr>Credit Card</nobr>', cardText: 'General Visa Prepaid Card by mail.'};
var GY_rebate =  {classFile:'brandedRebate', landingPage:'goodyearCC.jsp', text:'Price with the Goodyear <nobr>Credit Card</nobr> After Mail-In Rebate:'};
var BS_rebate =  {classFile:'brandedRebate', landingPage:'bridgestoneCC.jsp', text:'Price with the Bridgestone Tire Rack <nobr>Credit Card</nobr> After Mail-In Rebate:'};
var CO_rebate =  {classFile:'brandedRebate', landingPage:'continentalCC.jsp', text:'Price with the Continental Tire <nobr>Credit Card</nobr> After Mail-In Rebate:'};
var GE_rebate =  {classFile:'brandedRebate', landingPage:'generalCC.jsp', text:'Price with the General Credit <nobr>Card</nobr> After Mail-In Rebate:'};

//Filter tires using all checked filters
function filterTires(exclusion){
	if(exclusion=="init") filterInit = true;
	if(exclusion != null && exclusion != ""){
		if(exclusion != "init")
			filterExclusion = exclusion;
	}else{
		filterExclusion = "";
	}
	trDropdownEnable($('#sortValue'));

	$('#loading').show();
	if($('#filterOptions').length>0) {
		updateBrandList();
		updatePerformanceCategoryList();
		updateSpeedRatingList();
		updateLoadRatingList();
		updateRunFlat();
		updateLRR();
		updateSidewall();
		updateSSSR();
		updateNew();
		updateSC();
		updateDelivered();
		
		if(exclusion != "init"){
			currentPage = 1;
			startIndex = 0;	
		}

		var url = "/tires/TireSearchControlServlet?ajax=true&action=filterTires&startIndex=" + startIndex + "&viewPerPage=" + viewPerPage;

		if(brandList != null && brandList != ""){
			url += "&brands=" + brandList;
		}
		if(performanceCategoryList != null && performanceCategoryList != ""){
			url += "&perfCats=" + performanceCategoryList;
		}
		if(speedRatingList != null && speedRatingList != ""){
			url += "&speedRatings=" + encodeURIComponent(speedRatingList);
		}
		if(loadRatingList != null && loadRatingList != ""){
			url += "&loadRatings=" + loadRatingList;
		}

		url += "&RunFlat=" + runFlatChoice + "&NonRunFlat=" + nonRunFlatChoice + "&LRR=" + lrrChoice + "&NoLRR=" + lrrNoChoice + "&SSSRW=" + sssrWChoice + "&SSSRA=" + sssrAChoice + "&NoSSSR=" + sssrNoChoice + "&sidewallBW=" + sidewallBWChoice + "&sidewallWW=" + sidewallWWChoice + "&sidewallWL=" + sidewallWLChoice + "&sidewallOD=" + sidewallODChoice + "&New=" + newChoice + "&SC=" + scChoice + "&del1=" + day1Choice + "&del2=" + day2Choice + "&priceFilter=" + priceFilter;

		$.ajax({
			url : url,
			method : 'GET',
			async : false,
			cache: false
		}).success(function(responseXML) {
			filterCallback(responseXML, exclusion);
		}).error(function() {
		});
	} else {
		var forgedResponse = "";
		if(tireList.length>0) {
			forgedResponse = '<response><tireLocations>';
			for(var i=0; i<tireList.length; i++) {
				forgedResponse += '<tireLocation>'+i+'</tireLocation>';
			}
			forgedResponse += '</tireLocations></response>';
		} else {
			forgedResponse = '<response><noResults>true</noResults></response>';
		}
		filterCallback(jQuery.parseXML(forgedResponse), "init");
	}
	
	setTimeout("$('#loading').hide()",500);

	affirmRefresh();
}

function ajaxURL(fURL) {
	$.ajax({url: fURL, cache: false});
}

function ajaxCall(fURL) {

	$.ajax({
                url: fURL,
                dataType: "xml",
		cache: false
        }).done(function(data) {
                filterCallback(data);
        });
}

function filterByOETires(){
	$('#loading').show();
    $('#bs-Tires').prop('checked',false);
    $('#tdg-Tires').prop('checked',false);
	if($('#oe-Tires').prop('checked') !== true) {
		filterTires();
		return;
	}
	filterExclusion = "OE";
	currentPage = 1;
	startIndex = 0;
	var url = "/tires/TireSearchControlServlet?ajax=true&action=oeTires";
	ajaxCall(url);
	
	setTimeout("$('#loading').hide()",500);
}

function filterByBSTires(){
	$('#loading').show();
    $('#oe-Tires').prop('checked',false);
    $('#tdg-Tires').prop('checked',false);
    if($('#bs-Tires').prop('checked') !== true) {
		filterTires();
		return;
	}
	filterExclusion = "BS";
	currentPage = 1;
	startIndex = 0;
	var url = "/tires/TireSearchControlServlet?ajax=true&action=bsTires";
	ajaxCall(url);

	setTimeout("$('#loading').hide()",500);
}

function filterByTDGTires(){
	$('#loading').show();
    $('#oe-Tires').prop('checked',false);
    $('#bs-Tires').prop('checked',false);
    if($('#tdg-Tires').prop('checked') !== true) {
		filterTires();
		return;
	}
	filterExclusion = "TDG";
	currentPage = 1;
	startIndex = 0;
	var url = "/tires/TireSearchControlServlet?ajax=true&action=tdgTires";
	ajaxCall(url);
	
	setTimeout("$('#loading').hide()",500);
}

function filterByWinterTires(){
	$('#loading').show();
	currentPage = 1;
	startIndex = 0;
	var url = "/tires/TireSearchControlServlet?ajax=true&action=winterTires";
	ajaxCall(url);

	setTimeout("$('#loading').hide()",500);
}

var firstTimeLoad = true;
function filterCallback(responseXML){
	if(responseXML){
		var exclusion = filterExclusion;
		if(responseXML.getElementsByTagName("sessionexpired").length > 0){
			document.location = "/sessionexpired.jsp";
		}else if(responseXML.getElementsByTagName("noResults").length > 0){
			if($('#filterOptions').length>0) {
				var width = ( ($('#sliderValue').val()/400) * 100 );
				$("#price_slider a.ui-slider-handle").css('left',width+'%');
				$("#price_slider div.ui-slider-range").css('width',width+'%');
				updateSelectedFilters();
			}
			updateTireContentDivNoResults();
		}else{
			buildFilteredList(responseXML.getElementsByTagName("tireLocations")[0]);
			if($('#filterOptions').length>0) { // Exclude filter updates if it's not there

				if(exclusion=="OE" || exclusion=="BS" || exclusion=="TDG") {
				    var thisExclusion = '#' + exclusion.toLowerCase() + '-Tires';
                    $('#filterOptions').find('input[type=checkbox]:not('+thisExclusion+')').prop('checked',false);
					$("#price_slider a.ui-slider-handle").css('left','100%');
					$("#price_slider div.ui-slider-range").css('width','100%');
					$('#filterOptions span[data-total]').each(function(){
						$(this).text($(this).attr('data-total'));
					});
					$('#filterOptions li.checkbox').removeClass('checkboxDisabled');
                    $('#filterOptions div.toggleable').removeClass('disabled');
					$('#selectedFilters').html('');
					var text="";
					if(exclusion=="OE")
						text="Original Equipment";
					else if(exclusion=="BS")
						text="Best Sellers";
					else if(exclusion=="TDG")
						text="Tire Decision Guide";

					if(exclusion=="TDG")
						$('#selectedFilters').html('<li><span class="text">Tire Decision Guide</span><a href="#" class="filterRemove" onclick="$(\'#'+exclusion.toLowerCase()+'-Tires\').attr(\'checked\',false).parent().removeClass(\'on\').addClass(\'off\'); changeTab(\''+exclusion+'\', false); return false;"></a></li>');
					else
						$('#selectedFilters').html('<li><span class="text">' + (exclusion=="OE"?"Original Equipment":"Best Sellers") + '</span><a href="#" class="filterRemove" onclick="$(\'#'+exclusion.toLowerCase()+'-Tires\').attr(\'checked\',false).parent().removeClass(\'on\').addClass(\'off\'); changeTab(\''+exclusion+'\', false); return false;"></a></li>');
						generateCounts();
						updateCountSpans();
				} else {
					var width = ( ($('#sliderValue').val()/400) * 100 );
					$("#price_slider a.ui-slider-handle").css('left',width+'%');
					$("#price_slider div.ui-slider-range").css('width',width+'%');
					updateSelectedFilters();

				}
			}
		}
		firstTimeLoad = false;
	}
}

function updateSelectedFilters() {
	$('#selectedFilters').html('');
	var thisForm = document.getElementById("filterOptions");
	var allInputs = thisForm.getElementsByTagName("input");
	var optionhtml = [];
	var tagCount = 0;
	if($('#priceSelected').html()!='400+'){
		optionhtml.push('<li class="pricetag"><span class="text">Price Up to $' + $('#priceSelected').html() + '</span><a href="javascript:void(0)" class="filterRemove" onclick="resetTagFilter(\'price\')"></a></li>');
		tagCount++;
	}
	for ( var i = 0; i < allInputs.length; i++) {
		var inputValue=$(allInputs[i]).data('value');
		var isSelected = $(allInputs[i]).data('selected');
		if (allInputs[i].type == "checkbox" && (allInputs[i].checked == true || isSelected) && allInputs[i].disabled == false && inputValue!="OE" && inputValue!="BS") {
            allInputs[i].checked = true;
			tagCount++;
			if(tagCount == 6) 
				optionhtml.push('<li style="cursor:pointer" class="viewBtn expand" onclick="showAllTags()">View More &gt;&gt;</li>');
			if(tagCount >= 6) {
				optionhtml.push('<li class="hide"><span class="text">' + inputValue + '</span><a href="javascript:void(0)" class="filterRemove" onclick="resetTagFilter(' + i + ')"></a></li>');
			} else {
				optionhtml.push('<li><span class="text">' + inputValue + '</span><a href="javascript:void(0)" class="filterRemove" onclick="resetTagFilter(' + i + ')"></a></li>');
			}
		}
	}
	$('#selectedFilters').html(optionhtml.join(''));
}

function buildFilteredList(tireLocations){
	window.filteredList = new Array();

	if(tireLocations.childNodes.length > 0){
		for(i = 0; i < tireLocations.childNodes.length; i++){
			var tireLocation = tireLocations.getElementsByTagName("tireLocation")[i].childNodes[0].nodeValue;
			var tire = tireList[tireLocation];

			filteredList[i] = tire;
		}


		updateTireContentDiv();
		updatePageBar();
		createPages();
		if($('#filterOptions').length>0) {
			generateCounts();
			updateCountSpans();
		}
	}
}

/* Hides tireContentDiv and displays noResultsDiv 
 * This function is called when our Ajax request receives
 * no results.
*/
function updateTireContentDivNoResults() {
	window.filteredList = new Array();

	$('#tireContentDiv').hide();
	if(!firstTimeLoad) {
		$('#noResultsMessage1').html('<div class="noResultsSubHeader">There are no tires available based on the filters you\'ve selected.</div>');
		$('#noResultsMessage2').html('<p><a class="redGreater" href="/content/tirerack/desktop/en/homepage.html" onclick="resetFilters(); return false;">Reset Filters</a></p>');
	}
	
	$('#noResultsDiv').show();
	
	$('#loading').show();
	$('#pageBar, #pageBar2').hide();
	$('#compareTiresLink').hide();

	if($('#filterOptions').length>0) {
		if(filterExclusion != "brand") {
			clearBrandCounts();
		}
		if(filterExclusion != "perfCat") {
			clearPerfCatCounts();
		}
		if(filterExclusion != "speedRating") {
			clearSpeedRatingCounts();
		}
		if(filterExclusion != "loadRating") {
			clearLoadRatingCounts();
		}
		if(filterExclusion != "runFlat") {
			clearRunFlatCounts();
		}
		if(filterExclusion != "lrr") {
			clearLRRCounts();
		}
		if(filterExclusion != "new") {
			clearNewCount();
		}
		if(filterExclusion != "sc") {
			clearSpecialCloseoutCount();
		}
		if(filterExclusion != "sssr") {
			clearSSSRCounts();
		}
		if(filterExclusion != "delivered") {
			clearDeliveryDaysCount();
		}
		generateCounts();
		updateCountSpans();
	}
}

/* Re-builds the tireContentDiv that houses
 * the search results
 */
function updateTireContentDiv() {
	$('#noResultsDiv').hide();
	$('#tireContentDiv').show();

	var previousSubPerf = "";
	var sortValue = $('#sortValue').val();
	$newSec = $("<section></section>",{"class":"resultsContainer","id":"tireContentDiv"});
	if(filteredList != null && filteredList.length > 0) {
		var remainder = filteredList.length - startIndex;
		var count = 0;
		var shownTDG = false;
        var shownWinterPackage = false;
		for(loop = startIndex; loop < filteredList.length && count < viewPerPage; loop++) {
			$tireDiv = $("<div></div>",{"class":"prodWrapper clearafter"});
			var tire = filteredList[loop];
			if(!tireMakeModelSearch && !shownTDG && !shownWinterPackage && totalTires>0) {
				if(sortValue=="1" && loop!=startIndex && previousSubPerf!=tire.perfShort) {
                    if(fromWinter) {
                        shownWinterPackage = true;
                        drawWinterPackageTile($newSec, false, true);
                    } else {
                        shownTDG = true;
                        drawTDGTile($newSec, false, true);
                    }
				} else if(sortValue!="1" && remainder>=8 && loop>startIndex+2) {
                    if(fromWinter) {
                        shownWinterPackage = true;
                        drawWinterPackageTile($newSec, false, false);
                    } else {
                        shownTDG = true;
                        drawTDGTile($newSec, false, false);
                    }
				}
			}
			if(sortValue=="1" && previousSubPerf!=tire.perfShort) {
				$secHeader = $("<div></div>",{"class":"perfHeader clearafter"+(previousSubPerf==""?" firstPerf":"")});
				previousSubPerf = tire.perfShort;
				$secHeader.append("<h6>"+tire.perfLong+"</h6>");
				var vehType = (tire.perfCode=='W'?"&VT="+(tire.perfShort=='LTSIS' || tire.perfShort=='LTSW' ||tire.perfShort=='LTPW'?"LT":"C"):"");
				var surveyAuto = "";
				if(autoMake != null && autoMake != "" && autoYear != null && autoYear != "" && autoModel != null && autoModel != "") {
					surveyAuto = "&autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel);
					if(autoModClar != null && autoModClar != "") {
						surveyAuto += "&autoModClar=" + encodeURIComponent(autoModClar);
					}
				}
				$secHeader.append('<a href="/tires/surveyresults/surveydisplay.jsp?type='+tire.perfCode+vehType+"&"+sizesEncoded+(surveyAuto==""?"":"&"+surveyAuto)+'&cameFrom=TSR">Category Ratings Charts</a>');
				$newSec.append($secHeader);
			}
			var commonParams = "&partnum=" + tire.partNumber;
			var commonParamsForOE = "&partnum=" + tire.partNumber;

			if(tire.hasRearTire && tire.rearTireIndex > -1) {
				var rearTire = rearTires[tire.rearTireIndex];
				commonParams = "&frontTire=" + tire.partNumber + "&rearTire=" + rearTire.partNumber;
				commonParamsForOE = "&frontTire=" + tire.partNumber + "&rearTire=" + rearTire.partNumber + "&partnum=" + tire.partNumber + "&partnum=" + rearTire.partNumber;
				if(tire.hasTirePair && tire.tirePairIndex > -1) {
					commonParams += "&frontLeftTire=" + tirePairs[tire.tirePairIndex].partNumber;
					commonParamsForOE += "&frontLeftTire=" + tirePairs[tire.tirePairIndex].partNumber + "&partnum=" + tirePairs[tire.tirePairIndex].partNumber;
				}
				if(rearTire.hasTirePair && rearTire.tirePairIndex > -1) {
					commonParams += "&rearLeftTire=" + tirePairs[rearTire.tirePairIndex].partNumber;
					commonParamsForOE += "&rearLeftTire=" + tirePairs[rearTire.tirePairIndex].partNumber + "&partnum=" + tirePairs[rearTire.tirePairIndex].partNumber;
				}
			} else if(tire.hasTirePair && tire.tirePairIndex > -1) {
				commonParams = "&leftTire=" + tire.partNumber + "&rightTire=" + tirePairs[tire.tirePairIndex].partNumber;
				commonParamsForOE = "&leftTire=" + tire.partNumber + "&rightTire=" + tirePairs[tire.tirePairIndex].partNumber + "&partnum=" + tire.partNumber + "&partnum=" + tirePairs[tire.tirePairIndex].partNumber;
			}
			commonParams += "&vehicleSearch=" + vehicleSearch + "&fromCompare1=yes";
			if(vehicleSearch)
				commonParams += "&autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel) + "&autoModClar=" + encodeURIComponent(autoModClar);

			var tireURL = tire.url + commonParams;
      			if(wtpackage=='true') tireURL += "&wtpackage=true";	
			if(fromWinter) tireURL += "&cameFrom=WinterSection";
			$tireDiv.append($('<a></a>',{"name":tire.partNumber,"id":tire.partNumber}));
			$tireForm = $('<form></form>',{"name":"tireForm"+loop,"id":"tireForm"+loop,"action":"/cart/AddItemServlet","method":"GET"});
			
			if(wtpackage=='true') $tireForm.append(generateHiddenInput("wtpackage", "true"));

			$tireForm.append(generateHiddenInput("common", "true"));
			$tireForm.append(generateHiddenInput("Type", "T"));
			$tireForm.append(generateHiddenInput("sessObj", "tireSearchBean"));
			$tireForm.append(generateHiddenInput("resIndex", tire.masterListIndex));
            for(var i = 0; i<TDGTiresList.length; i++) {
                if(TDGTiresList[i] == tire.partNumber) {
                    $tireForm.append(generateHiddenInput("fromTDGResults", "true"));
                }
            }
			if(tire.hasRearTire && (tire.hasTirePair || rearTires[tire.rearTireIndex].hasTirePair)) {
				var rearTire = rearTires[tire.rearTireIndex];

				$tireForm.append(generateReducedHiddenParams(tire, "i1", loop));
				$tireForm.append(generateReducedHiddenParams(rearTire, "i3", loop));
				if(tire.hasTirePair) {
					var tirePair = tirePairs[tire.tirePairIndex];
					$tireForm.append(generateReducedHiddenParams(tirePair, "i2", loop));
				}
				if(rearTire.hasTirePair) {
					var rearTirePair = tirePairs[rearTire.tirePairIndex];
					$tireForm.append(generateReducedHiddenParams(rearTirePair, "i4", loop));
				}

			} else {
				//$tireForm.append(generateCommonHiddenParams(tire));
				$tireForm.append(generateReducedHiddenParams(tire, "i1", loop));
			
				if(tire.hasTirePair) {
					var tirePair = tirePairs[tire.tirePairIndex];
					$tireForm.append(generateReducedHiddenParams(tirePair, "i2", loop));
				}
			
				if(tire.hasRearTire) {
					var rearTire = rearTires[tire.rearTireIndex];
					$tireForm.append(generateReducedHiddenParams(rearTire, "i3", loop));

					if(rearTire.hasTirePair) {
						var tirePair = tirePairs[rearTire.tirePairIndex];
						$tireForm.append(generateReducedHiddenParams(tirePair, "i4", loop));
					}
				}
			}
			if(vehicleSearch) {
				$tireForm.append(generateHiddenInput("autoMake", autoMake));
				$tireForm.append(generateHiddenInput("autoYear", autoYear));
				$tireForm.append(generateHiddenInput("autoModel", autoModel));
				$tireForm.append(generateHiddenInput("autoModClar", autoModClar));
			}
				
			var i1_Location = "";
			var i2_Location = "";
			var i3_Location = "";
			var i4_Location = "";
				
			if(tire.hasRearTire) {
				var rearTire = rearTires[tire.rearTireIndex];
				
				i1_Location = "Front";
				i2_Location = "";
				i3_Location = "Rear";
				i4_Location = "";

				if(tire.hasTirePair) {
					i1_Location += " Right";
					i2_Location = "Front Left";
				} else if(tire.clarifier.indexOf("Left")>-1) {
					i1_Location += " Left";
				} else if(tire.clarifier.indexOf("Right")>-1) {
					i1_Location += " Right";
				}
				if(rearTire.hasTirePair) {
					i3_Location += " Right";
					i4_Location = "Rear Left";
				} else if(rearTire.clarifier.indexOf("Left")>-1) {
					i3_Location += " Left";
				} else if(rearTire.clarifier.indexOf("Right")>-1) {
					i3_Location += " Right";
				}
			} else if(tire.hasTirePair) {
				i1_Location = "Left";
				i2_Location = "Right";
			} else {
				if(tire.clarifier.indexOf("Left")>-1) i1_Location = "Left";
				else if(tire.clarifier.indexOf("Right")>-1) i1_Location = "Right";
			}

			if(i1_Location != "") $tireForm.append(generateHiddenInput("i1_Location", i1_Location));
			if(i2_Location != "") $tireForm.append(generateHiddenInput("i2_Location", i2_Location));
			if(i3_Location != "") $tireForm.append(generateHiddenInput("i3_Location", i3_Location));
			if(i4_Location != "") $tireForm.append(generateHiddenInput("i4_Location", i4_Location));

			$tireForm.append(generateHiddenInput("wishlist", "false", loop));
			$tireForm.append(generateHiddenInput("shipquote", "N", loop));
			$tireDiv.append($tireForm);

			$rItem = $('<div></div>',{"class":"prodContainer"});

			var soldOut = false;
			if(tire.isSoldOut && (!tire.hasTirePair || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isSoldOut)) && (!tire.hasRearTire || (tire.hasRearTire && rearTires[tire.rearTireIndex].isSoldOut && (!rearTires[tire.rearTireIndex].hasTirePair || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isSoldOut)))))
				soldOut = true;

			$rItem.append(getImageSec(tire, loop, tireURL, soldOut));
			var greaterThan50 = false;
			affirmPrice = 0;
			$rItem.append(getDetailsSec(tire, loop, tireURL, soldOut));

			// Add to Cart/Package Button
			if(!soldOut) {
				$rItem.append(getTireButton(tire, loop));
				$rItem.append(getAffirmDiv(tire, loop));
			}


			$tireForm.append($rItem);
			$tireForm.append($('<div></div>',{"class":"clear"}));
			$tireDiv.append($tireForm);
			$newSec.append($tireDiv);

			count++;
		}
		if(!tireMakeModelSearch && !shownTDG && !shownWinterPackage && totalTires>0) {
			if(fromWinter) {
                drawWinterPackageTile($newSec, true, false);
            } else {
                drawTDGTile($newSec, true, sortValue=="1")
            }
		}
		
		$("#tireContentDiv").replaceWith($newSec);
		$("#tireContentDiv").find('select').each(function() {
			trDropdown(this);
		});

		if(tireList.length>10) $("#pageBar, #pageBar2").show();

		if(filteredList.length <= 10) {
			$('#pagesSpan, #pagesSpan2, #viewPerPageSelectDiv, #viewPerPageSelectDiv2').hide();
		} else {
			$('#pagesSpan, #pagesSpan2, #viewPerPageSelectDiv, #viewPerPageSelectDiv2').show();
		}
		if(filteredList.length < 1) $('#compareTiresLink').hide();
		else $('#compareTiresLink').show();
		if(performBlurTrigger) {
			$('#viewPerPageSelect, #viewPerPageSelect2').trigger("blur");
			performBlurTrigger = false;
		}
	}
}

function drawWinterPackageTile($sec, first, needMargin) {
    initWinterPackage();
    if(first) {
		$sec.find('.firstPerf').removeClass('firstPerf');
		$sec.prepend($wppContent);
        $sec.find('.prodWrapper.TDG_tile').addClass('firstPerf');
	} else {
        $sec.find('.firstPerf').removeClass('firstPerf');
        $sec.find('.prodWrapper.TDG_tile').removeClass('WinterPromotionMarginTop');
        $sec.append($wppContent);
        if(needMargin) {
            $sec.find('.prodWrapper.TDG_tile').addClass('WinterPromotionMarginTop');
        }
    }
}

function initWinterPackage() {
    if (vehicleSearch) {
        if (hasPreferredPackage) {
            $wppContent = $("<div></div>",{"id":"resultsTDG","class":"prodWrapper clearafter TDG_tile winterPromotion"});

            $wppDiv = $("<div></div>",{"class":"toTDG"});
            $wppDiv.append($("<img />",{"src":"/content/dam/tirerack/desktop/tire/winter-tireStack.jpg","alt":"Winter / Snow Tire & Wheel Packages"}));
            $wppDesc = $("<div></div>",{"class":"toTDG_Desc"});
            $wppDesc.append($("<h2></h2>").append($("<span></span>").text("Your Preferred Winter / Snow")).append("<br>").append($("<span></span>",{"class":"redHeadline"}).text("Tire & Wheel Package")));
            $wppDesc.append($("<p></p>").text("Take a look at the Winter / Snow Tire & Wheel Package we created specifically for your " + autoMake + " " + autoModel + ".").append("<br><br>"));

            if(autoMake != null && autoMake != "" && autoYear != null && autoYear != "" && autoModel != null && autoModel != ""){
                var vehicleParams = "autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel);
                if(autoModClar != null && autoModClar != ""){
                    vehicleParams += "&autoModClar=" + encodeURIComponent(autoModClar);
                }
                $wppDesc.append($("<a></a>",{"class":"redGreater","href":"/snow/WinterPackageMain.jsp?"+vehicleParams+"&goToPerf=true","id":"createWinterSnowTireWheelPackage"}).text("View Your Package"));
            } else {
                $wppDesc.append($("<a></a>",{"class":"redGreater","href":"/content/tirerack/desktop/en/winter_snow/packages.html","id":"createWinterSnowTireWheelPackage"}).text("View Your Package"));
            }

            $wppDiv.append($wppDesc);
            $wppContent.append($wppDiv);
        } else {
            $wppContent = $("<div></div>",{"id":"resultsTDG","class":"prodWrapper clearafter TDG_tile winterPromotion"});

            $wppDiv = $("<div></div>",{"class":"toTDG"});
            $wppDiv.append($("<img />",{"src":"/images/tires/winterSnowPackages_vehicleNoPreferredPackage.png","alt":"Winter / Snow Tire & Wheel Packages"}));
            $wppDesc = $("<div></div>",{"class":"toTDG_Desc"});
            $wppDesc.append($("<h2></h2>").append($("<span></span>").text("Create a Winter / Snow")).append("<br>").append($("<span></span>",{"class":"redHeadline"}).text("Tire & Wheel Package")));
            $wppDesc.append($("<p></p>").text("Choose from our selection of winter / snow tires and wheels to create a package specifically for your " + autoMake + " " + autoModel + ".").append("<br><br>"));

            if(autoMake != null && autoMake != "" && autoYear != null && autoYear != "" && autoModel != null && autoModel != ""){
                var vehicleParams = "autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel);
           	    if(autoModClar != null && autoModClar != ""){
                    vehicleParams += "&autoModClar=" + encodeURIComponent(autoModClar);
                }
                $wppDesc.append($("<a></a>",{"class":"redGreater","href":"/snow/WinterPackageMain.jsp?"+vehicleParams+"&goToPerf=true","id":"createWinterSnowTireWheelPackage"}).text("Create a Package"));
            } else {
                $wppDesc.append($("<a></a>",{"class":"redGreater","href":"/content/tirerack/desktop/en/winter_snow/packages.html","id":"createWinterSnowTireWheelPackage"}).text("Create a Package"));
            }

            $wppDiv.append($wppDesc);
            $wppContent.append($wppDiv);
        }
    } else {
        $wppContent = $("<div></div>",{"id":"resultsTDG","class":"prodWrapper clearafter TDG_tile winterPromotion"});

        $wppDiv = $("<div></div>",{"class":"toTDG"});
        $wppDiv.append($("<img />",{"src":"/images/tires/winterSnowPackages_noVehicle.png","alt":"Winter / Snow Tire & Wheel Packages"}));
        $wppDesc = $("<div></div>",{"class":"toTDG_Desc"});
        $wppDesc.append($("<h2></h2>").append($("<span></span>").text("Winter / Snow")).append("<br>").append($("<span></span>",{"class":"redHeadline"}).text("Tire & Wheel Package")));
        $wppDesc.append($("<p></p>").text("Affordable Tire & Wheel Packages for winter are available for more that 10,000 different vehicles.").append("<br><br>"));
        $wppDesc.append($("<a></a>",{"class":"redGreater","href":"/content/tirerack/desktop/en/winter_snow/packages.html","id":"createWinterSnowTireWheelPackage"}).text("Build a Package for Your Vehicle"));
        $wppDiv.append($wppDesc);
        $wppContent.append($wppDiv);
    }
}

function drawTDGTile($sec, first, showHeader) {
	initTDG();
	if(first) {
		$sec.find('.firstPerf').removeClass('firstPerf');
		$sec.prepend($tdgContent);
		if(showHeader) {
			$sec.prepend($tdgHeader);
			$sec.find('.perfHeader.TDG_tile').addClass('firstPerf');
		} else {
			$sec.find('.prodWrapper.TDG_tile').addClass('firstPerf');
		}
	} else {
		$('.TDG_tile').removeClass('firstPerf');
		if(showHeader) {
			$sec.append($tdgHeader);
		}
		$sec.append($tdgContent);
	}
}

function initTDG() {
/**/
    $tdgHeader = $("<div></div>",{"id":"resultsTDGHeader","class":"perfHeader clearafter TDG_tile"});
    $tdgHeader.append("<h6>Tire Decision Guide</h6>");

    $tdgContent = $("<div></div>",{"id":"resultsTDG","class":"prodWrapper clearafter TDG_tile"});
    $tdgNoResults = $("<div></div>",{"id":"noResultsTDG","class":"prodWrapper clearafter TDG_tile"});


    if(vehicleSearch) {
        $tdgDiv = $("<div></div>",{"class":"toTDG"});
        $tdgDiv.append($("<img />",{"src":"/images/tires/iPad_TireDecisionGuide.png","alt":"Tire Decision Guide"}));
        $tdgDesc = $("<div></div>",{"class":"toTDG_Desc"});
        $tdgDesc.append($("<h2></h2>").append($("<span></span>").css("color","#000000").text("WHAT'S THE ")).append($("<span></span>").css("color","#D70000").text("RIGHT TIRE FOR ME?")));
        $tdgDesc.append($("<p></p>").append("Answer just a few questions in our Tire Decision Guide and we'll<br>recommend the tires that are right for your " + autoMake + " " + autoModel + ".<br><br>"));

        if(haveTDGResults) {
            $tdgDesc.append($("<a></a>",{"class":"redGreater","href":"#","id":"startOverWithSameVehicleAndSize"}).text("Return to Tire Decision Guide"));
        } else {
            if(fromWinter){
                $tdgDesc.append($("<a></a>",{"class":"redGreater","href":"/tires/dg/SelectTireSize.jsp?haveSize=true&fromWinter=true&"+pageParams,"id":"startOverWithSameVehicleAndSizeNoTDGResults2"}).text("Let's Get Started"));
            }else{
                $tdgDesc.append($("<a></a>",{"class":"redGreater","href":"/tires/dg/SelectTireSize.jsp?haveSize=true&"+pageParams,"id":"startOverWithSameVehicleAndSizeNoTDGResults2"}).text("Let's Get Started"));
            }
        }
    } else {
        $tdgDiv = $("<div></div>",{"class":"toTDG"});
        $tdgDiv.append($("<img />",{"src":"/content/dam/tirerack/desktop/components/textandimagecarousel/TDG_Carousel_0419.png","alt":"Tire Decision Guide", "style":"margin-left: 20px;"}));
        $tdgDesc = $("<div></div>",{"class":"toTDG_Desc"});
        $tdgDesc.append($("<h2></h2>").append($("<span></span>").css("color","#000000").text("WHAT'S THE ")).append($("<span></span>").css("color","#D70000").text("RIGHT TIRE FOR ME?")));
        $tdgDesc.append($("<p></p>").append("We make it easy to decide. Just tell us what you drive, how you drive <br>it and how you want your tires to feel. We'll do the rest.<br><br>"));

        if(haveTDGResults) {
            $tdgDesc.append($("<a></a>",{"class":"redGreater","href":"#","id":"startOverWithSameVehicleAndSize", "style":"margin-top: 20px;"}).text("Return to Tire Decision Guide"));
        } else {
            $tdgA = $("<a></a>",{"class":"redGreater","href":"javascript:void()", "style":"margin-top: 20px;"}).text("Let's Get Started");
            $tdgA.on("click",function(){openInfoBox('/tires/dg/SelectVehiclePopup.jsp');return false;});
            $tdgDesc.append($tdgA);
        }
    }

    $tdgDiv.append($tdgDesc);
    $tdgContent.append($tdgDiv);
    $tdgContent.children().clone().appendTo($tdgNoResults);
    if($('#noResultsTDG').length == 0){
       $('#noResultsDiv').prepend($tdgNoResults);
    }
}

function selectRecommendedLoadRatings(){
	deselectAllCheckboxes('loadRatingFilter', 'load_rating');
	var checkBoxes = document.forms.loadRatingFilter.load_rating;

	for(i = 0; i < checkBoxes.length; i++){
		if(recommendedLoadRatings.indexOf(checkBoxes[i].value) > -1) { 
			checkBoxes[i].checked = true;
		}
	}
	if(typeof checkBoxes.length === "undefined") {
		if(recommendedLoadRatings.indexOf(checkBoxes.value) > -1) {
			checkBoxes.checked = true;
		}
	}
}
			
function selectRecommendedSpeedRatings(){
	deselectAllCheckboxes('speedRatingFilter', 'speed_rating');
	var checkBoxes = document.forms.speedRatingFilter.speed_rating;

	for(i = 0; i < checkBoxes.length; i++){
		if(recommendedSpeedRatings.indexOf(checkBoxes[i].value) > -1) { 
			checkBoxes[i].checked = true;
		}
	}
	if(typeof checkBoxes.length === "undefined") {
		if(recommendedSpeedRatings.indexOf(checkBoxes.value) > -1) {
			checkBoxes.checked = true;
		}
	}
}

function buildRecSpeedRatings() {
	if(recSpeedRatingsBuilt) return;
	var checkBoxes = document.forms.speedRatingFilter.speed_rating;
	for(i = 0; i < checkBoxes.length; i++){
		window.recommendedSpeedRatings.push(checkBoxes[i].value);
	}
	recSpeedRatingsBuilt = true;
}

function updateBrandList(){
	var checkBoxes = document.forms.brandFilter.manufacturer;

	brandList = new Array();

	var index = 0;
	for(i = 0; i < checkBoxes.length; i++){
        if($(checkBoxes[i]).prop('checked') === true){
			brandList[index] = $(checkBoxes[i]).prop('value');
			index++;
		}
	}
}

function updateSpeedRatingList(){
	var checkBoxes = document.forms.speedRatingFilter.speed_rating;

	speedRatingList = new Array();

	var index = 0;
	for(i = 0; i < checkBoxes.length; i++){
		if($(checkBoxes[i]).prop('checked') === true){
			speedRatingList[index] = decodeURIComponent($(checkBoxes[i]).prop('value'));
			index++;
		}
	}
	if(typeof checkBoxes.length === "undefined") {
		if($(checkBoxes).prop('checked')) speedRatingList[0] = $(checkBoxes).prop('value');
	}
}

function updateLoadRatingList(){
	var checkBoxes = document.forms.loadRatingFilter.load_rating;

	loadRatingList = new Array();

	var index = 0;
	for(i = 0; i < checkBoxes.length; i++){
		if($(checkBoxes[i]).prop('checked') === true){
			loadRatingList[index] = $(checkBoxes[i]).prop('value');
			index++;
		}
	}
	if(typeof checkBoxes.length === "undefined") {
		if($(checkBoxes).prop('checked')) loadRatingList[0] = $(checkBoxes).prop('value');
	}
}

function updatePerformanceCategoryList(){
	var checkBoxes = document.forms.perfCatFilter.performance;

	performanceCategoryList = new Array();

	var index = 0;
	for(i = 0; i < checkBoxes.length; i++){
        if($(checkBoxes[i]).prop('checked') === true){
			performanceCategoryList[index] = $(checkBoxes[i]).prop('value');
			index++;
		}
	}
}

function updateRunFlat(){
    runFlatChoice = ($("#filterRunFlat :input[name='RunFlat']").prop('checked') === true ? "Y" : "N");
    nonRunFlatChoice = ($("#filterRunFlat :input[name='NonRunFlat']").prop('checked') === true ? "Y" : "N");
}

function updateLRR(){
    lrrChoice = ($("#filterLRR :input[name='LRR']").prop('checked') === true ? "Y" : "N");
    lrrNoChoice = ($("#filterLRR :input[name='NoLRR']").prop('checked') === true ? "Y" : "N");
}

function updateSidewall(){
	sidewallBWChoice = ($("#filterLRR :input[name='sidewallBW']").prop('checked') === true ? "Y" : "N");
	sidewallWWChoice = ($("#filterLRR :input[name='sidewallWW']").prop('checked') === true ? "Y" : "N");
	sidewallWLChoice = ($("#filterLRR :input[name='sidewallWL']").prop('checked') === true ? "Y" : "N");
	sidewallODChoice = ($("#filterLRR :input[name='sidewallOD']").prop('checked') === true ? "Y" : "N");
}

function updateSSSR(){
    sssrChoice = ($("#filterSSSR :input[name='SSSRW']").prop('checked') === true ? "Y" : "N");
    sssrWChoice = ($("#filterSSSR :input[name='SSSRW']").prop('checked') === true ? "Y" : "N");
    sssrAChoice = ($("#filterSSSR :input[name='SSSRA']").prop('checked') === true ? "Y" : "N");
    sssrNoChoice = ($("#filterSSSR :input[name='NoSSSR']").prop('checked') === true ? "Y" : "N");
}

function updateNew(){
	newChoice = ($("#filterNew :input[name='filterNew']").prop('checked') === true ? "Y" : "N");
}

function updateSC(){
	scChoice = ($("#filterSC :input[name='filterSC']").prop('checked') === true ? "Y" : "N");
}

function updateDelivered(){
	day1Choice = ($("#filterDelivery :input[name='day1Delivery']").prop('checked') === true ? "Y" : "N");
	day2Choice = ($("#filterDelivery :input[name='day2Delivery']").prop('checked') === true ? "Y" : "N");
}

var performBlurTrigger = false;
function updateViewPerPage(pageSelectVal) {
	$('div.loadingLayer').removeClass('hide');
	startIndex = 0;
	currentPage = 1;
	$('#viewPerPageSelect, #viewPerPageSelect2').val(pageSelectVal);
	if(pageSelectVal<viewPerPage) {
		$('#viewPerPageSelect, #viewPerPageSelect2').one("blur",function(){scrollToTop()});
		performBlurTrigger = true;
	} else {
		tempScrollPosition = $(document).scrollTop();
		$('#viewPerPageSelect, #viewPerPageSelect2').one("blur",function(){$(document).scrollTop(tempScrollPosition);});
		performBlurTrigger = true;
	}
	/*if(pageSelectVal >= filteredList.length){
		viewPerPage = filteredList.length;
	}else{*/
		viewPerPage = pageSelectVal;
	//}

 	updateTireContentDiv();
	affirmRefresh();

	createPages();

	// Tara is combining these calls 10/12
	updateViewStartCurrentInBean();

	if(pages <= 1) $("#pagesSpan, #pagesSpan2").hide();
	$('div.loadingLayer').addClass('hide');
}

function scrollToTop(){
	disableHeaderScroll();
	$("#viewByOption")[0].focus();
	$("#viewByOption")[0].scrollIntoView();
	enableHeaderScroll();
}

function viewAll(){
	startIndex = 0;
	currentPage = 1;
	viewPerPage = (filteredList.length>100?100:viewPerPage);

 	updateTireContentDiv();
	affirmRefresh();
	
	// Tara is combining these calls 10/12
        updateViewStartCurrentInBean();
		
	$("#pagesSpan, #pagesSpan2").hide();
}

/* Update viewPerPage in tireSearchBean */
function setViewPerPageInBean(){
	var url = "/tires/TireSearchControlServlet?ajax=true&action=updateViewPerPage&viewPerPage=" + viewPerPage;
	ajaxURL(url);
}

/* Update startIndex in tireSearchBean */
function setStartIndexInBean(){
	var url = "/tires/TireSearchControlServlet?ajax=true&action=updateStartIndex&startIndex=" + startIndex;
	ajaxURL(url);
}

function createPages(){
	var totalFilteredTires = filteredList.length;
	pages = Math.floor(totalFilteredTires / viewPerPage);
	if(totalFilteredTires % viewPerPage != 0) pages++;
	startPage = 1;
	endPage = pages;
					
	while(currentPage > (startPage-1) + maxPages){
		startPage += maxPages;
	}
		
	if((startPage-1) + maxPages <= endPage){
		endPage = (startPage-1) + maxPages;
	}

	if(pages <= 1){
		$("#pagesSpan, #pagesSpan2").hide();
	}else{
		document.getElementById("pagesSpan").style.display = "inline-block";
		document.getElementById("pagesSpan2").style.display = "inline-block";
		$("#pagesSpan, #pagesSpan2").show();

		updatePagesSpan();
	}
}

/* Updates the following:
 * 1) previous and next arrows
 * 2) view per page select menus
 * 3) create the page numbers 
 */
function updatePagesSpan(){

	$prevArrow = $("#prevArrowLink, #prevArrowLink2");
	$nextArrow = $("#nextArrowLink, #nextArrowLink2");

	if(currentPage > 1){
		$prevArrow.removeClass("page-disabled");
	}else{
		$prevArrow.addClass("page-disabled");
	}
	
	if(currentPage < pages){
		$nextArrow.removeClass("page-disabled");
	}else{
		$nextArrow.addClass("page-disabled");
	}

	if(startPage > 1) $("#dot1, #dot1_2").show();
	else $("#dot1, #dot1_2").hide();

	$b = $('<ul></ul>',{"id":"pageNumbers"});
	for(x = startPage; x <= endPage; x++){
		if(x == currentPage){
			$b.append($('<li></li>').append($('<a></a>',{"href":"#","class":"current","text":x})));
		}else{
			$b.append($('<li></li>').append($('<a></a>',{"onclick":"goToPage("+x+"); return false;","href":"/tires/TireSearchControlServlet?action=updateStartIndex&startIndex="+(x*viewPerPage),"text":x})));
		}
	}
	if(pages > endPage) $("#dot2, #dot2_2").show();
	else $("#dot2, #dot2_2").hide();
	
	$('#pageNumbers, #pageNumbers2').replaceWith($b);
}

function getImageSec(tire, loop, url,soldOut){
	$imgSec = $('<div></div>',{"class":"prodImg"});
	$recSec = $('<div></div>',{"class":"specialProdLabels"});

	//OE Icon
	if(tire.isOE && (!tire.hasTirePair || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isOE)) && (!tire.hasRearTire || (tire.hasRearTire && rearTires[tire.rearTireIndex].isOE && (!rearTires[tire.rearTireIndex].hasTirePair || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isOE))))){
		if(tire.perfCode == "W")
			$recSec.append($('<span></span>',{"class":"left","text":"O.E.-Approved"}));
		else
			$recSec.append($('<span></span>',{"class":"left","text":"Original Equipment"}));
	}

	//Best Seller Icon
	var bestSeller = false;
	if(tire.isBestSeller || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isBestSeller) || (tire.hasRearTire && tire.rearTireIndex > -1 && (rearTires[tire.rearTireIndex].isBestSeller || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isBestSeller)))){
		$recSec.append($('<span></span>',{"class":"left","text":"Best Seller"}));
	}

	// New Icon
	if(tire.isNew || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isNew) || (tire.hasRearTire && tire.rearTireIndex > -1 && (rearTires[tire.rearTireIndex].isNew || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isNew)))){
		$recSec.append($('<span></span>',{"class":"left"}).html('New'));
	}

    if((shipZip=="" || lower48) && tire.inboardedFrtFlag=="Y" && (!tire.hasRearTire || (tire.hasRearTire && rearTires[tire.rearTireIndex].inboardedFrtFlag=="Y"))) {
        $imgSec.append('<a href="'+url+'" onclick="trackProductSelect('+loop+');" class="aly_products" data-tireposition="'+loop+'"><img class="tirePhoto"'+(showHidePhotos!="Show"?' style="display:none;"':'')+' src="'+tire.image+'?impolicy=tow-tiles&imwidth=190" alt="' + tire.tireMake + ' ' + tire.tireModel + '" width="190"></a>');
    } else {
        $imgSec.append('<a href="'+url+'" onclick="trackProductSelect('+loop+');" class="aly_products" data-tireposition="'+loop+'"><img class="tirePhoto"'+(showHidePhotos!="Show"?' style="display:none;"':'')+' src="'+tire.image+'?impolicy=tow-tiles&imwidth=190" alt="' + tire.tireMake + ' ' + tire.tireModel + '" width="190"></a>');
	}
    $fullWDiv = $('<div></div>',{"class":"compare"});
    if(!soldOut && (!tire.hasTirePair && !tire.hasRearTire) || (tire.hasRearTire)){
        var compareChecked = compareTiresList!=null && compareTiresList!="" && (compareTiresList.indexOf(tire.partNumber) > -1);
        $fullWDiv.append('<checkbox class="compareList '+(compareChecked?'on':'off')+'" id="check-'+tire.partNumber+'"><input type="checkbox" checked="'+(compareChecked?'checked':'')+'" name="compareList" value="'+tire.partNumber+'" onchange="updateCompareTiresList(\''+tire.partNumber+'\')"></checkbox><span class="prodCompare">Compare</span>');
    }
    $imgSec.append($fullWDiv);
	$prodRating = $('<div></div>',{"class":"productRating","id":"review_"+tire.partNumber});
	var starCSS = Math.round(tire.reviewerAvgRating);
	var tireAvgRatingTotal = (isNaN(tire.avgRatingTotal)?'0':tire.avgRatingTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	var ratingsTotal = (isNaN(tire.reviewersTotal)?'0':tire.reviewersTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	var commentsTotal = (isNaN(tire.commentsTotal)?'0':tire.commentsTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$aRating = $('<span></span>',{"class":"avgRating"});
	if(tire.projection) {
		$aRating.append('<div class="tireRackProjection">Tire Rack Projection</div>');
	} else if(ratingsTotal != '0'){
		var starRatingDivContent = '<span class="blue">('+ratingsTotal+')</span><div class="starRating-small"><span class="star_' + (isNaN(starCSS)?'0':starCSS) + '"></span></div>'; 
		$aRating.append('<div>'+starRatingDivContent+'</div>');
	} else {
		$aRating.append('<span class="blue">Not Yet Rated</span>');
	}
	var naAverage = tire.reviewerAvgRating=="N/A";
	var naStar = tire.starRating=="N/A";
	//var reviewsLink = '/survey/SurveyComments.jsp?additionalComments=y&commentStatus=P&tireMake='+ encodeURIComponent(tire.tireMake) +'&tireModel='+ encodeURIComponent(tire.tireModel) +'&partnum='+ encodeURIComponent(tire.partNumber);
	var vehType = (tire.perfCode=='W'?"&VT="+(tire.perfShort=='LTSIS' || tire.perfShort=='LTSW' ||tire.perfShort=='LTPW'?"LT":"C"):"");
	var surveyAuto = "";
	if(autoMake != null && autoMake != "" && autoYear != null && autoYear != "" && autoModel != null && autoModel != ""){
		surveyAuto = "&autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel);
		if(autoModClar != null && autoModClar != ""){
			surveyAuto += "&autoModClar=" + encodeURIComponent(autoModClar);
		}
	}
	var vehType = (tire.perfCode=='W'?"&VT="+(tire.perfShort=='LTSIS' || tire.perfShort=='LTSW' ||tire.perfShort=='LTPW'?"LT":"C"):"");
	if(ratingsTotal != '0' || tire.projection){
		$aRating.append($('<div></div>',{"class":"categoryCaret"}));
		$divBreakdown = $('<div></div>',{"class":"breakdown category projBreakdown"});
		$barTotalStars = $('<div></div>',{"class":"barTotalStars category"});
		var catNames = ["Off-Road","Wet","Dry","Winter/Snow","Comfort","Treadwear"];
		var catLabels = ["Off-Road Drive Rating","Wet Drive Rating","Dry Rating","Winter Snow Rating","Comfort Rating","Treadwear Rating"];
		var catRatings = tire.catRatings.split(":");
		for(var i=0; i<catRatings.length; i++) {
			var catRatingNum = parseFloat(catRatings[i]);
			if(i!=0 || offRoadPefs.indexOf(tire.perfShort)>=0)
				$barTotalStars.append($('<div></div>',{"style":"margin-bottom: 0px ! important"}).append('<div class="breakdownCategory">'+catNames[i]+': </div><div class="barsOff" title="'+catRatings[i]+'" alt="'+catRatings[i]+'"><div class="barsOn '+getBGClass(catRatings[i])+'" style="width:'+(parseFloat(catRatings[i])*10)+'%" title="'+catRatings[i]+'" alt="'+catRatings[i]+'"></div></div>'+(tire.projection?'':'&nbsp;<span>'+(catRatingNum>0?(catRatingNum).toFixed(1):"N/A")+'</span>')));
		}
		$divBreakdown.append($barTotalStars);
		$divNumAvgs = $('<div></div>',{"class":"numAvgs category"+(tire.projection?" projection":"")});
		if(tire.projection) {
			$divNumAvgs.append('<sbold>Tire Rack Projection</sbold><br>This tire hasn\'t yet received enough consumer feedback to be given a rating. These projections reflect how we expect the tire to perform.<br/>');
		} else {
			$divNumAvgs.append('<span class="applicable"><span>'+(Math.round(10*tire.reviewerAvgRating)/10)+'</span> / 10</span>');
			$divNumAvgs.append('<span class="averageRating">Average Rating</span>');
			$divNumAvgs.append('<a href="'+url+'#RatingsReviews">Reviews<span class="redText"> &gt;</span></a><br>');
		}
		$divNumAvgs.append('<a href="/tires/surveyresults/surveydisplay.jsp?type='+tire.perfCode+vehType+"&"+sizesEncoded+(surveyAuto==""?"":"&"+surveyAuto)+'&cameFrom=TSR">Category Ratings Charts<span class="redText"> &gt;</span></a>');

		$divBreakdown.append($divNumAvgs);
		$aRating.append($divBreakdown);
	} else {
		//$aRating.append($('<div></div>',{"class":"categoryCaret"}));
		$divBreakdown = $('<div></div>',{"class":"breakdown category noRating"});
		$divNumAvgs = $('<div></div>',{"class":"numAvgs category"}).append('<span style="line-height: 14px; margin: 0px;" class="averageRating"><sbold>Not Yet Rated</sbold><br>This tire hasn\'t yet received enough consumer feedback to be given a rating. <a href="/survey/index.jsp?tireMake='+encodeURIComponent(tire.tireMake)+'&tireModel='+encodeURIComponent(tire.tireModel)+'">Add your ratings and reviews</a> to help others considering this tire.<br><br>See how all tires in the performance category compare using the <a href="/tires/surveyresults/surveydisplay.jsp?type='+tire.perfCode+vehType+"&"+sizesEncoded+(surveyAuto==""?"":"&"+surveyAuto)+'&cameFrom=TSR">Consumer Ratings Chart</a>.</span></div>');
		$divBreakdown.append($divNumAvgs);
		$aRating.append($divBreakdown);
	}
	$prodRating.append($aRating);
	if(commentsTotal!='0' && ratingsTotal!='0') $prodRating.append($('<span>',{'class':'reviewDiv'}).text(' | '));
	if(commentsTotal!='0' && ratingsTotal!='0') $prodRating.append($('<a>',{'class':'reviewCt','href':url+'#RatingsReviews'}).text('Reviews ('+commentsTotal+')'));
	/*else $prodRating.append($('<span>',{'class':'reviewCt'}).text('Reviews ('+commentsTotal+')'));*/
	$prodRating.append($('<div>',{'class':'clear'}));
	$imgSec.append($prodRating);
	$imgSec.append($recSec);
	if(tire.isConsumerRecommended)
		$imgSec.append($('<div></div>',{"class":"consumerRecommended"}).append($('<a></a>',{"href":url+'#RatingsReviews',"text":"Consumer Recommended"})));
	if(tire.hasTests)
		$imgSec.append($('<div></div>',{"class":"tireRackTested"}).append($('<a></a>',{"href":url+'#testResults',"text":"Tire Rack Tested"})));
	$imgSec.append($('<div></div>',{"class":"clear"}));

	return $imgSec;
}

function submitCompareBSTires(){
	if(compareBSTires.length == 0){
		openInfoBox('/modalPopups/genericAlert.jsp?message=There+are+no+Best+Sellers+available.', 'Important: Data Required.', 'default', 'default');
	}else{
		document.location = "/tires/CompareTires.jsp?compareBSTires=true"+(wtpackage=="true"?"&wtpackage=true":"");
	}
}

function submitCompareTires(){
	if(compareTiresList.length == 0){
		openInfoBox('/modalPopups/genericAlert.jsp?message=Please+select+tires+to+compare.', 'Important: Selection Required.', '250', 'default');
	}else{
		document.location = "/tires/CompareTires.jsp"+(wtpackage=="true"?"?wtpackage=true":"")+(tireMakeModelSearch?(wtpackage=="true"?"&":"?")+"tireMake="+encodeURIComponent(tireMake)+"&tireModel="+encodeURIComponent(tireModel):"");
	}
}

function getDetailsSec(tire, loop, tireURL, soldOut) {
	$detailSec = $('<div></div>',{"class":"prodDetails"});
	$detailSec.append('<a href="'+tireURL+'" onclick="trackProductSelect('+loop+');" class="aly_products" data-tireposition="'+loop+'"><span class="prodBrand">'+tire.tireMake.toUpperCase()+'<br><span>'+tire.tireModel.toUpperCase()+'</span></span></a>');
	$detailSec.append('<a href="/tires/types/tireTypeModal.jsp?subCat='+tire.perfShort+'" class="tireCat show-content-popup" onclick="setPerfCatModalAnalytics(\''+tire.perfLong+'\');openInfoBox(this.href, this.title, \'default\', \'default\'); return false;" title="'+tire.perfLong+'">'+tire.perfLong+'</a>');
	// .onclick = function(){ openInfoBox(this.href, tire.perfLong, 'default', 'default');return false;};	

        var frontQty = 4;
        var rearQty = 2;
	// Limit qty based on missing left/right pair
	var frontIsLeftRight = false;
	if(tire.clarifier != '' && tire.hasTirePair!=true && tire.tirePairIndex <0 && (tire.clarifier.indexOf("Left") > -1 || tire.clarifier.indexOf("Right") >-1)) {
		frontQty = (tire.hasRearTire && tire.rearTireIndex > -1?1:2);
		frontIsLeftRight = true;
	}
	if(tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].clarifier != '' && rearTires[tire.rearTireIndex].hasTirePair!=true && rearTires[tire.rearTireIndex].tirePairIndex <0 && (rearTires[tire.rearTireIndex].clarifier.indexOf("Left") > -1 || rearTires[tire.rearTireIndex].clarifier.indexOf("Right") >-1)) {
		rearQty = 1;

	}

	if(tire.perfCode == "TEMP") {
		frontQty = 1;
	} else if(tire.hasRearTire && tire.rearTireIndex > -1) {
        if(tire.hasTirePair && tire.tirePairIndex > -1) {
            frontQty = 1;
        } else {
		    if(tire.restrictedQty == 1) {
			    frontQty = 1;
		    } else {
                frontQty = frontIsLeftRight?1:2;
		    }
        }

        if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 || rearTires[tire.rearTireIndex].restrictedQty == 1) {
                        rearQty = 1;
        }
    } else if(tire.hasTirePair) {
	    if(tire.restrictedQty == 1) {
            frontQty = 1;
	    } else {
            frontQty = frontIsLeftRight?1:2;
	    }
    } else if(tire.restrictedQty > 0 && tire.restrictedQty < frontQty) {
        frontQty = tire.restrictedQty;
    }
    if((tire.specCode=="6" || tire.specCode=="7" || tire.specCode=="8" || tire.specCode=="9") && frontQty > tire.maxQty) frontQty = tire.maxQty;
    if((tire.specCode=="6" || tire.specCode=="7" || tire.specCode=="8" || tire.specCode=="9") && tire.hasRearTire && tire.rearTireIndex > -1) {
        if(rearTires[tire.rearTireIndex].maxQty < rearQty) rearQty = Number(rearTires[tire.rearTireIndex].maxQty);
    }
	var hasPair = (tire.hasTirePair && tire.tirePairIndex > -1);
	var hasRear = (tire.hasRearTire && tire.rearTireIndex > -1);
	var k = 1;
    instantRebateObj = {};
    instantRebateTotal = 0;

	if(!tire.isSoldout) {
		var priceTotal = 0;
		var totalQty = 0;
		var rebateTotal = 0;
		var rebateTotalMinusCC = 0;
		var rebateAmt = 0;
		var cpuDiscount = 0;
		if(tire.specCode != "4") {
			cpuDiscount = Number(tire.inboardedFrt * frontQty);
			priceTotal = Number(tire.price * frontQty);
			totalQty = Number(totalQty + frontQty);
            if(tire.hasRebate) {
                var maxQty = 8;
                var maxForTire = tire.restrictedQty;
                if(tire.maxQty > 0 || (maxForTire > 0 && maxForTire > tire.maxQty)) maxQty = tire.maxQty;
                if(maxForTire > 0 && maxForTire < maxQty) maxQty = maxForTire;
                var rebateHash = tire.tireMake+':'+tire.rebate+':'+tire.rebateQty+":"+tire.rebateAmt;
                instantRebateObj[rebateHash] = {qty:0,maxQty:0,partnums:[]};
                instantRebateObj[rebateHash].qty += parseInt(frontQty);
                instantRebateObj[rebateHash].maxQty += parseInt(maxQty);
                instantRebateObj[rebateHash].partnums.push(tire.partNumber);
            }
        }
        if(tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].specCode != "4") {
			cpuDiscount += Number(tirePairs[tire.tirePairIndex].inboardedFrt * frontQty);
			priceTotal += Number(tirePairs[tire.tirePairIndex].price * frontQty);
			totalQty = Number(totalQty + frontQty);
            if(tirePairs[tire.tirePairIndex].hasRebate) {
                var checkTire = tirePairs[tire.tirePairIndex];
                var maxQty = 8;
                var maxForTire = checkTire.restrictedQty;
                if(checkTire.maxQty > 0 || (maxForTire > 0 && maxForTire > checkTire.maxQty)) maxQty = checkTire.maxQty;
                if(maxForTire > 0 && maxForTire < maxQty) maxQty = maxForTire;
                var rebateHash = tirePairs[tire.tirePairIndex].tireMake+':'+tirePairs[tire.tirePairIndex].rebate+':'+tirePairs[tire.tirePairIndex].rebateQty+':'+tirePairs[tire.tirePairIndex].rebateAmt;
                if(!instantRebateObj[rebateHash])
                    instantRebateObj[rebateHash] = {qty:0,maxQty:0,partnums:[]};
                instantRebateObj[rebateHash].qty += parseInt(frontQty);
                instantRebateObj[rebateHash].maxQty += parseInt(maxQty);
                instantRebateObj[rebateHash].partnums.push(tirePairs[tire.tirePairIndex].partNumber);
            }
		}
		if(tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].specCode != "4") {
			cpuDiscount += Number(rearTires[tire.rearTireIndex].inboardedFrt * rearQty);
			priceTotal += Number(rearTires[tire.rearTireIndex].price * rearQty);
			totalQty = Number(totalQty + rearQty);
            if(rearTires[tire.rearTireIndex].hasRebate) {
                var checkTire = rearTires[tire.rearTireIndex];
                var maxQty = 8;
                var maxForTire = checkTire.restrictedQty;
                if(checkTire.maxQty > 0 || (maxForTire > 0 && maxForTire > checkTire.maxQty)) maxQty = checkTire.maxQty;
                if(maxForTire > 0 && maxForTire < maxQty) maxQty = maxForTire;
                var rebateHash = rearTires[tire.rearTireIndex].tireMake+':'+rearTires[tire.rearTireIndex].rebate+':'+rearTires[tire.rearTireIndex].rebateQty+':'+rearTires[tire.rearTireIndex].rebateAmt;
                if(!instantRebateObj[rebateHash])
                    instantRebateObj[rebateHash] = {qty:0,maxQty:0,partnums:[]};
                instantRebateObj[rebateHash].qty += parseInt(rearQty);
                instantRebateObj[rebateHash].maxQty += parseInt(maxQty);
                instantRebateObj[rebateHash].partnums.push(rearTires[tire.rearTireIndex].partNumber);
            }
			if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].specCode != "4") {
				cpuDiscount += Number(tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].inboardedFrt * rearQty);
				priceTotal += Number(tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].price * rearQty);
				totalQty = Number(totalQty + rearQty);
                if(tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].hasRebate) {
                    var checkTire = tirePairs[rearTires[tire.rearTireIndex].tirePairIndex];
                    var maxQty = 8;
                    var maxForTire = checkTire.restrictedQty;
                    if(checkTire.maxQty > 0 || (maxForTire > 0 && maxForTire > checkTire.maxQty)) maxQty = checkTire.maxQty;
                    if(maxForTire > 0 && maxForTire < maxQty) maxQty = maxForTire;
                    var rebateHash = tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].tireMake+':'+tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].rebate+':'+tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].rebateQty+":"+tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].rebateAmt;
                    if(!instantRebateObj[rebateHash])
                        instantRebateObj[rebateHash] = {qty:0,maxQty:0,partnums:[]};
                    instantRebateObj[rebateHash].qty += parseInt(rearQty);
                    instantRebateObj[rebateHash].maxQty += parseInt(maxQty);
                    instantRebateObj[rebateHash].partnums.push(tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].partNumber);
                }
			}
		}
	} //end getting totalQty for detailDiv	
	$detailSec.append(getDetailDiv(tire, loop, frontQty, (hasPair || hasRear), tireURL, k++, soldOut, totalQty));

	//Tire Pair
	if(hasPair) {
		$detailSec.append(getDetailDiv(tirePairs[tire.tirePairIndex], loop, frontQty, hasRear, tireURL, k++, soldOut, totalQty));
	}

	if(hasRear) {
		var rearTire = rearTires[tire.rearTireIndex];
		if(rearTire.hasTirePair) {
			$detailSec.append(getDetailDiv(rearTire, loop, rearQty, true, tireURL, k++, soldOut, totalQty));

			var rearTirePair = tirePairs[rearTire.tirePairIndex];
			$detailSec.append(getDetailDiv(rearTirePair, loop, rearQty, false, tireURL, k++, soldOut, totalQty));
		} else {
			$detailSec.append(getDetailDiv(rearTire, loop, rearQty, false, tireURL, k++, soldOut, totalQty));
		}
	}
	if(!tire.isSoldout) {
        if(instantRebateTotal > 0) {
            priceTotal -= instantRebateTotal;
        }
		if(totalQty >= 4) {
			if(tire.promoValue) {
				rebateTotal = Number(priceTotal - tire.promoValue);
				var addtlValue = tire.promoTotalAddtlValue;
				//console.log("tire partnum " + tire.partNumber + " " + "addtlValue: " + addtlValue);
				//console.log("tire.promo1AddtlValue: " + tire.promo1AddtlValue);
				rebateTotalMinusCC = rebateTotal - addtlValue;
				rebateAmt = tire.promoValue;
			} 
			if(tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].specCode != "4") {
				rebateTotal = Number(priceTotal - tirePairs[tire.tirePairIndex].promoValue);
				var addtlValue = tirePairs[tire.tirePairIndex].promoTotalAddtlValue;  
				//console.log("hasTirePair tire partnum " + tire.partNumber + " " + "addtlValue: " + addtlValue);
				rebateTotalMinusCC = rebateTotal - addtlValue;
				rebateAmt = tirePairs[tire.tirePairIndex].promoValue;
			}
			if(tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].specCode != "4") {
				if(rearTires[tire.rearTireIndex].specCode != "4"){
					rebateTotal = Number(priceTotal - rearTires[tire.rearTireIndex].promoValue);
					var addtlValue = rearTires[tire.rearTireIndex].promoTotalAddtlValue; 
					rebateTotalMinusCC = rebateTotal - addtlValue;
					rebateAmt = rearTires[tire.rearTireIndex].promoValue;
				}
				if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].specCode != "4"){
					rebateTotal = Number(priceTotal - tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].promoValue);
					var addtlValue = tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].promoTotalAddtlValue;	
					rebateTotalMinusCC = rebateTotal - addtlValue;
					rebateAmt = tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].promoValue;
				}
			}
		} else if(tire.promoCode == "P347" && totalQty >= 2) { //P347
			rebateTotal = Number(priceTotal - 30);
			rebateAmt = 30;
		}
		affirmPrice = parseInt(priceTotal.toFixed(2).toString().replace(".", ""), 10);
		var hasMap = false;
		if(tire.showMapPrice || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].showMapPrice) || (tire.hasRearTire && ((tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].showMapPrice) || (rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].showMapPrice)))){
			hasMap = true;
		}
		if(!tire.isLTL && !tire.isSoldOut && (!hasMap || tire.displayEmployeeDiscount)){
			$detailSec.append('<div id="priceTotal'+loop+'" class="priceTotal'+(k>2?' borderTop':'')+'">Set of '+totalQty+': <span class="totalCurrency">$</span><span class="itemprice">'+CommaFormatted(priceTotal.toFixed(2))+'</span></div><div class="clear"></div>');
		}
		if(!tire.isLTL && !tire.isSoldOut && !hasMap && rebateAmt > 0 && !isCanadian) {
			if(tire.okTodisplayPromo == 'true' && tire.showMailInRebate) {	
					$detailSec.append('<div id="promoPrice'+loop+'" class="promoprice"><a href="/specialoffers/details.jsp?promoID='+tire.promoToUse+'">Price ' + getCCOnlyPromoCard(tire) + 'After Mail-In Rebate:</a> <span class="totalCurrency">$</span><span class="rebateValue">'+CommaFormatted(rebateTotal.toFixed(2))+'</span></div>');
				var rebateContentArray = getRebateContent(getAddtlPromoType(tire));
				if(rebateContentArray.length >0){
				$detailSec.append('<div id="promoCCPrice'+loop+'" class="promoprice '+ rebateContentArray[0].classFile +'"><a href="/specialoffers/'+ rebateContentArray[0].landingPage+'?returnPage=/tires/TireSearchResults.jsp">'+rebateContentArray[0].text+'</a> <span class="totalCurrency">$</span><span class="rebateCCValue">'+CommaFormatted(rebateTotalMinusCC.toFixed(2))+'</span></div>');
				}
			}
console.log("kari tire.partNumber: " + tire.partNumber + "showMailInRebate: " + tire.showMailInRebate); 
		}
        var hasEmployeeDiscount = false;
        if(tire.displayEmployeeDiscount) {
            hasEmployeeDiscount = true;
        } else if(tire.hasRearTire && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].displayEmployeeDiscount) {
            hasEmployeeDiscount = true;
        } else if(tire.hasRearTire && tire.rearTireIndex > -1) {
            if(rearTires[tire.rearTireIndex].displayEmployeeDiscount) {
                hasEmployeeDiscount = true;
            } else if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].displayEmployeeDiscount) {
                hasEmployeeDiscount = true;
            }
        }
        
        var hideCPUDiscount = false;
        if(tire.hideCPUDiscount){
            hideCPUDiscount = true;
        }else if(tire.hasRearTire && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].hideCPUDiscount){
            hideCPUDiscount = true;
        }else if(tire.hasRearTire && tire.rearTireIndex > -1){
            if(rearTires[tire.rearTireIndex].hideCPUDiscount){
                hideCPUDiscount = true;
            }else if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].hideCPUDiscount){
                hideCPUDiscount = true;
            }
        }

        if(!hasEmployeeDiscount && cpuDiscountWarehouse && cpuDiscountWarehouse.length && cpuDiscount && cpuDiscount > 0) {
            if(hideCPUDiscount){
                $detailSec.append('<div class="clear"></div><div id="cpu-discount"><a href="/content/tirerack/desktop/en/landing-page/order-pick-up.html" target="_blank">Pick Up Your Order</a><br>Pick up at our ' + cpuDiscountWarehouse + ' distribution<br>center. <strong>Order pick-up price shown in cart</strong>.</div>');
            }else{
                $detailSec.append('<div class="clear"></div><div id="cpu-discount"><a href="/content/tirerack/desktop/en/landing-page/order-pick-up.html" target="_blank">Order Pick-Up Discount</a><br>Pick up at our ' + cpuDiscountWarehouse + ' distribution<br>center and <strong>get a $<span id="cpuDiscount' + loop + '">' + CommaFormatted(cpuDiscount.toFixed(2)) + '</span> discount</strong>.</div>');
            }
        }

		if(tire.rhpPrice > 0 && rhpAvail && !tire.isLTL){
		    var rhpPrice = Number(tire.rhpPrice * frontQty);
		    if(tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].rhpPrice > 0 && !tirePairs[tire.tirePairIndex].isSoldOut){
			rhpPrice += Number(tirePairs[tire.tirePairIndex].rhpPrice * frontQty);
		    }
		    if(tire.hasRearTire && tire.rearTireIndex > -1){
			if(rearTires[tire.rearTireIndex].rhpPrice > 0 && !rearTires[tire.rearTireIndex].isSoldOut){
				rhpPrice += Number(rearTires[tire.rearTireIndex].rhpPrice * rearQty);
			}
			if(rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].rhpPrice > 0 && !tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isSoldOut){
				rhpPrice += Number(tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].rhpPrice * rearQty);
			}
		    }

            if(rhpPrice > 0 && rhpAvail && !hasEmployeeDiscount) {
                $tireForm.append(generateHiddenInput("WantRHP", "Y"));
                $detailSec.append('<div class="rhpCoverage"><a id="rhpCostLink' + loop + '" href="/modalPopups/rhp.jsp?ppn=' + pageName + '&amt=' + CommaFormatted(rhpPrice.toFixed(2)) +'" onclick="openInfoBox(this.href, \'\', 570, \'default\');return false;">Free Road Hazard Protection</a><br><span>(<sbold id="rhpCost'+loop+'">$' + CommaFormatted(rhpPrice.toFixed(2)) + '</sbold> value. Two-year coverage.)</span></div>');
            }
		}
	}

	return $detailSec;
}

function getDetailDiv(tire, index, qty, addDivider, tireURL, frTireIndex, soldOut, totalQty){
	$detailDiv = $('<div></div>',{"class":"details"});
	$detailText = $('<div></div>',{"class":"detailsText"});
	$textUL = $('<ul></ul>',{"class":"spec"});

	//Size
	var sizeDisplay = "Size: ";
	if(tire.isRearTire){
		sizeDisplay = "Rear: ";
	}else if(tire.hasRearTire){
		sizeDisplay = "Front: ";
	}
	var isLeftRight = false;
	if(tire.clarifier != null && tire.clarifier.indexOf("Left") > -1){
		isLeftRight = true;
		if(tire.isRearTire || tire.isRearPair){
			sizeDisplay = "Rear Left: ";
		}else if(tire.hasRearTire || tire.isFrontPair){
			sizeDisplay = "Front Left: ";
		}else{
			sizeDisplay = "Left: ";
		}
	}else if(tire.clarifier != null && tire.clarifier.indexOf("Right") > -1){
		isLeftRight = true;
		if(tire.isRearTire || tire.isRearPair){
			sizeDisplay = "Rear Right: ";
		}else if(tire.hasRearTire || tire.isFrontPair){
			sizeDisplay = "Front Right: ";
		}else{
			sizeDisplay = "Right: ";
		}
	}
	$textUL.append('<li><span class="labelDetail">'+sizeDisplay+'</span><span class="labelSize">'+tire.displaySize+' '+(tire.serviceDesc != null && tire.serviceDesc != "" && tire.serviceDesc != "NONE"?tire.serviceDesc:"")+' '+(tire.loadRating != null && tire.loadRating != "" && tire.loadRating != "S"?tire.loadRating:"")+'</span></li>');

	if(tire.clarifier != null && tire.clarifier != ""){
		$textUL.append('<li><sbold>'+tire.clarifier.replace("Right","").replace("Left","").replace("Right ","").replace("Left ","")+'</sbold></li>');
	}

	//Sidewall
	if(tire.sidewall != null && tire.sidewall != ""){
		if ((tire.sidewallShown != null && tire.sidewallShown != "" && tire.sidewallShown != tire.sidewall) ||
            (tire.showBlackwall != null && tire.showBlackwall === "Y") ||
			(tire.sidewall.toUpperCase() != "BLACKWALL")) {
			$textUL.append('<li><span class="labelDetail">Style: </span><sbold>' + tire.sidewall + '</sbold></li>');
		}
	}
	if(tire.sidewallShown != null && tire.sidewallShown != ""){
		$textUL.append('<li><span class="labelDetail">Style Shown: </span><sbold>'+tire.sidewallShown+'</sbold></li>');
	}

	//LRR
	if(tire.lrr != null && tire.lrr != ""){
		$textUL.append('<li><span class="labelDetail">Eco Focus: </span><sbold>'+tire.lrr+'</sbold></li>');
	}

	//Load Range
	if (tire.loadRating != null && tire.loadRating != "" && tire.loadRating != "S") {
		$loadRangeLi  = $('<li></li>');
		$loadRangeLabel = $('<span></span>',{"class":"labelDetail"}).text('Load Range: ');
		$loadRangeDisplay = $('<sbold>' + tire.loadRating + '</sbold>');
		$loadRangeHelper = $(".toolTipInner.tooltip.loadRangeHelper:first").clone(true);
		
		$loadRangeHelperInfo = '<div>';
		if (tire.maxLoad != null && tire.maxLoad != '') {
			$loadRangeHelperInfo += 'Max. Load= <b>';
			if (tire.maxLoad == '99') {
				$loadRangeHelperInfo += 'NA';
			} else if (tire.maxLoad == '0') {
				$loadRangeHelperInfo += '';
			} else {
				$loadRangeHelperInfo += tire.maxLoad + ' lbs';
			}
			$loadRangeHelperInfo += '</b><br>';
		}

		if (tire.maxInflate != null && tire.maxInflate != '') {
			$loadRangeHelperInfo += 'Max psi= <b>' + tire.maxInflate + ' psi</b>';
		}
		$loadRangeHelperInfo += '</div>';

		$loadRangeHelper.attr('title', $loadRangeHelperInfo);
		$loadRangeHelper.attr('id', 'loadRangeHelper'+tire.partNumber);

		$loadRangeLi.append($loadRangeLabel);
		$loadRangeLi.append($loadRangeDisplay);
		$loadRangeLi.append($loadRangeHelper);
		$textUL.append($loadRangeLi);
	}

	// Service Description
	if (tire.serviceDesc != null && tire.serviceDesc != "" && tire.serviceDesc != "NONE") {
		$serviceDescLi  = $('<li></li>');
		$serviceDescLabel = $('<span></span>',{"class":"labelDetail"}).text('Serv. Desc: ');
		$serviceDescDisplay = $('<sbold>'+tire.serviceDesc+'</sbold>');
		$serviceDescHelper = $(".toolTipInner.tooltip.serviceDescHelper:first").clone(true);

		$serviceDescHelperInfo = '<div style="line-height:18px;">Load Index ';
		if (tire.loadIndex != null && tire.loadIndex != '' && tire.lbs != null && tire.lbs != '' && tire.kg != null && tire.kg != '') {
			$serviceDescHelperInfo += tire.loadIndex + "= <b>" + tire.lbs + " lbs (" + tire.kg + " kg) per tire</b><br>";
		}
		if (tire.loadIndex2 != null && tire.loadIndex2 != '' && tire.lbs2 != null && tire.lbs2 != '' && tire.kg2 != null && tire.kg2 != '') {
			$serviceDescHelperInfo += "Load Index " + tire.loadIndex2 + "= <b>" + tire.lbs2 + " lbs (" + tire.kg2 + " kg) per tire</b><br>";
		}
		if (tire.servSpeedRating != null && tire.servSpeedRating != '' && tire.mph != null && tire.mph != '' && tire.kph != null && tire.kph != '') {
			$serviceDescHelperInfo += "Speed Rating &ldquo;" + tire.servSpeedRating + "&rdquo;= <b>" + tire.mph + " mph (" + tire.kph + " kph)</b>";
		}

		$serviceDescHelper.attr('title', $serviceDescHelperInfo);
		$serviceDescHelper.attr('id', 'serviceDescHelper'+tire.partNumber);
		
		$serviceDescLi.append($serviceDescLabel);
		$serviceDescLi.append($serviceDescDisplay);
		$serviceDescLi.append($serviceDescHelper);
		$textUL.append($serviceDescLi);
	}

	//UTQG
	var specText = "";
	if(tire.utqgTreadwear == null || tire.utqgTreadwear == "") specText = "Pending";
	else if(tire.utqgTreadwear != null && tire.utqgTreadwear == "NONE") specText = "None";
	else specText = tire.utqgTreadwear + " " + tire.utqgTraction + " " + tire.utqgTemperature;

	$utqgLi  = $('<li></li>');
	$utqgLabel = $('<span></span>',{"class":"labelDetail"}).text('UTQG: ');
	$utqgDisplay = $('<sbold>'+ specText +'</sbold>');
	$utqgHelper = $(".toolTipInner.tooltip.utqgHelper:first").clone(true);

	$utqgHelperInfo = '';
	if (specText == 'Pending') {
		$utqgHelperInfo = 'Treadwear: <b>Pending</b><br>Traction: <b>Pending</b><br>Temperature: <b>Pending</b>';
	} else if (specText == 'None') {
		$utqgHelperInfo = 'Treadwear: <b>None</b><br>Traction: <b>None</b><br>Temperature: <b>None</b>';
	} else {
		$utqgHelperInfo = 'Treadwear: <b>' + tire.utqgTreadwear + '</b><br>Traction: <b>' + tire.utqgTraction + '</b><br>Temperature: <b>' + tire.utqgTemperature + '</b>';
	}

	$utqgHelper.attr('title', $utqgHelperInfo);
	$utqgHelper.attr('id', 'utqgHelper'+tire.partNumber);

	$utqgLi.append($utqgLabel);
	$utqgLi.append($utqgDisplay);
	$utqgLi.append($utqgHelper);
	$textUL.append($utqgLi);

	//SSSR
	if (tire.sssr != null && tire.sssr == "Y") {
		$sssrLi = $('<li></li>',{"class":"severeSnow"}).append('Severe Snow Service Rated');
		$textUL.append($sssrLi);
	}

	$detailText.append($textUL);

	//Left/Right Alert
	if(isLeftRight && tire.hasTirePair!=true && tire.tirePairIndex<0) {
		$importantNote = $('<div></div>',{"class":"importantNotes"});
		$importantNote.append($('<span></span>',{"class":"icon-warning"}));
		$importantNote.append($('<span></span>',{"class":"text-warning"}).text('Missing Left/Right Pair'));
		$detailText.append($importantNote);
	}

    //Instant Rebate
    var instantRebateDisplayed = false;
    var instantRebateKeys = Object.keys(instantRebateObj);
    if(!soldOut && tire.hasRebate && instantRebateObj[tire.tireMake+':'+tire.rebate+':'+tire.rebateQty+":"+tire.rebateAmt].maxQty >= tire.rebateQty) {
        var lastSameRebateTire = true;
        if(!tire.isRearPair && tireList[tire.masterListIndex]) {
            if(tireList[tire.masterListIndex].hasRearTire) {
                var rearTireObj = rearTires[tireList[tire.masterListIndex].rearTireIndex];
                if(rearTireObj.hasTirePair && tirePairs[rearTireObj.tirePairIndex].specCode != "4" && tirePairs[rearTireObj.tirePairIndex].hasRebate && tire.rebate == tirePairs[rearTireObj.tirePairIndex].rebate && tire.rebateQty == tirePairs[rearTireObj.tirePairIndex].rebateQty && tire.rebateAmt == tirePairs[rearTireObj.tirePairIndex].rebateAmt) {
                    lastSameRebateTire = false;
                }
                if(!tire.isRearTire && rearTireObj.specCode != "4" && rearTireObj.hasRebate && tire.rebate == rearTireObj.rebate && tire.rebateQty == rearTireObj.rebateQty && tire.rebateAmt == rearTireObj.rebateAmt) {
                    lastSameRebateTire = false;
                }
            }
            if(!tire.isRearTire && !tire.isPair && tireList[tire.masterListIndex].hasTirePair) {
                var tirePairObj = tirePairs[tireList[tire.masterListIndex].tirePairIndex];
                if(tirePairObj.specCode != "4" && tirePairObj.hasRebate && tire.rebate == tirePairObj.rebate && tire.rebateQty == tirePairObj.rebateQty && tire.rebateAmt == tirePairObj.rebateAmt) {
                    lastSameRebateTire = false;
                }
            }
        }
        if(lastSameRebateTire) {
            instantRebateDisplayed = true;
            $instantRebateTextA = $('<a></a>',{'href':'/modalPopups/instantRebate.jsp?ppn=' + pageName + '&type=T&partnum=' + tire.partNumber}).append(instantRebateText+' <span>(More Details)</span>').click(function() {
                openInfoBox(this.href, instantRebateText, 'default', 'default'); return false;
            });
            $detailText.append($('<div></div>',{'class':'instantRebate'}).append($instantRebateTextA));
        }
    }

	//Promos
	console.log("okTodisplayPromo: " + tire.okTodisplayPromo + "partNumber: "+ tire.partNumber);
	if(!addDivider && !isCanadian && tire.okTodisplayPromo == 'true'){

		var promos = getPromosToDisplay(tire);
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var promoEndsSoon = "";
		var addtlValue = 0;
		var addtlCount = 0;

		console.log("have this many promos to display: "+ promos.length); 
		console.log("promoArray: "+ JSON.stringify(promos));

		for(var i = 0; i < promos.length; i++){

		    if(instantRebateDisplayed && i == 0) $detailText.append('<div class="dividerCircle"><div class="dividerLine"></div><div class="labelCircle"><span>&amp;</span></div></div>');
		    if(i >0) $detailText.append('<div class="dividerCircle"><div class="dividerLine"></div><div class="labelCircle"><span>'+(promos[i].doubleDip=="Y"?'&amp;':'OR')+'</span></div></div>');
			//$promoDetails = $('<div class="promotionDetails'+(instantRebateDisplayed || i >0?'Multi':'')+'"></div>');
			$promoDetails = $('<div class="promotionDetails'+(instantRebateDisplayed || i >0?'Multi':'')+'">');

			$promoDetails.append('<span>Special Offer:</span> <a href="/specialoffers/details.jsp?promoID='+promos[i].promoCode+'">'+promos[i].longText+'</a>');

			if(promos[i].daysLeft>=0 && promos[i].daysLeft<14 && promos[i].hideEndSoon == "N") {
				var endDateMessage = 'Soon!';
				var d = promos[i].promoEndDate.split('-');
				if(d.length==3) endDateMessage = (promos[i].daysLeft==0?"Today!":monthNames[parseInt(d[0])-1]+' '+d[1]+' ('+(parseInt(promos[i].daysLeft)+1)+' Days Left!)');
				if(promos[i].addtlType){
					promoEndsSoon = '<div class="endDates"><span class="endDatesIcon"></span><p class="endDatesMessage">Ends '+endDateMessage+'</p></div>';
				} else {
					$promoDetails.append('<div class="endDates"><span class="endDatesIcon"></span><p class="endDatesMessage">Ends '+endDateMessage+'</p></div>');
				}
			}

			if(promos[i].addtlType != ''){

				addtlValue += parseInt(promos[i].addtlValue)*2; 
				addtlCount++;
				var addtlPromoContent = getAddtlPromoContent(promos[i].addtlType);
				$promoDetails.append('<span class="' + addtlPromoContent.classFile +'">Use your <a href="/specialoffers/' + addtlPromoContent.landingPage +'?returnPage=/tires/TireSearchResults.jsp">'+ addtlPromoContent.ccFullName +'</a> and get an additional $'+parseFloat(promos[i].addtlValue)+' '+ addtlPromoContent.cardText +'</span>');
			}

			//if(promoEndsSoon!="") $detailText.append(promoEndsSoon);
			if(promoEndsSoon!="") $promoDetails.append(promoEndsSoon);

			$promoDetails.append('</div>');
			$detailText.append($promoDetails);



		} //loop through promos array
		
		/*	
		if(addtlCount > 1) {
			var addtlPromoContent = getAddtlPromoContent(getAddtlPromoType(tire));
			$detailText.append('<span class="' + addtlPromoContent.classFile +' box">Use your <a href="/specialoffers/' + addtlPromoContent.landingPage +'?returnPage=/tires/TireSearchResults.jsp">'+ addtlPromoContent.ccFullName +'</a> and get an additional $'+addtlValue+' '+ addtlPromoContent.cardText +'</span>');
		}
			*/

	} //o.k. to display promos

	$detailDiv.append($detailText);
	$detailNum = $('<div class="detailsNum">');
	$detailUL = $('<ul class="spec">');
	$detailLIDiv = $('<div class="qtyPrice">');
	$detailLI = $('<li>');
	if(!tire.isSoldOut){
		var hasMap = false;
		if(tire.showMapPrice || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].showMapPrice) || (tire.hasRearTire && ((tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].showMapPrice) || (rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].showMapPrice)))){
			hasMap = true;
		}
		$detailUL.append('<li><div class="specHead"><div class="specQty">Qty:</div>'+(!tire.showMapPrice || (tire.mapLayout!=1 && tire.mapLayout!=2)?'<div class="specPer">Per Tire:</div>':'')+'</div><div class="clear"></div></li>');

		// Qty Dropdown
		var start = 1;
		if(tire.hasTirePair || tire.isPair || tire.hasRearTire || tire.isRearTire || tire.hasRearTirePair || tire.isRearPair) {
			start = 0;
		}
		//qtySelect.onchange = new Function("updateRHPCost(" + index + "); updatePriceTotal(" + index + ");");
		var qtySelectName = "";
		var i = "1";
		if(tire.isPair){
			qtySelectName="i2_Qty";
			i = "2";
		}else if(tire.isRearTire){
			qtySelectName="i3_Qty";
			i = "3";
		}else if(tire.isRearPair){
			qtySelectName="i4_Qty";
			i = "4";
		}else{
			qtySelectName="i1_Qty";
			i = "1";
		}
		$detailLIDivSelect = $('<select class="left" name="'+qtySelectName+'" size="1" id="'+qtySelectName+index+'" onchange="updatePriceTotal('+index+'); updateRHPCost('+index+'); updateCPUDiscountTotal('+index+');">');
		var maxQty = 8;
		var maxForTire = tire.restrictedQty;
		if(tire.maxQty > 0 || (maxForTire > 0 && maxForTire > tire.maxQty)) maxQty = tire.maxQty;
		if(maxForTire > 0 && maxForTire < maxQty) maxQty = maxForTire;
		if(isLeftRight) {
			if(tire.isRearTire || tire.hasRearTire) {
				if(qty > 1) qty = 1;
			} else {
				if(qty > 2) qty = 2;
			}
		}
		if(qty > maxQty) qty = maxQty;
		for(var j = start; j <= maxQty; j++){
			$detailLIDivSelect.append('<option value="'+j+'"'+(j==qty?' selected':'')+'>'+j+'</option>');
		}
		$detailLIDiv.append($detailLIDivSelect);
	} else {
		$detailUL.append('<li><div class="specHead"><div class="specPer">Per Tire:</div></div><div class="clear"></div></li>');
		
	}
	if(tire.showMapPrice && !tire.displayEmployeeDiscount){
		if(tire.mapLayout!=1 && tire.mapLayout!=2){
			$detailLIDiv.append('<span class="discountPrice'+(tire.mapLayout==2?" gyMap":"")+(tire.mapLayout==3?" noStrike":"")+'"><span class="currency">$</span>'+tire.mapPriceFormatted.replace(/\$/g, '')+'</span><span class="clear"></span>');
		}
	}else if(tire.showMarkdownPrice && !tire.displayEmployeeDiscount){
		$detailLIDiv.append('<input type="hidden" name="markdownprice" value="'+tire.markdownPrice.replace(/\$/g, '')+'">');
		$detailLIDiv.append('<span class="discountPrice"><span class="currency">$</span>'+tire.markdownPriceFormatted.replace(/\$/g, '')+'</span><span class="clear"></span>');
		$detailLIDiv.append('<span class="finalPrice"><span class="currency">$</span>'+tire.priceFormatted.replace(/\$/g, '')+'</span>');
	}else{
		$detailLIDiv.append('<span class="finalPrice"><span class="currency">$</span>'+(tire.displayEmployeeDiscount?tire.discountPriceFormatted:tire.priceFormatted).replace(/\$/g, '')+'</span><span class="clear"></span>');
	}

	if(!tire.isSoldOut){
		// Special Pricing Alerts
		$detailLIDiv2 = $('<span class="specialCloseout"></span>');
		if(tire.showMapPrice && !tire.displayEmployeeDiscount){
			$detailLIDiv.append('<span class="mapPrice"><a href="#" onclick="submit' + (tire.mapLayout==2?"GoodyearMAP":(tire.mapLayout==3?"MASTMAP":"")) + 'TireForm(\'M\', \'N\', \''+index+'\'); return false;">See '+(tire.mapLayout!=1 && tire.mapLayout!=2 && tire.mapLayout!=3?'Lower':'Tire Rack<br>')+' '+(tire.mapLayout==3?'Delivered<br>Price':'Price')+' in Cart</a></span>');
			$detailLIDiv2.append(tire.specCode==3||tire.specCode==6?'<span class="specialCloseOut">Special/Closeout</span>':(tire.isOnSpecial?'<span class="specialCloseOut">Special</span>':(tire.isOnClearance?'<span class="specialCloseOut">Closeout</span>':'')));
		}else if(tire.showMarkdownPrice && !tire.displayEmployeeDiscount){
			$detailLIDiv2.append(tire.specCode==3||tire.specCode==6?'Special/Closeout':(tire.isOnSpecial?'Special':(tire.isOnClearance?'Closeout':'')));
		}else{
			$detailLIDiv2.append(tire.displayEmployeeDiscount?employeeDiscountImage:(tire.specCode==3||tire.specCode==6?'Special/Closeout':(tire.isOnSpecial?'Special':(tire.isOnClearance?'Closeout':''))));
		}
		$detailLIDiv.append($detailLIDiv2);
	}
	$detailLI.append($detailLIDiv);
	$detailLI.append('<div class="clear"></div>');
	$detailUL.append($detailLI);

	$detailLI3 = $('<li class="available-text"></li>');
	if(tire.isSoldOut){
		$detailLI3.append('<div class="soldOut">SOLD OUT FOR<br>THE SEASON</div>');
	}else if((!tire.crossShip || (tire.isLargeTire && !tire.isGreenInAllWH)) && prefWarehouse==""){
		$detailLI3.append('<sbold>Limited Stock, <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingQuote(\'tireForm' + index + '\')">Enter ZIP Code</a><br> to Check Availability</sbold>');
        }else if((!tire.crossShip || (tire.isLargeTire && !tire.isGreenInAllWH)) && tire.prefWarehouseStock!="green"){
		$detailLI3.append('<span>Availability:</span> <sbold>'+tire.prefDueDate+'</sbold>');
	}else{
		$detailLI3.append('<span>Availability:</span> <sbold>'+tire.stockMessage+'</sbold>');
	}
	$detailLI3.append('<div class="clear"></div>');
	$detailUL.append($detailLI3);

	if(!soldOut && !tire.isLTL) {
		var limitedStockAmt = 0;

		if(tire.prefDueDate.indexOf("In Stock")>1){
			limitedStockAmt = parseInt(tire.prefDueDate.substring(0,1));
        }
		if(tire.prefDueDate.indexOf("In Stock")>2){
			limitedStockAmt = parseInt(tire.prefDueDate.substring(0,2));
        }
		if(tire.prefDueDate.indexOf("Fewer than")>-1){
			if(tire.prefDueDate.indexOf(",") > -1){
				limitedStockAmt = parseInt(tire.prefDueDate.substring(11, tire.prefDueDate.indexOf(","))) - 1;
			}else{
				limitedStockAmt = parseInt(tire.prefDueDate.substring(11)) - 1;
			}
		}

		if(shipZip=="" || (!lower48 && prefWarehouse=="") || (lower48 && (tire.freightCost=="" || tire.freightCost=="0.0" || tire.freightCost=="0"))){
			$detailUL.append('<li><div id="i' + i + '_shippingTime' + index +'" class="delivEstimate"><a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingQuote(\'tireForm' + index + '\')">How soon can I get this?</a></div></li>');
			if(tire.inboardedFrtFlag=="Y" && (shipZip=="" || lower48)) {
                                $detailUL.append('<li><div class="freeShipping mq"><a href="/shippingquote/getZip.jsp?newZip=y&freeShippingTires=Y" title="Free Shipping" onclick="return shippingZipFreeTires(\'tireForm' + index + '\');">Free Shipping</a></div></li>');
                        } else if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingCost' +index+'" class="delivEstimate"><a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onclick="return shippingQuote(\'tireForm' + index + '\');">See Shipping Cost</a></div></li>');
			}
		} else if(!lower48 && prefWarehouse!="" && tire.prefWarehouseStock=="green"){
			$detailUL.append('<li><div id="i' + i + '_shippingTime' + index +'" class="canDeliver">Can be delivered <sbold>' + delDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a>.</div></li>');
			if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingCost' + index + '" class="delivEstimate"><a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onclick="return shippingZip(\'tireForm' + index + '\');">See Shipping Cost</a></div></li>');
			}
		} else if(lower48 && (tire.prefWarehouseStock=="green" || (tire.prefWarehouseStock=="yellow" && limitedStockAmt >= qty)) && tire.freightCost!="" && tire.freightCost!="0.0" && tire.freightCost!="0"){
			if(tire.inboardedFrtFlag=="Y") {
                                $detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + delDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a><div class="freeShipping mq"><a href="/shippingquote/getZip.jsp?newZip=y&freeShippingTires=Y" title="Free Shipping" onclick="return shippingZipFreeTires(\'tireForm' + index + '\');">Free Shipping</a></div></div></li>');
                        } else if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + delDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a><span id="i' + i + '_shippingCost' + index + '"> for $' + parseFloat(tire.freightCost).toFixed(2) + ' per tire.</span></div></li>');
			}else{
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + delDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a>.</div></li>');
			}
		} else if(lower48 && ((tire.prefWarehouseStock=="yellow" && limitedStockAmt < qty) || tire.prefWarehouseStock=="red") && tire.altDate!="" && tire.freightCost!="" && tire.freightCost!="0.0" && tire.freightCost!="0"){
			if(tire.inboardedFrtFlag=="Y") {
                                $detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + tire.altDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a><div class="freeShipping mq"><a href="/shippingquote/getZip.jsp?newZip=y&freeShippingTires=Y" title="Free Shipping" onclick="return shippingZipFreeTires(\'tireForm' + index + '\');">Free Shipping</a></div></div></li>');
                        } else if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + tire.altDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a><span id="i' + i + '_shippingCost' + index + '"> for $' + parseFloat(tire.freightCost).toFixed(2) + ' per tire.</span></div></li>');
			}else{
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered <sbold>' + tire.altDate + '</sbold> to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a>.</div></li>');
			}
		} else if(lower48 && tire.altDate=="" && tire.freightCost!="" && tire.freightCost!="0.0" && tire.freightCost!="0"){
			if(tire.inboardedFrtFlag=="Y") {
                                $detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a> when available</a><div class="freeShipping mq"><a href="/shippingquote/getZip.jsp?newZip=y&freeShippingTires=Y" title="Free Shipping" onclick="return shippingZipFreeTires(\'tireForm' + index + '\');">Free Shipping</a></div></div></li>');
                         } else if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a> when available<span id="i' + i + '_shippingCost' + index + '"> for $' + parseFloat(tire.freightCost).toFixed(2) + ' per tire.</span></div>');
			}else{
				$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="canDeliver">Can be delivered to <a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return shippingZip(\'tireForm' + index + '\')"> ' + shipZip + '</a> when available.</div></li>');
			}
		} else {
			$detailUL.append('<li><div id="i' + i + '_shippingTime' + index + '" class="delivEstimate"><a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onClick="return ' + (tire.mapLayout==3?"shippingZip":"shippingQuote") + '(\'tireForm' + index + '\')">How soon can I get this?</a></div></li>');
			if(tire.showShippingCost){
				$detailUL.append('<li><div id="i' + i + '_shippingCost' + index + '" class="delivEstimate"><a href="/shippingquote/getZip.jsp?newZip=y" class="availability" onclick="return ' + (tire.mapLayout==3?"shippingZip":"shippingQuote") + '(\'tireForm' + index + '\');">See Shipping Cost</a></div></li>');
			}
		}
        if(freePreferred && totalQty > 1 && typeof freeInstallerID != "undefined") {
		 	if(tire.inboardedFrtFlag=="Y" && (shipZip=="" || lower48)) {
				$detailUL.append('<li><div id="i' + i + '_freePreferred' + index + '" class="canDeliver canMobile">Make it even easier and safer! Select <a href="/installer/InstallerDetail.jsp?ID=' + freeInstallerID + '&checkout=true" target="_blank">' + freeInstallerName + '</a> for installation at your home.</div></li>');
		    	} 
		}
	}
	if(!soldOut && tire.hasRebate && instantRebateObj[tire.tireMake+':'+tire.rebate+':'+tire.rebateQty+":"+tire.rebateAmt].maxQty >= tire.rebateQty) {
        var lastSameRebateTire = true;
        if(!tire.isRearPair && tireList[tire.masterListIndex]) {
            if(tireList[tire.masterListIndex].hasRearTire) {
                var rearTireObj = rearTires[tireList[tire.masterListIndex].rearTireIndex];
                if(rearTireObj.hasTirePair && tirePairs[rearTireObj.tirePairIndex].specCode != "4" && tirePairs[rearTireObj.tirePairIndex].hasRebate && tire.rebate == tirePairs[rearTireObj.tirePairIndex].rebate && tire.rebateQty == tirePairs[rearTireObj.tirePairIndex].rebateQty && tire.rebateAmt == tirePairs[rearTireObj.tirePairIndex].rebateAmt) {
                    lastSameRebateTire = false;
                }
                if(!tire.isRearTire && rearTireObj.specCode != "4" && rearTireObj.hasRebate && tire.rebate == rearTireObj.rebate && tire.rebateQty == rearTireObj.rebateQty && tire.rebateAmt == rearTireObj.rebateAmt) {
                    lastSameRebateTire = false;
                }
            }
            if(!tire.isRearTire && !tire.isPair && tireList[tire.masterListIndex].hasTirePair) {
                var tirePairObj = tirePairs[tireList[tire.masterListIndex].tirePairIndex];
                if(tirePairObj.specCode != "4" && tirePairObj.hasRebate && tire.rebate == tirePairObj.rebate && tire.rebateQty == tirePairObj.rebateQty && tire.rebateAmt == tirePairObj.rebateAmt) {
                    lastSameRebateTire = false;
                }
            }
        }
        if(lastSameRebateTire) {
            var rebateTireAmount = (tire.rebateAmt * Math.floor(instantRebateObj[tire.tireMake+':'+tire.rebate+':'+tire.rebateQty+":"+tire.rebateAmt].qty/tire.rebateQty)).toFixed(2);
            instantRebateTotal += rebateTireAmount;
            $instantRebateA = $('<a></a>',{'href':'/modalPopups/instantRebate.jsp?ppn=' + pageName + '&type=T&partnum='+tire.partNumber}).on('click', function() {
                openInfoBox(this.href, instantRebateText, 'default', 'default'); return false;
            }).append('$'+tire.rebateAmt.toFixed(2)+' '+instantRebateText+' (Per '+(tire.rebateQty==1?'Tire':'Set of '+tire.rebateQty)+')');
            $detailUL.append($('<li></li>').append($('<div></div>',{'class':'promoprice','id':'iRebatePrice-'+tire.partNumber}).append($instantRebateA).append($('<span></span>',{'class':'noBreak'}).append(" - ").append($('<span></span>',{'class':'totalCurrency'}).append('$')).append($('<span></span>',{'class':'rebateValue'}).append(rebateTireAmount))).append($('<div></div>',{'class':'notAvailable'+(instantRebateObj[tire.tireMake+':'+tire.rebate+':'+tire.rebateQty+":"+tire.rebateAmt].qty >= tire.rebateQty?' hide':'')}).text('Set of '+tire.rebateQty+' required for '+instantRebateTextLower+'.'))));
        }
	}

	$detailNum.append($detailUL);
	$detailDiv.append($detailNum);
	$detailDiv.append('<div class="clear"></div>');

	return $detailDiv;
}

function getTireButton(tire, index){
	$buttonDiv = $('<div class="addToCart">');
	if(tire.isLTL){
		var ltlURL = "LtlPopup.jsp?partNumber=" + tire.partNumber;
		if(tire.tireMake != null && tire.tireModel != null){
			ltlURL += "&make=" + tire.tireMake + "&model=" + tire.tireModel;
		}
		if(tire.width != null && tire.width != "" &&  tire.ratio != null && tire.ratio != "" && tire.diameter != null && tire.diameter != ""){
			ltlURL += "&width=" + tire.width + "&ratio=" + tire.ratio + "&diameter=" + tire.diameter;
		}
		if(autoMake != null && autoMake != "" && autoYear != null && autoYear != "" && autoModel != null && autoModel != ""){
			ltlURL += "&autoMake=" + autoMake + "&autoYear=" + autoYear + "&autoModel=" + encodeURIComponent(autoModel);
			if(autoModClar != null && autoModClar != ""){
				ltlURL += "&autoModClar=" + encodeURIComponent(autoModClar);
			}
		}
		$buttonDiv.append('<button class="purchaseInfoBtn right showOverlay" onclick="openInfoBox(\''+ltlURL+'\',\'Truck Freight\',\'555\',\'575\'); return false;" id="ltlInfo'+index+'" data-popup="ltlPopup">Purchase Info</button>');
	} else {
		//Map Price
		var hasMap = false;
		if(tire.showMapPrice || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].showMapPrice) || (tire.hasRearTire && ((tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].showMapPrice) || (rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].showMapPrice)))){
			hasMap = true;
		}

        var productsString = "Tires;"+tire.partNumber;
        if(tire.hasTirePair && tire.tirePairIndex > -1) {
            productsString += ",Tires;" + tirePairs[tire.tirePairIndex].partNumber;
        }
        if(tire.hasRearTire && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1){
            productsString += ",Tires;" + tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].partnumber;
        }
        if(tire.hasRearTire && tire.rearTireIndex > -1) {
            productsString += ",Tires;" + rearTires[tire.rearTireIndex].partNumber;
        }
        var availability = availabilityTracking(tire);
        $tireButton = $('<button />').addClass((wtpackage=='true'?'':'aTC ')+'right').text('Add to '+(wtpackage=='true'?'Package':'Cart'));
        var tireFormString = 'submit' + (hasMap && tire.mapLayout == 2? "GoodyearMAP":(hasMap && tire.mapLayout == 3?"MASTMAP":"")) + 'TireForm(\''+(hasMap && !tire.displayEmployeeDiscount?'M':'N')+'\',\'N\','+index+');';
        // There is a bug with link tracking for compared wheel packages. Link name is just "tr: tires:"
        if(tire.wasCompared || wtpackage=='true')
            $tireButton.on('click',new Function("linkTracking({linkName: 'tr: tires: " + (tire.wasCompared && wtpackage!='true'?"compare: add to cart":"") + (wtpackage=='true' && !tire.wasCompared?"package config: tires: add":"") + "'" + (wtpackage=='true'?", evar46: 'event: add to package', prop46: 'event: add to package', prop51: '"+availability+"'":"") + ", events: '" + (wtpackage=='true'?'scAdd,event81':'') + (tire.wasCompared?(wtpackage=='true'?',':'')+'event10':'') + "', products: '" + productsString + "'},'','',function(){"+tireFormString+"}); return false;"));
        else
            $tireButton.on('click',new Function(tireFormString+" return false;"));
        $buttonDiv.append($tireButton);
	}
	$buttonDiv.append('<div class="clear"></div>');
	return $buttonDiv;
}

function getAffirmDiv(tire, loop){
	if(!isCanadian && affirmAvailability && tire.showAffirm == 'true'){
		$affirmDiv = $('<div class="affirmPrice">');
		//use tire.affirmPrice for single tire price or just affirmPrice for price*qty
		$affirmDiv.append('<p id="affirm'+loop+'" class="affirm-as-low-as" data-learnmore-show="false" data-page-type="product" data-affirm-type="text" data-amount="'+ affirmPrice + '" onClick="linkTracking({linkName: \'tr: affirm: see if you qualify\'});"></p>');
		$affirmDiv.append('</div>');
		return $affirmDiv;
	}
		return('');
}

function getTiresAvailable(stockMsg) {
        if(stockMsg != null && stockMsg == "In Stock") return 999;
        if(stockMsg != null && stockMsg.length >=5 && stockMsg.indexOf("In Stock") > 1) {
            return parseInt(stockMsg.substring(0,1));
        }
        if(stockMsg != null && stockMsg.length >=5 && stockMsg.indexOf("In Stock") > 2) {
            return parseInt(stockMsg.substring(0,2));
        }
        if(stockMsg != null && stockMsg.length >=5 && stockMsg.substring(0,5).toUpperCase() == "FEWER") {
            return parseInt(stockMsg.substring(11)) - 1;
        }
        return 0;
}

/* Clears filter counts and updates them 
 * based on the criteria that the use has selected
 */
function generateCounts(){
	clearAllCounts();
	for(i = 0; i < tireList.length; i++){
		updateCounts(tireList[i]);
	}
}

function clearAllCounts(){
	clearBrandCounts();
	clearPerfCatCounts();
	clearSpeedRatingCounts();
	clearLoadRatingCounts();
	clearRunFlatCounts();
	clearLRRCounts();
	clearSidewallCounts();
	clearSSSRCounts();
	clearNewCount();
	clearSpecialCloseoutCount();
	clearDeliveryDaysCount();
}

function clearBrandCounts(){
	avonCount = 0;
	bfgCount = 0;
	bridgestoneCount = 0;
	continentalCount = 0;
	cooperCount = 0;
	dickCepekCount = 0;
	dunlopCount = 0;
	falkenCount = 0;
	firestoneCount = 0;
	fuzionCount = 0;
	generalCount = 0;
    gitiCount = 0;
	goodyearCount = 0;
	hankookCount = 0;
	hoosierCount = 0;
	jkTyreCount = 0;
	kumhoCount = 0;
	laufennCount = 0;
	michelinCount = 0;
	nexenCount = 0;
	pirelliCount = 0;
	powerKingCount = 0;
	rikenCount = 0;
	sumitomoCount = 0;
	toyoCount = 0;
	uniroyalCount = 0;
	yokohamaCount = 0;
	vredesteinCount = 0;
}

function clearPerfCatCounts(){

	perfCatEPCount = 0;
	perfCatMPCount = 0;
	perfCatUHPCount = 0;
	perfCatHPCount = 0;
	perfCatGTCount = 0;
	perfCatDRYCount = 0;
	perfCatWETCount = 0;
	perfCatSTRTCount = 0;
	perfCatDRAGCount = 0;
	perfCatUHPASCount = 0;
	perfCatHPASCount = 0;
	perfCatPASCount = 0;
	perfCatGTASCount = 0;
	perfCatSTCount = 0;
	perfCatASCount = 0;

	perfCatPPWCount = 0;
	perfCatPSISCount = 0;
	perfCatPSWCount = 0;

	perfCatSSTASCount = 0;
	perfCatSSTCount = 0;
	perfCatHRCount = 0;
	perfCatCSTASCount = 0;
	perfCatHASCount = 0;
	perfCatORATCount = 0;
	perfCatORCTCount = 0;
	perfCatORMTCount = 0;
	
	perfCatLTPWCount = 0;
	perfCatLTSISCount = 0;
	perfCatLTSWCount = 0;

	perfCatTEMPCount = 0;
	perfCatTSCount = 0;
}

function clearSpeedRatingCounts(){
	speedNRCount = 0;
	speedLCount = 0;
	speedMCount = 0;
	speedNCount = 0;
	speedPCount = 0;
	speedQCount = 0;
	speedRCount = 0;
	speedSCount = 0;
	speedTCount = 0;
	speedUCount = 0;
	speedHCount = 0;
	speedVCount = 0;
	speedZCount = 0;
	speedWCount = 0;
	speedYCount = 0;
	speedYPlusCount = 0;
}

function clearLoadRatingCounts(){
	loadLLCount = 0;
	loadSCount = 0;
	loadRFCount = 0;
	loadXLCount = 0;
	loadCCount = 0;
	loadDCount = 0;
	loadECount = 0;
	loadFCount = 0;
	loadGCount = 0;
	loadHCount = 0;
}

function clearRunFlatCounts(){
	runFlatNoCount = 0;
	runFlatOnlyCount = 0;
}

function clearLRRCounts(){
	lrrNoCount = 0;
	lrrOnlyCount = 0;
}

function clearSidewallCounts(){
    sidewallTotalCount = 0;
    sidewallBWCount = 0;
    sidewallWWCount = 0;
    sidewallWLCount = 0;
    sidewallODCount = 0;
    sidewallNoCount = 0;
}

function clearSSSRCounts(){
	sssrNoCount = 0;
	sssrOnlyCount = 0;
	sssrWOnlyCount = 0;
	sssrAOnlyCount = 0;
}

function clearNewCount() {
	newCount = 0;
}

function clearSpecialCloseoutCount() {
	scCount = 0;
}

function clearDeliveryDaysCount() {
	del1Count = 0;
	del2Count = 0;
}

/* Updates filter counts based on the user's filtered criteria */
function updateCounts(tire){
	//Brand Counts
	if((performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "W" || tire.perfCode == "C")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && delFlag(tire)){
		if(tire.tireMake == "Avon") avonCount++;
		else if(tire.tireMake == "BFGoodrich") bfgCount++;
		else if(tire.tireMake == "Bridgestone") bridgestoneCount++;
		else if(tire.tireMake == "Classic") classicCount++;
		else if(tire.tireMake == "Continental") continentalCount++;
		else if(tire.tireMake == "Cooper") cooperCount++;
		else if(tire.tireMake == "Dick Cepek") dickCepekCount++;
		else if(tire.tireMake == "Dunlop") dunlopCount++;
		else if(tire.tireMake == "Falken") falkenCount++;
		else if(tire.tireMake == "Firestone") firestoneCount++;
		else if(tire.tireMake == "Fuzion") fuzionCount++;
		else if(tire.tireMake == "General") generalCount++;
        else if(tire.tireMake == "Giti") gitiCount++;
		else if(tire.tireMake == "Goodyear") goodyearCount++;
		else if(tire.tireMake == "Hankook") hankookCount++;
		else if(tire.tireMake == "Hoosier") hoosierCount++;
		else if(tire.tireMake == "JK Tyre") jkTyreCount++;
		else if(tire.tireMake == "Kumho") kumhoCount++;
		else if(tire.tireMake == "Laufenn") laufennCount++;
		else if(tire.tireMake == "Michelin") michelinCount++;
		else if(tire.tireMake == "Nexen") nexenCount++;
		else if(tire.tireMake == "Pirelli") pirelliCount++;
		else if(tire.tireMake == "Power King") powerKingCount++;
		else if(tire.tireMake == "Riken") rikenCount++;
		else if(tire.tireMake == "Sumitomo") sumitomoCount++;
		else if(tire.tireMake == "Toyo") toyoCount++;
		else if(tire.tireMake == "Uniroyal") uniroyalCount++;
		else if(tire.tireMake == "Yokohama") yokohamaCount++;
		else if(tire.tireMake == "Vredestein") vredesteinCount++;
	}
	
	//Performance Category Counts
	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && delFlag(tire)){
		if(tire.perfShort == "EP") perfCatEPCount++;
		else if(tire.perfShort == "MP") perfCatMPCount++;
		else if(tire.perfShort == "UHP") perfCatUHPCount++;
		else if(tire.perfShort == "HP") perfCatHPCount++;
		else if(tire.perfShort == "GT") perfCatGTCount++;

		else if(tire.perfShort == "UHPAS") perfCatUHPASCount++;
		else if(tire.perfShort == "HPAS") perfCatHPASCount++;
		else if(tire.perfShort == "PAS") perfCatPASCount++;
		else if(tire.perfShort == "GTAS") perfCatGTASCount++;
		else if(tire.perfShort == "ST") perfCatSTCount++;
		else if(tire.perfShort == "AS") perfCatASCount++;
		
		else if(tire.perfShort == "PPW") perfCatPPWCount++;
		else if(tire.perfShort == "PSIS") perfCatPSISCount++;
		else if(tire.perfShort == "PSW") perfCatPSWCount++;

		else if(tire.perfShort == "SSTAS") perfCatSSTASCount++;
		else if(tire.perfShort == "SST") perfCatSSTCount++;
		else if(tire.perfShort == "HR") perfCatHRCount++;
		else if(tire.perfShort == "CSTAS") perfCatCSTASCount++;
		else if(tire.perfShort == "HAS") perfCatHASCount++;
		else if(tire.perfShort == "ORAT") perfCatORATCount++;
		else if(tire.perfShort == "ORCT") perfCatORCTCount++;
		else if(tire.perfShort == "ORMT") perfCatORMTCount++;

		else if(tire.perfShort == "DRY") perfCatDRYCount++;
		else if(tire.perfShort == "WET") perfCatWETCount++;
		else if(tire.perfShort == "STRT") perfCatSTRTCount++;
		else if(tire.perfShort == "DRAG") perfCatDRAGCount++;
		
		else if(tire.perfShort == "LTPW") perfCatLTPWCount++;
		else if(tire.perfShort == "LTSIS") perfCatLTSISCount++;
		else if(tire.perfShort == "LTSW") perfCatLTSWCount++;

		else if(tire.perfShort == "TEMP") perfCatTEMPCount++;
		else if(tire.perfShort == "TS") perfCatTSCount++;
	}

	//Speed Rating Counts
	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (!vehicleSearch || (vehicleSearch && (window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1 || tire.perfCode == "C" || tire.perfCode == "W" || tire.perfCode == "TEMP"))) && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && delFlag(tire)){
		if(tire.speedRank == "NR") speedNRCount++;
		else if(tire.speedRank == "L") speedLCount++;
		else if(tire.speedRank == "M") speedMCount++;
		else if(tire.speedRank == "N") speedNCount++;
		else if(tire.speedRank == "P") speedPCount++;
		else if(tire.speedRank == "Q") speedQCount++;
		else if(tire.speedRank == "R") speedRCount++;
		else if(tire.speedRank == "S") speedSCount++;
		else if(tire.speedRank == "T") speedTCount++;
		else if(tire.speedRank == "U") speedUCount++;
		else if(tire.speedRank == "H") speedHCount++;
		else if(tire.speedRank == "V") speedVCount++;
		else if(tire.speedRank == "Z") speedZCount++;
		else if(tire.speedRank == "W") speedWCount++;
		else if(tire.speedRank == "Y") speedYCount++;
		else if(tire.speedRank == "(Y)") speedYPlusCount++;
	}

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && delFlag(tire)){
		if(tire.loadRating == "LL") loadLLCount++;
		else if(tire.loadRating == "S") loadSCount++;
		else if(tire.loadRating == "RF" || tire.loadRating == "Reinforced") loadRFCount++;
		else if(tire.loadRating == "XL") loadXLCount++;
		else if(tire.loadRating == "C") loadCCount++;
		else if(tire.loadRating == "D") loadDCount++;
		else if(tire.loadRating == "E") loadECount++;
		else if(tire.loadRating == "F") loadFCount++;
		else if(tire.loadRating == "G") loadGCount++;
		else if(tire.loadRating == "H") loadHCount++;
	}

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && delFlag(tire)){
		if(tire.runFlat != null && tire.runFlat == "Y"){
			runFlatOnlyCount++;
		}else{
			runFlatNoCount++;
		}
	}
	
	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && runFlatFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && delFlag(tire)){
		if((tire.lrr != null && tire.lrr != "") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].lrr != "") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].lrr != "") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].lrr != "")){
			lrrOnlyCount++;
		}else{
			lrrNoCount++;
		}
	}

    if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && runFlatFlag(tire) && lrrFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && delFlag(tire)){
        if((tire.sidewallFilter != null && tire.sidewallFilter == "Blackwall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Blackwall") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Blackwall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Blackwall")){
            sidewallBWCount++;
        }else if((tire.sidewallFilter != null && tire.sidewallFilter == "Whitewall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Whitewall") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Whitewall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Whitewall")){
            sidewallWWCount++;
        }else if((tire.sidewallFilter != null && tire.sidewallFilter == "White Letter") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "White Letter") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "White Letter") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "White Letter")){
            sidewallWLCount++;
        }else if((tire.sidewallFilter != null && tire.sidewallFilter == "Other Designs") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Other Designs") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Other Designs") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Other Designs")){
            sidewallODCount++;
        }else{
            sidewallNoCount++;
        }
        if((tire.sidewallFilter != null && !tire.sidewallFilter == "") || (tire.hasRearTire && tire.rearTireIndex > -1 && !rearTires[tire.rearTireIndex].sidewallFilter == "") || (tire.hasTirePair && tire.tirePairIndex > -1 && !tirePairs[tire.tirePairIndex].sidewallFilter == "") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && !tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == ""))
            sidewallTotalCount++;
    }

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && delFlag(tire)){
		if(((tire.sssr != null && tire.sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sssr == "Y") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr == "Y")) && tire.perfCode == "W"){
			sssrWOnlyCount++;
        }else if(((tire.sssr != null && tire.sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sssr == "Y") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr == "Y")) && tire.perfCode != "W"){
			sssrAOnlyCount++;
		}else{
			sssrNoCount++;
		}
        if((tire.sssr != null && tire.sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sssr == "Y") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr == "Y"))	sssrOnlyCount++;
	}

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (scChoice != "Y" || scFlag(tire)) && delFlag(tire)){
		if(newFlag(tire)) newCount++;
	}

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "C" || tire.perfCode == "W")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter)) && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && delFlag(tire)){
		if(scFlag(tire)) scCount++;
	}

	if((brandList.length==0 || brandList.indexOf(tire.tireMake) > -1) && (performanceCategoryList.length==0 || performanceCategoryList.indexOf(tire.perfShort) > -1) && (speedRatingList.indexOf(tire.speedRank) > -1 || (speedRatingList.length==0 && (!vehicleSearch || window.recommendedSpeedRatings.indexOf(tire.speedRank) > -1)) || (vehicleSearch && (tire.perfCode == "W" || tire.perfCode == "C")) || tire.perfCode == "TEMP") && (loadRatingList.indexOf(tire.loadRating) > -1 || (loadRatingList.length==0 && (!vehicleSearch || window.recommendedLoadRatings.indexOf(tire.loadRating) > -1)) || (vehicleSearch && tire.loadRating == "LL" && tire.perfCode == "C") || tire.perfCode == "TEMP") && runFlatFlag(tire) && lrrFlag(tire) && sidewallFlag(tire) && sssrFlag(tire) && (newChoice != "Y" || newFlag(tire)) && (scChoice != "Y" || scFlag(tire)) && (Number(priceFilter) == 400 || Number(tire.price) <= Number(priceFilter))){
		if(delDayFlag("1", tire)) del1Count++;
		if(delDayFlag("2", tire)) del2Count++;
	}
}

/* Update counts on the page */
function updateCountSpans(){
	if($('#ExclusiveTires input:checked').length==0) {
		$('#vehicleNavResultCount').text(filteredList.length); // Vehicle Bar
		$('#vehicleNavProductString').text(filteredList.length==1?'tire':'tires');
		$('#priceTotalCount').text(filteredList.length);
	} else if(filterExclusion=="OE") {
		$('#vehicleNavResultCount').text($('#oeTiresCount').text());
		$('#vehicleNavProductString').text($('#oeTiresCount').text()=='1'?'tire':'tires');
	} else if(filterExclusion=="BS") {
		$('#vehicleNavResultCount').text($('#bsTiresCount').text());
		$('#vehicleNavProductString').text($('#bsTiresCount').text()=='1'?'tire':'tires');
	} else if(filterExclusion=="TDG") {
		$('#vehicleNavResultCount').text($('#tdgTiresCount').text());
		$('#vehicleNavProductString').text($('#tdgTiresCount').text()=='1'?'tire':'tires');
	}

	updateCountSpanHelper("avonCount",avonCount);
	updateCountSpanHelper("bfgCount",bfgCount);
	updateCountSpanHelper("bridgestoneCount",bridgestoneCount);
	updateCountSpanHelper("continentalCount",continentalCount);
	updateCountSpanHelper("cooperCount",cooperCount);
	updateCountSpanHelper("dickCepekCount",dickCepekCount);
	updateCountSpanHelper("dunlopCount",dunlopCount);
	updateCountSpanHelper("falkenCount",falkenCount);
	updateCountSpanHelper("firestoneCount",firestoneCount);
	updateCountSpanHelper("fuzionCount",fuzionCount);
	updateCountSpanHelper("generalCount",generalCount);
    updateCountSpanHelper("gitiCount",gitiCount);
	updateCountSpanHelper("goodyearCount",goodyearCount);
	updateCountSpanHelper("hankookCount",hankookCount);
	updateCountSpanHelper("hoosierCount",hoosierCount);
	updateCountSpanHelper("jkTyreCount",jkTyreCount);
	updateCountSpanHelper("kumhoCount",kumhoCount);
	updateCountSpanHelper("laufennCount", laufennCount);
	updateCountSpanHelper("michelinCount",michelinCount);
	updateCountSpanHelper("nexenCount",nexenCount);
	updateCountSpanHelper("pirelliCount",pirelliCount);
	updateCountSpanHelper("powerKingCount",powerKingCount);
	updateCountSpanHelper("rikenCount",rikenCount);
	updateCountSpanHelper("sumitomoCount",sumitomoCount);
	updateCountSpanHelper("toyoCount",toyoCount);
	updateCountSpanHelper("uniroyalCount",uniroyalCount);
	updateCountSpanHelper("yokohamaCount",yokohamaCount);
	updateCountSpanHelper("vredesteinCount",vredesteinCount);
	
	var brandTotalCount = avonCount + bfgCount + bridgestoneCount + continentalCount + cooperCount + dickCepekCount + dunlopCount + falkenCount + firestoneCount + fuzionCount + generalCount + gitiCount + goodyearCount + hankookCount + hoosierCount + jkTyreCount + kumhoCount + laufennCount + michelinCount + nexenCount + pirelliCount + powerKingCount + rikenCount + sumitomoCount + toyoCount + uniroyalCount + vredesteinCount + yokohamaCount;

	document.getElementById("brandTotalCount").innerHTML = brandTotalCount;
		
	/* Touring */
	updateCountSpanHelper("perfCatGTASCount",perfCatGTASCount);
	updateCountSpanHelper("perfCatGTCount",perfCatGTCount);
	updateCountSpanHelper("perfCatSTCount",perfCatSTCount);
	updateCountSpanHelper("perfCatASCount",perfCatASCount);
	updateCountSpanHelper("perfCatCSTASCount",perfCatCSTASCount);
	updateCountSpanHelper("perfCatHASCount",perfCatHASCount);
	updateCountSpanHelper("perfCatHRCount",perfCatHRCount);

	var perfCatTouringCount = perfCatGTASCount + perfCatGTCount + perfCatSTCount + perfCatASCount + perfCatCSTASCount + perfCatHASCount + perfCatHRCount;

	/* Performance */
	updateCountSpanHelper("perfCatEPCount",perfCatEPCount);
	updateCountSpanHelper("perfCatMPCount",perfCatMPCount);
	updateCountSpanHelper("perfCatUHPASCount",perfCatUHPASCount);
	updateCountSpanHelper("perfCatUHPCount",perfCatUHPCount);
	updateCountSpanHelper("perfCatHPASCount",perfCatHPASCount);
	updateCountSpanHelper("perfCatHPCount",perfCatHPCount);
	updateCountSpanHelper("perfCatPASCount",perfCatPASCount);
	updateCountSpanHelper("perfCatSSTASCount",perfCatSSTASCount);
	updateCountSpanHelper("perfCatSSTCount",perfCatSSTCount);

	var perfCatPerformanceCount = perfCatEPCount + perfCatMPCount + perfCatUHPASCount + perfCatUHPCount + perfCatHPASCount + perfCatHPCount + perfCatPASCount + perfCatSSTASCount + perfCatSSTCount;


	/* On-Off Road */
	updateCountSpanHelper("perfCatORATCount",perfCatORATCount);
	updateCountSpanHelper("perfCatORCTCount",perfCatORCTCount);
	updateCountSpanHelper("perfCatORMTCount",perfCatORMTCount);

	var perfCatOffroadCount = perfCatORATCount + perfCatORCTCount + perfCatORMTCount;


	/* Winter / Snow  */
	updateCountSpanHelper("perfCatPPWCount",perfCatPPWCount);
	updateCountSpanHelper("perfCatPSISCount",perfCatPSISCount);
	updateCountSpanHelper("perfCatPSWCount",perfCatPSWCount);
	updateCountSpanHelper("perfCatLTPWCount",perfCatLTPWCount);
	updateCountSpanHelper("perfCatLTSISCount",perfCatLTSISCount);
	updateCountSpanHelper("perfCatLTSWCount",perfCatLTSWCount);
	var perfCatWinterSnowCount = perfCatPPWCount + perfCatPSISCount + perfCatPSWCount + perfCatLTPWCount + perfCatLTSISCount + perfCatLTSWCount;


	/* Competition */
	updateCountSpanHelper("perfCatDRYCount",perfCatDRYCount);
	updateCountSpanHelper("perfCatWETCount",perfCatWETCount);
	updateCountSpanHelper("perfCatSTRTCount",perfCatSTRTCount);
	updateCountSpanHelper("perfCatDRAGCount",perfCatDRAGCount);

	var perfCatCompPassCount = perfCatDRYCount + perfCatWETCount + perfCatSTRTCount + perfCatDRAGCount;


	/* Other */ 
	updateCountSpanHelper("perfCatTEMPCount",perfCatTEMPCount);
	updateCountSpanHelper("perfCatTSCount",perfCatTSCount);
	var perfCatOtherCount = perfCatTEMPCount + perfCatTSCount;

	var perfCatTotalCount = perfCatTouringCount + perfCatPerformanceCount + perfCatOffroadCount + perfCatWinterSnowCount + perfCatCompPassCount + perfCatOtherCount;


	document.getElementById("perfCatTouringCount").innerHTML = perfCatTouringCount;
	document.getElementById("perfCatPerformanceCount").innerHTML = perfCatPerformanceCount;
	document.getElementById("perfCatOffroadCount").innerHTML = perfCatOffroadCount;
	document.getElementById("perfCatWinterSnowCount").innerHTML = perfCatWinterSnowCount;
	document.getElementById("perfCatCompPassCount").innerHTML = perfCatCompPassCount;
	document.getElementById("perfCatOtherCount").innerHTML = perfCatOtherCount;
	document.getElementById("perfCatTotalCount").innerHTML = perfCatTotalCount;

	var speedRatingTotalCount = 0;
	if(document.getElementById("speedNRCount")){
		updateCountSpanHelper("speedNRCount",speedNRCount);
	}
	speedRatingTotalCount += speedNRCount;
	if(document.getElementById("speedLCount")){
		updateCountSpanHelper("speedLCount",speedLCount);
	}
	speedRatingTotalCount += speedLCount;
	if(document.getElementById("speedMCount")){
		updateCountSpanHelper("speedMCount",speedMCount);
	}
	speedRatingTotalCount += speedMCount;
	if(document.getElementById("speedNCount")){
		updateCountSpanHelper("speedNCount",speedNCount);
	}
	speedRatingTotalCount += speedNCount;
	if(document.getElementById("speedPCount")){
		updateCountSpanHelper("speedPCount",speedPCount);
	}
	speedRatingTotalCount += speedPCount;
	if(document.getElementById("speedQCount")){
		updateCountSpanHelper("speedQCount",speedQCount);
	}
	speedRatingTotalCount += speedQCount;
	if(document.getElementById("speedRCount")){
		updateCountSpanHelper("speedRCount",speedRCount);
	}
	speedRatingTotalCount += speedRCount;
	if(document.getElementById("speedSCount")){
		updateCountSpanHelper("speedSCount",speedSCount);
	}
	speedRatingTotalCount += speedSCount;
	if(document.getElementById("speedTCount")){
		updateCountSpanHelper("speedTCount",speedTCount);
	}
	speedRatingTotalCount += speedTCount;
	if(document.getElementById("speedUCount")){
		updateCountSpanHelper("speedUCount",speedUCount);
	}
	speedRatingTotalCount += speedUCount;
	if(document.getElementById("speedHCount")){
		updateCountSpanHelper("speedHCount",speedHCount);
	}
	speedRatingTotalCount += speedHCount;
	if(document.getElementById("speedVCount")){
		updateCountSpanHelper("speedVCount",speedVCount);
	}
	speedRatingTotalCount += speedVCount;
	if(document.getElementById("speedZCount")){
		updateCountSpanHelper("speedZCount",speedZCount);
	}
	speedRatingTotalCount += speedZCount;
	if(document.getElementById("speedWCount")){
		updateCountSpanHelper("speedWCount",speedWCount);
	}
	speedRatingTotalCount += speedWCount;
	if(document.getElementById("speedYCount")){
		updateCountSpanHelper("speedYCount",speedYCount);
	}
	speedRatingTotalCount += speedYCount;
	if(document.getElementById("speed\(Y\)Count")){
		updateCountSpanHelper("speed\(Y\)Count",speedYPlusCount);
	}
	speedRatingTotalCount += speedYPlusCount;

	document.getElementById("speedRatingTotalCount").innerHTML = speedRatingTotalCount;
		
	var loadRangeTotalCount = 0;

	if(!vehicleSearch || recommendedLoadRatings.indexOf("LL") > -1){
		updateCountSpanHelper("loadLLCount",loadLLCount);
		loadRangeTotalCount += loadLLCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("S") > -1){
		updateCountSpanHelper("loadSCount",loadSCount);
		loadRangeTotalCount += loadSCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("RF") > -1){
		updateCountSpanHelper("loadRFCount",loadRFCount);
		loadRangeTotalCount += loadRFCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("XL") > -1){
		updateCountSpanHelper("loadXLCount",loadXLCount);
		loadRangeTotalCount += loadXLCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("C") > -1){
		updateCountSpanHelper("loadCCount",loadCCount);
		loadRangeTotalCount += loadCCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("D") > -1){
		updateCountSpanHelper("loadDCount",loadDCount);
		loadRangeTotalCount += loadDCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("E") > -1){
		updateCountSpanHelper("loadECount",loadECount);
		loadRangeTotalCount += loadECount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("F") > -1){
		updateCountSpanHelper("loadFCount",loadFCount);
		loadRangeTotalCount += loadFCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("G") > -1){
		updateCountSpanHelper("loadGCount",loadGCount);
		loadRangeTotalCount += loadGCount;
	}
	if(!vehicleSearch || recommendedLoadRatings.indexOf("H") > -1){
		updateCountSpanHelper("loadHCount",loadHCount);
		loadRangeTotalCount += loadHCount;
	}

	document.getElementById("loadRangeTotalCount").innerHTML = loadRangeTotalCount;

	updateCountSpanHelper("runFlatNoCount",runFlatNoCount);
	updateCountSpanHelper("runFlatOnlyCount",runFlatOnlyCount);
	document.getElementById("runFlatTotalCount").innerHTML = runFlatOnlyCount;
	
	updateCountSpanHelper("lrrNoCount",lrrNoCount);
	updateCountSpanHelper("lrrOnlyCount",lrrOnlyCount);
	document.getElementById("lrrTotalCount").innerHTML = lrrOnlyCount;

	updateCountSpanHelper("sidewallBWCount",sidewallBWCount);
	updateCountSpanHelper("sidewallWWCount",sidewallWWCount);
	updateCountSpanHelper("sidewallWLCount",sidewallWLCount);
	updateCountSpanHelper("sidewallODCount",sidewallODCount);
	document.getElementById("sidewallTotalCount").innerHTML = sidewallTotalCount;

	updateCountSpanHelper("sssrNoCount",sssrNoCount);
	updateCountSpanHelper("sssrOnlyCount",sssrOnlyCount);
	updateCountSpanHelper("sssrWOnlyCount",sssrWOnlyCount);
	updateCountSpanHelper("sssrAOnlyCount",sssrAOnlyCount);
	document.getElementById("sssrTotalCount").innerHTML = sssrOnlyCount;

	updateCountSpanHelper("newTiresCount",newCount);
	updateCountSpanHelper("scTiresCount",scCount);

	updateCountSpanHelper("del1TiresCount", del1Count);
	updateCountSpanHelper("del2TiresCount", del2Count);
}

function updateCountSpanHelper(elementID, count) {
	if(document.getElementById(elementID)) {
	       document.getElementById(elementID).innerHTML = count;
	       if(count==0) $('#'+elementID.replace(/(?=[()])/g, '\\')).closest('.checkbox').addClass('checkboxDisabled').find('input[type=checkbox]').attr('disabled', true);
	       else $('#'+elementID.replace(/(?=[()])/g, '\\')).closest('.checkbox').removeClass('checkboxDisabled').find('input[type=checkbox]').removeAttr('disabled');
	}
}

function updatePageBar() {
	//View all
	if(viewPerPage>filteredList.length) {
		viewAll();
		$('#pagesSpan').hide();
	} else {
		$('#pagesSpan').show();
	}
	setViewPerPageInBean();

	// Update top page dropdown
	var ele = $('#viewPerPageSelect, #viewPerPageSelect2');
	$(ele).empty(); // remove all options
	$(ele).append($('<option>',{'value':'10'}).text('10'));	
	var maxAvailView = 10;
	if(filteredList.length > 25) {
		maxAvailView = 25;
		$(ele).append($('<option>',{'value':'25'}).text('25'));	
	}
	if(filteredList.length > 50) {
		maxAvailView = 50;
		$(ele).append($('<option>',{'value':'50'}).text('50'));	
	}
	if(filteredList.length > 100)
		$(ele).append($('<option>',{'value':'100'}).text('100'));	
	else
		$(ele).append($('<option>',{'value':(viewPerPage>maxAvailView?viewPerPage:'100')}).text('All'));
	$(ele).find('option[value="'+viewPerPage+'"]').prop('selected',true);
    $(ele).each(function() {
        trDropdownUpdateText(this);
    });
}

function goToPage(page){
	if(page <= pages && page >= 1){
		scrollToTop();
		startIndex = (page - 1) * viewPerPage;

		updateTireContentDiv();

		currentPage = page;

		// Tara is combining these calls 10/12
        	updateCurrentStartInBean();

		createPages();
		affirmRefresh();
	}
}

function updateViewStartCurrentInBean(){
	var url = "/tires/TireSearchControlServlet?ajax=true&action=updateViewStartCurrent&currentPage=" + currentPage + "&startIndex=" + startIndex + "&viewPerPage=" + viewPerPage;
	ajaxURL(url);
}

function updateCurrentStartInBean(){
        var url = "/tires/TireSearchControlServlet?ajax=true&action=updateCurrentStart&currentPage=" + currentPage + "&startIndex=" + startIndex;
	ajaxURL(url);
}

function setCurrentPageInBean(){
	var url = "/tires/TireSearchControlServlet?ajax=true&action=updateCurrentPage&currentPage=" + currentPage;
	ajaxURL(url);
}

function goToNextPage(){
	if(currentPage < pages){
		goToPage(currentPage + 1);
	}
	affirmRefresh();
}

function goToPreviousPage(){
	if(currentPage > 1){
		goToPage(currentPage - 1);
	}
	affirmRefresh();
}
			
function changeTab(tabName, fromInit){
	var tabEvar = "All";
	var tabChanged = false;

	if(tabName == "All"){
		trDropdownEnable($('#sortValue'));
		filterTires();
		tabEvar = "all";
		tabChanged = true;

	}else if(tabName == "OE" && $('#oe-Tires:checked').length>0){
		trDropdownDisable($('#sortValue'));
		filterByOETires();
		tabEvar = "o.e.";
		tabChanged = true;

	}else if(tabName == "BS" && $('#bs-Tires:checked').length>0){
		trDropdownDisable($('#sortValue'));
		filterByBSTires();
		tabEvar = "best sellers";
		tabChanged = true;

	}else if(tabName == "TDG" && $('#tdg-Tires:checked').length>0){
		trDropdownDisable($('#sortValue'));
		filterByTDGTires();
		tabEvar = "tire decision guide";
		tabChanged = true;
	}else if(tabName == "Winter" && $('#w-Tires:checked').length>0){ // Updated code from old site
		trDropdownDisable($('#sortValue'));
		filterByWinterTires();
		tabEvar = "winter";
		tabChanged = true;
	} else trDropdownEnable($('#sortValue'));

	if(!tabChanged){
		filterTires();
		tabEvar = "all";
	}
	affirmRefresh();

	s=s_gi(s_account);	
	s.linkTrackVars = "eVar11";
	s.eVar11 = tabEvar;
	if(!fromInit) s.tl(true,'o', s.pageName+": view by: "+tabEvar);

}

function selectFilter(filter) {
    if ($(filter).prop('checked')) {
        $(filter).data('selected', true);
    } else {
        $(filter).data('selected', false);
    }
}

function sortTDGTires(){
	trDropdownEnable($('#sortValue'));
	$('#sortValue2').attr('selected','selected');
	document.forms.sortByForm.sortValue.value = 22;
	document.forms.sortByForm.submit();
}
			
function resetFilters(){
    $('#filterOptions').find('input[type=checkbox]').prop('checked',false);
    $('#filterOptions').find('input[type=checkbox]').data('selected', false);
	if (priorPerfCat == 'W') {
		$winSnow = $('#winSnowUl_load');
		$winSnow.find('input:checkbox').prop('checked',true);
		if ($winSnow.length > 0) {
            $winSnow.addClass('expanded');
            $winSnow.find('.checkboxContainer').show();
		}
	}
	priceFilter = 400;
	$("#priceSelected").html("400+");
	$("#price_slider").slider("value",400);
}
			
function selectAllCheckboxes(formName, checkboxName){
	var checkBoxes = document.forms[formName][checkboxName];

	for(i = 0; i < checkBoxes.length; i++){
		if(formName == "loadRatingFilter"){
			if(checkBoxes[i].parentNode.style.display != "none"){
				checkBoxes[i].checked = true;
			}
		}else{
			checkBoxes[i].checked = true;
		}
	}
}

function selectPerfCatCheckboxes(perfCatSection){
	var perfCatArray = new Array();
	if(perfCatSection == "sp"){
		perfCatArray[0] = "EP";
		perfCatArray[1] = "MP";
		perfCatArray[2] = "UHP";
		perfCatArray[3] = "HP";
		perfCatArray[4] = "GT";

	}else if(perfCatSection == "as"){
		perfCatArray[0] = "UHPAS";
		perfCatArray[1] = "HPAS";
		perfCatArray[2] = "PAS";
		perfCatArray[3] = "GTAS";
		perfCatArray[4] = "ST";
		perfCatArray[5] = "AS";
	
	}else if(perfCatSection == "asw"){
		perfCatArray[0] = "PPW";
		perfCatArray[1] = "PSIS";
		perfCatArray[2] = "PSW";

	}else if(perfCatSection == "comp"){
		perfCatArray[0] = "DRY";
		perfCatArray[1] = "WET";
		perfCatArray[2] = "STRT";
		perfCatArray[3] = "DRAG";

	}else if(perfCatSection == "lt"){
		perfCatArray[0] = "SSTAS";
		perfCatArray[1] = "SST";
		perfCatArray[2] = "HR";
		perfCatArray[3] = "CSTAS";
		perfCatArray[4] = "HAS";
		perfCatArray[5] = "ORAT";
		perfCatArray[6] = "ORCT";
		perfCatArray[7] = "ORMT";
	
	}else if(perfCatSection == "wslt"){
		perfCatArray[0] = "LTPW";
		perfCatArray[1] = "LTSIS";
		perfCatArray[2] = "LTSW";
	}

	var perfCats = document.perfCatFilter.performance;	
	for(i = 0; i < perfCats.length; i++){
		if(perfCatArray.indexOf(perfCats[i].value) > -1){
			perfCats[i].checked = true;
		}
	}
}

function deselectPerfCatCheckboxes(perfCatSection){
	var perfCatArray = new Array();
	if(perfCatSection == "sp"){
		perfCatArray[0] = "EP";
		perfCatArray[1] = "MP";
		perfCatArray[2] = "UHP";
		perfCatArray[3] = "HP";
		perfCatArray[4] = "GT";

	}else if(perfCatSection == "as"){
		perfCatArray[0] = "UHPAS";
		perfCatArray[1] = "HPAS";
		perfCatArray[2] = "PAS";
		perfCatArray[3] = "GTAS";
		perfCatArray[4] = "ST";
		perfCatArray[5] = "AS";
		perfCatArray[6] = "W";
	
	}else if(perfCatSection == "asw"){
		perfCatArray[0] = "PPW";
		perfCatArray[1] = "PSIS";
		perfCatArray[2] = "PSW";

	}else if(perfCatSection == "comp"){
		perfCatArray[0] = "DRY";
		perfCatArray[1] = "WET";
		perfCatArray[2] = "STRT";
		perfCatArray[3] = "DRAG";
		perfCatArray[4] = "C";
		
	}else if(perfCatSection == "lt"){
		perfCatArray[0] = "SSTAS";
		perfCatArray[1] = "SST";
		perfCatArray[2] = "HR";
		perfCatArray[3] = "CSTAS";
		perfCatArray[4] = "HAS";
		perfCatArray[5] = "ORAT";
		perfCatArray[6] = "ORCT";
		perfCatArray[7] = "ORMT";
	
	}else if(perfCatSection == "wslt"){
		perfCatArray[0] = "LTPW";
		perfCatArray[1] = "LTSIS";
		perfCatArray[2] = "LTSW";
	}

	var perfCats = document.perfCatFilter.performance;	
	for(i = 0; i < perfCats.length; i++){
		if(perfCatArray.indexOf(perfCats[i].value) > -1){
			perfCats[i].checked = false;
		}
	}
}
			
function deselectAllCheckboxes(formName, checkboxName){
	var checkBoxes = document.forms[formName][checkboxName]

	for(i = 0; i < checkBoxes.length; i++){
		checkBoxes[i].checked = false;
	}
	if(typeof checkBoxes.length === "undefined") {
		checkBoxes.checked = false;
	}
}

function toggleTirePhotos(){
	var photos = document.getElementsByTagName("img");
	for(var i = 0; i < photos.length; i++){
		var photo = photos[i];
		if(photo.className == "tirePhoto"){
			if(photo.style.display == "none"){
				photos[i].parentNode.style.display = "inline";
				photos[i].style.display = "inline";
				showHidePhotos = "Show";

				if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Mac") != -1) {
					window.resizeTo(self.outerWidth + 1, self.outerHeight);
					window.resizeTo(self.outerWidth - 1, self.outerHeight);
				}
			}else{
				photos[i].parentNode.style.display="none";
				photos[i].style.display = "none";
				showHidePhotos = "Hide";

				if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Mac") != -1) {
					window.resizeTo(self.outerWidth + 1, self.outerHeight);
					window.resizeTo(self.outerWidth - 1, self.outerHeight);
				}
			}
		}
	}

	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		var link = links[i];
		if(link.className == "cameraHover"){
			if(link.style.display == "none"){
				link.style.display = "inline";
			}else{
				link.style.display = "none";
			}
		}
	}

	if(showHidePhotos == "Show"){
		document.getElementById("showHide").innerHTML = "Hide";
	}else{
		document.getElementById("showHide").innerHTML = "Show";
	}
	
	var url = "/tires/TireSearchControlServlet?ajax=true&action=updateShowHidePhotos&showHidePhotos=" + showHidePhotos;
	//var ajax = new TR_AJAXInteraction(url);
	//ajax.doGet();
	ajaxURL(url);
}

function toggleViewAllLink(id, textOrLink, listLength){
	var newStrong = strong.cloneNode(false);
	var oldStrong = document.getElementById(id);
	newStrong.id = id;
		
	var newSpan = span.cloneNode(false);
	if(id == "viewAll")
		newSpan.id = "tiresAvailable";
	else
		newSpan.id = "tiresAvailable2";

	if(textOrLink == "link"){
		var newA = a.cloneNode(false);
		newA.href = "#";
		newA.onclick = new Function("viewAll(); return false;");

		var newText = txt.cloneNode(false);
		newText.data = "View all ";

		newA.appendChild(newText);

		newText = txt.cloneNode(false);
		newText.data = listLength;
		newSpan.appendChild(newText);
		newA.appendChild(newSpan);

		newText = txt.cloneNode(false);
		newText.data = " results";
		newA.appendChild(newText);

		newStrong.appendChild(newA);

	}else{
	
		var newText = txt.cloneNode(false);
		newText.data = listLength; 
		newSpan.appendChild(newText);
		newStrong.appendChild(newSpan);
		newText = txt.cloneNode(false);
		newText.data = " result";
		if(filteredList.length > 1){
			newText.data += "s";
		}
		newStrong.appendChild(newText);

	}
		
	oldStrong.parentNode.replaceChild(newStrong, oldStrong);
}

function updateFilterEvars(){
	s.linkTrackVars = "eVar27";
	s.eVar27 = priceFilter;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',priceFilter);

	s.linkTrackVars = "eVar28";
	s.eVar28 = brandList;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',brandList);
	
	s.linkTrackVars = "eVar29";
	s.eVar29 = performanceCategoryList;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',performanceCategoryList);
	
	s.linkTrackVars = "eVar30";
	s.eVar30 = speedRatingList;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',speedRatingList);
	
	s.linkTrackVars = "eVar31";
	s.eVar31 = loadRatingList;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',loadRatingList);
	
	s.linkTrackVars = "eVar32";
	s.eVar32 = runFlatChoice;
	s_gi('tirerackcom');
	//s_gi('devtirerackcom');
	s.tl(true,'o',runFlatChoice);
}

function lrrFlag(tire){
	if((lrrChoice == "Y" && lrrNoChoice == "Y") || (lrrChoice != "Y" && lrrNoChoice != "Y") || (lrrChoice == "Y" && (tire.lrr != "" || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].lrr != "") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].lrr != "") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].lrr != ""))) || (lrrNoChoice == "Y" && tire.lrr == "" && (!tire.hasTirePair || tire.tirePairIndex == -1 || tirePairs[tire.tirePairIndex].lrr == "") && (!tire.hasRearTire || tire.rearTireIndex == -1 || rearTires[tire.rearTireIndex].lrr == "") && (!tire.hasRearTire || tire.rearTireIndex == -1 || !rearTires[tire.rearTireIndex].hasTirePair || rearTires[tire.rearTireIndex].tirePairIndex == -1 || tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].lrr == ""))){
		return true;
	}

	return false;
}

function sidewallFlag(tire) {
	if ((sidewallBWChoice == "Y" && sidewallWWChoice == "Y" &&  sidewallWLChoice == "Y" && sidewallODChoice == "Y") ||
	    (sidewallBWChoice != "Y" && sidewallWWChoice != "Y" &&  sidewallWLChoice != "Y" && sidewallODChoice != "Y") ||
		(sidewallBWChoice == "Y" && (tire.sidewallFilter != null && tire.sidewallFilter == "Blackwall") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Blackwall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Blackwall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Blackwall")) ||
        (sidewallWWChoice == "Y" && (tire.sidewallFilter != null && tire.sidewallFilter == "Whitewall") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Whitewall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Whitewall") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Whitewall")) ||
        (sidewallWLChoice == "Y" && (tire.sidewallFilter != null && tire.sidewallFilter == "White Letter") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "White Letter") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "White Letter") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "White Letter")) ||
        (sidewallODChoice == "Y" && (tire.sidewallFilter != null && tire.sidewallFilter == "Other Designs") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sidewallFilter == "Other Designs") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sidewallFilter == "Other Designs") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sidewallFilter == "Other Designs"))) {
		return true;
	}
	return false;
}

function sssrFlag(tire){
	if((sssrWChoice == "Y" && sssrAChoice == "Y" && sssrNoChoice == "Y") || 
       (sssrWChoice != "Y" && sssrAChoice != "Y" && sssrNoChoice != "Y") ||
       (sssrAChoice == "Y" && ((tire.sssr != null && tire.sssr == "Y") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr == "Y")) && tire.perfCode != "W") ||
       (sssrWChoice == "Y" && ((tire.sssr != null && tire.sssr == "Y") || (tire.hasTirePair && tire.tirePairIndex > -1 && tirePairs[tire.tirePairIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].sssr == "Y") || (tire.hasRearTire && tire.rearTireIndex > -1 && rearTires[tire.rearTireIndex].hasTirePair && rearTires[tire.rearTireIndex].tirePairIndex > -1 && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr == "Y")) && tire.perfCode == "W") ||
       (sssrNoChoice == "Y" && tire.sssr != "Y" && (!tire.hasTirePair || tire.tirePairIndex == -1 || tirePairs[tire.tirePairIndex].sssr != "Y") && (!tire.hasRearTire || tire.rearTireIndex == -1 || rearTires[tire.rearTireIndex].sssr != "Y") && (!tire.hasRearTire || tire.rearTireIndex == -1 || !rearTires[tire.rearTireIndex].hasTirePair || rearTires[tire.rearTireIndex].tirePairIndex == -1 || tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].sssr != "Y"))){
		return true;
	}
	return false;
}

function runFlatFlag(tire) {
	return ((runFlatChoice != "Y" && nonRunFlatChoice != "Y") || (runFlatChoice == "Y" && nonRunFlatChoice == "Y") || (nonRunFlatChoice == "Y" && tire.runFlat != "Y") || (runFlatChoice == "Y" && tire.runFlat == "Y"));
}

function newFlag(tire) {
	return (tire.isNew || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isNew) || (tire.hasRearTire && tire.rearTireIndex > -1 && (rearTires[tire.rearTireIndex].isNew || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isNew))));
}

function scFlag(tire) {
	return (tire.isOnSpecialCloseout || (tire.hasTirePair && tirePairs[tire.tirePairIndex].isOnSpecialCloseout) || (tire.hasRearTire && tire.rearTireIndex > -1 && (rearTires[tire.rearTireIndex].isOnSpecialCloseout || (rearTires[tire.rearTireIndex].hasTirePair && tirePairs[rearTires[tire.rearTireIndex].tirePairIndex].isOnSpecialCloseout))));
}

function delFlag(tire) {
	if(day1Choice != "Y" && day2Choice != "Y") return true;
	if(day1Choice == "Y" && delDayFlag("1", tire)) return true;
	if(day2Choice == "Y" && delDayFlag("2", tire)) return true;
	return false;
}
function delDayFlag(choice, tire) {
    if(tire.maxDelDay == -1) return false;
	if(choice=="1" && tire.maxDelDay == delDays[0]) return true;
	if(choice=="2" && (tire.maxDelDay == delDays[1] || tire.maxDelDay == delDays[0])) return true;
	return false;
}
	
function generateCommonHiddenParams(tire){
	var tempDiv = div.cloneNode(false);

	tempDiv.appendChild(generateHiddenInput("common", "true"));
	tempDiv.appendChild(generateHiddenInput("Make", tire.tireMake));
	tempDiv.appendChild(generateHiddenInput("Model", tire.tireModel));
	tempDiv.appendChild(generateHiddenInput("URL", tire.url));
	tempDiv.appendChild(generateHiddenInput("Sumrating", tire.sumRating));
	tempDiv.appendChild(generateHiddenInput("PerfCat", tire.perfCode));
	tempDiv.appendChild(generateHiddenInput("Sidewall", tire.sidewall));
	tempDiv.appendChild(generateHiddenInput("SidewallShown", tire.sidewallShown));
	tempDiv.appendChild(generateHiddenInput("Type", "T"));
	if(vehicleSearch){
		tempDiv.appendChild(generateHiddenInput("autoMake", autoMake));
		tempDiv.appendChild(generateHiddenInput("autoYear", autoYear));
		tempDiv.appendChild(generateHiddenInput("autoModel", autoModel));
		tempDiv.appendChild(generateHiddenInput("autoModClar", autoModClar));
	}else{
		tempDiv.appendChild(generateHiddenInput("AddToUser", "true"));
	}
	if(tire.hasSpec){
		tempDiv.appendChild(generateHiddenInput("HasSpec", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput("HasSpec", ""));
	}
	if(tire.hasWarranty){
		tempDiv.appendChild(generateHiddenInput("HasWarranty", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput("HasWarranty", ""));
	}
	if(tire.hasComments){
		tempDiv.appendChild(generateHiddenInput("HasComments", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput("HasComments", ""));
	}
	if(tire.hasTests){
		tempDiv.appendChild(generateHiddenInput("HasTests", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput("HasTests", ""));
	}
	if(tire.hasSurveys){
		tempDiv.appendChild(generateHiddenInput("HasSurveys", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput("HasSurveys", ""));
	}
	if(tire.promoCode != null && tire.promoCode != "" && !isCanadian && tire.okTodisplayPromo == 'true'){ 
		tempDiv.appendChild(generateHiddenInput("PromoCode", tire.promoCode));
		tempDiv.appendChild(generateHiddenInput("Promo1AddtlType", tire.promo1AddtlType));
		tempDiv.appendChild(generateHiddenInput("Promo1AddtlValue", tire.promo1AddtlValue));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnlyType", tire.promoCCOnlyType));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnlyValue", tire.promoCCOnlyValue));
		tempDiv.appendChild(generateHiddenInput("PromoLongText", tire.promoLongText));
		tempDiv.appendChild(generateHiddenInput("promo1HideEndSoon", tire.promo1HideEndSoon));
	}
	if(tire.promoCode2 != null && tire.promoCode2 != "" && !isCanadian && tire.okTodisplayPromo == 'true'){
		tempDiv.appendChild(generateHiddenInput("DoubleDip1", tire.doubleDip1=="Y"?"Y":""));
		tempDiv.appendChild(generateHiddenInput("PromoCode2", tire.promoCode2));
		tempDiv.appendChild(generateHiddenInput("Promo2AddtlType", tire.promo2AddtlType));
		tempDiv.appendChild(generateHiddenInput("Promo2AddtlValue", tire.promo2AddtlValue));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnly2Type", tire.promoCCOnly2Type));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnly2Value", tire.promoCCOnly2Value));
		tempDiv.appendChild(generateHiddenInput("PromoLongText2", tire.promoLongText2));
		tempDiv.appendChild(generateHiddenInput("promo2HideEndSoon", tire.promo2HideEndSoon));
	}
	if(tire.promoCode3 != null && tire.promoCode3 != "" && !isCanadian && tire.okTodisplayPromo == 'true'){
		tempDiv.appendChild(generateHiddenInput("DoubleDip2", tire.doubleDip2=="Y"?"Y":""));
		tempDiv.appendChild(generateHiddenInput("PromoCode3", tire.promoCode3));
		tempDiv.appendChild(generateHiddenInput("Promo3AddtlType", tire.promo3AddtlType));
		tempDiv.appendChild(generateHiddenInput("Promo3AddtlValue", tire.promo3AddtlValue));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnly3Type", tire.promoCCOnly3Type));
		tempDiv.appendChild(generateHiddenInput("PromoCCOnly3Value", tire.promoCCOnly3Value));
		tempDiv.appendChild(generateHiddenInput("PromoLongText3", tire.promoLongText3));
		tempDiv.appendChild(generateHiddenInput("promo3HideEndSoon", tire.promo3HideEndSoon));
	}

	return tempDiv;
}

function generateReducedHiddenParams(tire, iVal, index){
	var tempDiv = div.cloneNode(false);

	tempDiv.appendChild(generateHiddenInput(iVal + "_PartNumber", tire.partNumber, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Price", tire.price, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SortCode", tire.sortCode));
	tempDiv.appendChild(generateHiddenInput(iVal + "_RestrictedQty", tire.restrictedQty));
	tempDiv.appendChild(generateHiddenInput(iVal + "_FreightCost", tire.freightCost, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoValue", tire.promoValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoToUse", tire.promoToUse, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlType", tire.promo1AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlType", tire.promo2AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlType", tire.promo3AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlValue", tire.promo1AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlValue", tire.promo2AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlValue", tire.promo3AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyType", tire.promoCCOnlyType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Type", tire.promoCCOnly2Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Type", tire.promoCCOnly3Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyValue", tire.promoCCOnlyValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Value", tire.promoCCOnly2Value, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Value", tire.promoCCOnly3Value, index));
    if(tire.hasRebate) {
        tempDiv.appendChild(generateHiddenInput(iVal + "_Rebate", tire.rebate, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateQty", tire.rebateQty, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateAmt", tire.rebateAmt, index));
    }
	tempDiv.appendChild(generateHiddenInput(iVal + "_RHPprice", tire.rhpPrice, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_InboardedFrt", tire.inboardedFrt, index));
	if(tire.showMapPrice && tire.mapLayout == 3){
		tempDiv.appendChild(generateHiddenInput("mastMAP", "y"));
	}

	return tempDiv;
}

function generateHiddenParams(tire, iVal, index){
	var tempDiv = div.cloneNode(false);

	tempDiv.appendChild(generateHiddenInput(iVal + "_PartNumber", tire.partNumber));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Clarifier", tire.clarifier));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Price", tire.price, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LargeTire", tire.isLargeTire));
	tempDiv.appendChild(generateHiddenInput(iVal + "_FreightCost", tire.freightCost, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Width", tire.width));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Ratio", tire.ratio));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Diameter", tire.diameter));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SortCode", tire.sortCode));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SpeedRating", tire.speedRating));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SpeedRank", tire.speedRank));
	tempDiv.appendChild(generateHiddenInput(iVal + "_StockMessage", tire.stockMessage, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_RestrictedQty", tire.restrictedQty));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Prevprice", tire.prevPrice));
	tempDiv.appendChild(generateHiddenInput(iVal + "_DiscountPrice", tire.discountPrice));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LoadRating", tire.loadRating));
	tempDiv.appendChild(generateHiddenInput(iVal + "_RHPprice", tire.rhpPrice, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_InboardedFrt", tire.inboardedFrt, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SpecCode", tire.specCode));
	tempDiv.appendChild(generateHiddenInput(iVal + "_MarkdownPrice", tire.markdownPrice));
	tempDiv.appendChild(generateHiddenInput(iVal + "_MapPrice", tire.mapPrice));
	if(tire.showMapPrice && tire.mapLayout == 3){
		tempDiv.appendChild(generateHiddenInput("mastMAP", "y"));
	}
	tempDiv.appendChild(generateHiddenInput(iVal + "_StyleSubType", tire.subType));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Pre", tire.pre));
	if(tire.heatCycleAvail){
		tempDiv.appendChild(generateHiddenInput(iVal + "_HeatCycleAvail", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput(iVal + "_HeatCycleAvail", "N"));
	}
	if(tire.shaveAvail){
		tempDiv.appendChild(generateHiddenInput(iVal + "_ShaveAvail", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput(iVal + "_ShaveAvail", "N"));
	}
	if(tire.studAvail){
		tempDiv.appendChild(generateHiddenInput(iVal + "_StudAvail", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput(iVal + "_StudAvail", "N"));
	}
	if(tire.isLTL){
		tempDiv.appendChild(generateHiddenInput(iVal + "_LTL", "Y"));
	}else{
		tempDiv.appendChild(generateHiddenInput(iVal + "_LTL", "N"));
	}
	tempDiv.appendChild(generateHiddenInput(iVal + "_LRR", tire.lrr));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LRRURL", tire.lrrURL));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SSSR", tire.sssr));
	tempDiv.appendChild(generateHiddenInput(iVal + "_HasMfrRHP", tire.hasMfrRHP));
	tempDiv.appendChild(generateHiddenInput(iVal + "_RunFlat", tire.runFlat));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoValue", tire.promoValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoToUse", tire.promoToUse, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlType", tire.promo1AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlType", tire.promo2AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlType", tire.promo3AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlValue", tire.promo1AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlValue", tire.promo2AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlValue", tire.promo3AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyType", tire.promoCCOnlyType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Type", tire.promoCCOnly2Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Type", tire.promoCCOnly3Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyValue", tire.promoCCOnlyValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Value", tire.promoCCOnly2Value, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Value", tire.promoCCOnly3Value, index));
    if(tire.hasRebate) {
        tempDiv.appendChild(generateHiddenInput(iVal + "_Rebate", tire.rebate, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateQty", tire.rebateQty, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateAmt", tire.rebateAmt, index));
    }
	tempDiv.appendChild(generateHiddenInput(iVal + "_prefWarehouseStock", tire.prefWarehouseStock, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_prefDueDate", tire.prefDueDate, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_altDate", tire.altDate, index));
	//PN0663 - New parameters for passing service description through to the cart.
	tempDiv.appendChild(generateHiddenInput(iVal + "_ServDesc", tire.serviceDesc));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LoadIndex", tire.loadIndex));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Lbs", tire.lbs));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kg", tire.kg));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LoadIndex2", tire.loadIndex2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Lbs2", tire.lbs2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kg2", tire.kg2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_ServSpeedRating", tire.servSpeedRating));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Mph", tire.mph));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kph", tire.kph));
	//End PN0663.

	return tempDiv;
}

function generateHiddenParamsFRLR(tire, iVal, index){
	var tempDiv = div.cloneNode(false);

	tempDiv.appendChild(generateHiddenInput(iVal + "_PartNumber", tire.partNumber, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Price", tire.price, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_FreightCost", tire.freightCost, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_RHPprice", tire.rhpPrice, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_InboardedFrt", tire.inboardedFrt, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_SortCode", tire.sortCode));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoValue", tire.promoValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoToUse", tire.promoToUse, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlType", tire.promo1AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlType", tire.promo2AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlType", tire.promo3AddtlType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo1AddtlValue", tire.promo1AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo2AddtlValue", tire.promo2AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Promo3AddtlValue", tire.promo3AddtlValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyType", tire.promoCCOnlyType, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Type", tire.promoCCOnly2Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Type", tire.promoCCOnly3Type, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnlyValue", tire.promoCCOnlyValue, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly2Value", tire.promoCCOnly2Value, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_PromoCCOnly3Value", tire.promoCCOnly3Value, index));
    if(tire.hasRebate) {
        tempDiv.appendChild(generateHiddenInput(iVal + "_Rebate", tire.rebate, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateQty", tire.rebateQty, index));
        tempDiv.appendChild(generateHiddenInput(iVal + "_RebateAmt", tire.rebateAmt, index));
    }
	tempDiv.appendChild(generateHiddenInput(iVal + "_prefWarehouseStock", tire.prefWarehouseStock, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_prefDueDate", tire.prefDueDate, index));
	tempDiv.appendChild(generateHiddenInput(iVal + "_altDate", tire.altDate, index));
	//PN0663 - New parameters for passing service description through to the cart.
	tempDiv.appendChild(generateHiddenInput(iVal + "_ServDesc", tire.serviceDesc));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LoadIndex", tire.loadIndex));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Lbs", tire.lbs));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kg", tire.kg));
	tempDiv.appendChild(generateHiddenInput(iVal + "_LoadIndex2", tire.loadIndex2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Lbs2", tire.lbs2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kg2", tire.kg2));
	tempDiv.appendChild(generateHiddenInput(iVal + "_ServSpeedRating", tire.servSpeedRating));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Mph", tire.mph));
	tempDiv.appendChild(generateHiddenInput(iVal + "_Kph", tire.kph));
	//End PN0663.
	if(tire.showMapPrice && tire.mapLayout == 3){
		tempDiv.appendChild(generateHiddenInput("mastMAP", "y"));
	}

	return tempDiv;
}

function generateHiddenInput(name, value, index){
	var formInput = input.cloneNode(false);
	formInput.type = "hidden";
	formInput.name = name;
	if(index != null) formInput.id = name + index;
	formInput.value = value;

	return formInput;
}

function isLTPerfCat(perfCat){
	if(perfCat == "SSTAS" || perfCat == "SST" || perfCat == "HR" || 
		 perfCat == "CSTAS" || perfCat == "HAS" || perfCat == "ORAT" ||
		 perfCat == "ORCT" || perfCat == "ORMT" || perfCat == "LTPW" ||
		 perfCat == "LTSIS" || perfCat == "LTSW"){
		return true;
	}

	return false;
}

function showAllTags() {
	tagOpen = 1;
	$('#selectedFilters').find('li.expand').hide();
	
	$('#selectedFilters').find('li').each(function(){
		if($(this).hasClass('hide')){
			$(this).removeClass('hide').addClass('showhide');
		}
	});
	$('#selectedFilters').append('<li style="cursor:pointer" class="viewBtn collapse" onclick="hideAllTags()">&lt;&lt;View Less</li>');
}
function hideAllTags(){
	$('#selectedFilters').find('li').each(function(){
		if($(this).hasClass('showhide')){
			$(this).removeClass('showhide').addClass('hide');
		}
		$('#selectedFilters').find('li.expand').show();
		$('#selectedFilters').find('li.collapse').remove();
		
	});
}
function resetTagFilter(j) {
	if (j == 'price') {
		$("#priceSelected").html('400');
		$("#price_slider").slider('value', 400);
		priceFilter = 400;
		filterTires();
		$('.pricetag').remove();

	} else {
		var thisForm = document.getElementById("filterOptions");
		var allInputs = thisForm.getElementsByTagName("input");
		for( var i = 0; i < allInputs.length; i++) {
			if (j == i) {
                $(allInputs[i]).trigger('click');
			}
		}
	}
}

function trackFilterClick(filterType, filterValue, check){
	if($(check).prop('checked') || filterType == "price"){
		filterType = filterType || '';
		filterValue = filterValue || '';
		linkTracking({
			linkName: s.pageName + ': filter by',
			prop8: filterType + ': ' + filterValue
		});
	}
}

function createNewTireReviews(tire, url) {
	var starCSS = parseInt(tire.starRating*2);
	var tireAvgRatingTotal = (isNaN(tire.avgRatingTotal)?'0':tire.avgRatingTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	var ratingsTotal = (isNaN(tire.reviewersTotal)?'0':tire.reviewersTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	var commentsTotal = (isNaN(tire.commentsTotal)?'0':tire.commentsTotal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	$avgRating = $('<span></span>',{"class":"avgRating"});
	$aRating = $('<span></span>').css('display','inline-block');
	if(ratingsTotal != '0'){
		var starRatingDivContent = '<span'+(ratingsTotal=='0'?'':' class="blue"')+'>('+ratingsTotal+')</span><div class="starRating-small"><span class="star_' + (isNaN(starCSS)?'0':starCSS) + '"></span></div>'; 
		$aRating.append('<div>'+starRatingDivContent+'</div>');
	} else {
		$aRating.append('Not Yet Rated');
	}
	var naAverage = tire.reviewerAvgRating=="N/A";
	var naStar = tire.starRating=="N/A";
	if(ratingsTotal!='0'){
		$aRating.append($('<div></div>',{"class":"categoryCaret"}));
		$divBreakdown = $('<div></div>',{"class":"breakdown category"});
		$barTotalStars = $('<div></div>',{"class":"barTotalStars category"});
		var catRatings = tire.catRatings.split(":");
		$barTotalStars.append('<div><div class="breakdownCategory">Wet: </div><div title="Wet Drive Rating" alt="Wet Drive Rating" class="barsOff"'+(catRatings[0]=='N'?' style="display:none"':'')+'><div style="width:'+(catRatings[0]=='N'?0:catRatings[0]*10)+'%" title="Wet Drive Rating" alt="Wet Drive Rating" class="bars'+(catRatings[0]=='N'?'Off':'On')+'"></div></div>&nbsp;'+(catRatings[0]=='N'?'<div class="notApplicableCategory">Not Applicable</div>':'<span>'+(Math.round(catRatings[0]*5)/10).toFixed(1)+'</span>')+'</div>');
		$barTotalStars.append('<div><div class="breakdownCategory">Dry: </div><div title="Dry Rating" alt="Dry Rating" class="barsOff"'+(catRatings[1]=='N'?' style="display:none"':'')+'><div style="width:'+(catRatings[1]=='N'?0:catRatings[1]*10)+'%" title="Dry Rating" alt="Dry Rating" class="bars'+(catRatings[1]=='N'?'Off':'On')+'"></div></div>&nbsp;'+(catRatings[1]=='N'?'<div class="notApplicableCategory">Not Applicable</div>':'<span>'+(Math.round(catRatings[1]*5)/10).toFixed(1)+'</span>')+'</div>');
		$barTotalStars.append('<div><div class="breakdownCategory">Winter/Snow: </div><div title="Winter Snow Rating" alt="Winter Snow Rating" class="barsOff"'+(catRatings[2]=='N'?' style="display:none"':'')+'><div style="width:'+(catRatings[2]=='N'?0:catRatings[2]*10)+'%" title="Winter Snow Rating" alt="Winter Snow Rating" class="bars'+(catRatings[2]=='N'?'Off':'On')+'"></div></div>&nbsp;'+(catRatings[2]=='N'?'<div class="notApplicableCategory">Not Applicable</div>':'<span>'+(Math.round(catRatings[2]*5)/10).toFixed(1)+'</span>')+'</div>');
		$barTotalStars.append('<div><div class="breakdownCategory">Comfort: </div><div title="Comfort Rating" alt="Comfort Rating" class="barsOff"'+(catRatings[3]=='N'?' style="display:none"':'')+'><div style="width:'+(catRatings[3]=='N'?0:catRatings[3]*10)+'%" title="Comfort Rating" alt="Comfort Rating" class="bars'+(catRatings[3]=='N'?'Off':'On')+'"></div></div>&nbsp;'+(catRatings[3]=='N'?'<div class="notApplicableCategory">Not Applicable</div>':'<span>'+(Math.round(catRatings[3]*5)/10).toFixed(1)+'</span>')+'</div>');
		$divBreakdown.append($barTotalStars);

		$numAvgs = $('<div></div>',{'class':'numAvgs category'});
		$numAvgs.append('<span class="applicable">'+(tire.reviewerAvgRating=='N/A'?'N/A':'<span>'+(Math.round(tire.reviewerAvgRating*5)/10)+'</span> / 5')+'</span>');
		$numAvgs.append('<span class="averageRating">Average Rating</span>');
		$ratingLink = $('<a></a>',{'href':url+'#RatingsReviews'}).html('Ratings &amp; Reviews');
		$ratingLink.append('<span class="redText"> &gt;</span>');
		$numAvgs.append($ratingLink);
		$divBreakdown.append($numAvgs);

		$aRating.append($divBreakdown);
	}
	$avgRating.append($aRating);
	$avgRating.append($('<span>',{'class':'reviewDiv'}).text(' | '));
	if(ratingsTotal=='0'){
		if(commentsTotal!='0') $avgRating.append($('<a>',{'class':'reviewCt','href':url+'#RatingsReviews'}).text('Reviews ('+commentsTotal+')'));
		else $avgRating.append($('<span>',{'class':'reviewCt'}).text('Reviews ('+commentsTotal+')'));
	} else {
		if(commentsTotal!='0') $avgRating.append($('<span>',{'class':'reviewCt blue'}).text('Reviews ('+commentsTotal+')'));
		else $avgRating.append($('<span>',{'class':'reviewCt'}).text('Reviews ('+commentsTotal+')'));
	}
	$avgRating.append($('<div>',{'class':'clear'}));
	return $avgRating;
}

function getBGText(rating) {
	try{
		rating = parseFloat(rating);
	}catch(err){rating = 0;}
	if(rating>8.55) return 'Excellent';
	if(rating>6.55) return 'Good';
        if(rating>4.55) return 'Fair';
	if(rating>2.55) return 'Poor';
	return 'Unacceptable';	
}

function getBGClass(rating) {
	try{
		rating = parseFloat(rating);
	}catch(err){rating = 0;}
	if(rating>8.55) return 'bg-excellent';
	if(rating>6.55) return 'bg-good';
        if(rating>4.55) return 'bg-fair';
	if(rating>2.55) return 'bg-poor';
	return 'bg-unacceptable';	
}

function availabilityTracking(tire) {
    var hasPair = (tire.hasTirePair && tire.tirePairIndex > -1);
    var hasRear = (tire.hasRearTire && tire.rearTireIndex > -1);

    var availabilityTracking = availabilityPrefOrStock(tire)
    if(hasPair) {
        availabilityTracking = ";"+availabilityPrefOrStock(tirePairs[tire.tirePairIndex]);
    }
    if(hasRear) {
        var rearTire = rearTires[tire.rearTireIndex];
        if(rearTire.hasTirePair) {
            availabilityTracking += ";"+availabilityPrefOrStock(rearTire);
            var rearTirePair = tirePairs[rearTire.tirePairIndex];
            availabilityTracking += ";"+availabilityPrefOrStock(rearTirePair);
        } else {
            availabilityTracking += ";"+availabilityPrefOrStock(rearTire);
        }
    }
    return availabilityTracking
}

function availabilityPrefOrStock(tire) {
        if((!tire.crossShip || (tire.isLargeTire && !tire.isGreenInAllWH)) && tire.prefWarehouseStock!="green") {
            return findFewerThan(tire.prefDueDate);
        }
        return findFewerThan(tire.stockMessage);
}

function findFewerThan(availabilityString) {
    var availability = "";
    if(availabilityString.toUpperCase().indexOf("FEWER THAN")>-1) {
        var tmp = "";
        if(availabilityString.indexOf(",")>-1) {
            tmp = availabilityString.substring(0, availabilityString.indexOf(","));
        } else {
            tmp = availabilityString;
        }
        availability = tmp.replace(/[^0-9]/gi, "");
    } else {
        availability = availabilityString;
    }
    return availability;
}

function affirmRefresh(){
	affirm.ui.ready(function(){
		affirm.ui.refresh();
	});
}
function getPromosToDisplay(tire){ 
	promos = new Array();

	if(!tire.showMailInRebate) return promos; 
	if(tire.promoCode != null && tire.promoCode != ''){
		var promo = {promoCode:tire.promoCode, longText:tire.promoLongText, daysLeft:tire.daysLeft1, hideEndSoon: tire.promo1HideEndSoon, promoEndDate: tire.promoEndDate, addtlType: tire.promo1AddtlType, addtlValue: tire.promo1AddtlValue, doubleDip: 'N'};
		promos.push(promo);
	}
	if(tire.promoCode2 != null && tire.promoCode2 != ''){
		var promo = {promoCode:tire.promoCode2, longText:tire.promoLongText2, daysLeft:tire.daysLeft2, hideEndSoon: tire.promo2HideEndSoon, promoEndDate: tire.promoEndDate2, addtlType: tire.promo2AddtlType, addtlValue: tire.promo2AddtlValue, doubleDip: tire.doubleDip1};
		promos.push(promo);
	}
	if(tire.promoCode3 != null && tire.promoCode3 != ''){
		var promo = {promoCode:tire.promoCode3, longText:tire.promoLongText3, daysLeft:tire.daysLeft3, hideEndSoon: tire.promo3HideEndSoon, promoEndDate: tire.promoEndDate3, addtlType: tire.promo3AddtlType, addtlValue: tire.promo3AddtlValue, doubleDip: tire.doubleDip2};
		promos.push(promo);
	}
	return promos;
}

function getRebateContent(type){
		rebateContent = new Array();
		if(type == GY_CC_PROMO_TYPE) rebateContent.push(GY_rebate);
		if(type == BS_CC_PROMO_TYPE) rebateContent.push(BS_rebate);
		if(type == CO_CC_PROMO_TYPE) rebateContent.push(CO_rebate);
		if(type == GE_CC_PROMO_TYPE) rebateContent.push(GE_rebate);
		return (rebateContent);
}
function getAddtlPromoContent(type){
		if(type == GY_CC_PROMO_TYPE) return GY_content;
		if(type == BS_CC_PROMO_TYPE) return BS_content;
		if(type == CO_CC_PROMO_TYPE) return CO_content;
		if(type == GE_CC_PROMO_TYPE) return GE_content;
}
function getAddtlPromoType(tire){
		if(tire.hasGYCCPromo == 'true') return(GY_CC_PROMO_TYPE);
		if(tire.hasBSCCPromo == 'true') return(BS_CC_PROMO_TYPE);
		if(tire.hasCOCCPromo == 'true') return(CO_CC_PROMO_TYPE);
		if(tire.hasGECCPromo == 'true') return(GE_CC_PROMO_TYPE);
}
function getCCOnlyPromoCard(tire){
		if(tire.hasGYCCOnlyPromo == 'true') return("with the " +GY_CC);
		if(tire.hasBSCCOnlyPromo == 'true') return("with the " +BS_CC);
		if(tire.hasCOCCOnlyPromo == 'true') return("with the " +CO_CC);
		if(tire.hasGECCOnlyPromo == 'true') return("with the " +GE_CC);
		return(" ");
}

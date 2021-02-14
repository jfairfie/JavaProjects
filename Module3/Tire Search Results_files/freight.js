var runCheckForCartErrors = false;
var showFreeShipping = false;
var showFreeShippingCPU = false;
var cpuDiscount = 0;
var dateInSevenDays = getDateInSevenDays();
var defaultCheckout = false;
var schedulerShown = "";

function lookupFreightWithLoad(){
    if($('.loadingLayer').hasClass('hide')) $('.loadingLayer').removeClass('hide');
	lookupFreight(false);
}

function lookupFreight(checkForCartErrors){
    var zip = document.freightCheck.zip.value;
	var shipChoice = document.getElementById("shipChoice").value;
    var installerChoice = document.getElementById("installerChoice").value;
	runCheckForCartErrors = checkForCartErrors;

	//Get the current entered zip.
	var prevZip = document.getElementById("newzip").firstChild.data;

	//set new zip and processing display while we're looking up freight
	document.getElementById("newzip").firstChild.data=zip;
	if($('#shipTo_enterZipCode').length) document.getElementById("shipTo_enterZipCode").value = zip;

	if($('#enteredzip').length) $('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + zip);
	if($('#enteredzipPending').length) $('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + zip);
	document.getElementById("processing").style.display = "inline";
	$('.cartPriceSec').find('.selectShipping').hide();
	document.getElementById("freeFreight").style.display = "none";
	document.getElementById("freight").style.display = "none";
    //PN7767
    $('.shipCostLi').addClass('hide');

	//Set the value of the zip code for checkout.
	document.checkoutForm.zipCode.value = zip;

	var orderTotal = document.freightCheck.orderTotal.value;
	var tireWheelOrderTotal = document.freightCheck.tireWheelOrderTotal.value;
	var giftCertificateOrderTotal = document.freightCheck.giftCertificateOrderTotal.value;
	
	var promoTotal = document.freightCheck.promoTotal.value;
	var promoAddtlTotal = document.freightCheck.promoAddtlTotal.value;
	var promoCode = document.freightCheck.promoCode.value;
	var rebateSize = document.freightCheck.rebateSize.value;
	var discountTotal = document.freightCheck.discountTotal.value;
	var brandedCardName = document.freightCheck.brandedCardName.value;
	var brandedCardLandingPage = document.freightCheck.brandedCardLandingPage.value;
	var promoCCOnly = document.freightCheck.promoCCOnly.value;

	checkForZipCodeChange(zip);

	var url = "/cart/FreightCheckServlet?prevZip=" + prevZip + "&zip=" + zip + "&orderTotal=" + orderTotal + "&tireWheelOrderTotal=" + tireWheelOrderTotal + "&giftCertificateOrderTotal=" + giftCertificateOrderTotal + "&promoTotal=" + promoTotal + "&promoAddtlTotal=" + promoAddtlTotal + "&promoCode=" + promoCode + "&rebateSize=" + rebateSize + "&discountTotal=" + discountTotal + "&shipChoice=" + shipChoice + "&installerChoice=" + installerChoice + "&brandedCardName=" + brandedCardName + "&brandedCardLandingPage=" + brandedCardLandingPage + "&promoCCOnly=" + promoCCOnly;
	$.ajax({
		url: url,
		method: 'GET',
		cache: false
	}).success(function(responseXML){
		updateFreightDisplay(responseXML);
	}).error(function(){
        calculateTileHeight();
	});
}

function updateFreightDisplay(responseXML){
	if(responseXML){
		var noFreight = responseXML.getElementsByTagName("noFreight");
		var invalidZip = responseXML.getElementsByTagName("invalidZip");
		var noUpdate = responseXML.getElementsByTagName("noUpdate");
		var qualifyFreeShip = responseXML.getElementsByTagName("qualifyFreeShip");
		var lower48 = responseXML.getElementsByTagName("lower48");
		var hasFreePreferred = responseXML.getElementsByTagName("hasFreePreferred");
        var hasDefaultCheckout = responseXML.getElementsByTagName("defaultCheckout");
		var havePromo = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo");
		var havePromoAddtl = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl");
		var noDeliveryDate = responseXML.getElementsByTagName("noDeliveryDate");
		var orderHasPostalGC = responseXML.getElementsByTagName("orderHasPostalGC");
		var affirmAvailability = responseXML.getElementsByTagName("affirmAvailability");

		var deliveryDateArray = getDeliveryDateElementsById("deliveryDate");
		var deliveryDateTextArray = getDeliveryDateElementsById("deliveryDateText");
		var howSoonIdArray = getDeliveryDateElementsById("howSoonId");

		var changeZipCode = responseXML.getElementsByTagName("changeZipCode");

		var hasPostalGC = false;
		if(orderHasPostalGC.length > 0 && orderHasPostalGC[0].firstChild.data == "true") hasPostalGC = true;

		var cpuAmount = responseXML.getElementsByTagName("cpuAmount");

        var altInstaller = responseXML.getElementsByTagName("altInstaller");

        var orderTotal = 0;
        if(document.freightCheck.orderTotal && document.freightCheck.orderTotal.value != ""){
            orderTotal = document.freightCheck.orderTotal.value;
        }
        var giftCertificateOrderTotal = 0;
        if(document.freightCheck.giftCertificateOrderTotal && document.freightCheck.giftCertificateOrderTotal.value != ""){
            giftCertificateOrderTotal = document.freightCheck.giftCertificateOrderTotal.value;
        }
        var orderHasOnlyFreeShipItems = false;
        if(document.freightCheck.orderHasOnlyFreeShipItems && document.freightCheck.orderHasOnlyFreeShipItems.value == "true"){
            orderHasOnlyFreeShipItems = true;
        }

        var hasPreferredInstaller = false;
        var isRecentInstaller = false;
        var isSavedInstaller = false;
        var isMobileInstaller = false;
        var isMobileInstallerASAP = false;
        var isCovidCompliant = false;
        var covidLevel = "";

        var hasAlternateInstaller = false;
        var alternateIsRecent = false;
        var alternateIsSaved = false;
        var alternateIsMobile = false;
        var alternateIsCovidCompliant = false;
        var altInstallerIsASAP = false;
        var altIsCovidCompliant = false;
        var altCovidLevel = "";

		$('.actualCostTxt').show();

		if(affirmAvailability.length > 0 && affirmAvailability[0].firstChild.data == 'false'){
			$('.affirmCart').hide();
		}

		//Hide the free shipping text if we are not in the lower48.
		if((orderHasOnlyFreeShipItems || orderTotal - giftCertificateOrderTotal >= 50) && lower48.length > 0 && lower48[0].firstChild.data == "true"){
			$('.freeShipText').show();
            showFreeShipping = true;
			if(cpuAmount.length > 0 && cpuAmount[0].firstChild != null && cpuAmount[0].firstChild.data != "" && cpuAmount[0].firstChild.data != "$0.00"){
				$('.freeShipTextCPU').show();
				$('.nonFreeShipTextCPU').hide();

                showFreeShippingCPU = true;

				var noDollarSign = cpuAmount[0].firstChild.data.toString().replace("$", "");
				cpuDiscount = parseInt(noDollarSign.toString().replace(".", ""), 10);
			}
		}else{
			$('.freeShipText').hide();
			if(cpuAmount.length > 0 && cpuAmount[0].firstChild != null && cpuAmount[0].firstChild.data != "" && cpuAmount[0].firstChild.data != "$0.00"){
				$('.freeShipTextCPU').hide();
				$('.nonFreeShipTextCPU').show();
			}
		}

        if(hasDefaultCheckout.length > 0 && hasDefaultCheckout[0].firstChild != null && hasDefaultCheckout[0].firstChild.data == "true"){
            defaultCheckout = true;
            $('#deliveryAndPricing').find('.ChooseDelivery').html('DELIVERY &amp; INSTALLATION');
            $('#deliveryOptionsLinks').find('.otherDeliveryOptionsButton').show();
            $('#installationOptions').hide();
            
            $('#mboxPN179575').empty();
        }

		/* Adding with PN7216. Show/Hide RHP cost section. */
		var rhpZip = responseXML.getElementsByTagName("rhpZip");
		var rhpIndex = responseXML.getElementsByTagName("rhpIndex");
		var rhpCost = responseXML.getElementsByTagName("rhpCost");
		if(rhpIndex.length > 0){
			for(var i = 0; i < rhpIndex.length; i++){
				var currRHPIndex = rhpIndex[i].firstChild.data;

				if(rhpZip.length > 0 && rhpZip[0].firstChild.data == "Y"){
                    var currRHPCost = rhpCost[i].firstChild.data;

					if(!$('#rhpContainer' + currRHPIndex).find('.rhp').length){
						$('#rhpContainer' + currRHPIndex).append('<div class="rhpCoverage row plan rhp"><a id="rhpCostLink"' + currRHPIndex + '" href="/modalPopups/rhp.jsp?ppn=checkout:shopping%20cart&amt=' + currRHPCost + '" onclick="openInfoBox(this.href, \'\', 570, \'default\'); return false;" title="Road Hazard Protection">Includes Free Road Hazard Protection </a><span>(<sbold id="rhpCost"' + currRHPIndex + '">' + currRHPCost + '</sbold> value. Two-year coverage.)</span></div>');
					}
				}else{
					$('#rhpContainer' + currRHPIndex).find('.rhp').remove();
				}
			}
		}

		if(noFreight.length > 0 || (noUpdate.length > 0 && $('#savedFreightBean').find('input[name="noFreight"]').val() == "true")){
			//No freight returned. 

			document.getElementById("processing").style.display = "none";

			if(!orderHasOnlyGiftCertificates){
				$('.cartPriceSec').find('.selectShipping').show();
				document.getElementById("taxesFeesIncluded").style.display = "none";
				document.getElementById("beforeTaxShipping").style.display = "block";
			}else{
				$('.cartPriceSec').removeClass('shippingCartInput');
				$('#freight').html('FREE');
				$('#freight').show();

                //PN7767
                $('.shipCostLi').find('.shipCost').text('FREE');
                $('.shipCostLi').removeClass('hide');

				$('#beforeTaxShipping').show();
			}

			if(!orderHasOnlyGiftCertificates){
				if($('#shipTo').val() == 'address'){
					$('#address').addClass('shipAddressContainerActive');
					$('#shipTo').val('address');

                    //PN7767.
                    setShippingChoice('address', false, '');
				}else{
					$('#installer').addClass('shipInstallContainerActive');
					$('#shipTo').val('installer');

                    //PN7767.
                    setShippingChoice('installer', false, '');
				}
			}else{
				$('#address').addClass('shipAddressContainerActive');
				$('#shipTo').val('address');

                //PN7767.
                setShippingChoice('address', false, '');
			}
            //Remove non-generic installer options.
            $('#recomMobileInstallerOption').remove();
            $('#prefInstallerOption').remove();
            $('#previousInstallerOption').remove();

			$('#pickup').removeClass('shipPickupContainerActive');
			$('#pickup').unbind('click touchstart', addClickEventToPickup);

            //Disable new CPU option. PN7767.
            $('#cpuOption').addClass('shipPickupContainerNotAvail');
            $('#cpuOption').find('.shipOptionText').text('ORDER PICK-UP NOT AVAILABLE');
            $('#CPU').css('pointer-events', 'none');

			document.getElementById("noZipEntered").disabled = true;
			document.getElementById("warehouseNotFound").style.display = "inline";

			$('#pickup').removeClass('shipPickupContainer');
			$('#pickup').addClass('shipPickupContainerNotAvail');
			$('#shipTo_enterZipCode').removeClass('success');
			$('#shipTo_enterZipCode').val('');
			$('#shipTo_enterZipCode').attr('disabled', 'true');
			$('#shipTo_enterZipCodeDiv').hide();

			document.getElementById("warehouseFound").style.display = "none";
			document.getElementById("cpuDiscount").style.display = "none";
            $('.cpuDiscountLi').addClass('hide');

			$('#shipTo_enterZipCode').hide();
			$('#shipTo_enterZipBtn').hide();

			document.getElementById("warehouseNotFound_zip").firstChild.data = $('#newzip').html();
			document.getElementById("warehouseNotFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + $('#newzip').val();

			if(!$('#distrText').hasClass('disabledTxt')){
				$('#distrText').hide();
			}

			//$('#showOpenParen').show();
			//$('#enteredzip').show();
			//$('#showCloseParen').show();

			showHideHowSoonIds(howSoonIdArray, false);
			showHideDeliveryDates(deliveryDateArray, false);
			showHideDeliveryDateText(deliveryDateTextArray, false);

            //Ensure savedFreightBean variables are updated.
            if(document.freightCheck.zip.value != ""){
                $('#savedFreightBean').find('input[name="zip"]').val(document.freightCheck.zip.value);
                $('#shipTo_enterZipCodeCart').val(document.freightCheck.zip.value);
                $('#shipTo_enterZipCodeCart').keyup();
            }
            if(parseFloat(document.freightCheck.orderTotal.value) > 0){
                $('#savedFreightBean').find('input[name="shipOrderTotal"]').val(document.freightCheck.orderTotal.value);
            }
            if(parseFloat(document.freightCheck.promoTotal.value) > 0){
                $('#savedFreightBean').find('input[name="shipOrderTotalMinusPromo"]').val(document.freightCheck.promoTotal.value);
            }
            if(parseFloat(document.freightCheck.promoAddtlTotal.value) > 0){
                $('#savedFreightBean').find('input[name="shipOrderTotalMinusPromoMinusAddtl"]').val(document.freightCheck.promoAddtlTotal.value);
            }
            $('#savedFreightBean').find('input[name="noFreight"]').val('true');

            calculateTileHeight();
			return;

		}else if(invalidZip.length > 0){
			//Invalid Zip. Display error. 
			document.getElementById("processing").style.display = "none";
			$('.cartPriceSec').find('.selectShipping').show();
			document.getElementById("taxesFeesIncluded").style.display = "none";
			document.getElementById("beforeTaxShipping").style.display = "block";
			
			//PN1907: Updated with PN3129.
			showHideDeliveryDates(deliveryDateArray, false);
			showHideDeliveryDateText(deliveryDateTextArray, false);
			document.getElementById("showOpenParen").style.display = "inline";
			document.getElementById("showCloseParen").style.display = "inline";

            calculateTileHeight();
			return;

		}else if(noUpdate.length > 0){
			//No need to update. Zip code and items did not change.
			document.getElementById("processing").style.display = "none";

			var isLower48N = document.savedFreightBean.lower48.value;
			var cpuAmountN = document.savedFreightBean.cpuAmount.value;
            var isCanadianShip = (document.savedFreightBean.isCanadianShip.value == "true");
			if((orderHasOnlyFreeShipItems || orderTotal - giftCertificateOrderTotal >= 50) && isLower48N != null && isLower48N == "true"){
				$('.freeShipText').show();
                showFreeShipping = true;
				if(cpuAmountN != null && cpuAmountN != "" && cpuAmountN != "$0.00"){
					$('.freeShipTextCPU').show();
					$('.nonFreeShipTextCPU').hide();
                    showFreeShippingCPU = true;
				}
			}else{
				$('.freeShipText').hide();
                showFreeShipping = false;
				if(cpuAmountN != null && cpuAmountN != "" && cpuAmountN != "$0.00"){
					$('.freeShipTextCPU').hide();
					$('.nonFreeShipTextCPU').show();
                    showFreeShippingCPU = false;
				}
			}

            if(document.savedFreightBean.defaultCheckout != null && document.savedFreightBean.defaultCheckout.value == "true"){
                defaultCheckout = true;
            }else{
                defaultCheckout = false;
            }

			var rhpZipN = document.savedFreightBean.rhpZip.value;
			var rhpIndexN = document.savedFreightBean.getElementsByTagName("rhpIndex");
			var rhpCostN = document.savedFreightBean.getElementsByTagName("rhpCost");
			if(rhpIndexN.length > 0){
				for(var i = 0; i < rhpIndexN.length; i++){
					var currRHPIndex = rhpIndex[i].firstChild.data;

					if(rhpZipN != null && rhpZipN == "Y"){
                        var currRHPCost = rhpCost[i].firstChild.data;

						if(!$('#rhpContainer' + currRHPIndex).find('.rhp').length){
							$('#rhpContainer' + currRHPIndex).append('<div class="rhpCoverage row plan rhp">Includes Free Road Hazard Protection <span>(<sbold id="rhpCost"' + currRHPIndex + '">' + currRHPCost + '</sbold> value. Two-year coverage.)</span></div>');
						}
					}else{
						$('#rhpContainer' + currRHPIndex).find('.rhp').remove();
					}
				}
			}

			var hasPostalGCN = false;
			if(document.savedFreightBean.orderHasPostalGC != null && document.savedFreightBean.orderHasPostalGC.value == "true"){
				hasPostalGCN = true;
			}
			if(!hasPostalGCN){
				document.getElementById("warehouseFound_zip").firstChild.data = document.savedFreightBean.zip.value;
				document.getElementById("cpu_warehouseFound_zip").firstChild.data = document.savedFreightBean.zip.value;
				document.getElementById("warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + document.savedFreightBean.zip.value;
				document.getElementById("cpu_warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + document.savedFreightBean.zip.value;
			}

			if(document.savedFreightBean.isRecentInstaller != null && document.savedFreightBean.isRecentInstaller.value != null && document.savedFreightBean.isRecentInstaller.value == "true"){
				isRecentInstaller = true;
			}

            if(document.savedFreightBean.isSavedInstaller != null && document.savedFreightBean.isSavedInstaller.value != null && document.savedFreightBean.isSavedInstaller.value == "true"){
                isSavedInstaller = true;
            }

			if(document.savedFreightBean.isMobileInstaller != null && document.savedFreightBean.isMobileInstaller.value != null && document.savedFreightBean.isMobileInstaller.value == "true"){
				isMobileInstaller = true;
			}

			if(document.savedFreightBean.covid19 != null && document.savedFreightBean.covid19.value != null && document.savedFreightBean.covid19.value != "" && document.savedFreightBean.covid19.value != "X"){
                if(document.savedFreightBean.covid19.value != "0"){
                    isCovidCompliant = true;
                }
                covidLevel = document.savedFreightBean.covid19.value;
            }

			var cpuAvail = true;
			var cpuAmt = "";
			var zip = "";
			var isUS = false;
			if(document.savedFreightBean.zip.value != null && document.savedFreightBean.zip.value != ""){
				zip = document.savedFreightBean.zip.value;
			}else{
				cpuAvail = false;
				zip = document.getElementById("shipTo_enterZipCode").value;
			}
			if(document.savedFreightBean.cpuAvailable.value == null || document.savedFreightBean.cpuAvailable.value != "true"){
				cpuAvail = false;
			}
			if(document.savedFreightBean.cpuAmount.value != null && document.savedFreightBean.cpuAmount.value != ""){
				cpuAmt = document.savedFreightBean.cpuAmount.value;
			}
			if(document.savedFreightBean.isExtendedUS.value != null && document.savedFreightBean.isExtendedUS.value == "true"){
				isUS = true;
			}

			//Hide the zip code box and button if we have a zip code entered.
			if(!hasPostalGCN && !$('#pickup').length){
				document.getElementById("shipTo_enterZipCodeDiv").style.display = "none";
			}

			//Hide truck icon if not lower48
			if(isLower48N == "false"){
				var freeShippingTrucks = document.getElementsByName("freeShippingTruck");
				for(var i = 0; i < freeShippingTrucks.length; i++){
					freeShippingTrucks[i].style.display = "none";
				}
			}

			if(document.savedFreightBean.installerNumFound.value == "true" && document.savedFreightBean.installerNum.value != null && document.savedFreightBean.installerNum.value.length > 0){
				//Show preferred installer option.
				$('#shipTo1-1').val(document.savedFreightBean.installerNum.value);
				$('#shipTo1-Name').val(document.savedFreightBean.installerName.value);
				$('#shipTo1-free').val(document.savedFreightBean.hasFreePreferred.value);
                $('#shipTo1-covidLevel').val(document.savedFreightBean.covid19.value);
				$('#installerName').text(document.savedFreightBean.installerName.value);
				if(document.savedFreightBean.installCost.value == "?" || document.savedFreightBean.installCost.value == "need vehicle"){
					$('#vehicleKnown').hide();
					$('#vehicleUnknown').show();
				}else if(document.savedFreightBean.installCost.value == "hide"){
					$('.preferredPriceContainer').hide();
				}else{
					$('#installCost').text(document.savedFreightBean.installCost.value);
				}
				if(isRecentInstaller){
					$('#hasselFree').css({'display':'none'});
					$('#installerLabel').text('Use Your Previous Installer');
					$('#installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + document.savedFreightBean.installerNum.value);
					$('.preferredSmall').text('');
				}else{
					$('#installerLabel').text('Ship to');
					$('#installerName').attr('href', '/installer/InstallerDetail.jsp?preferred=true&ID=' + document.savedFreightBean.installerNum.value);
					if(isMobileInstaller){
						$('#hasselFree').css({'display':''});
						$('.preferredSmall').text('Preferred Mobile Installer');
					}else{
						$('#hasselFree').css({'display':'none'});
						$('.preferredSmall').text('Preferred Installer');
					}
				}
				$('#freeShipping').addClass('hide');
				$('#freePreferredOther').addClass('hide');
				$('#hasselFree').removeClass('shipMobile');
				$('#preferredInstaller').removeClass('hide');
				if($('#column3Div').length) $('#column3Div').addClass('hide');

                //PN7767
                $('#recomMobileInstaller').find('.freeShippingLi').addClass('hide');
                $('#previousInstaller').find('.freeShippingLi').addClass('hide');
                $('#generalInstaller').find('.freeShippingLi').addClass('hide');

				if(document.savedFreightBean.hasFreePreferred.value == "true" && document.savedFreightBean.allGreenInPreferred.value == "true"){
					$('#freeShipping').removeClass('hide');
					$('#hasselFree').addClass('shipMobile');
					$('#circleOr').addClass('shipContent');
					$('#shipOr').addClass('shipOr');
					$('#freePreferredOther').removeClass('hide');
					if($('#column3Div').length){
						$('#column3Div').addClass('hide');
					}

                    //PN7767
                    $('#recomMobileInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#previousInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#generalInstaller').find('.freeShippingLi').removeClass('hide');
				}else if(document.savedFreightBean.hasFreePreferred.value == "true"){
					$('#preferredInstaller').addClass('hide');
					$('#shipTo1-1').val("");
					$('#shipTo1-Name').val("");
					$('#shipTo1-free').val("");
					$('#shipTo1-covidLevel').val("");
					$('#shipTo1-1').prop('checked', false);
					$('#shipTo1-2').prop('checked', false);
					if($('#column3Div').length){
						$('#column3Div').removeClass('hide');
					}
				}
                var schedulerInfo = document.savedFreightBean.schedulerInfo.value.split("|");
                if(schedulerInfo.length > 1) {
                    schedulerShown = schedulerInfo[0];
                    $('#prefInstaller .installerDisclaimer').addClass('hide');
                    $('#onlineSchedulingNotice').removeClass('hide').data('scheduler',schedulerInfo[0]).data('installerStore', schedulerInfo[1]).data('zipCode', schedulerInfo[2]).data('installerDealerNum', schedulerInfo[3]);
                    if(schedulerInfo[4]=="R") {
                        $('#onlineSchedulingNotice div.nextAppointment_subheadline').text('Your appointment is reserved for:');
                        $('#onlineSchedulingNotice a.redGreater').text('Change Your Reservation');
                    }
                    if(schedulerInfo[4]=="N" || schedulerInfo[4]=="R") $('#onlineSchedulingNotice div.nextAppointmentTime time').attr('datetime',schedulerInfo[5]).text(schedulerInfo[6]).closest('div.nextAppointment').css('display','');
                } else {
                    $('#prefInstaller .installerDisclaimer').removeClass('hide');
                    $('#onlineSchedulingNotice').addClass('hide');
                }
			}else{
				//Hide preferred installer option
				$('#preferredInstaller').addClass('hide');
				$('#shipTo1-1').val("");
				$('#shipTo1-Name').val("");
				$('#shipTo1-free').val("");
				$('#shipTo1-covidLevel').val("");
				$('#shipTo1-1').prop('checked', false);
				$('#shipTo1-2').prop('checked', false);
				if($('#column3Div').length){
					$('#column3Div').removeClass('hide');
				}
			}

            //PN7767.
            $('#prefInstaller').addClass('hide');
            $('#altInstaller').addClass('hide');
            $('#genericInstaller').addClass('hide');

            //PN7767 - Remove options if they are already on the page.
            $('#prefInstallerOption').remove();
            $('#altInstallerOption').remove();
            $('#genericInstallerOption').remove();
            $('#addressOption').remove();
            $('#cpuOption').remove();

            var shippingChoice = '';
            var canShowPreferred = false;
            if(document.savedFreightBean.showPreferredIcon != null && document.savedFreightBean.showPreferredIcon.value != null && document.savedFreightBean.showPreferredIcon.value == "true"){
                canShowPreferred = true;
            }
            if(document.savedFreightBean.installerNumFound.value == "true" && document.savedFreightBean.installerNum.value != null && document.savedFreightBean.installerNum.value.length > 0){
                hasPreferredInstaller = true;

                drawPrefInstallerOption(document.savedFreightBean.installerName.value, document.savedFreightBean.installerNum.value, isMobileInstaller, covidLevel);

                if(isMobileInstaller && document.savedFreightBean.installerName.value.indexOf("ASAP") > -1){
                    isMobileInstallerASAP = true;
                    $('#prefIsASAP').val('true');
                }

                //Set radio button values.
                $('#shipTo1-1').val(document.savedFreightBean.installerNum.value);
                $('#shipTo1-Name').val(document.savedFreightBean.installerName.value);
                $('#shipTo1-free').val(document.savedFreightBean.hasFreePreferred.value);
				$('#shipTo1-covidLevel').val(document.savedFreightBean.covid19.value);				

                $('#prefInstaller').find('.installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + document.savedFreightBean.installerNum.value + (canShowPreferred?'&preferred=true':''));
                $('#prefInstaller').find('.installerName').text(document.savedFreightBean.installerName.value);
                if(document.savedFreightBean.installerName.value.indexOf("ASAP") > -1){
                    $('#prefInstaller').find('.installerTestimonial').removeClass('hide');
                }else{
                    $('#prefInstaller').find('.installerTestimonial').addClass('hide');
                }
                if(document.savedFreightBean.installOverall != null){
                    $('#prefInstaller').find('.mobStars').remove();
                    $('#prefInstaller').find('.responses').remove();
                    var overall = "N/A";
                    if(document.savedFreightBean.installOverall.value != null && document.savedFreightBean.installOverall.value != "" && document.savedFreightBean.installOverall.value != "N/A"){
                        overall = Math.round(parseFloat(document.savedFreightBean.installOverall.value) * 2);
                    }
                    $('#prefInstaller').find('.starRating').removeClass('hide');
                    $('#prefInstaller').find('.starRating').append("<span class=\"mobStars star_" + overall + "\"></span>");
                    if(document.savedFreightBean.installResponses.value != null && document.savedFreightBean.installResponses.value != ""){
                        $('#prefInstaller').find('.starRatingContainer').append('<span class="responses">(' + document.savedFreightBean.installResponses.value + ')</span>');
                    }
                }

                //Previous Installer Icon
                $('#prefInstaller').find('.prevInst').remove();
                if(isRecentInstaller || (document.savedFreightBean.altInstallerNum != null && document.savedFreightBean.altInstallerNum.value.length > 0 && document.savedFreightBean.installerNum.value == document.savedFreightBean.altInstallerNum.value)){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon prevInst">Previous Installer</div>');
                }

                //Saved Installer Icon
                $('#prefInstaller').find('.savedInst').remove();
                if(isSavedInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon savedInst">Saved Installer</div>');
                }

                //Preferred and Mobile Installer Icon
                $('#prefInstaller').find('.prefInst').remove();
                $('#prefInstaller').find('.mobInst').remove();
                $('#prefInstaller').find('.mobPref').remove();
                if(isMobileInstaller && canShowPreferred){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon mobPref">Preferred Mobile Installer</div>');
                } else if(canShowPreferred){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon prefInst">Preferred Installer</div>');
                } else if(isMobileInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon mobInst">Mobile Installer</div>');
                }

                //Top Rated Icon
                $('#prefInstaller').find('.tR').remove();
                if(document.savedFreightBean.installTopRated != null && document.savedFreightBean.installTopRated.value != null && document.savedFreightBean.installTopRated.value == "true"){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon tR">Top Rated</div>');
                }

            if(isCovidCompliant) {
                if(isMobileInstaller){
                    if(covidLevel=='3') {
                        if(isMobileInstallerASAP){
                            $('#prefInstaller').find('.blurb').html('ASAP Tire will bring your Tire Rack order to you and install your tires while you wait inside.');
                            if($('#prefInstaller').find('.asapVideo').length == 0){
                                $('#prefInstaller').find('.blurb').after('<a href="/videos/video_modalbox.jsp?video=742" onclick="openInfoBox(this.href, \'Video Center\', \'781\', \'default\'); return false;" class="asapVideo"><img src="/images/css_elements/retail/videoIcon_red.png" width="18">Here\'s How It Works</a>');
                                $('.asapVideo').bind('click touchstart', function(){
                                    linkTracking({linkName: "tr: asap: Here's how it works"});
                                });
                            }
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="https://www.asaptire.com/faq/" class="redGreater">Read More</a></p></div>');
                        }else{
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                        }
                    } else { //mobile but not level 3
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr><p></sbold><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                } else { // not mobile
                    if(covidLevel=='2'){
                        $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }else{
                        $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr></sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                }
            } else if(covidLevel=='0') {
                $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/mobile/icon-warning.png" width="22px" height="22px"><div class="noContactPledge"><sbold>This installer has not agreed to follow Tire Rack\'s Protected Installation <br>guidelines to help prevent the spread of COVID-19.</sbold></div>');
            }else if(isRecentInstaller){
                $('#prefInstaller').find('.blurb').text('This installer, saved from your last visit, gets our stamp of approval for your installation needs.');
            }else{
                $('#prefInstaller').find('.blurb').text('This installer gets our stamp of approval for your installation needs.');
            }

                if(showFreeShipping){
                    $('#prefInstaller').find('.freeShippingLi').removeClass('hide');
                }else{
                    $('#prefInstaller').find('.freeShippingLi').addClass('hide');
                }

                if(covidLevel == "3" || isMobileInstallerASAP){
                    $('#prefInstallerOption').find('.shipOptionText').text("YOUR NO-CONTACT MOBILE INSTALLER");
                }else if(isMobileInstaller){
                    $('#prefInstallerOption').find('.shipOptionText').text("YOUR LOCAL MOBILE INSTALLER");
                }else{
                    $('#prefInstallerOption').find('.shipOptionText').text("USE THIS PREFERRED INSTALLER");
                }

                $('#prefInstaller').find('.installationCostLi').addClass('hide');
                if(document.savedFreightBean.installCost != null && document.savedFreightBean.installCost.value != null && (document.savedFreightBean.installCost.value == "?" || document.savedFreightBean.installCost.value == "need vehicle")){
                    $('#prefInstaller').find('.vehicleKnown').addClass('hide');
                    $('#prefInstaller').find('.vehicleUnknown').removeClass('hide');
                    $('#prefInstaller').find('.installationCostLi').removeClass('hide');
                }else if(document.savedFreightBean.installCost != null && document.savedFreightBean.installCost.value != null && document.savedFreightBean.installCost.value == "hide"){
                    setShippingChoice('installer', isMobileInstaller, covidLevel);
                }else{
                    $('#prefInstaller').find('.installationCostLi').removeClass('hide');
                    $('#prefInstaller').find('.installCost').text(document.savedFreightBean.installCost.value);
                    $('#prefInstaller').find('.vehicleKnown').removeClass('hide');
                    $('#prefInstaller').find('.vehicleUnknown').addClass('hide');
                }

                if(document.savedFreightBean.asapAppointmentDate != null && document.savedFreightBean.asapAppointmentDate.value != "" && document.savedFreightBean.daysUntilAppointment != null && document.savedFreightBean.daysUntilAppointment.value != "" && document.savedFreightBean.daysUntilAppointment.value < 7){
                    $('#prefInstaller').find('.installerDisclaimer').text('Appointments available as soon as ' + document.savedFreightBean.asapAppointmentDate.value + '.');
                    $('#prefInstaller').find('.installerDisclaimer').removeClass('hide');
                }else if(typeof dateInSevenDays !== 'undefined' && dateInSevenDays !== null && isMobileInstallerASAP){
                    $('#prefInstaller').find('.installerDisclaimer').text('Next appointment available after ' + dateInSevenDays + '.');
                    $('#prefInstaller').find('.installerDisclaimer').removeClass('hide');
                }

                var testimonialQuote = "";
                var testimonialCity = "";
                var testimonialState = "";
                if(document.savedFreightBean.testimonialQuote != null && document.savedFreightBean.testimonialQuote.value != ""){
                    testimonialQuote = document.savedFreightBean.testimonialQuote.value;
                }
                if(document.savedFreightBean.testimonialCity != null && document.savedFreightBean.testimonialCity.value != ""){
                    testimonialCity = document.savedFreightBean.testimonialCity.value;
                }
                if(document.savedFreightBean.testimonialState != null && document.savedFreightBean.testimonialState.value != ""){
                    testimonialState = document.savedFreightBean.testimonialState.value;
                }
                if(isMobileInstallerASAP){
                    if(testimonialQuote != ""){
                        $('#prefInstaller').find('.installerTestimonial').html('<p>"' + testimonialQuote + '"<br><br> - ASAP Tire Customer' + ((testimonialCity != "" && testimonialState != "")?", " + testimonialCity + ", " + testimonialState:"") + '</p><img alt="ASAP Tire Mobile Service Van" src="/images/installers/ASAP_installer_van.jpg" height="74" border="0">');
                    }
                }
            }
            if(document.savedFreightBean.altInstallerName != null && document.savedFreightBean.altInstallerName.value != null && document.savedFreightBean.altInstallerName.value != "" && document.savedFreightBean.altInstallerNum != null && document.savedFreightBean.altInstallerNum != null && document.savedFreightBean.installerNum.value != document.savedFreightBean.altInstallerNum.value){
                hasAlternateInstaller = true;
                var altInstallerName = document.savedFreightBean.altInstallerName.value;
                var altInstallerDiscountType = document.savedFreightBean.altInstallerDiscountType.value;
                var altInstallerDiscountPercent = document.savedFreightBean.altInstallerDiscountPercent.value;
                var altInstallerNum = document.savedFreightBean.altInstallerNum.value;
                var altIsMobile = document.savedFreightBean.altIsMobileInstaller.value;
                if(altIsMobile != null && altIsMobile == "true"){
                    alternateIsMobile = true;
                }
                var altIsCovidCompliant = document.savedFreightBean.altCovid19.value;
                if(altIsCovidCompliant != null && altIsCovidCompliant != ""){
                    if(altIsCovidCompliant != "0") {
                        alternateIsCovidCompliant = true;
                    }
                    altCovidLevel = altIsCovidCompliant;
                }
                var altIsRecent = document.savedFreightBean.altIsRecentInstaller.value;
                if(altIsRecent != null && altIsRecent == "true"){
                    alternateIsRecent = true;
                }
                var altIsSaved = document.savedFreightBean.altIsSavedInstaller.value;
                if(altIsSaved != null && altIsSaved == "true"){
                    alternateIsSaved = true;
                }
                var altASAPAppointmentDate = document.savedFreightBean.altASAPAppointmentDate.value;
                var altDaysUntilAppointment = document.savedFreightBean.altDaysUntilAppointment.value;
                var altIsTopRated = document.savedFreightBean.altIsTopRated.value;
                var altOverallRating = document.savedFreightBean.altOverallRating.value;
                var altInstallResponses = document.savedFreightBean.altInstallResponses.value;
                var altInstallCost = document.savedFreightBean.altInstallCost.value;
                var altHasFreePreferred = document.savedFreightBean.altHasFreePreferred.value;

                drawAltInstallerOption(alternateIsSaved, alternateIsMobile, altCovidLevel);

                var canShowRecentPreferred = false;
                if(altInstallerPreferred != null && altInstallerPreferred == "true"){
                    canShowRecentPreferred = true;
                }

                if(altInstallerName != null && altInstallerName.indexOf("ASAP") > -1){
                    altInstallerIsASAP = true;
                    $('#altIsASAP').val('true');
                }

                if(alternateIsRecent){
                    $('#altInstaller').find('.installerLabel').html('<strong>Your previous installer is shown below.</strong><span>You can always choose a different installer on the next page.</span>');
                }else if(alternateIsSaved){
                    $('#altInstaller').find('.installerLabel').html('<strong>Your saved installer is shown below.</strong><span>You can always choose a different installer on the next page.</span>');
                }

                //Set radio button values.
                $('#shipTo2-1').val(altInstallerNum);
                $('#shipTo2-Name').val(altInstallerName);
                $('#shipTo2-free').val(altHasFreePreferred);
				$('#shipTo2-covidLevel').val(altCovidLevel);

                $('#altInstaller').find('.installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + altInstallerNum + (canShowRecentPreferred?'&preferred=true':''));
                $('#altInstaller').find('.installerName').text(altInstallerName);

                if(altOverallRating != null){
                    $('#altInstaller').find('.recStars').remove();
                    $('#altInstaller').find('.responses').remove();
                    var overall = "N/A";
                    if(altOverallRating != "" && altOverallRating != "N/A"){
                        overall = Math.round(parseFloat(altOverallRating) * 2);
                    }
                    $('#altInstaller').find('.starRating').removeClass('hide');
                    $('#altInstaller').find('.starRating').append("<span class=\"recStars star_" + overall + "\"></span>");
                    if(altInstallResponses != null && altInstallResponses != ""){
                        $('#altInstaller').find('.starRatingContainer').append('<span class="responses">(' + altInstallResponses + ')</span>');
                    }
                }

                //Previous Installer Icon
                $('#altInstaller').find('.prevInst').remove();
                if(alternateIsRecent){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon prevInst">Top Rated</div>');
                }

                //Saved Installer Icon
                $('#altInstaller').find('.savedInst').remove();
                if(alternateIsSaved){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon savedInst">Saved Installer</div>');
                }

				//Preferred and Mobile Installer Icon
                $('#altInstaller').find('.prefInst').remove();
                $('#altInstaller').find('.mobInst').remove();
                $('#altInstaller').find('.mobPref').remove();
                if(canShowRecentPreferred && alternateIsMobile){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
					$('#altInstaller').find('.ratingIcons').appenc('<div class="installerIcon mobPref">Preferred Mobile Installer</div>');
                } else if(canShowRecentPreferred){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').appenc('<div class="installerIcon prefInst">Preferred Installer</div>');
                } else if(alternateIsMobile){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon mobInst">Mobile Installer</div>');
                }

                //Top Rated Icon
                $('#altInstaller').find('.tR').remove();
                if(altIsTopRated != null && altIsTopRated == "true"){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon tR">Top Rated</div>');
                }

            if(alternateIsCovidCompliant){ 
                if(alternateIsMobile){
                    if(altCovidLevel=='3'){
                        if(altInstallerIsASAP){
                            $('#altInstaller').find('.blurb').html('ASAP Tire will bring your Tire Rack order to you and install your tires while you wait inside.');
                            if($('#altInstaller').find('.asapVideo').length == 0){
                                $('#altInstaller').find('.blurb').after('<a href="/videos/video_modalbox.jsp?video=742" onclick="openInfoBox(this.href, \'Video Center\', \'781\', \'default\'); return false;" class="asapVideo"><img src="/images/css_elements/retail/videoIcon_red.png" width="18">Here\'s How It Works</a>');
                                $('.asapVideo').bind('click touchstart', function(){
                                    linkTracking({linkName: "tr: asap: Here's how it works"});
                                });
                            }
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="https://www.asaptire.com/faq/" class="redGreater">Read More</a></p></div>');
                        } else {
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                        }
                    } else { //mobile but not level 3
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr><p></sbold><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
				} else { // not mobile
                    if(altCovidLevel=='2'){
                        $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    } else {
                        $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr></sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
				}
            } else if(altCovidLevel=='0') {
                $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/mobile/icon-warning.png" width="22px" height="22px"><div class="noContactPledge"><sbold>This installer has not agreed to follow Tire Rack\'s Protected Installation <br>guidelines to help prevent the spread of COVID-19.</sbold></div>');
			}else if(alternateIsRecent){
				$('#altInstaller').find('.blurb').text('This installer, saved from your last visit, gets our stamp of approval for your installation needs.');
			}else if(alternateIsSaved){
				$('#altInstaller').find('.blurb').text('You previously saved this installer to your account. They\'ll be happy to handle your installation needs for this order.');
			}

                if(showFreeShipping){
                    $('#altInstaller').find('.freeShippingLi').removeClass('hide');
                }else{
                    $('#altInstaller').find('.freeShippingLi').addClass('hide');
                }

                $('#altInstallerOption').find('.shipOptionText').text("SHIP TO A RECOMMENDED INSTALLER");

                $('#altInstaller').find('.installationCostLi').addClass('hide');
                if(altInstallCost == "?" || altInstallCost == "need vehicle"){
                    $('#altInstaller').find('.vehicleKnown').addClass('hide');
                    $('#altInstaller').find('.vehicleUnknown').removeClass('hide');
                    $('#altInstaller').find('.installationCostLi').removeClass('hide');
                }else if(altInstallCost == "hide"){
                    setShippingChoice('installer', alternateIsMobile, altCovidLevel);
                }else{
                    $('#altInstaller').find('.installationCostLi').removeClass('hide');
                    $('#altInstaller').find('.installCost').text(altInstallCost);
                    $('#altInstaller').find('.vehicleKnown').removeClass('hide');
                    $('#altInstaller').find('.vehicleUnknown').addClass('hide');
                }
					
				if(altASAPAppointmentDate != null && altASAPAppointmentDate != "" && altDaysUntilAppointment != null && altDaysUntilAppointment != "" && altDaysUntilAppointment < 7){
                    $('#altInstaller').find('.installerDisclaimer').text('Appointments available as soon as ' + altASAPAppointmentDate + '.');
                    $('#altInstaller').find('.installerDisclaimer').removeClass('hide');
                }else if(typeof dateInSevenDays !== 'undefined' && dateInSevenDays !== null && altInstallerIsASAP){
                    $('#altInstaller').find('.installerDisclaimer').text('Next appointment available after ' + dateInSevenDays + '.');
                    $('#altInstaller').find('.installerDisclaimer').removeClass('hide');
                }

                var testimonialQuote = "";
                var testimonialCity = "";
                var testimonialState = "";
                if(document.savedFreightBean.altTestimonialQuote != null && document.savedFreightBean.altTestimonialQuote.value != ""){
                    testimonialQuote = document.savedFreightBean.altTestimonialQuote.value;
                }
                if(document.savedFreightBean.altTestimonialCity != null && document.savedFreightBean.altTestimonialCity.value != ""){
                    testimonialCity = document.savedFreightBean.altTestimonialCity.value;
                }
                if(document.savedFreightBean.altTestimonialState != null && document.savedFreightBean.altTestimonialState.value != ""){
                    testimonialState = document.savedFreightBean.altTestimonialState.value;
                }
                if(altInstallerIsASAP){
                    if(testimonialQuote != ""){
                        $('#altInstaller').find('.installerTestimonial').html('<p>"' + testimonialQuote + '"<br><br> - ASAP Tire Customer' + ((testimonialCity != "" && testimonialState != "")?", " + testimonialCity + ", " + testimonialState:"") + '</p><img alt="ASAP Tire Mobile Service Van" src="/images/installers/ASAP_installer_van.jpg" height="74" border="0">');
                    }
                }
            }else{
                drawInstallerOption();

                if(showFreeShipping){
                    $('#genericInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#genericInstallerOption').find('.shipOptionText').text('SHIP TO A RECOMMENDED INSTALLER');
                }else{
                    $('#genericInstaller').find('.freeShippingLi').addClass('hide');
                    $('#genericInstallerOption').find('.shipOptionText').text('SHIP TO A RECOMMENDED INSTALLER');
                }
            }

            //Decide if we need to set an installer as the chosen option.
            if($('#shipTo').val() == 'installer'){
                if(hasPreferredInstaller && hasAlternateInstaller){
                    if($('#installerChoice').val() == 'alternate'){
                        shippingChoice = 'altInstaller';
                    }else{
                        shippingChoice = 'prefInstaller';
                    }
                }else if(hasAlternateInstaller && $('#installerChoice').val() != 'generic'){
                    shippingChoice = 'altInstaller';
                }else if(hasPreferredInstaller && $('#installerChoice').val() != 'generic'){
                    shippingChoice = 'prefInstaller';
                }
            }

            drawAddressOption();
            if(showFreeShipping){
                $('#addressContainer').find('.shipCostLi').removeClass('hide');
                $('#addressContainer').find('.shipCost').text('FREE');
                $('#addressOption').find('.freeShipText').removeClass('hide');
            }else{
                $('#addressContainer').find('.shipCostLi').addClass('hide');
                $('#addressOption').find('.freeShipText').addClass('hide');
            }
            if($('#shipTo').val() == 'address'){
                shippingChoice = 'address';
            }
            drawCPUOption(showFreeShippingCPU);
            if($('#shipTo').val() == 'CPU'){
                shippingChoice = 'cpu';
            }

            //Set the shipping choice selected.
            if(shippingChoice == "prefInstaller"){
                setShippingChoice(shippingChoice, isMobileInstaller, covidLevel);
            }else if(shippingChoice == "altInstaller"){
                setShippingChoice(shippingChoice, alternateIsMobile, altCovidLevel);
            }else{
                setShippingChoice(shippingChoice, false, '');
            }
            //End PN7767.

			var mobileSelection = "";
			if(document.getElementById("shipTo").value == "installer"){
				var recMobile = document.getElementsByName("recommendedMobile");
				for(var i = 0; i < recMobile.length; i++){
					if(recMobile[i].checked == true){
						if(recMobile[i].value!="" && recMobile[i].value!="installer") mobileSelection = "Y";
					}
				}
			}

			//Enable the third option, if it has not already been enabled.
			if($('#pickup').length && !hasPostalGCN){
				$('#pickup').bind('click touchstart', addClickEventToPickup);
			}
			if(document.getElementById("noZipEntered") && document.getElementById("noZipEntered").disabled){
				document.getElementById("noZipEntered").removeAttribute("disabled");
			}
			if(document.savedFreightBean.hasFreePreferred.length == "true"){
				$('#freePreferredOther').removeClass('hide');
				document.getElementById("installerFreight").firstChild.data = document.savedFreightBean.shipFreightOnly.value;
			}

			if(document.savedFreightBean.warehouseNoCPU.value.length > 0 || document.savedFreightBean.cpuLookupError.value.length > 0 || !cpuAvail || isLower48N == "false"){
				cpuAvailabilityChecked = "no";

				//Disable option to select a warehouse.
				//If CPU is selected, reset to a different selection.
				if($('#pickup').hasClass('shipPickupContainerActive')){
					$('#pickup').removeClass('shipPickupContainerActive');
					$('#shipTo').val('installer');

					$('#installer').addClass('shipInstallContainerActive');
					$('#shipToRecomMobileInstaller').addClass('enabled');
					$('#shipToRecomMobileInstaller').find("input[type='radio']").prop('checked', true).addClass('selected');
					if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						$('#freePreferredOther').removeClass('hide');
						document.getElementById("installerFreight").firstChild.data = document.savedFreightBean.shipFreight.value;
						document.getElementById("freight").style.display = "none";
						document.getElementById("freeFreight").style.display = "inline";

                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
                        $('.shipCostLi').removeClass('hide');
					}
				}
				$('#pickup').unbind('click touchstart', addClickEventToPickup);

                //PN7767. If CPU is currently selected, change the selection to an installer.
                if($('#cpuOption').hasClass('Selected') && $('#CPU').hasClass('enabled')){
                    if(hasPreferredInstaller){
                        $('#shipTo').val('installer');

                        setShippingChoice('prefInstaller', isMobileInstaller, covidLevel);
                    }else if(hasAlternateInstaller){
                        $('#shipTo').val('installer');

                        setShippingChoice('altInstaller', alternateIsMobile, altCovidLevel);
                    }else{
                        $('#shipTo').val('installer');

                        setShippingChoice('installer', false, '');
                    }
                }

				if(!$('#distrText').hasClass('disabledTxt')){
					$('#distrText').hide();
				}

				document.getElementById("noZipEntered").disabled = true;
				document.getElementById("warehouseNotFound").style.display = "inline";
				if($('#pickup').length){
					$('#pickup').removeClass('shipPickupContainer');
					$('#pickup').addClass('shipPickupContainerNotAvail');
					$('#shipTo_enterZipCode').removeClass('success');
					$('#shipTo_enterZipCode').val('');
					$('#shipTo_enterZipCode').attr('disabled', 'true');
					$('#shipTo_enterZipCodeDiv').hide();
				}
				document.getElementById("warehouseFound").style.display = "none";
				document.getElementById("cpuDiscount").style.display = "none";
                $('.cpuDiscountLi').addClass('hide');

				document.getElementById("warehouseNotFound_zip").firstChild.data = zip;
				document.getElementById("warehouseNotFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + zip;

                //PN7767. Disable new CPU option.
                $('#cpuOption').addClass('shipPickupContainerNotAvail');
                $('#cpuOption').find('.shipOptionText').text('ORDER PICK-UP NOT AVAILABLE');
                $('#CPU').css('pointer-events', 'none');
			}else{
				if(!hasPostalGCN){
					//A warehouse was found.
					if($('#pickup').length){
						$('#pickup').bind('click touchstart', addClickEventToPickup);
						$('#pickup').addClass('shipPickupContainer');
						$('#pickup').removeClass('shipPickupContainerNotAvail');
					}

                    //PN7767. Enable CPU option.
                    $('#cpuOption').removeClass('shipPickupContainerNotAvail');
                    if(showFreeShippingCPU){
                        $('#cpuOption').find('.shipOptionText').text('');
                        $('#cpuOption').find('.shipOptionText').append('GET A<span class="cpuAmtNew"> </span>ORDER PICK-UP DISCOUNT');
                    }else{
                        $('#cpuOption').find('.shipOptionText').text('PICK UP MY ORDER');
                    }
                    $('#CPU').css('pointer-events', 'auto');

					document.freightCheck.warehouseZip.value = document.savedFreightBean.warehouseZip.value;
					document.freightCheck.warehouseID.value = document.savedFreightBean.warehouseID.value;

					if($('.pickUp').length){
						$('#distrText').show();
					}

					document.getElementById("warehouseFound_zip").firstChild.data = zip;
					document.getElementById("warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + zip;

					//Warehouse information link.
					var warehouseLink = document.getElementById("warehouseInfoLink");
					var warehouseLinkForCPU = document.getElementById("cpu_warehouseInfoLink");
					var warehouseAddtlInfo = document.savedFreightBean.warehouseAddtlInfo.value;
					var linkText = "";
					if(document.savedFreightBean.warehouseName.value != null){
						linkText += document.savedFreightBean.warehouseName.value;
					}
					if(document.savedFreightBean.warehouseAddtlInfo.value != null){
						document.getElementById("warehouseAddtlInfo").innerHTML = " " + document.savedFreightBean.warehouseAddtlInfo.value + ".";
					}else{
						document.getElementById("warehouseAddtlInfo").innerHTML = ".";
					}
					warehouseLink.innerHTML = linkText;
					warehouseLinkForCPU.innerHTML = linkText;
					$('#shipTo_enterZipCode').addClass('success');
				}
			}
			//End warehouse data retrieval for PN3129.

			if(document.savedFreightBean.noDeliveryDate.value == "true"){
				showHideHowSoonIds(howSoonIdArray, false);
				showHideDeliveryDates(deliveryDateArray, false);
				showHideDeliveryDateText(deliveryDateTextArray, false);
				document.getElementById("showOpenParen").style.display = "inline";
				document.getElementById("showCloseParen").style.display = "inline";
			}else{
				showHideHowSoonIds(howSoonIdArray, false);
				var delivery = document.savedFreightBean.delDate.value;
				for(var i=0; i<deliveryDateArray.length; i++){
					if(deliveryDateArray[i].firstChild != null){
						var deltxt = document.createTextNode("");
						var strong = document.createElement("SBOLD");
						deltxt.data = delivery;
						strong.appendChild(deltxt);
						deliveryDateArray[i].removeChild(deliveryDateArray[i].firstChild);
						deliveryDateArray[i].appendChild(strong);
					}
				}
				showHideDeliveryDates(deliveryDateArray, true);
				showHideDeliveryDateText(deliveryDateTextArray, true);
				document.getElementById("showOpenParen").style.display = "inline";
				document.getElementById("showCloseParen").style.display = "inline";
			}

			document.getElementById("newzip").firstChild.data = document.savedFreightBean.zip.value;
			if($("#shipTo_enterZipCode").length){
				document.getElementById("shipTo_enterZipCode").value = document.savedFreightBean.zip.value;
			}

			if($('#enteredzip').length){
				$('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + document.savedFreightBean.zip.value);
			}
			if($('#enteredzipPending').length){
				$('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + document.savedFreightBean.zip.value);
			}

			if(document.savedFreightBean.qualifyFreeShip != null && document.savedFreightBean.qualifyFreeShip.value == "true"){
				var freeShipSpans = document.getElementsByName('freeShip');
				for(var i = 0; i < freeShipSpans.length; i++){
					freeShipSpans[i].style.display = "block";
				}
			}else{
				var freeShipSpans = document.getElementsByName('freeShip');
				for(var i = 0; i < freeShipSpans.length; i++){
					freeShipSpans[i].style.display = "none";
				}
			}

			if(isLower48N == "true" && document.freightCheck.warehouseZip && document.freightCheck.warehouseZip.value != "" && document.freightCheck.warehouseID && document.freightCheck.warehouseID.value != ""){
				//Hide freight or "Pending", display processing.
				document.getElementById("freeFreight").style.display = "none";
				document.getElementById("freight").style.display = "none";

                //PN7767
                $('.shipCostLi').addClass('hide');

				$('.cartPriceSec').find('.selectShipping').hide();
				document.getElementById("processing").style.display = "none";

				//Hide taxes and fees. Updating with PN7767.
                $('#feeRow').css('display', 'none');
                $('#fees').css('display', 'none');
                $('#feeRowLi').addClass('hide');
                $('#feesLi').addClass('hide');

                $('#taxRow').css('display', 'none');
                $('#taxes').css('display', 'none');
                $('#taxRowLi').addClass('hide');
                $('#taxesLi').addClass('hide');

                $('#exciseRowLi').addClass('hide');
                $('#exciseLi').addClass('hide');
                $('#canHSTRowLi').addClass('hide');
                $('#canHSTLi').addClass('hide');
                $('#canGSTRowLi').addClass('hide');
                $('#canGSTLi').addClass('hide');
                $('#canPSTRowLi').addClass('hide');
                $('#canPSTLi').addClass('hide');
                $('#canDutyRowLi').addClass('hide');
                $('#canDutyLi').addClass('hide');
                $('#canLevyRowLi').addClass('hide');
                $('#canLevyLi').addClass('hide');
                $('#canBrokerRowLi').addClass('hide');
                $('#canBrokerLi').addClass('hide');

				//Hide CPU discount. Updating with PN7767.
                $('#cpuDiscountRow').css('display', 'none');
                $('#cpuDiscountAmt').css('display', 'none');
                $('#cpuDiscountRowLi').addClass('hide');
                $('#cpuDiscountAmtLi').addClass('hide');

				//Hide order total.
				document.getElementById("orderTotal").style.display = "none";
				document.getElementById("orderTotalNoFreight").style.display = "block";
				document.getElementById("orderTotalPlusFreight").style.display = "none";

				//Hide rebate, if there was one applied.
                $('#rebateText').css('display', 'none');
				var rebateText = document.getElementById("rebateTextJS");
				if(rebateText != null && rebateText.childNodes[0]){
					rebateText.removeChild(rebateText.childNodes[0]);
				}
                $('#rebateTextJS').css('display', 'none');
				document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
				document.getElementById("orderTotalMinusPromo").style.display = "none";
                $('#rebateAddtlText').css('display', 'none');
				var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
				if(rebateAddtlText != null && rebateAddtlText.childNodes[0]){
					rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
				}

				var mobileSelection = "";
				var recMobile = document.getElementsByName("recommendedMobile");
				for(var i = 0; i < recMobile.length; i++){
					if(recMobile[i].checked == true){
						if(recMobile[i].value != "" && recMobile[i].value != "installer") mobileSelection = "Y";
					}
				}

				if(document.savedFreightBean.cpuNotAvail != null && document.savedFreightBean.cpuNotAvail.value == "true"){
					//Disable option to select a warehouse
					//If CPU is selected, reset to a different selection.
					runCheckForCartErrors = false;
					if($('#pickup').hasClass('shipPickupContainerActive')){
						$('#pickup').removeClass('shipPickupContainerActive');
						$('#shipTo').val('installer');
						$('#installer').addClass('shipInstallContainerActive');
						$('#shipToRecomMobileInstaller').addClass('enabled');
						$('#shipToRecomMobileInstaller').find("input[type='radio']").prop('checked', true).addClass('selected');
						if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
							if($('#freePreferredOther').hasClass('hide')) $('#freePreferredOther').removeClass('hide');
							document.getElementById("installerFreight").firstChild.data = document.savedFreightBean.shipFreight.value;
							document.getElementById("freight").style.display = "none";
							document.getElementById("freeFreight").style.display = "inline";

                            //PN7767
                            $('.shipCostLi').find('.shipCost').text('FREE');
                            $('.shipCostLi').removeClass('hide');
						}
					}
					$('#pickup').unbind('click touchstart', addClickEventToPickup);

					if(!$('#distrText').hasClass('disabledTxt')){
						$('#distrText').hide();
					}

                    //PN7767. If CPU is selected, switch choice to an instller.
                    if($('#cpuOption').hasClass('Selected') && $('#CPU').hasClass('enabled')){
                        if(hasPreferredInstaller){
                            $('#shipTo').val('installer');

                            setShippingChoice('prefInstaller', isMobileInstaller, covidLevel);
                        }else if(hasAlternateInstaller){
                            $('#shipTo').val('installer');

                            setShippingChoice('altInstaller', alternateIsMobile, altCovidLevel);
                        }else{
                            $('#shipTo').val('installer');

                            setShippingChoice('installer', false, '');
                        }
                    }

					document.getElementById("noZipEntered").disabled = true;
					document.getElementById("warehouseNotFound").style.display = "inline";
					if($('#pickup').length){
						$('#pickup').removeClass('shipPickupContainer');
						$('#pickup').addClass('shipPickupContainerNotAvail');
						$('#shipTo_enterZipCode').removeClass('success');
						$('#shipTo_enterZipCode').val('');
						$('#shipTo_enterZipCode').attr('disabled', 'true');
						$('#shipTo_enterZipCodeDiv').hide();
					}
					document.getElementById("warehouseFound").style.display = "none";
					document.getElementById("cpuDiscount").style.display = "none";
                    $('.cpuDiscountLi').addClass('hide');
                    $('#cpuDiscountRow').css('display', 'none');
                    $('#cpuDiscountAmt').css('display', 'none');
                    $('#cpuDiscountRowLi').addClass('hide');
                    $('#cpuDiscountAmtLi').addClass('hide');

					document.getElementById("warehouseNotFound_zip").firstChild.data = $('#newzip').html();
					document.getElementById("warehouseNotFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + $('#newzip').val();

                    //Disable new CPU option. PN7767.
                    $('#cpuOption').addClass('shipPickupContainerNotAvail');
                    $('#cpuOption').find('.shipOptionText').text('ORDER PICK-UP NOT AVAILABLE');
                    $('#CPU').css('pointer-events', 'none');

					//Don't have CPU available. Use the first freight response to set the freight.
					if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						document.getElementById("freeFreight").style.display = "inline";
						document.getElementById("freight").style.display = "none";

                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
                        $('.shipCostLi').removeClass('hide');

						document.getElementById("orderTotal").style.display = "block";
						document.getElementById("orderTotalNoFreight").style.display = "none";
						document.getElementById("orderTotalPlusFreight").style.display = "none";
					}else{
						document.getElementById("freight").firstChild.data = document.savedFreightBean.shipFreightOnly.value;

                        //PN7767
                        if(document.savedFreightBean.shipFreightOnly.value == "$0.00" || document.savedFreightBean.shipFreightOnly.value == "N/A"){
                            $('.shipCostLi').find('.shipCost').text('FREE');
                        }else{
                            $('.shipCostLi').find('.shipCost').text(document.savedFreightBean.shipFreightOnly.value);
                        }
					}
                    //Updating with PN7767.
                    $('#installerFreight').text(document.savedFreightBean.shipFreightOnly.value);
                    $('#exciseLi').text(document.savedFreightBean.shipExciseTax.value);
                    if(!isCanadianShip){
                        $('#taxes').text(document.savedFreightBean.shipTaxes.value);
                        $('#taxesLi').text(document.savedFreightBean.shipTaxes.value);
                        $('#fees').text(document.savedFreightBean.shipFees.value);
                        $('#feesLi').text(document.savedFreightBean.shipFees.value);
                    }else{
                        $('#canHSTLi').text(document.savedFreightBean.shipCanHST.value);
                        $('#canGSTLi').text(document.savedFreightBean.shipCanGST.value);
                        $('#canPSTLi').text(document.savedFreightBean.shipCanPST.value);
                        $('#canDutyLi').text(document.savedFreightBean.shipCanDuty.value);
                        $('#canLevyLi').text(document.savedFreightBean.shipCanLevy.value);
                        $('#canBrokerLi').text(document.savedFreightBean.shipCanBroker.value);
                    }
					document.getElementById("taxesFeesIncluded").style.display = "block";
					document.getElementById("orderTotal").firstChild.data = document.savedFreightBean.shipOrderTotal.value;

					//Add freight to order total.
					document.getElementById("orderTotalPlusFreight").firstChild.data = document.savedFreightBean.shipOrderTotalPlusFreight.value;
					if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y" && document.savedFreightBean.shipOrderTotalPlusFreightNoDisc != null){
						document.getElementById("orderTotalPlusFreight").firstChild.data = document.savedFreightBean.shipOrderTotalPlusFreightNoDisc.value;
					}

					//Hide initial order total and display one with freight added.
					if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						document.getElementById("orderTotal").style.display = "block";
						document.getElementById("orderTotalNoFreight").style.display = "none";
						document.getElementById("orderTotalPlusFreight").style.display = "none";
						setAffirmPrice(document.getElementById("orderTotal").firstChild.data);
					}else{
						document.getElementById("orderTotal").style.display = "none";
						document.getElementById("orderTotalNoFreight").style.display = "none";
						document.getElementById("orderTotalPlusFreight").style.display = "block";
						setAffirmPrice(document.getElementById("orderTotalPlusFreight").firstChild.data);
					}

					//Hide "Pending" and display freight.
					if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						document.getElementById("freeFreight").style.display = "inline";
						document.getElementById("freight").style.display = "none";

                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
					}else{
						document.getElementById("freeFreight").style.display = "none";
						document.getElementById("freight").style.display = "inline";
					}
                    //PN7767
                    $('.shipCostLi').removeClass('hide');

					//Hide original zip and display newly entered/submitted zip.
					document.getElementById("enteredzip").style.display = "inline";

					//Hide the rebate if one has been previously applied. It will be displayed
					//down below if it still applies.
					document.getElementById("rebateText").style.display = "none";
					var rebateText = document.getElementById("rebateTextJS");
					if(rebateText.childNodes[0]){
						rebateText.removeChild(rebateText.childNodes[0]);
					}
					document.getElementById("rebateTextJS").style.display = "none";
					document.getElementById("rebateAddtlText").style.display = "none";
					var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
					if(rebateAddtlText.childNodes[0]){
						rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
					}
					document.getElementById("rebateAddtlTextJS").style.display = "none";
					document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
					document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
					document.getElementById("orderTotalMinusPromo").style.display = "none";
					document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

					//Show taxes and fees. We know we are lower 48. Updating with PN7767.
					document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    if(document.savedFreightBean.shipExciseTax.value != "" && document.savedFreightBean.shipExciseTax.value != "$0.00"){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
                    if(!isCanadianShip){
                        $('#taxRow').css('display', 'inline');
                        $('#taxes').css('display', 'inline');
                        $('#taxRowLi').removeClass('hide');
                        $('#taxesLi').removeClass('hide');
					
                        $('#feeRow').css('display', 'inline;');
                        $('#fees').css('display', 'inline;');
                        $('#feeRowLi').removeClass('hide');
                        $('#feesLi').removeClass('hide');
                    }else{
                        if(document.savedFreightBean.shipCanHST.value != "" && document.savedFreightBean.shipCanHST.value != "$0.00"){
                            $('#canHSTRowli').removeClass('hide');
                            $('#canHSTLi').removeClass('hide');
                        }else{
                            $('#canHSTRowLi').addClass('hide');
                            $('#canHSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanGST.value != "" && document.savedFreightBean.shipCanGST.value != "$0.00"){
                            $('#canGSTRowLi').removeClass('hide');
                            $('#canGSTLi').removeClass('hide');
                        }else{
                            $('#canGSTRowLi').addClass('hide');
                            $('#canGSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanPST.value != ""){
                            $('#canPSTRowLi').removeClass('hide');
                            $('#canPSTLi').removeClass('hide');
                        }else{
                            $('#canPSTRowLi').addClass('hide');
                            $('#canPSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanDuty.value != ""){
                            $('#canDutyRowLi').removeClass('hide');
                            $('#canDutyLi').removeClass('hide');
                        }else{
                            $('#canDutyRowLi').addClass('hide');
                            $('#canDutyLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanLevy.value != ""){
                            $('#canLevyRowLi').removeClass('hide');
                            $('#canLevyLi').removeClass('hide');
                        }else{
                            $('#canLevyRowLi').addClass('hide');
                            $('#canLevyLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanBroker.value != ""){
                            $('#canBrokerRowLi').removeClass('hide');
                            $('#canBrokerLi').removeClass('hide');
                        }else{
                            $('#canBrokerRowLi').addClass('hide');
                            $('#canBrokerLi').addClass('hide');
                        }
                    }

					//Begin display rebate total (if one has been applied)
					if(document.getElementById("orderTotalPlusFreightMinusPromo") != null){
						var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
						for(var j = 0; j < previousChildren.length; j++){
							document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
						}

						if(document.getElementById("orderTotalMinusPromo") != null){
							previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
							for(var j = 0; j < previousChildren.length; j++){
								document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
							}
						}
						if(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value.length > 0){
							previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
							for(var j = 0; j < previousChildren.length; j++){
								document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
							}

							if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
								previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
								for(var j = 0; j < previousChildren.length; j++){
									document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
								}
							}
						}
					}
					if(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo != null && document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value.length > 0){
						var orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
						if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
							orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
						}
						var orderTotalMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalMinusPromo.value);
						var promoCode = document.savedFreightBean.promoCode.value;
						var multipleRebates = document.savedFreightBean.multipleRebates.value;
						var brandedCardName = document.savedFreightBean.brandedCardName.value;
						var brandedCardLandingPage = document.savedFreightBean.brandedCardLandingPage.value;
						var promoCCOnly = document.savedFreightBean.promoCCOnly.value;

						$('#rebateTextJS').html('');
						if(multipleRebates.length > 4 ){

							if(promoCCOnly.length > 0){

								$('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');

								var link = document.createElement('a');
								link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
								link.appendChild(document.createTextNode("Mail-In Rebate"));

								$('#rebateTextJS').append(link).append(': ');

							} else {
								$('#rebateTextJS').append('Price After ');
			
								var link = document.createElement('a');
								link.href="/specialoffers/details.jsp?promoID=" + promoCode;
								link.appendChild(document.createTextNode("Mail-In Rebate"));

							 $('#rebateTextJS').append(link).append(': ');
							}
						}else{
							$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
						}

						document.getElementById("orderTotalMinusPromo").appendChild(orderTotalMinusPromo);
						document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);
						if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
							document.getElementById("orderTotalMinusPromo").style.display = "block";
							document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
							setAffirmPrice(document.savedFreightBean.shipOrderTotalMinusPromo.value);
							//console.log("orderTotalMinusPromo: " + responseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data);
						}else{
							document.getElementById("orderTotalMinusPromo").style.display = "none";
							document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
							setAffirmPrice(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
							//console.log("orderTotalPlusFreightMinusPromo: " + responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
						}
						document.getElementById("rebateText").style.display = "none";
						document.getElementById("rebateTextJS").style.display = "block";
						if(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl != null && document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.length > 0){
							var orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value);
							if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
								orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromoMinusAddtl.value);
							}
							var orderTotalMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalMinusPromoMinusAddtl.value);

                            $('#rebateAddtlTextJS').html('');
							if(multipleRebates.length > 4){
                        		$('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');

								link = document.createElement("a");
								link.href=brandedCardLandingPage + "?returnPage=/cart/HoldingArea.jsp";
								link.innerHTML = "Mail-In Rebate";

                                $('#rebateAddtlTextJS').append(link).append(': ');
							}else{
								//$('#rebateAddtlTextJS').appendChild(document.createTextNode("Price with the "+ brandedCardName + " After Mail-In Rebate: "));
								$('#rebateAddtlTextJS').html("Price with the "+ brandedCardName + " After Mail-In Rebate: ");
							}

							document.getElementById("orderTotalMinusPromoMinusAddtl").appendChild(orderTotalMinusPromoMinusAddtl);
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);
							document.getElementById("rebateAddtlText").style.display = "none";
							document.getElementById("rebateAddtlTextJS").style.display = "block";
							if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
								document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "block";
								document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
							}else{
								document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
								document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";
							}
						}
					}

					//Hide "Before Tax & Shipping"
					document.getElementById("beforeTaxShipping").style.display = "none";

					//Hide "Processing"
					document.getElementById("processing").style.display = "none";
				}else{
					document.getElementById("noZipEntered").style.display = "none";
					document.getElementById("warehouseFound").style.display = "none";
					document.getElementById("cpuDiscount").style.display = "none";
                    $('.cpuDiscountLi').addClass('hide');
					document.getElementById("warehouseNotFound").style.display = "none";

					//Hide freight or "Pending", display processing.
					document.getElementById("freeFreight").style.display = "none";
					document.getElementById("freight").style.display = "none";
					document.getElementById("processing").style.display = "none";

                    //PN7767
                    $('.shipCostLi').addClass('hide');

					//Hide taxes and fees. Updating with PN7767.
                    $('#feeRow').css('display', 'none');
                    $('#fees').css('display', 'none');
                    $('#feeRowLi').addClass('hide');
                    $('#feesLi').addClass('hide');

                    $('#taxRow').css('display', 'none');
                    $('#taxes').css('display', 'none');
                    $('#taxRowLi').addClass('hide');
                    $('#taxesLi').addClass('hide');

                    $('#exciseRowLi').addClass('hide');
                    $('#exciseLi').addClass('hide');
                    $('#canHSTRowLi').addClass('hide');
                    $('#canHSTLi').addClass('hide');
                    $('#canGSTRowLi').addClass('hide');
                    $('#canGSTLi').addClass('hide');
                    $('#canPSTRowLi').addClass('hide');
                    $('#canPSTLi').addClass('hide');
                    $('#canDutyRowLi').addClass('hide');
                    $('#canDutyLi').addClass('hide');
                    $('#canLevyRowLi').addClass('hide');
                    $('#canLevyLi').addClass('hide');
                    $('#canBrokerRowLi').addClass('hide');
                    $('#canBrokerLi').addClass('hide');

					//Hide order total.
					document.getElementById("orderTotal").style.display = "none";
					document.getElementById("orderTotalNoFreight").style.display = "block";
					document.getElementById("orderTotalPlusFreight").style.display = "none";

					//Hide rebate, if there was one applied.
                    $('#rebateText').css('display', 'none');
					var rebateText = document.getElementById("rebateTextJS");
					if(rebateText != null && rebateText.childNodes[0]){
						rebateText.removeChild(rebateText.childNodes[0]);
					}
                    $('#rebateTextJS').css('display', 'none');
					document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
					document.getElementById("orderTotalMinusPromo").style.display = "none";
                    $('#rebateAddtlText').css('display', 'none');
					var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
					if(rebateAddtlText != null && rebateAddtlText.childNodes[0]){
						rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
					}
                    $('#rebateAddtlTextJS').css('display', 'none');
					document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
					document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

					//Show actual cost message, by default.
					$('.actualCostTxt').show();

					//Set the available date for CPU, if we have it.
					if(document.savedFreightBean.availableDateForCPU.value.length > 0){
						document.freightCheck.availableDateForCPU.value = document.savedFreightBean.availableDateForCPU.value;
					}else{
						document.freightCheck.availableDateForCPU.value = "";
					}

					//Get correct values for display.
					var freightOnly = "";
					var taxes = "";
					var fees = "";
                    var excise = "";
                    var canHST = "";
                    var canGST = "";
                    var canPST = "";
                    var canDuty = "";
                    var canLevy = "";
                    var canBroker = "";
					var orderTotal = "";
					var orderTotalMinusPromo = "";
					var orderTotalPlusFreight = "";
					var noShippingCost = false;
					var cpuAmount = "";

					if(document.getElementById("shipTo") && document.getElementById("shipTo").value == "CPU" || (document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y")){
						noShippingCost = true;
					}

					if(noShippingCost){
						if(document.savedFreightBean.cpuFreightOnly != null && document.savedFreightBean.cpuFreightOnly.value.length > 0){
							freightOnly = document.savedFreightBean.cpuFreightOnly.value;
							document.getElementById("freight").firstChild.data = freightOnly;

                            //PN7767
                            if(freightOnly == "$0.00" || freightOnly == "N/A"){
                                if(freightOnly == "N/A"){
                                    $('.shipCostLi').addClass('hide');
                                }else{
                                    $('.shipCostLi').find('.shipCost').text('FREE');
                                }
                            }else{
                                $('.shipCostLi').find('.shipCost').text(freightOnly);
                            }

							if(freightOnly == "N/A"){
								$('.actualCostTxt').hide();
							}
						}
                        if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
                            if(document.savedFreightBean.shipTaxes != null && document.savedFreightBean.shipTaxes.value.length > 0){
                                taxes = document.savedFreightBean.shipTaxes.value;
                                $('#taxes').text(taxes);
                                $('#taxesLi').text(taxes);
                            }
                        }else{
						    if(document.savedFreightBean.cpuTaxes != null && document.savedFreightBean.cpuTaxes.value.length > 0){
							    taxes = document.savedFreightBean.cpuTaxes.value;
                                //Updated with PN7767.
                                $('#taxes').text(taxes);
                                $('#taxesLi').text(taxes);
						    }
                        }
                        if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
                            if(document.savedFreightBean.shipFees != null && document.savedFreightBean.shipFees.value.length > 0){
                                fees = document.savedFreightBean.shipFees.value;
                                $('#fees').text(fees);
                                $('#feesLi').text(fees);
                            }
                        }else{
						    if(document.savedFreightBean.cpuFees != null && document.savedFreightBean.cpuFees.value.length > 0){
							    fees = document.savedFreightBean.cpuFees.value;
                                //Updated with PN7767.
                                $('#fees').text(fees);
                                $('#feesLi').text(fees);
						    }
                        }
                        if(document.savedFreightBean.cpuExciseTax != null && document.savedFreightBean.cpuExciseTax.value.length > 0){
                            excise = document.savedFreightBean.cpuExciseTax.value;
                            $('#exciseLi').text(excise);
                        }
						if(document.savedFreightBean.cpuOrderTotal != null && document.savedFreightBean.cpuOrderTotal.value.length > 0){
							orderTotal = document.savedFreightBean.cpuOrderTotal.value;
							document.getElementById("orderTotal").firstChild.data = orderTotal;
						}
						if(document.savedFreightBean.cpuOrderTotalMinusPromo != null && document.savedFreightBean.cpuOrderTotalMinusPromo.value.length > 0){
							orderTotalMinusPromo = document.savedFreightBean.cpuOrderTotalMinusPromo.value;
							document.getElementById("orderTotalMinusPromo").firstChild.data = orderTotalMinusPromo;
						}
						if(document.savedFreightBean.cpuOrderTotalPlusFreight != null && document.savedFreightBean.cpuOrderTotalPlusFreight.value.length > 0){
							orderTotalPlusFreight = document.savedFreightBean.cpuOrderTotalPlusFreight.value;
							if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
								orderTotalPlusFreight = document.savedFreightBean.shipOrderTotalPlusFreight.value;
							}
							document.getElementById("orderTotalPlusFreight").firstChild.data = orderTotalPlusFreight;
							setAffirmPrice(orderTotalPlusFreight);
						}
						if(document.savedFreightBean.cpuAmount != null && document.savedFreightBean.cpuAmount.value.length > 0){
							cpuAmount = document.savedFreightBean.cpuAmount.value;
                            //Updated with PN7767.
                            $('#cpuDiscountAmt').text('-' + cpuAmount);
                            $('#cpuDiscountAmtLi').text('-' + cpuAmount);
						}
					}else{
						if(document.savedFreightBean.shipFreightOnly != null && document.savedFreightBean.shipFreightOnly.value.length > 0){
							freightOnly = document.savedFreightBean.shipFreightOnly.value;
							document.getElementById("freight").firstChild.data = freightOnly;

                            //PN7767.
                            if(freightOnly == "$0.00" || freightOnly == "N/A"){
                                if(freightOnly == "N/A"){
                                    $('.shipCostLi').addClass('hide');
                                }else{
                                    $('.shipCostLi').find('.shipCost').text('FREE');
                                }
                            }else{
                                $('.shipCostLi').find('.shipCost').text(freightOnly);
                            }

							if(freightOnly == "N/A"){
								$('.actualCostTxt').hide();
							}
						}
                        if(document.savedFreightBean.shipExciseTax != null && document.savedFreightBean.shipExciseTax.value.length > 0){
                            excise = document.savedFreightBean.shipExciseTax.value;
                            $('#exciseLi').text(excise);
                        }
                        if(!isCanadianShip){
						    if(document.savedFreightBean.shipTaxes != null && document.savedFreightBean.shipTaxes.value.length > 0){
							    taxes = document.savedFreightBean.shipTaxes.value;
                                //Updated with PN7767.
                                $('#taxes').text(taxes);
                                $('#taxesLi').text(taxes);
						    }
						    if(document.savedFreightBean.shipFees != null && document.savedFreightBean.shipFees.value.length > 0){
							    fees = document.savedFreightBean.shipFees.value;
                                //Updated with PN7767.
                                $('#fees').text(fees);
                                $('#feesLi').text(fees);
						    }
                        }else{
                            if(document.savedFreightBean.shipCanHST != null && document.savedFreightBean.shipCanHST.value.length > 0){
                                canHST = document.savedFreightBean.shipCanHST.value;
                                $('#canHSTLi').text(canHST);
                            }
                            if(document.savedFreightBean.shipCanGST != null && document.savedFreightBean.shipCanGST.value.length > 0){
                                canGST = document.savedFreightBean.shipCanGST.value;
                                $('#canGSTLi').text(canGST);
                            }
                            if(document.savedFreightBean.shipCanPST != null && document.savedFreightBean.shipCanPST.value.length > 0){
                                canPST = document.savedFreightBean.shipCanPST.value;
                                $('#canPSTLi').text(canPST);
                            }
                            if(document.savedFreightBean.shipCanDuty != null && document.savedFreightBean.shipCanDuty.value.length > 0){
                                canDuty = document.savedFreightBean.shipCanDuty.value;
                                $('#canDutyLi').text(canDuty);
                            }
                            if(document.savedFreightBean.shipCanLevy != null && document.savedFreightBean.shipCanLevy.value.length > 0){
                                canLevy = document.savedFreightBean.shipCanLevy.value;
                                $('#canLevyLi').text(canLevy);
                            }
                            if(document.savedFreightBean.shipCanBroker != null && document.savedFreightBean.shipCanBroker.value.length > 0){
                                canBroker = document.savedFreightBean.shipCanBroker.value;
                                $('#canBrokerLi').text(canBroker);
                            }
                        }
						if(document.savedFreightBean.shipOrderTotal != null && document.savedFreightBean.shipOrderTotal.value.length > 0){
							orderTotal = document.savedFreightBean.shipOrderTotal.value;
							document.getElementById("orderTotal").firstChild.data = orderTotal;
						}
						if(document.savedFreightBean.shipOrderTotalMinusPromo != null && document.savedFreightBean.shipOrderTotalMinusPromo.value.length > 0){
							orderTotalMinusPromo = document.savedFreightBean.shipOrderTotalMinusPromo.value;
							if(document.getElementById("orderTotalMinusPromo").firstChild != null){
								document.getElementById("orderTotalMinusPromo").firstChild.data = orderTotalMinusPromo;
							}else{
								document.getElementById("orderTotalMinusPromo").appendChild(document.createTextNode(orderTotalMinusPromo));
							}
						}
						if(document.savedFreightBean.shipOrderTotalPlusFreight != null && document.savedFreightBean.shipOrderTotalPlusFreight.value.length > 0){
							orderTotalPlusFreight = document.savedFreightBean.shipOrderTotalPlusFreight.value;
							if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
								orderTotalPlusFreight = document.savedFreightBean.shipOrderTotalPlusFreightNoDisc.value;
							}
							document.getElementById("orderTotalPlusFreight").firstChild.data = orderTotalPlusFreight;
							setAffirmPrice(orderTotalPlusFreight);
						}
						if(document.savedFreightBean.cpuAmount != null && document.savedFreightBean.cpuAmount.value.length > 0){
							cpuAmount = document.savedFreightBean.cpuAmount.value;
                            //Updated with PN7767.
                            $('#cpuDiscountAmt').text('-' + cpuAmount);
                            $('#cpuDiscountAmtLi').text('-' + cpuAmount);
						}
					}

					//Display freight.
					document.getElementById("freeFreight").style.display = "none";
					document.getElementById("freight").style.display = "inline";

                    //PN7767
                    if(freightOnly != "N/A"){
                        $('.shipCostLi').removeClass('hide');
                    }

					//Display order total.
					document.getElementById("orderTotal").style.display = "none";
					document.getElementById("orderTotalNoFreight").style.display = "none";
					document.getElementById("orderTotalPlusFreight").style.display = "block";
					setAffirmPrice(orderTotalPlusFreight);

					//Show new zip.
					document.getElementById("enteredzip").style.display = "inline";

					//Display taxes and fees. Updated with PN7767.
					document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    if(excise != '' && excise != '$0.00'){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
                    if(!isCanadianShip){
                        $('#taxRow').css('display', 'inline');
                        $('#taxes').css('display', 'inline');
                        $('#taxRowLi').removeClass('hide');
                        $('#taxesLi').removeClass('hide');
					
                        $('#feeRow').css('display', 'inline');
                        $('#fees').css('display', 'inline');
                        $('#feeRowLi').removeClass('hide');
                        $('#feesLi').removeClass('hide');
                    }else{
                        if(canHST != "" && canHST != "$0.00"){
                            $('#canHSTRowLi').removeClass('hide');
                            $('#canHSTLi').removeClass('hide');
                        }else{
                            $('#canHSTRowLi').addClass('hide');
                            $('#canHSTLi').addClass('hide');
                        }

                        if(canGST != "" && canGST != "$0.00"){
                            $('#canGSTRowLi').removeClass('hide');
                            $('#canGSTLi').removeClass('hide');
                        }else{
                            $('#canGSTRowLi').addClass('hide');
                            $('#canGSTLi').addClass('hide');
                        }

                        if(canPST != ""){
                            $('#canPSTRowLi').removeClass('hide');
                            $('#canPSTLi').removeClass('hide');
                        }else{
                            $('#canPSTRowLi').addClass('hide');
                            $('#canPSTLi').addClass('hide');
                        }

                        if(canDuty != ""){
                            $('#canDutyRowLi').removeClass('hide');
                            $('#canDutyLi').removeClass('hide');
                        }else{
                            $('#canDutyRowLi').addClass('hide');
                            $('#canDutyLi').addClass('hide');
                        }

                        if(canLevy != ""){
                            $('#canLevyRowLi').removeClass('hide');
                            $('#canLevyLi').removeClass('hide');
                        }else{
                            $('#canLevyRowLi').addClass('hide');
                            $('#canLevyLi').addClass('hide');
                        }

                        if(canBroker != ""){
                            $('#canBrokerRowLi').removeClass('hide');
                            $('#canBrokerLi').removeClass('hide');
                        }else{
                            $('#canBrokerRowLi').addClass('hide');
                            $('#canBrokerLi').addClass('hide');
                        }
                    }

					if(cpuAmount != "" && cpuAmount != "$0.00" && document.getElementById("shipTo") && document.getElementById("shipTo").value == "CPU"){
                        $('#cpuDiscountRow').css('display', 'inline');
                        $('#cpuDiscountAmt').css('display', 'inline');
                        $('#cpuDiscountRowLi').removeClass('hide');
                        $('#cpuDiscountAmtLi').removeClass('hide');

						//detect if BS cc addtlPromo is displayed. If so, hide it. - future functionality
							
					}else{
                        $('#cpuDiscountRow').css('display', 'none');
                        $('#cpuDiscountAmt').css('display', 'none');
                        $('#cpuDiscountRowLi').addClass('hide');
                        $('#cpuDiscountAmtLi').addClass('hide');
					}

					//begin display rebate total (if one has been applied)
					if(document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo != null && document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo.value.length > 0){
						var orderTotalPlusFreightMinusPromo = "";
						var orderTotalPlusFreightMinusPromo_data = "";
						var promoCode;
						var multipleRebates;
						var brandedCardName;
						var brandedCardLandingPage; 
						var promoCCOnly = ""; 

						if(noShippingCost){
							orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo.value);
							orderTotalPlusFreightMinusPromo_data = document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo.value;
							if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y") {
								orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
								orderTotalPlusFreightMinusPromo_data = document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value;
							}
							promoCode = document.savedFreightBean.promoCode.value;
							multipleRebates = document.savedFreightBean.multipleRebates.value;
							brandedCardName = document.savedFreightBean.brandedCardName.value;
							brandedCardLandingPage = document.savedFreightBean.brandedCardLandingPage.value;
							promoCCOnly = document.savedFreightBean.promoCCOnly.value;
						}else{
							orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
							orderTotalPlusFreightMinusPromo_data = document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value;	
							if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y") {
								orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromo.value);
								orderTotalPlusFreightMinusPromo_data = document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromo.value;
							}
							promoCode = document.savedFreightBean.promoCode.value;
							multipleRebates = document.savedFreightBean.multipleRebates.value;
							brandedCardName = document.savedFreightBean.brandedCardName.value;
							brandedCardLandingPage = document.savedFreightBean.brandedCardLandingPage.value;
							promoCCOnly = document.savedFreightBean.promoCCOnly.value;
						}
						$('#rebateTextJS').html('');
						if(multipleRebates.length > 4 ){

							if(promoCCOnly.length > 0){

								$('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');

								var link = document.createElement('a');
								link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
								link.appendChild(document.createTextNode("Mail-In Rebate"));

								$('#rebateTextJS').append(link).append(': ');

							} else {
								$('#rebateTextJS').append('Price After ');
			
								var link = document.createElement('a');
								link.href="/specialoffers/details.jsp?promoID=" + promoCode;
								link.appendChild(document.createTextNode("Mail-In Rebate"));

							 $('#rebateTextJS').append(link).append(': ');
							}
						}else{
							$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
						}

						document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);

                        $('#rebateText').css('display', 'none');
                        $('#rebateTextJS').css('display', 'block');
						document.getElementById("orderTotalMinusPromo").style.display = "none";
						document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
						setAffirmPrice(orderTotalPlusFreightMinusPromo_data);
						if(document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl != null && document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value.length > 0){
							var orderTotalPlusFreightMinusPromoMinusAddtl;
							var orderTotalPlusFreightMinusPromoMinusAddtl_data;
							if(noShippingCost){
								orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value);
								orderTotalPlusFreightMinusPromoMinusAddtl_data = document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value;
								if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
									orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value);
									orderTotalPlusFreightMinusPromoMinusAddtl_data = document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value;
								}
							}else{
								orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value);
								orderTotalPlusFreightMinusPromoMinusAddtl_data = document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value;
								if(document.savedFreightBean.hasFreePreferred != null && document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
									orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromoMinusAddtl.value);
									orderTotalPlusFreightMinusPromoMinusAddtl_data = document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromoMinusAddtl.value;
								}
							}

                            $('#rebateAddtlTextJS').html('');
							if(multipleRebates.length > 4 ){
                                $('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');

								var link = document.createElement('a');
								link.href=brandedCardLandingPage + "?returnPage=/cart/HoldingArea.jsp";
								link.appendChild(document.createTextNode("Mail-In Rebate"));

                                $('#rebateAddtlTextJS').append(link).append(': ');
							}else{
								$('#rebateAddtlTextJS').html(" Price with the "+ brandedCardName + " After Mail-In Rebate: ");
							}

							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);

							document.getElementById("rebateAddtlText").style.display = "none";
							document.getElementById("rebateAddtlTextJS").style.display = "block";
							document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";
							setAffirmPrice(orderTotalPlusFreightMinusPromoMinusAddtl_data);
						}
					}
					//End of rebate display

					if(document.getElementById("orderTotalPlusFreightMinusPromo") != null){
						var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
						for(var j = 0; j < previousChildren.length; j++){
							document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
						}

						if(document.getElementById("orderTotalMinusPromo") != null){
							previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
							for(var j = 0; j < previousChildren.length; j++){
								document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
							}
						}
						if(document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl != null && document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value.length > 0){
							previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
							for(var j=0; j < previousChildren.length; j++){
								document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
							}
							
							if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
								previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
								for(var j = 0; j < previousChildren.length; j++){
									document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
								}
							}
						}
					}

					//hide "before Tax and Shipping"
					document.getElementById("beforeTaxShipping").style.display = "none";

					//hide "processing"
					document.getElementById("processing").style.display = "none";

                    //Updated with PN7767.
					if(cpuAmount.length > 0){
						document.getElementById("cpuDiscount").style.display = "inline";
                        $('#cpuAmt').text(cpuAmount);
                        $('.cpuAmtNew').text(" " + cpuAmount + " ");
                        $('.cpuDiscountLi').removeClass('hide');
					}else{
						document.getElementById("warehouseFound").style.display = "inline";
					}

					//Updated with PN144995
					if($('#warehouseInfoLink').text().includes("South Bend")) {
						$('.southBendLocation').removeClass('hide');
					}
				}

				if(runCheckForCartErrors){
		            checkForCartErrors();
				}else{
					$('#validateForCheckoutBTN').blur();
				}
			}else{
				if(isLower48N == "true"){
					if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						document.getElementById("freeFreight").style.display = "inline";
						document.getElementById("freight").style.display = "none";

                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
                        $('.shipCostLi').removeClass('hide');

						document.getElementById("orderTotal").style.display = "block";
						document.getElementById("orderTotalNoFreight").style.display = "none";
						document.getElementById("orderTotalPlusFreight").style.display = "none";
					}else{
						document.getElementById("freight").firstChild.data = document.savedFreightBean.shipFreightOnly.value;

                        //PN7767
                        if(document.savedFreightBean.shipFreightOnly.value == "$0.00" || document.savedFreightBean.shipFreightOnly.value == "N/A"){
                            $('.shipCostLi').find('.shipCost').text('FREE');
                        }else{
                            $('.shipCostLi').find('.shipCost').text(document.savedFreightBean.shipFreightOnly.value);
                        }
					}
                    if(document.getElementById("installerFreight")){
					    document.getElementById("installerFreight").firstChild.data = document.savedFreightBean.shipFreightOnly.value;
                    }
                    //Updated with PN7767.
                    $('#taxes').text(document.savedFreightBean.shipTaxes.value);
                    $('#taxesLi').text(document.savedFreightBean.shipTaxes.value);
                    $('#fees').text(document.savedFreightBean.shipFees.value);
                    $('#feesLi').text(document.savedFreightBean.shipFees.value);
                    $('#exciseLi').text(document.savedFreightBean.shipExciseTax.value);
                    $('#cpuDiscountAmt').text('-' + document.savedFreightBean.cpuAmount.value);
                    $('#cpuDiscountAmtLi').text('-' + document.savedFreightBean.cpuAmount.value);
				}else{
					document.getElementById("freight").firstChild.data = document.savedFreightBean.shipFreightOnly.value;
                    $('#installerFreight').text(document.savedFreightBean.shipFreightOnly.value);

                    //PN7767
                    if(document.savedFreightBean.shipFreightOnly.value == "$0.00" || document.savedFreightBean.shipFreightOnly.value == "N/A"){
                        $('.shipCostLi').find('.shipCost').text('FREE');
                    }else{
                        $('.shipCostLi').find('.shipCost').text(document.savedFreightBean.shipFreightOnly.value);
                    }

                    $('#exciseLi').text(document.savedFreightBean.shipExciseTax.value);
                    if(!isCanadianShip){
                        $('#taxes').text(document.savedFreightBean.shipTaxes.value);
                        $('#taxesLi').text(document.savedFreightBean.shipTaxes.value);
                        $('#fees').text(document.savedFreightBean.shipFees.value);
                        $('#feesLi').text(document.savedFreightBean.shipFees.value);
                    }else{
                        $('#canHSTLi').text(document.savedFreightBean.shipCanHST.value);
                        $('#canGSTLi').text(document.savedFreightBean.shipCanGST.value);
                        $('#canPSTLi').text(document.savedFreightBean.shipCanPST.value);
                        $('#canDutyLi').text(document.savedFreightBean.shipCanDuty.value);
                        $('#canLevyLi').text(document.savedFreightBean.shipCanLevy.value);
                        $('#canBrokerLi').text(document.savedFreightBean.shipCanBroker.value);
                    }
				}
				document.getElementById("taxesFeesIncluded").style.display = "none";

				document.getElementById("orderTotal").firstChild.data = document.savedFreightBean.shipOrderTotal.value;

				//add freight to order total
				if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
					document.getElementById("orderTotalPlusFreight").firstChild.data = document.savedFreightBean.shipOrderTotalPlusFreight.value;
					//console.log("orderTotalPlusFreight 1: "+ document.savedFreightBean.shipOrderTotalPlusFreight.value);
					setAffirmPrice(document.savedFreightBean.shipOrderTotalPlusFreight.value);
				}else{
					document.getElementById("orderTotalPlusFreight").firstChild.data = document.savedFreightBean.shipOrderTotalPlusFreight.value;
					//console.log("orderTotalPlusFreight 2: "+ document.savedFreightBean.shipOrderTotalPlusFreight.value);
					setAffirmPrice(document.savedFreightBean.shipOrderTotalPlusFreight.value);
				}

				//hide initial order total and display one with freight added
				if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
					document.getElementById("orderTotal").style.display = "block";
					document.getElementById("orderTotalNoFreight").style.display = "none";
					document.getElementById("orderTotalPlusFreight").style.display = "none";
				}else{
					document.getElementById("orderTotal").style.display = "none";
					document.getElementById("orderTotalNoFreight").style.display = "none";
					document.getElementById("orderTotalPlusFreight").style.display = "block";
				}

				//hide "Pending" and display freight
				$('.cartPriceSec').find('.selectShipping').hide();
				if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
					document.getElementById("freeFreight").style.display = "inline";
					document.getElementById("freight").style.display = "none";

                    //PN7767
                    $('.shipCostLi').find('.shipCost').text('FREE');
				}else{
					document.getElementById("freeFreight").style.display = "none";
					document.getElementById("freight").style.display = "inline";
				}
                //PN7767
                $('.shipCostLi').removeClass('hide');

				//hide original zip and display newly entered/submitted zip
				document.getElementById("enteredzip").style.display = "inline";

				//hide the rebate if one has been previously applied. It will be displayed
				//down below if it still applies.
                if(document.getElementById("rebateText") != null){
				    document.getElementById("rebateText").style.display = "none";
                }
				var rebateText = document.getElementById("rebateTextJS");
				if(rebateText.childNodes[0]){
					rebateText.removeChild(rebateText.childNodes[0]);
				}
				document.getElementById("rebateTextJS").style.display = "none";
				document.getElementById("rebateAddtlText").style.display = "none";
				var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
				if(rebateAddtlText.childNodes[0]){
					rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
				}
				document.getElementById("rebateAddtlTextJS").style.display = "none";
				document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
				document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
				document.getElementById("orderTotalMinusPromo").style.display = "none";
				document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

				if(isLower48N == "true"){
					//if lower 48 show tax and fees line. Updated with PN7767.
					document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    $('#taxRow').css('display', 'inline');
                    $('#taxes').css('display', 'inline');
                    $('#taxRowLi').removeClass('hide');
                    $('#taxesLi').removeClass('hide');
					if($('#shipTo').value == "CPU" && document.savedFreightBean.cpuAmount != null && document.savedFreightBean.cpuAmount.value != ""){
                        $('#cpuDiscountRow').css('display', 'inline');
                        $('#cpuDiscountAmt').css('display', 'inline');
                        $('#cpuDiscountRowLi').removeClass('hide');
                        $('#cpuDiscountAmtLi').removeClass('hide');
					}else{
                        $('#cpuDiscountRow').css('display', 'none');
                        $('#cpuDiscountAmt').css('display', 'none');
                        $('#cpuDiscountRowLi').addClass('hide');
                        $('#cpuDiscountAmtLi').addClass('hide');
					}
                    $('#feeRow').css('display', 'inline');
                    $('#fees').css('display', 'inline');
                    $('#feeRowLi').removeClass('hide');
                    $('#feesLi').removeClass('hide');
                    if(document.savedFreightBean.shipExciseTax != null && document.savedFreightBean.shipExciseTax.value != "$0.00"){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
				}else{
					document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    if(document.savedFreightBean.shipExciseTax != null && document.savedFreightBean.shipExciseTax.value != '$0.00'){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
                    if(!isCanadianShip){
                        $('#taxRow').css('display', 'inline');
                        $('#taxes').css('display', 'inline');
                        $('#taxRowLi').removeClass('hide');
                        $('#taxesLi').removeClass('hide');
                            
                        $('#feeRow').css('display', 'inline');
                        $('#fees').css('display', 'inline');
                        $('#feeRowLi').removeClass('hide');
                        $('#feesLi').removeClass('hide');
                    }else{
                        if(document.savedFreightBean.shipCanHST != null && document.savedFreightBean.shipCanHST.value != "$0.00"){
                            $('#canHSTRowLi').removeClass('hide');
                            $('#canHSTLi').removeClass('hide');
                        }else{
                            $('#canHSTRowLi').addClass('hide');
                            $('#canHSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanGST != null && document.savedFreightBean.shipCanGST.value != "$0.00"){
                            $('#canGSTRowLi').removeClass('hide');
                            $('#canGSTLi').removeClass('hide');
                        }else{
                            $('#canGSTRowLi').addClass('hide');
                            $('#canGSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanPST != null){
                            $('#canPSTRowLi').removeClass('hide');
                            $('#canPSTLi').removeClass('hide');
                        }else{
                            $('#canPSTRowLi').addClass('hide');
                            $('#canPSTLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanDuty != null){
                            $('#canDutyRowLi').removeClass('hide');
                            $('#canDutyLi').removeClass('hide');
                        }else{
                            $('#canDutyRowLi').addClass('hide');
                            $('#canDutyLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanLevy != null){
                            $('#canLevyRowLi').removeClass('hide');
                            $('#canLevyLi').removeClass('hide');
                        }else{
                            $('#canLevyRowLi').addClass('hide');
                            $('#canLevyLi').addClass('hide');
                        }

                        if(document.savedFreightBean.shipCanBroker != null){
                            $('#canBrokerRowLi').removeClass('hide');
                            $('#canBrokerLi').removeClass('hide');
                        }else{
                            $('#canBrokerRowLi').addClass('hide');
                            $('#canBrokerLi').addClass('hide');
                        }
                    }

                    $('#cpuDiscountRow').css('display', 'none');
                    $('#cpuDiscountAmt').css('display', 'none');
                    $('#cpuDiscountRowLi').addClass('hide');
                    $('#cpuDiscountAmtLi').addClass('hide');
				}
				//begin display rebate total (if one has been applied)
				if(isUS && document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value != null && document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value != ""){
					var orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value);
					if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						orderTotalPlusFreightMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightNoDiscMinusPromo.value);
					}
					var orderTotalMinusPromo = document.createTextNode(document.savedFreightBean.shipOrderTotalMinusPromo.value);
					var promoCode = document.savedFreightBean.promoCode.value;
					var multipleRebates = document.savedFreightBean.multipleRebates.value;
					var brandedCardName = document.savedFreightBean.brandedCardName.value;
					var brandedCardLandingPage = document.savedFreightBean.brandedCardLandingPage.value;
					var promoCCOnly = document.savedFreightBean.promoCCOnly.value;
				
					$('#rebateTextJS').html('');
					if(multipleRebates.length > 4 ){

						if(promoCCOnly.length > 0){
	
							$('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');

							var link = document.createElement('a');
							link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
							link.appendChild(document.createTextNode("Mail-In Rebate"));

							$('#rebateTextJS').append(link).append(': ');

						} else {
							$('#rebateTextJS').append('Price After ');
		
							var link = document.createElement('a');
							link.href="/specialoffers/details.jsp?promoID=" + promoCode;
							link.appendChild(document.createTextNode("Mail-In Rebate"));

						 $('#rebateTextJS').append(link).append(': ');
						}
					}else{
						$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
					}

					document.getElementById("orderTotalMinusPromo").appendChild(orderTotalMinusPromo);
					document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);
					if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
						document.getElementById("orderTotalMinusPromo").style.display = "block";
						document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
					}else{
						document.getElementById("orderTotalMinusPromo").style.display = "none";
						document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
					}
					document.getElementById("rebateText").style.display = "none";
					document.getElementById("rebateTextJS").style.display = "block";
					if(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value != null && document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value != ""){
						var orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value);
						if(document.savedFreightBean.hasFreePreferred.value == "true" && mobileSelection == "Y"){
							orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value);
						}
						var orderTotalMinusPromoMinusAddtl = document.createTextNode(document.savedFreightBean.shipOrderTotalMinusPromoMinusAddtl.value);
						//console.log("freight.js block 1");

                        $('#rebateAddtlTextJS').html('');
						if(multipleRebates.length > 4){
                            $('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');
                            
							link = document.createElement('a');
							link.href=brandedCardLandingPage + "?returnPage=/cart/HoldingArea.jsp";
							link.innerHTML="Mail-In Rebate";

                            $('#rebateAddtlTextJS').append(link).append(': ');
						}else{
							$('#rebateAddtlTextJS').html("Price with the "+ brandedCardName + " After Mail-In Rebate: ");
						}
						document.getElementById("orderTotalMinusPromoMinusAddtl").appendChild(orderTotalMinusPromoMinusAddtl);
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);
						document.getElementById("rebateAddtlText").style.display = "none";
						document.getElementById("rebateAddtlTextJS").style.display = "block";
						if(freePreferred != null && freePreferred.value == "true" && mobileSelection == "Y"){
							document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "block";
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
						}else{
							document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";
						}
					}
				}
				//End of rebate display

				if(document.getElementById("orderTotalPlusFreightMinusPromo") != null){
					//remove any previous children so we do not have duplicates displayed on reload
					var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
					for(var j = 0; j < previousChildren.length; j++){
						document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
					}
	
					if(document.getElementById("orderTotalMinusPromo") != null){
						previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
						if(previousChildren.length > 1){
							for(var j = 0; j < previousChildren.length; j++){
								document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
							}
						}
					}
					previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
					for(var j = 0; j < previousChildren.length; j++){
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
					}
					if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
						previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
						for(var j = 0; j < previousChildren.length; j++) {
							document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
						}
					}
				}

				//hide "before Tax and Shipping"
				document.getElementById("beforeTaxShipping").style.display = "none";

				//hide "processing"
				document.getElementById("processing").style.display = "none";
			}

			var availabilityForms = $("form[name^='availabilityForm']").get();
			var isLargeTire = false;
			var isGreenInAllWH = false;
			var canCrossShip = true;
			var discontinued = false;
			var prefWH = document.savedFreightBean.warehouseID.value;
			if(document.savedFreightBean.preferredWarehouseBasedOnZip.value != null && document.savedFreightBean.preferredWarehouseBasedOnZip.value != ""){
				prefWH = document.savedFreightBean.preferredWarehouseBasedOnZip.value;
			}
			var prefDueDate = "";
			var SBDueDate = "";
			var DEDueDate = "";
			var GADueDate = "";
			var SLDueDate = "";
			var CTDueDate = "";
			var NVDueDate = "";
			var CODueDate = "";
			var MNDueDate = "";
			var ATDueDate = "";
            var SEDueDate = "";
            var prefDate = responseXML.getElementsByTagName("prefDate");
			for(i = 0; i < availabilityForms.length; i++){
				isLargeTire = (availabilityForms[i].isLargeTire.value == 'true');
				canCrossShip = (availabilityForms[i].canCrossShip.value == 'true');
				isGreenInAllWH = (availabilityForms[i].isGreenInAllWH.value == 'true');
				discontinued = (availabilityForms[i].discontinued.value == 'true');
				prefDueDate = availabilityForms[i].prefDueDate.value;
				SBDueDate = availabilityForms[i].SBDueDate.value;
				DEDueDate = availabilityForms[i].DEDueDate.value;
				GADueDate = availabilityForms[i].GADueDate.value;
				SLDueDate = availabilityForms[i].SLDueDate.value;
				CTDueDate = availabilityForms[i].CTDueDate.value;
				NVDueDate = availabilityForms[i].NVDueDate.value;
				CODueDate = availabilityForms[i].CODueDate.value;
				MNDueDate = availabilityForms[i].MNDueDate.value;
				ATDueDate = availabilityForms[i].ATDueDate.value;
                SEDueDate = availabilityForms[i].SEDueDate.value;
				if(!canCrossShip || (isLargeTire && !isGreenInAllWH)){
                  if(!canCrossShip) {
                       if(document.getElementById("availability" + i) != null){
                            document.getElementById("availability" + i).innerHTML = prefDueDate;
                        }else if(document.getElementById("limitedStock" + i) != null && prefDate[i] != null && prefDate[i].firstChild != null && prefDate[i].firstChild.data != null){
                            document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + prefDate[i].firstChild.data + "</span>";
                        } 
                  } else {
					if(prefWH == "SB"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = SBDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SBDueDate + "</span>";
						}
					}
					if(prefWH == "DE"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = DEDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + DEDueDate + "</span>";
						}
					}
					if(prefWH == "GA"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = GADueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + GADueDate + "</span>";
						}
					}
					if(prefWH == "SL"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = SLDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SLDueDate + "</span>";
						}
					}
					if(prefWH == "CT"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = CTDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + CTDueDate + "</span>";
						}
					}
					if(prefWH == "NV"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = NVDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + NVDueDate + "</span>";
						}
					}
					if(prefWH == "CO"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = CODueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + CODueDate + "</span>";
						}
					}
					if(prefWH == "MN"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = MNDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + MNDueDate + "</span>";
						}
					}
					if(prefWH == "AT"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = ATDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + ATDueDate + "</span>";
						}
					}
					if(prefWH == "Se"){
                        if(document.getElementById("availability" + i) != null){
                            document.getElementById("availability" + i).innerHTML = SEDueDate;
                        }else if(document.getElementById("limitedStock" + i) != null){
                            document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SEDueDate + "</span>";
                        }
                    }
                  }
				}
			}

			//If we have a zip code entered, ensure that the shippingCartInput class
			//is removed from the cartPriceSec div.
			if(zip != null && zip != ""){
				$('.cartPriceSec').removeClass('shippingCartInput');
			}else{
				if($('#shipTo_enterZipCodeCartDiv').length){
					$('.cartPriceSec').addClass('shippingCartInput');
				}
			}
				
            calculateTileHeight();
			return;

		}else{
			updateSavedFreightBeanShip(responseXML);

			//We have a freight. 
			cpuAvailabilityChecked = 'yes';

			if(!hasPostalGC){
				document.getElementById("warehouseFound_zip").firstChild.data = responseXML.getElementsByTagName("zip")[0].firstChild.data;
				document.getElementById("cpu_warehouseFound_zip").firstChild.data = responseXML.getElementsByTagName("zip")[0].firstChild.data;
				document.getElementById("warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + responseXML.getElementsByTagName("zip")[0].firstChild.data;
				document.getElementById("cpu_warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + responseXML.getElementsByTagName("zip")[0].firstChild.data;
			}

			//Get the warehouse information returned from the AS400 in the call to the freight
			//servlet. This section was added with PN3129.
			var warehouseNoCPU = responseXML.getElementsByTagName("warehouseNoCPU");
			var cpuLookupError = responseXML.getElementsByTagName("CPULookupError");
			var warehouseName = responseXML.getElementsByTagName("warehouseName");
			var warehouseCity = responseXML.getElementsByTagName("warehouseCity");
			var cpuAvailable = responseXML.getElementsByTagName("cpuAvailable");
			var cpuAmount = responseXML.getElementsByTagName("cpuAmount");
			var lower48 = responseXML.getElementsByTagName("lower48");
			var isUS = responseXML.getElementsByTagName("isUS");
			var invalidZip = responseXML.getElementsByTagName("invalidZip");
			var outOfStock = responseXML.getElementsByTagName("outOfStock");
			var installerNum = responseXML.getElementsByTagName("installerNum");
			var installerName = responseXML.getElementsByTagName("installerName");
            var installerDiscountType = responseXML.getElementsByTagName("installerDiscountType");
            var installerDiscountPercent = responseXML.getElementsByTagName("installerDiscountPercent");
			var freePreferred = responseXML.getElementsByTagName("hasFreePreferred");
			var installCost = responseXML.getElementsByTagName("installCost");
			var allGreenInPreferred = responseXML.getElementsByTagName("allGreenInPreferred");
			var installerNumFound = responseXML.getElementsByTagName("installerNumFound");
            var installOverall = responseXML.getElementsByTagName("installOverall");
            var installResponses = responseXML.getElementsByTagName("installResponses");
            var installTopRated = responseXML.getElementsByTagName("installTopRated");
            var showPreferredIcon = responseXML.getElementsByTagName("showPreferredIcon");
            var asapAppointmentDate = responseXML.getElementsByTagName("asapAppointmentDate");
            var daysUntilAppointment = responseXML.getElementsByTagName("daysUntilAppointment");
            var schedulerInfo = responseXML.getElementsByTagName("schedulerInfo");

			if(responseXML.getElementsByTagName("isRecentInstaller").length > 0 && responseXML.getElementsByTagName("isRecentInstaller")[0].firstChild.data == "true"){
				isRecentInstaller = true;
			}
			
			if(responseXML.getElementsByTagName("isMobileInstaller").length > 0 && responseXML.getElementsByTagName("isMobileInstaller")[0].firstChild.data == "true"){
				isMobileInstaller = true;
			}

			if(responseXML.getElementsByTagName("covid19").length > 0 && responseXML.getElementsByTagName("covid19")[0].firstChild != null && responseXML.getElementsByTagName("covid19")[0].firstChild.data != "" && responseXML.getElementsByTagName("covid19")[0].firstChild.data != "X"){
                if(responseXML.getElementsByTagName("covid19")[0].firstChild.data != "0") {
                    isCovidCompliant = true;
                }
                covidLevel = responseXML.getElementsByTagName("covid19")[0].firstChild.data;
            }

            if(responseXML.getElementsByTagName("isSavedInstaller").length > 0 && responseXML.getElementsByTagName("isSavedInstaller")[0].firstChild.data == "true"){
                isSavedInstaller = true;
            }

			var isCanadianTire = false;
			if(responseXML.getElementsByTagName("isCanadianTire").length > 0 && responseXML.getElementsByTagName("isCanadianTire")[0].firstChild.data == "true"){
                isCanadianTire = true;
            }

            var isCanadianShip = false;
            if(responseXML.getElementsByTagName("isCanadianShip").length > 0 && responseXML.getElementsByTagName("isCanadianShip")[0].firstChild.data == "true"){
                isCanadianShip = true;
            }

            var testimonialQuote = "";
            var testimonialCity = "";
            var testimonialState = "";
            if(responseXML.getElementsByTagName("testimonialQuote").length > 0 && responseXML.getElementsByTagName("testimonialQuote")[0].firstChild.data != ""){
                testimonialQuote = responseXML.getElementsByTagName("testimonialQuote")[0].firstChild.data;
            }
            if(responseXML.getElementsByTagName("testimonialCity").length > 0 && responseXML.getElementsByTagName("testimonialCity")[0].firstChild.data != ""){
                testimonialCity = responseXML.getElementsByTagName("testimonialCity")[0].firstChild.data;
            }
            if(responseXML.getElementsByTagName("testimonialState").length > 0 && responseXML.getElementsByTagName("testimonialState")[0].firstChild.data != ""){
                testimonialState = responseXML.getElementsByTagName("testimonialState")[0].firstChild.data;
            }

			var cpuAvail = true;
			var isLower48 = false;
			var cpuAmt = "";

			var zip = "";
			if(responseXML.getElementsByTagName("zip").length > 0){
				zip = responseXML.getElementsByTagName("zip")[0].firstChild.data;
				if(zip.length > 5) $('.affirmCart').addClass('hide');
			}else{
				cpuAvail = false;
				zip = document.getElementById("shipTo_enterZipCode").value;
				if(zip.length > 5) $('.affirmCart').addClass('hide');
			}

			if(cpuAvailable.length > 0){
				cpuAvail = cpuAvailable[0].firstChild.data;
			}

			if(cpuAmount.length > 0){
				cpuAmt = cpuAmount[0].firstChild.data;
			}

			if(lower48.length > 0){
				isLower48 = lower48[0].firstChild.data;
			}

            if(isUS.length > 0){
                isUS = isUS[0].firstChild.data;
            }

			//Hide the zip code box and button if we have a zip code entered.
			if(!hasPostalGC && !$('#pickup').length){
				document.getElementById("shipTo_enterZipCodeDiv").style.display = "none";
			}

			// hide truck icon if not lower48
			if(isLower48=="false") {
				var freeShippingTrucks = document.getElementsByName('freeShippingTruck');
                for(var i = 0; i < freeShippingTrucks.length; i++) {
                    freeShippingTrucks[i].style.display = "none";
                }
			}	
			if(isCanadianTire) {
				var tirepromos = document.getElementsByName('tirepromo');
				for(var i = 0; i < tirepromos.length; i++) {
					tirepromos[i].style.display = "none";
				}
			}
			
			var trackPreferredInstaller = true;
			if(installerNumFound.length > 0 && installerNumFound[0].firstChild.data == "true" && installerNum.length > 0 && installerNum[0].firstChild != null){
				//show preferred installer option
				
				$('#shipTo1-1').val(installerNum[0].firstChild.data);
				$('#shipTo1-Name').val(installerName[0].firstChild.data);
				$('#shipTo1-free').val(freePreferred[0].firstChild.data);
				$('#shipTo1-covidLevel').val(covidLevel);
				$('#installerName').text(installerName[0].firstChild.data);
				if(installCost[0].firstChild.data == "?" || installCost[0].firstChild.data == "need vehicle"){
					$('#vehicleKnown').hide();
					$('#vehicleUnknown').show();
				} else if(installCost[0].firstChild.data == "hide"){
					$('.preferredPriceContainer').hide();
				} else {
					$('#installCost').text(installCost[0].firstChild.data);
				}

				if(isRecentInstaller){
					$('#hasselFree').css({'display':'none'});
					$('#installerLabel').text('Use Your Previous Installer');
					$('#installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + installerNum[0].firstChild.data);
					$('.preferredSmall').text('');
				} else {
					$('#installerLabel').text('Ship to');
					$('#installerName').attr('href', '/installer/InstallerDetail.jsp?preferred=true&ID=' + installerNum[0].firstChild.data);
					if(isMobileInstaller){
						$('#hasselFree').css({'display':''});
						$('.preferredSmall').text('Preferred Mobile Installer');
					} else {
						$('#hasselFree').css({'display':'none'});
						$('.preferredSmall').text('Preferred Installer');
					}
				}
				$('#freeShipping').addClass('hide');
				$('#freePreferredOther').addClass('hide');
				$('#hasselFree').removeClass('shipMobile');
				$('#preferredInstaller').removeClass('hide');
				if($('#column3Div').length) $('#column3Div').addClass('hide');

                //PN7767.
                $('#recomMobileInstaller').find('.freeShippingLi').addClass('hide');
                $('#previousInstaller').find('.freeShippingLi').addClass('hide');
                $('#genericInstaller').find('.freeShippingLi').addClass('hide');
                
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && allGreenInPreferred.length > 0 && allGreenInPreferred[0].firstChild.data == "true"){
					$('#freeShipping').removeClass('hide');
					$('#hasselFree').addClass('shipMobile');
					$('#circleOr').addClass('shipContent');
					$('#shipOr').addClass('shipOr');
					$('#freePreferredOther').removeClass('hide');
					if($('#column3Div').length){
						$('#column3Div').addClass('hide');
					}

                    //PN7767.
                    $('#recomMobileInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#previousInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#genericInstaller').find('.freeShippingLi').removeClass('hide');
				}else if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true"){
					$('#preferredInstaller').addClass('hide');
					$('#shipTo1-1').val("");
					$('#shipTo1-Name').val("");
					$('#shipTo1-free').val("");
					$('#shipTo1-covidLevel').val("");
					$('#shipTo1-1').prop('checked', false);
					$('#shipTo1-2').prop('checked', false);
					if($('#column3Div').length){
						$('#column3Div').removeClass('hide');
					}
					trackPreferredInstaller = false;
				}
                if(schedulerInfo.length > 0 && schedulerInfo[0].firstChild != null && schedulerInfo[0].firstChild.data != null && schedulerInfo[0].firstChild.data != "") {
                    var schedulerData = schedulerInfo[0].firstChild.data.split("|");
                    schedulerShown = schedulerData[0];
                    $('#prefInstaller .installerDisclaimer').addClass('hide');
                    $('#onlineSchedulingNotice').removeClass('hide').data('scheduler',schedulerData[0]).data('installerStore', schedulerData[1]).data('zipCode', schedulerData[2]).data('installerDealerNum', schedulerData[3]);
                    if(schedulerData[4]=="R") {
                        $('#onlineSchedulingNotice div.nextAppointment_subheadline').text('Your appointment is reserved for:');
                        $('#onlineSchedulingNotice a.redGreater').text('Change Your Reservation');
                    }
                    if(schedulerData[4]=="N" || schedulerData[4]=="R") $('#onlineSchedulingNotice div.nextAppointmentTime time').attr('datetime',schedulerData[5]).text(schedulerData[6]).closest('div.nextAppointment').css('display','');
                } else {
                    $('#prefInstaller .installerDisclaimer').removeClass('hide');
                    $('#onlineSchedulingNotice').addClass('hide');
                }
				if($('#column3Div').length) calculateTileHeight();
			} else {
				// hide preferred installer option
				$('#preferredInstaller').addClass('hide');
				$('#shipTo1-1').val("");
				$('#shipTo1-Name').val("");
				$('#shipTo1-free').val("");
				$('#shipTo1-covidLevel').val("");
				$('#shipTo1-1').prop('checked', false);
				$('#shipTo1-2').prop('checked', false);
				if($('#column3Div').length){
					$('#column3Div').removeClass('hide');
					calculateTileHeight();
				}
			}

            //PN7767.
            $('#prefInstaller').addClass('hide');
            $('#altInstaller').addClass('hide');
            $('#genericInstaller').addClass('hide');

            //PN7767 - Remove options if they are already on the page.
            $('#prefInstallerOption').remove();
            $('#altInstallerOption').remove();
            $('#genericInstallerOption').remove();
            $('#addressOption').remove();
            $('#cpuOption').remove();

            var shippingChoice = '';
            var canShowPreferred = false;

            if(showPreferredIcon.length > 0 && showPreferredIcon[0].firstChild.data != null && showPreferredIcon[0].firstChild.data == "true"){
                canShowPreferred = true;
            }

            if(installerNumFound.length > 0 && installerNumFound[0].firstChild.data == "true" && installerNum.length > 0 && installerNum[0].firstChild != null){
                hasPreferredInstaller = true;

                drawPrefInstallerOption(installerName[0].firstChild.data, installerNum[0].firstChild.data, isMobileInstaller, covidLevel);
                if(isMobileInstaller && installerName[0].firstChild.data.indexOf("ASAP") > -1){
                    isMobileInstallerASAP = true;
                    $('#prefIsASAP').val('true');
                }

                //Set radio button values.
                $('#shipTo1-1').val(installerNum[0].firstChild.data);
                $('#shipTo1-Name').val(installerName[0].firstChild.data);
                $('#shipTo1-free').val(freePreferred[0].firstChild.data);
				$('#shipTo1-covidLevel').val(covidLevel);

                $('#prefInstaller').find('.installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + installerNum[0].firstChild.data + (canShowPreferred?'&preferred=true':''));
                $('#prefInstaller').find('.installerName').text(installerName[0].firstChild.data);
                if(installerName[0].firstChild.data.indexOf("ASAP") > -1){
                    $('#prefInstaller').find('.installerTestimonial').removeClass('hide');
                }else{
                    $('#prefInstaller').find('.installerTestimonial').addClass('hide');
                }

                if(installOverall.length > 0 && installOverall[0].firstChild.data != null){
                    $('#prefInstaller').find('.mobStars').remove();
                    $('#prefInstaller').find('.responses').remove();
                    var overall = "N/A";
                    if(installOverall[0].firstChild.data != "" && installOverall[0].firstChild.data != "N/A"){
                        overall = Math.round(parseFloat(installOverall[0].firstChild.data) * 2);
                    }
                    $('#prefInstaller').find('.starRating').removeClass('hide');
                    $('#prefInstaller').find('.starRating').append("<span class=\"mobStars star_" + overall + "\"></span>");
                    if(installResponses.length > 0 && installResponses[0].firstChild != null && installResponses[0].firstChild.data != null && installResponses[0].firstChild.data != ""){
                        $('#prefInstaller').find('.starRatingContainer').append('<span class="responses">(' + installResponses[0].firstChild.data + ')</span>');
                    }
                }

                //Previous Installer Icon
                $('#prefInstaller').find('.prevInst').remove();
                if(isRecentInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon prevInst">Previous Installer</div>');
                }

                //Saved Installer Icon
                $('#prefInstaller').find('.savedInst').remove();
                if(isSavedInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon savedInst">Saved Installer</div>');
                }

                //Preferred and Mobile Installer Icon
                $('#prefInstaller').find('.prefInst').remove();
				$('#prefInstaller').find('.mobInst').remove();
				$('#prefInstaller').find('.mobPref').remove();
				if(canShowPreferred && isMobileInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                   	$('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon mobPref">Preferred Mobile Installer</div>');
                } else if(canShowPreferred){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon prefInst">Preferred Installer</div>');
                } else if(isMobileInstaller){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon mobInst">Mobile Installer</div>');
                }

                //Top Rated Icon
                $('#prefInstaller').find('.tR').remove();
                if(installTopRated.length > 0 && installTopRated[0].firstChild.data != null && installTopRated[0].firstChild.data == "true"){
                    $('#prefInstaller').find('.ratingIcons').removeClass('hide');
                    $('#prefInstaller').find('.ratingIcons').append('<div class="installerIcon tR">Top Rated</div>');
                }

			if(isCovidCompliant) {
                if(isMobileInstaller){
                    if(covidLevel=='3') {
                        if(isMobileInstallerASAP){
                            $('#prefInstaller').find('.blurb').html('ASAP Tire will bring your Tire Rack order to you and install your tires while you wait inside.');
                            if($('#prefInstaller').find('.asapVideo').length == 0){
                                $('#prefInstaller').find('.blurb').after('<a href="/videos/video_modalbox.jsp?video=742" onclick="openInfoBox(this.href, \'Video Center\', \'781\', \'default\'); return false;" class="asapVideo"><img src="/images/css_elements/retail/videoIcon_red.png" width="18">Here\'s How It Works</a>');
                                $('.asapVideo').bind('click touchstart', function(){
                                    linkTracking({linkName: "tr: asap: Here's how it works"});
                                });
                            }
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="https://www.asaptire.com/faq/" class="redGreater">Read More</a></p></div>');
                        }else{
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                        }
                    } else { //mobile but not level 3
                            $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: Protected Installation Pledge</nobr><p></sbold><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                } else { // not mobile
                    if(covidLevel=='2'){
                        $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }else{
                        $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr></sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + covidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                }
            } else if(covidLevel=='0') {
                $('#prefInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/mobile/icon-warning.png" width="22px" height="22px"><div class="noContactPledge"><sbold>This installer has not agreed to follow Tire Rack\'s Protected Installation <br>guidelines to help prevent the spread of COVID-19.</sbold></div>');
			}else if(isRecentInstaller){
				$('#prefInstaller').find('.blurb').text('This installer, saved from your last visit, gets our stamp of approval for your installation needs.');
			}else{
				$('#prefInstaller').find('.blurb').text('This installer gets our stamp of approval for your installation needs.');
			}

                if(showFreeShipping){
                    $('#prefInstaller').find('.freeShippingLi').removeClass('hide');
                }else{
                    $('#prefInstaller').find('.freeShippingLi').addClass('hide');
                }

                if(covidLevel == "3" || isMobileInstallerASAP){
                    $('#prefInstallerOption').find('.shipOptionText').text("YOUR NO-CONTACT MOBILE INSTALLER");
                }else if(isMobileInstaller){
                    $('#prefInstallerOption').find('.shipOptionText').text("YOUR LOCAL MOBILE INSTALLER");
                }else{
                    $('#prefInstallerOption').find('.shipOptionText').text("USE THIS PREFERRED INSTALLER");
                }

                $('#prefInstaller').find('.installationCostLi').addClass('hide');
                if(installCost[0].firstChild.data == "?" || installCost[0].firstChild.data == "need vehicle"){
                    $('#prefInstaller').find('.vehicleKnown').addClass('hide');
                    $('#prefInstaller').find('.vehicleUnknown').removeClass('hide');
                    $('#prefInstaller').find('.installationCostLi').removeClass('hide');
                }else if(installCost[0].firstChild.data == "hide"){
                    setShippingChoice('installer', isMobileInstaller, covidLevel);
                }else{
                    $('#prefInstaller').find('.installationCostLi').removeClass('hide');
                    $('#prefInstaller').find('.installCost').text(installCost[0].firstChild.data);
                    $('#prefInstaller').find('.vehicleKnown').removeClass('hide');
                    $('#prefInstaller').find('.vehicleUnknown').addClass('hide');
                }
                
                if(asapAppointmentDate.length > 0 && asapAppointmentDate[0].firstChild.data != null && asapAppointmentDate[0].firstChild.data != "" && daysUntilAppointment.length > 0 && daysUntilAppointment[0].firstChild.data != null && daysUntilAppointment[0].firstChild.data != "" && daysUntilAppointment[0].firstChild.data < 7){
                    $('#prefInstaller').find('.installerDisclaimer').text('Appointments available as soon as ' + asapAppointmentDate[0].firstChild.data + '.');
                    $('#prefInstaller').find('.installerDisclaimer').removeClass('hide');
                }else if(typeof dateInSevenDays !== 'undefined' && dateInSevenDays !== null && isMobileInstallerASAP){
                    $('#prefInstaller').find('.installerDisclaimer').text('Next appointment available after ' + dateInSevenDays + '.');
                    $('#prefInstaller').find('.installerDisclaimer').removeClass('hide');
                }

                if(isMobileInstallerASAP){
                    if(testimonialQuote != ""){
                        $('#prefInstaller').find('.installerTestimonial').html('<p>"' + testimonialQuote + '"<br><br> - ASAP Tire Customer' + ((testimonialCity != "" && testimonialState != "")?", " + testimonialCity + ", " + testimonialState:"") + '</p><img alt="ASAP Tire Mobile Service Van" src="/images/installers/ASAP_installer_van.jpg" height="74" border="0">');
                    }
                }
            }
            var altInstallerName = "";
            var altInstallerDiscountType = "";
            var altInstallerDiscountPercent = "";
            var altInstallerNum = "";
            var altIsMobile = "";
			var altIsCovidCompliant = "";
            var altCovidLevel = "";
            var altIsRecent = "";
            var altIsSaved = "";
            var altIsTopRated = "";
            var altOverallRating = "";
            var altInstallResponses = "";
            var altInstallerPreferred = "";
            var altInstallerCost = "";
            var altTestimonialQuote = "";
            var altTestimonialCity = "";
            var altTestimonialState = "";
            var altHasFreePreferred = "";
            var altASAPAppointmentDate = "";
            var altDaysUntilAppointment = "";
            var altInstallerIsASAP = false;
            if(altInstaller.length > 0){
                altInstallerName = altInstaller[0].getElementsByTagName("installerName");
                altInstallerDiscountType = altInstaller[0].getElementsByTagName("installerDiscountType");
                altInstallerDiscountPercent = altInstaller[0].getElementsByTagName("installerDiscountPercent");
                altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                altIsMobile = altInstaller[0].getElementsByTagName("isMobileInstaller");
                if(altIsMobile.length > 0 && altIsMobile[0].firstChild.data != null && altIsMobile[0].firstChild.data == "true"){
                    alternateIsMobile = true;
                }
				altIsCovidCompliant = altInstaller[0].getElementsByTagName("covid19");
				if(altIsCovidCompliant.length > 0 && altIsCovidCompliant[0].firstChild != null && altIsCovidCompliant[0].firstChild.data != "" && altIsCovidCompliant[0].firstChild.data != "X"){
                    if(altIsCovidCompliant[0].firstChild.data != "0"){
                        alternateIsCovidCompliant = true;
                    }
                    altCovidLevel = altIsCovidCompliant[0].firstChild.data;
                }	
                altIsRecent = altInstaller[0].getElementsByTagName("isRecentInstaller");
                if(altIsRecent.length > 0 && altIsRecent[0].firstChild.data != null && altIsRecent[0].firstChild.data == "true"){
                    alternateIsRecent = true;
                }
                altIsSaved = altInstaller[0].getElementsByTagName("isSavedInstaller");
                if(altIsSaved.length > 0 && altIsSaved[0].firstChild.data != null && altIsSaved[0].firstChild.data == "true"){
                    alternateIsSaved = true;
                }
                altIsTopRated = altInstaller[0].getElementsByTagName("isTopRated");
                altOverallRating = altInstaller[0].getElementsByTagName("overallRating");
                altInstallResponses = altInstaller[0].getElementsByTagName("installResponses");
                altInstallerPreferred = altInstaller[0].getElementsByTagName("installerPreferred");
                altInstallCost = altInstaller[0].getElementsByTagName("installCost");
                if(altInstaller[0].getElementsByTagName("testimonialQuote").length > 0 && altInstaller[0].getElementsByTagName("testimonialQuote")[0].firstChild.data != ""){
                    altTestimonialQuote = altInstaller[0].getElementsByTagName("testimonialQuote")[0].firstChild.data;
                }
                if(altInstaller[0].getElementsByTagName("testimonialCity").length > 0 && altInstaller[0].getElementsByTagName("testimonialCity")[0].firstChild.data != ""){
                    altTestimonialCity = altInstaller[0].getElementsByTagName("testimonialCity")[0].firstChild.data;
                }
                if(altInstaller[0].getElementsByTagName("testimonialState").length > 0 && altInstaller[0].getElementsByTagName("testimonialState")[0].firstChild.data != ""){
                    altTestimonialState = altInstaller[0].getElementsByTagName("testimonialState")[0].firstChild.data;
                }
                altHasFreePreferred = altInstaller[0].getElementsByTagName("hasFreePreferred");
                altASAPAppointmentDate = altInstaller[0].getElementsByTagName("asapAppointmentDate");
                altDaysUntilAppointment = altInstaller[0].getElementsByTagName("daysUntilAppointment");
            }
			if(altInstaller.length > 0 && altInstallerNum.length > 0 && altInstallerNum[0].firstChild.data != null && ((installerNum.length == 0 || installerNum[0].firstChild == null) || (installerNum.length > 0 && installerNum[0].firstChild != null && installerNum[0].firstChild.data != altInstallerNum[0].firstChild.data))){
                hasAlternateInstaller = true;
                drawAltInstallerOption(alternateIsSaved, alternateIsMobile, altCovidLevel);

                if(altInstallerName[0].firstChild.data.indexOf("ASAP") > -1){
                    altInstallerIsASAP = true;
                    $('#altIsASAP').val('true');
                }

                if(alternateIsRecent){
                    $('#altInstaller').find('.installerLabel').html('<strong>Your previous installer is shown below.</strong><span>You can always choose a different installer on the next page.</span>');
                }else if(alternateIsSaved){
                    $('#altInstaller').find('.installerLabel').html('<strong>Your saved installer is shown below.</strong><span>You can always choose a different installer on the next page.</span>');
                }

                //Set radio button values.
                $('#shipTo2-1').val(altInstallerNum[0].firstChild.data);
                $('#shipTo2-Name').val(altInstallerName[0].firstChild.data);
                $('#shipTo2-free').val(altHasFreePreferred[0].firstChild.data);
				$('#shipTo2-covidLevel').val(altCovidLevel);

                $('#altInstaller').find('.installerName').attr('href', '/installer/InstallerDetail.jsp?ID=' + altInstallerNum[0].firstChild.data);
                $('#altInstaller').find('.installerName').text(altInstallerName[0].firstChild.data);

                if(altOverallRating.length > 0 && altOverallRating[0].firstChild.data != null){
                    $('#altInstaller').find('.recStars').remove();
                    $('#altInstaller').find('.responses').remove();
                    var overall = "N/A";
                    if(altOverallRating[0].firstChild.data != "" && altOverallRating[0].firstChild.data != "N/A"){
                        overall = Math.round(parseFloat(altOverallRating[0].firstChild.data) * 2);
                    }
                    $('#altInstaller').find('.starRating').removeClass('hide');
                    $('#altInstaller').find('.starRating').append("<span class=\"recStars star_" + overall + "\"></span>");
                    if(altInstallResponses[0].firstChild != null && altInstallResponses[0].firstChild.data != null && altInstallResponses[0].firstChild.data != ""){
						$('#altInstaller').find('.starRatingContainer').append('<span class="responses">(' + altInstallResponses[0].firstChild.data + ')</span>');
                    }
                }

                //Top Rated Icon
                $('#altInstaller').find('.tR').remove();
                if(altIsTopRated.length > 0 && altIsTopRated[0].firstChild.data != null && altIsTopRated[0].firstChild.data == "true"){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon tR">Top Rated</div>');
                }

                //Mobile Installer Icon
                $('#altInstaller').find('.mobInst').remove();
                if(alternateIsMobile){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon mobInst">Mobile Installer</div>');
                }
				
				//Saved Installer Icon
                $('#altInstaller').find('.savedInst').remove();
                if(alternateIsSaved){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon savedInst">Saved Installer</div>');
                }

                //Previous Installer Icon
                $('#altInstaller').find('.prevInst').remove();
                if(alternateIsRecent){
                    $('#altInstaller').find('.ratingIcons').removeClass('hide');
                    $('#altInstaller').find('.ratingIcons').append('<div class="installerIcon prevInst">Previous Installer</div>');
                }

			if(alternateIsCovidCompliant){
                if(alternateIsMobile){
                    if(altCovidLevel=='3'){
                        if(altInstallerIsASAP){
                            $('#altInstaller').find('.blurb').html('ASAP Tire will bring your Tire Rack order to you and install your tires while you wait inside.');
                            if($('#altInstaller').find('.asapVideo').length == 0){
                                $('#altInstaller').find('.blurb').after('<a href="/videos/video_modalbox.jsp?video=742" onclick="openInfoBox(this.href, \'Video Center\', \'781\', \'default\'); return false;" class="asapVideo"><img src="/images/css_elements/retail/videoIcon_red.png" width="18">Here\'s How It Works</a>');
                                $('.asapVideo').bind('click touchstart', function(){
                                    linkTracking({linkName: "tr: asap: Here's how it works"});
                                });
                            }
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="https://www.asaptire.com/faq/" class="redGreater">Read More</a></p></div>');
                        } else {
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Mobile Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                        }
                    } else { //mobile but not level 3
                            $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: Protected Installation Pledge</nobr><p></sbold><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                } else { // not mobile
                    if(altCovidLevel=='2'){
                        $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>No-Contact</nobr> Installation Pledge</sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    } else {
                        $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/socDistance.svg" width="22px" height="22px"><div class="noContactPledge"><sbold>COVID-19: <nobr>Protected Installation Pledge</nobr></sbold><p><a target="_blank" href="/installer/modalCovid19.jsp?level=' + altCovidLevel + '" onclick="openInfoBox(this.href,\'\',\'550\',\'default\',\'\');return false;" class="redGreater">Read More</a></p></div>');
                    }
                }
            } else if(altCovidLevel=='0') {
                $('#altInstaller').find('.installerPledge').html('<img src="/images/css_elements/retail/mobile/icon-warning.png" width="22px" height="22px"><div class="noContactPledge"><sbold>This installer has not agreed to follow Tire Rack\'s Protected Installation <br>guidelines to help prevent the spread of COVID-19.</sbold></div>');
			}else if(alternateIsRecent){
				$('#altInstaller').find('.blurb').text('This installer, saved from your last visit, gets our stamp of approval for your installation needs.');
			}else if(alternateIsSaved){
				$('#altInstaller').find('.blurb').text('You previously saved this installer to your account. They\'ll be happy to handle your installation needs for this order.');
			}

				if(showFreeShipping){
                    $('#altInstaller').find('.freeShippingLi').removeClass('hide');
                }else{
                    $('#altInstaller').find('.freeShippingLi').addClass('hide');
                }

                $('#altInstallerOption').find('.shipOptionText').text("SHIP TO A RECOMMENDED INSTALLER");

                $('#altInstaller').find('.installationCostLi').addClass('hide');
                if(altInstallCost[0].firstChild.data == "?" || altInstallCost[0].firstChild.data == "need vehicle"){
                    $('#altInstaller').find('.vehicleKnown').addClass('hide');
                    $('#altInstaller').find('.vehicleUnknown').removeClass('hide');
                    $('#altInstaller').find('.installationCostLi').removeClass('hide');
                }else if(altInstallCost[0].firstChild.data == "hide"){
                    setShippingChoice('installer', alternateIsMobile, altCovidLevel);
                }else{
                    $('#altInstaller').find('.installationCostLi').removeClass('hide');
                    $('#altInstaller').find('.installCost').text(altInstallCost[0].firstChild.data);
                    $('#altInstaller').find('.vehicleKnown').removeClass('hide');
                    $('#altInstaller').find('.vehicleUnknown').addClass('hide');
                }

                if(altASAPAppointmentDate.length > 0 && altASAPAppointmentDate[0].firstChild.data != null && altASAPAppointmentDate[0].firstChild.data != "" && altDaysUntilAppointment.length > 0 && altDaysUntilAppointment[0].firstChild.data != null && altDaysUntilAppointment[0].firstChild.data != "" && altDaysUntilAppointment[0].firstChild.data < 7){
                    $('#altInstaller').find('.installerDisclaimer').text('Appointments available as soon as ' + altASAPAppointmentDate[0].firstChild.data + '.');
                    $('#altInstaller').find('.installerDisclaimer').removeClass('hide');
                }else if(typeof dateInSevenDays !== 'undefined' && dateInSevenDays !== null && altInstallerIsASAP){
                    $('#altInstaller').find('.installerDisclaimer').text('Next apointment available after ' + dateInSevenDays + '.');
                    $('#altInstaller').find('.installerDisclaimer').removeClass('hide');
				}

                if(altInstallerIsASAP){
                    if(altTestimonialQuote != ""){
                        $('#altInstaller').find('.installerTestimonial').html('<p>"' + altTestimonialQuote + '"<br> - ASAP Tire Customer' + ((altTestimonialCity != "" && altTestimonialState != "")?", " + altTestimonialCity + ", " + altTestimonialState:"") + '</p><img alt="ASAP Tire Mobile Service Van" src="/images/installers/ASAP_installer_van.jpg" height="74" border="0">');
                    }
                }
            }else{
                drawInstallerOption();

                if(showFreeShipping){
                    $('#genericInstaller').find('.freeShippingLi').removeClass('hide');
                    $('#genericInstallerOption').find('.shipOptionText').text('SHIP TO A RECOMMENDED INSTALLER');
                }else{
                    $('#genericInstaller').find('.freeShippingLi').addClass('hide');
                    $('#genericInstallerOption').find('.shipOptionText').text('SHIP TO A RECOMMENDED INSTALLER');
                }
            }

            //Decide if we need to set an installer as the chosen option.
            if($('#shipTo').val() == 'installer'){
                if(hasPreferredInstaller && hasAlternateInstaller){
                    if($('#installerChoice').val() == 'alternate'){
                        shippingChoice = 'altInstaller';
                    }else{
                        shippingChoice = 'prefInstaller';
                    }
                }else if(hasAlternateInstaller && $('#installerChoice').val() != 'generic'){
                    shippingChoice = 'altInstaller';
                }else if(hasPreferredInstaller && $('#installerChoice').val() != 'generic'){
                    shippingChoice = 'prefInstaller';
                }
            }

            drawAddressOption();
            if(showFreeShipping){
                $('#addressContainer').find('.shipCostLi').removeClass('hide');
                $('#addressContainer').find('.shipCost').text('FREE');
                $('#addressOption').find('.freeShipText').removeClass('hide');
            }else{
                $('#addressContainer').find('.shipCostLi').addClass('hide');
                $('#addressOption').find('.freeShipText').addClass('hide');
            }
            if($('#shipTo').val() == 'address'){
                shippingChoice = 'address';
            }
            drawCPUOption(showFreeShippingCPU);
            if($('#shipTo').val() == 'CPU'){
                shippingChoice = 'cpu';
            }

            //Set the shipping choice in the holding area.
            if(shippingChoice == "prefInstaller"){
                setShippingChoice(shippingChoice, isMobileInstaller, covidLevel);
            }else if(shippingChoice == "altInstaller"){
                setShippingChoice(shippingChoice, alternateIsMobile, altCovidLevel);
            }else{
                setShippingChoice(shippingChoice, false, '');
            }
            //End PN7767.

			var mobileSelection = "";
			if(document.getElementById("shipTo").value == "installer"){
				var recMobile = document.getElementsByName("recommendedMobile");
				for(var i = 0; i < recMobile.length; i++) {
					if(recMobile[i].checked == true) {
					    if(recMobile[i].value!="" && recMobile[i].value!="installer")
						mobileSelection = "Y";
					}
				}
			}

			//Enable the third option, if it has not already been enabled.
			if($('#pickup').length && !hasPostalGC){
				$('#pickup').bind('click touchstart', addClickEventToPickup);
			}
			if(document.getElementById("noZipEntered") && document.getElementById("noZipEntered").disabled){
				document.getElementById("noZipEntered").removeAttribute("disabled");
			}
			if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true") {
				$('#freePreferredOther').removeClass('hide');
                if(document.getElementById("installerFreight") != null){
    				document.getElementById("installerFreight").firstChild.data = responseXML.getElementsByTagName("freightOnly")[0].firstChild.data;
                }
			}

			if(warehouseNoCPU.length > 0 || cpuLookupError.length > 0 || invalidZip.length > 0 || /*outOfStock.length > 0 ||*/ cpuAvail == "false" || isLower48 == "false"){
				cpuAvailabilityChecked = 'no';

				//Disable option to select a warehouse
				//If CPU is selected, reset to a different selection.
				if($('#pickup').hasClass('shipPickupContainerActive')){
					$('#pickup').removeClass('shipPickupContainerActive');
					$('#shipTo').val('installer');

					$('#installer').addClass('shipInstallContainerActive');
					$('#shipToRecomMobileInstaller').addClass('enabled');
					$('#shipToRecomMobileInstaller').find("input[type='radio']").prop('checked', true).addClass('selected');
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
						$('#freePreferredOther').removeClass('hide');
						document.getElementById("installerFreight").firstChild.data = responseXML.getElementsByTagName("freight")[0].firstChild.data;
						document.getElementById("freight").style.display = "none";
						document.getElementById("freeFreight").style.display = "inline";

                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
                        $('.shipCostLi').removeClass('hide');
					}
				}
                shipCPUEvent = "false";
				$('#pickup').unbind('click touchstart', addClickEventToPickup);

				if(!$('#distrText').hasClass('disabledTxt')){
					$('#distrText').hide();
				}

                //Select different option, if CPU is selected. PN7767.
                if($('#cpuOption').hasClass('Selected') && $('#CPU').hasClass('enabled')){
                    if(hasPreferredInstaller){
                        $('#shipTo').val('installer');

                        setShippingChoice('prefInstaller', isMobileInstaller, covidLevel);
                    }else if(hasAlternateInstaller){
                        $('#shipTo').val('installer');

                        setShippingChoice('altInstaller', alternateIsMobile, altCovidLevel);
                    }else{
                        $('#shipTo').val('installer');

                        setShippingChoice('installer', false, '');
                    }
                }

				document.getElementById("noZipEntered").disabled = true;
				document.getElementById("warehouseNotFound").style.display = "inline";
				if($('#pickup').length){
					$('#pickup').removeClass('shipPickupContainer');
					$('#pickup').addClass('shipPickupContainerNotAvail');
					$('#shipTo_enterZipCode').removeClass('success');
					$('#shipTo_enterZipCode').val('');
					$('#shipTo_enterZipCode').attr('disabled', 'true');
					$('#shipTo_enterZipCodeDiv').hide();
				}
				document.getElementById("warehouseFound").style.display = "none";
				document.getElementById("cpuDiscount").style.display = "none";
                $('.cpuDiscountLi').addClass('hide');

				document.getElementById("warehouseNotFound_zip").firstChild.data = zip;
				document.getElementById("warehouseNotFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + zip;

				calculateTileHeight();

                //Disable new CPU option. PN7767.
                $('#cpuOption').addClass('shipPickupContainerNotAvail');
                $('#cpuOption').find('.shipOptionText').text('ORDER PICK-UP NOT AVAILABLE');
                $('#CPU').css('pointer-events', 'none');
			}else{
				if(!hasPostalGC){
					//A warehouse was found.
					//if($('#pickup').length){
					//	$('#pickup').bind('click touchstart', addClickEventToPickup);
					//	$('#pickup').addClass('shipPickupContainer');
					//	$('#pickup').removeClass('shipPickupContainerNotAvail');
					//}

                    //PN7767. Enable CPU option.
                    //$('#cpuOption').removeClass('shipPickupContainerNotAvail');
                    //if(showFreeShippingCPU){
                    //    $('#cpuOption').find('.shipOptionText').text('');
                    //    $('#cpuOption').find('.shipOptionText').append('GET A<span class="cpuAmtNew"> </span>ORDER PICK-UP DISCOUNT');
                    //}else{
                    //    $('#cpuOption').find('.shipOptionText').text('PICK UP MY ORDER');
                    //}
                    //$('#CPU').css('pointer-events', 'auto');

					document.freightCheck.warehouseZip.value = responseXML.getElementsByTagName("warehouseZip")[0].firstChild.data;
					document.freightCheck.warehouseID.value = responseXML.getElementsByTagName("warehouseID")[0].firstChild.data;

					//document.getElementById("noZipEntered").style.display = "none";
					//document.getElementById("warehouseNotFound").style.display = "none";

					if($('.pickUp').length){
						$('#distrText').show();
					}

					document.getElementById("warehouseFound_zip").firstChild.data = zip;
					document.getElementById("warehouseFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + zip;

					//Warehouse information link.
					var warehouseLink = document.getElementById("warehouseInfoLink");
					var warehouseLinkForCPU = document.getElementById("cpu_warehouseInfoLink");
					var warehouseAddtlInfo = responseXML.getElementsByTagName("warehouseAddtlInfo");
					var linkText = "";
					if(warehouseName.length > 0){
						linkText += warehouseName[0].firstChild.data;
					}
					if(warehouseAddtlInfo.length > 0 && warehouseAddtlInfo[0].firstChild != null){
						document.getElementById("warehouseAddtlInfo").innerHTML = " " + warehouseAddtlInfo[0].firstChild.data + ".";
					}else{
						document.getElementById("warehouseAddtlInfo").innerHTML = ".";
					}
					warehouseLink.innerHTML = linkText;
					warehouseLinkForCPU.innerHTML = linkText;
					$('#shipTo_enterZipCode').addClass('success');

					calculateTileHeight();
				}
			}
			//End warehouse data retrieval for PN3129.

			if(noDeliveryDate.length > 0 && noDeliveryDate[0].firstChild.data == "true"){
				showHideHowSoonIds(howSoonIdArray, false);
				showHideDeliveryDates(deliveryDateArray, false);
				showHideDeliveryDateText(deliveryDateTextArray, false);
				document.getElementById("showOpenParen").style.display = "inline";
				document.getElementById("showCloseParen").style.display = "inline";
			}else{
				showHideHowSoonIds(howSoonIdArray, false);
				var delivery = responseXML.getElementsByTagName("delDate")[0].firstChild.data;
				for(var i=0; i<deliveryDateArray.length; i++){
					if(deliveryDateArray[i].firstChild != null){
					    var deltxt = document.createTextNode("");
					    var strong = document.createElement("SBOLD");
					    deltxt.data = delivery;
					    strong.appendChild(deltxt);
					    deliveryDateArray[i].removeChild(deliveryDateArray[i].firstChild);
					    deliveryDateArray[i].appendChild(strong);
					}
				}
				showHideDeliveryDates(deliveryDateArray, true);
				showHideDeliveryDateText(deliveryDateTextArray, true);
				document.getElementById("showOpenParen").style.display = "inline";
				document.getElementById("showCloseParen").style.display = "inline";
			}

			document.getElementById("newzip").firstChild.data = responseXML.getElementsByTagName("zip")[0].firstChild.data;
			if($("#shipTo_enterZipCode").length){
				document.getElementById("shipTo_enterZipCode").value = responseXML.getElementsByTagName("zip")[0].firstChild.data;
			}

			if($('#enteredzip').length) $('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + responseXML.getElementsByTagName("zip")[0].firstChild.data);
			if($('#enteredzipPending').length) $('#enteredzip').attr('href', '/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=' + responseXML.getElementsByTagName("zip")[0].firstChild.data);

			if(qualifyFreeShip.length > 0 && qualifyFreeShip[0].firstChild.data == "true") {
				var freeShipSpans = document.getElementsByName('freeShip');
				for(var i = 0; i < freeShipSpans.length; i++) {
					freeShipSpans[i].style.display = "block";
				}
			}else{
				var freeShipSpans = document.getElementsByName('freeShip');
				for(var i = 0; i < freeShipSpans.length; i++) {
					freeShipSpans[i].style.display = "none";
				}
			}

			if(lower48.length>0 && lower48[0].firstChild.data=="true" && document.freightCheck.warehouseZip && document.freightCheck.warehouseZip.value != "" && document.freightCheck.warehouseID && document.freightCheck.warehouseID.value != ""){
				//Lookup the values for CPU.
				lookupCPU(hasFreePreferred, responseXML);
			}else{
				if(lower48.length>0 && lower48[0].firstChild.data=="true"){
				    if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						document.getElementById("freeFreight").style.display = "inline";
						document.getElementById("freight").style.display = "none";
                        
                        //PN7767
                        $('.shipCostLi').find('.shipCost').text('FREE');
                        $('.shipCostLi').removeClass('hide');

						document.getElementById("orderTotal").style.display = "block";
						document.getElementById("orderTotalNoFreight").style.display = "none";
						document.getElementById("orderTotalPlusFreight").style.display = "none";
				    } else {
						document.getElementById("freight").firstChild.data = responseXML.getElementsByTagName("freightOnly")[0].firstChild.data;

                        //PN7767
                        if(responseXML.getElementsByTagName('freightOnly')[0].firstChild.data == "$0.00" || responseXML.getElementsByTagName('freightOnly')[0].firstChild.data == "N/A"){
                            $('.shipCostLi').find('.shipCost').text('FREE');
                        }else{
                            $('.shipCostLi').find('.shipCost').text(responseXML.getElementsByTagName('freightOnly')[0].firstChild.data);
                        }
				    }
                    if(document.getElementById("installerFreight")){
				        document.getElementById("installerFreight").firstChild.data = responseXML.getElementsByTagName("freightOnly")[0].firstChild.data;
                    }
                    //Updated with PN7767.
                    $('#taxes').text(responseXML.getElementsByTagName('taxes')[0].firstChild.data);
                    $('#taxesLi').text(responseXML.getElementsByTagName('taxes')[0].firstChild.data);
                    $('#fees').text(responseXML.getElementsByTagName('fees')[0].firstChild.data);
                    $('#feesLi').text(responseXML.getElementsByTagName('fees')[0].firstChild.data);
                    $('#exciseLi').text(responseXML.getElementsByTagName('exciseTax')[0].firstChild.data);
					if(responseXML.getElementsByTagName("cpuAmount").length > 0){
                        $('#cpuDiscountAmt').text('-' + responseXML.getElementsByTagName('cpuAmount')[0].firstChild.data);
                        $('#cpuDiscountAmtLi').text('-' + responseXML.getElementsByTagName('cpuAmount')[0].firstChild.data);
					}
				}else{
					document.getElementById("freight").firstChild.data = responseXML.getElementsByTagName("freightOnly")[0].firstChild.data;
                    $('#installerFreight').text(responseXML.getElementsByTagName("freightOnly")[0].firstChild.data);

                    //PN7767
                    if(responseXML.getElementsByTagName('freight')[0].firstChild.data == "$0.00" || responseXML.getElementsByTagName('freight')[0].firstChild.data == "N/A"){
                        $('.shipCostLi').find('.shipCost').text('FREE');
                    }else{
                        $('.shipCostLi').find('.shipCost').text(responseXML.getElementsByTagName('freightOnly')[0].firstChild.data);
                    }

                    if(responseXML.getElementsByTagName('exciseTax').length > 0){
                        $('#exciseLi').text(responseXML.getElementsByTagName('exciseTax')[0].firstChild.data);
                    }
                    if(!isCanadianShip){
                        $('#taxes').text(responseXML.getElementsByTagName('taxes')[0].firstChild.data);
                        $('#taxesLi').text(responseXML.getElementsByTagName('taxes')[0].firstChild.data);
                        $('#fees').text(responseXML.getElementsByTagName('fees')[0].firstChild.data);
                        $('#feesLi').text(responseXML.getElementsByTagName('fees')[0].firstChild.data);
                    }else{
                        if(responseXML.getElementsByTagName("canHST").length > 0){
                            $('#canHSTLi').text(responseXML.getElementsByTagName("canHST")[0].firstChild.data);
                        }
                        if(responseXML.getElementsByTagName("canGST").length > 0){
                            $('#canGSTLi').text(responseXML.getElementsByTagName("canGST")[0].firstChild.data);
                        }
                        if(responseXML.getElementsByTagName("canPST").length > 0){
                            $('#canPSTLi').text(responseXML.getElementsByTagName("canPST")[0].firstChild.data);
                        }
                        if(responseXML.getElementsByTagName("canDuty").length > 0){
                            $('#canDutyLi').text(responseXML.getElementsByTagName("canDuty")[0].firstChild.data);
                        }
                        if(responseXML.getElementsByTagName("canLevy").length > 0){
                            $('#canLevyLi').text(responseXML.getElementsByTagName("canLevy")[0].firstChild.data);
                        }
                        if(responseXML.getElementsByTagName("canBroker").length > 0){
                            $('#canBrokerLi').text(responseXML.getElementsByTagName("canBroker")[0].firstChild.data);
                        }
                    }
				}
				document.getElementById("taxesFeesIncluded").style.display = "block";

				document.getElementById("orderTotal").firstChild.data = responseXML.getElementsByTagName("orderTotal")[0].firstChild.data;
				//add freight to order total
				//no free preferred for canadian
				//if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {

					//document.getElementById("orderTotalPlusFreight").firstChild.data = responseXML.getElementsByTagName("orderTotalPlusFreightNoDisc")[0].firstChild.data;
				//} else {
					document.getElementById("orderTotalPlusFreight").firstChild.data = responseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data;

				//}

				//hide initial order total and display one with freight added
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
					document.getElementById("orderTotal").style.display = "block";
					document.getElementById("orderTotalNoFreight").style.display = "none";
					document.getElementById("orderTotalPlusFreight").style.display = "none";
					setAffirmPrice(responseXML.getElementsByTagName("orderTotal")[0].firstChild.data);
				} else {
					document.getElementById("orderTotal").style.display = "none";
					document.getElementById("orderTotalNoFreight").style.display = "none";
					document.getElementById("orderTotalPlusFreight").style.display = "block";
					setAffirmPrice(responseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data);
				}
				//hide "Pending" and display freight
				$('.cartPriceSec').find('.selectShipping').hide();
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
					document.getElementById("freeFreight").style.display = "inline";
					document.getElementById("freight").style.display = "none";

                    //PN7767
                    $('.shipCostLi').find('.shipCost').text('FREE');
                    $('.shipCostLi').removeClass('hide');
				} else {
					document.getElementById("freeFreight").style.display = "none";
					document.getElementById("freight").style.display = "inline";

                    //PN7767
                    $('.shipCostLi').removeClass('hide');
				}

				//hide original zip and display newly entered/submitted zip
				//document.getElementById("zipfield").style.display = "none";
				document.getElementById("enteredzip").style.display = "inline";

				//hide the rebate if one has been previously applied. It will be displayed
				//down below if it still applies.
                if(document.getElementById("rebateText") != null){
				    document.getElementById("rebateText").style.display = "none";
                }
				var rebateText = document.getElementById("rebateTextJS");
				if(rebateText.childNodes[0]){
					rebateText.removeChild(rebateText.childNodes[0]);
				}
				document.getElementById("rebateTextJS").style.display = "none";
                if(document.getElementById("rebateAddtlText") != null){
				    document.getElementById("rebateAddtlText").style.display = "none";
                }
				var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
                if(rebateAddtlText != null){
				    if(rebateAddtlText.childNodes[0]){
					    rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
				    }
				    document.getElementById("rebateAddtlTextJS").style.display = "none";
                }
				document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
				document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
				document.getElementById("orderTotalMinusPromo").style.display = "none";
				document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

				if(lower48.length>0 && lower48[0].firstChild.data=="true") {
					//if lower 48 show tax and fees line. Updated with PN7767.
					document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    $('#taxRow').css('display', 'inline');
                    $('#taxes').css('display', 'inline');
                    $('#taxRowLi').removeClass('hide');
                    $('#taxesLi').removeClass('hide');
					if($('#shipTo').length && $('#shipTo').value == "CPU" && responseXML.getElementsByTagName("cpuAmount").length>0 && responseXML.getElementsByTagName("cpuAmount")[0].firstChild.data != ""){
                        $('#cpuDiscountRow').css('display', 'inline');
                        $('#cpuDiscountAmt').css('display', 'inline');
                        $('#cpuDiscountRowLi').removeClass('hide');
                        $('#cpuDiscountAmtLi').removeClass('hide');
					} else {
                        $('#cpuDiscountRow').css('display', 'none');
                        $('#cpuDiscountAmt').css('display', 'none');
                        $('#cpuDiscountRowLi').addClass('hide');
                        $('#cpuDiscountAmtLi').addClass('hide');
					}
                    $('#feeRow').css('display', 'inline');
                    $('#feeRowLi').removeClass('hide');
                    $('#fees').css('display', 'inline');
                    $('#feesLi').removeClass('hide');
                    if(responseXML.getElementsByTagName("exciseTax").length > 0 && responseXML.getElementsByTagName("exciseTax")[0].firstChild.data != "$0.00"){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
				}else{
                    document.getElementById("includeTaxFees").style.display = "none";
                    $('#taxesFeesIncluded').hide();
                    if(responseXML.getElementsByTagName('exciseTax').length > 0 && responseXML.getElementsByTagName('exciseTax')[0].firstChild.data != '$0.00'){
                        $('#exciseRowLi').removeClass('hide');
                        $('#exciseLi').removeClass('hide');
                    }else{
                        $('#exciseRowLi').addClass('hide');
                        $('#exciseLi').addClass('hide');
                    }
                    if(!isCanadianShip){
                        $('#taxRow').css('display', 'inline');
                        $('#taxes').css('display', 'inline');
                        $('#taxRowLi').removeClass('hide');
                        $('#taxesLi').removeClass('hide');

                        $('#feeRow').css('display', 'inline');
                        $('#fees').css('display', 'inline');
                        $('#feeRowLi').removeClass('hide');
                        $('#feesLi').removeClass('hide');
                    }else{
                        if(responseXML.getElementsByTagName("canHST").length > 0 && responseXML.getElementsByTagName("canHST")[0].firstChild.data != "$0.00"){
                            $('#canHSTRowLi').removeClass('hide');
                            $('#canHSTLi').removeClass('hide');
                        }else{
                            $('#canHSTRowLi').addClass('hide');
                            $('#canHSTLi').addClass('hide');
                        }

                        if(responseXML.getElementsByTagName("canGST").length > 0 && responseXML.getElementsByTagName("canGST")[0].firstChild.data != "$0.00"){
                            $('#canGSTRowLi').removeClass('hide');
                            $('#canGSTLi').removeClass('hide');
                        }else{
                            $('#canGSTRowLi').addClass('hide');
                            $('#canGSTLi').addClass('hide');
                        }

                        if(responseXML.getElementsByTagName("canPST").length > 0){
                            $('#canPSTRowLi').removeClass('hide');
                            $('#canPSTLi').removeClass('hide');
                        }else{
                            $('#canPSTRowLi').addClass('hide');
                            $('#canPSTLi').addClass('hide');
                        }

                        if(responseXML.getElementsByTagName("canDuty").length > 0){
                            $('#canDutyRowLi').removeClass('hide');
                            $('#canDutyLi').removeClass('hide');
                        }else{
                            $('#canDutyRowLi').addClass('hide');
                            $('#canDutyLi').addClass('hide');
                        }

                        if(responseXML.getElementsByTagName("canLevy").length > 0){
                            $('#canLevyRowLi').removeClass('hide');
                            $('#canLevyLi').removeClass('hide');
                        }else{
                            $('#canLevyRowLi').addClass('hide');
                            $('#canLevyLi').addClass('hide');
                        }

                        if(responseXML.getElementsByTagName("canBroker").length > 0){
                            $('#canBrokerRowLi').removeClass('hide');
                            $('#canBrokerLi').removeClass('hide');
                        }else{
                            $('#canBrokerRowLi').addClass('hide');
                            $('#canBrokerLi').addClass('hide');
                        }
                    }

                    $('#cpuDiscountRow').css('display', 'none');
                    $('#cpuDiscountAmt').css('display', 'none');
                    $('#cpuDiscountRowLi').addClass('hide');
                    $('#cpuDiscountAmtLi').addClass('hide');
                }
				//begin display rebate total (if one has been applied)
				if(havePromo.length > 0){
					var orderTotalPlusFreightMinusPromo = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
					var orderTotalPlusFreightMinusPromo_data = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data; 
					
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreightMinusPromo = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data);
						orderTotalPlusFreightMinusPromo_data = responseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data;
					}
					var orderTotalMinusPromo = document.createTextNode(responseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data);
					var orderTotalMinusPromo_data = responseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data;
					var promoCode = responseXML.getElementsByTagName("promoCode")[0].firstChild.data;
					var multipleRebates = responseXML.getElementsByTagName("multipleRebates")[0].firstChild.data;
					var brandedCardName = "";
                    if(responseXML.getElementsByTagName("brandedCardName").length > 0 && responseXML.getElementsByTagName("brandedCardName")[0].firstChild != null && responseXML.getElementsByTagName("brandedCardName")[0].firstChild.data != ""){
                        brandedCardName = responseXML.getElementsByTagName("brandedCardName")[0].firstChild.data; 
                    }
					var brandedCardLandingPage = "";
                    if(responseXML.getElementsByTagName("brandedCardLandingPage").length > 0 && responseXML.getElementsByTagName("brandedCardLandingPage")[0].firstChild != null && responseXML.getElementsByTagName("brandedCardLandingPage")[0].firstChild.data != ""){
                        brandedCardLandingPage = responseXML.getElementsByTagName("brandedCardLandingPage")[0].firstChild.data; 
                    }
					var promoCCOnly = "";
                    if(responseXML.getElementsByTagName("promoCCOnly").length > 0 && responseXML.getElementsByTagName("promoCCOnly")[0].firstChild != null && responseXML.getElementsByTagName("promoCCOnly")[0].firstChild.data != ""){
                        promoCCOnly = responseXML.getElementsByTagName("promoCCOnly")[0].firstChild.data; 
                    }

					//console.log("freight.js block 2");
                    if($('#rebateTextJS').length){
						$('#rebateTextJS').html('');
						if(multipleRebates.length > 4 ){

							if(promoCCOnly.length > 0){
		
								$('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');
	
								var link = document.createElement('a');
								link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
								link.appendChild(document.createTextNode("Mail-In Rebate"));
	
								$('#rebateTextJS').append(link).append(': ');
	
							} else {
								$('#rebateTextJS').append('Price After ');
			
								var link = document.createElement('a');
								link.href="/specialoffers/details.jsp?promoID=" + promoCode;
								link.appendChild(document.createTextNode("Mail-In Rebate"));
	
							 $('#rebateTextJS').append(link).append(': ');
							}
						}else{
							$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
						}
                    }

					document.getElementById("orderTotalMinusPromo").appendChild(orderTotalMinusPromo);
					document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						document.getElementById("orderTotalMinusPromo").style.display = "block";
						document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
						setAffirmPrice(orderTotalMinusPromo_data);
					} else {
						document.getElementById("orderTotalMinusPromo").style.display = "none";
						document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
						setAffirmPrice(orderTotalPlusFreightMinusPromo_data);
					}
					document.getElementById("rebateText").style.display = "none";
					document.getElementById("rebateTextJS").style.display = "block";
				    if(havePromoAddtl.length > 0){
						var orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data);
					    if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						    orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl")[0].firstChild.data);
					    }
						var orderTotalMinusPromoMinusAddtl = document.createTextNode(responseXML.getElementsByTagName("orderTotalMinusPromoMinusAddtl")[0].firstChild.data);
						//console.log("freight.js block 3");
                        $('#rebateAddtlTextJS').html('');
						if(multipleRebates.length > 4 ){
                            $('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');

							link = document.createElement('a');
							link.href=brandedCardLandingPage + "?returnPage=/cart/HoldingArea.jsp";
							link.innerHTML="Mail-In Rebate";

                            $('#rebateAddtlTextJS').append(link).append(': ');
						}else{
							$('#rebateAddtlTextJS').html("Price with the "+ brandedCardName + " After Mail-In Rebate: ");
						}

						document.getElementById("orderTotalMinusPromoMinusAddtl").appendChild(orderTotalMinusPromoMinusAddtl);
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);
						document.getElementById("rebateAddtlText").style.display = "none";
						document.getElementById("rebateAddtlTextJS").style.display = "block";
							console.log("kari 1");
						if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
							document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "block";
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
						} else {
							document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
							document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";

						}
					}
				}
				//End of rebate display

				if(document.getElementById("orderTotalPlusFreightMinusPromo") != null) {
					//remove any previous children so we do not have duplicates displayed on reload
					var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
					for(var j=0; j < previousChildren.length; j++) {
						document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
					}

					if(document.getElementById("orderTotalMinusPromo") != null){
						previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
					    if(previousChildren.length > 1) {
							for(var j=0; j < previousChildren.length; j++) {
								document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
							}
						}
					}
					previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
					for(var j=0; j < previousChildren.length; j++) {
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
					}
					if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
						previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
						for(var j=0; j < previousChildren.length; j++) {
							document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
						}
					}
				}

				//hide "before Tax and Shipping"
				document.getElementById("beforeTaxShipping").style.display = "none";

				//hide "processing"
				document.getElementById("processing").style.display = "none";

                //PN7767 - Record some analytics.
                if(hasPreferredInstaller){
                    var days = ""
                    var altInstallerNum = "";
					var compLevel = "";
					if(covidLevel!=null && covidLevel!="") {
						if(covidLevel=="1") compLevel = "Standard";
						else if(covidLevel=="2") compLevel = "No Contact";
						else if(covidLevel=="3") compLevel = "Mobile No Contact";
					}
                    if(isMobileInstallerASAP){
                        if(daysUntilAppointment.length > 0 && daysUntilAppointment[0].firstChild != null && daysUntilAppointment[0].firstChild.data != null && daysUntilAppointment[0].firstChild.data != "" && daysUntilAppointment[0].firstChild.data != "0"){
                            days = daysUntilAppointment[0].firstChild.data;
                        }else if(altDaysUntilAppointment.length > 0 && altDaysUntilAppointment[0].firstChild != null && altDaysUntilAppointment[0].firstChild.data != null && altDaysUntilAppointment[0].firstChild.data != "" && altDaysUntilAppointment[0].firstChild.data != "0"){
                            days = altDaysUntilAppointment[0].firstChild.data;
                        }
                        if(alternateIsRecent){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Previous', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else if(alternateIsSaved){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Saved', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else{
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }
                    }else if(isMobileInstaller){
                        if(alternateIsRecent){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else if(alternateIsSaved){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else{
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile', prop45: compLevel, prop56: (days != ""?days:"None"), events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }
                    }else if(isSavedInstaller){
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Saved', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else if(isRecentInstaller){
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Previous', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else{
                        if(alternateIsRecent){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else if(alternateIsSaved){
                            altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }else{
                            linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred', prop45: compLevel, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                        }
                    }
                }else{
                    linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Other Installer', prop45: compLevel, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                }
			} //cpu selected

			var availabilityForms = $("form[name^='availabilityForm']").get();
			var isLargeTire = false;
			var isGreenInAllWH = false;
			var canCrossShip = true;
			var discontinued = false;
			var prefWH = responseXML.getElementsByTagName("warehouseID")[0].firstChild.data;
			if(responseXML.getElementsByTagName("preferredWarehouseBasedOnZip").length > 0){
				prefWH = responseXML.getElementsByTagName("preferredWarehouseBasedOnZip")[0].firstChild.data;
			}
            var prefDueDate = "";
			var SBDueDate = "";
			var DEDueDate = "";
			var GADueDate = "";
			var SLDueDate = "";
			var CTDueDate = "";
			var NVDueDate = "";
			var CODueDate = "";
			var MNDueDate = "";
			var ATDueDate = "";
			var SEDueDate = "";
            var prefDate = responseXML.getElementsByTagName("prefDate");

			for(i = 0; i < availabilityForms.length; i++) {
				isLargeTire = (availabilityForms[i].isLargeTire.value == 'true');
				canCrossShip = (availabilityForms[i].canCrossShip.value == 'true');
				isGreenInAllWH = (availabilityForms[i].isGreenInAllWH.value == 'true');
				discontinued = (availabilityForms[i].discontinued.value == 'true');
                prefDueDate = availabilityForms[i].prefDueDate.value;
				SBDueDate = availabilityForms[i].SBDueDate.value;
				DEDueDate = availabilityForms[i].DEDueDate.value;
				GADueDate = availabilityForms[i].GADueDate.value;
				SLDueDate = availabilityForms[i].SLDueDate.value;
				CTDueDate = availabilityForms[i].CTDueDate.value;
				NVDueDate = availabilityForms[i].NVDueDate.value;
				CODueDate = availabilityForms[i].CODueDate.value;
				MNDueDate = availabilityForms[i].MNDueDate.value;
				ATDueDate = availabilityForms[i].ATDueDate.value;
				SEDueDate = availabilityForms[i].SEDueDate.value;
				if(!canCrossShip || (isLargeTire && !isGreenInAllWH)) {
				  if(!canCrossShip) {
                       if(document.getElementById("availability" + i) != null){
                            document.getElementById("availability" + i).innerHTML = prefDueDate;
                        }else if(document.getElementById("limitedStock" + i) != null && prefDate[i] != null && prefDate[i].firstChild != null && prefDate[i].firstChild.data != null){
                            document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + prefDate[i].firstChild.data + "</span>";
                        }
                  } else {
				    if(prefWH == "SB"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = SBDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SBDueDate + "</span>";
						}
					}
				    if(prefWH == "DE"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = DEDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + DEDueDate + "</span>";
						}
					}
				    if(prefWH == "GA"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = GADueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + GADueDate + "</span>";
						}
					}
				    if(prefWH == "SL"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = SLDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SLDueDate + "</span>";
						}
					}
				    if(prefWH == "CT"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = CTDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + CTDueDate + "</span>";
						}
					}
				    if(prefWH == "NV"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = NVDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + NVDueDate + "</span>";
						}
					}
				    if(prefWH == "CO"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = CODueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + CODueDate + "</span>";
						}
					}
				    if(prefWH == "MN"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = MNDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + MNDueDate + "</span>";
						}
					}
					if(prefWH == "AT"){
						if(document.getElementById("availability" + i) != null){
							document.getElementById("availability" + i).innerHTML = ATDueDate;
						}else if(document.getElementById("limitedStock" + i) != null){
							document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + ATDueDate + "</span>";
						}
					}
					if(prefWH == "SE"){
                        if(document.getElementById("availability" + i) != null){
                            document.getElementById("availability" + i).innerHTML = SEDueDate;
                        }else if(document.getElementById("limitedStock" + i) != null){
                            document.getElementById("limitedStock" + i).innerHTML = "Availability: <span id='availability" + i + "'>" + SEDueDate + "</span>";
                        }
                    }
				  }
				}
			}

			//If we have a zip code entered, ensure that the shippingCartInput class
			//is removed from the cartPriceSec div.
			if(zip != null && zip != ""){
				$('.cartPriceSec').removeClass('shippingCartInput');
			}else{
				if($('#shipTo_enterZipCodeCartDiv').length){
					$('.cartPriceSec').addClass('shippingCartInput');
				}
			}

            calculateTileHeight();
            if(haveMASTTireWithMAP){
                scrollToButtonSection();
            }
			return;
		} //no error
	}else{ //have responseXML
        calculateTileHeight();
        if(haveMASTTireWithMAP){
            scrollToButtonSection();
        }
    }
}

function updateChoice(){
	var shipChoice = document.getElementById("shipTo").value;
    var installerChoice = document.getElementById("installerChoice").value;
	var url = "/cart/FreightCheckServlet?updateChoiceOnly=true&shipChoice=" + shipChoice + "&installerChoice=" + installerChoice;
	$.ajax({
		url: url,
		method: 'GET'
	}).success(function(responseXML){
		updateFreightChoice(responseXML);
	});
}

function updateFreightChoice(responseXML){
	//Don't need to do anything on return.
	return;
}

//PN7767. This will need to be run in the control version, if we enter a zip code
//into the CPU zip code field.
function checkIfASAPPreferred(){
    var zip = document.freightCheck.zip.value;
    var url = "/cart/FreightCheckServlet?checkASAPPreferredOnly=true&zip=" + zip;
    $.ajax({
        url: url,
        method: 'GET'
    }).success(function(responseXML){
        updateASAPPreferred(responseXML);
    });
}

function updateASAPPreferred(responseXML){
    if(responseXML){
        var asapPreferred = responseXML.getElementsByTagName("asapPreferred");
        if(asapPreferred.length > 0 && asapPreferred[0].firstChild != null && asapPreferred[0].firstChild.data != null && asapPreferred[0].firstChild.data == "true"){
            loadNewShippingSection(true);
            return;
        }
    }

    lookupFreightWithLoad();
    return;
}

function lookupCPU(hasFreePreferred, origResponseXML){
	if(document.getElementById("shipTo") && document.getElementById("shipTo").value == "CPU"){
        //Hide PayPal buttons
        $('.paypal-buttons').find('.paypal').hide();
        $('.paypal-buttons').find('.paypalCredit').hide();
	}
	if(document.freightCheck.warehouseZip && document.freightCheck.warehouseZip.value != "" && document.freightCheck.warehouseID && document.freightCheck.warehouseID.value != ""){
		var zip = document.freightCheck.warehouseZip.value;
		var code = document.freightCheck.warehouseID.value;
		var orderTotal = document.freightCheck.orderTotal.value;
		var tireWheelOrderTotal = document.freightCheck.tireWheelOrderTotal.value;

		var promoTotal = document.freightCheck.promoTotal.value;
		var promoAddtlTotal = document.freightCheck.promoAddtlTotal.value;
		var promoCode = document.freightCheck.promoCode.value;
		var rebateSize = document.freightCheck.rebateSize.value;
		var brandedCardName = document.freightCheck.brandedCardName.value; 
		var brandedCardLandingPage = document.freightCheck.brandedCardLandingPage.value; 
		var promoCCOnly = document.freightCheck.promoCCOnly.value; 

		var discountTotal = document.freightCheck.discountTotal.value;

		var url = "/cart/CPUTaxesFeesLookupServlet?warehouseZip=" + zip + "&warehouseCode=" + code + "&orderTotal=" + orderTotal + "&tireWheelOrderTotal=" + tireWheelOrderTotal + "&promoTotal=" + promoTotal + "&promoAddtlTotal=" + promoAddtlTotal + "&promoCode=" + promoCode + "&rebateSize=" + rebateSize + "&discountTotal=" + discountTotal + "&brandedCardName=" + brandedCardName + "&brandedCardLandingPage=" + brandedCardLandingPage + "&promoCCOnly=" + promoCCOnly;
		$.ajax({
			url: url,
			method: 'GET'
		}).success(function(responseXML){
			updateCPUTaxesFees(responseXML, hasFreePreferred, origResponseXML);
		}).error(function(){
            calculateTileHeight();
		});
	}
}

//Update display for CPU Taxes/Fees
function updateCPUTaxesFees(responseXML, hasFreePreferred, origResponseXML){
	if(responseXML){
		updateSavedFreightBeanCPU(responseXML);

		var havePromo = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo");
		var havePromoAddtl = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl");
		var outOfStock = responseXML.getElementsByTagName("outOfStock");
		var cpuNotAvail = responseXML.getElementsByTagName("cpuNotAvail");
		var zip = document.freightCheck.warehouseZip.value;
		var cpuAmount = responseXML.getElementsByTagName("cpuAmount");

		//Hide freight or "Pending", display processing.
		document.getElementById("freeFreight").style.display = "none";
		document.getElementById("freight").style.display = "none";
		$('.cartPriceSec').find('.selectShipping').hide();
		document.getElementById("processing").style.display = "none";

        //PN7767
        $('.shipCostLi').addClass('hide');

		//Hide taxes and fees. Updated with PN7767.
        $('#feeRow').css('display', 'none');
        $('#fees').css('display', 'none');
        $('#feeRowLi').addClass('hide');
        $('#feesLi').addClass('hide');

        $('#taxRow').css('display', 'none');
        $('#taxes').css('display', 'none');
        $('#taxRowLi').addClass('hide');
        $('#taxesLi').addClass('hide');

        $('#exciseRowLi').addClass('hide');
        $('#exciseLi').addClass('hide');
        $('#canHSTRowLi').addClass('hide');
        $('#canHSTLi').addClass('hide');
        $('#canGSTRowLi').addClass('hide');
        $('#canGSTLi').addClass('hide');
        $('#canPSTRowLi').addClass('hide');
        $('#canPSTLi').addClass('hide');
        $('#canDutyRowLi').addClass('hide');
        $('#canDutyLi').addClass('hide');
        $('#canLevyRowLi').addClass('hide');
        $('#canLevyLi').addClass('hide');
        $('#canBrokerRowLi').addClass('hide');
        $('#canBrokerLi').addClass('hide');

		//Hide CPU discount. Updated with PN7767.
        $('#cpuDiscountRow').css('display', 'none');
        $('#cpuDiscountAmt').css('display', 'none');
        $('#cpuDiscountRowLi').addClass('hide');
        $('#cpuDiscountAmtLi').addClass('hide');

		//Hide order total.
		document.getElementById("orderTotal").style.display = "none";
		document.getElementById("orderTotalNoFreight").style.display = "block";
		document.getElementById("orderTotalPlusFreight").style.display = "none";

		//Hide rebate, if there was one applied.
        $('#rebateText').css('display', 'none');
		var rebateText = document.getElementById("rebateTextJS");
		if(rebateText != null && rebateText.childNodes[0]){
			rebateText.removeChild(rebateText.childNodes[0]);
		}
        $('#rebateTextJS').css('display', 'none');
		document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
		document.getElementById("orderTotalMinusPromo").style.display = "none";
        $('#rebateAddtlText').css('display', 'none');
		var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
		if(rebateAddtlText != null && rebateAddtlText.childNodes[0]){
			rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
		}
		
		var mobileSelection = "";
		var recMobile = document.getElementsByName("recommendedMobile");
		for(var i = 0; i < recMobile.length; i++){
			if(recMobile[i].checked == true){
				if(recMobile[i].value != "" && recMobile[i].value != "installer") mobileSelection = "Y";
			}
		}

        var installerNumFound = origResponseXML.getElementsByTagName("installerNumFound");
        var installerNum = origResponseXML.getElementsByTagName("installerNum");
        var installerName = origResponseXML.getElementsByTagName("installerName");
        var altInstaller = origResponseXML.getElementsByTagName("altInstaller");
        var isRecentInstaller = false;
        if(origResponseXML.getElementsByTagName("isRecentInstaller").length > 0 && origResponseXML.getElementsByTagName("isRecentInstaller")[0].firstChild.data == "true"){
            isRecentInstaller = true;
        }
        var isMobileInstaller = false;
        var isMobileInstallerASAP = false;
        var isCovidCompliant = false;
        var covidLevel = "";
        if(origResponseXML.getElementsByTagName("isMobileInstaller").length > 0 && origResponseXML.getElementsByTagName("isMobileInstaller")[0].firstChild.data == "true"){
            isMobileInstaller = true;
            if(installerName.length > 0 && installerName[0].firstChild != null && installerName[0].firstChild.data != null && installerName[0].firstChild.data.indexOf("ASAP") > -1){
                isMobileInstallerASAP = true;
                $('#prefIsASAP').val('true');
            }
        }
		if(origResponseXML.getElementsByTagName("covid19").length > 0 && origResponseXML.getElementsByTagName("covid19")[0].firstChild != null && origResponseXML.getElementsByTagName("covid19")[0].firstChild.data != "" && origResponseXML.getElementsByTagName("covid19")[0].firstChild.data != "X"){
            if(origResponseXML.getElementsByTagName("covid19")[0].firstChild.data != "0"){
                isCovidCompliant = true;
            }
            covidLevel = origResponseXML.getElementsByTagName("covid19")[0].firstChild.data;
		}
        var isSavedInstaller = false;
        if(origResponseXML.getElementsByTagName("isSavedInstaller").length > 0 && origResponseXML.getElementsByTagName("isSavedInstaller")[0].firstChild.data == "true"){
            isSavedInstaller = true;
        }
        var hasPreferredInstaller = false;
        if(installerNum.length > 0 && installerNum[0].firstChild != null && installerNum[0].firstChild.data != null && installerNum[0].firstChild.data != ""){
            hasPreferredInstaller = true;
        }

        var alternateIsRecent = false;
        var alternateIsSaved = false;
        var alternateIsMobile = false;
        var alterateIsCovidCompliant = false;
		var altCovidLevel = "";
        var altInstallerIsASAP = false;
        if(altInstaller.length > 0){
            var altIsRecent = altInstaller[0].getElementsByTagName("isRecentInstaller");
            if(altIsRecent.length > 0 && altIsRecent[0].firstChild != null && altIsRecent[0].firstChild.data == "true"){
                alternateIsRecent = true;
            }
            var altIsMobile = altInstaller[0].getElementsByTagName("isMobileInstaller");
            if(altIsMobile.length > 0 && altIsMobile[0].firstChild != null && altIsMobile[0].firstChild.data == "true"){
                alternateIsMobile = true;
            }
            var altIsCovidCompliant = altInstaller[0].getElementsByTagName("covid19");
            if(altIsCovidCompliant.length > 0 && altIsCovidCompliant[0].firstChild != null && altIsCovidCompliant[0].firstChild.data != null && altIsCovidCompliant[0].firstChild.data != "" && altIsCovidCompliant[0].firstChild.data != "X"){
				if(altIsCovidCompliant[0].firstChild.data != "0") {
					alternateIsCovidCompliant = true;
				} 
				altCovidLevel = altIsCovidCompliant[0].firstChild.data;
            }
            var altIsSaved = altInstaller[0].getElementsByTagName("isSavedInstaller");
            if(altIsSaved.length > 0 && altIsSaved[0].firstChild != null && altIsSaved[0].firstChild.data == "true"){
                alternateIsSaved = true;
            }
            var altInstallerName = altInstaller[0].getElementsByTagName("installerName");
            if(altInstallerName.length > 0 && altInstallerName[0].firstChild != null && altInstallerName[0].firstChild.data != null && altInstallerName[0].firstChild.data.indexOf("ASAP") > -1){
                altInstallerIsASAP = true;
                $('#altIsASAP').val('true');
            }
        }

        var daysUntilAppointment = origResponseXML.getElementsByTagName("daysUntilAppointment");
        var altDaysUntilAppointment = origResponseXML.getElementsByTagName("altDaysUntilAppointment");
        
		if(cpuNotAvail.length > 0){
			//Disable option to select a warehouse
			//If CPU is selected, reset to a different selection.
			runCheckForCartErrors = false;
			if($('#pickup').hasClass('shipPickupContainerActive')){
				$('#pickup').removeClass('shipPickupContainerActive');
				$('#shipTo').val('installer');
				$('#installer').addClass('shipInstallContainerActive');
				$('#shipToRecomMobileInstaller').addClass('enabled');
				$('#shipToRecomMobileInstaller').find("input[type='radio']").prop('checked', true).addClass('selected');
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
					if($('#freePreferredOther').hasClass('hide')) $('#freePreferredOther').removeClass('hide');
					document.getElementById("installerFreight").firstChild.data = origResponseXML.getElementsByTagName("freight")[0].firstChild.data;
					document.getElementById("freight").style.display = "none";
					document.getElementById("freeFreight").style.display = "inline";

                    //PN7767
                    $('.shipCostLi').find('.shipCost').text('FREE');
                    $('.shipCostLi').removeClass('hide');
				}
			}
			$('#pickup').unbind('click touchstart', addClickEventToPickup);

			if(!$('#distrText').hasClass('disabledTxt')){
				$('#distrText').hide();
			}

            //Select a new option if CPU is selected and not available. PN7767.
            if($('#cpuOption').hasClass('Selected') && $('#CPU').hasClass('enabled')){
                if(hasPreferredInstaller){
                    $('#shipTo').val('installer');

                    setShippingChoice('prefInstaller', isMobileInstaller, covidLevel);
                }else if(hasAlternateInstaller){
                    $('#shipTo').val('installer');

                    setShippingChoice('altInstaller', alternateIsMobile, altCovidLevel);
                }else{
                    $('#shipTo').val('installer');

                    setShippingChoice('installer', false, '');
                }
            }

			document.getElementById("noZipEntered").disabled = true;
			document.getElementById("warehouseNotFound").style.display = "inline";
			if($('#pickup').length){
				$('#pickup').removeClass('shipPickupContainer');
				$('#pickup').addClass('shipPickupContainerNotAvail');
				$('#shipTo_enterZipCode').removeClass('success');
				$('#shipTo_enterZipCode').val('');
				$('#shipTo_enterZipCode').attr('disabled', 'true');
				$('#shipTo_enterZipCodeDiv').hide();
			}
			document.getElementById("warehouseFound").style.display = "none";
			document.getElementById("cpuDiscount").style.display = "none";
            $('.cpuDiscountLi').addClass('hide');
            $('#cpuDiscountRow').css('display', 'none');
            $('#cpuDiscountAmt').css('display', 'none');
            $('#cpuDiscountRowLi').addClass('hide');
            $('#cpuDiscountAmtLi').addClass('hide');

			document.getElementById("warehouseNotFound_zip").firstChild.data = $('#newzip').html();
			document.getElementById("warehouseNotFound_zip").href = "/cart/modalboxAlerts/billShipZipPopup.jsp?shipzip=" + $('#newzip').val();

            //Disable new CPU option. PN7767.
            $('#cpuOption').addClass('shipPickupContainerNotAvail');
            $('#cpuOption').find('.shipOptionText').text('ORDER PICK-UP NOT AVAILABLE');
            $('#CPU').css('pointer-events', 'none');

			//Don't have CPU available. Use the first freight response to set the freight.
			if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
				document.getElementById("freeFreight").style.display = "inline";
				document.getElementById("freight").style.display = "none";

                //PN7767
                $('.shipCostLi').find('.shipCost').text('FREE');
                $('.shipCostLi').removeClass('hide');

				document.getElementById("orderTotal").style.display = "block";
				document.getElementById("orderTotalNoFreight").style.display = "none";
				document.getElementById("orderTotalPlusFreight").style.display = "none";
			}else{
				document.getElementById("freight").firstChild.data = origResponseXML.getElementsByTagName("freightOnly")[0].firstChild.data;

                //PN7767
                if(origResponseXML.getElementsByTagName('freightOnly')[0].firstChild.data == "$0.00" || origResponseXML.getElementsByTagName('freightOnly')[0].firstChild.data == "N/A"){
                    $('.shipCostLi').find('.shipCost').text('FREE');
                }else{
                    $('.shipCostLi').find('.shipCost').text(origResponseXML.getElementsByTagName('freightOnly')[0].firstChild.data);
                }
			}
            //Updaed with PN7767.
			$('#installerFreight').text(origResponseXML.getElementsByTagName("freightOnly")[0].firstChild.data);
            $('#taxes').text(origResponseXML.getElementsByTagName("taxes")[0].firstChild.data);
            $('#taxesLi').text(origResponseXML.getElementsByTagName("taxes")[0].firstChild.data);
            $('#fees').text(origResponseXML.getElementsByTagName("fees")[0].firstChild.data);
            $('#feesLi').text(origResponseXML.getElementsByTagName("fees")[0].firstChild.data);
            $('#exciseLi').text(origResponseXML.getElementsByTagName('exciseTax')[0].firstChild.data);
			document.getElementById("taxesFeesIncluded").style.display = "block";
			document.getElementById("orderTotal").firstChild.data = origResponseXML.getElementsByTagName("orderTotal")[0].firstChild.data;
			
			//Add freight to order total.
			document.getElementById("orderTotalPlusFreight").firstChild.data = origResponseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data;
			if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y" && origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDisc").length > 0) {
				document.getElementById("orderTotalPlusFreight").firstChild.data = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDisc")[0].firstChild.data;
			}

			//Hide initial order total and display one with freight added.
			if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
				document.getElementById("orderTotal").style.display = "block";
				document.getElementById("orderTotalNoFreight").style.display = "none";
				document.getElementById("orderTotalPlusFreight").style.display = "none";
			}else{
				document.getElementById("orderTotal").style.display = "none";
				document.getElementById("orderTotalNoFreight").style.display = "none";
				document.getElementById("orderTotalPlusFreight").style.display = "block";
			}

			//Hide "Pending" and display freight.
			if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
				document.getElementById("freeFreight").style.display = "inline";
				document.getElementById("freight").style.display = "none";

                //PN7767
                $('.shipCostLi').find('.shipCost').text('FREE');
			}else{
				document.getElementById("freeFreight").style.display = "none";
				document.getElementById("freight").style.display = "inline";
			}
            //PN7767
            $('.shipCostLi').removeClass('hide');

			//Hide original zip and display newly entered/submitted zip.
			document.getElementById("enteredzip").style.display = "inline";

			//Hide the rebate if one has been previously applied. It will be displayed
			//down below if it still applies.
			document.getElementById("rebateText").style.display = "none";
			var rebateText = document.getElementById("rebateTextJS");
			if(rebateText.childNodes[0]){
				rebateText.removeChild(rebateText.childNodes[0]);
			}
			document.getElementById("rebateTextJS").style.display = "none";
			document.getElementById("rebateAddtlText").style.display = "none";
			var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
			if(rebateAddtlText.childNodes[0]){
				rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
			}
			document.getElementById("rebateAddtlTextJS").style.display = "none";
			document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
			document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
			document.getElementById("orderTotalMinusPromo").style.display = "none";
			document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

			//Show taxes and fees. We know we are lower 48. Updated with PN7767.
			document.getElementById("includeTaxFees").style.display = "none";
            $('#taxesFeesIncluded').hide();
            $('#taxRow').css('display', 'inline');
            $('#taxes').css('display', 'inline');
            $('#taxRowLi').removeClass('hide');
            $('#taxesLi').removeClass('hide');
                
            $('#feeRow').css('display', 'inline');
            $('#fees').css('display', 'inline');
            $('#feeRowLi').removeClass('hide');
            $('#feesLi').removeClass('hide');

            if(origResponseXML.getElementsByTagName('exciseTax').length > 0 && origResponseXML.getElementsByTagName('exciseTax')[0].firstChild.data != '$0.00'){
                $('#exciseRowLi').removeClass('hide');
                $('#exciseLi').removeClass('hide');
            }else{
                $('#exciseRowLi').addClass('hide');
                $('#exciseLi').addClass('hide');
            }

			//Begin display rebate total (if one has been applied)
			if(document.getElementById("orderTotalPlusFreightMinusPromo") != null) {
                var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
                for(var j=0; j < previousChildren.length; j++) {
                    document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
                }

                if(document.getElementById("orderTotalMinusPromo") != null){
                    previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
                    for(var j=0; j < previousChildren.length; j++) {
                        document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
                    }
                }
                if(havePromoAddtl.length > 0) {
                    previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
                    for(var j=0; j < previousChildren.length; j++) {
                        document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
                    }

                    if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
                        previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
                        for(var j=0; j < previousChildren.length; j++) {
                            document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
                        }
                    }
                }
            }
			if(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo").length > 0){
				var orderTotalPlusFreightMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
				var orderTotalPlusFreightMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data;
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y" && origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo").length > 0) {
					orderTotalPlusFreightMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data);
					orderTotalPlusFreightMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data;
				}
				var orderTotalMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data);
				 var orderTotalMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data;
				var promoCode = origResponseXML.getElementsByTagName("promoCode")[0].firstChild.data;
				var multipleRebates = origResponseXML.getElementsByTagName("multipleRebates")[0].firstChild.data;
				var brandedCardName = document.freightCheck.brandedCardName.value; 
				var brandedCardLandingPage = document.freightCheck.brandedCardLandingPage.value; 
				var promoCCOnly = document.freightCheck.promoCCOnly.value; 

				//console.log("freight.js block 4");
				$('#rebateTextJS').html('');
				if(multipleRebates.length > 4 ){

					if(promoCCOnly.length > 0){
		
						$('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');
	
						var link = document.createElement('a');
						link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
						link.appendChild(document.createTextNode("Mail-In Rebate"));

						$('#rebateTextJS').append(link).append(': ');

					} else {
						$('#rebateTextJS').append('Price After ');
	
						var link = document.createElement('a');
						link.href="/specialoffers/details.jsp?promoID=" + promoCode;
						link.appendChild(document.createTextNode("Mail-In Rebate"));

					 $('#rebateTextJS').append(link).append(': ');
					}
				}else{
					$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
				}

				document.getElementById("orderTotalMinusPromo").appendChild(orderTotalMinusPromo);
				document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);
				if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
					document.getElementById("orderTotalMinusPromo").style.display = "block";
					document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
					setAffirmPrice(orderTotalMinusPromo_data);
				}else{
					document.getElementById("orderTotalMinusPromo").style.display = "none";
					document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
					setAffirmPrice(orderTotalPlusFreightMinusPromo_data);
				}
				document.getElementById("rebateText").style.display = "none";
				document.getElementById("rebateTextJS").style.display = "block";
				if(havePromoAddtl.length > 0){
					var orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data);
					var orderTotalPlusFreightMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data;
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl")[0].firstChild.data);
						orderTotalPlusFreightMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl")[0].firstChild.data;
					}
					var orderTotalMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalMinusPromoMinusAddtl")[0].firstChild.data);
					var orderTotalMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalMinusPromoMinusAddtl")[0].firstChild.data;
					//console.log("freight.js block 5");
						
                    $('#rebateAddtlTextJS').html('');
					if(multipleRebates.length > 4){
                        $('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');
                        
						link = document.createElement("a");
						link.href=brandedCardLandingPage + "?returnPage=/cart/HoldingArea.jsp";
						link.innerHTML = "Mail-In Rebate";

                        $('#rebateAddtlTextJS').append(link).append(': ');
					}else{
						$('#rebateAddtlTextJS').html("Price with the "+ brandedCardName + " After Mail-In Rebate: ");
					}

					document.getElementById("orderTotalMinusPromoMinusAddtl").appendChild(orderTotalMinusPromoMinusAddtl);
					document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);
					document.getElementById("rebateAddtlText").style.display = "none";
					document.getElementById("rebateAddtlTextJS").style.display = "block";
							console.log("kari 2");
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
						document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "block";
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
						setAffirmPrice(orderTotalMinusPromoMinusAddtl_data);
					}else{
						document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";
						setAffirmPrice(orderTotalPlusFreightMinusPromoMinusAddtl_data);
					}
				}
			}

			//Hide "Before Tax & Shipping"
			document.getElementById("beforeTaxShipping").style.display = "none";

			//Hide "Processing"
			document.getElementById("processing").style.display = "none";

            //PN7767 - Record some analytics.
            if(hasPreferredInstaller){
                var days = "";
                var altInstallerNum = "";
                var compLevel = "";
                if(covidLevel!=null && covidLevel!="") {
                    if(covidLevel=="1") compLevel = "Standard";
                    else if(covidLevel=="2") compLevel = "No Contact";
					else if(covidLevel=="3") compLevel = "Mobile No Contact";
				}
                if(isMobileInstallerASAP){
                    if(daysUntilAppointment.length > 0 && daysUntilAppointment[0].firstChild != null && daysUntilAppointment[0].firstChild.data != null && daysUntilAppointment[0].firstChild.data != "" && daysUntilAppointment[0].firstChild.data != "0"){
                        days = daysUntilAppointment[0].firstChild.data;
                    }else if(altDaysUntilAppointment.length > 0 && altDaysUntilAppointment[0].firstChild != null && altDaysUntilAppointment[0].firstChild.data != null && altDaysUntilAppointment[0].firstChild.data != "" && altDaysUntilAppointment[0].firstChild.data != "0"){
                        days = altDaysUntilAppointment[0].firstChild.data;
                    }
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Previous', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Saved', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }
                }else if(isMobileInstaller){
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile', prop45: compLevel, prop56: (days != ""?days:"None"), events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }
                }else if(isRecentInstaller){
                    linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Previous', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                }else if(isSavedInstaller){
                    linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Saved', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                }else{
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred', prop45: compLevel, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
                    }
                }
            }else{
                linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Other Installer', prop45: compLevel, events: (defaultCheckout?"event108":"")+(schedulerShown?(defaultCheckout?",":"")+(schedulerShown=="BSRO"?"event96":"")+(schedulerShown=="PEPB"?"event112":""):"")});
            }
		}else{
            //A warehouse was found.
            if($('#pickup').length){
                $('#pickup').bind('click touchstart', addClickEventToPickup);
                $('#pickup').addClass('shipPickupContainer');
                $('#pickup').removeClass('shipPickupContainerNotAvail');
            }

            //PN7767. Enable CPU option.
            $('#cpuOption').removeClass('shipPickupContainerNotAvail');
            if(showFreeShippingCPU){
                $('#cpuOption').find('.shipOptionText').text('');
                $('#cpuOption').find('.shipOptionText').append('GET A<span class="cpuAmtNew"> </span>ORDER PICK-UP DISCOUNT');
            }else{
                $('#cpuOption').find('.shipOptionText').text('PICK UP MY ORDER');
            }
            $('#CPU').css('pointer-events', 'auto');

			document.getElementById("noZipEntered").style.display = "none";
			document.getElementById("warehouseFound").style.display = "none";
			document.getElementById("cpuDiscount").style.display = "none";
            $('.cpuDiscountLi').addClass('hide');
			document.getElementById("warehouseNotFound").style.display = "none";

			//Hide freight or "Pending", display processing.
			document.getElementById("freeFreight").style.display = "none";
			document.getElementById("freight").style.display = "none";
			document.getElementById("processing").style.display = "none";

            //PN7767
            $('.shipCostLi').addClass('hide');

			//Hide taxes and fees. Updated with PN7767.
            $('#feeRow').css('display', 'none');
            $('#fees').css('display', 'none');
            $('#feeRowLi').addClass('hide');
            $('#feesLi').addClass('hide');

            $('#taxRow').css('display', 'none');
            $('#taxes').css('display', 'none');
            $('#taxRowLi').addClass('hide');
            $('#taxesLi').addClass('hide');

            $('#exciseRowLi').addClass('hide');
            $('#exciseLi').addClass('hide');
            $('#canHSTRowLi').addClass('hide');
            $('#canHSTLi').addClass('hide');
            $('#canGSTRowLi').addClass('hide');
            $('#canGSTLi').addClass('hide');
            $('#canPSTRowLi').addClass('hide');
            $('#canPSTLi').addClass('hide');
            $('#canDutyRowLi').addClass('hide');
            $('#canDutyLi').addClass('hide');
            $('#canLevyRowLi').addClass('hide');
            $('#canLevyLi').addClass('hide');
            $('#canBrokerRowLi').addClass('hide');
            $('#canBrokerLi').addClass('hide');

			//Hide order total.
			document.getElementById("orderTotal").style.display = "none";
			document.getElementById("orderTotalNoFreight").style.display = "block";
			document.getElementById("orderTotalPlusFreight").style.display = "none";

			//Hide rebate, if there was one applied.
            $('#rebateText').css('display', 'none');
			var rebateText = document.getElementById("rebateTextJS");
			if(rebateText != null && rebateText.childNodes[0]){
				rebateText.removeChild(rebateText.childNodes[0]);
			}
            $('#rebateTextJS').css('display', 'none');
			document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "none";
			document.getElementById("orderTotalMinusPromo").style.display = "none";
            $('#rebateAddtlText').css('display', 'none');
			var rebateAddtlText = document.getElementById("rebateAddtlTextJS");
			if(rebateAddtlText != null && rebateAddtlText.childNodes[0]){
				rebateAddtlText.removeChild(rebateAddtlText.childNodes[0]);
			}
            $('#rebateAddtlTextJS').css('display', 'none');
			document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "none";
			document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";

			//Show actual cost message, by default.
			$('.actualCostTxt').show();

			//Set the available date for CPU, if we have it.
			if(responseXML.getElementsByTagName("availableDateForCPU") != null && responseXML.getElementsByTagName("availableDateForCPU").length > 0){
				document.freightCheck.availableDateForCPU.value = responseXML.getElementsByTagName("availableDateForCPU")[0].firstChild.data;
			}else{
				document.freightCheck.availableDateForCPU.value = "";
			}

			//Get correct values for display.
			var freightOnly = "";
			var taxes = "";
			var fees = "";
            var excise = "";
			var orderTotal = "";
			var orderTotalMinusPromo = "";
			var orderTotalPlusFreight = "";
			var noShippingCost = false;
			var cpuAmount = "";
			
			if(document.getElementById("shipTo") && document.getElementById("shipTo").value == "CPU" || 
					(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y")){
				noShippingCost = true;
			}
			
			if(noShippingCost){
				if(responseXML.getElementsByTagName("freightOnly").length > 0 && responseXML.getElementsByTagName("freightOnly")[0].firstChild != null){
					freightOnly = responseXML.getElementsByTagName("freightOnly")[0].firstChild.data;
					document.getElementById("freight").firstChild.data = freightOnly;
					if(freightOnly == "N/A"){
						$('.actualCostTxt').hide();
					}

                    //PN7767
                    if(freightOnly == "$0.00" || freightOnly == "N/A"){
                        if(freightOnly == "N/A"){
                            $('.shipCostLi').addClass('hide');
                        }else{
                            $('.shipCostLi').find('.shipCost').text('FREE');
                        }
                    }else{
                        $('.shipCostLi').find('.shipCost').text(freightOnly);
                    }
				}
                if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y"){
                    if(origResponseXML.getElementsByTagName("taxes").length > 0 && origResponseXML.getElementsByTagName("taxes")[0].firstChild != null){
                        taxes = origResponseXML.getElementsByTagName("taxes")[0].firstChild.data;
                        $('#taxes').text(taxes);
                        $('#taxesLi').text(taxes);
                    }
                    if(origResponseXML.getElementsByTagName("fees").length > 0 && origResponseXML.getElementsByTagName("fees")[0].firstChild != null){
                        fees = origResponseXML.getElementsByTagName("fees")[0].firstChild.data;
                        $('#fees').text(fees);
                        $('#feesLi').text(fees);
                    }
                }else{
				    if(responseXML.getElementsByTagName("taxes").length > 0 && responseXML.getElementsByTagName("taxes")[0].firstChild != null){
					    taxes = responseXML.getElementsByTagName("taxes")[0].firstChild.data;
                        //Updated with PN7767.
                        $('#taxes').text(taxes);
                        $('#taxesLi').text(taxes);
				    }
				    if(responseXML.getElementsByTagName("fees").length > 0 && responseXML.getElementsByTagName("fees")[0].firstChild != null){
					    fees = responseXML.getElementsByTagName("fees")[0].firstChild.data;
                        //Updated with PN7767.
                        $('#fees').text(fees);
                        $('#feesLi').text(fees);
				    }
                }
                if(responseXML.getElementsByTagName('exciseTax').length > 0 && responseXML.getElementsByTagName('exciseTax')[0].firstChild != null){
                    excise = responseXML.getElementsByTagName('exciseTax')[0].firstChild.data;
                    $('#exciseLi').text(excise);
                }
				if(responseXML.getElementsByTagName("orderTotal").length > 0 && responseXML.getElementsByTagName("orderTotal")[0].firstChild != null){
					orderTotal = responseXML.getElementsByTagName("orderTotal")[0].firstChild.data;
					document.getElementById("orderTotal").firstChild.data = orderTotal;
				}
				if(responseXML.getElementsByTagName("orderTotalMinusPromo").length > 0 && responseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild != null){
					orderTotalMinusPromo = responseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data;
					document.getElementById("orderTotalMinusPromo").firstChild.data = orderTotalMinusPromo;
				}
				if(responseXML.getElementsByTagName("orderTotalPlusFreight").length > 0 && responseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild != null){
					orderTotalPlusFreight = responseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data;
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreight = origResponseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data;
					}
					document.getElementById("orderTotalPlusFreight").firstChild.data = orderTotalPlusFreight;
				}
				if(responseXML.getElementsByTagName("cpuAmount").length > 0 && responseXML.getElementsByTagName("cpuAmount")[0].firstChild != null){
					cpuAmount = responseXML.getElementsByTagName("cpuAmount")[0].firstChild.data;
                    $('#cpuDiscountAmt').text("-" + cpuAmount);
                    $('#cpuDiscountAmtLi').text('-' + cpuAmount);
				}
			}else{
				if(origResponseXML.getElementsByTagName("freightOnly").length > 0 && origResponseXML.getElementsByTagName("freightOnly")[0].firstChild != null){
					freightOnly = origResponseXML.getElementsByTagName("freightOnly")[0].firstChild.data;
					document.getElementById("freight").firstChild.data = freightOnly;
					if(freightOnly == "N/A"){
						$('.actualCostTxt').hide();
					}

                    //PN7767
                    if(freightOnly == "$0.00" || freightOnly == "N/A"){
                        if(freightOnly == "N/A"){
                            $('.shipCostLi').addClass('hide');
                        }else{
                            $('.shipCostLi').find('.shipCost').text('FREE');
                        }
                    }else{
                        $('.shipCostLi').find('.shipCost').text(freightOnly);
                    }
				}
				if(origResponseXML.getElementsByTagName("taxes").length > 0 && origResponseXML.getElementsByTagName("taxes")[0].firstChild != null){
					taxes = origResponseXML.getElementsByTagName("taxes")[0].firstChild.data;
                    //Updated with PN7767.
                    $('#taxes').text(taxes);
                    $('#taxesLi').text(taxes);
				}
				if(origResponseXML.getElementsByTagName("fees").length > 0 && origResponseXML.getElementsByTagName("fees")[0].firstChild != null){
					fees = origResponseXML.getElementsByTagName("fees")[0].firstChild.data;
                    //Updated with PN7767.
                    $('#fees').text(fees);
                    $('#feesLi').text(fees);
				}
                if(origResponseXML.getElementsByTagName('exciseTax').length > 0 && origResponseXML.getElementsByTagName('exciseTax')[0].firstChild != null){
                    excise = origResponseXML.getElementsByTagName('exciseTax')[0].firstChild.data;
                    $('#exciseLi').text(excise);
                }
				if(origResponseXML.getElementsByTagName("orderTotal").length > 0 && origResponseXML.getElementsByTagName("orderTotal")[0].firstChild != null){
					orderTotal = origResponseXML.getElementsByTagName("orderTotal")[0].firstChild.data;
					document.getElementById("orderTotal").firstChild.data = orderTotal;
				}
				if(origResponseXML.getElementsByTagName("orderTotalMinusPromo").length > 0 && origResponseXML.getElementsByTagName("orderTotalMinusPromo").firstChild != null){
					orderTotalMinusPromo = origResponseXML.getElementsByTagName("orderTotalMinusPromo")[0].firstChild.data;
					document.getElementById("orderTotalMinusPromo").firstChild.data = orderTotalMinusPromo;
				}
				if(origResponseXML.getElementsByTagName("orderTotalPlusFreight").length > 0 && origResponseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild != null){
					orderTotalPlusFreight = origResponseXML.getElementsByTagName("orderTotalPlusFreight")[0].firstChild.data;
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreight = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDisc")[0].firstChild.data;
					}
					setAffirmPrice(orderTotalPlusFreight);
					document.getElementById("orderTotalPlusFreight").firstChild.data = orderTotalPlusFreight;
				}
				if(origResponseXML.getElementsByTagName("cpuAmount").length > 0 && origResponseXML.getElementsByTagName("cpuAmount")[0].firstChild != null){
                    cpuAmount = origResponseXML.getElementsByTagName("cpuAmount")[0].firstChild.data;
                    //Updated with PN7767.
                    $('#cpuDiscountAmt').text('-' + cpuAmount);
                    $('#cpuDiscountAmtLi').text('-' + cpuAmount);
                }
			}
			//Display freight.
			document.getElementById("freeFreight").style.display = "none";
			document.getElementById("freight").style.display = "inline";

            //PN7767
            if(freightOnly != "N/A"){
                $('.shipCostLi').removeClass('hide');
            }

			//Display order total.
			document.getElementById("orderTotal").style.display = "none";
			document.getElementById("orderTotalNoFreight").style.display = "none";
			document.getElementById("orderTotalPlusFreight").style.display = "block";

			//Show new zip.
			document.getElementById("enteredzip").style.display = "inline";

			//Display taxes and fees. Updated with PN7767.
			document.getElementById("includeTaxFees").style.display = "none";
            $('#taxesFeesIncluded').hide();
            $('#taxRow').css('display', 'inline');
            $('#taxes').css('display', 'inline');
            $('#taxRowLi').removeClass('hide');
            $('#taxesLi').removeClass('hide');
                
            $('#feeRow').css('display', 'inline');
            $('#fees').css('display', 'inline');
            $('#feeRowLi').removeClass('hide');
            $('#feesLi').removeClass('hide');

            if(excise != "" && excise != "$0.00"){
                $('#exciseRowLi').removeClass('hide');
                $('#exciseLi').removeClass('hide');
            }else{
                $('#exciseRowLi').addClass('hide');
                $('#exciseLi').addClass('hide');
            }
			if(cpuAmount != "" && cpuAmount != "$0.00" && document.getElementById("shipTo") && document.getElementById("shipTo").value == "CPU"){
                $('#cpuDiscountRow').css('display', 'inline');
                $('#cpuDiscountAmt').css('display', 'inline');
                $('#cpuDiscountRowLi').removeClass('hide');
                $('#cpuDiscountAmtLi').removeClass('hide');
			} else {
                $('#cpuDiscountRow').css('display', 'none');
                $('#cpuDiscountAmt').css('display', 'none');
                $('#cpuDiscountRowLi').addClass('hide');
                $('#cpuDiscountAmtLi').addClass('hide');
			}

			//begin display rebate total (if one has been applied)
			if(!isCanadian && havePromo.length > 0 && havePromo[0].firstChild != null) {
				var orderTotalPlusFreightMinusPromo = "";
				var orderTotalPlusFreightMinusPromo_data = "";
				var promoCode;
				var multipleRebates;
				var brandedCardName;
				var brandedCardLandingPage;
				var promoCCOnly = "";
				if(noShippingCost){
					orderTotalPlusFreightMinusPromo = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
					orderTotalPlusFreightMinusPromo_data = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data;
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreightMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
						orderTotalPlusFreightMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data;
					}
					promoCode = responseXML.getElementsByTagName("promoCode")[0].firstChild.data;
					multipleRebates = responseXML.getElementsByTagName("multipleRebates")[0].firstChild.data;
					if(responseXML.getElementsByTagName("brandedCardName")[0].firstChild != null){
						brandedCardName = responseXML.getElementsByTagName("brandedCardName")[0].firstChild.data;
						brandedCardLandingPage = responseXML.getElementsByTagName("brandedCardLandingPage")[0].firstChild.data;
					}
					if(responseXML.getElementsByTagName("promoCCOnly")[0].firstChild != null){
						promoCCOnly = responseXML.getElementsByTagName("promoCCOnly")[0].firstChild.data;
					}
				}else{
					orderTotalPlusFreightMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data);
					orderTotalPlusFreightMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo")[0].firstChild.data;
					if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
						orderTotalPlusFreightMinusPromo = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data);
						orderTotalPlusFreightMinusPromo_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo")[0].firstChild.data;
					}
					promoCode = origResponseXML.getElementsByTagName("promoCode")[0].firstChild.data;
					multipleRebates = origResponseXML.getElementsByTagName("multipleRebates")[0].firstChild.data;
					if(origResponseXML.getElementsByTagName("brandedCardName")[0].firstChild != null){
						brandedCardName = origResponseXML.getElementsByTagName("brandedCardName")[0].firstChild.data;
						brandedCardLandingPage = origResponseXML.getElementsByTagName("brandedCardLandingPage")[0].firstChild.data;
					}
					if(origResponseXML.getElementsByTagName("promoCCOnly")[0].firstChild != null){
						promoCCOnly = origResponseXML.getElementsByTagName("promoCCOnly")[0].firstChild.data;
					}
				}
				setAffirmPrice(orderTotalPlusFreightMinusPromo_data);



				//console.log("freight.js block 6");
                $('#rebateTextJS').html('');
				if(multipleRebates.length > 4 ){

					if(promoCCOnly.length > 0){

                        $('#rebateTextJS').html('Price with the '+ brandedCardName + ' After ');

						var link = document.createElement('a');
						link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
						link.appendChild(document.createTextNode("Mail-In Rebate"));

                        $('#rebateTextJS').append(link).append(': ');

					} else {
	                    $('#rebateTextJS').append('Price After ');
	
						var link = document.createElement('a');
						link.href="/specialoffers/details.jsp?promoID=" + promoCode;
						link.appendChild(document.createTextNode("Mail-In Rebate"));

   	                 $('#rebateTextJS').append(link).append(': ');
					}
				}else{
					$('#rebateTextJS').append(document.createTextNode("Price After Mail-In Rebates: "));
				}
				document.getElementById("orderTotalPlusFreightMinusPromo").appendChild(orderTotalPlusFreightMinusPromo);

                $('#rebateText').css('display', 'none');
                $('#rebateTextJS').css('display', 'block');
				document.getElementById("orderTotalMinusPromo").style.display = "none";
				document.getElementById("orderTotalPlusFreightMinusPromo").style.display = "block";
			    if(havePromoAddtl.length > 0 && havePromoAddtl[0].firstChild != null){
					var orderTotalPlusFreightMinusPromoMinusAddtl;
					var orderTotalPlusFreightMinusPromoMinusAddtl_data;
					if(noShippingCost){
						orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data);
						orderTotalPlusFreightMinusPromoMinusAddtl_data = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data;
						if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
							orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data);
							orderTotalPlusFreightMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data;
						}
					}else{
						orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data);
						orderTotalPlusFreightMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl")[0].firstChild.data;
						if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild.data == "true" && mobileSelection == "Y") {
							orderTotalPlusFreightMinusPromoMinusAddtl = document.createTextNode(origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl")[0].firstChild.data);
							orderTotalPlusFreightMinusPromoMinusAddtl_data = origResponseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl")[0].firstChild.data;
						}
					}


					//console.log("freight.js block 7");
                    $('#rebateAddtlTextJS').html('');
					if(multipleRebates.length > 4 ){
                        $('#rebateAddtlTextJS').html('Price with the '+ brandedCardName + ' After ');

						var link = document.createElement('a');
						link.href=brandedCardLandingPage + '?returnPage=/cart/HoldingArea.jsp';
						link.appendChild(document.createTextNode("Mail-In Rebate"));

                        $('#rebateAddtlTextJS').append(link).append(': ');
					}else{
						$('#rebateAddtlTextJS').html("Price with the "+ brandedCardName + " After Mail-In Rebate: ");
					}
					document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").appendChild(orderTotalPlusFreightMinusPromoMinusAddtl);

					document.getElementById("rebateAddtlText").style.display = "none";
					document.getElementById("rebateAddtlTextJS").style.display = "block";
							console.log("kari 3");
					document.getElementById("orderTotalMinusPromoMinusAddtl").style.display = "none";
					document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").style.display = "block";
					setAffirmPrice(orderTotalPlusFreightMinusPromoMinusAddtl_data);
				}
			}
			//End of rebate display

			if(document.getElementById("orderTotalPlusFreightMinusPromo") != null) {
				var previousChildren = document.getElementById("orderTotalPlusFreightMinusPromo").childNodes;
				for(var j=0; j < previousChildren.length; j++) {
					document.getElementById("orderTotalPlusFreightMinusPromo").removeChild(previousChildren.item(j));
				}

				if(document.getElementById("orderTotalMinusPromo") != null){
					previousChildren = document.getElementById("orderTotalMinusPromo").childNodes;
					for(var j=0; j < previousChildren.length; j++) {
						document.getElementById("orderTotalMinusPromo").removeChild(previousChildren.item(j));
					}
				}
			    if(havePromoAddtl.length > 0) {
					previousChildren = document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").childNodes;
					for(var j=0; j < previousChildren.length; j++) {
						document.getElementById("orderTotalPlusFreightMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
					}

					if(document.getElementById("orderTotalMinusPromoMinusAddtl") != null){
						previousChildren = document.getElementById("orderTotalMinusPromoMinusAddtl").childNodes;
						for(var j=0; j < previousChildren.length; j++) {
							document.getElementById("orderTotalMinusPromoMinusAddtl").removeChild(previousChildren.item(j));
						}
					}
				}
			}

			//hide "before Tax and Shipping"
			document.getElementById("beforeTaxShipping").style.display = "none";

			//hide "processing"
			document.getElementById("processing").style.display = "none";

            //Updated with PN7767.
			if(cpuAmount.length > 0){
				document.getElementById("cpuDiscount").style.display = "inline";
                $('#cpuAmt').text(cpuAmount);
                $('.cpuAmtNew').text(" " + cpuAmount + " ");
                $('.cpuDiscountLi').removeClass('hide');
			} else {
				document.getElementById("warehouseFound").style.display = "inline";
			}

			//Updated with PN144995
			if($('#warehouseInfoLink').text().includes("South Bend")) {
				$('.southBendLocation').removeClass('hide');
			}

            //PN7767 - Record some analytics.
            if(hasPreferredInstaller){
                var days = "";
                var altInstallerNum = "";
				var compLevel = "";
                if(covidLevel!=null && covidLevel!="") {
                    if(covidLevel=="1") compLevel = "Standard";
                    else if(covidLevel=="2") compLevel = "No Contact";
                    else if(covidLevel=="3") compLevel = "Mobile No Contact";
                }
                if(isMobileInstallerASAP){
                    if(daysUntilAppointment.length > 0 && daysUntilAppointment[0].firstChild != null && daysUntilAppointment[0].firstChild.data != null && daysUntilAppointment[0].firstChild.data != "" && daysUntilAppointment[0].firstChild.data != "0"){
                        days = daysUntilAppointment[0].firstChild.data;
                    }else if(altDaysUntilAppointment.length > 0 && altDaysUntilAppointment[0].firstChild != null && altDaysUntilAppointment[0].firstChild.data != null && altDaysUntilAppointment[0].firstChild.data != "" && altDaysUntilAppointment[0].firstChild.data != "0"){
                        days = altDaysUntilAppointment[0].firstChild.data;
                    }
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Previous', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP/Saved', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'ASAP', prop45: compLevel, prop56: (days != ""?days:"None"), eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }
                }else if(isMobileInstaller){
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Mobile', prop45: compLevel, prop56: (days != ""?days:"None"), events: (defaultCheckout?'event108':'')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }
                }else if(isRecentInstaller){
                    linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Previous', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                }else if(isSavedInstaller){
                    linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Saved', prop45: compLevel, eVar2: installerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                }else{
                    if(alternateIsRecent){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Previous', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else if(alternateIsSaved){
                        altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred/Saved', prop45: compLevel, eVar2: altInstallerNum[0].firstChild.data, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }else{
                        linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Preferred', prop45: compLevel, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
                    }
                }
            }else{
                linkTracking({linkName: 'tr: checkout: shopping cart: delivery options', prop44: 'Other Installer', prop45: compLevel, events: (defaultCheckout?'event102,event108':'event102')+(schedulerShown?(schedulerShown=="BSRO"?",event96":"")+(schedulerShown=="PEPB"?",event112":""):"")});
            }
		}

		if(runCheckForCartErrors){
			checkForCartErrors();
		}else{
			$('#validateForCheckoutBTN').blur();
		}

        calculateTileHeight();
		return;
	}
}

//PN3129: For the three functions below, pass through "true" into showHide, if you want 
//the items to show. Anything else passed through will hide the items.

function showHideDeliveryDates(delDateArray, showHide){
	if(delDateArray.length > 0){
		for(var i=0; i<delDateArray.length; i++){
			if(showHide){
				delDateArray[i].style.display = "inline";
			}else{
				delDateArray[i].style.display = "none";
			}
		}
	}
}

function showHideDeliveryDateText(delDateTextArray, showHide){
	if(delDateTextArray.length > 0){
		for(var i=0; i<delDateTextArray.length; i++){
			if(showHide){
				delDateTextArray[i].style.display = "inline";
			}else{
				delDateTextArray[i].style.display = "none";
			}
		}
	}
}

function showHideHowSoonIds(howSoonArray, showHide){
	if(howSoonArray.length > 0){
		for(var i=0; i<howSoonArray.length; i++){
			if(showHide){
				howSoonArray[i].style.display = "inline";
			}else{
				howSoonArray[i].style.display = "none";
			}
		}
	}
}

function getDeliveryDateElementsById(baseID){
	var elements = [];
	var count = 0;
	while(document.getElementById(baseID + count)){
		elements.push(document.getElementById(baseID + count));
		count++;
	}
	return elements;
}

function calculateTileHeight(){
	var currHeight = 0;

	var height = -3;
	$('#installer').children().each(function(){
		if(!$(this).hasClass('hide')){
			height += $(this).outerHeight(true);
		}
	});
	if(height > currHeight) currHeight = height;

	height = 10;
	$('#address').children().each(function(){
		if(!$(this).hasClass('hide')){
			height += $(this).outerHeight(true);
		}
	});
	if(height > currHeight) currHeight = height;

	height = 33;
	$('#pickup').children().each(function(){
		if(!$(this).hasClass('hide')){
			height += $(this).outerHeight(true);
		}
	});
	if(height > currHeight) currHeight = height;

	$('#installer').css('height', currHeight);
	$('#address').css('height', currHeight);
	$('#pickup').css('height', currHeight);

    $('#deliveryAndPricing').removeClass('hide');
    if(!$('.loadingLayer').hasClass('hide')) $('.loadingLayer').addClass('hide');
}


function preferredInstallAssignVehicle(shipTo){
	var assignModal = '/cart/modalboxAlerts/assignVehicle.jsp?installCost=&checkout=false&fromWhere=holdingArea';
    if(shipTo == null || shipTo == ""){
        assignModal += '&installID=' + $('#shipTo1-1').val();
    }else{
	    if(typeof $('#' + shipTo).val() != 'undefined'){
		    assignModal += '&installID=' + $('#' + shipTo).val();
	    }
    }

	$.ajax({
		url: '/rest/v1/cartService/findInstallCostItem',
		type: 'GET',
		dataType: 'json',
		cache: false,
		success:function(response){
			if(typeof response.data.itemsNeedVehicle != 'undefined'){
				var keyCount = 0;
				for(var key in response.data.needsVehicle) {
					if(keyCount == 0)
						assignModal += '&itemID=' + response.data.needsVehicle[key];
					else
						assignModal += '&itemIDneedsVehicle=' + response.data.needsVehicle[key];
					
					keyCount++;
				}
			}
			if(typeof response.data.hasVehicle != 'undefined'){
				for(var key in response.data.hasVehicle) {
					assignModal += '&itemIDhasVehicle=' + response.data.hasVehicle[key];
				}
			}
			
			openInfoBox(assignModal,'','default','default','');
		},
		error:function(status){
			
		}
	});
}

function selectItem(ele){
	$(ele).hide();
	$('.dkgraybox').hide();
	var showID = $(ele).attr('data-id');
	$('#'+showID).show();
	$('#assignVehicleCart').show();
	$('input[name="itemID"]').val($(ele).attr('data-itemID'));
}

function updateSavedFreightBeanShip(responseXML){
    var showTopRatedIcon = false;
    var showPreferredInstallerIcon = false;
    var showMobileInstallerIcon = false;
    var showSavedInstallerIcon = false;
    var showPreviousInstallerIcon = false;

	var zip = responseXML.getElementsByTagName("zip");
	if(zip.length > 0 && zip[0].firstChild != null && zip[0].firstChild.data != null){
		document.savedFreightBean.zip.value = zip[0].firstChild.data;
	}else{
		document.savedFreightBean.zip.value = "";
	}

	var lower48 = responseXML.getElementsByTagName("lower48");
	if(lower48.length > 0 && lower48[0].firstChild != null && lower48[0].firstChild.data != null){
		document.savedFreightBean.lower48.value = lower48[0].firstChild.data;
	}else{
		document.savedFreightBean.lower48.value = "false";
	}

	var isExtendedUS = responseXML.getElementsByTagName("isUS");
	if(isExtendedUS.length > 0 && isExtendedUS[0].firstChild != null && isExtendedUS[0].firstChild.data != null){
		document.savedFreightBean.isExtendedUS.value = isExtendedUS[0].firstChild.data;
	}else{
		document.savedFreightBean.isExtendedUS.value = "false";
	}

    var isCanadianShip = responseXML.getElementsByTagName("isCanadianShip");
    if(isCanadianShip.length > 0 && isCanadianShip[0].firstChild != null && isCanadianShip[0].firstChild.data != null){
        document.savedFreightBean.isCanadianShip.value = isCanadianShip[0].firstChild.data;
    }else{
        document.savedFreightBean.isCanadianShip.value = "false";
    }

	var hasFreePreferred = responseXML.getElementsByTagName("hasFreePreferred");
	if(hasFreePreferred.length > 0 && hasFreePreferred[0].firstChild != null &&  hasFreePreferred[0].firstChild.data != null){
		document.savedFreightBean.hasFreePreferred.value = hasFreePreferred[0].firstChild.data;
	}else{
		document.savedFreightBean.hasFreePreferred.value = "false";
	}

    var hasDefaultCheckout = responseXML.getElementsByTagName("defaultCheckout");
    if(hasDefaultCheckout.length > 0 && hasDefaultCheckout[0].firstChild != null && hasDefaultCheckout[0].firstChild.data != null){
        document.savedFreightBean.defaultCheckout.value = hasDefaultCheckout[0].firstChild.data;
    }else{
        document.savedFreightBean.defaultCheckout.value = "false";
    }

	var freight = responseXML.getElementsByTagName("freight");
	if(freight.length > 0 && freight[0].firstChild != null && freight[0].firstChild.data != null){
		document.savedFreightBean.shipFreight.value = freight[0].firstChild.data;
	}else{
		document.savedFreightBean.shipFreight.value = "";
	}

	var freightOnly = responseXML.getElementsByTagName("freightOnly");
	if(freightOnly.length > 0 && freightOnly[0].firstChild != null && freightOnly[0].firstChild.data != null){
		document.savedFreightBean.shipFreightOnly.value = freightOnly[0].firstChild.data;
	}else{
		document.savedFreightBean.shipFreightOnly.value = "";
	}

	var noDeliveryDate = responseXML.getElementsByTagName("noDeliveryDate");
	if(noDeliveryDate.length > 0 && noDeliveryDate[0].firstChild != null && noDeliveryDate[0].firstChild.data != null){
		document.savedFreightBean.noDeliveryDate.value = noDeliveryDate[0].firstChild.data;
	}else{
		document.savedFreightBean.noDeliveryDate.value = "";
	}

	var delDate = responseXML.getElementsByTagName("delDate");
	if(delDate.length > 0 && delDate[0].firstChild != null && delDate[0].firstChild.data != null){
		document.savedFreightBean.delDate.value = delDate[0].firstChild.data;
	}else{
		document.savedFreightBean.delDate.value = "";
	}

	var installerNum = responseXML.getElementsByTagName("installerNum");
	if(installerNum.length > 0 && installerNum[0].firstChild != null && installerNum[0].firstChild.data != null){
		document.savedFreightBean.installerNum.value = installerNum[0].firstChild.data;
	}else{
		document.savedFreightBean.installerNum.value = "";
	}

	var installerName = responseXML.getElementsByTagName("installerName");
	if(installerName.length > 0 && installerName[0].firstChild != null && installerName[0].firstChild.data != null){
		document.savedFreightBean.installerName.value = installerName[0].firstChild.data;
	}else{
		document.savedFreightBean.installerName.value = "";
	}

    var installerDiscountType = responseXML.getElementsByTagName("installerDiscountType");
    if (installerDiscountType.length > 0 && installerDiscountType[0].firstChild != null && installerDiscountType[0].firstChild.data != null)
        document.savedFreightBean.installerDiscountType.value = installerDiscountType[0].firstChild.data;
    else
        document.savedFreightBean.installerDiscountType.value = "";

    var installerDiscountPercent = responseXML.getElementsByTagName("installerDiscountPercent");
    if (installerDiscountPercent.length > 0 && installerDiscountPercent[0].firstChild != null && installerDiscountPercent[0].firstChild.data != null)
        document.savedFreightBean.installerDiscountPercent.value = installerDiscountPercent[0].firstChild.data;
    else
        document.savedFreightBean.installerDiscountPercent.value = "";

	var installCost = responseXML.getElementsByTagName("installCost");
	if(installCost.length > 0 && installCost[0].firstChild != null && installCost[0].firstChild.data != null){
		document.savedFreightBean.installCost.value = installCost[0].firstChild.data;
	}else{
		document.savedFreightBean.installCost.value = "";
	}

    var testimonialQuote = responseXML.getElementsByTagName("testimonialQuote");
    if(testimonialQuote.length > 0 && testimonialQuote[0].firstChild != null && testimonialQuote[0].firstChild.data != null){
        document.savedFreightBean.testimonialQuote.value = testimonialQuote[0].firstChild.data;
    }else{
        document.savedFreightBean.testimonialQuote.value = "";
    }

    var testimonialCity = responseXML.getElementsByTagName("testimonialCity");
    if(testimonialCity.length > 0 && testimonialCity[0].firstChild != null && testimonialCity[0].firstChild.data != null){
        document.savedFreightBean.testimonialCity.value = testimonialCity[0].firstChild.data;
    }else{
        document.savedFreightBean.testimonialCity.value = "";
    }

    var testimonialState = responseXML.getElementsByTagName("testimonialState");
    if(testimonialState.length > 0 && testimonialState[0].firstChild != null && testimonialState[0].firstChild.data != null){
        document.savedFreightBean.testimonialState.value = testimonialState[0].firstChild.data;
    }else{
        document.savedFreightBean.testimonialState.value = "";
    }

    var installOverall = responseXML.getElementsByTagName("installOverall");
    if(installOverall.length > 0 && installOverall[0].firstChild != null && installOverall[0].firstChild.data != null){
        document.savedFreightBean.installOverall.value = installOverall[0].firstChild.data;
    }else{
        document.savedFreightBean.installOverall.value = "";
    }

    var installResponses = responseXML.getElementsByTagName("installResponses");
    if(installResponses.length > 0 && installResponses[0].firstChild != null && installResponses[0].firstChild.data != null){
        document.savedFreightBean.installResponses.value = installResponses[0].firstChild.data;
    }else{
        document.savedFreightBean.installResponses.value = "";
    }

    var installTopRated = responseXML.getElementsByTagName("installTopRated");
    if(installTopRated.length > 0 && installTopRated[0].firstChild != null && installTopRated[0].firstChild.data != null){
        if(installTopRated[0].firstChild.data == "true"){
            showTopRatedIcon = true;
        }
        document.savedFreightBean.installTopRated.value = installTopRated[0].firstChild.data;
    }else{
        document.savedFreightBean.installTopRated.value = "";
    }

    var showPreferredIcon = responseXML.getElementsByTagName("showPreferredIcon");
    if(showPreferredIcon.length > 0 && showPreferredIcon[0].firstChild != null && showPreferredIcon[0].firstChild.data != null){
        if(showPreferredIcon[0].firstChild.data == "true"){
            showPreferredInstallerIcon = true;
        }
        document.savedFreightBean.showPreferredIcon.value = showPreferredIcon[0].firstChild.data;
    }else{
        document.savedFreightBean.showPreferredIcon.value = "false";
    }

	var allGreenInPreferred = responseXML.getElementsByTagName("allGreenInPreferred");
	if(allGreenInPreferred.length > 0 && allGreenInPreferred[0].firstChild != null && allGreenInPreferred[0].firstChild.data != null){
		document.savedFreightBean.allGreenInPreferred.value = allGreenInPreferred[0].firstChild.data;
	}else{
		document.savedFreightBean.allGreenInPreferred.value = "";
	}

	var installerNumFound = responseXML.getElementsByTagName("installerNumFound");
	if(installerNumFound.length > 0 && installerNumFound[0].firstChild != null && installerNumFound[0].firstChild.data != null){
		document.savedFreightBean.installerNumFound.value = installerNumFound[0].firstChild.data;
	}else{
		document.savedFreightBean.installerNumFound.value = "";
	}

	var isRecentInstaller = responseXML.getElementsByTagName("isRecentInstaller");
	if(isRecentInstaller.length > 0 && isRecentInstaller[0].firstChild != null && isRecentInstaller[0].firstChild.data != null){
        if(isRecentInstaller[0].firstChild.data == "true"){
            showPreviousInstallerIcon = true;
        }
		document.savedFreightBean.isRecentInstaller.value = isRecentInstaller[0].firstChild.data;
	}else{
		document.savedFreightBean.isRecentInstaller.value = "false";
	}

	var isMobileInstaller = responseXML.getElementsByTagName("isMobileInstaller");
	if(isMobileInstaller.length > 0 && isMobileInstaller[0].firstChild != null && isMobileInstaller[0].firstChild.data != null){
        if(isMobileInstaller[0].firstChild.data == "true"){
            showMobileInstallerIcon = true;
        }
		document.savedFreightBean.isMobileInstaller.value = isMobileInstaller[0].firstChild.data;
	}else{
		document.savedFreightBean.isMobileInstaller.value = "false";
	}

	var isCovidCompliant = responseXML.getElementsByTagName("covid19");
    if(isCovidCompliant.length > 0 && isCovidCompliant[0].firstChild != null && isCovidCompliant[0].firstChild.data != null){
        document.savedFreightBean.covid19.value = isCovidCompliant[0].firstChild.data;
    }

    var schedulerInfo = responseXML.getElementsByTagName("schedulerInfo");
    if(schedulerInfo.length > 0 && schedulerInfo[0].firstChild != null && schedulerInfo[0].firstChild.data != null) {
        document.savedFreightBean.schedulerInfo.value = schedulerInfo[0].firstChild.data;
    }

    var isSavedInstaller = responseXML.getElementsByTagName("isSavedInstaller");
    if(isSavedInstaller.length > 0 && isSavedInstaller[0].firstChild != null && isSavedInstaller[0].firstChild.data != null){
        if(isSavedInstaller[0].firstChild.data == "true"){
            showSavedInstallerIcon = true;
        }
        document.savedFreightBean.isSavedInstaller.value = isSavedInstaller[0].firstChild.data;
    }else{
        document.savedFreightBean.isSavedInstaller.value = "false";
    }

	var preferredWarehouseBasedOnZip = responseXML.getElementsByTagName("preferredWarehouseBasedOnZip");
	if(preferredWarehouseBasedOnZip.length > 0 && preferredWarehouseBasedOnZip[0].firstChild != null && preferredWarehouseBasedOnZip[0].firstChild.data != null){
		document.savedFreightBean.preferredWarehouseBasedOnZip.value = preferredWarehouseBasedOnZip[0].firstChild.data;
	}else{
		document.savedFreightBean.preferredWarehouseBasedOnZip.value = "";
	}

	var qualifyFreeShip = responseXML.getElementsByTagName("qualifyFreeShip");
	if(qualifyFreeShip.length > 0 && qualifyFreeShip[0].firstChild != null && qualifyFreeShip[0].firstChild.data != null){
		document.savedFreightBean.qualifyFreeShip.value = qualifyFreeShip[0].firstChild.data;
	}else{
		document.savedFreightBean.qualifyFreeShip.value = "false";
	}

	var taxes = responseXML.getElementsByTagName("taxes");
	if(taxes.length > 0 && taxes[0].firstChild != null && taxes[0].firstChild.data != null){
		document.savedFreightBean.shipTaxes.value = taxes[0].firstChild.data;
	}else{
		document.savedFreightBean.shipTaxes.value = "";
	}

	var fees = responseXML.getElementsByTagName("fees");
	if(fees.length > 0 && fees[0].firstChild != null && fees[0].firstChild.data != null){
		document.savedFreightBean.shipFees.value = fees[0].firstChild.data;
	}else{
		document.savedFreightBean.shipFees.value = "";
	}

    var excise = responseXML.getElementsByTagName('exciseTax');
    if(excise.length > 0 && excise[0].firstChild != null && excise[0].firstChild.data != null){
        document.savedFreightBean.shipExciseTax.value = excise[0].firstChild.data;
    }else{
        document.savedFreightBean.shipExciseTax.value = "";
    }

    var canHST = responseXML.getElementsByTagName("canHST");
    if(canHST.length > 0 && canHST[0].firstChild != null && canHST[0].firstChild.data != null){
        document.savedFreightBean.shipCanHST.value = canHST[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanHST.value = "";
    }

    var canGST = responseXML.getElementsByTagName("canGST");
    if(canGST.length > 0 && canGST[0].firstChild != null && canGST[0].firstChild.data != null){
        document.savedFreightBean.shipCanGST.value = canGST[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanGST.value = "";
    }

    var canPST = responseXML.getElementsByTagName("canPST");
    if(canPST.length > 0 && canPST[0].firstChild != null && canPST[0].firstChild.data != null){
        document.savedFreightBean.shipCanPST.value = canPST[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanPST.value = "";
    }

    var canDuty = responseXML.getElementsByTagName("canDuty");
    if(canDuty.length > 0 && canDuty[0].firstChild != null && canDuty[0].firstChild.data != null){
        document.savedFreightBean.shipCanDuty.value = canDuty[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanDuty.value = "";
    }

    var canLevy = responseXML.getElementsByTagName("canLevy");
    if(canLevy.length > 0 && canLevy[0].firstChild != null && canLevy[0].firstChild.data != null){
        document.savedFreightBean.shipCanLevy.value = canLevy[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanLevy.value = "";
    }

    var canBroker = responseXML.getElementsByTagName("canBroker");
    if(canBroker.length > 0 && canBroker[0].firstChild != null && canBroker[0].firstChild.data != null){
        document.savedFreightBean.shipCanBroker.value = canBroker[0].firstChild.data;
    }else{
        document.savedFreightBean.shipCanBroker.value = "";
    }

	var orderTotalPlusFreightMinusPromo = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo");
	if(orderTotalPlusFreightMinusPromo.length > 0 && orderTotalPlusFreightMinusPromo[0].firstChild != null && orderTotalPlusFreightMinusPromo[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value = orderTotalPlusFreightMinusPromo[0].firstChild.data;
	}else{
		document.savedFreightBean.shipOrderTotalPlusFreightMinusPromo.value = "";
	}

	var orderTotalPlusFreightMinusPromoMinusAddtl = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl");
	if(orderTotalPlusFreightMinusPromoMinusAddtl.length > 0 && orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild != null && orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value = orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild.data;
	}else{
		document.savedFreightBean.shipOrderTotalPlusFreightMinusPromoMinusAddtl.value = "";
	}

	var promoCode = responseXML.getElementsByTagName("promoCode");
	if(promoCode.length > 0 && promoCode[0].firstChild != null && promoCode[0].firstChild.data != null){
		document.savedFreightBean.promoCode.value = promoCode[0].firstChild.data;
	}else{
		document.savedFreightBean.promoCode.value = "";
	}

	var brandedCardName = responseXML.getElementsByTagName("brandedCardName");
	if(brandedCardName.length > 0 && brandedCardName[0].firstChild != null && brandedCardName[0].firstChild.data != null){
		document.savedFreightBean.brandedCardName.value = brandedCardName[0].firstChild.data;
	}else{
		document.savedFreightBean.brandedCardName.value = "";
	}

	var brandedCardLandingPage = responseXML.getElementsByTagName("brandedCardLandingPage");
	if(brandedCardLandingPage.length > 0 && brandedCardLandingPage[0].firstChild != null && brandedCardLandingPage[0].firstChild.data != null){
		document.savedFreightBean.brandedCardLandingPage.value = brandedCardLandingPage[0].firstChild.data;
	}else{
		document.savedFreightBean.brandedCardLandingPage.value = "";
	}

	var promoCCOnly = responseXML.getElementsByTagName("promoCCOnly");
	if(promoCCOnly.length > 0 && promoCCOnly[0].firstChild != null && promoCCOnly[0].firstChild.data != null){
		document.savedFreightBean.promoCCOnly.value = promoCCOnly[0].firstChild.data;
	}else{
		document.savedFreightBean.promoCCOnly.value = "";
	}

	var multipleRebates = responseXML.getElementsByTagName("multipleRebates");
	if(multipleRebates.length > 0 && multipleRebates[0].firstChild != null && multipleRebates[0].firstChild.data != null){
		document.savedFreightBean.multipleRebates.value = multipleRebates[0].firstChild.data;
	}else{
		document.savedFreightBean.multipleRebates.value = "false";
	}

	var rhpZip = responseXML.getElementsByTagName("rhpZip");
	if(rhpZip.length > 0 && rhpZip[0].firstChild != null && rhpZip[0].firstChild.data != null){
		document.savedFreightBean.rhpZip.value = rhpZip[0].firstChild.data;
	}else{
		document.savedFreightBean.rhpZip.value = "";
	}

	var rhpIndex = responseXML.getElementsByTagName("rhpIndex");
	var rhpCost = responseXML.getElementsByTagName("rhpCost");
	if(document.savedFreightBean.rhpIndex != null){
		$("form[name=savedFreightBean]").find("input[name=rhpIndex]").each(function(){
			$(this).remove();
		});
	}
	if(document.savedFreightBean.rhpCost != null){
		$("form[name=savedFreightBean]").find("input[name=rhpCost]").each(function(){
			$(this).remove();
		});
	}
	if(rhpIndex.length > 0){
		for(var i = 0; i < rhpIndex.length; i++){
            var currRHPIndex = rhpIndex[i].firstChild.data;
			var rhpIndexInput = document.createElement("input");
			rhpIndexInput.type = "hidden";
			rhpIndexInput.name = "rhpIndex";
			rhpIndexInput.value = currRHPIndex;
            $('#savedFreightBean').append(rhpIndexInput);

            if(rhpCost[i] != null && rhpCost[i].firstChild != null && rhpCost[i].firstChild.data != null){
                var currRHPCost = rhpCost[i].firstChild.data;
    			var rhpCostInput = document.createElement("input");
    			rhpCostInput.type = "hidden";
    			rhpCostInput.name = "rhpCost";
    			rhpCostInput.value = currRHPCost;
    			$('#savedFreightBean').append(rhpCostInput);
            }
		}
	}

	var orderTotalMinusPromo = responseXML.getElementsByTagName("orderTotalMinusPromo");
	if(orderTotalMinusPromo.length > 0 && orderTotalMinusPromo[0].firstChild != null && orderTotalMinusPromo[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalMinusPromo.value = orderTotalMinusPromo[0].firstChild.data;
	}else{
		document.savedFreightBean.shipOrderTotalMinusPromo.value = "";
	}

	var orderTotalMinusPromoMinusAddtl = responseXML.getElementsByTagName("orderTotalMinusPromoMinusAddtl");
	if(orderTotalMinusPromoMinusAddtl.length > 0 && orderTotalMinusPromoMinusAddtl[0].firstChild != null && orderTotalMinusPromoMinusAddtl[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalMinusPromoMinusAddtl.value = orderTotalMinusPromoMinusAddtl[0].firstChild.data;
	}else{
		document.savedFreightBean.shipOrderTotalMinusPromoMinusAddtl.value = "";
	}

	var orderTotal = responseXML.getElementsByTagName("orderTotal");
	if(orderTotal.length > 0 && orderTotal[0].firstChild != null && orderTotal[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotal.value = orderTotal[0].firstChild.data;
	}else{
		document.savedFreightBean.shipOrderTotal.value = "";
	}

	var orderTotalPlusFreight = responseXML.getElementsByTagName("orderTotalPlusFreight");
	if(orderTotalPlusFreight.length > 0 && orderTotalPlusFreight[0].firstChild != null && orderTotalPlusFreight[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalPlusFreight.value = orderTotalPlusFreight[0].firstChild.data;
		//setAffirmPrice(orderTotalPlusFreight[0].firstChild.data);
	}else{
		document.savedFreightBean.shipOrderTotalPlusFreight.value = "";
	}

	var orderTotalMinusCPU = responseXML.getElementsByTagName("orderTotalMinusCPU");
	if(orderTotalMinusCPU.length > 0 && orderTotalMinusCPU[0].firstChild != null && orderTotalMinusCPU[0].firstChild.data != null){
		document.savedFreightBean.shipOrderTotalMinusCPU.value = orderTotalMinusCPU[0].firstChild.data;
		//setAffirmPrice(orderTotalMinusCPU[0].firstChild.data);
	}else{
		document.savedFreightBean.shipOrderTotalMinusCPU.value = "";
	}

	var orderHasPostalGC = responseXML.getElementsByTagName("orderHasPostalGC");
	if(orderHasPostalGC.length > 0 && orderHasPostalGC[0].firstChild != null && orderHasPostalGC[0].firstChild.data != null){
		document.savedFreightBean.orderHasPostalGC.value = orderHasPostalGC[0].firstChild.data;
		//setAffirmPrice(orderHasPostalGC[0].firstChild.data);
	}else{
		document.savedFreightBean.orderHasPostalGC.value = "false";
	}

	var changeZipCode = responseXML.getElementsByTagName("changeZipCode");
	if(changeZipCode.length > 0 && changeZipCode[0].firstChild != null && changeZipCode[0].firstChild.data != null){
		document.savedFreightBean.changeZipCode.value = changeZipCode[0].firstChild.data;
	}else{
		document.savedFreightBean.changeZipCode.value = "";
	}

    var altInstaller = responseXML.getElementsByTagName("altInstaller");
    if(altInstaller.length > 0){
        var altInstallerName = altInstaller[0].getElementsByTagName("installerName");
        if(altInstallerName.length > 0 && altInstallerName[0].firstChild.data != null){
            document.savedFreightBean.altInstallerName.value = altInstallerName[0].firstChild.data;
        }else{
            document.savedFreightBean.altInstallerName.value = "";
        }

        var altInstallerDiscountType = altInstaller[0].getElementsByTagName("installerDiscountType");
        if (altInstallerDiscountType.length > 0 && altInstallerDiscountType[0].firstChild != null && altInstallerDiscountType[0].firstChild.data != null)
            document.savedFreightBean.altInstallerDiscountType.value = altInstallerDiscountType[0].firstChild.data;
        else
            document.savedFreightBean.altInstallerDiscountType.value = "";

        var altInstallerDiscountPercent = altInstaller[0].getElementsByTagName("installerDiscountPercent");
        if (altInstallerDiscountPercent.length > 0 && altInstallerDiscountPercent[0].firstChild != null && altInstallerDiscountPercent[0].firstChild.data != null)
            document.savedFreightBean.altInstallerDiscountPercent.value = altInstallerDiscountPercent[0].firstChild.data;
        else
            document.savedFreightBean.altInstallerDiscountPercent.value = "";

        var altInstallerNum = altInstaller[0].getElementsByTagName("installerNum");
        if(altInstallerNum.length > 0 && altInstallerNum[0].firstChild.data != null){
            document.savedFreightBean.altInstallerNum.value = altInstallerNum[0].firstChild.data;
        }else{
            document.savedFreightBean.altInstallerNum.value = "";
        }

        var altIsMobile = altInstaller[0].getElementsByTagName("isMobileInstaller");
        if(altIsMobile.length > 0 && altIsMobile[0].firstChild.data != null){
            if(altIsMobile[0].firstChild.data == "true"){
                showMobileInstallerIcon = true;
            }
            document.savedFreightBean.altIsMobileInstaller.value = altIsMobile[0].firstChild.data;
        }else{
            document.savedFreightBean.altIsMobileInstaller.value = "";
        }

        var altIsRecent = altInstaller[0].getElementsByTagName("isRecentInstaller");
        if(altIsRecent.length > 0 && altIsRecent[0].firstChild.data != null){
            if(altIsRecent[0].firstChild.data == "true"){
                showPreviousInstallerIcon = true;
            }
            document.savedFreightBean.altIsRecentInstaller.value = altIsRecent[0].firstChild.data;
        }else{
            document.savedFreightBean.altIsRecentInstaller.value = "";
        }

		var altIsCovid19 = altInstaller[0].getElementsByTagName("covid19");
        if(altIsCovid19.length > 0 && altIsCovid19[0].firstChild != null && altIsCovid19[0].firstChild.data != null){
            document.savedFreightBean.altCovid19.value = altIsCovid19[0].firstChild.data;
       }

        var altIsSaved = altInstaller[0].getElementsByTagName("isSavedInstaller");
        if(altIsSaved.length > 0 && altIsSaved[0].firstChild.data != null){
            if(altIsSaved[0].firstChild.data == "true"){
                showSavedInstallerIcon = true;
            }
            document.savedFreightBean.altIsSavedInstaller.value = altIsSaved[0].firstChild.data;
        }else{
            document.savedFreightBean.altIsSavedInstaller.value = "";
        }

        var altIsTopRated = altInstaller[0].getElementsByTagName("isTopRated");
        if(altIsTopRated.length > 0 && altIsTopRated[0].firstChild.data != null){
            if(altIsTopRated[0].firstChild.data == "true"){
                showTopRatedIcon = true;
            }
            document.savedFreightBean.altIsTopRated.value = altIsTopRated[0].firstChild.data;
        }else{
            document.savedFreightBean.altIsTopRated.value = "";
        }

        var altOverallRating = altInstaller[0].getElementsByTagName("overallRating");
        if(altOverallRating.length > 0 && altOverallRating[0].firstChild.data != null){
            document.savedFreightBean.altOverallRating.value = altOverallRating[0].firstChild.data;
        }else{
            document.savedFreightBean.altOverallRating.value = "";
        }

        var altInstallResponses = altInstaller[0].getElementsByTagName("installResponses");
        if(altInstallResponses.length > 0 && altInstallResponses[0].firstChild != null && altInstallResponses[0].firstChild.data != null){
            document.savedFreightBean.altInstallResponses.value = altInstallResponses[0].firstChild.data;
        }else{
            document.savedFreightBean.altInstallResponses.value = "";
        }

        var altInstallerPreferred = altInstaller[0].getElementsByTagName("installerPreferred");
        if(altInstallerPreferred.length > 0 && altInstallerPreferred[0].firstChild != null && altInstallerPreferred[0].firstChild.data != null){
            document.savedFreightBean.altInstallerPreferred.value = altInstallerPreferred[0].firstChild.data;
        }else{
            document.savedFreightBean.altInstallerPreferred.value = "false";
        }

        var altInstallCost = altInstaller[0].getElementsByTagName("installCost");
        if(altInstallCost.length > 0 && altInstallCost[0].firstChild.data != null){
            document.savedFreightBean.altInstallCost.value = altInstallCost[0].firstChild.data;
        }else{
            document.savedFreightBean.altInstallCost.value = "";
        }

        var altTestimonialQuote = altInstaller[0].getElementsByTagName("testimonialQuote");
        if(altTestimonialQuote.length > 0 && altTestimonialQuote[0].firstChild.data != null){
            document.savedFreightBean.altTestimonialQuote.value = altTestimonialQuote[0].firstChild.data;
        }else{
            document.savedFreightBean.altTestimonialQuote.value = "";
        }

        var altTestimonialCity = altInstaller[0].getElementsByTagName("testimonialCity");
        if(altTestimonialCity.length > 0 && altTestimonialCity[0].firstChild.data != null){
            document.savedFreightBean.altTestimonialCity.value = altTestimonialCity[0].firstChild.data;
        }else{
            document.savedFreightBean.altTestimonialCity.value = "";
        }

        var altTestimonialState = altInstaller[0].getElementsByTagName("testimonialState");
        if(altTestimonialState.length > 0 && altTestimonialState[0].firstChild.data != null){
            document.savedFreightBean.altTestimonialState.value = altTestimonialState[0].firstChild.data;
        }else{
            document.savedFreightBean.altTestimonialState.value = "";
        }

        var altHasFreePreferred = altInstaller[0].getElementsByTagName("hasFreePreferred");
        if(altHasFreePreferred.length > 0 && altHasFreePreferred[0].firstChild.data != null){
            document.savedFreightBean.altHasFreePreferred.value = altHasFreePreferred[0].firstChild.data;
        }else{
            document.savedFreightBean.altHasFreePreferred.value = "";
        }
    }else{
        document.savedFreightBean.altInstallerName.value = "";
        document.savedFreightBean.altInstallerDiscountType.value = "";
        document.savedFreightBean.altInstallerDiscountPercent.value = "";
        document.savedFreightBean.altInstallerNum.value = "";
        document.savedFreightBean.altIsMobileInstaller.value = "";
        document.savedFreightBean.altIsRecentInstaller.value = "";
		document.savedFreightBean.altCovid19.value = "";
        document.savedFreightBean.altIsSavedInstaller.value = "";
        document.savedFreightBean.altIsTopRated.value = "";
        document.savedFreightBean.altOverallRating.value = "";
        document.savedFreightBean.altInstallResponses.value = "";
        document.savedFreightBean.altInstallerPreferred.value = "false";
        document.savedFreightBean.altInstallCost.value = "";
        document.savedFreightBean.altHasFreePreferred.value = "";
    }

	var warehouseName = responseXML.getElementsByTagName("warehouseName");
	if(warehouseName.length > 0 && warehouseName[0].firstChild != null && warehouseName[0].firstChild.data != null){
		document.savedFreightBean.warehouseName.value = warehouseName[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseName.value = "";
	}

	var warehouseAddtlInfo = responseXML.getElementsByTagName("warehouseAddtlInfo");
	if(warehouseAddtlInfo.length > 0 && warehouseAddtlInfo[0].firstChild != null && warehouseAddtlInfo[0].firstChild.data != null){
		document.savedFreightBean.warehouseAddtlInfo.value = warehouseAddtlInfo[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseAddtlInfo.value = "";
	}

	var warehouseTimeZone = responseXML.getElementsByTagName("warehouseTimeZone");
	if(warehouseTimeZone.length > 0 && warehouseTimeZone[0].firstChild != null && warehouseTimeZone[0].firstChild.data != null){
		document.savedFreightBean.warehouseTimeZone.value = warehouseTimeZone[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseTimeZone.value = "";
	}

	var warehouseWeekday = responseXML.getElementsByTagName("warehouseWeekday");
	if(warehouseWeekday.length > 0 && warehouseWeekday[0].firstChild != null && warehouseWeekday[0].firstChild.data != null){
		document.savedFreightBean.warehouseWeekday.value = warehouseWeekday[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseWeekday.value = "";
	}

	var warehouseWeekend = responseXML.getElementsByTagName("warehouseWeekend");
	if(warehouseWeekend.length > 0 && warehouseWeekend[0].firstChild != null && warehouseWeekend[0].firstChild.data != null){
		document.savedFreightBean.warehouseWeekend.value = warehouseWeekend[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseWeekend.value = "";
	}

	var warehouseAddress1 = responseXML.getElementsByTagName("warehouseAddress1");
	if(warehouseAddress1.length > 0 && warehouseAddress1[0].firstChild != null && warehouseAddress1[0].firstChild.data != null){
		document.savedFreightBean.warehouseAddress1.value = warehouseAddress1[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseAddress1.value = "";
	}

	var warehouseAddress2 = responseXML.getElementsByTagName("warehouseAddress2");
	if(warehouseAddress2.length > 0 && warehouseAddress2[0].firstChild != null && warehouseAddress2[0].firstChild.data != null){
		document.savedFreightBean.warehouseAddress2.value = warehouseAddress2[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseAddress2.value = "";
	}

	var warehouseCity = responseXML.getElementsByTagName("warehouseCity");
	if(warehouseCity.length > 0 && warehouseCity[0].firstChild != null && warehouseCity[0].firstChild.data != null){
		document.savedFreightBean.warehouseCity.value = warehouseCity[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseCity.value = "";
	}

	var warehouseState = responseXML.getElementsByTagName("warehouseState");
	if(warehouseState.length > 0 && warehouseState[0].firstChild != null && warehouseState[0].firstChild.data != null){
		document.savedFreightBean.warehouseState.value = warehouseState[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseState.value = "";
	}

	var warehouseZip = responseXML.getElementsByTagName("warehouseZip");
	if(warehouseZip.length > 0 && warehouseZip[0].firstChild != null && warehouseZip[0].firstChild.data != null){
		document.savedFreightBean.warehouseZip.value = warehouseZip[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseZip.value = "";
	}

	var warehouseNote1 = responseXML.getElementsByTagName("warehouseNote1");
	if(warehouseNote1.length > 0 && warehouseNote1[0].firstChild != null && warehouseNote1[0].firstChild.data != null){
		document.savedFreightBean.warehouseNote1.value = warehouseNote1[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseNote1.value = "";
	}

	var warehouseNote2 = responseXML.getElementsByTagName("warehouseNote2");
	if(warehouseNote2.length > 0 && warehouseNote2[0].firstChild != null && warehouseNote2[0].firstChild.data != null){
		document.savedFreightBean.warehouseNote2.value = warehouseNote2[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseNote2.value = "";
	}

	var warehouseMapURL = responseXML.getElementsByTagName("warehouseMapURL");
	if(warehouseMapURL.length > 0 && warehouseMapURL[0].firstChild != null && warehouseMapURL[0].firstChild.data != null){
		document.savedFreightBean.warehouseMapURL.value = warehouseMapURL[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseMapURL.value = "";
	}

	var warehouseID = responseXML.getElementsByTagName("warehouseID");
	if(warehouseID.length > 0 && warehouseID[0].firstChild != null && warehouseID[0].firstChild.data != null){
		document.savedFreightBean.warehouseID.value = warehouseID[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseID.value = "";
	}

	var cpuAvailable = responseXML.getElementsByTagName("cpuAvailable");
	if(cpuAvailable.length > 0 && cpuAvailable[0].firstChild != null && cpuAvailable[0].firstChild.data != null){
		document.savedFreightBean.cpuAvailable.value = cpuAvailable[0].firstChild.data;
	}else{
		document.savedFreightBean.cpuAvailable.value = "false";
	}

	var cpuAmount = responseXML.getElementsByTagName("cpuAmount");
	if(cpuAmount.length > 0 && cpuAmount[0].firstChild != null && cpuAmount[0].firstChild.data != null){
		document.savedFreightBean.cpuAmount.value = cpuAmount[0].firstChild.data;
	}else{
		document.savedFreightBean.cpuAmount.value = "";
	}

	var warehouseNoCPU = responseXML.getElementsByTagName("warehouseNoCPU");
	if(warehouseNoCPU.length > 0 && warehouseNoCPU[0].firstChild != null && warehouseNoCPU[0].firstChild.data != null){
		document.savedFreightBean.warehouseNoCPU.value = warehouseNoCPU[0].firstChild.data;
	}else{
		document.savedFreightBean.warehouseNoCPU.value = "";
	}

	var cpuLookupError = responseXML.getElementsByTagName("CPULookupError");
	if(cpuLookupError.length > 0 && cpuLookupError[0].firstChild != null && cpuLookupError[0].firstChild.data != null){
		document.savedFreightBean.cpuLookupError.value = cpuLookupError[0].firstChild.data;
	}else{
		document.savedFreightBean.cpuLookupError.value = "";
	}

	var outOfStock = responseXML.getElementsByTagName("outOfStock");
	if(outOfStock.length > 0 && outOfStock[0].firstChild != null && outOfStock[0].firstChild.data != null){
		document.savedFreightBean.outOfStock.value = outOfStock[0].firstChild.data;
	}else{
		document.savedFreightBean.outOfStock.value = "false";
	}

    var noFreight = responseXML.getElementsByTagName("noFreight");
    if(noFreight.length > 0 && noFreight[0].firstChild != null && noFreight[0].firstChild.data != null){
        document.savedFreightBean.noFreight.value = noFreight[0].firstChild.data;
    }else{
        document.savedFreightBean.noFreight.value = "false";
    }

    var invalidZip = responseXML.getElementsByTagName("invalidZip");
    if(invalidZip.length > 0 && invalidZip[0].firstChild != null && invalidZip[0].firstChild.data != null){
        document.savedFreightBean.invalidZip.value = invalidZip[0].firstChild.data;
    }else{
        document.savedFreightBean.invalidZip.value = "false";
    }

    if(showTopRatedIcon || showPreferredInstallerIcon || showMobileInstallerIcon || showSavedInstallerIcon || showPreviousInstallerIcon){
        if(showTopRatedIcon){
            $('#installerIcons').find('.tR').show();
        }
        if(showPreferredInstallerIcon && showMobileInstallerIcon){
            $('#installerIcons').find('.mobPref').show();
        } 
        if(showPreferredInstallerIcon && !showMobileInstallerIcon){
            $('#installerIcons').find('.prefInst').show();
        } 
        if(showMobileInstallerIcon && !showPreferredInstallerIcon){
            $('#installerIcons').find('.mobInst').show();
        }
        if(showSavedInstallerIcon){
            $('#installerIcons').find('.savedInst').show();
        }
        if(showPreviousInstallerIcon){
            $('#installerIcons').find('.prevInst').show();
        }
        $('#installerIcons').show();
    }
}

function updateSavedFreightBeanCPU(responseXML){
	var cpuNotAvail = responseXML.getElementsByTagName("cpuNotAvail");
	if(cpuNotAvail.length > 0 && cpuNotAvail[0].firstChild != null && cpuNotAvail[0].firstChild.data != null){
		document.savedFreightBean.cpuNotAvail.value = cpuNotAvail[0].firstChild.data;
	}else{
		document.savedFreightBean.cpuNotAvail.value = "false";
	
		var warehouseZip = responseXML.getElementsByTagName("warehouseZip");
		if(warehouseZip.length > 0 && warehouseZip[0].firstChild != null && warehouseZip[0].firstChild.data != null){
			document.savedFreightBean.warehouseZip.value = warehouseZip[0].firstChild.data;
		}else{
			document.savedFreightBean.warehouseZip.value = "";
		}

		var warehouseCode = responseXML.getElementsByTagName("warehouseCode");
		if(warehouseCode.length > 0 && warehouseCode[0].firstChild != null && warehouseCode[0].firstChild.data != null){
			document.savedFreightBean.warehouseCode.value = warehouseCode[0].firstChild.data;
		}else{
			document.savedFreightBean.warehouseCode.value = "";
		}

		var freightOnly = responseXML.getElementsByTagName("freightOnly");
		if(freightOnly.length > 0 && freightOnly[0].firstChild != null && freightOnly[0].firstChild.data != null){
			document.savedFreightBean.cpuFreightOnly.value = freightOnly[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuFreightOnly.value = "";
		}

		var taxes = responseXML.getElementsByTagName("taxes");
		if(taxes.length > 0 && taxes[0].firstChild != null && taxes[0].firstChild.data != null){
			document.savedFreightBean.cpuTaxes.value = taxes[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuTaxes.value = "";
		}

		var fees = responseXML.getElementsByTagName("fees");
		if(fees.length > 0 && fees[0].firstChild != null && fees[0].firstChild.data != null){
			document.savedFreightBean.cpuFees.value = fees[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuFees.value = "";
		}

        var excise = responseXML.getElementsByTagName("exciseTax");
        if(excise.length > 0 && excise[0].firstChild != null && excise[0].firstChild.data != null){
            document.savedFreightBean.cpuExciseTax.value = excise[0].firstChild.data;
        }else{
            document.savedFreightBean.cpuExciseTax.value = "";
        }

		var orderTotalPlusFreightMinusPromo = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromo");
		if(orderTotalPlusFreightMinusPromo.length > 0 && orderTotalPlusFreightMinusPromo[0].firstChild != null && orderTotalPlusFreightMinusPromo[0].firstChild.data != null){
			document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo.value = orderTotalPlusFreightMinusPromo[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromo.value = "";
		}

		var orderTotalPlusFreightNoDiscMinusPromo = responseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromo");
		if(orderTotalPlusFreightNoDiscMinusPromo.length > 0 && orderTotalPlusFreightNoDiscMinusPromo[0].firstChild != null && orderTotalPlusFreightNoDiscMinusPromo[0].firstChild.data != null){
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDiscMinusPromo.value = orderTotalPlusFreightNoDiscMinusPromo[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDiscMinusPromo.value = "";
		}

		var orderTotalPlusFreightMinusPromoMinusAddtl = responseXML.getElementsByTagName("orderTotalPlusFreightMinusPromoMinusAddtl");
		if(orderTotalPlusFreightMinusPromoMinusAddtl.length > 0 && orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild != null && orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild.data != null){
			document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value = orderTotalPlusFreightMinusPromoMinusAddtl[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreightMinusPromoMinusAddtl.value = "";
		}

		var orderTotalPlusFreightNoDiscMinusPromoMinusAddtl = responseXML.getElementsByTagName("orderTotalPlusFreightNoDiscMinusPromoMinusAddtl");
		if(orderTotalPlusFreightNoDiscMinusPromoMinusAddtl.length > 0 && orderTotalPlusFreightNoDiscMinusPromoMinusAddtl[0].firstChild != null && orderTotalPlusFreightNoDiscMinusPromoMinusAddtl[0].firstChild.data != null){
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDiscMinusPromoMinusAddtl.value = orderTotalPlusFreightNoDiscMinusPromoMinusAddtl[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDiscMinusPromoMinusAddtl.value = "";
		}

		var promoCode = responseXML.getElementsByTagName("promoCode");
		if(promoCode.length > 0 && promoCode[0].firstChild != null && promoCode[0].firstChild.data != null){
			document.savedFreightBean.promoCode.value = promoCode[0].firstChild.data;
		}else{
			document.savedFreightBean.promoCode.value = "";
		}

		var brandedCardName = responseXML.getElementsByTagName("brandedCardName");
		if(brandedCardName.length > 0 && brandedCardName[0].firstChild != null && brandedCardName[0].firstChild.data != null){
			document.savedFreightBean.brandedCardName.value = brandedCardName[0].firstChild.data;
		}else{
			document.savedFreightBean.brandedCardName.value = "";
		}

		var brandedCardLandingPage = responseXML.getElementsByTagName("brandedCardLandingPage");
		if(brandedCardLandingPage.length > 0 && brandedCardLandingPage[0].firstChild != null && brandedCardLandingPage[0].firstChild.data != null){
			document.savedFreightBean.brandedCardLandingPage.value = brandedCardLandingPage[0].firstChild.data;
		}else{
			document.savedFreightBean.brandedCardLandingPage.value = "";
		}

		var promoCCOnly = responseXML.getElementsByTagName("promoCCOnly");
		if(promoCCOnly.length > 0 && promoCCOnly[0].firstChild != null && promoCCOnly[0].firstChild.data != null){
			document.savedFreightBean.promoCCOnly.value = promoCCOnly[0].firstChild.data;
		}else{
			document.savedFreightBean.promoCCOnly.value = "";
		}

		var multipleRebates = responseXML.getElementsByTagName("multipleRebates");
		if(multipleRebates.length > 0 && multipleRebates[0].firstChild != null && multipleRebates[0].firstChild.data != null){
			document.savedFreightBean.multipleRebates.value = multipleRebates[0].firstChild.data;
		}else{
			document.savedFreightBean.multipleRebates.value = "";
		}

		var orderTotalPlusFreight = responseXML.getElementsByTagName("orderTotalPlusFreight");
		if(orderTotalPlusFreight.length > 0 && orderTotalPlusFreight[0].firstChild != null && orderTotalPlusFreight[0].firstChild.data != null){
			//setAffirmPrice(orderTotalPlusFreight[0].firstChild.data);
			document.savedFreightBean.cpuOrderTotalPlusFreight.value = orderTotalPlusFreight[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreight.value = "";
		}

		var orderTotalPlusFreightNoDisc = responseXML.getElementsByTagName("orderTotalPlusFreightNoDisc");
		if(orderTotalPlusFreightNoDisc.length > 0 && orderTotalPlusFreightNoDisc[0].firstChild != null && orderTotalPlusFreightNoDisc[0].firstChild.data != null){
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDisc.value = orderTotalPlusFreightNoDisc[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuOrderTotalPlusFreightNoDisc.value = "";
		}

		var availableDateForCPU = responseXML.getElementsByTagName("availableDateForCPU");
		if(availableDateForCPU.length > 0 && availableDateForCPU[0].firstChild != null && availableDateForCPU[0].firstChild.data != null){
			document.savedFreightBean.availableDateForCPU.value = availableDateForCPU[0].firstChild.data;
		}else{
			document.savedFreightBean.availableDateForCPU.value = "";
		}

		var cpuAmount = responseXML.getElementsByTagName("cpuAmount");
		if(cpuAmount.length > 0 && cpuAmount[0].firstChild != null && cpuAmount[0].firstChild.data != null){
			document.savedFreightBean.cpuAmount.value = cpuAmount[0].firstChild.data;
		}else{
			document.savedFreightBean.cpuAmount.value = "";
		}
	}
}

function checkForZipCodeChange(zip) {
	var classList = [ "finalPrice",
					"estPrice",
					"rebatePrice",
                    "newFinalPrice",
                    "newEstPrice",
                    "newRebatePrice"];

	var elementList = [	"orderTotal",
					"orderSubTotal",
					"orderTotalNoFreight",
					"orderTotalPlusFreight",
					"orderTotalMinusPromo",
					"orderTotalPlusFreightMinusPromo",
					"orderTotalMinusPromoMinusAddtl",
					"orderTotalPlusFreightMinusPromoMinusAddtl" ];

	if (zip.length > 5) {
		// isCanadian, Make sure currency has USD marker
		var i, j;
		for (i=0; i<classList.length; ++i) {
			var elements = document.getElementsByClassName(classList[i]);

			if (elements == null) {
				continue;
			}

			for (j=0; j<elements.length; ++j) {
				var element = elements[j];

				if (element == null || elementList.indexOf(element.id) < 0) {
					continue;
				}

				if (element.innerHTML.indexOf("<span class=\"currencyType\">") < 0) {
					// Add USD marker to dom tag
					element.innerHTML = element.innerHTML + "<span class=\"currencyType\">USD</span>";
				}
			}
		}
	} else {
		// NOT isCanadian, Make sure currency does not have USD marker
		var i, j;
		for (i=0; i<classList.length; ++i) {
			var elements = document.getElementsByClassName(classList[i]);

			if (elements == null) {
				continue;
			}

			for (j=0; j<elements.length; ++j) {
				var element = elements[j];

				if (element == null || elementList.indexOf(element.id) < 0) {
					continue;
				}

				var index = element.innerHTML.indexOf("<span class=\"currencyType\">");
				if (index >= 0) {
					// Remove USD marker from dom tag
					element.innerHTML = element.innerHTML.substring(0, index);
				}
			}
		}
	}
}

function setAffirmPrice(orderTotal){
	var noComma = orderTotal.toString().replace(",", "");
	var noDollarSign = noComma.toString().replace("$", "");
	var updatedOrderTotal = parseInt(noDollarSign.toString().replace(".", ""), 10);
	//console.log("freight.js setAffirmPrice order total: " + updatedOrderTotal);
	$('#affirm').attr('data-amount', updatedOrderTotal);

	affirm.ui.ready(function(){
		affirm.ui.refresh();
	});
}

function getDateInSevenDays() {
    var date = new Date();
    var nextWeek = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    var dd = nextWeek.getDate();
    var mm = nextWeek.getMonth() + 1;
    date = mm + '/' + dd;
    return date;
}

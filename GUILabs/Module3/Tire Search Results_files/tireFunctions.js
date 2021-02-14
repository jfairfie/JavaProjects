function submitTireForm(shipQuote, wishList, index) { //needed for IE6
	var formName = "tireForm";
	var shipQuoteName = "shipquote";
	var wishListName = "wishlist";
	if(index != null) {
		formName += index;
		shipQuoteName += index;
		wishListName += index;
	}

	document.getElementById(shipQuoteName).value = "N";
	document.getElementById(wishListName).value = "false";

	if(wishList == "Y") {
		document.getElementById(wishListName).value = "true";
	} else if(shipQuote == "Y") {
		document.getElementById(shipQuoteName).value = "Y";
		shippingQuoteWithString('/cart/AddItemServlet?' + createFormString(document.forms[formName]));
		return false;
	} else if(shipQuote == "M") {
		document.getElementById(shipQuoteName).value = "M";
		launchMAPWithString('/cart/AddItemServlet?' + createFormString(document.forms[formName]));
		return false;
	}
	document.forms[formName].submit();
}

function submitGoodyearMAPTireForm(shipQuote, wishList, index){
	var formName = "tireForm";
	var shipQuoteName = "shipquote";
	var wishListName = "wishlist";
	if(index != null){
		formName += index;
		shipQuoteName += index;
		wishListName += index;
	}

	document.getElementById(shipQuoteName).value = "M";
	document.getElementById(wishListName).value = "false";

	var zipCode = document.getElementById("shipZip").value;

	if(zipCode == null || zipCode == ""){
		return shippingQuoteWithString('/cart/AddItemServlet?goodyearMap=y&newZip=y&' + createFormString(document.forms[formName]));
	}else{
		return launchMAPWithString('/cart/AddItemServlet?goodyearMap=y&' + createFormString(document.forms[formName]));
	}
}

function submitMASTMAPTireForm(shipQuote, wishList, index){
	var formName = "tireForm";
	var shipQuoteName = "shipquote";
	var wishListName = "wishlist";
	if(index != null){
		formName += index;
		shipQuoteName += index;
		wishListName += index;
	}

	document.getElementById(wishListName).value = "false";

	var zipCode = document.getElementById("shipZip").value;

	if(zipCode == null || zipCode == ""){
		document.getElementById(shipQuoteName).value = "M";
		return shippingQuoteWithString('/cart/AddItemServlet?mastMAP=y&newZip=y&mastMAPAddToCart=y&' + createFormString(document.forms[formName]));
	}else{
		document.getElementById(shipQuoteName).value = "N";
		location.href = '/cart/AddItemServlet?' + createFormString(document.forms[formName]);
	}
}

function updateRHPCost(index){
	if(index=='detail') {
                detailPage = true;
                index = 0;
	}
	var newRhpPrice = Number(getRHPTotal(index));

	var rhpID = "rhpCost";
	var rhpLinkID = "rhpCostLink";
	if(index != null){
		rhpID += index;
		rhpLinkID += index;
	}

	var newHref = "/modalPopups/rhp.jsp?ppn=";
	if(document.getElementById(rhpLinkID)) {
		var params = {};
		var search = document.getElementById(rhpLinkID).href.slice(document.getElementById(rhpLinkID).href.indexOf('?') + 1).split('&');
		search.forEach( function(val, key) {
			var parts = val.split('=', 2);
			params[parts[0]] = parts[1];
			if(parts[0]=="ppn") {
				newHref += parts[1];
			}
		});
		newHref += "&amt=" + newRhpPrice;

		var oldLink = document.getElementById(rhpLinkID);
		var newA = document.createElement("A").cloneNode(false);
		newA.id = rhpLinkID;
		newA.onclick = function() { openInfoBox(this.href, '', 570, 'default'); return false; };
		newA.href = newHref;
		var newText = document.createTextNode("");
		newText.data = "Free Road Hazard Protection";
		newA.appendChild(newText);
		oldLink.parentNode.replaceChild(newA, oldLink);
	}
		
	if(document.getElementById(rhpID)){
		var oldStrong = document.getElementById(rhpID);
		var strong = document.createElement("STRONG");
		strong.id = rhpID;
		var txt = document.createTextNode("");
		txt.data = "$" + CommaFormatted(newRhpPrice.toFixed(2));
		strong.appendChild(txt);
		oldStrong.parentNode.replaceChild(strong, oldStrong);
	}
}
function updateRHPCostSingle(i, index){
	var rhpPrice = document.getElementById("i" + i + "_RHPprice" + index);
	var qty = document.getElementById("i" + i + "_Qty" + index);
        var newRhpPrice = Number(rhpPrice.value * qty.value);

        var rhpID = "i" + i + "_rhpCost" + index;
	var rhpLinkID = "i" + i + "_rhpCostLink" + index;

        var newHref = "/modalPopups/rhp.jsp?ppn=";
	var compare = "false";
        if(document.getElementById(rhpLinkID)) {
		var linkText = document.getElementById(rhpLinkID).innerHTML;
                var params = {};
                var search = document.getElementById(rhpLinkID).href.slice(document.getElementById(rhpLinkID).href.indexOf('?') + 1).split('&');
                search.forEach( function(val, key) {
                        var parts = val.split('=', 2);
                        params[parts[0]] = parts[1];
                        if(parts[0]=="ppn") {
                                newHref += parts[1];
				if(parts[1].indexOf("compare")>-1) compare="true";
                        }
                });
                newHref += "&amt=" + newRhpPrice;

                var oldLink = document.getElementById(rhpLinkID);
                var newA = document.createElement("A").cloneNode(false);
                newA.id = rhpLinkID;
                newA.onclick = function() { openInfoBox(this.href, '', 570, 'default'); return false; };
                newA.href = newHref;
                var newText = document.createTextNode("");
		newText.data = linkText;
                newA.appendChild(newText);
                oldLink.parentNode.replaceChild(newA, oldLink);
        }

        if(document.getElementById(rhpID)){
                var oldStrong = document.getElementById(rhpID);
                var strong = document.createElement("STRONG");
                strong.id = rhpID;
                var txt = document.createTextNode("");
                txt.data = "$" + CommaFormatted(newRhpPrice.toFixed(2));
                strong.appendChild(txt);
                oldStrong.parentNode.replaceChild(strong, oldStrong);
        }
}

/*
function getRHPTotal(index){
	var i1_RHPprice = document.getElementById("i1_RHPprice" + index);
	var i2_RHPprice = document.getElementById("i2_RHPprice" + index);
	var i3_RHPprice = document.getElementById("i3_RHPprice" + index);
	var i4_RHPprice = document.getElementById("i4_RHPprice" + index);
	
	var i1_Qty = document.getElementById("i1_Qty" + index);
	var i2_Qty = document.getElementById("i2_Qty" + index);
	var i3_Qty = document.getElementById("i3_Qty" + index);
	var i4_Qty = document.getElementById("i4_Qty" + index);

	var newRhpPrice = 0;
	if(i1_Qty && i1_RHPprice && i1_RHPprice.value != 0){
		var qty = Number(i1_Qty.value);
		var rhpPrice = Number(i1_RHPprice.value);

		newRhpPrice = Number(newRhpPrice + (rhpPrice * qty)); 
	}

	if(i2_Qty && i2_RHPprice && i2_RHPprice.value != 0){
		var qty = Number(i2_Qty.value);
		var rhpPrice = Number(i2_RHPprice.value);

		newRhpPrice = Number(newRhpPrice + (rhpPrice * qty)); 
	}

	if(i3_Qty && i3_RHPprice && i3_RHPprice.value != 0){
		var qty = Number(i3_Qty.value);
		var rhpPrice = Number(i3_RHPprice.value);

		newRhpPrice = Number(newRhpPrice + (rhpPrice * qty)); 
	}

	if(i4_Qty && i4_RHPprice && i4_RHPprice.value != 0){
		var qty = Number(i4_Qty.value);
		var rhpPrice = Number(i4_RHPprice.value);

		newRhpPrice = Number(newRhpPrice + (rhpPrice * qty)); 
	}

	return newRhpPrice;
}
*/

function updatePriceTotal(index){
	var detailPage = false;
	var preferredPage = false;
	if(index=='detail') {
		detailPage = true;
		index = 0;
	} else if(index=='preferred') {
		preferredPage = true;
		index = '';
	}
	var priceTotal = 0;
	var freightTotal = 0;
	var totalQty = 0;
	var rebateTotal = 0;	
	var rebateTotalMinusCC = 0;
	var rebateAmt = 0;
	var promoToUse = "";
	var winterPreferred = false;
	var wtpackage = false;

	var rhpChecked = false;
	var heatCyclingChecked = false;
	var shavingChecked = false;
	var studdingChecked = false;

	var i1_PartNumber = document.getElementById("i1_PartNumber" + index);
	var i2_PartNumber = document.getElementById("i2_PartNumber" + index);
	var i3_PartNumber = document.getElementById("i3_PartNumber" + index);
	var i4_PartNumber = document.getElementById("i4_PartNumber" + index);
	
	var i1_Price = document.getElementById("i1_Price" + index);
	var i2_Price = document.getElementById("i2_Price" + index);
	var i3_Price = document.getElementById("i3_Price" + index);
	var i4_Price = document.getElementById("i4_Price" + index);
	
	var i1_Qty = document.getElementById("i1_Qty" + index);
	var i2_Qty = document.getElementById("i2_Qty" + index);
	var i3_Qty = document.getElementById("i3_Qty" + index);
	var i4_Qty = document.getElementById("i4_Qty" + index);

    var i1_limitedStockAmt = 0;
	if(document.getElementById("i1_limitedStockAmt" + index))
	    i1_limitedStockAmt = document.getElementById("i1_limitedStockAmt" + index).value;
    var i2_limitedStockAmt = 0;
	if(document.getElementById("i2_limitedStockAmt" + index))
		i2_limitedStockAmt = document.getElementById("i2_limitedStockAmt" + index).value;
    var i3_limitedStockAmt = 0;
	if(document.getElementById("i3_limitedStockAmt" + index))
		i3_limitedStockAmt = document.getElementById("i3_limitedStockAmt" + index).value;
    var i4_limitedStockAmt = 0;
	if(document.getElementById("i4_limitedStockAmt" + index))
		i4_limitedStockAmt = document.getElementById("i4_limitedStockAmt" + index).value;

	var i1_PromoValue = document.getElementById("i1_PromoValue" + index);
    var i2_PromoValue = document.getElementById("i2_PromoValue" + index);
    var i3_PromoValue = document.getElementById("i3_PromoValue" + index);
    var i4_PromoValue = document.getElementById("i4_PromoValue" + index);

	var i1_PromoToUse = document.getElementById("i1_PromoToUse" + index);
    var i2_PromoToUse = document.getElementById("i2_PromoToUse" + index);
    var i3_PromoToUse = document.getElementById("i3_PromoToUse" + index);
    var i4_PromoToUse = document.getElementById("i4_PromoToUse" + index);

	var i1_Promo1AddtlValue = document.getElementById("i1_Promo1AddtlValue" + index);
    var i2_Promo1AddtlValue = document.getElementById("i2_Promo1AddtlValue" + index);
    var i3_Promo1AddtlValue = document.getElementById("i3_Promo1AddtlValue" + index);
    var i4_Promo1AddtlValue = document.getElementById("i4_Promo1AddtlValue" + index);

	var i1_Promo2AddtlValue = document.getElementById("i1_Promo2AddtlValue" + index);
    var i2_Promo2AddtlValue = document.getElementById("i2_Promo2AddtlValue" + index);
    var i3_Promo2AddtlValue = document.getElementById("i3_Promo2AddtlValue" + index);
    var i4_Promo2AddtlValue = document.getElementById("i4_Promo2AddtlValue" + index);

	var i1_Promo3AddtlValue = document.getElementById("i1_Promo3AddtlValue" + index);
    var i2_Promo3AddtlValue = document.getElementById("i2_Promo3AddtlValue" + index);
    var i3_Promo3AddtlValue = document.getElementById("i3_Promo3AddtlValue" + index);
    var i4_Promo3AddtlValue = document.getElementById("i4_Promo3AddtlValue" + index);

	if(document.getElementById("winterPreferred")!=null && document.getElementById("winterPreferred").value == "true")
		winterPreferred = "true";
	if(document.getElementById("wtpackage")!=null && document.getElementById("wtpackage").value == "true")
		wtpackage = "true";

    var i1_StockMessage = document.getElementById("i1_StockMessage" +index);
    var i2_StockMessage = document.getElementById("i2_StockMessage" +index);
    var i3_StockMessage = document.getElementById("i3_StockMessage" +index);
    var i4_StockMessage = document.getElementById("i4_StockMessage" +index);

    var i1_shippingCost = document.getElementById("i1_shippingCost" +index);
    var i2_shippingCost = document.getElementById("i2_shippingCost" +index);
    var i3_shippingCost = document.getElementById("i3_shippingCost" +index);
    var i4_shippingCost = document.getElementById("i4_shippingCost" +index);

	var i1_prefWarehouseStock = document.getElementById("i1_prefWarehouseStock" + index);
    var i2_prefWarehouseStock = document.getElementById("i2_prefWarehouseStock" + index);
    var i3_prefWarehouseStock = document.getElementById("i3_prefWarehouseStock" + index);
    var i4_prefWarehouseStock = document.getElementById("i4_prefWarehouseStock" + index);

    var i1_prefDueDate = document.getElementById("i1_prefDueDate" + index);
    var i2_prefDueDate = document.getElementById("i2_prefDueDate" + index);
    var i3_prefDueDate = document.getElementById("i3_prefDueDate" + index);
    var i4_prefDueDate = document.getElementById("i4_prefDueDate" + index);

    var i1_freightCost = document.getElementById("i1_FreightCost" + index);
    var i2_freightCost = document.getElementById("i2_FreightCost" + index);
    var i3_freightCost = document.getElementById("i3_FreightCost" + index);
    var i4_freightCost = document.getElementById("i4_FreightCost" + index);

    var i1_altDate = document.getElementById("i1_altDate" + index);
    var i2_altDate = document.getElementById("i2_altDate" + index);
    var i3_altDate = document.getElementById("i3_altDate" + index);
    var i4_altDate = document.getElementById("i4_altDate" + index);

    var i1_rebate = document.getElementById("i1_Rebate" + index);
    var i2_rebate = document.getElementById("i2_Rebate" + index);
    var i3_rebate = document.getElementById("i3_Rebate" + index);
    var i4_rebate = document.getElementById("i4_Rebate" + index);

    var i1_rebateQty = document.getElementById("i1_RebateQty" + index);
    var i2_rebateQty = document.getElementById("i2_RebateQty" + index);
    var i3_rebateQty = document.getElementById("i3_RebateQty" + index);
    var i4_rebateQty = document.getElementById("i4_RebateQty" + index);

    var i1_rebateAmt = document.getElementById("i1_RebateAmt" + index);
    var i2_rebateAmt = document.getElementById("i2_RebateAmt" + index);
    var i3_rebateAmt = document.getElementById("i3_RebateAmt" + index);
    var i4_rebateAmt = document.getElementById("i4_RebateAmt" + index);

    if(i1_Qty && i1_Price && i1_Price.value != 0) {
        var qty = Number(i1_Qty.value);
        if(qty > 0) {
            var price = Number(i1_Price.value);
            var freight = Number(i1_freightCost.value);
            priceTotal = Number(priceTotal + (price * qty)); 
            freightTotal = Number(freightTotal + (freight * qty));
            totalQty = Number(totalQty + qty);
        }
    }
	if(i2_Qty && i2_Price && i2_Price.value != 0) {
        var qty = Number(i2_Qty.value);
        if(qty > 0){
            var price = Number(i2_Price.value);
            var freight = Number(i2_freightCost.value);
            priceTotal = Number(priceTotal + (price * qty)); 
            freightTotal = Number(freightTotal + (freight * qty));
            totalQty = Number(totalQty + qty);
        }
    }
	if(i3_Qty && i3_Price && i3_Price.value != 0) {
        var qty = Number(i3_Qty.value);
        if(qty > 0){
            var price = Number(i3_Price.value);
            var freight = Number(i3_freightCost.value);
            priceTotal = Number(priceTotal + (price * qty)); 
            freightTotal = Number(freightTotal + (freight * qty));
            totalQty = Number(totalQty + qty);
        }
    }
	if(i4_Qty && i4_Price && i4_Price.value != 0) {
        var qty = Number(i4_Qty.value);
        if(qty > 0){
            var price = Number(i4_Price.value);
            var freight = Number(i3_freightCost.value);
            priceTotal = Number(priceTotal + (price * qty)); 
            freightTotal = Number(freightTotal + (freight * qty));
            totalQty = Number(totalQty + qty);
        }
    }
    var instantRebateCheck = {};
    var instantRebateCheckTotal = 0;
    if(i1_rebate) {
        var qty = Number(i1_Qty.value);
        var rebateHash = i1_rebate.value+':'+i1_rebateQty.value+":"+i1_rebateAmt.value;
        instantRebateCheck[rebateHash] = {qty:0,partnums:[]};
        instantRebateCheck[rebateHash].qty += qty;
        instantRebateCheck[rebateHash].partnums.push(i1_PartNumber.value);
    }
    if(i2_rebate) {
        var qty = Number(i2_Qty.value);
        var rebateHash = i2_rebate.value+':'+i2_rebateQty.value+":"+i2_rebateAmt.value;
        if(!instantRebateCheck[rebateHash])
            instantRebateCheck[rebateHash] = {qty:0,partnums:[]};
        instantRebateCheck[rebateHash].qty += qty;
        instantRebateCheck[rebateHash].partnums.push(i2_PartNumber.value);
    }
    if(i3_rebate) {
        var qty = Number(i3_Qty.value);
        var rebateHash = i3_rebate.value+':'+i3_rebateQty.value+":"+i3_rebateAmt.value;
        if(!instantRebateCheck[rebateHash])
            instantRebateCheck[rebateHash] = {qty:0,partnums:[]};
        instantRebateCheck[rebateHash].qty += qty;
        instantRebateCheck[rebateHash].partnums.push(i3_PartNumber.value);
    }
    if(i4_rebate) {
        var qty = Number(i4_Qty.value);
        var rebateHash = i4_rebate.value+':'+i4_rebateQty.value+":"+i4_rebateAmt.value;
        if(!instantRebateCheck[rebateHash])
            instantRebateCheck[rebateHash] = {qty:0,partnums:[]};
        instantRebateCheck[rebateHash].qty += qty;
        instantRebateCheck[rebateHash].partnums.push(i4_PartNumber.value);
    }
    var instantRebateKeys = Object.keys(instantRebateCheck);
    if(instantRebateKeys.length>0) {
        for(var i=0; i<instantRebateKeys.length; i++) {
            var rebateInfo = instantRebateKeys[i].split(':');
            if(rebateInfo && rebateInfo.length>2) {
                var rebateTireAmount = (rebateInfo[2] * Math.floor(instantRebateCheck[instantRebateKeys[i]].qty/rebateInfo[1])).toFixed(2);
                $iRebatePrice = $('#iRebatePrice-'+instantRebateCheck[instantRebateKeys[i]].partnums[instantRebateCheck[instantRebateKeys[i]].partnums.length-1]);
                $iRebatePrice.find('span.rebateValue').text(rebateTireAmount);
                instantRebateCheckTotal += Number(rebateTireAmount);
                if(rebateTireAmount>0)
                    $iRebatePrice.find('div.notAvailable').addClass('hide');
                else
                    $iRebatePrice.find('div.notAvailable').removeClass('hide');
            }
        }
        priceTotal -= instantRebateCheckTotal;
    }

    if(i1_PromoToUse!=null)
        promoToUse = i1_PromoToUse.value;
    else if(i2_PromoToUse!=null)
        promoToUse = i2_PromoToUse.value;
    else if(i3_PromoToUse!=null)
        promoToUse = i3_PromoToUse.value;
    else if(i4_PromoToUse!=null)
        promoToUse = i4_PromoToUse.value;

	if(totalQty >= 4) {
        if(i1_PromoValue) {
            rebateTotal = priceTotal - i1_PromoValue.value;
            var addtlValue = 0;
			console.log("tireFunctions rebateTotalMinusCC: " + rebateTotalMinusCC);
            if(i1_Promo1AddtlValue && i1_Promo1AddtlValue.value!=""){
				console.log("tireFunctions i1_Promo1AddtlValue: " + i1_Promo1AddtlValue.value);
			}

            if(i1_Promo1AddtlValue && i1_Promo1AddtlValue.value!="") AddtlValue = Number(i1_Promo1AddtlValue.value);
            if(i1_Promo2AddtlValue && i1_Promo2AddtlValue.value!="") AddtlValue = AddtlValue + Number(i1_Promo2AddtlValue.value);
            if(i1_Promo3AddtlValue && i1_Promo3AddtlValue.value!="") AddtlValue = AddtlValue + Number(i1_Promo3AddtlValue.value);
			console.log("tireFunctions AddtlValue: " + AddtlValue);
            rebateTotalMinusCC = rebateTotal - AddtlValue;
            rebateAmt = i1_PromoValue.value;
        }
        if(i2_PromoValue) {
            rebateTotal = priceTotal - i2_PromoValue.value;
            var AddtlValue = 0;
            if(i2_Promo1AddtlValue && i2_Promo1AddtlValue.value!="") AddtlValue = Number(i2_Promo1AddtlValue.value);
            if(i2_Promo2AddtlValue && i2_Promo2AddtlValue.value!="") AddtlValue = AddtlValue + Number(i2_Promo2AddtlValue.value);
            if(i2_Promo3AddtlValue && i2_Promo3AddtlValue.value!="") AddtlValue = AddtlValue + Number(i2_Promo3AddtlValue.value);
            rebateTotalMinusCC = rebateTotal - AddtlValue;
            rebateAmt = i2_PromoValue.value;
        }
        if(i3_PromoValue) {
            rebateTotal = priceTotal - i3_PromoValue.value;
            var addtlValue = 0;
            if(i3_Promo1AddtlValue && i3_Promo1AddtlValue.value!="") AddtlValue = Number(i3_Promo1AddtlValue.value);
            if(i3_Promo2AddtlValue && i3_Promo2AddtlValue.value!="") AddtlValue = AddtlValue + Number(i3_Promo2AddtlValue.value);
            if(i3_Promo3AddtlValue && i3_Promo3AddtlValue.value!="") AddtlValue = AddtlValue + Number(i3_Promo3AddtlValue.value);
            rebateTotalMinusCC = rebateTotal - addtlValue;
            rebateAmt = i3_PromoValue.value;
        }
        if(i4_PromoValue) {
            rebateTotal = priceTotal - i4_PromoValue.value;
            var addtlValue = 0;
            if(i4_Promo1AddtlValue && i4_Promo1AddtlValue.value!="") AddtlValue = Number(i4_Promo1AddtlValue.value);
            if(i4_Promo2AddtlValue && i4_Promo2AddtlValue.value!="") AddtlValue = AddtlValue + Number(i4_Promo2AddtlValue.value);
            if(i4_Promo3AddtlValue && i4_Promo3AddtlValue.value!="") AddtlValue = AddtlValue + Number(i4_Promo3AddtlValue.value);
            rebateTotalMinusCC = rebateTotal - addtlValue;
            rebateAmt = i4_PromoValue.value;
        }
    }
	//P347
    else if(promoToUse == "P347" && totalQty >= 2) {
        rebateTotal = priceTotal - 30;
        rebateTotalMinusCC = rebateTotal - addtlValue;
        rebateAmt = 30;
    }


    var priceTotalID = "priceTotal";
    var promoValueID = "promoPrice";
    var promoCCValueID = "promoCCPrice";
	var affirmID = "affirm";	

    if(index != null) {
        priceTotalID += index;
        promoValueID += index;
        promoCCValueID += index;
		if(!detailPage){
			affirmID += index;
		}
    }
	if($('#' + affirmID)){
		var noDecimal = parseInt(priceTotal.toFixed(2).toString().replace(".", ""), 10);
		$('#' + affirmID).attr('data-amount', noDecimal);
		affirm.ui.refresh();
	}

    if(detailPage) {
        promoValueID = 'rebateDisplay';
        promoCCValueID = 'rebateCCDisplay';
        $('#priceTag').html('<span id="priceTotal">'+CommaFormatted(priceTotal.toFixed(2))+'</span><sup>$</sup><span class="smallTxt">Set of '+totalQty+': </span>');
        $('#heatCyclingTotal').text((totalQty*heatCyclingCost).toFixed(2))
        $('#shavingTotal').text((totalQty*shavingCost).toFixed(2))
        $('#studdingTotal').text((totalQty*studdingCost).toFixed(2))
    } else if(preferredPage) {
    	var preferredPromoValueID = 'preferredPromoPrice';
    	var preferredCCValueID = 'preferredPromoCCPrice';
        $('span.PPfinalPrice').text(CommaFormatted(priceTotal.toFixed(2)));
        $('span.estimatedShipping').html('<sbold>'+CommaFormatted(freightTotal.toFixed(2))+'</sbold>');
        var tireQTY = Number(i2_Qty.value);
        if(tireQTY >= 4){
        	if(priceTotal > rebateTotal){
        		$('span.rebateValue').text(CommaFormatted(rebateTotal.toFixed(2)));
        	 	$('#'+preferredPromoValueID).show();
        	}else{
        	 	$('#'+preferredPromoValueID).hide();
        	}
        	
        	if(rebateTotal > rebateTotalMinusCC){
        		$('span.rebateValueCC').text(CommaFormatted(rebateTotalMinusCC.toFixed(2)));
        		$('#'+preferredCCValueID).show();
        	}else{
        	 	$('#'+preferredCCValueID).hide();
        	} 
        }else{
        	$('#'+preferredPromoValueID).hide();
        	$('#'+preferredCCValueID).hide();
        }
    } else {
        var freeShippingString = "";
        if($('#' + priceTotalID).find('.freeShipping').length) {
            freeShippingString = '<div class="freeShipping"><a href="/shippingquote/getZip.jsp?newZip=y&freeShippingTires=Y" title="freeShipping" onclick="return shippingZipFreeTires(\'tireForm' + index + '\');">Free Shipping</a></div>';
        }
        $('#'+priceTotalID).html(freeShippingString + 'Set of '+totalQty+': <span class="totalCurrency">$</span><span class="itemprice">'+CommaFormatted(priceTotal.toFixed(2))+'</span>');
    }
    if(totalQty > 0 && priceTotal > 0) {
        $('#'+priceTotalID).show();
    } else {
        $('#'+priceTotalID).hide();
    }

    if(promoToUse != "" && totalQty >= 4 && (promoToUse == "M447" || promoToUse == "M457" || promoToUse == "M467") && (affCode != "CI3" && affCode != "CM1" && affCode != "CM2")) {
        $('#'+promoValueID).hide();
        $('#'+promoCCValueID).hide();
    } else if (promoToUse != "" && totalQty >= 4 && (promoToUse != "B245" || affCode == "CM5") && (promoToUse != "B235" || affCode == "CK9")) {
        var oldPromoTotal = document.getElementById(promoValueID);
        if(oldPromoTotal != null) {
            $('#'+promoValueID+' .rebateValue').text(CommaFormatted(rebateTotal.toFixed(2)));
        }
        var oldPromoCCTotal = document.getElementById(promoCCValueID);
        if(oldPromoCCTotal != null) {
			console.log("tireFunctions +promoCCValueID+: " + promoCCValueID);
            $('#'+promoCCValueID+' .rebateCCValue').text(CommaFormatted(rebateTotalMinusCC.toFixed(2)));
        }
    }
    //P347
    else if(promoToUse == "P347" && totalQty >= 2) {
        var oldPromoTotal = document.getElementById(promoValueID);
        if(oldPromoTotal != null) {
            $('#'+promoValueID+' .rebateValue').text(CommaFormatted(rebateTotal.toFixed(2)));
        }
        var oldPromoCCTotal = document.getElementById(promoCCValueID);
        if(oldPromoCCTotal != null) {
            $('#'+promoCCValueID+' .rebateCCValue').text(CommaFormatted(rebateTotalMinusCC.toFixed(2)));
        }
    }

	if(document.getElementById(promoValueID)!=null){	
    		if(totalQty > 0 && promoToUse != ""){
	    		if(totalQty >= 4) {
				$('#'+promoValueID).show();
				$('#'+promoCCValueID).show();
			} else if(promoToUse == "P347" && totalQty >= 2) {
				$('#'+promoValueID).show();
				$('#'+promoCCValueID).show();
	    		} else {
				$('#'+promoValueID).hide();
				$('#'+promoCCValueID).hide();
	    		}
        	} else if(promoToUse != "") {
	    		$('#'+promoValueID).hide();	
			$('#'+promoCCValueID).hide();
		}
	}

        var delDate = document.getElementById("delDate").value;
        var shipZip = document.getElementById("shipZip").value;
        var prefWarehouse = document.getElementById("prefWarehouse").value;
        var lower48 = document.getElementById("lower48").value;

	if(i1_shippingCost) {
	    var shipTimeID = "i1_shippingTime";
            var shipCostID = "i1_shippingCost";
            if(index != null){
                shipTimeID += index;
                shipCostID += index;
            }
	    //if there is a limited qty and we fall above or below, 
	    //update it as necessary
	    if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i1_prefWarehouseStock!=null && i1_freightCost!=null && i1_freightCost.value!="0.0" && i1_freightCost.value!="" && (i1_prefWarehouseStock.value=="green" || (i1_prefWarehouseStock.value=="yellow" && Number(i1_limitedStockAmt) > Number(i1_Qty.value)))){
		//the qty needed is available in preferred warehouse
		$('#'+shipTimeID).html('Can be delivered <sbold>' + delDate + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
	    } else if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i1_prefWarehouseStock!=null && (i1_prefWarehouseStock.value=="red" || (i1_prefWarehouseStock.value=="yellow" && Number(i1_limitedStockAmt) <= Number(i1_Qty.value)))){
		//the qty needed is not in pref warehouse
		if(i1_altDate.value!="" && i1_freightCost.value!="") {
			//it is available in an alt dc, use that date
			$('#'+shipTimeID).html('Can be delivered <sbold>' + i1_altDate.value + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
			$('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
		} else if(i1_freightCost.value!="" && i1_altDate.value=="") {
			//no date to show
			$('#'+shipTimeID).html('Can be delivered to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a> when available<span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
			$('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
		} else {
			//show user the links to ship quote
			$('#'+shipTimeID).html('<a class="availability" onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">How soon can I get this?</a>');
			$('#'+shipTimeID).removeClass('canDeliver');
			$('#'+shipTimeID).addClass('delivEstimate');
		}
	    }
	} else if(i2_shippingCost) {
	    var shipTimeID = "i2_shippingTime";
            var shipCostID = "i2_shippingCost";
            if(index != null){
                shipTimeID += index;
                shipCostID += index;
            }
            //if there is a limited qty and we fall above or below,
            //update it as necessary
            if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i2_prefWarehouseStock!=null && i2_freightCost!=null && i2_freightCost.value!="0.0" && i2_freightCost.value!="" && (i2_prefWarehouseStock.value=="green" || (i2_prefWarehouseStock.value=="yellow" && Number(i2_limitedStockAmt) > Number(i2_Qty.value)))){
                //the qty needed is available in preferred warehouse
                $('#'+shipTimeID).html('Can be delivered <sbold>' + delDate + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
            } else if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i2_prefWarehouseStock!=null && (i2_prefWarehouseStock.value=="red" || (i2_prefWarehouseStock.value=="yellow" && Number(i2_limitedStockAmt) <= Number(i2_Qty.value)))){
                //the qty needed is not in pref warehouse
                if(i2_altDate.value!="" && i2_freightCost.value!="") {
                        //it is available in an alt dc, use that date
                        $('#'+shipTimeID).html('Can be delivered <sbold>' + i2_altDate.value + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else if(i2_freightCost.value!="" && i2_altDate.value=="") {
                        //no date to show
                        $('#'+shipTimeID).html('Can be delivered to <a  onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a> when available<span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else {
                        //show user the links to ship quote
                        $('#'+shipTimeID).html('<a class="availability" onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">How soon can I get this?</a>');
                        $('#'+shipTimeID).removeClass('canDeliver');
                        $('#'+shipTimeID).addClass('delivEstimate');
                }
            }
	} else if(i3_shippingCost) {
	    var shipTimeID = "i3_shippingTime";
            var shipCostID = "i3_shippingCost";
            if(index != null){
                shipTimeID += index;
                shipCostID += index;
            }
            //if there is a limited qty and we fall above or below,
            //update it as necessary
            if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i3_prefWarehouseStock!=null && i3_freightCost!=null && i3_freightCost.value!="0.0" && i3_freightCost.value!="" && (i3_prefWarehouseStock.value=="green" || (i3_prefWarehouseStock.value=="yellow" && Number(i3_limitedStockAmt) > Number(i3_Qty.value)))){
                //the qty needed is available in preferred warehouse
                $('#'+shipTimeID).html('Can be delivered <sbold>' + delDate + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
            } else if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i3_prefWarehouseStock!=null && (i3_prefWarehouseStock.value=="red" || (i3_prefWarehouseStock.value=="yellow" && Number(i3_limitedStockAmt) <= Number(i3_Qty.value)))){
                //the qty needed is not in pref warehouse
                if(i3_altDate.value!="" && i3_freightCost.value!="") {
                        //it is available in an alt dc, use that date
                        $('#'+shipTimeID).html('Can be delivered <sbold>' + i3_altDate.value + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else if(i3_freightCost.value!="" && i3_altDate.value=="") {
                        //no date to show
                        $('#'+shipTimeID).html('Can be delivered to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a> when available<span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else {
                        //show user the links to ship quote
                        $('#'+shipTimeID).html('<a class="availability" onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">How soon can I get this?</a>');
                        $('#'+shipTimeID).removeClass('canDeliver');
                        $('#'+shipTimeID).addClass('delivEstimate');
                }
            }
	} else if(i4_shippingCost) {
	    var shipTimeID = "i4_shippingTime";
            var shipCostID = "i4_shippingCost";
            if(index != null){
                shipTimeID += index;
                shipCostID += index;
            }
            //if there is a limited qty and we fall above or below,
            //update it as necessary
            if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i4_prefWarehouseStock!=null && i4_freightCost!=null && i4_freightCost.value!="0.0" && i4_freightCost.value!="" && (i4_prefWarehouseStock.value=="green" || (i4_prefWarehouseStock.value=="yellow" && Number(i4_limitedStockAmt) > Number(i4_Qty.value)))){
                //the qty needed is available in preferred warehouse
                $('#'+shipTimeID).html('Can be delivered <sbold>' + delDate + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
            } else if(shipZip!="" && lower48=="true" && prefWarehouse!="" && i4_prefWarehouseStock!=null && (i4_prefWarehouseStock.value=="red" || (i4_prefWarehouseStock.value=="yellow" && Number(i4_limitedStockAmt) <= Number(i4_Qty.value)))){
                //the qty needed is not in pref warehouse
                if(i4_altDate.value!="" && i4_freightCost.value!="") {
                        //it is available in an alt dc, use that date
                        $('#'+shipTimeID).html('Can be delivered <sbold>' + i4_altDate.value + '</sbold> to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a><span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else if(i4_freightCost.value!="" && i4_altDate.value=="") {
                        //no date to show
                        $('#'+shipTimeID).html('Can be delivered to <a onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">' + shipZip + '</a> when available<span id="' + shipCostID + '"> for $' + parseFloat(i1_freightCost.value).toFixed(2) + ' per tire.</span>');
                        $('#'+shipTimeID).removeClass('delivEstimate');
                        $('#'+shipTimeID).addClass('canDeliver');
                } else {
                        //show user the links to ship quote
                        $('#'+shipTimeID).html('<a class="availability" onclick="return shippingZip(\'tireForm' + index + '\');" title="Shipping Cost/Delivery Date" href="/shippingquote/getZip.jsp?newZip=y">How soon can I get this?</a>');
                        $('#'+shipTimeID).removeClass('canDeliver');
                        $('#'+shipTimeID).addClass('delivEstimate');
                }
            }
        }
	if(document.getElementById("i1_freePreferred" +index)!=null && i1_Qty) {
	var qty = Number(i1_Qty.value);
	if(totalQty<2)
		document.getElementById("i1_freePreferred" +index).style.display = "none";
	else
		document.getElementById("i1_freePreferred" +index).style.display = "block";
	}
	if(document.getElementById("i2_freePreferred" +index)!=null && i2_Qty) {
	var qty = Number(i2_Qty.value);
	if(totalQty<2)
		document.getElementById("i2_freePreferred" +index).style.display = "none";
	else
		document.getElementById("i2_freePreferred" +index).style.display = "block";
	}
	if(document.getElementById("i3_freePreferred" +index)!=null && i3_Qty) {
	var qty = Number(i3_Qty.value);
	if(totalQty<2)
		document.getElementById("i3_freePreferred" +index).style.display = "none";
	else
		document.getElementById("i3_freePreferred" +index).style.display = "block";
	}
	if(document.getElementById("i4_freePreferred" +index)!=null && i4_Qty) {
	var qty = Number(i4_Qty.value);
	if(totalQty<2)
		document.getElementById("i4_freePreferred" +index).style.display = "none";
	else
		document.getElementById("i4_freePreferred" +index).style.display = "block";
	}
}

function getRHPTotal(index){
        var i1_RHPprice = document.getElementById("i1_RHPprice" + index);
        var i2_RHPprice = document.getElementById("i2_RHPprice" + index);
        var i3_RHPprice = document.getElementById("i3_RHPprice" + index);
        var i4_RHPprice = document.getElementById("i4_RHPprice" + index);

        var i1_Qty = document.getElementById("i1_Qty" + index);
        var i2_Qty = document.getElementById("i2_Qty" + index);
        var i3_Qty = document.getElementById("i3_Qty" + index);
        var i4_Qty = document.getElementById("i4_Qty" + index);

        var newRhpPrice = 0;

        if(i1_Qty && i1_RHPprice && i1_RHPprice.value != 0){
                var qty = Number(i1_Qty.value);
                var rhpPrice = Number(i1_RHPprice.value);

                newRhpPrice = Number(newRhpPrice + (rhpPrice * qty));
        }

        if(i2_Qty && i2_RHPprice && i2_RHPprice.value != 0){
                var qty = Number(i2_Qty.value);
                var rhpPrice = Number(i2_RHPprice.value);

                newRhpPrice = Number(newRhpPrice + (rhpPrice * qty));
        }

        if(i3_Qty && i3_RHPprice && i3_RHPprice.value != 0){
                var qty = Number(i3_Qty.value);
                var rhpPrice = Number(i3_RHPprice.value);

                newRhpPrice = Number(newRhpPrice + (rhpPrice * qty));
        }

        if(i4_Qty && i4_RHPprice && i4_RHPprice.value != 0){
                var qty = Number(i4_Qty.value);
                var rhpPrice = Number(i4_RHPprice.value);

                newRhpPrice = Number(newRhpPrice + (rhpPrice * qty));
        }

        return newRhpPrice;
}

function updateCPUDiscountTotal (index) {
	if (index=='detail') {
		detailPage = true;
		index = 0;
	}

	var newCPUDiscount = Number(getCPUDiscountTotal(index));

	var cpuDiscountID = "cpuDiscount";

	if (index != null){
		cpuDiscountID += index;
	}

	if(document.getElementById(cpuDiscountID)){
		var oldStrong = document.getElementById(cpuDiscountID);
		var strong = document.createElement("SPAN");
		strong.id = cpuDiscountID;
		var txt = document.createTextNode("");
		txt.data = CommaFormatted(newCPUDiscount.toFixed(2));
		strong.appendChild(txt);
		oldStrong.parentNode.replaceChild(strong, oldStrong);
	}
}

function getCPUDiscountTotal (index) {
	var i1_InboardedFrt = document.getElementById("i1_InboardedFrt" + index);
	var i2_InboardedFrt = document.getElementById("i2_InboardedFrt" + index);
	var i3_InboardedFrt = document.getElementById("i3_InboardedFrt" + index);
	var i4_InboardedFrt = document.getElementById("i4_InboardedFrt" + index);

	var i1_Qty = document.getElementById("i1_Qty" + index);
	var i2_Qty = document.getElementById("i2_Qty" + index);
	var i3_Qty = document.getElementById("i3_Qty" + index);
	var i4_Qty = document.getElementById("i4_Qty" + index);

	var newCPUDiscount = 0;

	if(i1_Qty && i1_InboardedFrt && i1_InboardedFrt.value != 0){
		var qty = Number(i1_Qty.value);
		var cpuDiscount = Number(i1_InboardedFrt.value);

		newCPUDiscount = Number(newCPUDiscount + (cpuDiscount * qty));
	}

	if(i2_Qty && i2_InboardedFrt && i2_InboardedFrt.value != 0){
		var qty = Number(i2_Qty.value);
		var cpuDiscount = Number(i2_InboardedFrt.value);

		newCPUDiscount = Number(newCPUDiscount + (cpuDiscount * qty));
	}

	if(i3_Qty && i3_InboardedFrt && i3_InboardedFrt.value != 0){
		var qty = Number(i3_Qty.value);
		var cpuDiscount = Number(i3_InboardedFrt.value);

		newCPUDiscount = Number(newCPUDiscount + (cpuDiscount * qty));
	}

	if(i4_Qty && i4_InboardedFrt && i4_InboardedFrt.value != 0){
		var qty = Number(i4_Qty.value);
		var cpuDiscount = Number(i4_InboardedFrt.value);

		newCPUDiscount = Number(newCPUDiscount + (cpuDiscount * qty));
	}

	return newCPUDiscount;
}

function addLTLQuantity(index){
	var formName = "tireForm";
	var ltlID = "ltlInfo";
	if(index != null){
		formName += index;
		ltlID += index;
	}

	var href = document.getElementById(ltlID).href;

	var qty = document.getElementById("i1_Qty" + index).value;
	var indexOfQty = href.indexOf("&qty=");
	if(indexOfQty > -1){
		var newString = href.substring(0, indexOfQty);
		href = newString;
	}
	href += "&qty=" + qty;
	document.getElementById(ltlID).href = href;
}

//Used on /tires/LtlPopup.jsp
function submitLTLForm(){
	var errorText = "";
	if(checkInputField($('#name'))){
		errorText += '<li>Please enter your name.</li>';
	}
	if(checkInputField($('#email'),'email') || checkInputField($('#email2'),'email')) {
		checkInputField($('#email2'),'email');
		errorText += '<li>Please provide a valid email address (e.g., name@serviceprovider.com).</li>';
	}
	if($('#email').val()!=$('#email2').val()) {
		$('#email2').addClass('eleError');
		errorText += '<li>The email addresses you entered do not match.</li>';
	}
	if(checkInputField($('#contactPhone'))){
		errorText += '<li>Please enter your contact phone.</li>';
	}
	if(checkInputField($('#zip'))){
		errorText += '<li>Please enter your ZIP/Postal Code.</li>';
	}
	if(errorText=="") {
		var formString = "/tires/LtlThankYou.jsp?";
		var inputElements = document.getElementById("ltlForm").getElementsByTagName("INPUT");
		for(var i=0; i<inputElements.length; i++) {
			if(inputElements[i].name) {
				if(i>0) formString += "&";
				formString += inputElements[i].name + "=" + inputElements[i].value;
			}
		}
		openInfoBox(formString, 'Truck Freight: Thank You', '555', '200');
	} else {
		$('div.ltlErrors').removeClass('hide').show();
		$('#ltlErrorsUL').empty().html(errorText);
	}
	return false;
}

function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    amount = new String(amount);
    var a = amount.split('.',2)
    var d = a[1];
    var i = parseInt(a[0]);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3)
    {
        var nn = n.substr(n.length-3);
        a.unshift(nn);
        n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if(d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}

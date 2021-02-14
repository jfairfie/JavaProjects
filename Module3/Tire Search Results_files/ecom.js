function loadfunction() {
	if($('.loadingLayer').hasClass('hide')) {
		$('.loadingLayer').removeClass('hide').delay(3000).queue(function(next){
			$('.loadingLayer').addClass('hide'); 
			next(); 
		});
	}
}

function addToCartPackage(formName, MAP, wantRHP) {
	if(MAP == "true") {
                return launchMAP(formName, wantRHP);
        } else {
                currentForm = document.forms[formName];
		currentForm.winterFlow.value = "true";
                if(currentForm.shipquote) currentForm.shipquote.value = "N";
                if(currentForm.wishlist) currentForm.wishlist.value = "false";
                if(wantRHP != '') {
                        if(currentForm.WantRHP != null) { //set
                                currentForm.WantRHP.value = wantRHP;
                        } else if(currentForm.i1_WantRHP != null) { //single
                                currentForm.i1_WantRHP.value = wantRHP;
                        } else if(currentForm.wantRHP != null) { //package
                                currentForm.wantRHP.value = wantRHP;
                        }
                }
                return true;
        }
}

function addToCart(formName, MAP, wantRHP) {
	if(MAP == "true") {
		return launchMAP(formName, wantRHP);
	} else {
		currentForm = document.forms[formName];
		if(currentForm.shipquote) currentForm.shipquote.value = "N";
		if(currentForm.wishlist) currentForm.wishlist.value = "false";
		if(wantRHP != '') {
			if(currentForm.WantRHP != null) { //set
				currentForm.WantRHP.value = wantRHP;
			} else if(currentForm.i1_WantRHP != null) { //single
				currentForm.i1_WantRHP.value = wantRHP;
			} else if(currentForm.wantRHP != null) { //package
				currentForm.wantRHP.value = wantRHP;
			}
		}
		return true;
	}
}
function addToCartGoodyearMap(formName, MAP, wantRHP){
	return launchGoodyearMAP(formName, wantRHP);
}
function addToCartMASTMap(formName, MAP, wantRHP){
	return launchMASTMAP(formName, wantRHP);
}
function shippingQuote(formName) {
		//alert(formName);
	currentForm = document.forms[formName];
	currentForm.shipquote.value = "Y";
	if(currentForm.wishlist) currentForm.wishlist.value = "false";

	//PN1803 - If we're coming from the wish list or new products, make sure the vehicle gets set if we have one.
	if(((currentForm.tiresFromWishList != null && currentForm.tiresFromWishList.value == "true") || (currentForm.wheelsFromWishList != null && currentForm.wheelsFromWishList.value == "true") || (currentForm.fromWishList != null && currentForm.fromWishList.value == "true") || (currentForm.packageID != null && currentForm.packageID != "")) && currentForm.vehicleID != null) {
		return shippingQuoteWithString('/SetCurrentVehicleServlet?' + createFormString(currentForm));
	}

	if(currentForm.fromNewProducts != null && currentForm.fromNewProducts.value == "true") {
		return shippingQuoteWithString('/SetCurrentVehicleServlet?' + createFormString(currentForm));
	}
	//End PN1803.
	if(formName.indexOf("tireDG") > -1) {
		return shippingQuoteWithString('/cart/AddItemServlet?tdg=true&' + createFormString(currentForm));
	} else{
		return shippingQuoteWithString('/cart/AddItemServlet?' + createFormString(currentForm));
	}
}
function shippingZip(formName) {
        currentForm = document.forms[formName];
        currentForm.shipquote.value = "Y";
        if(currentForm.wishlist) currentForm.wishlist.value = "false";
	//PN3095 - Need to include this to account for the different set of parameters being passed
                //through from WishList.jsp. We need to make sure the vehicle gets set, if it is attached to the
                //item. Otherwise, this will trigger a system error.
                if(((currentForm.tiresFromWishList && currentForm.tiresFromWishList.value == "true") ||
                        (currentForm.wheelsFromWishList && currentForm.wheelsFromWishList.value == "true") ||
                        (currentForm.fromWishList && currentForm.fromWishList.value == "true") ||
                        (currentForm.packageID != null && currentForm.packageID != "")) && currentForm.vehicleID != null){
                        openInfoBox('/SetCurrentVehicleServlet?newZip=y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }else{
                        //return shippingQuoteWithString('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm));
                        //openInfoBox('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm), 'Shipping Quote', '650', '575', 'updateShippingCost()');
                        openInfoBox('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }
        return false;
}
function shippingZipFree(formName) {
        currentForm = document.forms[formName];
        currentForm.shipquote.value = "Y";
        if(currentForm.wishlist) currentForm.wishlist.value = "false";
        //PN3095 - Need to include this to account for the different set of parameters being passed
                //through from WishList.jsp. We need to make sure the vehicle gets set, if it is attached to the
                //item. Otherwise, this will trigger a system error.
                if(((currentForm.tiresFromWishList && currentForm.tiresFromWishList.value == "true") ||
                        (currentForm.wheelsFromWishList && currentForm.wheelsFromWishList.value == "true") ||
                        (currentForm.fromWishList && currentForm.fromWishList.value == "true") ||
                        (currentForm.packageID != null && currentForm.packageID != "")) && currentForm.vehicleID != null){
                        openInfoBox('/SetCurrentVehicleServlet?newZip=y&&freeShipping=Y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }else{
                        //return shippingQuoteWithString('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm));
                        //openInfoBox('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm), 'Shipping Quote', '650', '575', 'updateShippingCost()');
                        openInfoBox('/cart/AddItemServlet?newZip=y&freeShipping=Y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }
        return false;
}
function shippingZipFreeTires(formName) {
        currentForm = document.forms[formName];
        currentForm.shipquote.value = "Y";
        if(currentForm.wishlist) currentForm.wishlist.value = "false";
        //PN3095 - Need to include this to account for the different set of parameters being passed
                //through from WishList.jsp. We need to make sure the vehicle gets set, if it is attached to the
                //item. Otherwise, this will trigger a system error.
                if(((currentForm.tiresFromWishList && currentForm.tiresFromWishList.value == "true") ||
                        (currentForm.wheelsFromWishList && currentForm.wheelsFromWishList.value == "true") ||
                        (currentForm.fromWishList && currentForm.fromWishList.value == "true") ||
                        (currentForm.packageID != null && currentForm.packageID != "")) && currentForm.vehicleID != null){
                        openInfoBox('/SetCurrentVehicleServlet?newZip=y&freeShippingTires=Y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }else{
                        //return shippingQuoteWithString('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm));
                        //openInfoBox('/cart/AddItemServlet?newZip=y&' + createFormString(currentForm), 'Shipping Quote', '650', '575', 'updateShippingCost()');
                        openInfoBox('/cart/AddItemServlet?newZip=y&freeShippingTires=Y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
                }
        return false;
}
function shippingZipFreeWheels(formName){
	currentForm = document.forms[formName];
	currentForm.shipquote.value = "Y";
	if(currentForm.wishlist) currentForm.wishlist.value = "false";
	//PN3095 - Need to include this to account for the different set of parameters being passed
	//through from WishList.jsp. We need to make sure the vehicle gets set, if it is attached to the
	//item. Otherwise, this will trigger a system error.
	if(((currentForm.tiresFromWishList && currentForm.tiresFromWishList.value == "true") || (currentForm.wheelsFromWishList && currentForm.wheelsFromWishList.value == "true") || (currentForm.fromWishList && currentForm.fromWishList.value == "true") || (currentForm.packageID != null && currentForm.packageID != "")) && currentForm.vehicleID != null){
		openInfoBox('/SetCurrentVehicleServlet?newZip=y&freeShippingWheels=y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
	}else{
		openInfoBox('/cart/AddItemServlet?newZip=y&freeShippingWheels=y&' + createFormString(currentForm), 'Shipping Quote', 'default', 'default');
	}
	return false;
}
function shippingZipAfterSetVehicle(formName) {
	currentForm = document.forms[formName];
        currentForm.shipquote.value = "Y";
        if(currentForm.wishlist) currentForm.wishlist.value = "false";
	openInfoBox('/SetCurrentVehicleServlet?' + createFormString(currentForm), 'Shipping Quote', 'default', 'default', '/cart/AddItemServlet?newZip=y&' + createFormString(currentForm));
        return false;
}
function shippingQuoteWithString(formString) {
	if(formString.indexOf("_Qty") > -1 && !moreThanZeroItems(formString)) {
		openWarningBox("/modalPopups/genericAlert.jsp?message=Please+select+a+quantity.", "Warning", "default", "default");
		return false;
	}
	try {
		//mboxDefine('mboxSQRContainer', 'shipQuote');
		//mboxDefine('mboxSQSWContainer', 'shipQuoteSelectWarehouse');
		//mboxDefine('mboxGZContainer', 'getZip');
		//mboxUpdate('shipQuote', '');
		//mboxUpdate('shipQuoteSelectWarehouse', '');
		//mboxUpdate('getZip', '');
	} catch (err) { }
	//openInfoBoxAndCallFunction(formString, 'Shipping Quote', '650', '575', 'updateShippingCost()');
	openInfoBox(formString, 'Shipping Quote', 'default', 'default');
	return false;
}
function updateShippingCost(){
	try { window.modal.hide();
	} catch (err) {}
	if(document.shippingForm!=null && document.shippingForm.shipZipFromModal!=null && document.shippingForm.shipZipFromModal.value != "" && document.shippingForm.shipZipFromModal.value != document.shippingForm.shipZip.value) {
                // non-tire and non-wheel results
	    if(document.getElementById("loading")) {
                document.getElementById("loading").style.display = "inline";
		window.location = document.shippingForm.action;
                setTimeout("hideTRObject('loading')",500);
	    } else {
		window.location = document.shippingForm.action;
		//location.reload(true);
	    }
    	} else if(document.sortByForm!=null && document.sortByForm.shipZipFromModal!=null && document.sortByForm.shipZipFromModal.value != "" && document.sortByForm.shipZipFromModal.value != document.sortByForm.shipZip.value) {
        	//tire search results
        	document.sortByForm.submit();
	} else if(document.sortForm!=null && document.sortForm.shipZipFromModal!=null && document.sortForm.shipZipFromModal.value != "" && document.sortForm.shipZipFromModal.value != document.sortForm.shipZip.value) {
		// wheel results
	    if(document.getElementById("loading")) {
                document.getElementById("loading").style.display = "inline";
                //location.reload(true);
		window.location = document.sortForm.action;
                setTimeout("hideTRObject('loading')",500);
	    } else {
		//location.reload(true);
		window.location = document.sortForm.action;
	    }
        }
}
function addToWishList(formName) {
	currentForm = document.forms[formName];
	currentForm.wishlist.value = "true";
	if(currentForm.shipquote) currentForm.shipquote.value = "N";
	return true;
}
function addToWishListNew(formName){
	currentForm = document.forms[formName];
	currentForm.wishlist.value = "true";
	if(currentForm.shipquote) currentForm.shipquote.value = "N";
	document.forms[formName].submit();
	return true;
}
function launchMAP(formName, wantRHP) {
	currentForm = document.forms[formName];
	currentForm.shipquote.value = "M";
	if(currentForm.wishlist) currentForm.wishlist.value = "false";

	//PN1803 - If we're coming from the wish list or new product page, make sure the vehicle gets set if we have one.
	if(((currentForm.tiresFromWishList != null && currentForm.tiresFromWishList.value == "true") || (currentForm.wheelsFromWishList != null && currentForm.wheelsFromWishList.value == "true") || (currentForm.fromWishList != null && currentForm.fromWishList.value == "true")) && currentForm.vehicleID != null) 
		return shippingQuoteWithString('/SetCurrentVehicleServlet?' + createFormString(currentForm));

	if(currentForm.fromNewProducts != null && currentForm.fromNewProducts.value == "true")
		return shippingQuoteWithString('/SetCurrentVehicleServlet?' + createFormString(currentForm));
	//End PN1803.

	if(wantRHP != '') {
		if(currentForm.WantRHP != null) { //set
			currentForm.WantRHP.value = wantRHP;
		} else if(currentForm.i1_WantRHP != null) { //single
			currentForm.i1_WantRHP.value = wantRHP;
		}
	}
	return launchMAPWithString('/cart/AddItemServlet?' + createFormString(currentForm));
}
function launchGoodyearMAP(formName, wantRHP){
	currentForm = document.forms[formName];
	currentForm.shipquote.value = "M";
	if(currentForm.wishlist) currentForm.wishlist.value = "false";

	var zipCode = document.getElementById("shipZip").value;

	if(zipCode == null || zipCode == ""){
		return shippingQuoteWithString('/cart/AddItemServlet?goodyearMap=y&newZip=y&' + createFormString(currentForm));
	}else{
		if(((currentForm.tiresFromWishList != null && currentForm.tiresFromWishList.value == "true") || (currentForm.wheelsFromWishList != null && currentForm.wheelsFromWishList.value == "true") || (currentForm.fromWishList != null && currentForm.fromWishList.value == "true")) && currentForm.vehicleID != null)
			return shippingQuoteWithString('/SetCurrentVehicleServlet?goodyearMap=y&' + createFormString(currentForm));

		if(currentForm.fromNewProducts != null && currentForm.fromNewProducts.value == "true")
			return shippingQuoteWithString('/SetCurrentVehicleServlet?goodyearMap=y&' + createFormString(currentForm));

		if(wantRHP != ''){
			if(currentForm.WantRHP != null){
				currentForm.WantRHP.value = wantRHP;
			}else if(currentForm.i1_WantRHP != null){
				currentForm.i1_WantRHP.value = wantRHP;
			}
		}

		return launchMAPWithString('/cart/AddItemServlet?goodyearMap=y&' + createFormString(currentForm));
	}
}
function launchMASTMAP(formName, wantRHP){
	currentForm = document.forms[formName];
	if(currentForm.wishlist) currentForm.wishlist.value = "false";

	var zipCode = document.getElementById("shipZip").value;

	if(zipCode == null || zipCode == ""){
		currentForm.shipquote.value = "M";
		return shippingQuoteWithString('/cart/AddItemServlet?mastMAP=y&newZip=y&mastMAPAddToCart=y&' + createFormString(currentForm));
	}else{
		currentForm.shipquote.value = "N";
		location.href = '/cart/AddItemServlet?' + createFormString(currentForm);
		return false;
	}
}
function launchMAPWithString(formString) {
	if(formString.indexOf("_Qty") > -1 && !moreThanZeroItems(formString)) {
		openInfoBox("/modalPopups/genericAlert.jsp?message=Please+select+a+quantity.", "Warning", "default", "default");
		return false;
	}
	openInfoBox(formString, 'Special Pricing Information', 'default', 'default');
	return false;
}
function moreThanZeroItems(stringToCheck) {
	var querystring = stringToCheck.split("?")[1] || false;
	var counter = 0;
	pairs = querystring.split("&");
	for(var i = 0; i < pairs.length; i++) {
		if(pairs[i].indexOf("_Qty=") > -1) {
			counter += pairs[i].split("=")[1] - 0;
		}
	}
	if(counter > 0) return true;
	return false;	
}
function createFormString(formObject) {
	var inputElements = formObject.getElementsByTagName("INPUT");
	var formString = "";
	var numberOfOptions = 0;
	var currentlySelectedOption = 0;
	var prefix = "i1_";
	var optionsAvailable = false; 
	var currentQty = 1;
	if(formObject.currentOption != null && formObject.currentOption.length > 0) {
		optionsAvailable = true;
	}
	if(optionsAvailable) {
		numberOfOptions = formObject.currentOption.length;
		currentlySelectedOption = formObject.currentOption.selectedIndex;
		prefix = "i" + (currentlySelectedOption-0+1) + "_";
		currentQty = formObject.qty[formObject.qty.selectedIndex].value;
		formString += "&itemCount=" + (currentlySelectedOption-0+1);
	}
	for(var i=0; i<inputElements.length; i++) {
		if(inputElements[i].name) {
			if(inputElements[i].type == "checkbox" ||
			   inputElements[i].type == "radio") {
				if(inputElements[i].checked) {
					if(formString != "") formString += "&";
					formString += inputElements[i].name + "=" + inputElements[i].value;
				}
			} else {
				//options are available, only get the selected option
				if(optionsAvailable && !(inputElements[i].name.indexOf("shipquote") == 0 || inputElements[i].name.indexOf("AddToUser") == 0 || inputElements[i].name.indexOf("wishlist") == 0)) {
					if(inputElements[i].name.indexOf(prefix) == 0) {
						if(formString != "") formString += "&";
						formString += inputElements[i].name + "=";
						if(inputElements[i].name == (prefix+"Qty")) {
							formString += currentQty;
						} else {
							formString += encodeURIComponent(inputElements[i].value);
						}
					}else{
						var j;
						var skip = false;
						for (j = 1; j <= numberOfOptions; j++) {
  							skipPrefix = "i" + (j) + "_";
							if(inputElements[i].name.indexOf(skipPrefix) == 0) {
								skip = true;
							}
						}
						if(!skip){
							if(formString != "") formString += "&";
							formString += inputElements[i].name + "=" + encodeURIComponent(inputElements[i].value);
						}
					}
				} else { // no options
					if(formString != "") formString += "&";
					formString += inputElements[i].name + "=" + encodeURIComponent(inputElements[i].value);
				}
			}
		}
	}
	var selectElements = formObject.getElementsByTagName("SELECT");
	for(var i=0; i<selectElements.length; i++) {
		if(selectElements[i].name && selectElements[i].name.indexOf("_Qty") > 0) {
			formString += "&" + selectElements[i].name + "=" + selectElements[i][selectElements[i].selectedIndex].value;
		}
	}
	return formString;
}

var currentForm = (document.forms['recentVehicles']?document.forms['recentVehicles']:null);
var searchButtonID = "shopVehicleSearchBtn";
var yearPreSelect = "";
function populateAutoYears(formName){
  if(formName != null && formName.length > 0) currentForm = document.forms[formName];
  if(currentForm.autoMake.value != "#" && currentForm.autoMake.value != ""){
	var targetMake = currentForm.autoMake.value;
	var url = webApplicationBaseURL + "/survey/ValidationServlet?autoMake=" + targetMake + "&autoYearsNeeded=true";
	$.ajax({
		type : "GET",
		url : url,
		dataType : "xml",
		success : yearCallback
	});
  }
}
function populateAutoModels(formName){
  	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoYear.value != "#" &&
		currentForm.autoYear.value != ""  &&
		currentForm.autoMake.value != "#" &&
		currentForm.autoMake.value != ""){
		var targetYear = currentForm.autoYear.value;
		var targetMake = currentForm.autoMake.value;
		var url = webApplicationBaseURL + "/survey/ValidationServlet?autoYear=" + targetYear + "&autoMake=" + targetMake;
		$.ajax({
			type : "GET",
			url : url,
			dataType : "xml",
			success : modelCallback
		});
	}
}
function populateModClar(formName){
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoYear.value != "#" &&
	   currentForm.autoMake.value != "#" &&
	   currentForm.autoModel.value != "#" &&
	   currentForm.autoYear.value != "" &&
	   currentForm.autoMake.value != "" &&
	   currentForm.autoModel.value != ""){
		var targetYear = currentForm.autoYear.value;
		var targetMake = currentForm.autoMake.value;
		var targetModel = currentForm.autoModel.value;
		var url = webApplicationBaseURL + "/survey/ValidationServlet?autoYear=" + targetYear + "&autoMake=" + targetMake + "&autoModel=" + targetModel + "&newDesktop=true";
		$.ajax({
			type : "GET",
			url : url,
			dataType : "xml",
			success : clarCallback
		});
	}
}
function resetMake(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	currentForm.autoMake.selectedIndex = 0;
	trDropdownUpdateText(currentForm.autoMake);
}
function clearAutoYears(formName){
        document.getElementById("autoYear").value=null;
}
function clearAutoModel(formName){
	document.getElementById("autoModel").value=null;
	document.getElementById("autoModClar").value=null;
}
function deleteAutoYears(formName){
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoYear.options != null){
		while(currentForm.autoYear.options.length > 1){
			deleteIndex = currentForm.autoYear.options.length - 1;
			currentForm.autoYear.options[deleteIndex] = null;
		}
		trDropdownDisable(currentForm.autoYear);
  	}
	trDropdownDisable(currentForm.autoYear);
        trDropdownUpdateText(currentForm.autoYear);
}
function deleteAutoModels(formName){
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        if(currentForm.autoModel.options != null){
                while(currentForm.autoModel.options.length > 1){
                        deleteIndex = currentForm.autoModel.options.length - 1;
                        currentForm.autoModel.options[deleteIndex] = null;
                }
        }
        trDropdownDisable(currentForm.autoModel);
        trDropdownUpdateText(currentForm.autoModel);
        deleteAutoModClar(formName);
}
function deleteAutoModelsPC(formName){
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];	
	if(currentForm.autoModel.options != null){
		while(currentForm.autoModel.options.length > 1){
			deleteIndex = currentForm.autoModel.options.length - 1;
			currentForm.autoModel.options[deleteIndex] = null;
		}
	}
	trDropdownDisable(currentForm.autoModel);
	trDropdownUpdateText(currentForm.autoModel);
	deleteAutoModClarPC(formName);
}
function deleteAutoModClar(formName){
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoModClar.options != null){
		while(currentForm.autoModClar.options.length > 1){
			deleteIndex = currentForm.autoModClar.options.length - 1;
			currentForm.autoModClar.options[deleteIndex] = null;
		}
	}
	currentForm.autoModClar.className += " hide";
	$(currentForm.autoModClar).parent().addClass('hide');
	trDropdownDisable(currentForm.autoModClar);
	trDropdownUpdateText(currentForm.autoModClar);
}
function deleteAutoModClarPC(formName){
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        if(currentForm.autoModClar.options != null){
                while(currentForm.autoModClar.options.length > 1){
                        deleteIndex = currentForm.autoModClar.options.length - 1;
                        currentForm.autoModClar.options[deleteIndex] = null;
                }
        }
        currentForm.autoModClar.className += " hide";
        $(currentForm.autoModClar).parent().addClass('hide');
}
function modelCallback(responseXML){
	if(responseXML){
		var models = responseXML.getElementsByTagName("models")[0];
		if(models.childNodes.length > 0){
			var num = 0;
			myOption = new Option();
			if(currentForm.langType != null && currentForm.langType.value == "spanish"){
				myOption.text = "Escoja el modelo";
			}else{
				myOption.text = "Select Model";
			}
			myOption.value = "#";
			currentForm.autoModel.options[0] = myOption;
			for(loop = 0; loop < models.childNodes.length; loop++){
				var autoModel = models.getElementsByTagName("model")[loop];
				myOption = new Option();
				myOption.text = autoModel.childNodes[0].nodeValue;
				myOption.value = autoModel.childNodes[0].nodeValue;
				currentForm.autoModel.options[loop+1] = myOption;
				if(document.getElementById("autoModel")!=null && document.getElementById("autoModel").value==autoModel.childNodes[0].nodeValue) {
                                     currentForm.autoModel.options[loop+1].selected=true;
                                }
			}
			trDropdownUpdateText(currentForm.autoModel);
			trDropdownEnable(currentForm.autoModel);
			if($(currentForm.autoYear).hasClass('trMega')) $(currentForm.autoModel).closest('.dropdownButton').find('button').click();
		}
	}
}
function yearCallback(responseXML){
  if(responseXML){
	var years = responseXML.getElementsByTagName("years")[0];
		if(years.childNodes.length > 0){
			var num = 0;
			myOption = new Option();
			if(currentForm.langType != null && currentForm.langType.value == "spanish"){
				myOption.text = "Escoja el a" + String.fromCharCode(241) + "o";
			}else{
				myOption.text = "Select Year";
			}
			myOption.value = "#";
			currentForm.autoYear.options[0] = myOption;
			for(loop = 0; loop < years.childNodes.length; loop++){
				var autoYear = years.getElementsByTagName("year")[loop];
				myOption = new Option();
				myOption.text = autoYear.childNodes[0].nodeValue;
				myOption.value = autoYear.childNodes[0].nodeValue;
				if(yearPreSelect != null) {
					if(yearPreSelect == myOption.value) {
						myOption.selected = true;
					} else {
						myOption.selected = false;
					}
				} else if(document.getElementById("autoYear")!=null && document.getElementById("autoYear").value==autoYear.childNodes[0].nodeValue) {
					currentForm.autoYear.options[loop+1].selected=true;
				}
				currentForm.autoYear.options[loop+1] = myOption;

				if(document.getElementById("autoYear")!=null && document.getElementById("autoYear").value==autoYear.childNodes[0].nodeValue) {
                                     currentForm.autoYear.options[loop+1].selected=true;
                                }
			}
			trDropdownUpdateText(currentForm.autoYear);
			trDropdownEnable(currentForm.autoYear);
			if(yearPreSelect != "") {
				yearPreSelect = "";
				deleteAutoModels();
				populateAutoModels();
			}
			if($(currentForm.autoMake).hasClass('trMega')) $(currentForm.autoYear).closest('.dropdownButton').find('button').click();
		}
	}
}
function clarCallback(responseXML){
	if(responseXML){
		var clarifiers = responseXML.getElementsByTagName("clarifiers")[0];
		if(clarifiers.childNodes.length > 0){
			var num = 0;
			myOption = new Option();
			if(currentForm.langType != null && currentForm.langType.value == "spanish"){
				myOption.text = "M" + String.fromCharCode(225) + "s info. del modelo";
			}else if(currentForm.additional != null && currentForm.additional.value == "spelledOut"){
				myOption.text = "Additional Model Info";
			}else{
				myOption.text = "Add'l Model Info";
			}
			myOption.value = "#";
			currentForm.autoModClar.options[0] = myOption;
			for(loop = 0; loop < clarifiers.childNodes.length; loop++){
				var modelClar = clarifiers.getElementsByTagName("clar")[loop];
				myOption = new Option();
				myOption.text = modelClar.childNodes[0].nodeValue;
				myOption.value = modelClar.childNodes[0].nodeValue;
				currentForm.autoModClar.options[loop+1] = myOption;
			    	if(document.getElementById("autoModClar")!=null && document.getElementById("autoModClar").value==modelClar.childNodes[0].nodeValue) {
                                     currentForm.autoModClar.options[loop+1].selected=true;
                                }
			}
			trDropdownEnable(currentForm.autoModClar);
			trDropdownUpdateText(currentForm.autoModClar);
			$(currentForm.autoModClar).parent().removeClass('hide');
			if($(currentForm.autoModel).hasClass('trMega')) $(currentForm.autoModClar).closest('.dropdownButton').find('button').click();
		} else {
			getAvailableProducts();
		}
	}
}
function getAvailableProducts(formName){
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        if(currentForm.autoYear.value != "#" &&
           currentForm.autoMake.value != "#" &&
           currentForm.autoModel.value != "#" &&
	   currentForm.autoYear.value != "" &&
	   currentForm.autoMake.value != "" &&
	   currentForm.autoModel.value != ""){
                var targetYear = currentForm.autoYear.value;
                var targetMake = currentForm.autoMake.value;
                var targetModel = currentForm.autoModel.value.replace(/\+/g,"%2B");
                var targetModClar = "";
                var url = webApplicationBaseURL + "/survey/ValidationServlet?autoYear=" + targetYear + "&autoMake=" + targetMake + "&autoModel=" + targetModel + "&needsProducts=yes";

             if(currentForm.autoModClar.length > 1){
                 if(currentForm.autoModClar.value != "#" && currentForm.autoModClar.value != ""){
                        targetModClar = currentForm.autoModClar.value.replace(/\+/g,"%2B");

                        url += "&autoModClar=" + targetModClar;
                        $.ajax({
                            type : "GET",
                            url : url,
                            dataType : "xml",
                            success : productsCallback
                        });

                 }
             } else {
                        $.ajax({
                            type : "GET",
                            url : url,
                            dataType : "xml",
                            success : productsCallback
                        });
             }
        }
}
function productsCallback(responseXML){
	if(responseXML && currentForm.search){
		var tires = responseXML.getElementsByTagName("tires")[0].firstChild.data;
		var wheels = responseXML.getElementsByTagName("wheels")[0].firstChild.data;
		var suspension = responseXML.getElementsByTagName("suspension")[0].firstChild.data;
		var brakes = responseXML.getElementsByTagName("brakes")[0].firstChild.data;
		var winterTires = responseXML.getElementsByTagName("winterTires")[0].firstChild.data;
		var accessories = responseXML.getElementsByTagName("accessories")[0].firstChild.data;
		var wipers = responseXML.getElementsByTagName("wipers")[0].firstChild.data;
		var lights = responseXML.getElementsByTagName("lights")[0].firstChild.data;
		var intake = responseXML.getElementsByTagName("intake")[0].firstChild.data;
		var newProducts = responseXML.getElementsByTagName("newProducts")[0].firstChild.data;
		var pax = responseXML.getElementsByTagName("isPax")[0].firstChild.data;

		//new value used to tell VehicleSearchServlet that a db lookup for a mmyc has already occurred. -kms 07/09
		currentForm.modClarLookUpCompleted.value = true;
		var productList = currentForm.search.options;
		if(productList) {
			for(i=0; i<productList.length; i++) {
				switch(productList[i].value) {
					case "tire":
						productList[i].disabled = (pax == "true" || tires == "false");
						break;
					case "wheel":
						productList[i].disabled = (wheels == "false");
						break;
					case "package":
						productList[i].disabled = (wheels == "false");
						break;
					case "snow":
						productList[i].disabled = (winterTires == "false");
						break;
					case "snowTires":
						productList[i].disabled = (winterTires == "false");
						break;
					case "brakes":
						productList[i].disabled = (brakes == "false");
						break;
					case "suspension":
						productList[i].disabled = (suspension == "false");
						break;
					case "light":
						productList[i].disabled = (lights == "false");
						break;
					case "wiper":
						productList[i].disabled = (wipers == "false");
						break;
					case "tuning":
						productList[i].disabled = (intake == "false");
						break;
					case "newProducts":
						productList[i].disabled = (newProducts == "false");
						break;
				}
			}
			if($('#shoppingForSelector').hasClass('trMega')) megaRebuildMenu($('#shoppingForSelector')); 
		}
		currentForm.mmycPAX.value = pax;
	}
}
function checkAvailability(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	var index = currentForm.index.value;
	if(index != "xx" && index != "") {
		var productList = currentForm.search.options;
		if(productList) {
			for(i=0; i<productList.length; i++) {
				switch(productList[i].value) {
					case "tire":
						productList[i].disabled = (masterVehicleList[index].pax == "true" || masterVehicleList[index].tires == "false");
						break;
					case "wheel":
						productList[i].disabled = (masterVehicleList[index].wheels == "false");
						break;
					case "package":
						productList[i].disabled = (masterVehicleList[index].wheels == "false");
						break;
					case "snow":
						productList[i].disabled = (masterVehicleList[index].winter == "false");
						break;
					case "snowTires":
						productList[i].disabled = (masterVehicleList[index].winter == "false");
						break;
					case "brakes":
						productList[i].disabled = (masterVehicleList[index].brakes == "false");
						break;
					case "suspension":
						productList[i].disabled = (masterVehicleList[index].suspension == "false");
						break;
					case "light":
						productList[i].disabled = (masterVehicleList[index].lights == "false");
						break;
					case "wiper":
						productList[i].disabled = (masterVehicleList[index].wipers == "false");
						break;
					case "tuning":
						productList[i].disabled = (masterVehicleList[index].intake == "false");
						break;
					case "newProducts":
						productList[i].disabled = (masterVehicleList[index].newProducts == "false");
						break;
				}
			}
			if($('#shoppingForSelector').hasClass('trMega')) megaRebuildMenu($('#shoppingForSelector')); 
                }
	}
}
function disableSavedRecent(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.index) currentForm.index.options[0].selected = true;
	trDropdownUpdateText(currentForm.index);
}
function disableSavedRecentPC(formName) {
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        if(currentForm.index) currentForm.index.options[0].selected = true;
        trDropdownUpdateText(currentForm.index);
	
    if(currentForm) {
	if(currentForm.savedOrRecent)
		currentForm.savedOrRecent.value = "";
	if(currentForm.vehicleId)
		currentForm.vehicleId.value = "";
	if(currentForm.pcVehName)
		currentForm.pcVehName.value = "";
	if(currentForm.pcVehMake)
		currentForm.pcVehMake.value = currentForm.autoMake.value;	
	if(currentForm.pcVehYear)
		currentForm.pcVehYear.value = "";
	if(currentForm.pcVehModel)
		currentForm.pcVehModel.value = "";
	if(currentForm.pcVehModClar)
		currentForm.pcVehModClar.value = "";
    }
}
function setAutoYear(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	currentForm.pcVehYear.value = currentForm.autoYear.value;
}
function setAutoModel(formName) {
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        currentForm.pcVehModel.value = currentForm.autoModel.value;
}
function setAutoModClar(formName) {
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        currentForm.pcVehModClar.value = currentForm.autoModClar.value;
}
function zipCheck(returnVal) {
	if(returnVal < 0) {
		changeZipStatus("error");
	} else if(returnVal > 0) {
		//zip is fine, validate whole form
		changeZipStatus("good");
	} else {
		changeZipStatus("neutral");
	}
}
function tdgModalZipValidator() {
    var testLength = "";
    var moveForward = false;
    if (currentForm['zip-code']) {
        var zipResult = validateZIP(currentForm['zip-code']);
        testLength = new String(currentForm['zip-code'].value.replace(/ /g,''));
        if (zipResult < 1 && testLength.length != 0) {
            moveforward = false;
            addErrorClass(currentForm['zip-code']);
            if (document.forms.selectTireSize && document.forms.selectTireSize['zip-code'])
                addErrorClass(document.forms.selectTireSize['zip-code']);
            showTopZIPError();
        } else {
            currentForm['zip-code'].value = currentForm['zip-code'].value.replace(/ /g,'');
            var zipValidator = webApplicationBaseURL + '/rest/v1/zipCodeLookUp/validate/' + currentForm['zip-code'].value;
            $.ajax({
                url: zipValidator,
                type: "GET",
                dataType: "json",
                async: false,
                success:function(response) {
                    var zipCodeStatus = response.status;
                    if (zipCodeStatus == "fail" && testLength.length != 0) {
                        addErrorClass(currentForm['zip-code']);
                        if (document.forms.selectTireSize && document.forms.selectTireSize['zip-code'])
                            addErrorClass(document.forms.selectTireSize['zip-code']);
                        showTopZIPError();
                        window.vehicleSearchFormSubmitted = "false";
                        moveForward = false;
                    } else
                        moveForward = true;
                },
                error:function(status) {
                    moveForward = true;
                }
            });
        }
    } else
        moveForward = false;
    return moveForward;
}
function validateNewVehicleSearch(formName) {
	if(window.vehicleSearchFormSubmitted == "true") return false;
	$('#shopVehicleSearchBtn').hide();
	$('#loadingVehicleSearchBtn').show();
	window.vehicleSearchFormSubmitted = "true";
	
	var fail = false;
	hideVehicleSelectionError();
	hidePaxMessage();
	hideTopZIPError();
	hideProductsUnavailableMessage();
	hideChooseValueMessage();
	hideErrorsTitle();
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.index) {
		if(currentForm.index.selectedIndex < 0 || currentForm.index.value == "xx" || currentForm.index.value == "") {
			if(mmycNotSelected(formName)) {
				trDropdownErrorShow(currentForm.index);
				showVehicleSelectionError();
				linkTracking({linkName: s.pageName + ': vehicle selector error',
					prop35: s.pageName + '- Choose a vehicle make, model, year.',
					events: (fail?'':'event6')});
				fail = true;
			} else if(currentForm.mmycPAX.value == "true") {
				showPaxMessage();
			}
		} else {
			if(masterVehicleList[(currentForm.index.value)].pax == "true") showPaxMessage();
			if(determineVehicleUpdateNeeded(currentForm.index.value)) fail = true;
		}
	} else if(mmycNotSelected(formName)) {
		showVehicleSelectionError();
		linkTracking({linkName: s.pageName + ': vehicle selector error',
			prop35: s.pageName + '- Choose a vehicle make, model, year.',
			events: (fail?'':'event6')});
		fail = true;
	} else if(currentForm.mmycPAX.value == "true") {
		showPaxMessage();
	}

    if (!fail && currentForm.search.value == "tdg") {
        var moveForward = false;
        moveForward = tdgModalZipValidator();
        if (moveForward) {
            var make = "";
            var model = "";
            var year = "";
            var modClar = "";
            var zip = "";
            if (currentForm['zip-code'].value)
                zip = currentForm['zip-code'].value;
            if (currentForm.index && currentForm.index.value != "xx" && currentForm.index.value != "") {
                make = masterVehicleList[(currentForm.index.value)].make;
                model = masterVehicleList[(currentForm.index.value)].model;
                year = masterVehicleList[(currentForm.index.value)].year;
                modClar = masterVehicleList[(currentForm.index.value)].modClar;
            } else {
                make = currentForm.autoMake.value;
                model = currentForm.autoModel.value;
                year = currentForm.autoYear.value;
                modClar = currentForm.autoModClar.value;
            }
            if (currentForm.index)
                openInfoBox("/tires/dg/SelectTireSize.jsp?fromVehicleSelector=Y&index=" + currentForm.index.value + "&shipZipModal=" + zip + "&autoMake=" + make + "&autoModel=" + model + "&autoYear=" + year + "&autoModClar=" + modClar);
            else
                openInfoBox("/tires/dg/SelectTireSize.jsp?fromVehicleSelector=Y&shipZipModal=" + zip + "&autoMake=" + make + "&autoModel=" + model + "&autoYear=" + year + "&autoModClar=" + modClar);
            triggerTDGLinkTracking('tireSize');
            return false;
        }
    }

	if(currentForm.search && currentForm.search.length>0 && currentForm.search[currentForm.search.selectedIndex].disabled) {
		trDropdownErrorShow(currentForm.search);
		showProductsUnavailableMessage();
		linkTracking({linkName: s.pageName + ': vehicle selector error',
			prop35: s.pageName + "- We're sorry. We don't currently have products for your vehicle in the category you selected.",
			events: (fail?'':'event6')});
		fail = true;
	}
	if(currentForm.search && currentForm.search.value == "choose") {
		showChooseValueMessage();
		linkTracking({linkName: s.pageName + ': vehicle selector error',
			prop35: s.pageName + "- Select the Product Category you'd like to see.",
			events: (fail?'':'event6')});
		fail = true;
	}
	var zipResult;
	if(currentForm['zip-code']){
		zipResult = validateZIP(currentForm['zip-code']);
	}
	if(zipResult < 1) {
		var testLength = new String(currentForm['zip-code'].value.replace(/ /g,''));
		var zipSearchReq = typeof zipSearchRequired == 'undefined' ? false : zipSearchRequired;
		if(testLength.length > 0 || zipSearchReq) {
			searchZipFailTracking(!fail);
			fail = true;
			addErrorClass(currentForm['zip-code']);
			if(document.forms.selectTireSize && document.forms.selectTireSize['zip-code']){
				addErrorClass(document.forms.selectTireSize['zip-code']);
			}
			showTopZIPError();
		}
	} else if(!fail) {
		currentForm['zip-code'].value = currentForm['zip-code'].value.replace(/ /g,'');
		var zipValidator = webApplicationBaseURL + '/rest/v1/zipCodeLookUp/validate/' + currentForm['zip-code'].value;
		$.ajax({
			url: zipValidator,
			type: "GET",
			dataType: "json",
			async: false,
			success:function(response){
				var zipCodeStatus = response.status;
				if(zipCodeStatus == "fail") {
					addErrorClass(currentForm['zip-code']);
					if(document.forms.selectTireSize && document.forms.selectTireSize['zip-code']){
						addErrorClass(document.forms.selectTireSize['zip-code']);
					}
					showTopZIPError();
					window.vehicleSearchFormSubmitted = "false";
					searchZipFailTracking(!fail);
					fail = true;
				}
			},
			error:function(status){
				console.log(status);
			}
		});
	}
	if(fail){
		window.vehicleSearchFormSubmitted = "false";
		$('#errorTitle').focus();
		$('#loadingVehicleSearchBtn').hide();
		$('#shopVehicleSearchBtn').show();
		$('#shopVehicleSearchBtn').blur();
	} else {
		var goWhereInput = $(currentForm).find('input[name=goWhere]');
		if(currentForm.search && currentForm.search.value != "wheel" &&  goWhereInput.length > 0 && goWhereInput.val() == "/wheels/WheelCloseUpServlet"){
			window.wheelSearchGoWhereInput = goWhereInput.detach();
		} else if(currentForm.search && currentForm.search.value == "wheel" && window.wheelSearchGoWhereInput && window.wheelSearchGoWhereInput.val() == "/wheels/WheelCloseUpServlet"){
			$(currentForm).append(window.wheelSearchGoWhereInput);
		}
	}
	return !fail;
}
/* Does not perform checks on zip or products, just checks vehicle information. 
 * Used by the TDG and tire reviews.
 */
function validateBasicNewVehicleSearch(formName) {
	var fail = false;
	hideVehicleSelectionError();
	hidePaxMessage();
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.index) {
		if(currentForm.index.selectedIndex < 0 || currentForm.index.value == "xx" || currentForm.index.value == "") {
			if(mmycNotSelected(formName)) {
				trDropdownErrorShow(currentForm.index);
				showVehicleSelectionError();
				fail = true;
			} else if(currentForm.mmycPAX.value == "true") {
				showPaxMessage();
			} 
		} else {
			if(masterVehicleList[(currentForm.index.value)].pax == "true") showPaxMessage();
			if(determineVehicleUpdateNeeded(currentForm.index.value)) fail = true;
		}
	} else if(mmycNotSelected(formName)) {
		showVehicleSelectionError();
		fail = true;
	} else if(currentForm.mmycPAX.value == "true") {
		showPaxMessage();
		fail=true; //need this otherwise the form submits on /tires/reviews/index.jsp
	}
	return !fail;
}
function validateNewAccountNewVehicle(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoMake.value!='#') {
		return validateNewVehicleProfileCenterSearch(formName);
	}
	return true;
}
function validateNewVehicleProfileCenterSearch(formName) {
        var fail = false;
        hideVehicleSelectionError();
        hideTopZIPError();
        hideProductsUnavailableMessage();
        if(formName != null && formName.length > 0) currentForm = document.forms[formName];
        if(currentForm.index) {
                if(currentForm.index.selectedIndex < 0 || currentForm.index.value == "xx" || currentForm.index.value == "") {
                        if(mmycNotSelected(formName)) {
                                trDropdownErrorShow(currentForm.index);
                                showVehicleSelectionError();
                                fail = true;
                        }
                }
        } else if(mmycNotSelected(formName)) {
                showVehicleSelectionError();
                fail = true;
        }
		if(!fail && currentForm.search && currentForm.search.length>0 && currentForm.search[currentForm.search.selectedIndex].disabled) {
                trDropdownErrorShow(currentForm.search);
                showProductsUnavailableMessage();
                fail = true;
        }
        var zipResult;
        if(currentForm['zip-code']){
                zipResult = validateZIP(currentForm['zip-code']);
        }
        if(zipResult < 1) {
                var testLength = new String(currentForm['zip-code'].value.replace(/ /g,''));
                if(testLength.length > 0) {
                        fail = true;
                        addErrorClass(currentForm['zip-code']);
                        showTopZIPError();
                }
        }
        return !fail;
}
function validateTireSizeSearch(formName) {
	$('#shopSizeSearchBtn').hide();
	$('#loadingSizeSearchBtn').show();
	var fail = false;
	hideVehicleSelectionError();
	hideTopZIPError();
	var sizeForm = document.forms["selectTireSize"];
	if(formName != null && formName.length > 0) sizeForm = document.forms[formName];
	var zipResult = validateZIP(sizeForm['zip-code']);
	if(zipResult < 1) {
		var testLength = new String(sizeForm['zip-code'].value.replace(/ /g,''));
        var zipSearchReq = typeof zipSearchRequired == 'undefined' ? false : zipSearchRequired;
		if(testLength.length > 0 || zipSearchReq) {
            searchZipFailTracking(!fail);
			fail = true;
			addErrorClass(sizeForm['zip-code']);
			if(document.forms.recentVehicles && document.forms.recentVehicles['zip-code']){
				addErrorClass(document.forms.recentVehicles['zip-code']);
			}
			showTopZIPError();
		}
	} else {
		sizeForm['zip-code'].value = sizeForm['zip-code'].value.replace(/ /g,'');
		var zipValidator = webApplicationBaseURL + '/rest/v1/zipCodeLookUp/validate/' + sizeForm['zip-code'].value;
		$.ajax({
			url: zipValidator,
			type: "GET",
			dataType: "json",
			async: false,
			success:function(response){
				var zipCodeStatus = response.status;if(zipCodeStatus == "fail") {
					addErrorClass(document.forms.selectTireSize['zip-code']);
					if(document.forms.recentVehicles && document.forms.recentVehicles['zip-code']){
						addErrorClass(document.forms.recentVehicles['zip-code']);
					}
					showTopZIPError();
					searchZipFailTracking(!fail);
					fail = true;
				}
			},
			error:function(status){
				console.log(status);
			}
		});
	}
	
	if(fail){
		$('#loadingSizeSearchBtn').hide();
		$('#shopSizeSearchBtn').show();
		$('#shopSizeSearchBtn').blur();
		$('#vehicleSearchModalTireSizeErrors').focus();
	}
	
	return !fail;
}
function mmycNotSelected(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	if(currentForm.autoMake.value == "#" || currentForm.autoMake.value == "" || currentForm.autoMake.value == "Select Make") { 
		trDropdownErrorShow(currentForm.autoMake);
		$(currentForm.autoMake).attr("aria-invalid","true");
		return true; 
	} else if(currentForm.autoYear.value == "#" || currentForm.autoYear.value == "") {
		trDropdownErrorShow(currentForm.autoYear);
		$(currentForm.autoYear).attr("aria-invalid","true");
		return true; 
	} else if(currentForm.autoModel.value == "#" || currentForm.autoModel.value == "") {
		trDropdownErrorShow(currentForm.autoModel);
		$(currentForm.autoModel).attr("aria-invalid","true");
		return true; 
	} else if(currentForm.autoModClar && (currentForm.autoModClar.value == "#" || currentForm.autoModClar.value == "") && currentForm.autoModClar.parentNode.className.indexOf("hide") == -1) {
		trDropdownErrorShow(currentForm.autoModClar);
		$(currentForm.autoModClar).attr("aria-invalid","true");
		return true; 
	}
	return false;
}
function clearMMYCErrors(formName) {
	if(formName != null && formName.length > 0) currentForm = document.forms[formName];
	trDropdownErrorHide(currentForm.index);
	trDropdownErrorHide(currentForm.autoMake);
	trDropdownErrorHide(currentForm.autoYear);
	trDropdownErrorHide(currentForm.autoModel);
	trDropdownErrorHide(currentForm.autoModClar);
	trDropdownErrorHide(currentForm.search);
	currentForm.mmycPAX.value = "false";
	$(currentForm.index).attr("aria-invalid","false");
	$(currentForm.autoMake).attr("aria-invalid","false");
	$(currentForm.autoYear).attr("aria-invalid","false");
	$(currentForm.autoModel).attr("aria-invalid","false");
	$(currentForm.autoModClar).attr("aria-invalid","false");
	$(currentForm.search).attr("aria-invalid","false");
}
function transferZIP(fromForm, toForm) {
	document.forms[toForm]['zip-code'].value = document.forms[fromForm]['zip-code'].value;
}
function toggleTireSizeSelector(myElement) {
	if(document.getElementById("addRearSize")) {
		if(document.getElementById("addRearSize").className.indexOf("icon-add") > -1) {
			document.getElementById("addRearSize").className = document.getElementById("addRearSize").className.replace("icon-add", "icon-remove");
			document.getElementById("AAsearch").style.display = "none";
			document.getElementById("FRsearch").style.display = "block";
			document.getElementById("RRsearch").style.display = "block";
		} else {
			document.getElementById("addRearSize").className = document.getElementById("addRearSize").className.replace("icon-remove", "icon-add");
			document.getElementById("AAsearch").style.display = "block";
			document.getElementById("FRsearch").style.display = "none";
			document.getElementById("RRsearch").style.display = "none";
		}
	}
}
function showPaxMessage() {
	if(document.getElementById("paxMessage") && document.getElementById("paxMessage").style.display == "none") {
		document.getElementById("paxMessage").style.display = "block";
	    if(window.location != window.parent.location)
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function hidePaxMessage() {
	if(document.getElementById("paxMessage") && document.getElementById("paxMessage").style.display == "block") {
		document.getElementById("paxMessage").style.display = "none";
	    if(window.location != window.parent.location)
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function showVehicleSelectionError() {
	var resize = false;
	if(document.getElementById("errorTitle") && document.getElementById("errorTitle").style.display == "none") {
		document.getElementById("errorTitle").style.display = "block";
		resize = true;
	}
	if(document.getElementById("savedRecentError") && document.getElementById("savedRecentError").style.display == "none") {
		document.getElementById("savedRecentError").style.display = "block";
		resize = true;
	}
	if(resize) { 
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
	if(document.getElementById("vehicleSection")) {
		disableHeaderScroll();
		document.getElementById("vehicleSection").scrollIntoView();
		enableHeaderScroll();
	}
}
function hideVehicleSelectionError() {
	if(document.getElementById("savedRecentError") && document.getElementById("savedRecentError").style.display == "block") {
		document.getElementById("savedRecentError").style.display = "none";
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function showTopZIPError() {
	var resize = false;
	if(document.getElementById("errorTitle") && document.getElementById("errorTitle").style.display == "none") {
		document.getElementById("errorTitle").style.display = "block";
		resize = true;
	}
	if(document.getElementById("vehicleSearchModalZipErrors") && document.getElementById("vehicleSearchModalZipErrors").style.display == "none") {
		document.getElementById("vehicleSearchModalZipErrors").style.display = "block";
		$('#zip-code-vehicle').attr("aria-invalid","true");
		resize = true;
	}
    if(document.getElementById("vehicleCheckModalZipErrors") && document.getElementById("vehicleCheckModalZipErrors").style.display == "none"){
        document.getElementById("vehicleCheckModalZipErrors").style.display = "block";
        $('#zip-code-vehicle-check').attr("aria-invalid", "true");
        resize = true;
    }
	if(document.getElementById("vehicleSearchModalTireSizeErrors") && document.getElementById("vehicleSearchModalTireSizeErrors").style.display == "none") {
		document.getElementById("vehicleSearchModalTireSizeErrors").style.display = "block";
		resize = true;
	}
	if(document.getElementById("vehicleSearchModalTireSizeZipErrors") && document.getElementById("vehicleSearchModalTireSizeZipErrors").style.display == "none") {
		document.getElementById("vehicleSearchModalTireSizeZipErrors").style.display = "block";
		$('#zip-code-size').attr("aria-invalid","true");
		resize = true;
	}
	if(resize) { 
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function hideTopZIPError() {
	var resize = false;
	if(document.getElementById("vehicleSearchModalZipErrors") && document.getElementById("vehicleSearchModalZipErrors").style.display == "block") {
		document.getElementById("vehicleSearchModalZipErrors").style.display = "none";
		$('#zip-code-vehicle').attr("aria-invalid","false");
		resize = true;
	}
    if(document.getElementById("vehicleCheckModalZipErrors") && document.getElementById("vehicleCheckModalZipErrors").style.display == "block"){
        document.getElementById("vehicleCheckModalZipErrors").style.display = "none";
        $('#zip-code-vehicle-check').attr("aria-invalid", "true");
        resize = true;
    }
	if(document.getElementById("vehicleSearchModalTireSizeErrors") && document.getElementById("vehicleSearchModalTireSizeErrors").style.display == "block") {
		document.getElementById("vehicleSearchModalTireSizeErrors").style.display = "none";
		resize = true;
	}
	if(document.getElementById("vehicleSearchModalTireSizeZipErrors") && document.getElementById("vehicleSearchModalTireSizeZipErrors").style.display == "block") {
		document.getElementById("vehicleSearchModalTireSizeZipErrors").style.display = "none";
		$('#zip-code-size').attr("aria-invalid","false");
		resize = true;
	}
	if(resize) { 
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function showProductsUnavailableMessage() {
	var resize = false;
	if(document.getElementById("errorTitle") && document.getElementById("errorTitle").style.display == "none") {
		document.getElementById("errorTitle").style.display = "block";
		resize = true;
	}
	if(document.getElementById("productNotAvailError") && document.getElementById("productNotAvailError").style.display == "none") {
		document.getElementById("productNotAvailError").style.display = "block";
		trDropdownErrorShow(currentForm.search);
		$('#shoppingForSelector').attr("aria-describedby","productNotAvailError").attr("aria-invalid","true");
		resize = true;
	}
	if(resize){
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function hideChooseValueMessage() {
	if(document.getElementById("defaultProductChosen") && document.getElementById("defaultProductChosen").style.display == "block") {
		document.getElementById("defaultProductChosen").style.display = "none";
		$('#shoppingForSelector').attr("aria-invalid","false");
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}	
function showChooseValueMessage() {
	var resize = false;
	if(document.getElementById("errorTitle") && document.getElementById("errorTitle").style.display == "none") {
		document.getElementById("errorTitle").style.display = "block";
		resize = true;
	}
	if(document.getElementById("defaultProductChosen") && document.getElementById("defaultProductChosen").style.display == "none") {
		document.getElementById("defaultProductChosen").style.display = "block";
		trDropdownErrorShow(currentForm.search);
		$('#shoppingForSelector').attr("aria-describedby","defaultProductChosen").attr("aria-invalid","true");
		resize = true;
	}
	if(resize){
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function hideProductsUnavailableMessage() {
	if(document.getElementById("productNotAvailError") && document.getElementById("productNotAvailError").style.display == "block") {
		document.getElementById("productNotAvailError").style.display = "none";
		$('#shoppingForSelector').attr("aria-invalid","false");
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}	
function showVehicleUpdateMessage() {
	var resize = false;
	if(document.getElementById("vehicleSearchModalUpdateVehicle") && document.getElementById("vehicleSearchModalUpdateVehicle").style.display == "none") {
		document.getElementById("vehicleSearchModalUpdateVehicle").style.display = "block";
		trDropdownErrorShow(currentForm.index);
		if(window.location != window.parent.location) window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function hideVehicleUpdateMessage() {
	if(document.getElementById("vehicleSearchModalUpdateVehicle") && document.getElementById("vehicleSearchModalUpdateVehicle").style.display == "block") {
		document.getElementById("vehicleSearchModalUpdateVehicle").style.display = "none";
		trDropdownErrorHide(currentForm.index);
	    if(window.location != window.parent.location)
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}

function hideErrorsTitle(){
	if(document.getElementById("errorTitle") && document.getElementById("errorTitle").style.display == "block") {
		document.getElementById("errorTitle").style.display = "none";
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}

function modalSizeSearchToggle(myElement) {
	if($(myElement).hasClass("icon-add")) {
		$(myElement).parent().animate({marginTop:'0px'});
		$(myElement).next('div').slideDown('slow', animationComplete);
		$(myElement).removeClass("icon-add").addClass("icon-remove");
		$('[name=width]').attr("name", "frontWidth");
		$('[name=ratio]').attr("name", "frontRatio");
		$('[name=diameter]').attr("name", "frontDiameter");
	} else if($(myElement).hasClass("icon-remove")) {
		$(myElement).next('div').slideUp('slow', animationComplete);
		$(myElement).addClass("icon-add").removeClass("icon-remove");
		$('[name=frontWidth]').attr("name", "width");
		$('[name=frontRatio]').attr("name", "ratio");
		$('[name=frontDiameter]').attr("name", "diameter");
	    if(window.location != window.parent.location)
		window.modal.resizeToContent();
		$(window).trigger("updateHeroHeight");
	}
}
function animationComplete() {
    if(window.location != window.parent.location)
	window.modal.resizeToContent();
	$(window).trigger("updateHeroHeight");
}
function clearBrandFilter() {
  if(currentForm.brand && currentForm.brand.value != "")
	currentForm.brand.value = "";
}
function determineVehicleUpdateNeeded(index) {
	if(document.getElementById("vehicleSearchModalUpdateVehicle")) {
		if(masterVehicleList[index].tires == "false" &&
		   masterVehicleList[index].wheels == "false" &&
		   masterVehicleList[index].winter == "false" &&
		   masterVehicleList[index].brakes == "false" &&
		   masterVehicleList[index].suspension == "false" &&
		   masterVehicleList[index].lights == "false" &&
		   masterVehicleList[index].wipers == "false" &&
		   masterVehicleList[index].intake == "false") {
			document.getElementById("vehicleSearchModalUpdateVehicleLink").href = "/register/modalbox_vehicle_update.jsp?vehID=" + masterVehicleList[index].vehicleID + "&autoMake=" + encodeURIComponent(masterVehicleList[index].make) + "&autoYear=" + masterVehicleList[index].year;
			showVehicleUpdateMessage();
			return true;
		} else {
			hideVehicleUpdateMessage();
			return false;
		}
	}
}
function searchZipTracking(){
	if(window.searchZipChanged){
		linkTracking({linkName: 'tr: view results', events: 'event78'});
	}
}
function searchZipFailTracking(addEvent6){
	var event = '';
	if(addEvent6) event = 'event6';
	linkTracking({linkName: s.pageName + ': vehicle selector error', prop35: s.pageName + ' - Enter a ZIP/Postal Code to view shipping information and installer options.', events: event});
}
function triggerTDGLinkTracking(modal) {
    if (modal == 'tireSize') {
        tireSizeTdgAnalytics.eVar3 = $('#vehicleYear').val();
        tireSizeTdgAnalytics.eVar4 = $('#vehicleMake').val();
        tireSizeTdgAnalytics.eVar5 = $('#vehicleModel').val();
        tireSizeTdgAnalytics.eVar6 = $('#vehicleModClar').val();
        tireSizeTdgAnalytics.eVar35 = $('#vehicleSegment').val();
        tireSizeTdgAnalytics.prop16 = $('#vehicleSegment').val();
        linkTracking(tireSizeTdgAnalytics,"eVar3,eVar4,eVar5,eVar6,eVar35,eVar44,eVar45,prop16");
    }
}
var tireSizeTdgAnalytics = {
    pageName: "tr: tire decision guide: tire size selection",
    linkName: "tr: tire decision guide: tire size selection",
    eVar44: "tire decision guide",
    eVar45: "select tire size",
    events: "event17,event72"
};
//# sourceURL=AjaxVehicleSelector.js

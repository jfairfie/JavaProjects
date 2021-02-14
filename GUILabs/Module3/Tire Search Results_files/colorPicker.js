var $colorPicker = $('.colorDropDown'),
    $cpOptions = $colorPicker.find('.colorOptions'),
    $cpOptionsContainer = $cpOptions.children('ul'),
    cpOptionsHeight = $cpOptionsContainer.height(),
    cpOptionsWidth = $cpOptionsContainer.find('li').outerWidth(),
    Keyboard = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

$cpOptions.attr('aria-expanded', 'false').attr('tabindex', '-1');

$colorPicker.on('mouseover touchstart', function() {
    var $this = $(this);
    if ($('.colorDropDown').find('.colorOptions').is(':visible')) {
        closeAllColorPicker();
    }
    openColorPicker($this);
}).on('mouseleave', function() {
    var $this = $(this);
    setFocusToMenuButton($this);
    closeColorPicker($this);
    $this.children('.cpIcon').blur();
}).on('keydown', '.cpIcon', function(e) {
    var $this = $(this),
        $colorDropDown = $this.parent('.colorDropDown'),
        keycode = e.which,
        flag = false;
    if($('.colorDropDown .colorOptions').is(':visible')){
        closeAllColorPicker();
    }
    switch (keycode) {
        case Keyboard.SPACE:
        case Keyboard.RETURN:
        case Keyboard.DOWN:
            if (!$this.hasClass('open')) {
                openColorPicker($colorDropDown);
                setFocusToFirstItem($colorDropDown);
            }
            flag = true;
            break;
        case Keyboard.ESC:
            if ($this.hasClass('open')) {
                setFocusToMenuButton($colorDropDown);
                closeColorPicker($colorDropDown);
            }
            flag = true;
            break;
        default:
            break;
    }
    if(flag) {
        e.stopPropagation();
        e.preventDefault();
    }
}).on('keydown', '.colorOptions li', function(e) {
    var $this = $(this),
        $colorDropDown = $this.closest('.colorDropDown'),
        keycode = e.which,
        $colors = $this.parent().find('a'),
        flag = false,
        character = e.key;

    function isPrintableCharacter(str) {
        return str.length === 1 && str.match(/\S/);
    }

    if(e.ctrlKey || e.altKey || e.metaKey) {
        return;
    }
    if(e.shiftKey) {
        if(isPrintableCharacter(character)) {
            setFocusByFirstChar($colors, character);
        }
    }else{
        switch (keycode) {
            case Keyboard.RETURN:
            case Keyboard.SPACE:
                $this.find('a').click();
                flag = true;
                break;
            case Keyboard.DOWN:
            case Keyboard.RIGHT:
                moveFocusToNextItem($this, $colors);
                flag = true;
                break;
            case Keyboard.HOME:
                setFocusToFirstItem($colorDropDown);
                flag = true;
                break;
            case Keyboard.END:
                setFocusToLastItem($colorDropDown);
                flag = true;
                break;
            case Keyboard.UP:
            case Keyboard.LEFT:
                moveFocusToPrevItem($this, $colors);
                flag = true;
                break;
            case Keyboard.ESC:
                setFocusToMenuButton($colorDropDown);
                closeColorPicker($colorDropDown);
                flag = true;
                break;
            case Keyboard.TAB:
                setFocusToMenuButton($colorDropDown);
                closeColorPicker($colorDropDown);
                break;
            default:
                if(isPrintableCharacter(character)) { 
                	setFocusByFirstChar($colors, character); 
                }
                break;
        }
    }
    if(flag) {
        e.stopPropagation();
        e.preventDefault();
    }
}).on('mouseover', '.colorOptions li a', function() {
    var $focused = $('.colorOptions li a:focus');

    if($focused.length > 0) {
        $focused.blur();
    }
}).on('click', '.colorOptions li a', function() {
    var $link = $(this),
        $colorDropDown = $link.closest('.colorDropDown');

        changeVehicleColor(this.href);
        setFocusToMenuButton($colorDropDown);
        updateSelected($link);
        closeColorPicker($colorDropDown);
        return false;
});

function updateSelected($link) {
    var selectedText = $link.text();
    $('.colorDropDown .colorOptions a.redNHBtn').removeClass('redNHBtn');
    $('.colorDropDown .colorOptions a').each( function() {
        if($(this).text() == selectedText) $(this).addClass('redNHBtn');
    });
}

function openColorPicker($this) {
    $this.find('.cpIcon').addClass('open');
    $this.find('.colorOptions').attr('aria-expanded', 'true');
}

function closeColorPicker($this) {
    $this.find('.cpIcon').removeClass('open');
    $this.find('.colorOptions').attr('aria-expanded', 'false');
}

function closeAllColorPicker() {
    $('.colorDropDown .cpIcon').removeClass('open');
    $('.colorDropDown .colorOptions').attr('aria-expanded', 'false');
}

function setFocusToFirstItem($this) {
    setTimeout(function () {
        $this.find('li:first a').focus();
    }, 100);
}

function setFocusToLastItem($this) {
    setTimeout(function () {
        $this.find('li:last a').focus();
    }, 100);
}

function setFocusToMenuButton($this) {
    $this.children('.cpIcon').focus();
}

function setFocusByFirstChar($colors, character) {
    var colorName, firstChar;
    for(var i = 0; i < $colors.length; i++) {
        colorName = $colors.eq(i).text();
        firstChar = colorName.charAt(0).toLowerCase();
        if(firstChar == character) {
            $colors.eq(i).focus();
            return true;
        }
    }
}

function moveFocusToNextItem($this, $colorList) {
    var oldIndex = $this.index();
    if(oldIndex === ($colorList.length - 1)) {
        $colorList.eq(0).attr('tabindex', '0').focus();
    }else{
        $colorList.eq(oldIndex+1).attr('tabindex', '0').focus();
    }
    $colorList.eq(oldIndex).attr('tabindex', '-1').blur();
}

function moveFocusToPrevItem($this, $colorList) {
    var oldIndex = $this.index();
    if($this.index() === 0) {
        $colorList.eq($colorList.length - 1).attr('tabindex', '0').focus();
    }else{
        $colorList.eq(oldIndex-1).attr('tabindex', '0').focus();
    }
    $colorList.eq(oldIndex).attr('tabindex', '-1').blur();
}

function changeVehicleColor(newURL) {
    $.ajax({
        type: "GET",
        url: newURL + "&ajax=true&json=true"
    }).success(function(response) {
        if(response) {
            if($('#navVehicleImage').length) $('#navVehicleImage').attr("src", response[0].barimage);
            if($('#vehicleImage').length) $('#vehicleImage').attr("src", response[0].smallimage);
            if($('#vehicleImageLarge').length) $('#vehicleImageLarge').attr("src", response[0].largeimage);
            var fullWidthVisualizer = $('.mainCar');
            for(var i=0; i<fullWidthVisualizer.length; i++) {
                if(fullWidthVisualizer[i].src && fullWidthVisualizer[i].src.indexOf("878") > 0) fullWidthVisualizer[i].src = response[0].mediumimage;
            }
        }
    });
}
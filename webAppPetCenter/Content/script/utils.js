function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


function AllowOnlyNumeric(event) {
    // Get the ASCII value of the key that the user entered compatible with browsers
    var key = (event.which) ? event.which : event.keyCode

    if (event.shiftKey && key != 9) {
        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;

    }

    var validVal = "0123456789";

    //allow arrow keys , delete,BACKSPACE,tab,control
    if (key == 9 || key == 37 || key == 39 || key == 46 || key == 8 || key == 17 || (key >= 96 && key <= 105) || key == 13 || key == 35 || key == 36) {
        return true;
    }
    if (event.ctrlKey && (key == 88 || key == 67 || key == 86)) {
        return true;
    }
    if (validVal.indexOf(String.fromCharCode(key)) == -1) {

        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;
    }
    return true;
}

function AllowOnlyAlphaNumeric(event) {
    // Get the ASCII value of the key that the user entered compatible with browsers
    var key = (event.which) ? event.which : event.keyCode


    var validVal = "0123456789abcdefghijklmnopqrstuvwxyz";

    //allow arrow ,number pad ,space ,tab and delete keys
    if (key == 9 || key == 32 || key == 37 || key == 39 || key == 35 || key == 36 || key == 46 || key == 8 || (key >= 96 && key <= 105)) {
        return true;
    }

    if (validVal.indexOf(String.fromCharCode(key).toLowerCase()) == -1) {

        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;
    }
    return true;
}

function AllowOnlyText(event) {
    // Get the ASCII value of the key that the user entered compatible with browsers
    var key = (event.which) ? event.which : event.keyCode


    var validVal = "abcdefghijklmnopqrstuvwxyz";

    //allow arrow ,number pad ,space ,tab and delete keys
    if (key == 9 || key == 32 || key == 37 || key == 39 || key == 35 || key == 36 || key == 46 || key == 8 || (key >= 96 && key <= 105)) {
        return true;
    }

    if (validVal.indexOf(String.fromCharCode(key).toLowerCase()) == -1) {

        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;
    }
    return true;
}

function AllowOnlyDecimal(event, obj) {
    // Get the ASCII value of the key that the user entered compatible with browsers
    var key = (event.which) ? event.which : event.keyCode

    if (obj.value.indexOf(".") == -1 && key == 190) {
        return true;
    }
    else if (obj.value.indexOf(".") == -1 && key == 110) {
        return true;
    }
    if ((event.shiftKey || key == 16 || key == 93) && key != 9) {
        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;

    }
    var validVal = "0123456789";

    //allow arrow keys , delete,BACKSPACE,tab
    if (key == 9 || key == 37 || key == 39 || key == 35 || key == 36 || key == 46 || key == 8 || (key >= 96 && key <= 105)) {
        return true;
    }

    if (validVal.indexOf(String.fromCharCode(key)) == -1) {

        // If it was not, then dispose the key and continue with entry
        event.returnValue = null;
        try {
            event.preventDefault();
        } catch (err) {
            //this is IE
        }
        return false;
    }
    return true;
}

function fnInteger(element) {
    var sText = element.value;
    var ValidChars = "0123456789";
    var IsNumber = true;
    var Char;
    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}

function toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}

function getYearsToSelect() {
    var today = new Date();
    var AnioActual = today.getFullYear();
    var AnioAnteMin = AnioActual - 4;
    var option = '';
    for (var i = AnioAnteMin; i <= AnioActual; i++) {
        option += '<option value="' + i + '">' + i + '</option>';
    }
    $('.anios').append(option);
}

function getMensaje(titulo, msn) {
    var dialogoMensaje = new BootstrapDialog({
        type: BootstrapDialog.TYPE_PRIMARY,
        size: BootstrapDialog.SIZE_NORMAL,
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false,
        title: titulo,
        message: msn,
        buttons: [{
            label: 'OK',
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });

    dialogoMensaje.realize()

    $(dialogoMensaje.getModalDialog()).css("margin-top", Math.max(30, ($(window).height() - 170) / 2));

    if ($('.modal-backdrop.fade.in').length > 0) {

        var zIndexUltimaSombra = parseInt($('.modal-backdrop.fade.in').last().css('z-index'));

        setTimeout(function () {
            $(dialogoMensaje.getModal()).css('z-index', zIndexUltimaSombra + 11);
            $(dialogoMensaje.getModal().data('bs.modal').$backdrop).css('z-index', zIndexUltimaSombra + 10).addClass('modal-stack');
        }, 0);
    }

    dialogoMensaje.open();
}
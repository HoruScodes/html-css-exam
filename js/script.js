
function displayRates(){
    var selection = document.getElementById("curr").value;
    if(selection == "UK"){
        document.getElementById("from").value = "1 CAD Dollar = 0.6 British Pound";
        document.getElementById("to").value = "One British Pound = 1.65 CAD Dollar";
        document.getElementById("from1").value = "Dollar CAD to British Pound";
        document.getElementById("to1").value = "British Pound to CAD Dollar";
    }else if (selection == "USA"){
        document.getElementById("from").value = "One CAD Dollar = 2.79 US Dollar";
        document.getElementById("to").value = "One US Dollar = 1.27 CAD Dollar";
        document.getElementById("from1").value = "Dollar CAD to US Dollar";
        document.getElementById("to1").value = "US Dollar to CAD Dollar";
    }else if (selection == "FRANCE"){
        document.getElementById("from").value = "One CAD Dollar = 0.67 Euro";
        document.getElementById("to").value = "One Euro = 1.5 CAD Dollar";
        document.getElementById("from1").value = "Dollar CAD to Eu Euros";
        document.getElementById("to1").value = "Euro Eu to CAD Dollar";
    }
}

function selectCurrency(){
    if(validationCountrySelection()){
        var radioSelection = document.querySelector('input[name="sel"]:checked').value;
    var values;
    if(radioSelection == "from"){
        var values = document.getElementById('from1').value;
    }else if (radioSelection == "to"){
        var values = document.getElementById('to1').value;
    }
    cur = values.split(' ')
    document.getElementById("from2").value = cur[0] +" "+ cur[1];
    document.getElementById("to2").value = cur[3] +" "+cur[4];
    }
    
}

function convert (){
    if(validationCountrySelection() && validationCurrencySelection() && validateNumber()){
        var radioSelection = document.querySelector('input[name="sel"]:checked').value;
        var multiplier = 0;
        if(radioSelection == "from"){
            multiplier = Number(document.getElementById('from').value.split(" ")[4]);
        }else if (radioSelection == "to"){
            multiplier = Number(document.getElementById('to').value.split(" ")[4]);
        }
        var input = Number(document.getElementById("userInput").value) ;
        document.getElementById("result").value = input * multiplier;
    }
}


function validationCountrySelection (){
    if(document.getElementById("curr").value.trim() == "NONE"){
        alert("please select country")
        return false;
    }
    return true;  
}

function validationCurrencySelection(){
    if( document.querySelector('input[name="sel"]:checked') == null){
        alert("please select Conversion")
        return false;
    }
    return true;
}

function validateNumber(){
    if(document.getElementById("userInput").value.trim() == ""){
        alert("please enter currency amount to convert!")
        return false;
    }
    return true;
}
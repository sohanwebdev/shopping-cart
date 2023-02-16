function updateCaseNumber(isIncrease){
    let caseNumberField = document.getElementById("case-number-field");
    let caseNumberFieldString = caseNumberField.value;
    let previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;

    if(isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){

    let caseTotalPrice = newCaseNumber * 59;
    let caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
}

function totalAmountPrice(totalAmountId){
    let totalAmount = document.getElementById(totalAmountId);
    let totalAmountString = totalAmount.innerText;
    let totalAmountPrice = parseInt(totalAmountString);
    return totalAmountPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
    let newCaseNumber = updateCaseNumber(true);
    
    updateCaseTotalPrice(newCaseNumber);

    let phoneAmount = totalAmountPrice("phone-total");
    let caseAmount = totalAmountPrice("case-total");
    
    //totalAmounts
    let totalAmounts = phoneAmount + caseAmount;
    
    //subtotal
    let amount = document.getElementById("sub-total");
    amount.innerText = totalAmounts;

    //taxAmounts
    let taxAmount = (totalAmounts * 0.1).toFixed(2);
    let taxAmounts = parseInt(taxAmount);


    //taxtotal
    let tax = document.getElementById("tax-total");
    tax.innerText = taxAmounts;

    //total
    let total = totalAmounts + taxAmounts;

    //totalAmount
    let totalAmount = document.getElementById("total");
    totalAmount.innerText = total;

    

});

document.getElementById("btn-case-minus").addEventListener("click", function () {
    let newCaseNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber);

    let phoneAmount = totalAmountPrice("phone-total");
    let caseAmount = totalAmountPrice("case-total");
    
    //totalAmounts
    let totalAmounts = phoneAmount + caseAmount;
    
    //subtotal
    let amount = document.getElementById("sub-total");
    amount.innerText = totalAmounts;

    //taxAmounts
    let taxAmount = (totalAmounts * 0.1).toFixed(2);
    let taxAmounts = parseInt(taxAmount);


    //taxtotal
    let tax = document.getElementById("tax-total");
    tax.innerText = taxAmounts;

    //total
    let total = totalAmounts + taxAmounts;

    //totalAmount
    let totalAmount = document.getElementById("total");
    totalAmount.innerText = total;

});
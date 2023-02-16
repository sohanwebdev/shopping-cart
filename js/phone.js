function updatePhoneNumber(isIncrease){

    let phoneNumberField = document.getElementById("phone-number-field");
    let phoneNumberFieldString = phoneNumberField.value;
    let previousPhoneNumber = parseInt(phoneNumberFieldString);
    
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}

function updatePhoneTotalPrice(newPhoneNumber){
    let phoneTotalPrice = newPhoneNumber * 1219;
    let phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;
}

function totalAmountPrice(totalAmountId){
    let totalAmount = document.getElementById(totalAmountId);
    let totalAmountString = totalAmount.innerText;
    let totalAmountPrice = parseInt(totalAmountString);
    return totalAmountPrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function () {
    let newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

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

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    let newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

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
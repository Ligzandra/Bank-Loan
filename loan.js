
let  point = 0,
    submit = document.getElementById("submit");
console.log('hello')


    

function showHideDiv(){
    let yes_receipt = document.getElementById("yes_receipt");
    let paid = document.getElementById("paid");
    
    paid.style.display = yes_receipt.checked ? "block"
    : "none";

}


  
function validateLoan(){
      
    let annual = document.getElementById("annual"),
       loanAmount = document.getElementById("amount"),
       current = document.getElementById("current"),
       inDebt = document.querySelector('input[name="receipt"]:checked'),
       PaidBack = document.querySelector('input[name="creditHistory"]:checked'),
       deposit = document.querySelector('input[name="deposit"]:checked'),
       repay = document.querySelector('input[name="repay"]:checked'),
       accountType = document.querySelector('input[name="accountType"]:checked' ),
       message = "",
       errormessage = "This field is required";
   let  possibleLoanAmount = 0.45 * parseInt(annual.value);

   

    if(document.getElementById("first").value == ""){
        document.getElementById("firstmessage").innerHTML = errormessage
    }else{
        console.log(first.value)
    }

    if(document.getElementById("last").value == ""){
        document.getElementById("lastmessage").innerHTML = errormessage
    }else{
        console.log(last.value)
    }
    if(document.getElementById("mail").value == ""){
        document.getElementById("mailmessage").innerHTML = errormessage
    }else{
        console.log(mail.value)
    }
    if(document.getElementById("number").value == ""){
        document.getElementById("numbermessage").innerHTML = errormessage
    }else{
        console.log(number.value)
    }
    if(document.getElementById("annual").value == ""){
        document.getElementById("annualmessage").innerHTML = errormessage
    }else{
        console.log(annual.value)
    }
    if(document.getElementById("amount").value == ""){
         document.getElementById("amountmessage").innerHTML = errormessage
    }else{
        console.log(amount.value)
    }
    if(document.getElementById("current").value == ""){
        document.getElementById("currentmessage").innerHTML = errormessage
    }else{
        console.log(current.value)
    }
    if(document.querySelector('input[name="receipt"]:checked') == null){
        document.getElementById("receiptmessage").innerHTML = errormessage
    }else{
        console.log("")
    }

    if(document.querySelector('input[name="creditHistory"]:checked') == null){
        document.getElementById("creditHistorymessage").innerHTML = errormessage
    }else{
     console.log("")
    }
    if(document.querySelector('input[name="deposit"]:checked') == null){
    document.getElementById("depositmessage").innerHTML = errormessage
    }else{
      console.log(deposit.value)
    }
    if(document.querySelector('input[name="repay"]:checked') == null){
    document.getElementById("repaymessage").innerHTML = errormessage
    }else{
    console.log(repay.value)
    }
    if(document.querySelector('input[name="accountType"]:checked') == null){
    document.getElementById("accountTypemessage").innerHTML = errormessage
    }else{
    console.log(accountType.value)
    }




    // access.value = possibleLoanAmount;

    if(parseFloat(current.value) <  parseFloat(loanAmount.value)){
        point -= 10;
        //point= point - 10;
    }else{
        point +=10;
    }

    //credit history
    if(inDebt.value == "no"){
        point +=10;
    }else
        
        if(PaidBack.value == "yes"){
            point +=10;
        }


    //deposit history
    if(deposit.value == "no"){
        point -=5;
    }else {
        point +=5;
    }

    //payback history

    if(repay.value == "no"){
        point -=5;
    }else {
        point +=5;
    }

    //accountType history

    if (accountType.value == "savings"){
        point +=5;
    }else if(accountType.value == "current"){
        point +=10;
    }
        console.log(point)
    if(point < 30){
       
        message= `We are sorry dear ${first.value}, you are not qualified for this loan` 
    }else if(parseFloat(loanAmount.value)<= possibleLoanAmount)
        {
        message = ` Congratulations dear ${first.value} , you are qualified for this loan.
        Your application is being processed, Kindly Come along with your valid means of 
        identification to the bank to complete this process`
    }
    else{
        message = `Dear ${first.value} , based on our bank's loan policy,
          you are only allowed to make a request of ${possibleLoanAmount} which is 45% of your annual income`
    }
    document.getElementById("feed").innerHTML = message;
  
}
submit.onclick = function(){
       validateLoan();
    }


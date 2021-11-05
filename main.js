window.addEventListener('load', function () {
    amount = document.getElementById("billamount");
    resetbtn = document.getElementById("reset");
    custome = document.getElementById("custome");
    pnumber = document.getElementById("pnumber");
    billerrmsg = document.getElementsByTagName('span')[0];
    errmsg = document.getElementsByTagName('span')[1];
    amountresult = document.getElementById("amountResult");
    totalresult = document.getElementById("totalResult");
    percent = document.getElementsByClassName('per');


    for (var i = 0; i < percent.length; i++) {
        percent[i].addEventListener('click', calctotal);
    }
    custome.addEventListener('input', calcCustome);

    resetbtn.addEventListener("click", function () {

        pnumber.style.border = "none";
        errmsg.style.display = "none";
        amount.style.border = "none";
        billerrmsg.style.display = "none";
        amount.value = "";
        pnumber.value = "";
        custome.value = "";

    }); //end of click

}); //end of olad

function calctotal(data) {
    if (pnumber.value == 0) {
        pnumber.style.border = "1px solid red";
        errmsg.style.display = "inline";
    } else {
        tip = ((amount.value * (`${(data.target.value)/100}`)) / pnumber.value).toFixed(2);
        amountresult.innerText = `$${tip}`;
        total = ((amount.value / pnumber.value) + parseInt(tip)).toFixed(2);
        totalresult.innerText = `$${total}`;
        pnumber.style.border = "none";
        errmsg.style.display = "none";
        custome.value="";
    }
}

function calcCustome(data){
    if (pnumber.value == 0) {
        pnumber.style.border = "1px solid red";
        errmsg.style.display = "inline";
    } else {
        tip = ((amount.value * (`${(data.target.value)/100}`)) / pnumber.value).toFixed(2);
        amountresult.innerText = `$${tip}`;
        total = ((amount.value / pnumber.value) + parseInt(tip)).toFixed(2);
        totalresult.innerText = `$${total}`;
        pnumber.style.border = "none";
        errmsg.style.display = "none";
    }
}
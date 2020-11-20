const form = document.querySelector('.input-form');
const inputPrice = document.querySelector('.amt-input');
const inputPeople = document.querySelector('.people-input');
const inputTip = document.querySelector('.tip-input');
let ui = {};

form.addEventListener('submit', function(e){
    e.preventDefault();
    ui = new Ui();
    const logic = new Logic();
    logic.render(logic.calc().totalTip, logic.calc().totalAmt, logic.calc().perPerson)
})


class Ui {
    constructor(){
        this.inputPrice = inputPrice.value;
        this.inputPeople = inputPeople.value;
        this.inputTip = inputTip.value;
    }

}


class Logic{
     calc(){
        let totalAmt = ui.inputPrice * ui.inputTip;
        let perPerson = totalAmt / ui.inputPeople;
        let totalTip = totalAmt - ui.inputPrice;

        return {totalAmt, perPerson, totalTip}
    }


    /* render function */
    render(totalTip, totalAmt, perPerson){
        console.log('test');
        const message = document.querySelector('.message');
        inputPrice.value = "";
        inputPeople.value = "";
        inputTip.value = "00";

        message.innerHTML = `
            <p>The total tip is ${totalTip}.</p>
            <p>The total amount is ${totalAmt}.</p>
            <p>Each person pays ${perPerson}.</p>
        ` 
        console.log('test');
        message.style.visibility = 'visible';
    }

}









/* function logValue(e){
    e.preventDefault();

    const message = document.querySelector('.message');

    /* let data = {
        price : parseFloat(inputPrice.value),
        people: parseFloat(inputPeople.value),
        tipAmount: parseFloat(inputTip.value),
    } */

   /*  let totalAmt = data.price * data.tipAmount;
    let perPerson = totalAmt/ data.people;
    let totalTip = totalAmt - data.price; 
   
    
    inputPrice.value = "";
    inputPeople.value = "";
    inputTip.value = "00";

    message.innerHTML = `
        <p>The total tip is ${totalTip}.</p>
        <p>The total amount is ${totalAmt}.</p>
        <p>Each person pays ${perPerson}.</p>
    ` 
    
    message.style.visibility = 'visible';
} */



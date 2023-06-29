
// const calculate = () => {
//     let amount = document.getElementById('bill-amount').value;
//     let perc = document.getElementById('tip-perc').value;
//     let tip = amount * (perc / 100);
//     let total = Number(amount) + tip;

//     document.getElementById('tip-amount').value = tip;
//     document.getElementById('total-bill').value = total;
    
// } 

function calculate() {
    const amount = document.getElementById('bill-amount').value;
    const perc = document.getElementById('tip-perc').value;
    const tip = amount * (perc / 100);
    const total = Number(amount) + tip;

    document.getElementById('tip-amount').value = tip;
    document.getElementById('total-bill').value = total;
    
} 
function moneyBox(coins){
    let sabeCoins = 0;
    sabeCoins += coins;
    console.log(`MoneyBox: ${sabeCoins}`);
}

moneyBox(5);
moneyBox(5);


function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
   return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(25);

const moneyboxAna = moneyBox();
moneyboxAna(5);
moneyboxAna(10);
moneyboxAna(25);

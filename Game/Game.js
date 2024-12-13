//initialization of variables
let uncoveredCards = 0;
let card1 =null;
let card2 = null;
let firstResult = null;
let secondresult = null;
let movements = 0;
let successes =0;

//document HTML
let showMovements = document.getElementById('movimientos')
let showsuccesses = document.getElementById('aciertos')

//random numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
numbers = numbers.sort(()=>{return Math.random()-0.5});

console.log(numbers);


//principal function
function uncover(id) {
    uncoveredCards++;
    console.log(uncoveredCards)

    if (uncoveredCards == 1 ) {
        //show first number
        card1 = document.getElementById(id);
        firstResult = numbers[id]
        card1.innerHTML = firstResult;

        //desable first button
        card1.disabled = true;
    }else if(uncoveredCards ==2 ){
        //show second number
        card2 =document.getElementById(id);
        secondresult = numbers[id];
        card2.innerHTML = secondresult;
        //desable second button
        card2.disabled = true;
        //increase movements
        movements++;
        showMovements.innerHTML = `Movimientos : ${movements}`;

        if (firstResult == secondresult){
            uncoveredCards = 0;

            //increase successes
            successes++;
            showsuccesses.innerHTML = `Aciertos: ${successes}`

            if (successes == 15) {
                
                showsuccesses.innerHTML = `Aciertos: ${successes} 🥇⚽`
                showMovements.innerHTML = `Movimientos: ${movements}🧟‍♂️`
                
            }
        }else {
            //show values ​​momentarily
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                uncoveredCards = 0;
            },1000);
        }


    }
}

var beeramid = function (bonus, price){

        let numOfBeers = bonus/price;
        console.log("bonus is: " + bonus);
        console.log("price is: " + price);
        console.log("numOfBeers is: " + numOfBeers);

        let counter = 0;


        for(i=1 ;  i < numOfBeers + 2 ; i++){
                console.log("level is: " + i);
                counter += i * i;
                if ( counter > numOfBeers) {
                        return i - 1;
                }
        }

        return 9999;
}



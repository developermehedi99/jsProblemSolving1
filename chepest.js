const prices = [21, 42, 24,78, 98,78,88,12,23, 34];

function chepestPrice(dam){
    let min = prices[0];
    for(const price of prices){
        if(price < min){
            min=price;
        }
    }
    return min;
}

const miniMamPrice = chepestPrice(prices);
console.log(miniMamPrice);
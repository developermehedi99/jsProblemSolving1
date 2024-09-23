
function noDuplicates(num){
    const fresh = [];
    for(const number of numbers){
        if(fresh.includes(number) === false){
            fresh.push(number);
        }
    }
    return fresh;
}
const numbers=[2, 43, 32,9,2,11,80,77,11,99,103,80, 3];
const unique = noDuplicates(numbers);
console.log(unique)
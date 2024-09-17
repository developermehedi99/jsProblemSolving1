const computer= {
    motherboard:'corai ',
    ram:8,
    brand:'hp',
    display:22,
    monitor:'lanvo'
};
// const values=  Object.values(computer);
// console.log(values)
// console.log(Object.keys(computer))

const patro= {
    name:'mehedi rana',
    skill:'developer',
    salary:33,
    isMerriage:false
}

for(const props in patro){
    console.log(props)
}
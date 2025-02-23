function groupBy(arr,property){
    return arr.reduce((result,currentValue)=>
    {
        const key=currentValue[property];
        if (!result[key]) {
            result[key]=[];
            
        }
        result[key].push(currentValue);
        return result;
    },{});
}


const data=[
    {id:1,category:'fruit'},
    {id:2,category:'vegetable'},
    {id:3,category:'fruit'}
];
const groupedByCategory=groupBy(data,'category');
console.log(groupedByCategory)
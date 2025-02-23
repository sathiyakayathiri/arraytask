# arraytask
1.write a function that takes an array and returns a new array with the elements in reverse order.
Answer:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();

console.log(numbers); 
OUTPUT:[5,4,3,2,1]

2.write a function that takes a nested array and flattens it to a single level array.
Answer:
let nestedarray=[[1,[2,3]],[4,[5]]];
let flattenedArray=nestedarray.flat(2);
console.log(flattenedArray);
OUTPUT:[1,2,3,4,5]

3.write a function that checks if an array contains duplicate.
Answer:
function containsDuplicate(arr){
    const seen=new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            
            return true;}
            seen.add(arr[i]);
        }
        
        return false;
    }
    const array1=[1,2,3,4,5,1]
    console.log(containsDuplicate(array1))
    const array2=[1,2,3,4,5]
    console.log(containsDuplicate(array2))
    OUTPUT:true
           false

4.write a function that merges two objects into one.
Answer:
const obj1={a:1,b:2};
const obj2={b:2,c:4};
const mergedObj=Object.assign({},obj1,obj2);
console.log(mergedObj);
OUTPUT:{a:1,b:2,c:3}


5.write the function that finds the maximum number in an array.
Answer:
const arr=[1,3,2,8,5];
const max=Math.max(...arr);
console.log(max);
OUTPUT:8

6.write a function that groups an array of objects by a specific property.
Answer:
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
OUTPUT:
{
fruit:[{id:1,catyegory:'fruit'},{id:3,category:'fruit'}],
vegetable:[{id:2,category:'vegetable'}]
}


7.write a function that finds the intersection of an array.
Answer:
function findIntersection(arr1,arr2){
    return arr1.filter(element=>arr2.includes(element));
}
const array1=[1,2,3];
const array2=[2,3,4];
const intersection=findIntersection(array1,array2);
console.log(intersection);
OUTPUT:[2,3]


8.write a function that calculate the sum of all numbers in an array.
Answer:
const array=[1,2,3,4,5];
const sum=array.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);
OUTPUT:15

9.write a function that remove all the falsy values from an array.
Answer:
const array=[0,1,false,2,"",3];
const filteredArray=array.filter(Boolean);
console.log(filteredArray);
OUTPUT:[1,2,3]


10.write a function that calculate the average of all numbers in an array.
Answer:
const array=[1,2,3,4,5];const sum=array.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
const average=sum/array.length;
console.log(average);
OUTPUT:3



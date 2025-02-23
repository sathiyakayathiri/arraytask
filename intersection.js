function findIntersection(arr1,arr2){
    return arr1.filter(element=>arr2.includes(element));
}
const array1=[1,2,3];
const array2=[2,3,4];
const intersection=findIntersection(array1,array2);
console.log(intersection);
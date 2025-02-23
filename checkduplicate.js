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

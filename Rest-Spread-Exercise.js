//ES5 version
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}
//ES2015 version
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);
//findMin
const findMin = (...args) => Math.min(...args);
//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v*2)];
//Slice and Dice
const removeRandom = items => {
    let index = Math.floor(Math.random()*items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)]
}
const extend = (array1, array2) => {
    return [...array1, ...array2]
}
const addKeyValue = (obj, key, val) => {
    let newObj = {...obj,[key]: val}
    newObj[key] + val;
    return newObj;
}
const removeKey = (obj, key) => {
    let newObj = {...obj,[key]: val}
    delete newObj[key];
    return newObj;
}
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
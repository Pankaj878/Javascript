let demo = 'abcd'
// console.log(demo.charAt(3)) // return value at index 3
// console.log(demo.charAt(4)) // return nothing
// console.log(demo.charCodeAt(3))// return value at 3 index
// console.log(demo.charCodeAt(4))//return NaN
// console.log(demo.codePointAt(2)) //return ascii value
// console.log(demo.codePointAt(5))// return undefined
// console.log(demo.concat('abf','skf'))
// console.log(demo.endsWith('d')) //true
// console.log(demo.endsWith('d',3))// true kyoki d character 3 index pe khatam ho raha
// console.log(demo.endsWith('d',4))// false kyoki d character 4 index pe khatam nahi ho raha
// console.log(demo.endsWith('c')) //false
// console.log(demo.includes('b'))  //it will start search after 0 index
// console.log(demo.includes('b',2))  //it will start search after 2 index
// console.log(demo.indexOf('d'));  //return index
// console.log(demo.lastIndexOf('c'))
// console.log(demo.length)
// console.log(demo.localeCompare('abcd'))      not working properly
// console.log(demo.localeCompare('aBCd','en',{sensitivity: 'base'}))
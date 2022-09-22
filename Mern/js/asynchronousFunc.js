test_array = ["apple", "orange", "banana", "mango"]

const show = () => {
    setTimeout(() => {
        test_array.map(item => document.write(`<li>${item}</li>`))
    }, 3000)
}
// callback function use
// const add = (callback) => {
//     setTimeout(()=>{
//         test_array.push("GRAPES")    
//         callback()    
//     },4000)
// }

// promise function
const add = () => {
    let error = true
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            test_array.push("GRAPES")
            if(!error){
                resolve()
            }
            else{
                reject()
            }
        }, 4000)
    })
}

// callback function - pass the second function inside the first function
/* promise  -> 
    function()
    .then(function if success)
    .catch(function if failed)
*/
/* async await */
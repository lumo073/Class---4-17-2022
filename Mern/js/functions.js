/*
function function_name(parameters){
    statements
    return
}

function_name(arguments)

1. without parameters, without return


function add(){
    let a = 5
    let b = 6
    document.write("Sum = "+(a+b))
}
// 2. with parameters, without return
function add2(m,n){
    document.write("Sum = "+ (m+n))
}
// 3. without parameters, with return 
function add3(){
    let a = 5
    let b = 6
    return a+b
}
// 4. with parameters, with return 
function add4(x,y){
    return x+y
}
*/
/* arrow functions
    const function_name = (parameters) => {
        statements
        return
    }
*/
// 1. without parameter, without return
const add = () => {
    let a = 5
    let b = 6
    document.write("Sum = " + (a+b))
}
// 2. with parameter, without return
const add2 = (a, b) => {
    document.write("Sum = "+ (a+b))
} 
// 3. without parameter, with return 
const add3 = () => {
    let a = 5
    let b = 6
    return a+b
}
// 4. with parameter, with return
const add4 = (m,n) => {
    return m+n
}

const square = () => {
    let x = document.getElementById("num").value
    document.getElementById("result").innerHTML = x*x
}

const displaydate = () => {
    let today = new Date()
    document.getElementById("result").innerHTML = today

}

const changecolor = () => {
    document.getElementById("result").style.color = "red"
}
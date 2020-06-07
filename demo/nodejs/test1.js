// const path = require('path')
// console.log(path.filename)
// console.log(path.dirname)
// console.log(__filename)
// console.log(__dirname)

const os = require('os')

// console.log(os.networkInterfaces())

// console.log(Function)

Function.prototype.myApply = function(){
    context = arguments[0] || global
    context.fn = this
    console.log(arguments[1])
    let res = context.fn(...arguments[1])
    delete context.fn
    return res
}

console.log(Math.max.myApply(null,[1,3,2]))

// console.log(global)
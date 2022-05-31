function Chooser(arr){
    let randidx = Math.floor(Math.random()* arr.length)
    return arr[randidx]

}

export {Chooser};
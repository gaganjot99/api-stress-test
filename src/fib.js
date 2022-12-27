function fib(number){ 
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
}

function loops(){
    let im = 0
    for(let i = 0; i<10000; i++){
        for(let j=0; j<10000; j++){
            im = j;
        }
    }
    return Math.random();
}

module.exports = {fib, loops}
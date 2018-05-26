var x = 2;
var myObject = {};

function add(a,b) {
    return a + b;
}

myObject = { 
    value: 0,
    increment: function (nb) {
        this.value += typeof nb === 'number' ? nb : 1;
    },
    double: function () {
        console.log(this.value)
        //le probleme est que this fait appel au global scope il faut donc faire un workaround
        var that = this;
        var helper = function () { 
            that.value = that.value + that.value
        }
        helper()
    }
}

myObject.increment()
console.log(myObject.value)
myObject.double()
console.log(myObject.value)


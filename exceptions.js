const add = (a, b) => {
    function testArguments() {
        var isValid = true

        if (typeof a !== 'number' || typeof b !== 'number') {
            isValid = false
        }

        return isValid
    }
    if (!testArguments()) {
        throw { 
            name: 'Wrong type',
            message: 'Add needs numbers'
        }
    }

    return a + b

}

var sum = function (a, b) {
    try {
        return add(a, b)
    } catch (err) {
        console.error('err', err)
    }
}

console.log(sum(1,'test'))

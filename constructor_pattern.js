let Quo = function (string) { 
    this.status = string;
}

// on ajoute un getter a Quo 
Quo.prototype.get_status = function() { 
    return this.status
}


var me = new Quo('happy');
console.log(me.get_status())


function add(a, b) {
    return a + b;
}

// APPLY
// apply prend 2 parametre, 
// le 1er est le contexte de this
// le second est un array de parametres 
const array = [1,2]
const sum = add.apply(null, array)
console.log(sum)

// Comme ca je peux utiliser Quo.get_status avec un autre objet qui n'herite pas de Quo
const you = { 
    status: 'jumping around',
}

const yourStatus = Quo.prototype.get_status.apply(you)

console.log(yourStatus)

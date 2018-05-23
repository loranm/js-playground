const convertUnits = (toUnit, factor, offset = 0) =>
    input => {
        return ((offset + input) * factor)
            .toFixed(2)
            .concat(toUnit);
    } //renvoie une methode qui prendra un input en parametre

const milesToKm = convertUnits('km', 1.60936) // milesToKm est une methode prend un input en parametre et qui remvoie un string 
const poundToKg = convertUnits('kg', 0.45460);
const farenheitToCelsius = convertUnits('C', 0.5556, -32);

console.log(milesToKm(1));
console.log(poundToKg(23));
console.log(farenheitToCelsius(75));

const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')

const temperatures = [celsius, fahrenheit, kelvin]

const cToF = (val) => {
    return (val * 1.8) + 32
}

const fToC = (val) => {
    return (val - 32) / 1.8
}

const cToK = (val) => {
    return val + 273
}

const kToC = (val) => val - 273



const calcTemp = (type, val) => {
    let fah = 0;
    let cel = 0;
    let kel = 0;
    
    switch(type) {
        case 'celsius':
             fah = (cToF(val));
             kel = (cToK(val))
             cel = val;
            break;
        case 'fahrenheit':
            fah = val;
            cel = (cToF(val))
            kel = (cToK(cel))
            break;
        case 'kelvin':
            kel = val;
            cel = (cToK(val));
            fah = (cToF(cel))
            break;
    }

    celsius.value = cel;
    fahrenheit.value = fah;
    kelvin.value = kel;    
}

document.querySelector('.container').addEventListener('input',(e) => {
    const el = e.target;
    const val = parseInt(el.value);
    const type = el.name;

    calcTemp(type,val)
})
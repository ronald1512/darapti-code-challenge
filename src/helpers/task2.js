const isPalin = (str, st, end) => {
    while (st < end) {
        if (str[st] !== str[end]) {
            return false;
        }
        st++;
        end--;
    }
    return true;
}

const findMinInsert = (str, n) => {
    for (let i = n - 1; i >= 0; i--) {
        if (isPalin(str, 0, i)) {
            return (n - i - 1);
        }
    }
}

export const getPalin = (str) => {
    const res = findMinInsert(str, str.length);
    // console.log(res);
    if (res === undefined) {
        return "La palabra debe tener al menos 1 caracter"
    } else if (res === 0) {
        return "Ya es un palíndromo";
    } else {
        //agregamos los ultimos 'res' caracteres al inicio de la palabra
        let output = "";
        let counter = 0;
        for (let index = str.length - 1; index >= 0; index--) {
            if (counter < res) {
                const element = str[index];
                output += element;
                counter++;
            } else {
                break;
            }
        }
        return output+str;
    }
}
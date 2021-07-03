const obtenerElPequenioMasCercano = (n) => {
    if (n === 0 || n === 1){
        return n;
    }
    let f1 = 0, f2 = 1, f3 = 1;
    while (f3 <= n) {
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
    }
    return f2;
}


export const getZeckendorfTheoremResult = (n) => {
    if (n === 0) {
        return [];
    } else if (n < 0) {
        return null;
    }
    let out = [];
    while (n > 0) {
        const f = obtenerElPequenioMasCercano(n);
        out=[...out,f];
        n = n - f;
    }
    return out;
}
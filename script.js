const umfang = document.getElementById('umfang');
const durchmesser = document.getElementById('durchmesser')
const radius = document.getElementById('radius')
const Round = document.getElementById('runden')
const fl = document.getElementById('fl')
const umfangdiv = document.getElementById('umfangdiv')
const durchmesserdiv = document.getElementById('durchmesserdiv')
const radiusdiv = document.getElementById('radiusdiv')
const fldiv = document.getElementById('fldiv')

umfang.addEventListener("keyup", (e) => {
    durchmesser.value = (e.target.value / Math.PI).toFixed(Round.value > 100 ? 100 : Round.value > 100 ? 100 : Round.value > 100 ? 100 : Round.value);
    radius.value = (durchmesser.value / 2).toFixed(Round.value > 100 ? 100 : Round.value);
    fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
    durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
    radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
    fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`
})
durchmesser.addEventListener("keyup", (e) => {
    umfang.value = (e.target.value * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    radius.value = (durchmesser.value / 2).toFixed(Round.value > 100 ? 100 : Round.value);
    fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
    durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
    radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
    fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`

})
radius.addEventListener("keyup", (e) => {
    umfang.value = (e.target.value * 2 * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    durchmesser.value = (e.target.value * 2).toFixed(Round.value > 100 ? 100 : Round.value);
    fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
    durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
    radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
    fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`

})
fl.addEventListener("keyup", (e) => {
    durchmesser.value = (radius.value * 2).toFixed(Round.value > 100 ? 100 : Round.value)
    radius.value = Math.sqrt(e.target.value ^ 2 / Math.PI).toFixed(Round.value > 100 ? 100 : Round.value)
    umfang.value = (e.target.value * 2 * Math.PI).toFixed(Round.value > 100 ? 100 : Round.value);
    umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
    durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
    radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
    fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`

})
Round.addEventListener("keyup", (e) => {
    if (umfang.value > 0) {
        durchmesser.value = (umfang.value / Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        umfang.value = (durchmesser.value * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        radius.value = (durchmesser.value / 2).toFixed(e.target.value > 100 ? 100 : e.target.value);
        fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value)
        umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
        durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
        radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
        fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`
    }
    else if (durchmesser.value > 0) {
        umfang.value = (durchmesser.value * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        durchmesser.value = (durchmesser.value / Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        radius.value = (durchmesser.value / 2).toFixed(e.target.value > 100 ? 100 : e.target.value);
        fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value)
        umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
        durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
        radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
        fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`
    }
    else if (radius.value > 0) {
        umfang.value = (radius.value * 2 * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        durchmesser.value = (radius.value * 2).toFixed(e.target.value > 100 ? 100 : e.target.value);
        radius.value = (durchmesser.value / 2).toFixed(e.target.value > 100 ? 100 : e.target.value);
        fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value)
        umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
        durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
        radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
        fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`
    }
    else if (fl.value > 0) {
        radius.value = Math.sqrt(fl.value / Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value)
        durchmesser.value = ((Math.sqrt(e.target.value > 100 ? 100 : e.target.value / Math.PI)) * 2).toFixed(e.target.value > 100 ? 100 : e.target.value)
        umfang.value = (durchmesser.value * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value);
        fl.value = (Math.pow(radius.value, 2) * Math.PI).toFixed(e.target.value > 100 ? 100 : e.target.value)
        umfangdiv.innerHTML = `
    <br>
    U = π * d
    <br>
    U = π * ${durchmesser.value}
    <br>
    U = ${umfang.value}
    <br>`
        durchmesserdiv.innerHTML = `
    <br>
    Durchmesser Berechnung
    <br>
    d = U / π
    <br>
    d = ${umfang.value} / π
    <br>
    d = ${durchmesser.value}
    <br>
    `
        radiusdiv.innerHTML = `
    <br>
    Radius Berechnung
    <br>
    r = (U / π) / 2
    <br>
    r = (${umfang.value} / π) / 2
    <br>
    r = ${radius.value}
    <br>`
        fldiv.innerHTML = `
    <br>
    Fläscheninhlat Berechnung
    <br>
    A = π * r²
    <br>
    A = π * ${radius.value}²
    <br>
    A = ${fl.value}
    <br>`
    }
})

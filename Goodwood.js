function wpisz(znak) {
    document.getElementById("ekran").value += znak;
}

function oblicz() {
    let ekran = document.getElementById("ekran");
    try {
        let tekst = ekran.value;
        if (!/^[0-9+\-*/. ]+$/.test(tekst)) {
            throw new Error("Bledne dzialanie");
        }
        let wynik = Function("return (" + tekst + ")")();
        if (!Number.isFinite(wynik)) {
            ekran.value = "Blad";
        } else {
            ekran.value = wynik;
        }
    } catch {
        ekran.value = "Blad";
    }
}

function wyczysc() {
    document.getElementById("ekran").value = "";
}

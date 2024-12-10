function oppdaterKlokke() {
    const no = new Date();

    const timar = no.getHours();
    const minutt = String(no.getMinutes()).padStart(2, "0");
    const sekund = String(no.getSeconds()).padStart(2, "0");

    const dagar = ["Sundag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"];
    const månader = ["januar", "februar", "mars", "april", "mai", "juni", 
                     "juli", "august", "september", "oktober", "november", "desember"];

    const dag = dagar[no.getDay()];
    const dato = no.getDate();
    const månad = månader[no.getMonth()];
    const år = no.getFullYear();

    const tid = `${timar}:${minutt}:${sekund}`;
    const datoTekst = `${dag}, ${dato}. ${månad} ${år}`;

    document.getElementById("tid").innerText = tid;
    document.getElementById("dato").innerText = datoTekst;

    const kropp = document.body;
    const ikon = document.getElementById("ikon");

    if (timar >= 6 && timar < 18) {
        kropp.className = "dag";
        ikon.innerHTML = "☀️";  // Sol-ikon for dag
    } else {
        kropp.className = "natt";
        ikon.innerHTML = "🌙";  // Måne-ikon for natt
    }

    // Spel av lyd ved midnatt eller kl. 12 på dagen
    if ((timar === 0 && minutt === "00" && sekund === "00") || 
        (timar === 12 && minutt === "00" && sekund === "00")) {
        document.getElementById("lyd").play();
    }
}

setInterval(oppdaterKlokke, 1000);

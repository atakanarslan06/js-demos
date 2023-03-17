let sunucudanDonen;


var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen = JSON.parse(baglanti.responseText);
       soruGetir();
    }

    return sunucudanDonen;
};
baglanti.open("GET", "data.json", true);
baglanti.send();

const sonucAlani = document.getElementsByClassName("soruAlani")[0];
const soru = document.getElementById("soru");

const secenekler = document.getElementsByName("secenek");
const secenekA = document.getElementById("aciklamaA");
const secenekB = document.getElementById("aciklamaB");
const secenekC = document.getElementById("aciklamaC");
const secenekD = document.getElementById("aciklamaD");

const gonderButonu = document.getElementById("gonder");

let puan = 0;
let sira = 0;

function soruGetir()
{
    secimiTemizle();
    console.log(sunucudanDonen);

    let siradakiSoru = sunucudanDonen.sorular[sira];

    soru.innerHTML = siradakiSoru.soru;
    aciklamaA.innerText = siradakiSoru.secenekA;
    aciklamaB.innerText = siradakiSoru.secenekB;
    aciklamaC.innerText = siradakiSoru.secenekC;
    aciklamaD.innerText = siradakiSoru.secenekD;
}
function secimiTemizle()
{
    secenekler.forEach(secenek => secenek.checked = false);
}

function secimiAl()
{
    let secim;
    secenekler.forEach(secenek => {
        if(secenek.checked==true)
        {
            secim = secenek.id;
        }
    })
    return secim;
}

gonderButonu.addEventListener("click", () => {
    const secilen = secimiAl();
    console.log(secilen);

    if(secilen)
    {
        if(secilen === sunucudanDonen.sorular[sira].cevap){
            puan++;
        }
    }
    sira++;
    if(sira < sunucudanDonen.sorular.length)
    {
        soruGetir();
    }
    else{
        sonucAlani.innerHTML = `
        <h2>Mevcut Sorular İçerisinden ${puan}/${sunucudanDonen.sorular.length} Oranında Başarı Sağladınız.</h2>
        `
        gonderButonu.setAttribute("onclick","location.reload()");
        gonderButonu.innerHTML("Yeniden Başla");
    }
})
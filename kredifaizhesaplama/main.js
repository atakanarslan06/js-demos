function krediHesapla()
{
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;

    cekilecekTutar = document.getElementById("txtKrediTutari").value;
    var liste = document.getElementById("listeVade");
    vadeSayisi = liste.options[liste.selectedIndex].value;

    odenecekToplamTutar=cekilecekTutar+cekilecekTutar*10/100;
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML="Geri ödeme toplamı: "+odenecekToplamTutar+"<br>"+
    "Aylık taksit tutarınız: "+aylikTaksit;
}
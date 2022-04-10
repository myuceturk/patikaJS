let username = prompt("Lütfen Adınızı Giriniz"); // Kullanıcıdan isim bilgisi istendi
let nameArea = document.getElementById("myName"); // İstenilen isim bilgisinin yazdırılacağı alan seçildi.

nameArea.innerText = username; // Kullanıcının adını seçicimizin içine yazdırıyoruz.

function showTime() {
  const gun = new Date();

  let saat = gun.getHours();
  let dakika = gun.getMinutes();
  let saniye = gun.getSeconds();

  if (dakika < 10) {
    dakika = "0" + dakika;
  }
  if (saniye < 10) {
    saniye = "0" + saniye;
  }
  document.getElementById("myClock").innerHTML =
    saat + ":" + dakika + ":" + saniye;
  setTimeout(showTime, 1000);
}

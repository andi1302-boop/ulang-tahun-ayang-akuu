
function startSurprise() {
  document.getElementById("startOverlay").style.display = "none";
  document.querySelector(".hero").style.display = "flex";
  document.querySelector(".container").style.display = "block";

  const audio = document.getElementById("bgMusic");
  audio.play();
  typeWriter();
}

const text = `Happy 22nd Birthday, Ayangku Tri Wahyuni 🥰

Hari ini bukan cuma ulang tahun kamu, tapi juga hari bahagianya aku.
Karena hari ini, Tuhan ngasih aku hadiah terbaik: kamu.

Semoga semua doa dan harapan kamu terkabul,
dan semoga aku selalu jadi bagian dari senyuman kamu ❤️`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

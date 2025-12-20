// Ucapan selamat datang
const userName = prompt("Masukkan nama Anda:");
document.getElementById("userName").innerText = userName || "Niken";

// Form validation & display
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("messageText").value;

  document.getElementById("resultBox").innerHTML = `
    <p><b>Nama:</b> ${name}</p>
    <p><b>Tanggal Lahir:</b> ${birth}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${message}</p>
  `;
});

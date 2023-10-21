// Ambil elemen-elemen yang dibutuhkan
const pesanButtons = document.querySelectorAll(".pesan-button");

// Fungsi untuk menampilkan pesan konfirmasi
function pesanHotel(event) {
  event.preventDefault();
  alert("Anda akan dialihkan ke halaman pemesanan hotel.");
  // Tambahkan tindakan sesuai kebutuhan Anda setelah pesan konfirmasi ditampilkan
}

// Tambahkan event listener untuk setiap tombol "Pesan Sekarang"
pesanButtons.forEach((button) => {
  button.addEventListener("click", pesanHotel);
});

// Ambil semua elemen dengan kelas "hotel-card"
const hotelCards = document.querySelectorAll(".hotel-card");

// Tambahkan event listener pada setiap "hotel-card"
hotelCards.forEach((card) => {
  const imageStack = card.querySelector(".image-stack");
  const images = imageStack.querySelectorAll("img");
  const nextButton = card.querySelector(".next-button");

  let currentImageIndex = 0;

  // Tampilkan foto pertama saat halaman dimuat
  images[currentImageIndex].style.opacity = "1";

  nextButton.addEventListener("click", () => {
    // Sembunyikan foto saat ini
    images[currentImageIndex].style.opacity = "0";

    // Ganti indeks foto saat ini
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Tampilkan foto berikutnya
    images[currentImageIndex].style.opacity = "1";
  });
});

// Ambil elemen pop-up
const popup = document.getElementById("popup");

// Tambahkan event listener pada setiap "pesan-button" untuk membuka pop-up
pesanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

// Event listener untuk menutup pop-up saat mengklik area di luar pop-up
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var offset = window.pageYOffset;

  if (offset > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

// Ambil elemen-elemen yang dibutuhkan
const konfirmasiButton = document.querySelector(".konfirmasi");
const formPemesanan = document.querySelector("#booking-form");

// Fungsi untuk menampilkan notifikasi konfirmasi dan kembali ke halaman hotel
function konfirmasiPemesanan(event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  // Tampilkan notifikasi konfirmasi
  alert("Hotel berhasil dipesan.");

  // Kembali ke halaman hotel dengan ID "hotel"
  window.location.href = "index.html";
}

// Tambahkan event listener pada tombol konfirmasi
konfirmasiButton.addEventListener("click", konfirmasiPemesanan);




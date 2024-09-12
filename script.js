document.getElementById("gift-select").addEventListener("change", function () {
  const selectedOption = this.value;
  const accountInfo = document.getElementById("account-info");
  const giftAddress = document.getElementById("gift-address");

  if (selectedOption === "transfer") {
    accountInfo.style.display = "block"; // Tampilkan info transfer
    giftAddress.style.display = "none"; // Sembunyikan alamat pengiriman
  } else if (selectedOption === "gift") {
    accountInfo.style.display = "none"; // Sembunyikan info transfer
    giftAddress.style.display = "block"; // Tampilkan alamat pengiriman
    giftAddress.disabled = false; // Aktifkan input alamat
  }
});

// Set default display state
window.onload = function () {
  document.getElementById("account-info").style.display = "block";
  document.getElementById("gift-address").style.display = "none";
};

function copyText(elementId) {
  // Get the text from the specified element
  var text = document.getElementById(elementId).innerText;

  // Create a temporary textarea element to copy the text
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);

  // Select the text inside the textarea and copy it
  tempTextArea.select();
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);

  // Optionally, show a success message
  alert("Text copied: " + text);
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah aksi default form (submit)

  // Menampilkan bagian gift
  const giftSection = document.getElementById("gift");
  giftSection.style.display = "block";
});
// Inisialisasi Swiper
var swiper = new Swiper(".love-story-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Slide akan loop terus
  autoplay: {
    delay: 2500, // Otomatis berpindah slide
    disableOnInteraction: false,
  },
});

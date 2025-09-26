// --- Smooth Scroll untuk Navbar ---
document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset biar ga ketutup navbar
        behavior: "smooth"
      });
    }
  });
});

// --- Sticky Navbar saat Scroll ---
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// --- Form Validation + Pesan Sukses ---
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // cegah reload

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const interest = form.interest.value;

  if (name === "" || email === "" || interest === "select option") {
    alert("Harap isi semua field dengan benar ✅");
    return;
  }

  // Jika lolos validasi
  alert(`Terima kasih, ${name}! Tim kami akan menghubungi Anda dalam 24 jam 🚀`);
  form.reset(); // reset form setelah submit
});

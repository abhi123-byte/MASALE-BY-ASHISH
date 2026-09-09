const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("mobile-open"));
});

const style = document.createElement("style");
style.textContent = `
@media(max-width:900px){
  .nav.mobile-open{
    display:flex;
    position:absolute;
    top:74px;
    left:0;
    right:0;
    padding:22px 7vw;
    flex-direction:column;
    gap:20px;
    background:#fbf8f1;
    border-bottom:1px solid rgba(67,11,7,.14);
    box-shadow:0 15px 30px rgba(0,0,0,.08);
  }
}
`;
document.head.appendChild(style);

document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".product-card, .feature, .story-content, .intro-copy").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(25px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  revealObserver.observe(el);
});

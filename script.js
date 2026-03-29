// 🎨 HERO BACKGROUND INTERACTION
const bg = document.querySelector(".hero-bg");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  bg.style.background = `
    radial-gradient(circle at ${30 + x * 40}% ${30 + y * 40}%, rgba(168,85,247,0.5), transparent 40%),
    radial-gradient(circle at ${70 - x * 30}% ${60 - y * 30}%, rgba(99,102,241,0.5), transparent 40%),
    radial-gradient(circle at ${50 + x * 20}% ${80 - y * 20}%, rgba(236,72,153,0.4), transparent 40%)
  `;
});

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});

// 🟣 PROJECT CARD GLOW FOLLOW
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});
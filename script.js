// ---------- tagline typing ----------

(function () {
  const el = document.querySelector(".tagline");
  if (!el) return;

  const text = el.dataset.text || "";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    el.textContent = text;
    return;
  }

  const startDelay = 500;
  const charDelay  = 45;

  el.classList.add("typing");

  let i = 0;
  function tick() {
    el.textContent = text.slice(0, i);
    i += 1;
    if (i <= text.length) {
      setTimeout(tick, charDelay);
    } else {
      setTimeout(() => el.classList.remove("typing"), 1200);
    }
  }

  setTimeout(tick, startDelay);
})();

// ---------- music player ----------

(function () {
  const player = document.querySelector(".player");
  if (!player) return;

  const button = player.querySelector(".play");
  const audio  = player.querySelector(".track");

  function setPlaying(isPlaying) {
    player.classList.toggle("playing", isPlaying);
    button.setAttribute("aria-label", isPlaying ? "Pause song" : "Play song");
  }

  button.addEventListener("click", async () => {
    button.blur(); // drop focus so the caption hides again when the cursor leaves
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        // Usually means the file is missing or the browser blocked autoplay.
        console.error("Could not play audio:", err);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener("ended", () => setPlaying(false));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("play",  () => setPlaying(true));
})();
onload = () => {
        document.body.classList.remove("container");

        const menuToggle = document.getElementById("menuToggle");
        const miniMenu = document.getElementById("miniMenu");
        const audio = document.getElementById("audioPrincipal");
        const btnRestart = document.getElementById("btnRestart");
        const btnPause = document.getElementById("btnPause");
        const btnPlay = document.getElementById("btnPlay");

        if (!menuToggle || !miniMenu || !audio) {
                return;
        }

        // Toggle del menú hamburguesa
        menuToggle.addEventListener("click", () => {
                const isOpen = miniMenu.classList.toggle("open");
                menuToggle.setAttribute("aria-expanded", isOpen.toString());
        });

        // Controles del mini reproductor
        if (btnRestart) {
                btnRestart.addEventListener("click", () => {
                        audio.currentTime = 0;
                        audio.play();
                });
        }

        if (btnPause) {
                btnPause.addEventListener("click", () => {
                        audio.pause();
                });
        }

        if (btnPlay) {
                btnPlay.addEventListener("click", () => {
                        audio.play();
                });
        }
};

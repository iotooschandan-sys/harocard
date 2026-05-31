/* =========================================
  INTERACTIVE CARD SLIDER
  ========================================= */

  const cards = document.querySelectorAll(".swap-card");

  let current = 0;
  let autoPlay;

  /* update */

  function updateCards() {

    cards.forEach((card, index) => {

      card.classList.remove(
        "active",
        "next",
        "prev"
      );

      if (index === current) {

        card.classList.add("active");

      }

      else if (
        index === (current + 1) % cards.length
      ) {

        card.classList.add("next");

      }

      else {

        card.classList.add("prev");

      }

    });

  }

  /* next */

  function nextCard() {

    current++;

    if (current >= cards.length) {
      current = 0;
    }

    updateCards();

  }

  /* prev */

  function prevCard() {

    current--;

    if (current < 0) {
      current = cards.length - 1;
    }

    updateCards();

  }

  /* autoplay */

  function startAutoPlay() {

    autoPlay = setInterval(() => {

      nextCard();

    }, 4000);

  }

  function stopAutoPlay() {

    clearInterval(autoPlay);

  }

  /* click swap */

  cards.forEach((card) => {

    card.addEventListener("click", () => {

      if (card.classList.contains("next")) {

        nextCard();

      }

      else if (card.classList.contains("prev")) {

        prevCard();

      }

      stopAutoPlay();
      startAutoPlay();

    });

  });

  /* init */

  updateCards();
  startAutoPlay();
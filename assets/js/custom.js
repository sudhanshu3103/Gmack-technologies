// owl slider for trusted partner

$(".truested-slider").owlCarousel({
  // AbortController
  loop: true,
  autplay: true,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 2000,
  autoplaySpeed: 2000,
  margin: 10,
  touchDrag: false,
  mouseDrag: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

//

$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//
$(document).ready(function () {
  // Counter animation
  $(".counter-item").each(function () {
    let $this = $(this);
    let countTo = $this.data("count");
    let suffix = "";

    if ($this.text().includes("%")) {
      suffix = "%";
    } else if ($this.text().includes("k")) {
      suffix = "k";
    } else if ($this.text().includes("+")) {
      suffix = "+";
    }

    $({
      countNum: 0,
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000, // Duration in milliseconds
        easing: "swing",
        step: function () {
          // Update the text during the animation
          let displayValue =
            Math.floor(this.countNum).toLocaleString() +
            '<span class="highlight">' +
            suffix +
            "</span>";
          $this.html(displayValue);
        },
        complete: function () {
          // Ensure the final value is set after animation
          let finalValue =
            countTo.toLocaleString() +
            '<span class="highlight">' +
            suffix +
            "</span>";
          $this.html(finalValue);
        },
      }
    );
  });
});

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const activeHeader = document.querySelector(".accordion-header.active");

    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.remove("active");
      activeHeader.nextElementSibling.style.display = "none";
    }

    const content = header.nextElementSibling;

    if (header.classList.contains("active")) {
      header.classList.remove("active");
      content.style.display = "none";
    } else {
      header.classList.add("active");
      content.style.display = "block";
    }
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

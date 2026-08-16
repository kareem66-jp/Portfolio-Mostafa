// slider
let sliders = document.querySelector(".sliders");
if (sliders) {
  let currentIndex = 0;
  let autoSlide;
  let isDragging = false;

  const originalSlides = [...document.querySelectorAll(".slider")];

  originalSlides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    sliders.appendChild(clone);
  });

  function slideWidth() {
    const slider = document.querySelector(".slider");
    const gap = parseInt(getComputedStyle(sliders).gap) || 0;

    return slider.offsetWidth + gap;
  }

  function moveSlider() {
    currentIndex++;

    sliders.scrollTo({
      left: currentIndex * slideWidth(),
      behavior: "smooth",
    });

    if (currentIndex >= originalSlides.length) {
      setTimeout(() => {
        sliders.style.scrollBehavior = "auto";

        currentIndex = 0;

        sliders.scrollLeft = 0;

        sliders.style.scrollBehavior = "smooth";
      }, 500);
    }
  }
  function startAutoSlide() {
    autoSlide = setInterval(moveSlider, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();
  sliders.addEventListener("mouseenter", stopAutoSlide);

  sliders.addEventListener("mouseleave", startAutoSlide);
}

// slider

// =================================
const links = document.querySelectorAll(".link p");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
// =================================

// btn bage

let home = document.getElementById("home");
let project = document.getElementById("projects");
let contact = document.getElementById("contact");
let contacts = document.getElementById("contacts");
let pro = document.getElementById("view-pro");
let pro2 = document.getElementById("pro");
let footCon = document.getElementById("foot-con");

home.addEventListener("click", () => {
  window.location.href = "pro.html";
});
project.addEventListener("click", () => {
  window.location.replace("project.html");
});
if (pro) {
  pro.addEventListener("click", () => {
    window.location.replace("project.html");
  });
}
contact.addEventListener("click", () => {
  window.location.replace("Contact.html");
});
if (contacts) {
  contacts.addEventListener("click", () => {
    window.location.replace("Contact.html");
  });
}
pro2.addEventListener("click", () => {
  window.location.replace("project.html");
});
footCon.addEventListener("click", () => {
  window.location.replace("Contact.html");
});

// btn bage
let section6 = document.getElementById("s6");
if (section6) {
  let projects = [
    {
      image: "./photo/s 01 (1).jpg",
      title: "Japanese room",
      style: "Japanese",
      space: "Master Bathroom",
      body: `A master bathroom inspired by the simplicity and tranquility of <br>
              Japanese design, using natural materials, warm lighting, and a <br>
              minimalist approach to create a calm and relaxing atmosphere.`,
      SoftwareUsed: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
    },
    {
      image: "./Day Shot/IMG_20260617_003156.jpg",
      title: "Dior Store",
      style: "Normal Shop",
      space: "Shop",
      body: `Inspired by Dior’s timeless elegance, this concept blends natural <br>
      marble, rock textures, and warm wood to create a luxurious retail <br>
      experience rooted in nature.`,
      SoftwareUsed: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
      link: "page-project.html",
    },
  ];

  function allProject() {
    for (let i = 0; i < projects.length; i++) {
      section6.innerHTML += `
    <hr>
      <div class="all-project ${i % 2 !== 0 ? "reverse" : ""}">
        <div class="project1 scroll-animate">
          <p class="im">
            <img src="${projects[i].image}" alt="" class="imge-pro" />
          </p>
          <div class="pargraf">
            <p class="title">${projects[i].title}</p>
            <p class="title-text">
              Style: ${projects[i].style}
              <br />
              <br />
              Space: ${projects[i].space}
              <br />
              <br />
              ${projects[i].body}
              <br />
              <br />
              Software Used: ${projects[i].SoftwareUsed}
            </p>
            <button id="view" onclick="window.location.href='${projects[i].link}'">
              VIEW PROJECT &nbsp;
              <span
                ><i id="arow" class="fa-solid fa-arrow-right-long"></i
              ></span>
            </button>
          </div>
        </div>
      </div>
`;
    }
  }
  allProject();
}

// scroll animtion
const animateElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // الأنيميشن يحصل مرة واحدة فقط
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

animateElements.forEach((element) => {
  observer.observe(element);
});
// scroll animtion

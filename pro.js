const supabaseUrl = "https://idlfmmqezmvsdmddpcqf.supabase.co";

const supabaseKey = "sb_publishable_BSwae2LJO5YOt2Pdohe9pw_132hhUkc";

const supabases = window.supabase.createClient(supabaseUrl, supabaseKey);

let params = new URLSearchParams(window.location.search);
let projectId = params.get("id");

console.log("Project ID:", projectId);

console.log(supabases);

async function testUpload() {
  let file = addImage.files[0];

  if (!file) {
    console.log("No image selected");
    return;
  }

  let fileName = `${Date.now()}-${file.name}`;

  let { data, error } = await supabaseClient.storage
    .from("project-images")
    .upload(fileName, file);

  if (error) {
    console.log("Upload Error:", error);
    return;
  }

  console.log("Upload Success:", data);
}
// عرض طول الصفحه
let progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  let progress = (scrollTop / pageHeight) * 100;

  progressBar.style.width = progress + "%";
});
// عرض طول الصفحه

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

// Skills carousel: drag/swipe and arrows control the CSS animation timeline.
const skillsCarousel = document.querySelector(".skills-carousel");
const skillsTrack = document.querySelector(".cards-skills");

if (skillsCarousel && skillsTrack) {
  const getAnimation = () => skillsTrack.getAnimations()[0];
  const loopTime = (time, duration) =>
    ((time % duration) + duration) % duration;
  const getCycleWidth = () => {
    const group = skillsTrack.querySelector(".cards-skills__group");
    const gap = parseFloat(getComputedStyle(skillsTrack).gap) || 0;
    return group.offsetWidth + gap;
  };
  let dragStartX = 0;
  let dragStartTime = 0;
  let dragging = false;

  skillsCarousel.addEventListener("pointerdown", (event) => {
    const animation = getAnimation();
    if (!animation) return;

    dragging = true;
    dragStartX = event.clientX;
    dragStartTime = Number(animation.currentTime) || 0;
    animation.pause();
    skillsCarousel.setPointerCapture(event.pointerId);
  });

  skillsCarousel.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const animation = getAnimation();
    const duration = Number(animation.effect.getTiming().duration);
    const elapsed = ((event.clientX - dragStartX) / getCycleWidth()) * duration;
    animation.currentTime = loopTime(dragStartTime - elapsed, duration);
  });

  const endSkillsDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    if (skillsCarousel.hasPointerCapture(event.pointerId)) {
      skillsCarousel.releasePointerCapture(event.pointerId);
    }
    getAnimation()?.play();
  };

  skillsCarousel.addEventListener("pointerup", endSkillsDrag);
  skillsCarousel.addEventListener("pointercancel", endSkillsDrag);

  document.querySelectorAll("[data-skills-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      const animation = getAnimation();
      if (!animation) return;

      const duration = Number(animation.effect.getTiming().duration);
      const step = (320 / getCycleWidth()) * duration;
      const direction = button.dataset.skillsDirection === "next" ? 1 : -1;
      animation.currentTime = loopTime(
        (Number(animation.currentTime) || 0) + direction * step,
        duration,
      );
    });
  });
}

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
if (home) {
  home.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
if (project) {
  project.addEventListener("click", () => {
    window.location.replace("project.html");
  });
}
if (pro) {
  pro.addEventListener("click", () => {
    window.location.replace("project.html");
  });
}
if (contact) {
  contact.addEventListener("click", () => {
    window.location.replace("Contact.html");
  });
}
if (contacts) {
  contacts.addEventListener("click", () => {
    window.location.replace("Contact.html");
  });
}
if (pro2) {
  pro2.addEventListener("click", () => {
    window.location.replace("project.html");
  });
}
if (footCon) {
  footCon.addEventListener("click", () => {
    window.location.replace("Contact.html");
  });
}

// btn bage
let projects = [
  {
    image: "./photo/s 01 (1).jpg",
    title: "Japanese room",
    style: "Japanese",
    space: "Master Badroom",
    body: `A master bathroom inspired by the simplicity and tranquility of 
            Japanese design, using natural materials, warm lighting, and a 
            minimalist approach to create a calm and relaxing atmosphere.`,
    SoftwareUsed: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
    link: "test.html?id=1",
    category: "residential",
  },

  {
    image: "./Day Shot/IMG_20260617_003156.jpg",
    title: "Dior Store",
    style: "Normal Shop",
    space: "Shop",
    body: `Inspired by Dior’s timeless elegance, this concept blends natural 
    marble, rock textures, and warm wood to create a luxurious retail 
    experience rooted in nature.`,
    SoftwareUsed: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
    link: "test.html?id=2",
    category: "commercial",
  },
];

let section6 = document.getElementById("s6");

async function getProjects() {
  let { data, error } = await supabases.from("projects").select("*");

  if (error) {
    console.log("Get Projects Error:", error);
    return;
  }

  console.log("Projects from Supabase:", data);

  if (data.length > 0) {
    console.log("Columns:", Object.keys(data[0]));
  }

  data.forEach((project) => {
    if (!project.image && !project.image_url) return;

    projects.push({
      id: project.id,
      image: project.image || project.image_url,
      title: project.title,
      style: project.style,
      space: project.space,
      body: project.body,
      SoftwareUsed: project.software_used,
      category: project.category,
      link: `test.html?id=${project.id}`,
    });
  });

  allProject();
}

getProjects();

function allProject() {
  if (!section6) return;

  section6.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    section6.innerHTML += `
      <hr>
      <div 
          class="all-project ${i % 2 !== 0 ? "reverse" : ""}"
          data-category="${projects[i].category || ""}"
        >
        <div class="project1">
          <p class="im">
            <img
              src="${projects[i].image}"
              alt=""
              class="imge-pro"
              onclick="window.location.href='${projects[i].link || `test.html?id=${projects[i].id}`}'"
            />
          </p>
          <div class="pargraf">
            <p class="title">${projects[i].title}</p>
            <p class="title-text">
              Style: ${projects[i].style}
              <br /><br />
              Space: ${projects[i].space}
              <br /><br />
              ${projects[i].body}
              <br /><br />
              ${projects[i].SoftwareUsed}
            </p>
            <button
              onclick="window.location.href='${projects[i].link || `test.html?id=${projects[i].id}`}'"
              id="view"
            >
              VIEW PROJECT
              <i class="fa-solid fa-arrow-right" id="arow"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  let categoryButtons = document.querySelectorAll("[data-cat]");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let category = button.dataset.cat;

      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      let allProjects = document.querySelectorAll(".all-project");

      allProjects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
}

// allProject();

// Add Project
let add = document.querySelector("#add-projects");
let tit = document.querySelector("#tit");
let style = document.querySelector("#style");
let space = document.querySelector("#space");
let body = document.querySelector("#body");
let app = document.querySelector("#app");
let addImage = document.querySelector("#add-image");
let category = document.querySelector("#category");

if (category) {
  console.log("Category:", category.value);
}

let dayImages = document.querySelector("#day-images");
let nightImages = document.querySelector("#night-images");
let closeImages = document.querySelector("#close-images");

if (add) {
  add.addEventListener("click", async () => {
    console.log(category);
    console.log(category.value);
    if (addImage.files.length === 0) {
      alert("Choose a top image first");
      return;
    }

    // 1. Upload top image
    let topFile = addImage.files[0];

    let topFileName = `${Date.now()}-${topFile.name}`;

    let { error: topUploadError } = await supabases.storage
      .from("project-images")
      .upload(topFileName, topFile);

    if (topUploadError) {
      console.log("Top Image Upload Error:", topUploadError);
      return;
    }

    let { data: topImageData } = supabases.storage
      .from("project-images")
      .getPublicUrl(topFileName);

    let topImageUrl = topImageData.publicUrl;

    // 2. Create project
    let { data, error } = await supabases
      .from("projects")
      .insert({
        title: tit.value,
        style: style.value,
        space: space.value,
        body: body.value,
        software_used: app.value,
        image: topImageUrl,
        category: category.value,
      })
      .select()
      .single();

    if (error) {
      console.log("Database Error:", error);
      return;
    }

    // console.log("Project added:", data);

    // 3. Upload extra images
    async function uploadExtraImages(files, category) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];

        let fileName = `${Date.now()}-${i}-${file.name}`;

        let { error: uploadError } = await supabases.storage
          .from("project-images")
          .upload(fileName, file);

        if (uploadError) {
          console.log("Image Upload Error:", uploadError);
          continue;
        }

        let { data: imageData } = supabases.storage
          .from("project-images")
          .getPublicUrl(fileName);

        let imageUrl = imageData.publicUrl;

        await supabases.from("project_images").insert({
          project_id: data.id,
          image_url: imageUrl,
          category: category,
        });
      }
    }

    // 4. Upload Day / Night / Close
    await uploadExtraImages(dayImages.files, "day");
    await uploadExtraImages(nightImages.files, "night");
    await uploadExtraImages(closeImages.files, "close");

    alert("Project added successfully!");
  });
}

// add project

if (
  document.querySelector(".dior-par") &&
  (projectId == "1" || projectId == "2")
) {
  let id = new URLSearchParams(location.search).get("id");

  console.log("ID:", id);

  let projec = {
    1: {
      title: "Japanese room",
      style: "Japanese",
      space: "Master Badroom",
      body: `A master bathroom inspired by the simplicity and tranquility of
            Japanese design, using natural materials, warm lighting, and a
            minimalist approach to create a calm and relaxing atmosphere.`,
      software: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
      imageTop: ["./photo/s 01 (1).jpg"],
      imageDay: [
        "./Japan Day/s 01 .jpg",
        "./Japan Day/s 02 .jpg",
        "./Japan Day/s 05 .jpg",
        "./Japan Day/s 07 .jpg",
        "./Japan Day/s 08 .jpg",
      ],
      imageNight: [
        "./Japan Night/s 09 .jpg",
        "./Japan Night/s 10 .jpg",
        "./Japan Night/s 11 .jpg",
      ],
      imgClose: [
        "./Japan Close/s 03 .jpg",
        "./Japan Close/s 04 _.jpg",
        "./Japan Close/s 06 .jpg",
      ],
    },
    2: {
      title: "Dior Store",
      style: "Normal Shop",
      space: "Shop",
      body: `Inspired by Dior’s timeless elegance, this concept blends natural 
            marble, rock textures, and warm wood to create a luxurious retail 
            experience rooted in nature.`,
      software: "Software Used: 3ds Max | V-Ray | AutoCAD | Photoshop",
      imageTop: ["./Day Shot/IMG_20260617_003156.jpg"],
      imageDay: [
        "./Day Shot/PicsArt_06-22-05.37.07.png",
        "./Day Shot/PicsArt_06-22-05.38.24.png",
        "./Day Shot/IMG_20260617_003156.jpg",
        "./Day Shot/IMG_20260617_003309.jpg",
        "./Day Shot/IMG_20260617_003343.jpg",
        "./Day Shot/IMG_20260617_003514.jpg",
        "./Day Shot/IMG_20260617_003838.jpg",
      ],
      imageNight: [
        "./Nigth Shot/PicsArt_06-22-05.56.47.png",
        "./Nigth Shot/PicsArt_06-22-05.58.00.png",
        "./Nigth Shot/IMG_20260617_005255.jpg",
        "./Nigth Shot/IMG_20260617_005407.jpg",
        "./Nigth Shot/s 03 night .jpg",
        "./Nigth Shot/IMG_20260617_005457.jpg",
        "./Nigth Shot/IMG_20260617_005407.jpg",
      ],
      imgClose: [
        "./Close Shot/IMG_20260617_003956.jpg",
        "./Close Shot/IMG_20260617_004054.jpg",
        "./Close Shot/IMG_20260617_004152.jpg",
      ],
    },
  };

  let currentProject = projec[id];

  let par = document.querySelector(".dior-par");

  par.innerHTML = `
          <p class="store">${currentProject.title}</p>
          <p class="commercial">${currentProject.style}</p>
          <p class="Design">${currentProject.space}:</p>
          <p class="pargraf-dior">
            ${currentProject.body}
          </p>
          <p class="Software">
            ${currentProject.software}
          </p>
  `;

  let gallery = document.querySelector(".images-dior");
  let gallery2 = document.querySelector(".images-dior1");
  let gallery3 = document.querySelector(".images-dior2");
  let imageTop = document.querySelector(".dior-imge");

  currentProject.imageDay.forEach((image) => {
    let img = document.createElement("img");
    img.src = image;
    gallery.appendChild(img);
  });

  currentProject.imageNight.forEach((image) => {
    let img = document.createElement("img");
    img.src = image;
    gallery2.appendChild(img);
  });

  currentProject.imgClose.forEach((image) => {
    let img = document.createElement("img");
    img.src = image;
    gallery3.appendChild(img);
  });

  currentProject.imageTop.forEach((image) => {
    let img = document.createElement("img");
    img.src = image;
    imageTop.appendChild(img);
  });

  const galleryImages = [
    { element: gallery, label: "Day Shot" },
    { element: gallery2, label: "Night Shot" },
    { element: gallery3, label: "Close Shot" },
  ].flatMap(({ element, label }) =>
    [...element.querySelectorAll("img")].map((img) => {
      img.dataset.galleryLabel = label;
      return img;
    }),
  );

  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML = `
    <button class="gallery-lightbox__button gallery-lightbox__close" type="button" aria-label="Close image viewer">&#10005;</button>
    <button class="gallery-lightbox__button gallery-lightbox__previous" type="button" aria-label="Previous image">&#10094;</button>
    <div class="gallery-lightbox__content">
      <p class="gallery-lightbox__label"></p>
      <img class="gallery-lightbox__image" alt="" />
    </div>
    <button class="gallery-lightbox__button gallery-lightbox__next" type="button" aria-label="Next image">&#10095;</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".gallery-lightbox__image");
  const lightboxLabel = lightbox.querySelector(".gallery-lightbox__label");
  let activeImageIndex = 0;

  const showImage = (index) => {
    activeImageIndex = (index + galleryImages.length) % galleryImages.length;
    const activeImage = galleryImages[activeImageIndex];
    lightboxImage.src = activeImage.currentSrc || activeImage.src;
    lightboxImage.alt = activeImage.alt;
    lightboxLabel.textContent = activeImage.dataset.galleryLabel;
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
      lightbox.classList.add("is-open");
      document.body.classList.add("lightbox-open");
    });
  });

  lightbox
    .querySelector(".gallery-lightbox__close")
    .addEventListener("click", closeLightbox);
  lightbox
    .querySelector(".gallery-lightbox__previous")
    .addEventListener("click", () => {
      showImage(activeImageIndex - 1);
    });
  lightbox
    .querySelector(".gallery-lightbox__next")
    .addEventListener("click", () => {
      showImage(activeImageIndex + 1);
    });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(activeImageIndex - 1);
    if (event.key === "ArrowRight") showImage(activeImageIndex + 1);
  });
}

// add project full
async function getProject() {
  if (projectId == "1" || projectId == "2" || projectId == null) {
    console.log("Static project:", projectId);
    return;
  }

  let { data, error } = await supabases
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error) {
    console.log("Get Project Error:", error);
    return;
  }

  console.log("Project:", data);

  let par = document.querySelector(".dior-par");

  par.innerHTML = `
  <p class="store">${data.title}</p>

  <p class="commercial">${data.style}</p>

  <p class="Design">${data.space}:</p>

  <p class="pargraf-dior">
    ${data.body}
  </p>

  <p class="Software">
    ${data.software_used}
  </p>`;

  let imageTop = document.querySelector(".dior-imge");

  let img = document.createElement("img");

  img.src = data.image || data.image_url;

  imageTop.appendChild(img);

  let { data: extraImages, error: imagesError } = await supabases
    .from("project_images")
    .select("*")
    .eq("project_id", projectId);

  if (imagesError) {
    console.log("Get Images Error:", imagesError);
    return;
  }

  console.log("Extra Images:", extraImages);

  let gallery = document.querySelector(".images-dior");
  let gallery2 = document.querySelector(".images-dior1");
  let gallery3 = document.querySelector(".images-dior2");

  extraImages.forEach((projectImage) => {
    let img = document.createElement("img");

    img.src = projectImage.image_url;

    if (projectImage.category == "day") {
      gallery.appendChild(img);
    }

    if (projectImage.category == "night") {
      gallery2.appendChild(img);
    }

    if (projectImage.category == "close") {
      gallery3.appendChild(img);
    }
  });
  let galleryImages = [
    { element: gallery, label: "Day Shot" },
    { element: gallery2, label: "Night Shot" },
    { element: gallery3, label: "Close Shot" },
  ].flatMap(({ element, label }) =>
    [...element.querySelectorAll("img")].map((img) => {
      img.dataset.galleryLabel = label;
      return img;
    }),
  );

  let lightbox = document.createElement("div");

  lightbox.className = "gallery-lightbox";

  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");

  lightbox.innerHTML = `
  <button class="gallery-lightbox__button gallery-lightbox__close" type="button">
    &#10005;
  </button>

  <button class="gallery-lightbox__button gallery-lightbox__previous" type="button">
    &#10094;
  </button>

  <div class="gallery-lightbox__content">
    <p class="gallery-lightbox__label"></p>
    <img class="gallery-lightbox__image" alt="" />
  </div>

  <button class="gallery-lightbox__button gallery-lightbox__next" type="button">
    &#10095;
  </button>
`;

  document.body.appendChild(lightbox);

  let lightboxImage = lightbox.querySelector(".gallery-lightbox__image");

  let lightboxLabel = lightbox.querySelector(".gallery-lightbox__label");

  let activeImageIndex = 0;

  function showImage(index) {
    activeImageIndex = (index + galleryImages.length) % galleryImages.length;

    let activeImage = galleryImages[activeImageIndex];

    lightboxImage.src = activeImage.currentSrc || activeImage.src;

    lightboxImage.alt = activeImage.alt;

    lightboxLabel.textContent = activeImage.dataset.galleryLabel;
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");

    document.body.classList.remove("lightbox-open");
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);

      lightbox.classList.add("is-open");

      document.body.classList.add("lightbox-open");
    });
  });

  lightbox
    .querySelector(".gallery-lightbox__close")
    .addEventListener("click", closeLightbox);

  lightbox
    .querySelector(".gallery-lightbox__previous")
    .addEventListener("click", () => {
      showImage(activeImageIndex - 1);
    });

  lightbox
    .querySelector(".gallery-lightbox__next")
    .addEventListener("click", () => {
      showImage(activeImageIndex + 1);
    });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showImage(activeImageIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showImage(activeImageIndex + 1);
    }
  });
}
getProject();

// add project full

// scroll animtion
const animateElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
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

// show header in mobile

let sho = document.getElementById("head-show");
let shoSpan = document.querySelector(".link");
let sho1 = document.getElementById("cv");

if (sho) {
  sho.addEventListener("click", () => {
    shoSpan.classList.toggle("show");
    sho1.style.display = "inline";
    shoSpan.appendChild(sho1);

    if (sho.classList.contains("active")) {
      sho.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      sho.classList.remove("active");
    } else {
      sho.innerHTML = `<i class="fa-solid fa-x"></i>`;
      sho.classList.add("active");
    }
  });
}

// show header in mobile

// top bage

let sp = document.querySelector(".arrow");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 500) {
    sp.classList.add("show");
  } else {
    sp.classList.remove("show");
  }
});
if (sp) {
  sp.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// top bage

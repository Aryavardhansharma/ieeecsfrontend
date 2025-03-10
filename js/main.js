// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading-screen").classList.add("hidden")
  }, 2000)
})

// Header scroll effect
const header = document.querySelector("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const closeMenuBtn = document.querySelector(".close-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active")
  document.body.style.overflow = "hidden"
})

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
  document.body.style.overflow = "auto"
})

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = "auto"
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active")
    }
  })
}, observerOptions)

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el)
})

// Parallax effect for blobs
window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight

  const blobs = document.querySelectorAll(".blob")
  blobs.forEach((blob) => {
    const speed = 30
    const xPos = (x - 0.5) * speed
    const yPos = (y - 0.5) * speed

    blob.style.transform = `translate(${xPos}px, ${yPos}px)`
  })
})

// Add hover effect to service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.zIndex = "2"
  })

  card.addEventListener("mouseleave", () => {
    setTimeout(() => {
      card.style.zIndex = "1"
    }, 300)
  })
})

// Add hover effect to work cards
document.querySelectorAll(".work-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.zIndex = "2"
  })

  card.addEventListener("mouseleave", () => {
    setTimeout(() => {
      card.style.zIndex = "1"
    }, 300)
  })
})


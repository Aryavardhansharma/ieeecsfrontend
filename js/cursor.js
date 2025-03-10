// Custom cursor
const cursorDot = document.querySelector(".cursor-dot")
const cursorOutline = document.querySelector(".cursor-outline")

window.addEventListener("mousemove", (e) => {
  cursorDot.style.left = e.clientX + "px"
  cursorDot.style.top = e.clientY + "px"

  // Add a slight delay to the outline for a trailing effect
  setTimeout(() => {
    cursorOutline.style.left = e.clientX + "px"
    cursorOutline.style.top = e.clientY + "px"
  }, 50)
})

// Enlarge cursor when hovering over links and buttons
document.querySelectorAll("a, button, input, textarea").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "60px"
    cursorOutline.style.height = "60px"
    cursorDot.style.transform = "translate(-50%, -50%) scale(1.5)"
    cursorDot.classList.add("active")
    cursorOutline.classList.add("active")
  })

  el.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "40px"
    cursorOutline.style.height = "40px"
    cursorDot.style.transform = "translate(-50%, -50%) scale(1)"
    cursorDot.classList.remove("active")
    cursorOutline.classList.remove("active")
  })
})


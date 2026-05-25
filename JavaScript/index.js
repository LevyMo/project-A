// SELECT ELEMENTS
const mainTitle = document.getElementById("main-title");
const sectionTitles = document.querySelectorAll(".section-title");
const paragraphs = document.querySelectorAll(".about-text");

// CHANGE HEADER COLOR WHEN CLICKED
mainTitle.addEventListener("click", () => {
  mainTitle.style.color = "red";
});

// CHANGE SECTION TITLE COLOR
sectionTitles.forEach((title) => {
  title.addEventListener("mouseenter", () => {
    title.style.color = "cyan";
  });

  title.addEventListener("mouseleave", () => {
    title.style.color = "#ffcc00";
  });
});

// CHANGE PARAGRAPH BACKGROUND WHEN CLICKED
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    paragraph.style.backgroundColor = "#222";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "10px";
  });
});
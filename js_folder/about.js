// Add dynamic highlights
const highlights = [
    "20+ years of excellence",
    "Innovative designs",
    "Sustainability at the core",
    "Global presence",
];

const aboutContent = document.querySelector(".about-content");
const highlightList = document.createElement("ul");

highlights.forEach(highlight => {
    const li = document.createElement("li");
    li.textContent = highlight;
    highlightList.appendChild(li);
});

aboutContent.appendChild(highlightList);

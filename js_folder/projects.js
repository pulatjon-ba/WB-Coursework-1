// Adding dynamic project details (can be expanded later)
const projectList = document.querySelector(".projects ul");

const projectDetails = [
    "Highway Construction in Region A",
    "Bridge Design in Region B",
    "Road Maintenance for City X"
];

projectDetails.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project;
    projectList.appendChild(li);
});

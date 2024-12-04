// Adding dynamic team members (can be expanded later)
const teamList = document.querySelector(".team ul");

const teamMembers = [
    "John Doe - Lead Engineer",
    "Jane Smith - Senior Architect",
    "Emily Johnson - Project Manager"
];

teamMembers.forEach(member => {
    const li = document.createElement("li");
    li.textContent = member;
    teamList.appendChild(li);
});

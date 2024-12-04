// Script to dynamically generate the navigation menu and interactive elements on the homepage

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    const links = [
        { href: "index.html", text: "Home" },
        { href: "about.html", text: "About Us" },
        { href: "services.html", text: "Services" },
        { href: "projects.html", text: "Projects" },
        { href: "team.html", text: "Team" },
        { href: "contact.html", text: "Contact" }
    ];

    // Create navigation list
    const ul = document.createElement("ul");
    ul.classList.add("nav-links")

    links.forEach(link => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
});
document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle visibility
});


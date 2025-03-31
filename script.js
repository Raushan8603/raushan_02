document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");
    const backToTopBtn = document.createElement("button");
    const darkModeToggle = document.createElement("button");

    // Smooth Scrolling Functionality
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    AOS.init({
        duration: 1000,
    });
    

    const progressBar = document.createElement("div");
progressBar.id = "progressBar";
document.body.appendChild(progressBar);

window.addEventListener("scroll", function () {
    let scrollPosition = document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = (scrollPosition / totalHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

function openModal(img) {
    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
        background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center;
    `;
    const modalImg = document.createElement("img");
    modalImg.src = img.src;
    modalImg.style.cssText = "max-width: 80%; max-height: 80%; border-radius: 10px;";

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener("click", function () {
        modal.remove();
    });
}


const aboutText = "Hello! I am Raushan, a passionate Full Stack Developer skilled in both frontend and backend technologies.";
let index = 0;
const aboutPara = document.querySelector(".about-text");
aboutPara.innerHTML = "";

function typeWriter() {
    if (index < aboutText.length) {
        aboutPara.innerHTML += aboutText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
window.onload = typeWriter;



    // Back to Top Button
    backToTopBtn.innerText = "⬆ Top";
    backToTopBtn.id = "backToTop";
    backToTopBtn.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; 
        background: #ff8a00; color: white; border: none; border-radius: 5px; 
        cursor: pointer; display: none; font-size: 16px; box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(backToTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Active Menu Highlight
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 60;
        links.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    // Dark Mode Toggle Button
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.id = "darkModeToggle";
    darkModeToggle.style.cssText = `
        position: fixed; bottom: 20px; left: 20px; padding: 10px 15px; 
        background: #222; color: white; border: none; border-radius: 5px; 
        cursor: pointer; font-size: 16px;
    `;
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀ Light Mode";
        } else {
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });

    // Dark Mode CSS
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #111;
            color: #fff;
        }
        .dark-mode a {
            color: #ff9800;
        }
        .dark-mode .menu {
            background-color: #222;
        }
    `;
    document.head.appendChild(darkModeStyle);
});



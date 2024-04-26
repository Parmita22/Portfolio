// Initialize Typed.js
var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Data Analyst", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.querySelector(".about-tabs");
    const aboutSection = document.querySelector(".about-section");

    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item")) {
            // Remove active class from all tab items
            tabsContainer.querySelectorAll(".tab-item").forEach(item => {
                item.classList.remove("active");
            });

            // Add active class to the clicked tab item
            e.target.classList.add("active");

            // Get the target tab content and remove active class from all others
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });
            document.querySelector(target).classList.add("active");
        }
    });

    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pp-inner")) {
            togglePortfolioPopup();
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0, 0);
            portfolioItemDetails(e.target.closest(".proj"));
        }
    });
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hidden-scrolling");
    document.querySelector(".main-container").classList.toggle("fade-out");
}

function portfolioItemDetails(portfolioItem) {
    const info = portfolioItem.querySelector(".info");
    const description = info.querySelector("p").innerHTML;
    const generalInfo = info.querySelector(".general-info").innerHTML;
    
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".water").src;
    document.querySelector(".pp-header h3").innerHTML = description;
    document.querySelector(".pp-body .description").innerHTML = description;
    document.querySelector(".pp-body .general-info").innerHTML = generalInfo;
}

const form = document.querySelector('form')
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const mess = document.getElementById("area-write");
function sendEmail(){
    const bodyMessage = `Full Name : ${fullName.value}<br> Email : ${email.value} Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "parmitapatre@gmail.com",
        Password : "701A6026980D2B076F7C33182ECABDCABD33",
        To : 'parmitapatre@gmail.com',
        From : "parmitapatre@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Message is sent successfully!",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs(){
    const items = document.querySelectorAll(".item");
    let isValid = true; // Flag to track overall form validity

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for(const item of items )
    {
        if (item.value.trim() === ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false; // Set flag to false if any field is empty
            // Display error message for empty fields
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("error-message");
            errorMessage.innerText = "This field is required";
            item.parentElement.appendChild(errorMessage);
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
            // Remove error message if field is not empty
            const errorMessage = item.parentElement.querySelector(".error-message");
            if (errorMessage) {
                errorMessage.remove();
            }
        }

        // Email validation
        if (item.id === "email") {
            if (!emailRegex.test(item.value.trim())) {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                isValid = false; // Set flag to false if email is invalid
                // Display error message for invalid email
                const errorMessage = document.createElement("div");
                errorMessage.classList.add("error-message");
                errorMessage.innerText = "Email is not valid";
                item.parentElement.appendChild(errorMessage);
            } else {
                // Remove error message if email is valid
                const errorMessage = item.parentElement.querySelector(".error-message");
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        }
    }

    return isValid;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const isValid = checkInputs(); 
    if (isValid) {
        sendEmail();
    }
});

showSidebar = () => {
   
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
hideSidebar = ( ) =>{

    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
};

// function showSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.add('show');
//   }
  
//   function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.remove('show');
//   }


// document.addEventListener("click" , (e)=>{
//     if(e.target.classList.contains("link-item") && e.target.hash !== "")
//     {
//         const hash = e.target.hash;
//         if(e.target.classList.contains(""))
//     }
// })
  
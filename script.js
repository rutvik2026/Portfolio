

let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    sections.forEach(sec =>{
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
    }
});
    let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
}



document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [ "Java Devloper",
        "Full Stack Web Devloper",
        "Android Devloper",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true
    };

    // Ensure you use `Typed` (with capital 'T') and not `typed`
    var typed = new Typed(".text", options);
});
    const handleDownloadResume = () => {
      const button = document.getElementById();
    };
    document
      .getElementById("downloadBtn").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "rutvik_resume.pdf"; // Ensure correct file path
        link.download = "Rutvik_Bansode_Resume.pdf"; // Forces download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    document.addEventListener("DOMContentLoaded", function () {
      // Get the submit button
      const submitBtn = document.getElementById("submitBtn");

      // Add click event listener
      submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        alert("Thank you for your message!");
      });
    });


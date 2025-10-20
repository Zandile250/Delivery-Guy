document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const content = header.nextElementSibling;

      const isExpanded = header.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion-item").forEach((item) => {
        const itemHeader = item.querySelector(".accordion-header");
        const itemContent = item.querySelector(".accordion-content");

        if (item !== currentItem && item.classList.contains("active")) {
          item.classList.remove("active");
          itemHeader.setAttribute("aria-expanded", "false");
          itemContent.style.maxHeight = null;
        }
      });

      currentItem.classList.toggle("active");
      header.setAttribute("aria-expanded", !isExpanded);

      if (currentItem.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      document
        .querySelectorAll(".error-message")
        .forEach((el) => (el.textContent = ""));
      formResponse.textContent = "";
      formResponse.className = "mb-3";

      let isValid = true;

      const nameInput = document.getElementById("name");
      if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent =
          "Full name is required.";
        isValid = false;
      }

      const emailInput = document.getElementById("email");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        document.getElementById("emailError").textContent =
          "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent =
          "Please enter a valid email address.";
        isValid = false;
      }

      const phoneInput = document.getElementById("phone");

      const phonePattern = /^\d{10}$/;
      if (
        phoneInput.value.trim() !== "" &&
        !phonePattern.test(phoneInput.value.trim())
      ) {
        document.getElementById("phoneError").textContent =
          "Phone number must be 10 digits.";
        isValid = false;
      }

      const subjectInput = document.getElementById("subject");
      if (subjectInput.value.trim() === "") {
        document.getElementById("subjectError").textContent =
          "Subject is required.";
        isValid = false;
      }

      const messageInput = document.getElementById("message");
      if (messageInput.value.trim() === "") {
        document.getElementById("messageError").textContent =
          "A message is required.";
        isValid = false;
      }

      if (isValid) {
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        setTimeout(() => {
          formResponse.innerHTML = `
                        <div class="alert alert-success" role="alert">
                            Thank you, ${data.name}! Your general message has been successfully received. We will respond to ${data.email} shortly.
                        </div>
                    `;
          contactForm.reset();
        }, 1000);

        formResponse.innerHTML = `<div class="alert alert-info" role="alert">Sending message...</div>`;
      }
    });
  }
});

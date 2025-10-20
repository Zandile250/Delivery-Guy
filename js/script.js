document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const content = header.nextElementSibling;

      // Check current expanded state using the aria-expanded attribute
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // --- Functionality: Close all other open items ---
      // This loop ensures only one FAQ item is open at a time
      document.querySelectorAll(".accordion-item").forEach((item) => {
        const itemHeader = item.querySelector(".accordion-header");
        const itemContent = item.querySelector(".accordion-content");

        if (item !== currentItem && item.classList.contains("active")) {
          item.classList.remove("active");
          itemHeader.setAttribute("aria-expanded", "false");
          itemContent.style.maxHeight = null; // Collapse the content
        }
      });

      // --- Functionality: Toggle the current item ---
      currentItem.classList.toggle("active");
      header.setAttribute("aria-expanded", !isExpanded);

      if (currentItem.classList.contains("active")) {
        // Open the content by setting max-height to its scroll height
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        // Close the content by resetting max-height
        content.style.maxHeight = null;
      }
    });
  });
});

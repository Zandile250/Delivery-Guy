📦 Delivery Guy – SmartBox Website
Introduction
This project presents SmartBox, a modern moving and storage solution designed to simplify the logistics of personal and commercial storage. Instead of requiring customers to travel to a facility, SmartBox brings the storage unit directly to them—offering convenience, flexibility, and peace of mind.

Purpose
The website serves as an accessible platform for users to explore SmartBox’s services, make enquiries, and understand the value it brings to the market. It’s built with clarity and usability in mind, ensuring visitors can easily navigate and engage with the content.

Key Features

- Intuitive Navigation
  Visitors can quickly access service details, contact forms, and information about SmartBox’s market offerings through a clean and structured menu.
- Thoughtful Styling with CSS
  The site’s layout, colors, and typography were carefully styled to create a professional and welcoming user experience. Responsive design principles were applied to ensure compatibility across devices.
- Demonstration Video
  A short embedded video illustrates how parcels are accessed using SmartBox, helping users visualize the process and appreciate its simplicity.
- Site Map
  A visual site map outlines the structure and journey of the website, offering transparency into the project’s design and flow.
- Semantic HTML
  HTML tags were used correctly and meaningfully, supporting accessibility, maintainability, and best practices in web development.
  Technologies Used
- HTML5 – for semantic structure and content
- CSS3 – for styling and layout
- Embedded Media – for video integration
  -Bootstrap 5.3.0 – for responsive components
  CSS Custom Properties
  -I added CSS variables at the top of my stylesheet to make it easier to change colors and spacing throughout the site. Instead of writing the same color code everywhere, I can just use var(--primary) and change it once if needed.
  -Better Typography
  Fixed all the heading sizes so they look better and work well on different screens. Used rem and em units instead of fixed pixel sizes so everything scales properly when you zoom in or change screen sizes.
  Layouts

Used Flexbox for the navigation menu and image gallery. It helps things line up nicely and wrap to new lines on smaller screens.
Added CSS Grid for the gallery section. It automatically creates 3 columns on desktop and switches to 1 column on mobile, which is pretty cool.

Making Things Interactive
Added hover effects to buttons and links so they change color or move slightly when you hover over them. Also added focus states (the outline you see when you tab through elements) for better accessibility.
Responsive Design
Made the website work on different screen sizes:

Mobile (phones): Everything stacks vertically, buttons are full width, images are smaller
Tablet: Two-column layout in some places, medium-sized text
Desktop: Full three-column gallery, bigger text, more spacing

Used media queries to make these changes happen automatically based on screen width.
What I Tested
Checked the website on:

My laptop (1440px wide)
Chrome DevTools for tablet view (768px)
Chrome DevTools for phone view (375px)

Everything looks good and nothing breaks on smaller screens.
Files Changed

css/styles.css - Added all the responsive CSS and cleaned up the code
Used the <picture> element in HTML for responsive images

Resources I Used

W3Schools for the <picture> element
Class notes on Flexbox and Grid
MDN docs when I got stuck with media queries

Future Enhancements

Add JavaScript for dynamic interactions
Connect backend services to handle form submissions
Improve accessibility for users with assistive technologies
Add animations using CSS keyframes
Screenshots

Here's how the site looks on different devices:

**Mobile (375px)**
<img src="screenshots/Mobile.PNG" width="300">

**Tablet (768px)**
<img src="screenshots/Tablet.PNG" width="500">

**Desktop (1440px)**
<img src="screenshots/Desktop.PNG" width="700">

Responsive Design
Made the website work on different screen sizes using media queries:

- **Mobile (phones)**: Everything stacks vertically, buttons are full width
- **Tablet**: Two-column layout, medium-sized text
- **Desktop**: Full three-column gallery, bigger text, more spacing

-What I Tested
Checked the website on Chrome DevTools at 375px (mobile), 768px (tablet), and 1440px (desktop).

References

W3Schools. (2023). HTML <picture> Element. [online] Available at: https://www.w3schools.com/tags/tag_picture.asp [Accessed 28 Sep. 2025]
MDN Web Docs. (2024). CSS Flexible Box Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
MDN Web Docs. (2024). CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
Bootstrap Documentation. (2023). Bootstrap v5.3. Available at: https://getbootstrap.com/docs/5.3/

Responsive Design
The website layout automatically adjusts to different screen sizes, including mobile phones, tablets, and desktops. This was achieved using Bootstrap 5, which provides flexible grid systems and responsive components.

Interactive FAQ (Accordion)
On the service.html page, I added an accordion component using Vanilla JavaScript. This allows users to click on a question and reveal the answer, improving the overall user experience and keeping the page clean and easy to navigate.

Form Validation & AJAX
On the contactUs.html page, I implemented client-side form validation to ensure users fill in all required fields correctly. The form also uses AJAX submission, which sends the data without reloading the page and displays a success message after submission. This makes the inquiry process smoother and more user-friendly.

Author
Zandile
A developer with a passion for human-centered design, clear communication, and practical web solutions. This project reflects a commitment to usability, empathy, and thoughtful execution.

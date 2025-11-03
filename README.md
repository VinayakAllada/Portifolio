# Personal Portfolio Website - Vinayak Allada

This is the source code for my personal portfolio website, built for the Introductory Web Programming (IWP) Assignment-2. It is a clean, fully-responsive, single-page website designed to showcase my skills, projects, and experience as a Computer Science student at VNIT Nagpur.

The project is built from scratch using HTML, CSS, and JavaScript. It is **data-driven**, meaning all projects, skills, and timeline entries are loaded dynamically from a `data.js` file, making content updates clean and simple.

**Live Website Link:** [https://portifolio-4fbb-647t2pn2u-vinayak-alladas-projects.vercel.app/](https://portifolio-4fbb-647t2pn2u-vinayak-alladas-projects.vercel.app/)

## ✨ Features

* **Fully Responsive:** The layout adapts seamlessly from large desktops down to mobile phones.
* **Data-Driven Content:** All skills, projects, education, and awards are loaded from a single `data.js` file, keeping content separate from structure.
* **Light/Dark Mode:** Includes a theme toggler that saves the user's preference in `localStorage`.
* **Advanced Animations:**
    * On-scroll fade/slide animations using Intersection Observer.
    * Animated number counters for stats.
    * Animated progress bars for skills.
    * 3D card tilt effect on hover.
    * Subtle parallax effect on the hero image.
* **Interactive UI:**
    * Functional "burger" menu for mobile navigation.
    * Smooth scrolling when navigation links are clicked.
    * Active navigation link highlighting that tracks the user's scroll position.

## Assignment-2 Compliance

This project fulfills all the requirements specified in the assignment:

* [x] Short bio and photo: Included in the Hero section.
* [x] Relevant experience and skills: Included in the "Skills" section.
* [x] Personal projects: Included in the "Projects" section.
* [x] Documented source code: This `README.md` file and comments within the code.
* [x] Education: Included in the "Education" (timeline) section.
* [x] Awards/recognition: Included in the "Awards" section.

## 🛠️ Technical Stack

* **HTML5:** For the core structure and content skeleton.
* **CSS3:** For styling, layout (Flexbox & Grid), responsiveness (Media Queries), and themes (CSS Variables).
* **JavaScript (ES6+):** For all interactivity, data injection, theme switching, and animations (DOM Manipulation, Intersection Observer, `localStorage`).
* **Boxicons:** For the icon library.

## 📂 Project Structure
/portfolio-website
│
├─ index.html        → main HTML structure / sections
├─ style.css         → all custom styles + CSS variables
├─ script.js         → interactivity, scroll logic, animations
├─ data.js           → all portfolio content (skills, projects, etc.)
├─ profile-pic.jpg   → profile photo
└─ README.md         → documentation file

## 🚀 Getting Started

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VinayakAllada/Portifolio.git
    ```
    *(Note: Update this URL to your actual GitHub repository link)*

2.  **Navigate to the directory:**
    ```bash
    cd Portifolio
    ```

3.  **Open the file:**
    Since this is a static website, you can simply open the `index.html` file in your web browser.

    For the best experience (to avoid any potential `file:///` pathing issues), it's recommended to use a simple local server. If you use VS Code, you can install the **"Live Server"** extension, right-click `index.html`, and select "Open with Live Server".

## 🎨 How to Customize

This portfolio is designed to be easily updated. **Almost all content is in `data.js`**, not `index.html`.

### 1. Edit Content (The Easy Way) - `data.js`

Open the `data.js` file. This is where you will make 90% of your changes.

* **`portfolioData.skills`**: Edit, add, or remove skill objects in this array. The `level` property controls the width of the progress bar (e.g., `90` = 90%).
* **`portfolioData.projects`**: Edit the objects in this array. Update the `title`, `description`, `technologies` (an array of strings), `liveLink`, and `sourceCode`.
* **`portfolioData.education`**: Edit the objects in this array to update your education timeline.
* **`portfolioData.awards`**: Edit the objects in this array to update your awards.

### 2. Edit Personal Info - `index.html`

Open the `index.html` file for info that doesn't change often.

* **Update Head:**
    * Change the `<title>` to your name.
* **Hero Section (`id="home"`):**
    * **Photo:** Replace the `profile-pic.jpg` file in the folder with your own. Keep the filename the same, or update the `src` attribute in the `<img>` tag.
    * **Name:** Edit the text inside `<span class="hero-name">...</span>`.
    * **Bio:** Edit the text inside the `<p>` tags in the `.hero-content` div.
* **Contact Section (`id="contact"`):**
    * Update the `<span>` tags inside the `.contact-item` divs with your email, phone, and address.
    * Update the `href` attributes in the `.social-links` div to point to your actual GitHub, LinkedIn, and Instagram profiles.
* **Footer (`class="footer"`):**
    * Update the copyright year and name in the `<p>` tag.

### 3. Change Theme Colors - `style.css`

At the very top of `style.css`, you will find two `:root` blocks. You can change the entire website's color scheme just by editing these variables:

```css
/* Light Mode Colors */
:root {
  --primary: #1e3a8a;
  --secondary: #3b82f6;
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  /* ...and so on */
}

/* Dark Mode Colors */
:root[data-theme="dark"] {
  --primary: #60a5fa;
  --secondary: #3b82f6;
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
  /* ...and so on */
}

4. script.js
No changes are needed here unless you are adding or removing entire features.

License
This project is licensed under the MIT License.

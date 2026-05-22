# First_Landing_Page

PIXOPET LANDING PAGE
====================

WHAT THIS IS
------------
A single-page website that promotes PixoPet, a pixel-style virtual pet game.
Visitors see: a hero intro, three feature cards, an about story, three pricing
plans, and contact details. No database or server is required.


WEBSITE SECTIONS (what visitors see)
------------------------------------
1. Navigation  — Logo + links (Home, Features, About, Pricing, Contact)
2. Hero        — Main headline, description, two buttons, desktop/mobile game mockups
3. Features    — Bento grid: Choose Your Pet (rotating images), Decorate, Care
4. About       — Two alternating image/text rows + highlight bullet list
5. Pricing     — Free, Premium (highlighted), Deluxe with CTA buttons
6. Footer      — Email, phone, social links, copyright


FILES & WHAT THEY DO
--------------------
index.html   — All visible text, images, and page structure (EDIT CONTENT HERE)
style.css    — Colors, layout, borders, responsive design (EDIT LOOK HERE)
script.js    — Mobile menu, pet image carousel, smooth scroll (EDIT BEHAVIOR HERE)
image/       — All pictures used on the site (add/replace files here)
README.txt   — This guide


HOW TO VIEW THE SITE
--------------------
Double-click index.html, or use VS Code "Live Server" on the project folder.


CONTENT EDITOR GUIDE (text & images)
------------------------------------
Open index.html in a text editor. HTML comments mark each section.

  Change wording     → Edit text inside <h2>, <h3>, <p>, <li>, <button>
  Change a picture   → Update src="image/filename.png" on the <img> tag
  Add a new image    → Put file in image/ folder, then point src to it
  Browser tab title  → <title> and <meta name="description"> in <head>
  Menu labels        → Text inside <a href="#..."> in the navbar
  Pricing amounts    → Number inside <span class="price-number">
  Social links       → href="#" on Facebook/Twitter/Instagram in footer

Pet carousel (auto-changing pets in Features):
  → Edit the petImages list in script.js (paths must match image/ folder)
  → First slide also uses src on #pet-feature-img in index.html


DESIGN EDITOR GUIDE (colors & style)
------------------------------------
Open style.css. At the top, :root { } holds site-wide variables:

  --primary-color     Pink accents (buttons, headlines)
  --secondary-color   Purple accents
  --text-body         Main paragraph color (#2C1B3D)
  --shadow-brutal     Flat “game UI” shadow (5px offset)
  --border-dark       Black borders on cards/buttons

Changing a variable updates every place that uses it.

Section classes (for layout tweaks):
  .hero, .bento-grid, .about-row, .price-card, .price-card--featured


IMAGE FOLDER (image/)
---------------------
logo.png      — Hero mobile mockup, about section
home.jpg      — Hero desktop mockup, decorate feature
cats.png      — Pet carousel + background float
Dogs.png      — Pet carousel + background float
Bird.png      — Pet carousel + background float
fish.png      — Pet carousel + background float
Rep.png       — Pet carousel
Supplies.png  — Care feature, about section


TECH STACK
----------
HTML5, CSS3 (Grid/Flexbox, CSS variables), vanilla JavaScript (ES6+).
Fonts from Google: Press Start 2P (main titles only), Nunito (body text).


AUTHOR
------
Althelia — 2026

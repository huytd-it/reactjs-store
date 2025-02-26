
# KingShop 
Faction Shop is a modern food ordering website built with React and Vite, allowing users to browse menus, add items to the cart, and place orders seamlessly.

## 📜 Features

- 🛍️ Browse food categories and items  
- 🛒 Add items to the cart and adjust quantities  
- 💳 Secure checkout process  
- 🔍 Search and filter menu items  
- 📱 Fully responsive design  

## 🚀 Live Demo

[🔗 View Demo](https://huytd-it.github.io/reactjs-store/)

![alt text](/public/image.png)
## 📦 Installation

```sh
git clone https://github.com/huytd-it/my-first-store.git
cd your-repo-name
npm install
npm run dev
```
## Folder Structure

```txt
reactjs-store
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ App.test.jsx
│  ├─ assets
│  │  ├─ crown.svg
│  │  └─ shopping-bag.svg
│  ├─ components
│  │  ├─ card
│  │  │  ├─ card.component.jsx
│  │  │  └─ card.styles.css
│  │  ├─ card-list
│  │  │  ├─ card-list.component.jsx
│  │  │  └─ card-list.styles.css
│  │  ├─ cart-dropdown
│  │  │  ├─ cart-dropdown.component.jsx
│  │  │  └─ cart-dropdown.style.scss
│  │  ├─ cart-icon
│  │  │  ├─ cart-icon.component.jsx
│  │  │  └─ cart-icon.style.scss
│  │  ├─ cart-item
│  │  │  ├─ cart-item.component.jsx
│  │  │  └─ cart-item.styles.scss
│  │  ├─ checkout-item
│  │  │  ├─ checkout-item.component.jsx
│  │  │  └─ checkout-item.styles.scss
│  │  ├─ collection-item
│  │  │  ├─ collection-item.component.jsx
│  │  │  └─ collection-item.style.scss
│  │  ├─ collection-overview
│  │  │  ├─ collection-overview.component.jsx
│  │  │  └─ collection-overview.styles.scss
│  │  ├─ collection-preview
│  │  │  ├─ collection-preview.component.jsx
│  │  │  └─ collection-preview.style.scss
│  │  ├─ custom-button
│  │  │  ├─ custom-button.component.jsx
│  │  │  └─ custom-button.style.scss
│  │  ├─ directory
│  │  │  ├─ directory.component.jsx
│  │  │  └─ directory.style.scss
│  │  ├─ form-input
│  │  │  ├─ form-input.component.jsx
│  │  │  └─ form-input.style.scss
│  │  ├─ header
│  │  │  ├─ header.component.jsx
│  │  │  └─ header.style.scss
│  │  ├─ menu-item
│  │  │  ├─ menu-item.component.jsx
│  │  │  └─ menu-item.style.scss
│  │  ├─ search-box
│  │  │  ├─ search-box.component.jsx
│  │  │  └─ search-box.styles.css
│  │  ├─ sign-in
│  │  │  ├─ sign-in.component.jsx
│  │  │  └─ sign-in.style.scss
│  │  └─ sign-up
│  │     ├─ sign-up.component.jsx
│  │     └─ sign-up.styles.scss
│  ├─ firebase
│  │  └─ firebase.utils.jsx
│  ├─ index.css
│  ├─ logo.svg
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ checkout
│  │  │  ├─ checkout.component.jsx
│  │  │  └─ checkout.styles.scss
│  │  ├─ collection
│  │  │  ├─ collection.component.jsx
│  │  │  └─ collection.styles.scss
│  │  ├─ homepage
│  │  │  ├─ homepage.component.jsx
│  │  │  └─ homepage.style.scss
│  │  ├─ shop
│  │  │  ├─ shop.component.jsx
│  │  │  └─ shop.style.scss
│  │  └─ sign-in-and-sign-up
│  │     ├─ sign-in-and-sign-up.component.jsx
│  │     └─ sign-in-and-sign-up.style.scss
│  ├─ redux
│  │  ├─ cart
│  │  │  ├─ cart.actions.jsx
│  │  │  ├─ cart.reducer.jsx
│  │  │  ├─ cart.selectors.jsx
│  │  │  ├─ cart.types.jsx
│  │  │  └─ cart.utils.jsx
│  │  ├─ directory
│  │  │  ├─ directory.reducer.jsx
│  │  │  └─ directory.selectors.jsx
│  │  ├─ root-recuder.jsx
│  │  ├─ shop
│  │  │  ├─ shop.data.jsx
│  │  │  ├─ shop.reducer.jsx
│  │  │  └─ shop.selectors.jsx
│  │  ├─ store.jsx
│  │  └─ user
│  │     ├─ user.actions.jsx
│  │     ├─ user.reducer.jsx
│  │     ├─ user.selectors.jsx
│  │     └─ user.types.jsx
│  ├─ reportWebVitals.jsx
│  └─ setupTests.jsx
├─ structure.txt
└─ vite.config.js

```
## 🎨 Design Prototype

Check out the UI/UX design on Figma:  

[🔗 Figma Design](https://www.figma.com/design/cuDRzFIrO9VEAZCG4kKAYF/Food-Delivery-Website-%26-App-Design-UI-Kit-(Community)-(Copy)?node-id=4-2&t=p0q5xmjnjnZNl1aM-0)

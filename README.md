# DzTech Store — WAMD TD-TP 2

A responsive e-commerce frontend built with React and Redux Toolkit for the WAMD TD-TP 2 assignment. It demonstrates reusable React components, JSX, props, local state, events, and global shopping-cart state with Redux.

## Features
- Responsive electronics product catalog
- Search by product name, category, or description
- Category filtering
- Product cards with prices, ratings, favorite toggle, and add-to-cart buttons
- Redux-powered cart with quantity controls, remove item, clear cart, and subtotal
- Checkout demo notice (no real payment processing)
- Responsive layout for desktop and mobile

## Technologies
- React 18 and JSX
- JavaScript ES modules
- Redux Toolkit and React-Redux
- Vite
- Lucide React icons
- CSS3

## Main components
- `src/App.jsx` — page layout, search/filter state, hero, catalog, and footer
- `src/components/Navbar.jsx` — branding, search, and cart item count
- `src/components/ProductCard.jsx` — reusable product card and favorite state
- `src/components/CartDrawer.jsx` — cart UI and quantity controls
- `src/store.js` — Redux store, cart actions, and reducer logic
- `src/products.js` — sample product data and price formatter

## Redux state
The `cart` slice stores `items`. Each item includes product data and `quantity`. Actions include `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, and `clearCart`.

## Run locally
Install Node.js LTS from https://nodejs.org/ first. In a terminal opened in this project folder, run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To create a production build, run `npm run build`.

## Student information
- Student name: BOUKAHEL Zahreddine
- Store name: DzTech Store
- GitHub repository: https://github.com/zahreddine-b

Update this README with the final repository URL and add screenshots before submitting through Classroom.

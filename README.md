1. Initialize the next project with: npx create-next-app@latest ./ (./ puts the project in the current folder)

2. Remove content in app/page.js. The main tag can remain, with the current styling.
3. Create the ProductCards component (look at the comments inside of the component to see how it works (app/components/ProductCards.jsx))
4. Create the folders and file for the dynamic route:
   4.1. add folder: app/products
   4.2. add folder: app/products/[products]
   4.3. add file: app/products/[products]/page.js
5. Create the page for the dynamic route (look at the comments inside of the page to see how it works (app/products/[products]/page.js))

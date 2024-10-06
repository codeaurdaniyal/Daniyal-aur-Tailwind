## `*` Setup Tailwind with CLI

> `1.` Initialize **package.json** : `npm inti -y`

> `2.` Installs Tailwind : `npm install -D tailwindcss`

- **Note** : **node_module** folder is not for production

> `3.` Initializes a **tailwind.config.js** : `npx tailwindcss init`

> `4.` Paste this inside **tailwind.config.js** :
<!-- Paste This Code -->
```r
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- **Note** : **' * '** matches any filename characters, and **' ** '** matches files in all subdirectories

> `5.` Create a **src** folder, then add a file named **input.css** inside it, and insert the following content into the file : 
<!-- Paste This Code -->
```r
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> `6.` This compiles the **input.css** file into your given file `npx tailwindcss -i ./src/input.css -o ./dict/style.css --watch`

- **Note** : The **--watch** flag ensures the CSS file is rebuilt automatically when changes are detected
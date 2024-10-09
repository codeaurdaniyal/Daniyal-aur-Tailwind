## Minify Tailwind CSS 

> `1.` For **Development** :
```r
npx tailwindcss -o ./dist/website.css --minify
```

> `2.` For **Production** :
```r
npx cross-env NODE_ENV=production npx tailwindcss -o ./dist/website.css --minify
```
- **Note** : Production: Use NODE_ENV=production (with cross-env for Windows) to remove unused CSS and make the file as small as possible
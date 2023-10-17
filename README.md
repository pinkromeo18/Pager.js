# Pager.js
Pager.js Pager.css

```
https://pinkromeo18.github.io/Pager.js/
```

```css
@import url(https://pinkromeo18.github.io/Pager.js/Pager.css);
```
```js
import {Pager} from "https://pinkromeo18.github.io/Pager.js/Pager.js"
```
```js
//usage
import {Pager} from "https://pinkromeo18.github.io/Pager.js/Pager.js"

var pager=Pager();
pager.add({
  html:"<p></p><p>xxx</p>",
  css:`background-image: url(https://mae.chab.in/wp-content/uploads/2015/09/QsjPn.jpg);`
}).add({
  html:"<input type='text'></input><button>呼び出し</button>",
  css:"background-color: #ccc;"
}).add({
  html:"３番",
  css:"background-color: #333;"
});
var page2=pager.page(2);

```

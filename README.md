# Pager.js
Pager.js Pager.css
### demo >> https://codepen.io/pinkromeo/pen/yLGdVOX?editors=0010
```
https://pinkromeo18.github.io/Pager.js/
```

```css
@import url(https://pinkromeo18.github.io/Pager.js/Pager.css);
```
```js
//@import url(https://pinkromeo18.github.io/Pager.js/Pager.css);
import {Pager} from "https://pinkromeo18.github.io/Pager.js/Pager.js"
```
```js
/*pager sample*/
var pager=Pager("app")
pager.add({
  id:"yyy",
  innerHTML:"xxxya",
  style:"background:#234; color:ghostwhite;"
}).add({
  id:"zzz",
  innerHTML:"xxxya",
  style:"background:orange; color:black;"
})
pager.page(2).textContent="this is page 2"
pager.q("#yyy").textContent="id #yyy"
console.log(pager)

```

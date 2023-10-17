/*v1.1 need Pager.css*/
/*
//@import url(https://pinkromeo18.github.io/Pager.js/Pager.css);
import {Pager} from "https://pinkromeo18.github.io/Pager.js/Pager.js"
//pager sample
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
*/

export function Pager(id){
  const topclass="pages",pageclass="page"
  var o={}
  o.count = 1;
  o.dom=document.getElementById(id)||document.body
  o.dom.classList.add(topclass)
  //
  o.add=(obj)=>{
    var el = Object.assign(document.createElement('div'),obj)    
    el.classList.add(pageclass)
    el.classList.add(`${pageclass}-${o.count}`)
    o.dom.appendChild(el)
    o.count++;
    return o
  }
  o.page=(num)=>{
    var el= o.dom.querySelector(`.${pageclass}-${num}`)
    return el
  }
  o.q=(query)=>o.dom.querySelector(query)
  ;
  return Object.assign({},o,{topclass,pageclass})
}

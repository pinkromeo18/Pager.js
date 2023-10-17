/*v1.0 need Pager.css*/
/*import {Pager} from "..../Pager.js" */

/*usage 
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


{
  var page1 =pager.page(1).querySelector('p')
  page1.textContent="zzzz"
  var count = 1
  var po1 = Polling(()=>{
    page1.textContent= count++
  },1000)
  po1.start()
}
*/

export function Pager(id){

  const topclass ="pages",pageclass="page"
  var o={}
    o.topdom = isObject(id)?id:document.getElementById(id)
    if(isNullable(o.topdom)){
      o.topdom =document.body
      console.error("Pager: id notfound. set the body")
    }  
    o.topdom.classList.add(topclass)
    o.totalPage=0
    o.topclass =topclass
    o.pageclass=pageclass
    ;
    o.add =(_html,css)=>{
      if(isObject(_html)){
        let {html,css}=_html;
        return o.add(html,css)
      }
      o.totalPage++;
      var el = createPage(o.totalPage);
      el.innerHTML = _html||o.totalPage
      el.setAttribute("style",css||"");
      o.topdom.appendChild(el)
      return o
    }
    o.page=(number)=>{
      var q = `.${pageclass}-${number}`
      return document.querySelector(q)
    }
    
    return Object.assign({},o)
  ;
  
  function isNullable(d){
    return d===null || d=== undefined
  }
  function isObject(d) {
    return d !== null && typeof d === 'object'
  }
  function createPage(number){
    var d =document.createElement("div")
    d.classList.add(pageclass)
    var c = `${pageclass}-${number}`
    d.classList.add(c)
    return d    
  }
}


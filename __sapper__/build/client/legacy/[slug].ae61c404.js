import{c as t,d as n,e,f as s,g as a,h as o,a as r,i,j as c,k as u,m as l,v as p,n as f,o as h,p as d,q as m,r as x,w as g,b as v}from"./chunk.58b01c26.js";import{a as b,b as k}from"./chunk.35609c73.js";function y(t){var n,e,s,a,o,r,i=t.post.metadata.title,b=t.post.html;return document.title=n=t.post.metadata.title,{c:function(){e=l(),s=c("h1"),a=p(i),o=l(),r=c("div"),this.h()},l:function(t){e=f(t,"\n\n"),s=h(t,"H1",{},!1);var n=d(s);a=f(n,i),n.forEach(m),o=f(t,"\n\n"),r=h(t,"DIV",{class:!0},!1),d(r).forEach(m),this.h()},h:function(){r.className="content svelte-gnxal1"},m:function(t,n){x(t,e,n),x(t,s,n),u(s,a),x(t,o,n),x(t,r,n),r.innerHTML=b},p:function(t,e){t.post&&n!==(n=e.post.metadata.title)&&(document.title=n),t.post&&i!==(i=e.post.metadata.title)&&g(a,i),t.post&&b!==(b=e.post.html)&&(r.innerHTML=b)},i:v,o:v,d:function(t){t&&(m(e),m(s),m(o),m(r))}}}function w(t){return j.apply(this,arguments)}function j(){return(j=b(k.mark(function t(n){var e,s,a;return k.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,n.query,t.next=3,this.fetch("".concat(e.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e("post",s=t.post)},{post:s}}export default(function(l){function p(t){var i,l;return n(this,p),i=e(this,s(p).call(this)),document.getElementById("svelte-gnxal1-style")||((l=c("style")).id="svelte-gnxal1-style",l.textContent=".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",u(document.head,l)),a(o(i),t,E,y,r,["post"]),i}return t(p,i),p}());export{w as preload};
//# sourceMappingURL=[slug].ae61c404.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),o=a(3),l=a.n(o),i=a(14),u=a(2),p=a(15),m=a.n(p),f=function(e){var t=e.posts;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("ul",{className:"list-group mb-4"},t.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)}))},g=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{className:"page-item",key:e},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))})))};a(40);var b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),p=o[0],b=o[1],d=Object(n.useState)(1),E=Object(u.a)(d,2),h=E[0],j=E[1],v=Object(n.useState)(7),O=Object(u.a)(v,2),w=O[0];O[1],Object(n.useEffect)(function(){!function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,m.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,c(t.data),b(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var k=h*w,y=k-w,N=a.slice(y,k);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"text-primary mb-3"}," My App "),r.a.createElement(f,{posts:N,loading:p}),r.a.createElement(g,{postsPerPage:w,totalPosts:a.length,paginate:function(e){return j(e)}}))};s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2651563e.chunk.js.map
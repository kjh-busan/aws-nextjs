(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),c=n.n(a),r=n("pLtp"),l=n.n(r),i=n("O40h"),u=n("q1tI"),o=n.n(u),s=n("/MKj"),p=n("doui"),d=n("Vl3Y"),f=n("5rEg"),m=n("2/Rp"),b=n("p+NB"),h=function(){var e=Object(s.b)(),t=Object(u.useState)(""),n=Object(p.default)(t,2),a=n[0],c=n[1],r=Object(s.c)(function(e){return e.post}),l=r.imagePaths,i=r.isAddingPost,h=r.postAdded,E=Object(u.useRef)();Object(u.useEffect)(function(){c("")},[!0===h]);var g=Object(u.useCallback)(function(t){if(t.preventDefault(),!a||!a.trim())return alert("게시글을 작성하세요.");var n=new FormData;l.forEach(function(e){n.append("image",e)}),n.append("content",a),e({type:b.e,data:n})},[a,l]),v=Object(u.useCallback)(function(e){c(e.target.value)},[]),w=Object(u.useCallback)(function(t){console.log(t.target.files);var n=new FormData;[].forEach.call(t.target.files,function(e){n.append("image",e)}),e({type:b.J,data:n})},[]),j=Object(u.useCallback)(function(){E.current.click()},[E.current]),y=Object(u.useCallback)(function(t){return function(){e({type:b.y,index:t})}},[]);return o.a.createElement(d.a,{style:{margin:"10px 0 20px"},encType:"multipart/form-data",onSubmit:g},o.a.createElement(f.a.TextArea,{maxLength:140,placeholder:"어떤 신기한 일이 있었나요?",value:a,onChange:v}),o.a.createElement("div",null,o.a.createElement("input",{type:"file",multiple:!0,hidden:!0,ref:E,onChange:w}),o.a.createElement(m.a,{onClick:j},"이미지 업로드"),o.a.createElement(m.a,{type:"primary",style:{float:"right"},htmlType:"submit",loading:i},"짹짹")),o.a.createElement("div",null,l.map(function(e,t){return o.a.createElement("div",{key:e,style:{display:"inline-block"}},o.a.createElement("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),o.a.createElement("div",null,o.a.createElement(m.a,{onClick:y(t)},"제거")))})))},E=n("uor+"),g=function(){var e=Object(s.c)(function(e){return e.user}).me,t=Object(s.c)(function(e){return e.post}),n=t.mainPosts,a=t.hasMorePost,c=Object(s.b)(),r=Object(u.useRef)([]),l=Object(u.useCallback)(function(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&a){var e=n[n.length-1].id;r.current.includes(e)||(c({type:b.q,lastId:e}),r.current.push(e))}},[a,n.length]);return Object(u.useEffect)(function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}},[n.length]),o.a.createElement("div",null,e&&o.a.createElement(h,null),n.map(function(e){return o.a.createElement(E.a,{key:e.id,post:e})}))};g.getInitialProps=function(){var e=Object(i.default)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(l()(t)),t.store.dispatch({type:b.q});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=g},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);
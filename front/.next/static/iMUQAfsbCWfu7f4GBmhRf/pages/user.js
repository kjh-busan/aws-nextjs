(window.webpackJsonp=window.webpackJsonp||[]).push([["556f"],{"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,n){e.exports=n("uekQ")},BvRO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){var e=n("R2GR");return{page:e.default||e}}])},R2GR:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("6BQ9"),u=n.n(o),c=n("O40h"),i=n("q1tI"),l=n.n(i),s=n("/MKj"),p=n("bx4M"),f=n("Tckk"),d=n("p+NB"),v=n("LAVF"),m=n("uor+"),w=function(){var e=Object(s.c)(function(e){return e.post}).mainPosts,t=Object(s.c)(function(e){return e.user}).userInfo;return l.a.createElement("div",null,t?l.a.createElement(p.a,{actions:[l.a.createElement("div",{key:"twit"},"짹짹",l.a.createElement("br",null),t.Posts),l.a.createElement("div",{key:"following"},"팔로잉",l.a.createElement("br",null),t.Followings),l.a.createElement("div",{key:"follower"},"팔로워",l.a.createElement("br",null),t.Followers)]},l.a.createElement(p.a.Meta,{avatar:l.a.createElement(f.a,null,t.nickname[0]),title:t.nickname})):null,e.map(function(e){return l.a.createElement(m.a,{key:e.id,post:e})}))};w.getInitialProps=function(){var e=Object(c.default)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u()(t.query.id,10),console.log("user getInitialProps",n),t.store.dispatch({type:v.o,data:n}),t.store.dispatch({type:d.w,data:n}),e.abrupt("return",{id:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.default=w},XWtR:function(e,t,n){var r=n("5T2Y").parseInt,a=n("oc46").trim,o=n("5pKv"),u=/^[-+]?0[xX]/;e.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(e,t){var n=a(String(e),3);return r(n,t>>>0||(u.test(n)?16:10))}:r},dEVD:function(e,t,n){var r=n("Y7ZC"),a=n("XWtR");r(r.G+r.F*(parseInt!=a),{parseInt:a})},oc46:function(e,t,n){var r=n("Y7ZC"),a=n("Jes0"),o=n("KUxP"),u=n("5pKv"),c="["+u+"]",i=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,n){var a={},c=o(function(){return!!u[e]()||"​"!="​"[e]()}),i=a[e]=c?t(p):u[e];n&&(a[n]=i),r(r.P+r.F*c,"String",a)},p=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},uekQ:function(e,t,n){n("dEVD"),e.exports=n("WEpk").parseInt}},[["BvRO","5d41","9da1"]]]);
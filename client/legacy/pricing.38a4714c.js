import{_ as t,a as n,b as e,c as r,i,s as a,d as c,S as o,e as s,t as u,h as l,j as f,k as d,l as p,o as h,p as v,q as m,u as g,D as $,G as y,f as _,m as D,y as E,H as w,I as q,v as x,w as R,z as S,g as b,n as A,r as I,x as P,O as U,M as V}from"./client.85b15757.js";function L(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return e(this,i)}}function j(t){var n,e,r;return{c:function(){n=s("section"),e=s("h1"),r=u("Pricing"),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var i=f(n);e=l(i,"H1",{class:!0});var a=f(e);r=d(a,"Pricing"),a.forEach(p),i.forEach(p),this.h()},h:function(){h(e,"class","pricing__header__title svelte-w1be1x"),h(n,"class","pricing__header svelte-w1be1x")},m:function(t,i){v(t,n,i),m(n,e),m(e,r)},p:g,i:g,o:g,d:function(t){t&&p(n)}}}var k=function(n){t(s,o);var e=L(s);function s(t){var n;return r(this,s),n=e.call(this),i(c(n),t,null,j,a,{}),n}return s}();function C(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return e(this,i)}}var M=function(t){return{}},H=function(t){return{}};function N(t,n,e){var r=t.slice();return r[5]=n[e],r}function O(t){var n,e,r=t[5]+"";return{c:function(){n=s("li"),e=u(r),this.h()},l:function(t){n=l(t,"LI",{class:!0});var i=f(n);e=d(i,r),i.forEach(p),this.h()},h:function(){h(n,"class","pricing-card__feature-list__item svelte-fichrw")},m:function(t,r){v(t,n,r),m(n,e)},p:function(t,n){4&n&&r!==(r=t[5]+"")&&$(e,r)},d:function(t){t&&p(n)}}}function F(t){for(var n,e,r,i,a,c,o,g,b,A,I,P=t[2],U=[],V=0;V<P.length;V+=1)U[V]=O(N(t,P,V));var L=t[4].footer,j=y(L,t,t[3],H);return{c:function(){n=s("div"),e=s("h3"),r=u(t[0]),i=_(),a=s("p"),c=u(t[1]),o=_(),g=s("ul");for(var l=0;l<U.length;l+=1)U[l].c();b=_(),A=s("div"),j&&j.c(),this.h()},l:function(s){n=l(s,"DIV",{class:!0});var u=f(n);e=l(u,"H3",{class:!0});var h=f(e);r=d(h,t[0]),h.forEach(p),i=D(u),a=l(u,"P",{class:!0});var v=f(a);c=d(v,t[1]),v.forEach(p),o=D(u),g=l(u,"UL",{class:!0});for(var m=f(g),$=0;$<U.length;$+=1)U[$].l(m);m.forEach(p),b=D(u),A=l(u,"DIV",{class:!0});var y=f(A);j&&j.l(y),y.forEach(p),u.forEach(p),this.h()},h:function(){h(e,"class","pricing-card__title svelte-fichrw"),h(a,"class","pricing-card__description svelte-fichrw"),h(g,"class","pricing-card__feature-list svelte-fichrw"),h(A,"class","pricing-card__footer svelte-fichrw"),h(n,"class","pricing-card svelte-fichrw")},m:function(t,s){v(t,n,s),m(n,e),m(e,r),m(n,i),m(n,a),m(a,c),m(n,o),m(n,g);for(var u=0;u<U.length;u+=1)U[u].m(g,null);m(n,b),m(n,A),j&&j.m(A,null),I=!0},p:function(t,n){var e=E(n,1)[0];if((!I||1&e)&&$(r,t[0]),(!I||2&e)&&$(c,t[1]),4&e){var i;for(P=t[2],i=0;i<P.length;i+=1){var a=N(t,P,i);U[i]?U[i].p(a,e):(U[i]=O(a),U[i].c(),U[i].m(g,null))}for(;i<U.length;i+=1)U[i].d(1);U.length=P.length}j&&j.p&&8&e&&j.p(w(L,t,t[3],H),q(L,t[3],e,M))},i:function(t){I||(x(j,t),I=!0)},o:function(t){R(j,t),I=!1},d:function(t){t&&p(n),S(U,t),j&&j.d(t)}}}function G(t,n,e){var r=n.title,i=void 0===r?"":r,a=n.description,c=void 0===a?"":a,o=n.features,s=void 0===o?[]:o,u=n.$$slots,l=void 0===u?{}:u,f=n.$$scope;return t.$set=function(t){"title"in t&&e(0,i=t.title),"description"in t&&e(1,c=t.description),"features"in t&&e(2,s=t.features),"$$scope"in t&&e(3,f=t.$$scope)},[i,c,s,f,l]}var T=function(n){t(s,o);var e=C(s);function s(t){var n;return r(this,s),n=e.call(this),i(c(n),t,G,F,a,{title:0,description:1,features:2}),n}return s}();function W(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return e(this,i)}}function Q(t){var n,e,r,i,a,c;return{c:function(){n=s("div"),e=s("h3"),r=u("USD 200"),i=_(),a=s("span"),c=u("+USD 20 per 1000 Monthly Active Users"),this.h()},l:function(t){n=l(t,"DIV",{slot:!0});var o=f(n);e=l(o,"H3",{class:!0});var s=f(e);r=d(s,"USD 200"),s.forEach(p),i=D(o),a=l(o,"SPAN",{class:!0});var u=f(a);c=d(u,"+USD 20 per 1000 Monthly Active Users"),u.forEach(p),o.forEach(p),this.h()},h:function(){h(e,"class","pricing-table__card__price-text svelte-1vjkss1"),h(a,"class","pricing-table__card__price-subtext svelte-1vjkss1"),h(n,"slot","footer")},m:function(t,o){v(t,n,o),m(n,e),m(e,r),m(n,i),m(n,a),m(a,c)},d:function(t){t&&p(n)}}}function z(t){var n;return{c:function(){n=u("Pricing: Contact Us")},l:function(t){n=d(t,"Pricing: Contact Us")},m:function(t,e){v(t,n,e)},d:function(t){t&&p(n)}}}function B(t){var n,e,r=new U({props:{fluid:!0,large:!0,href:"mailto:hello@authgear.com",$$slots:{default:[z]},$$scope:{ctx:t}}});return{c:function(){n=s("div"),b(r.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{slot:!0});var e=f(n);A(r.$$.fragment,e),e.forEach(p),this.h()},h:function(){h(n,"slot","footer")},m:function(t,i){v(t,n,i),I(r,n,null),e=!0},p:function(t,n){var e={};1&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i:function(t){e||(x(r.$$.fragment,t),e=!0)},o:function(t){R(r.$$.fragment,t),e=!1},d:function(t){t&&p(n),P(r)}}}function J(t){var n,e,r,i,a,c,o,u,d,g=new T({props:{title:"Free",description:"Use all features of Authgear to boost your app's security\n          and develop faster",features:["1,000 Monthly Active Users","1 Day of Log Retention","Account remove if no activities for 60 days","No SLA","Community Support"]}}),$=new T({props:{title:"Startups",description:"Grow without pain and security",features:["1,000 Monthly Active Users","Up to 10 Days of Log Retention","AD, LDAP, SAML support","Passwordless Login / Verify by SMS","Email Support"],$$slots:{footer:[Q]},$$scope:{ctx:t}}}),y=new T({props:{title:"Enterprise",description:"Run Authgear for your mission-critical applications",features:["Managed SaaS or Private Cloud Deployment","Enterprise Grade SLA support","Professional Support and Services","Anomaly Detection","Audited Reports"],$$slots:{footer:[B]},$$scope:{ctx:t}}});return{c:function(){n=s("section"),e=s("div"),r=s("div"),i=s("div"),b(g.$$.fragment),a=_(),c=s("div"),b($.$$.fragment),o=_(),u=s("div"),b(y.$$.fragment),this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var s=f(n);e=l(s,"DIV",{class:!0});var d=f(e);r=l(d,"DIV",{class:!0});var h=f(r);i=l(h,"DIV",{class:!0});var v=f(i);A(g.$$.fragment,v),v.forEach(p),a=D(h),c=l(h,"DIV",{class:!0});var m=f(c);A($.$$.fragment,m),m.forEach(p),o=D(h),u=l(h,"DIV",{class:!0});var _=f(u);A(y.$$.fragment,_),_.forEach(p),h.forEach(p),d.forEach(p),s.forEach(p),this.h()},h:function(){h(i,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-1vjkss1"),h(c,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-1vjkss1"),h(u,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-1vjkss1"),h(r,"class","row"),h(e,"class","container-fluid svelte-1vjkss1"),h(n,"class","pricing-table svelte-1vjkss1")},m:function(t,s){v(t,n,s),m(n,e),m(e,r),m(r,i),I(g,i,null),m(r,a),m(r,c),I($,c,null),m(r,o),m(r,u),I(y,u,null),d=!0},p:function(t,n){var e=E(n,1)[0],r={};1&e&&(r.$$scope={dirty:e,ctx:t}),$.$set(r);var i={};1&e&&(i.$$scope={dirty:e,ctx:t}),y.$set(i)},i:function(t){d||(x(g.$$.fragment,t),x($.$$.fragment,t),x(y.$$.fragment,t),d=!0)},o:function(t){R(g.$$.fragment,t),R($.$$.fragment,t),R(y.$$.fragment,t),d=!1},d:function(t){t&&p(n),P(g),P($),P(y)}}}var K=function(n){t(s,o);var e=W(s);function s(t){var n;return r(this,s),n=e.call(this),i(c(n),t,null,J,a,{}),n}return s}();function X(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return e(this,i)}}function Y(t,n,e){var r=t.slice();return r[1]=n[e],r}function Z(t){var n,e,r,i,a,c,o,$=t[1].question+"",y=t[1].answer+"";return{c:function(){n=s("div"),e=s("h3"),r=u($),i=_(),a=s("p"),c=u(y),o=_(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=f(n);e=l(s,"H3",{class:!0});var u=f(e);r=d(u,$),u.forEach(p),i=D(s),a=l(s,"P",{class:!0});var h=f(a);c=d(h,y),h.forEach(p),o=D(s),s.forEach(p),this.h()},h:function(){h(e,"class","faq__item-question svelte-1drnr7m"),h(a,"class","faq__item-answer svelte-1drnr7m"),h(n,"class","faq__item-wrapper col-12 col-md-6 svelte-1drnr7m")},m:function(t,s){v(t,n,s),m(n,e),m(e,r),m(n,i),m(n,a),m(a,c),m(n,o)},p:g,d:function(t){t&&p(n)}}}function tt(t){for(var n,e,r,i,a,c,o,$,y=t[0],w=[],q=0;q<y.length;q+=1)w[q]=Z(Y(t,y,q));return{c:function(){n=s("section"),e=s("div"),r=s("div"),i=s("div"),a=s("h1"),c=u("FAQ"),o=_(),$=s("div");for(var t=0;t<w.length;t+=1)w[t].c();this.h()},l:function(t){n=l(t,"SECTION",{class:!0});var s=f(n);e=l(s,"DIV",{class:!0});var u=f(e);r=l(u,"DIV",{class:!0});var h=f(r);i=l(h,"DIV",{class:!0});var v=f(i);a=l(v,"H1",{class:!0});var m=f(a);c=d(m,"FAQ"),m.forEach(p),v.forEach(p),h.forEach(p),o=D(u),$=l(u,"DIV",{class:!0});for(var g=f($),y=0;y<w.length;y+=1)w[y].l(g);g.forEach(p),u.forEach(p),s.forEach(p),this.h()},h:function(){h(a,"class","faq__header-title svelte-1drnr7m"),h(i,"class","col-12"),h(r,"class","row"),h($,"class","row"),h(e,"class","container-fluid svelte-1drnr7m"),h(n,"class","faq svelte-1drnr7m")},m:function(t,s){v(t,n,s),m(n,e),m(e,r),m(r,i),m(i,a),m(a,c),m(e,o),m(e,$);for(var u=0;u<w.length;u+=1)w[u].m($,null)},p:function(t,n){var e=E(n,1)[0];if(1&e){var r;for(y=t[0],r=0;r<y.length;r+=1){var i=Y(t,y,r);w[r]?w[r].p(i,e):(w[r]=Z(i),w[r].c(),w[r].m($,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=y.length}},i:g,o:g,d:function(t){t&&p(n),S(w,t)}}}function nt(t){return[[{question:"Can I export all users data if I stop using Authgear?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{question:"What is the definition of monthly active users?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{question:"What's Authgear's uptime and SLA commitment?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{question:"Why should I trust Authgear with my users data?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]]}var et=function(n){t(s,o);var e=X(s);function s(t){var n;return r(this,s),n=e.call(this),i(c(n),t,nt,tt,a,{}),n}return s}();function rt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return e(this,i)}}function it(t){var n,e,r,i,a=new k({}),c=new K({}),o=new et({});return{c:function(){n=_(),b(a.$$.fragment),e=_(),b(c.$$.fragment),r=_(),b(o.$$.fragment),this.h()},l:function(t){V('[data-svelte="svelte-yjqvwb"]',document.head).forEach(p),n=D(t),A(a.$$.fragment,t),e=D(t),A(c.$$.fragment,t),r=D(t),A(o.$$.fragment,t),this.h()},h:function(){document.title="Pricing - Authgear"},m:function(t,s){v(t,n,s),I(a,t,s),v(t,e,s),I(c,t,s),v(t,r,s),I(o,t,s),i=!0},p:g,i:function(t){i||(x(a.$$.fragment,t),x(c.$$.fragment,t),x(o.$$.fragment,t),i=!0)},o:function(t){R(a.$$.fragment,t),R(c.$$.fragment,t),R(o.$$.fragment,t),i=!1},d:function(t){t&&p(n),P(a,t),t&&p(e),P(c,t),t&&p(r),P(o,t)}}}var at=function(n){t(s,o);var e=rt(s);function s(t){var n;return r(this,s),n=e.call(this),i(c(n),t,null,it,a,{}),n}return s}();export default at;

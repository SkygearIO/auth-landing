import{S as s,i as e,s as a,e as t,a as r,t as l,c,b as i,d as o,f as n,g as h,h as m,j as f,k as u,l as d,n as g,m as v,o as p,p as $,q as E,r as I,u as y,v as w,w as b}from"./client.26a5e3f2.js";function D(s){let e,a,v,p,$,E;return{c(){e=t("form"),a=t("input"),v=r(),p=t("button"),$=l("Talk to Us"),this.h()},l(s){e=c(s,"FORM",{class:!0});var t=i(e);a=c(t,"INPUT",{class:!0,type:!0,placeholder:!0}),v=o(t),p=c(t,"BUTTON",{class:!0,type:!0});var r=i(p);$=n(r,"Talk to Us"),r.forEach(h),t.forEach(h),this.h()},h(){m(a,"class","email-input svelte-twuqp6"),m(a,"type","email"),m(a,"placeholder","Your Email"),m(p,"class","submit-btn svelte-twuqp6"),m(p,"type","submit"),m(e,"class","contact-wrapper svelte-twuqp6")},m(s,t,r){f(s,e,t),u(e,a),u(e,v),u(e,p),u(p,$),r&&E(),E=d(e,"submit",_)},p:g,i:g,o:g,d(s){s&&h(e),E()}}}function _(s){s.preventDefault()}class S extends s{constructor(s){super(),e(this,s,null,D,a,{})}}function V(s){let e,a,d,w,b,D,_,V,k,x,T,C,L,M,A;const O=new S({});return{c(){e=t("section"),a=t("div"),d=t("div"),w=t("div"),b=t("h1"),D=l("Don't Compromise Security, Let us help"),_=r(),V=t("p"),k=l("Rapidly integrate authentication for your web and mobile applications,\n          with security and reliability"),x=r(),v(O.$$.fragment),T=r(),C=t("div"),L=t("img"),this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var r=i(a);d=c(r,"DIV",{class:!0});var l=i(d);w=c(l,"DIV",{class:!0});var m=i(w);b=c(m,"H1",{class:!0});var f=i(b);D=n(f,"Don't Compromise Security, Let us help"),f.forEach(h),_=o(m),V=c(m,"P",{class:!0});var u=i(V);k=n(u,"Rapidly integrate authentication for your web and mobile applications,\n          with security and reliability"),u.forEach(h),x=o(m),p(O.$$.fragment,m),m.forEach(h),T=o(l),C=c(l,"DIV",{class:!0});var g=i(C);L=c(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(h),l.forEach(h),r.forEach(h),t.forEach(h),this.h()},h(){m(b,"class","svelte-fox7ad"),m(V,"class","svelte-fox7ad"),m(w,"class","col-12 col-md-5 t tagline svelte-fox7ad"),m(L,"class","hero-img svelte-fox7ad"),L.src!==(M="hero-header-img.png")&&m(L,"src","hero-header-img.png"),m(L,"alt","Hero Header"),m(C,"class","hero-img-wrapper col-12 col-md-7 svelte-fox7ad"),m(d,"class","row"),m(a,"class","container-fluid svelte-fox7ad"),m(e,"class","hero-section svelte-fox7ad")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(d,w),u(w,b),u(b,D),u(w,_),u(w,V),u(V,k),u(w,x),$(O,w,null),u(d,T),u(d,C),u(C,L),A=!0},p:g,i(s){A||(E(O.$$.fragment,s),A=!0)},o(s){I(O.$$.fragment,s),A=!1},d(s){s&&h(e),y(O)}}}class k extends s{constructor(s){super(),e(this,s,null,V,a,{})}}function x(s,e,a){const t=s.slice();return t[1]=e[a],t}function T(s){let e,a,d,v,p,$,E,I,y,w,b,D,_=s[1].title+"",S=s[1].description+"";return{c(){e=t("div"),a=t("div"),d=t("img"),$=r(),E=t("h3"),I=l(_),y=r(),w=t("p"),b=l(S),D=r(),this.h()},l(s){e=c(s,"DIV",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var r=i(a);d=c(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(h),$=o(t),E=c(t,"H3",{class:!0});var l=i(E);I=n(l,_),l.forEach(h),y=o(t),w=c(t,"P",{class:!0});var m=i(w);b=n(m,S),m.forEach(h),D=o(t),t.forEach(h),this.h()},h(){m(d,"class","feature-img svelte-hirava"),d.src!==(v=s[1].imgSrc)&&m(d,"src",v),m(d,"alt",p=s[1].title),m(a,"class","feature-img-wrapper svelte-hirava"),m(E,"class","feature-title svelte-hirava"),m(w,"class","feature-description svelte-hirava"),m(e,"class","feature-wrapper col-12 col-md-3 svelte-hirava")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(e,$),u(e,E),u(E,I),u(e,y),u(e,w),u(w,b),u(e,D)},p:g,d(s){s&&h(e)}}}function C(s){let e,a,r,l=s[0],o=[];for(let e=0;e<l.length;e+=1)o[e]=T(x(s,l,e));return{c(){e=t("section"),a=t("div"),r=t("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var l=i(a);r=c(l,"DIV",{class:!0});var n=i(r);for(let s=0;s<o.length;s+=1)o[s].l(n);n.forEach(h),l.forEach(h),t.forEach(h),this.h()},h(){m(r,"class","row"),m(a,"class","container-fluid svelte-hirava"),m(e,"class","features-section svelte-hirava")},m(s,t){f(s,e,t),u(e,a),u(a,r);for(let s=0;s<o.length;s+=1)o[s].m(r,null)},p(s,[e]){if(1&e){let a;for(l=s[0],a=0;a<l.length;a+=1){const t=x(s,l,a);o[a]?o[a].p(t,e):(o[a]=T(t),o[a].c(),o[a].m(r,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=l.length}},i:g,o:g,d(s){s&&h(e),w(o,s)}}}function L(s){return[[{title:"Single Sign-On",description:"Login once to multiple applications",imgSrc:"features/sso.png"},{title:"User Management",description:"Centralized management for admin",imgSrc:"features/user-management.png"},{title:"Simple integration",description:"Support OpenID Connect, and K8S gateway Social Login",imgSrc:"features/simple-integration.png"},{title:"Social Login",description:"Sign in with Google, Facebook, Apple and more",imgSrc:"features/social-login.png"},{title:"Password Policies and MFA",description:"Multiple Factor Auth and Customizable Password Polices",imgSrc:"features/password-policies-mfa.png"},{title:"Sessions Management",description:"Better security with sessions management by users",imgSrc:"features/sessions-management.png"},{title:"Customizable Look and Feel",description:"Looks great out of the box and customizable",imgSrc:"features/customizable.png"},{title:"Existing user directories",description:"LDAP and Active Directory support",imgSrc:"features/user-directories.png"}]]}class M extends s{constructor(s){super(),e(this,s,L,C,a,{})}}function A(s){let e,a,d,v,p,$,E,I,y,w,b,D,_,S,V,k,x,T,C,L,M;return{c(){e=t("section"),a=t("div"),d=t("div"),v=t("div"),p=t("h3"),$=l("Trusted by"),E=r(),I=t("div"),y=t("div"),w=t("img"),D=r(),_=t("div"),S=t("div"),V=t("img"),x=r(),T=t("div"),C=t("div"),L=t("img"),this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var r=i(a);d=c(r,"DIV",{class:!0});var l=i(d);v=c(l,"DIV",{class:!0});var m=i(v);p=c(m,"H3",{class:!0});var f=i(p);$=n(f,"Trusted by"),f.forEach(h),m.forEach(h),E=o(l),I=c(l,"DIV",{class:!0});var u=i(I);y=c(u,"DIV",{class:!0});var g=i(y);w=c(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(h),u.forEach(h),D=o(l),_=c(l,"DIV",{class:!0});var b=i(_);S=c(b,"DIV",{class:!0});var k=i(S);V=c(k,"IMG",{class:!0,src:!0,alt:!0}),k.forEach(h),b.forEach(h),x=o(l),T=c(l,"DIV",{class:!0});var M=i(T);C=c(M,"DIV",{class:!0});var A=i(C);L=c(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(h),M.forEach(h),l.forEach(h),r.forEach(h),t.forEach(h),this.h()},h(){m(p,"class","trustedby__title svelte-1slmma3"),m(v,"class","trustedby__title-wrapper col-12 svelte-1slmma3"),m(w,"class","trustedby__img svelte-1slmma3"),w.src!==(b="trustedby/hkpc-logo.png")&&m(w,"src","trustedby/hkpc-logo.png"),m(w,"alt","HKPC Logo"),m(y,"class","trustedby__img-wrapper svelte-1slmma3"),m(I,"class","col-12 col-md-3"),m(V,"class","trustedby__img svelte-1slmma3"),V.src!==(k="trustedby/cmic-logo.png")&&m(V,"src","trustedby/cmic-logo.png"),m(V,"alt","CMIC Logo"),m(S,"class","trustedby__img-wrapper svelte-1slmma3"),m(_,"class","col-12 col-md-3"),m(L,"class","trustedby__img svelte-1slmma3"),L.src!==(M="trustedby/rees-logo.png")&&m(L,"src","trustedby/rees-logo.png"),m(L,"alt","REES Logo"),m(C,"class","trustedby__img-wrapper svelte-1slmma3"),m(T,"class","col-12 col-md-3"),m(d,"class","row"),m(a,"class","container-fluid svelte-1slmma3"),m(e,"class","trustedby svelte-1slmma3")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(d,v),u(v,p),u(p,$),u(d,E),u(d,I),u(I,y),u(y,w),u(d,D),u(d,_),u(_,S),u(S,V),u(d,x),u(d,T),u(T,C),u(C,L)},p:g,i:g,o:g,d(s){s&&h(e)}}}class O extends s{constructor(s){super(),e(this,s,null,A,a,{})}}function P(s){let e,a,d,w,b,D,_,V,k,x;const T=new S({});return{c(){e=t("section"),a=t("div"),d=t("div"),w=t("div"),b=t("h1"),D=l("Try Skygear Auth. Its awesome."),_=r(),V=t("div"),k=t("div"),v(T.$$.fragment),this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var r=i(a);d=c(r,"DIV",{class:!0});var l=i(d);w=c(l,"DIV",{class:!0});var m=i(w);b=c(m,"H1",{class:!0});var f=i(b);D=n(f,"Try Skygear Auth. Its awesome."),f.forEach(h),m.forEach(h),l.forEach(h),_=o(r),V=c(r,"DIV",{class:!0});var u=i(V);k=c(u,"DIV",{class:!0});var g=i(k);p(T.$$.fragment,g),g.forEach(h),u.forEach(h),r.forEach(h),t.forEach(h),this.h()},h(){m(b,"class","cta__title svelte-16cjeyc"),m(w,"class","col-12"),m(d,"class","row"),m(k,"class","col-12 col-md-5"),m(V,"class","row"),m(a,"class","container-fluid svelte-16cjeyc"),m(e,"class","cta svelte-16cjeyc")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(d,w),u(w,b),u(b,D),u(a,_),u(a,V),u(V,k),$(T,k,null),x=!0},p:g,i(s){x||(E(T.$$.fragment,s),x=!0)},o(s){I(T.$$.fragment,s),x=!1},d(s){s&&h(e),y(T)}}}class G extends s{constructor(s){super(),e(this,s,null,P,a,{})}}function H(s,e,a){const t=s.slice();return t[1]=e[a],t}function N(s){let e,a,d,v,p,$=s[1].name+"";return{c(){e=t("li"),a=t("a"),d=l($),p=r(),this.h()},l(s){e=c(s,"LI",{class:!0});var t=i(e);a=c(t,"A",{class:!0,href:!0});var r=i(a);d=n(r,$),r.forEach(h),p=o(t),t.forEach(h),this.h()},h(){m(a,"class","resources__links-list__link svelte-15ip7cm"),m(a,"href",v=s[1].href),m(e,"class","resources__links-list__item svelte-15ip7cm")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(e,p)},p:g,d(s){s&&h(e)}}}function z(s){let e,a,d,v,p,$,E,I,y,b=s[0],D=[];for(let e=0;e<b.length;e+=1)D[e]=N(H(s,b,e));return{c(){e=t("section"),a=t("div"),d=t("div"),v=t("div"),p=t("h3"),$=l("Looking for resources?"),E=r(),I=t("div"),y=t("ul");for(let s=0;s<D.length;s+=1)D[s].c();this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var r=i(a);d=c(r,"DIV",{class:!0});var l=i(d);v=c(l,"DIV",{class:!0});var m=i(v);p=c(m,"H3",{class:!0});var f=i(p);$=n(f,"Looking for resources?"),f.forEach(h),m.forEach(h),E=o(l),I=c(l,"DIV",{class:!0});var u=i(I);y=c(u,"UL",{class:!0});var g=i(y);for(let s=0;s<D.length;s+=1)D[s].l(g);g.forEach(h),u.forEach(h),l.forEach(h),r.forEach(h),t.forEach(h),this.h()},h(){m(p,"class","resources__title svelte-15ip7cm"),m(v,"class","col-12 col-md-6"),m(y,"class","resources__links-list svelte-15ip7cm"),m(I,"class","col-12 col-md-6"),m(d,"class","row"),m(a,"class","container-fluid svelte-15ip7cm"),m(e,"class","resources svelte-15ip7cm")},m(s,t){f(s,e,t),u(e,a),u(a,d),u(d,v),u(v,p),u(p,$),u(d,E),u(d,I),u(I,y);for(let s=0;s<D.length;s+=1)D[s].m(y,null)},p(s,[e]){if(1&e){let a;for(b=s[0],a=0;a<b.length;a+=1){const t=H(s,b,a);D[a]?D[a].p(t,e):(D[a]=N(t),D[a].c(),D[a].m(y,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=b.length}},i:g,o:g,d(s){s&&h(e),w(D,s)}}}function U(s){return[[{name:"Documentations",href:""},{name:"Github",href:""},{name:"Tutorials",href:""}]]}class j extends s{constructor(s){super(),e(this,s,U,z,a,{})}}function F(s){let e,a,r,l;return{c(){e=t("section"),a=t("div"),r=t("img"),this.h()},l(s){e=c(s,"SECTION",{class:!0});var t=i(e);a=c(t,"DIV",{class:!0});var l=i(a);r=c(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(h),t.forEach(h),this.h()},h(){m(r,"class","devices-demo__img svelte-e98ln4"),r.src!==(l="devices-demo.png")&&m(r,"src","devices-demo.png"),m(r,"alt","Demo of Skygear Auth on Mobile and Desktop devices"),m(a,"class","container-fluid devices-demo__img-wrapper svelte-e98ln4"),m(e,"class","devices-demo svelte-e98ln4")},m(s,t){f(s,e,t),u(e,a),u(a,r)},p:g,i:g,o:g,d(s){s&&h(e)}}}class q extends s{constructor(s){super(),e(this,s,null,F,a,{})}}function R(s){let e,a,t,l,c,i,n;const m=new k({}),u=new q({}),d=new M({}),w=new O({}),D=new G({}),_=new j({});return{c(){e=r(),v(m.$$.fragment),a=r(),v(u.$$.fragment),t=r(),v(d.$$.fragment),l=r(),v(w.$$.fragment),c=r(),v(D.$$.fragment),i=r(),v(_.$$.fragment),this.h()},l(s){b('[data-svelte="svelte-d9az65"]',document.head).forEach(h),e=o(s),p(m.$$.fragment,s),a=o(s),p(u.$$.fragment,s),t=o(s),p(d.$$.fragment,s),l=o(s),p(w.$$.fragment,s),c=o(s),p(D.$$.fragment,s),i=o(s),p(_.$$.fragment,s),this.h()},h(){document.title="Skygear Auth"},m(s,r){f(s,e,r),$(m,s,r),f(s,a,r),$(u,s,r),f(s,t,r),$(d,s,r),f(s,l,r),$(w,s,r),f(s,c,r),$(D,s,r),f(s,i,r),$(_,s,r),n=!0},p:g,i(s){n||(E(m.$$.fragment,s),E(u.$$.fragment,s),E(d.$$.fragment,s),E(w.$$.fragment,s),E(D.$$.fragment,s),E(_.$$.fragment,s),n=!0)},o(s){I(m.$$.fragment,s),I(u.$$.fragment,s),I(d.$$.fragment,s),I(w.$$.fragment,s),I(D.$$.fragment,s),I(_.$$.fragment,s),n=!1},d(s){s&&h(e),y(m,s),s&&h(a),y(u,s),s&&h(t),y(d,s),s&&h(l),y(w,s),s&&h(c),y(D,s),s&&h(i),y(_,s)}}}export default class extends s{constructor(s){super(),e(this,s,null,R,a,{})}}

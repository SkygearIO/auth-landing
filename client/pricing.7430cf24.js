import{S as t,i as e,s,e as a,t as r,b as c,d as i,f as l,g as n,k as o,l as f,m as p,o as h,x as $,A as u,a as d,h as g,B as m,C as v,p as _,q as E,u as y,c as S,j as b,n as A,r as D,y as w}from"./client.0ea7618e.js";import{a as x,R as U}from"./Resources.2cbffc6d.js";function I(t){let e,s,$;return{c(){e=a("section"),s=a("h1"),$=r("Pricing"),this.h()},l(t){e=c(t,"SECTION",{class:!0});var a=i(e);s=c(a,"H1",{class:!0});var r=i(s);$=l(r,"Pricing"),r.forEach(n),a.forEach(n),this.h()},h(){o(s,"class","pricing__header__title svelte-ncts98"),o(e,"class","pricing__header svelte-ncts98")},m(t,a){f(t,e,a),p(e,s),p(s,$)},p:h,i:h,o:h,d(t){t&&n(e)}}}class P extends t{constructor(t){super(),e(this,t,null,I,s,{})}}const L=t=>({}),V=t=>({});function C(t,e,s){const a=t.slice();return a[5]=e[s],a}function M(t){let e,s,h=t[5]+"";return{c(){e=a("li"),s=r(h),this.h()},l(t){e=c(t,"LI",{class:!0});var a=i(e);s=l(a,h),a.forEach(n),this.h()},h(){o(e,"class","pricing-card__feature-list__item svelte-19atbl4")},m(t,a){f(t,e,a),p(e,s)},p(t,e){4&e&&h!==(h=t[5]+"")&&$(s,h)},d(t){t&&n(e)}}}function R(t){let e,s,h,S,b,A,D,w,x,U,I,P=t[2],R=[];for(let e=0;e<P.length;e+=1)R[e]=M(C(t,P,e));const k=t[4].footer,N=u(k,t,t[3],V);return{c(){e=a("div"),s=a("h3"),h=r(t[0]),S=d(),b=a("p"),A=r(t[1]),D=d(),w=a("ul");for(let t=0;t<R.length;t+=1)R[t].c();x=d(),U=a("div"),N&&N.c(),this.h()},l(a){e=c(a,"DIV",{class:!0});var r=i(e);s=c(r,"H3",{class:!0});var o=i(s);h=l(o,t[0]),o.forEach(n),S=g(r),b=c(r,"P",{class:!0});var f=i(b);A=l(f,t[1]),f.forEach(n),D=g(r),w=c(r,"UL",{class:!0});var p=i(w);for(let t=0;t<R.length;t+=1)R[t].l(p);p.forEach(n),x=g(r),U=c(r,"DIV",{class:!0});var $=i(U);N&&N.l($),$.forEach(n),r.forEach(n),this.h()},h(){o(s,"class","pricing-card__title svelte-19atbl4"),o(b,"class","pricing-card__description svelte-19atbl4"),o(w,"class","pricing-card__feature-list svelte-19atbl4"),o(U,"class","pricing-card__footer svelte-19atbl4"),o(e,"class","pricing-card svelte-19atbl4")},m(t,a){f(t,e,a),p(e,s),p(s,h),p(e,S),p(e,b),p(b,A),p(e,D),p(e,w);for(let t=0;t<R.length;t+=1)R[t].m(w,null);p(e,x),p(e,U),N&&N.m(U,null),I=!0},p(t,[e]){if((!I||1&e)&&$(h,t[0]),(!I||2&e)&&$(A,t[1]),4&e){let s;for(P=t[2],s=0;s<P.length;s+=1){const a=C(t,P,s);R[s]?R[s].p(a,e):(R[s]=M(a),R[s].c(),R[s].m(w,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=P.length}N&&N.p&&8&e&&N.p(m(k,t,t[3],V),v(k,t[3],e,L))},i(t){I||(_(N,t),I=!0)},o(t){E(N,t),I=!1},d(t){t&&n(e),y(R,t),N&&N.d(t)}}}function k(t,e,s){let{title:a=""}=e,{description:r=""}=e,{features:c=[]}=e,{$$slots:i={},$$scope:l}=e;return t.$set=t=>{"title"in t&&s(0,a=t.title),"description"in t&&s(1,r=t.description),"features"in t&&s(2,c=t.features),"$$scope"in t&&s(3,l=t.$$scope)},[a,r,c,l,i]}class N extends t{constructor(t){super(),e(this,t,k,R,s,{title:0,description:1,features:2})}}function j(t){let e,s,h,$,u,m;return{c(){e=a("div"),s=a("h3"),h=r("USD 200"),$=d(),u=a("span"),m=r("+USD 20 per 1000 Monthly Active Users"),this.h()},l(t){e=c(t,"DIV",{slot:!0});var a=i(e);s=c(a,"H3",{class:!0});var r=i(s);h=l(r,"USD 200"),r.forEach(n),$=g(a),u=c(a,"SPAN",{class:!0});var o=i(u);m=l(o,"+USD 20 per 1000 Monthly Active Users"),o.forEach(n),a.forEach(n),this.h()},h(){o(s,"class","pricing-table__card__price-text svelte-p85ioa"),o(u,"class","pricing-table__card__price-subtext svelte-p85ioa"),o(e,"slot","footer")},m(t,a){f(t,e,a),p(e,s),p(s,h),p(e,$),p(e,u),p(u,m)},d(t){t&&n(e)}}}function H(t){let e,s;return{c(){e=a("a"),s=r("Pricing: Contact Us"),this.h()},l(t){e=c(t,"A",{slot:!0,class:!0,href:!0});var a=i(e);s=l(a,"Pricing: Contact Us"),a.forEach(n),this.h()},h(){o(e,"slot","footer"),o(e,"class","pricing-table__card__btn svelte-p85ioa"),o(e,"href","mailto:hello@skygear.io")},m(t,a){f(t,e,a),p(e,s)},d(t){t&&n(e)}}}function G(t){let e,s,r,l,h,$,u,m,v;const y=new N({props:{title:"Free",description:"Use all features of Authgear to boost your app's security\n          and develop faster",features:["1,000 Monthly Active Users","1 Day of Log Retention","Account remove if no activities for 60 days","No SLA","Community Support"]}}),w=new N({props:{title:"Startups",description:"Grow without pain and security",features:["1,000 Monthly Active Users","Up to 10 Days of Log Retention","AD, LDAP, SAML support","Passwordless Login / Verify by SMS","Email Support"],$$slots:{footer:[j]},$$scope:{ctx:t}}}),x=new N({props:{title:"Enterprise",description:"Run Authgear for your mission-critical applications",features:["Managed SaaS or Private Cloud Deployment","Enterprise Grade SLA support","Professional Support and Services","Anomaly Detection","Audited Reports"],$$slots:{footer:[H]},$$scope:{ctx:t}}});return{c(){e=a("section"),s=a("div"),r=a("div"),l=a("div"),S(y.$$.fragment),h=d(),$=a("div"),S(w.$$.fragment),u=d(),m=a("div"),S(x.$$.fragment),this.h()},l(t){e=c(t,"SECTION",{class:!0});var a=i(e);s=c(a,"DIV",{class:!0});var o=i(s);r=c(o,"DIV",{class:!0});var f=i(r);l=c(f,"DIV",{class:!0});var p=i(l);b(y.$$.fragment,p),p.forEach(n),h=g(f),$=c(f,"DIV",{class:!0});var d=i($);b(w.$$.fragment,d),d.forEach(n),u=g(f),m=c(f,"DIV",{class:!0});var v=i(m);b(x.$$.fragment,v),v.forEach(n),f.forEach(n),o.forEach(n),a.forEach(n),this.h()},h(){o(l,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-p85ioa"),o($,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-p85ioa"),o(m,"class","col-12 col-md-4 pricing-table__card-wrapper svelte-p85ioa"),o(r,"class","row"),o(s,"class","container-fluid svelte-p85ioa"),o(e,"class","pricing-table svelte-p85ioa")},m(t,a){f(t,e,a),p(e,s),p(s,r),p(r,l),A(y,l,null),p(r,h),p(r,$),A(w,$,null),p(r,u),p(r,m),A(x,m,null),v=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),w.$set(s);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a)},i(t){v||(_(y.$$.fragment,t),_(w.$$.fragment,t),_(x.$$.fragment,t),v=!0)},o(t){E(y.$$.fragment,t),E(w.$$.fragment,t),E(x.$$.fragment,t),v=!1},d(t){t&&n(e),D(y),D(w),D(x)}}}class O extends t{constructor(t){super(),e(this,t,null,G,s,{})}}function T(t){let e,s,a,r,c;const i=new P({}),l=new O({}),o=new x({}),p=new U({});return{c(){e=d(),S(i.$$.fragment),s=d(),S(l.$$.fragment),a=d(),S(o.$$.fragment),r=d(),S(p.$$.fragment),this.h()},l(t){w('[data-svelte="svelte-1pxklfs"]',document.head).forEach(n),e=g(t),b(i.$$.fragment,t),s=g(t),b(l.$$.fragment,t),a=g(t),b(o.$$.fragment,t),r=g(t),b(p.$$.fragment,t),this.h()},h(){document.title="Pricing - Skygear Auth"},m(t,n){f(t,e,n),A(i,t,n),f(t,s,n),A(l,t,n),f(t,a,n),A(o,t,n),f(t,r,n),A(p,t,n),c=!0},p:h,i(t){c||(_(i.$$.fragment,t),_(l.$$.fragment,t),_(o.$$.fragment,t),_(p.$$.fragment,t),c=!0)},o(t){E(i.$$.fragment,t),E(l.$$.fragment,t),E(o.$$.fragment,t),E(p.$$.fragment,t),c=!1},d(t){t&&n(e),D(i,t),t&&n(s),D(l,t),t&&n(a),D(o,t),t&&n(r),D(p,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,T,s,{})}}

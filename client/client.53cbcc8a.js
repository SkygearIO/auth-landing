function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(s)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t,s,r){if(e){const n=c(e,t,s,r);return e[0](n)}}function c(e,s,r,n){return e[1]&&n?t(r.ctx.slice(),e[1](n(s))):r.ctx}function i(e,t,s,r){if(e[2]&&r){const n=e[2](r(s));if(void 0===t.dirty)return n;if("object"==typeof n){const e=[],s=Math.max(t.dirty.length,n.length);for(let r=0;r<s;r+=1)e[r]=t.dirty[r]|n[r];return e}return t.dirty|n}return t.dirty}function f(e,t){e.appendChild(t)}function u(e,t,s){e.insertBefore(t,s||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function d(){return g(" ")}function v(){return g("")}function $(e,t,s,r){return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)}function _(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function E(e){return Array.from(e.childNodes)}function y(e,t,s,r){for(let r=0;r<e.length;r+=1){const n=e[r];if(n.nodeName===t){let t=0;for(;t<n.attributes.length;){const e=n.attributes[t];s[e.name]?t++:n.removeAttribute(e.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function b(e,t){for(let s=0;s<e.length;s+=1){const r=e[s];if(3===r.nodeType)return r.data=""+t,e.splice(s,1)[0]}return g(t)}function x(e){return b(e," ")}function k(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,s,r){e.style.setProperty(t,s,r?"important":"")}function A(e,t,s){e.classList[s?"add":"remove"](t)}function S(e,t=document.body){return Array.from(t.querySelectorAll(e))}let L;function P(e){L=e}function I(){if(!L)throw new Error("Function called outside component initialization");return L}const D=[],j=[],R=[],C=[],N=Promise.resolve();let V=!1;function O(e){R.push(e)}let U=!1;const T=new Set;function H(){if(!U){U=!0;do{for(let e=0;e<D.length;e+=1){const t=D[e];P(t),q(t.$$)}for(D.length=0;j.length;)j.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];T.has(t)||(T.add(t),t())}R.length=0}while(D.length);for(;C.length;)C.pop()();V=!1,U=!1,T.clear()}}function q(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const F=new Set;let M;function B(){M={r:0,c:[],p:M}}function G(){M.r||n(M.c),M=M.p}function J(e,t){e&&e.i&&(F.delete(e),e.i(t))}function K(e,t,s,r){if(e&&e.o){if(F.has(e))return;F.add(e),M.c.push(()=>{F.delete(e),r&&(s&&e.d(1),r())}),e.o(t)}}function Y(e,t){const s={},r={},n={$$scope:1};let a=e.length;for(;a--;){const l=e[a],o=t[a];if(o){for(const e in l)e in o||(r[e]=1);for(const e in o)n[e]||(s[e]=o[e],n[e]=1);e[a]=o}else for(const e in l)n[e]=1}for(const e in r)e in s||(s[e]=void 0);return s}function z(e){return"object"==typeof e&&null!==e?e:{}}function W(e){e&&e.c()}function X(e,t){e&&e.l(t)}function Q(e,t,r){const{fragment:l,on_mount:o,on_destroy:c,after_update:i}=e.$$;l&&l.m(t,r),O(()=>{const t=o.map(s).filter(a);c?c.push(...t):n(t),e.$$.on_mount=[]}),i.forEach(O)}function Z(e,t){const s=e.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(D.push(e),V||(V=!0,N.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,s,a,l,o,c,i=[-1]){const f=L;P(t);const u=s.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i};let m=!1;if(p.ctx=a?a(t,u,(e,s,...r)=>{const n=r.length?r[0]:s;return p.ctx&&o(p.ctx[e],p.ctx[e]=n)&&(p.bound[e]&&p.bound[e](n),m&&ee(t,e)),s}):[],p.update(),m=!0,n(p.before_update),p.fragment=!!l&&l(p.ctx),s.target){if(s.hydrate){const e=E(s.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&J(t.$$.fragment),Q(t,s.target,s.anchor),H()}P(f)}class se{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(){}}const re=[];function ne(t,s=e){let r;const n=[];function a(e){if(l(t,e)&&(t=e,r)){const e=!re.length;for(let e=0;e<n.length;e+=1){const s=n[e];s[1](),re.push(s,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(l,o=e){const c=[l,o];return n.push(c),1===n.length&&(r=s(a)||e),l(t),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}const ae={},le=()=>({});function oe(e,t,s){const r=e.slice();return r[3]=t[s],r}function ce(e){let t,s,r,n,l,o,c=e[3].name+"";return{c(){t=m("li"),s=m("a"),r=g(c),l=d(),this.h()},l(e){t=y(e,"LI",{class:!0});var n=E(t);s=y(n,"A",{class:!0,href:!0});var a=E(s);r=b(a,c),a.forEach(h),l=x(n),n.forEach(h),this.h()},h(){_(s,"class","nav__link svelte-ekjpig"),_(s,"href",n=e[3].href),_(t,"class","nav__link-item svelte-ekjpig")},m(n,c,i){u(n,t,c),f(t,s),f(s,r),f(t,l),i&&o(),o=$(s,"click",(function(){a(e[0]&&e[2])&&(e[0]&&e[2]).apply(this,arguments)}))},p(t,s){e=t},d(e){e&&h(t),o()}}}function ie(t){let s,r,a,l,o,c,i,v,k,w,S,L,P,I,D,j,R,C,N,V,O,U,T,H,q,F=t[1],M=[];for(let e=0;e<F.length;e+=1)M[e]=ce(oe(t,F,e));return{c(){s=m("header"),r=m("div"),a=m("div"),l=m("div"),o=m("a"),c=m("img"),v=d(),k=m("div"),w=m("nav"),S=m("div"),L=m("button"),P=m("span"),I=d(),D=m("span"),j=d(),R=m("span"),C=d(),N=m("ul");for(let e=0;e<M.length;e+=1)M[e].c();V=d(),O=m("div"),U=d(),T=m("a"),H=g("Talk to Us"),this.h()},l(e){s=y(e,"HEADER",{class:!0});var t=E(s);r=y(t,"DIV",{class:!0});var n=E(r);a=y(n,"DIV",{class:!0});var i=E(a);l=y(i,"DIV",{class:!0});var f=E(l);o=y(f,"A",{href:!0});var u=E(o);c=y(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(h),f.forEach(h),v=x(i),k=y(i,"DIV",{class:!0});var p=E(k);w=y(p,"NAV",{class:!0});var m=E(w);S=y(m,"DIV",{class:!0});var g=E(S);L=y(g,"BUTTON",{class:!0});var d=E(L);P=y(d,"SPAN",{class:!0}),E(P).forEach(h),I=x(d),D=y(d,"SPAN",{class:!0}),E(D).forEach(h),j=x(d),R=y(d,"SPAN",{class:!0}),E(R).forEach(h),d.forEach(h),C=x(g),N=y(g,"UL",{class:!0});var $=E(N);for(let e=0;e<M.length;e+=1)M[e].l($);$.forEach(h),g.forEach(h),V=x(m),O=y(m,"DIV",{class:!0}),E(O).forEach(h),U=x(m),T=y(m,"A",{href:!0,class:!0});var _=E(T);H=b(_,"Talk to Us"),_.forEach(h),m.forEach(h),p.forEach(h),i.forEach(h),n.forEach(h),t.forEach(h),this.h()},h(){_(c,"class","nav__logo-img svelte-ekjpig"),c.src!==(i="img/header-logo.png")&&_(c,"src","img/header-logo.png"),_(c,"alt","Authgear Logo"),_(o,"href","."),_(l,"class","nav__logo-wrapper col-6 col-sm-6 col-md-3 svelte-ekjpig"),_(P,"class","nav__mobile-toggle-line svelte-ekjpig"),A(P,"nav__mobile-toggle-line--active",t[0]),_(D,"class","nav__mobile-toggle-line svelte-ekjpig"),A(D,"nav__mobile-toggle-line--active",t[0]),_(R,"class","nav__mobile-toggle-line svelte-ekjpig"),A(R,"nav__mobile-toggle-line--active",t[0]),_(L,"class","nav__mobile-toggle svelte-ekjpig"),_(N,"class","nav__links-list svelte-ekjpig"),A(N,"nav__links-list--active",t[0]),_(S,"class","nav__mobile-menu svelte-ekjpig"),_(O,"class","nav__mobile-overlay svelte-ekjpig"),A(O,"nav__mobile-overlay--active",t[0]),_(T,"href","https://oursky.us2.list-manage.com/subscribe/post?u=34db69ee3e01fe49e12302054&id=78e15b4a2a"),_(T,"class","nav__action-btn svelte-ekjpig"),_(w,"class","nav__links-wrapper svelte-ekjpig"),_(k,"class","col-6 col-sm-6 col-md-9"),_(a,"class","row"),_(r,"class","container-fluid svelte-ekjpig"),_(s,"class","nav svelte-ekjpig")},m(e,i,h){u(e,s,i),f(s,r),f(r,a),f(a,l),f(l,o),f(o,c),f(a,v),f(a,k),f(k,w),f(w,S),f(S,L),f(L,P),f(L,I),f(L,D),f(L,j),f(L,R),f(S,C),f(S,N);for(let e=0;e<M.length;e+=1)M[e].m(N,null);f(w,V),f(w,O),f(w,U),f(w,T),f(T,H),h&&n(q),q=[$(L,"click",t[2]),$(O,"click",t[2])]},p(e,[t]){if(1&t&&A(P,"nav__mobile-toggle-line--active",e[0]),1&t&&A(D,"nav__mobile-toggle-line--active",e[0]),1&t&&A(R,"nav__mobile-toggle-line--active",e[0]),7&t){let s;for(F=e[1],s=0;s<F.length;s+=1){const r=oe(e,F,s);M[s]?M[s].p(r,t):(M[s]=ce(r),M[s].c(),M[s].m(N,null))}for(;s<M.length;s+=1)M[s].d(1);M.length=F.length}1&t&&A(N,"nav__links-list--active",e[0]),1&t&&A(O,"nav__mobile-overlay--active",e[0])},i:e,o:e,d(e){e&&h(s),p(M,e),n(q)}}}function fe(e,t,s){let r=!1;return[r,[{name:"Features",href:"#features-section"},{name:"Comparison",href:"."},{name:"Documentation",href:"https://docs.skygear.io"},{name:"Pricing",href:"pricing"},{name:"Open Sources",href:"https://github.com/authgear"}],function(){s(0,r=!r)}]}class ue extends se{constructor(e){super(),te(this,e,fe,ie,l,{})}}function he(t){let s,r,n,a,l,o,c;return{c(){s=m("form"),r=m("input"),n=d(),a=m("input"),l=d(),o=m("div"),c=m("input"),this.h()},l(e){s=y(e,"FORM",{action:!0,method:!0,name:!0,class:!0,rel:!0,target:!0,novalidate:!0});var t=E(s);r=y(t,"INPUT",{class:!0,value:!0,name:!0,type:!0,placeholder:!0}),n=x(t),a=y(t,"INPUT",{type:!0,value:!0,name:!0,class:!0}),l=x(t),o=y(t,"DIV",{style:!0,"aria-hidden":!0});var i=E(o);c=y(i,"INPUT",{type:!0,name:!0,tabindex:!0,value:!0}),i.forEach(h),t.forEach(h),this.h()},h(){_(r,"class","email-input svelte-pvgeyj"),r.value="",_(r,"name","EMAIL"),_(r,"type","email"),_(r,"placeholder","Your Email"),_(a,"type","submit"),a.value="Talk to Us",_(a,"name","subscribe"),_(a,"class","submit-btn svelte-pvgeyj"),_(c,"type","text"),_(c,"name","b_34db69ee3e01fe49e12302054_78e15b4a2a"),_(c,"tabindex","-1"),c.value="",w(o,"position","absolute"),w(o,"left","-5000px"),_(o,"aria-hidden","true"),_(s,"action","https://oursky.us2.list-manage.com/subscribe/post?u=34db69ee3e01fe49e12302054&id=78e15b4a2a"),_(s,"method","post"),_(s,"name","mc-embedded-subscribe-form"),_(s,"class","contact-wrapper svelte-pvgeyj"),_(s,"rel","noopener"),_(s,"target","_blank"),s.noValidate=!0},m(e,t){u(e,s,t),f(s,r),f(s,n),f(s,a),f(s,l),f(s,o),f(o,c)},p:e,i:e,o:e,d(e){e&&h(s)}}}class pe extends se{constructor(e){super(),te(this,e,null,he,l,{})}}function me(t){let s,r,n,a,l,o,c,i,p,v;const $=new pe({});return{c(){s=m("section"),r=m("div"),n=m("div"),a=m("div"),l=m("h1"),o=g("Try Authgear. Its awesome."),c=d(),i=m("div"),p=m("div"),W($.$$.fragment),this.h()},l(e){s=y(e,"SECTION",{class:!0});var t=E(s);r=y(t,"DIV",{class:!0});var f=E(r);n=y(f,"DIV",{class:!0});var u=E(n);a=y(u,"DIV",{class:!0});var m=E(a);l=y(m,"H1",{class:!0});var g=E(l);o=b(g,"Try Authgear. Its awesome."),g.forEach(h),m.forEach(h),u.forEach(h),c=x(f),i=y(f,"DIV",{class:!0});var d=E(i);p=y(d,"DIV",{class:!0});var v=E(p);X($.$$.fragment,v),v.forEach(h),d.forEach(h),f.forEach(h),t.forEach(h),this.h()},h(){_(l,"class","cta__title svelte-x8f3as"),_(a,"class","col-12"),_(n,"class","row"),_(p,"class","col-12 col-md-5"),_(i,"class","row"),_(r,"class","container-fluid svelte-x8f3as"),_(s,"class","cta svelte-x8f3as")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,a),f(a,l),f(l,o),f(r,c),f(r,i),f(i,p),Q($,p,null),v=!0},p:e,i(e){v||(J($.$$.fragment,e),v=!0)},o(e){K($.$$.fragment,e),v=!1},d(e){e&&h(s),Z($)}}}class ge extends se{constructor(e){super(),te(this,e,null,me,l,{})}}function de(e,t,s){const r=e.slice();return r[1]=t[s],r}function ve(t){let s,r,n,a,l,o=t[1].name+"";return{c(){s=m("li"),r=m("a"),n=g(o),l=d(),this.h()},l(e){s=y(e,"LI",{class:!0});var t=E(s);r=y(t,"A",{rel:!0,target:!0,class:!0,href:!0});var a=E(r);n=b(a,o),a.forEach(h),l=x(t),t.forEach(h),this.h()},h(){_(r,"rel","noopener"),_(r,"target","_blank"),_(r,"class","resources__links-list__link svelte-1ylbu1g"),_(r,"href",a=t[1].href),_(s,"class","resources__links-list__item svelte-1ylbu1g")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(s,l)},p:e,d(e){e&&h(s)}}}function $e(t){let s,r,n,a,l,o,c,i,v,$=t[0],k=[];for(let e=0;e<$.length;e+=1)k[e]=ve(de(t,$,e));return{c(){s=m("section"),r=m("div"),n=m("div"),a=m("div"),l=m("h3"),o=g("Looking for resources?"),c=d(),i=m("div"),v=m("ul");for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){s=y(e,"SECTION",{class:!0});var t=E(s);r=y(t,"DIV",{class:!0});var f=E(r);n=y(f,"DIV",{class:!0});var u=E(n);a=y(u,"DIV",{class:!0});var p=E(a);l=y(p,"H3",{class:!0});var m=E(l);o=b(m,"Looking for resources?"),m.forEach(h),p.forEach(h),c=x(u),i=y(u,"DIV",{class:!0});var g=E(i);v=y(g,"UL",{class:!0});var d=E(v);for(let e=0;e<k.length;e+=1)k[e].l(d);d.forEach(h),g.forEach(h),u.forEach(h),f.forEach(h),t.forEach(h),this.h()},h(){_(l,"class","resources__title svelte-1ylbu1g"),_(a,"class","col-12 col-md-6"),_(v,"class","resources__links-list svelte-1ylbu1g"),_(i,"class","col-12 col-md-6"),_(n,"class","row"),_(r,"class","container-fluid svelte-1ylbu1g"),_(s,"class","resources svelte-1ylbu1g")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,a),f(a,l),f(l,o),f(n,c),f(n,i),f(i,v);for(let e=0;e<k.length;e+=1)k[e].m(v,null)},p(e,[t]){if(1&t){let s;for($=e[0],s=0;s<$.length;s+=1){const r=de(e,$,s);k[s]?k[s].p(r,t):(k[s]=ve(r),k[s].c(),k[s].m(v,null))}for(;s<k.length;s+=1)k[s].d(1);k.length=$.length}},i:e,o:e,d(e){e&&h(s),p(k,e)}}}function _e(e){return[[{name:"Documentations",href:"https://docs.skygear.io"},{name:"Github",href:"https://github.com/authgear"}]]}class Ee extends se{constructor(e){super(),te(this,e,_e,$e,l,{})}}function ye(e,t,s){const r=e.slice();return r[4]=t[s],r}function be(e){let t,s,r,n,a,l=e[4].title+"";return{c(){t=m("li"),s=m("a"),r=g(l),a=d(),this.h()},l(e){t=y(e,"LI",{class:!0});var n=E(t);s=y(n,"A",{class:!0,href:!0});var o=E(s);r=b(o,l),o.forEach(h),a=x(n),n.forEach(h),this.h()},h(){_(s,"class","learn-more__toc-link svelte-crt8f6"),_(s,"href",n=e[4].slug),A(s,"learn-more__toc-link--active",e[4].slug===e[0]),_(t,"class","learn-more__toc-item")},m(e,n){u(e,t,n),f(t,s),f(s,r),f(t,a)},p(e,t){1&t&&A(s,"learn-more__toc-link--active",e[4].slug===e[0])},d(e){e&&h(t)}}}function xe(e){let t,s,r,n,a,l,v,$,k,w,A,L,P;document.title=t=e[1]+" - Authgear";let I=ke,D=[];for(let t=0;t<I.length;t+=1)D[t]=be(ye(e,I,t));const j=e[3].default,R=o(j,e,e[2],null);return{c(){s=d(),r=m("div"),n=m("h1"),a=g("Learn More"),l=d(),v=m("ul");for(let e=0;e<D.length;e+=1)D[e].c();$=d(),k=m("h2"),w=g(e[1]),A=d(),L=m("div"),R&&R.c(),this.h()},l(t){S('[data-svelte="svelte-subvx1"]',document.head).forEach(h),s=x(t),r=y(t,"DIV",{class:!0});var o=E(r);n=y(o,"H1",{class:!0});var c=E(n);a=b(c,"Learn More"),c.forEach(h),l=x(o),v=y(o,"UL",{class:!0});var i=E(v);for(let e=0;e<D.length;e+=1)D[e].l(i);i.forEach(h),$=x(o),k=y(o,"H2",{class:!0});var f=E(k);w=b(f,e[1]),f.forEach(h),A=x(o),L=y(o,"DIV",{class:!0});var u=E(L);R&&R.l(u),u.forEach(h),o.forEach(h),this.h()},h(){_(n,"class","learn-more__title svelte-crt8f6"),_(v,"class","learn-more__toc svelte-crt8f6"),_(k,"class","learn-more__section-title svelte-crt8f6"),_(L,"class","learn-more__section-contents col-md-8 col-12 svelte-crt8f6"),_(r,"class","learn-more svelte-crt8f6")},m(e,t){u(e,s,t),u(e,r,t),f(r,n),f(n,a),f(r,l),f(r,v);for(let e=0;e<D.length;e+=1)D[e].m(v,null);f(r,$),f(r,k),f(k,w),f(r,A),f(r,L),R&&R.m(L,null),P=!0},p(e,[s]){if((!P||2&s)&&t!==(t=e[1]+" - Authgear")&&(document.title=t),1&s){let t;for(I=ke,t=0;t<I.length;t+=1){const r=ye(e,I,t);D[t]?D[t].p(r,s):(D[t]=be(r),D[t].c(),D[t].m(v,null))}for(;t<D.length;t+=1)D[t].d(1);D.length=I.length}R&&R.p&&4&s&&R.p(c(j,e,e[2],null),i(j,e[2],s,null))},i(e){P||(J(R,e),P=!0)},o(e){K(R,e),P=!1},d(e){e&&h(s),e&&h(r),p(D,e),R&&R.d(e)}}}const ke=[{slug:"terms",title:"Terms of Services"},{slug:"promise",title:"Our Promises"},{slug:"policy",title:"Acceptable Use Policy"},{slug:"data-privacy",title:"Data Privacy Policy"},{slug:"sla",title:"Service Level Agreement"},{slug:"security",title:"Security"}];function we(e,t,s){let{slug:r=""}=t;const n=ke.find(e=>e.slug===r).title;let{$$slots:a={},$$scope:l}=t;return e.$set=e=>{"slug"in e&&s(0,r=e.slug),"$$scope"in e&&s(2,l=e.$$scope)},[r,n,l,a]}class Ae extends se{constructor(e){super(),te(this,e,we,xe,l,{slug:0})}}function Se(e,t,s){const r=e.slice();return r[0]=t[s],r}function Le(t){let s,r,n,a,l,o=t[0].title+"";return{c(){s=m("li"),r=m("a"),n=g(o),l=d(),this.h()},l(e){s=y(e,"LI",{class:!0});var t=E(s);r=y(t,"A",{rel:!0,target:!0,href:!0,class:!0});var a=E(r);n=b(a,o),a.forEach(h),l=x(t),t.forEach(h),this.h()},h(){_(r,"rel","noopener"),_(r,"target","_blank"),_(r,"href",a=t[0].slug),_(r,"class","svelte-1la6ixc"),_(s,"class","svelte-1la6ixc")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(s,l)},p:e,d(e){e&&h(s)}}}function Pe(t){let s,r,n,a,l,o,c,i,v,$,k,w,A,S,L,P,I,D,j,R,C,N,V,O,U,T,H,q,F,M,B,G,J,K,Y,z,W,X,Q,Z,ee,te,se,re,ne,ae,le,oe,ce,ie,fe,ue,he,pe,me,ge,de,ve,$e,_e,Ee,ye,be,xe,we,Ae,Pe,Ie=ke,De=[];for(let e=0;e<Ie.length;e+=1)De[e]=Le(Se(t,Ie,e));return{c(){s=m("footer"),r=m("div"),n=m("div"),a=m("div"),l=m("img"),c=d(),i=m("div"),v=m("span"),$=g("Learn"),k=d(),w=m("ul"),A=m("li"),S=m("a"),L=g("Blog"),P=d(),I=m("li"),D=m("a"),j=g("Documentation"),R=d();for(let e=0;e<De.length;e+=1)De[e].c();C=d(),N=m("div"),V=m("span"),O=g("Company"),U=d(),T=m("ul"),H=m("li"),q=m("a"),F=g("Team"),M=d(),B=m("li"),G=m("a"),J=g("Contact"),K=d(),Y=m("li"),z=m("a"),W=g("Jobs"),X=d(),Q=m("div"),Z=m("span"),ee=g("Connect"),te=d(),se=m("ul"),re=m("li"),ne=m("a"),ae=g("Twitter"),le=d(),oe=m("li"),ce=m("a"),ie=g("Facebook"),fe=d(),ue=m("li"),he=m("a"),pe=g("Github"),me=d(),ge=m("li"),de=m("a"),ve=g("Discourse"),$e=d(),_e=m("div"),Ee=m("div"),ye=m("a"),be=g("hello@skygear.io"),xe=d(),we=m("div"),Ae=m("span"),Pe=g("© Oursky Ltd. All rights reserved"),this.h()},l(e){s=y(e,"FOOTER",{class:!0});var t=E(s);r=y(t,"DIV",{class:!0});var o=E(r);n=y(o,"DIV",{class:!0});var f=E(n);a=y(f,"DIV",{class:!0});var u=E(a);l=y(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(h),c=x(f),i=y(f,"DIV",{class:!0});var p=E(i);v=y(p,"SPAN",{class:!0});var m=E(v);$=b(m,"Learn"),m.forEach(h),k=x(p),w=y(p,"UL",{class:!0});var g=E(w);A=y(g,"LI",{class:!0});var d=E(A);S=y(d,"A",{href:!0,class:!0});var _=E(S);L=b(_,"Blog"),_.forEach(h),d.forEach(h),P=x(g),I=y(g,"LI",{class:!0});var ke=E(I);D=y(ke,"A",{rel:!0,target:!0,href:!0,class:!0});var Se=E(D);j=b(Se,"Documentation"),Se.forEach(h),ke.forEach(h),R=x(g);for(let e=0;e<De.length;e+=1)De[e].l(g);g.forEach(h),p.forEach(h),C=x(f),N=y(f,"DIV",{class:!0});var Le=E(N);V=y(Le,"SPAN",{class:!0});var Ie=E(V);O=b(Ie,"Company"),Ie.forEach(h),U=x(Le),T=y(Le,"UL",{class:!0});var je=E(T);H=y(je,"LI",{class:!0});var Re=E(H);q=y(Re,"A",{rel:!0,target:!0,href:!0,class:!0});var Ce=E(q);F=b(Ce,"Team"),Ce.forEach(h),Re.forEach(h),M=x(je),B=y(je,"LI",{class:!0});var Ne=E(B);G=y(Ne,"A",{href:!0,class:!0});var Ve=E(G);J=b(Ve,"Contact"),Ve.forEach(h),Ne.forEach(h),K=x(je),Y=y(je,"LI",{class:!0});var Oe=E(Y);z=y(Oe,"A",{rel:!0,target:!0,href:!0,class:!0});var Ue=E(z);W=b(Ue,"Jobs"),Ue.forEach(h),Oe.forEach(h),je.forEach(h),Le.forEach(h),X=x(f),Q=y(f,"DIV",{class:!0});var Te=E(Q);Z=y(Te,"SPAN",{class:!0});var He=E(Z);ee=b(He,"Connect"),He.forEach(h),te=x(Te),se=y(Te,"UL",{class:!0});var qe=E(se);re=y(qe,"LI",{class:!0});var Fe=E(re);ne=y(Fe,"A",{rel:!0,target:!0,href:!0,class:!0});var Me=E(ne);ae=b(Me,"Twitter"),Me.forEach(h),Fe.forEach(h),le=x(qe),oe=y(qe,"LI",{class:!0});var Be=E(oe);ce=y(Be,"A",{rel:!0,target:!0,href:!0,class:!0});var Ge=E(ce);ie=b(Ge,"Facebook"),Ge.forEach(h),Be.forEach(h),fe=x(qe),ue=y(qe,"LI",{class:!0});var Je=E(ue);he=y(Je,"A",{rel:!0,target:!0,href:!0,class:!0});var Ke=E(he);pe=b(Ke,"Github"),Ke.forEach(h),Je.forEach(h),me=x(qe),ge=y(qe,"LI",{class:!0});var Ye=E(ge);de=y(Ye,"A",{rel:!0,target:!0,href:!0,class:!0});var ze=E(de);ve=b(ze,"Discourse"),ze.forEach(h),Ye.forEach(h),qe.forEach(h),Te.forEach(h),f.forEach(h),$e=x(o),_e=y(o,"DIV",{class:!0});var We=E(_e);Ee=y(We,"DIV",{class:!0});var Xe=E(Ee);ye=y(Xe,"A",{class:!0,href:!0});var Qe=E(ye);be=b(Qe,"hello@skygear.io"),Qe.forEach(h),Xe.forEach(h),xe=x(We),we=y(We,"DIV",{class:!0});var Ze=E(we);Ae=y(Ze,"SPAN",{});var et=E(Ae);Pe=b(et,"© Oursky Ltd. All rights reserved"),et.forEach(h),Ze.forEach(h),We.forEach(h),o.forEach(h),t.forEach(h),this.h()},h(){_(l,"class","footer-logo svelte-1la6ixc"),l.src!==(o="img/footer-logo.png")&&_(l,"src","img/footer-logo.png"),_(l,"alt","Footer Logo"),_(a,"class","col-12 col-md-6"),_(v,"class","sitemap-title svelte-1la6ixc"),_(S,"href","."),_(S,"class","svelte-1la6ixc"),_(A,"class","svelte-1la6ixc"),_(D,"rel","noopener"),_(D,"target","_blank"),_(D,"href","https://docs.skygear.io/"),_(D,"class","svelte-1la6ixc"),_(I,"class","svelte-1la6ixc"),_(w,"class","sitemap-list svelte-1la6ixc"),_(i,"class","col-12 col-md-2"),_(V,"class","sitemap-title svelte-1la6ixc"),_(q,"rel","noopener"),_(q,"target","_blank"),_(q,"href","https://github.com/orgs/authgear/people"),_(q,"class","svelte-1la6ixc"),_(H,"class","svelte-1la6ixc"),_(G,"href","mailto:hello@skygear.io"),_(G,"class","svelte-1la6ixc"),_(B,"class","svelte-1la6ixc"),_(z,"rel","noopener"),_(z,"target","_blank"),_(z,"href","https://jobs.oursky.com/"),_(z,"class","svelte-1la6ixc"),_(Y,"class","svelte-1la6ixc"),_(T,"class","sitemap-list svelte-1la6ixc"),_(N,"class","col-12 col-md-2"),_(Z,"class","sitemap-title svelte-1la6ixc"),_(ne,"rel","noopener"),_(ne,"target","_blank"),_(ne,"href","https://twitter.com/authgear"),_(ne,"class","svelte-1la6ixc"),_(re,"class","svelte-1la6ixc"),_(ce,"rel","noopener"),_(ce,"target","_blank"),_(ce,"href","https://www.facebook.com/oursky.hk"),_(ce,"class","svelte-1la6ixc"),_(oe,"class","svelte-1la6ixc"),_(he,"rel","noopener"),_(he,"target","_blank"),_(he,"href","https://github.com/authgear"),_(he,"class","svelte-1la6ixc"),_(ue,"class","svelte-1la6ixc"),_(de,"rel","noopener"),_(de,"target","_blank"),_(de,"href","https://discuss.skygear.io/"),_(de,"class","svelte-1la6ixc"),_(ge,"class","svelte-1la6ixc"),_(se,"class","sitemap-list svelte-1la6ixc"),_(Q,"class","col-12 col-md-2"),_(n,"class","row"),_(ye,"class","footer__email-link svelte-1la6ixc"),_(ye,"href","mailto:hello@skygear.io"),_(Ee,"class","col-12 col-md-6"),_(we,"class","col-12 col-md-6 copyright svelte-1la6ixc"),_(_e,"class","row copyright-wrapper svelte-1la6ixc"),_(r,"class","container-fluid svelte-1la6ixc"),_(s,"class","svelte-1la6ixc")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,a),f(a,l),f(n,c),f(n,i),f(i,v),f(v,$),f(i,k),f(i,w),f(w,A),f(A,S),f(S,L),f(w,P),f(w,I),f(I,D),f(D,j),f(w,R);for(let e=0;e<De.length;e+=1)De[e].m(w,null);f(n,C),f(n,N),f(N,V),f(V,O),f(N,U),f(N,T),f(T,H),f(H,q),f(q,F),f(T,M),f(T,B),f(B,G),f(G,J),f(T,K),f(T,Y),f(Y,z),f(z,W),f(n,X),f(n,Q),f(Q,Z),f(Z,ee),f(Q,te),f(Q,se),f(se,re),f(re,ne),f(ne,ae),f(se,le),f(se,oe),f(oe,ce),f(ce,ie),f(se,fe),f(se,ue),f(ue,he),f(he,pe),f(se,me),f(se,ge),f(ge,de),f(de,ve),f(r,$e),f(r,_e),f(_e,Ee),f(Ee,ye),f(ye,be),f(_e,xe),f(_e,we),f(we,Ae),f(Ae,Pe)},p(e,[t]){if(0&t){let s;for(Ie=ke,s=0;s<Ie.length;s+=1){const r=Se(e,Ie,s);De[s]?De[s].p(r,t):(De[s]=Le(r),De[s].c(),De[s].m(w,null))}for(;s<De.length;s+=1)De[s].d(1);De.length=Ie.length}},i:e,o:e,d(e){e&&h(s),p(De,e)}}}class Ie extends se{constructor(e){super(),te(this,e,null,Pe,l,{})}}function De(e){let t,s,r,n,a,l;const f=new ue({}),p=e[1].default,g=o(p,e,e[0],null),v=new ge({}),$=new Ee({}),_=new Ie({});return{c(){W(f.$$.fragment),t=d(),s=m("main"),g&&g.c(),r=d(),W(v.$$.fragment),n=d(),W($.$$.fragment),a=d(),W(_.$$.fragment)},l(e){X(f.$$.fragment,e),t=x(e),s=y(e,"MAIN",{});var l=E(s);g&&g.l(l),l.forEach(h),r=x(e),X(v.$$.fragment,e),n=x(e),X($.$$.fragment,e),a=x(e),X(_.$$.fragment,e)},m(e,o){Q(f,e,o),u(e,t,o),u(e,s,o),g&&g.m(s,null),u(e,r,o),Q(v,e,o),u(e,n,o),Q($,e,o),u(e,a,o),Q(_,e,o),l=!0},p(e,[t]){g&&g.p&&1&t&&g.p(c(p,e,e[0],null),i(p,e[0],t,null))},i(e){l||(J(f.$$.fragment,e),J(g,e),J(v.$$.fragment,e),J($.$$.fragment,e),J(_.$$.fragment,e),l=!0)},o(e){K(f.$$.fragment,e),K(g,e),K(v.$$.fragment,e),K($.$$.fragment,e),K(_.$$.fragment,e),l=!1},d(e){Z(f,e),e&&h(t),e&&h(s),g&&g.d(e),e&&h(r),Z(v,e),e&&h(n),Z($,e),e&&h(a),Z(_,e)}}}function je(e,t,s){let{$$slots:r={},$$scope:n}=t;return e.$set=e=>{"$$scope"in e&&s(0,n=e.$$scope)},[n,r]}class Re extends se{constructor(e){super(),te(this,e,je,De,l,{})}}function Ce(e){let t,s;const r=e[4].default,n=o(r,e,e[3],null);return{c(){t=m("a"),n&&n.c(),this.h()},l(e){t=y(e,"A",{href:!0,class:!0});var s=E(t);n&&n.l(s),s.forEach(h),this.h()},h(){_(t,"href",e[0]),_(t,"class","btn svelte-wap8fl"),A(t,"btn--large",e[1]),A(t,"btn--fluid",e[2])},m(e,r){u(e,t,r),n&&n.m(t,null),s=!0},p(e,[a]){n&&n.p&&8&a&&n.p(c(r,e,e[3],null),i(r,e[3],a,null)),(!s||1&a)&&_(t,"href",e[0]),2&a&&A(t,"btn--large",e[1]),4&a&&A(t,"btn--fluid",e[2])},i(e){s||(J(n,e),s=!0)},o(e){K(n,e),s=!1},d(e){e&&h(t),n&&n.d(e)}}}function Ne(e,t,s){let{href:r}=t,{large:n=!1}=t,{fluid:a=!1}=t,{$$slots:l={},$$scope:o}=t;return e.$set=e=>{"href"in e&&s(0,r=e.href),"large"in e&&s(1,n=e.large),"fluid"in e&&s(2,a=e.fluid),"$$scope"in e&&s(3,o=e.$$scope)},[r,n,a,o,l]}class Ve extends se{constructor(e){super(),te(this,e,Ne,Ce,l,{href:0,large:1,fluid:2})}}function Oe(e){let t;return{c(){t=g("Return to Homepage")},l(e){t=b(e,"Return to Homepage")},m(e,s){u(e,t,s)},d(e){e&&h(t)}}}function Ue(e){let t,s,r,n,a,l,o,c;const i=new Ve({props:{href:".",$$slots:{default:[Oe]},$$scope:{ctx:e}}});return{c(){t=m("div"),s=m("h1"),r=g(e[0]),n=d(),a=m("p"),l=g(e[1]),o=d(),W(i.$$.fragment),this.h()},l(c){t=y(c,"DIV",{class:!0});var f=E(t);s=y(f,"H1",{class:!0});var u=E(s);r=b(u,e[0]),u.forEach(h),n=x(f),a=y(f,"P",{class:!0});var p=E(a);l=b(p,e[1]),p.forEach(h),o=x(f),X(i.$$.fragment,f),f.forEach(h),this.h()},h(){_(s,"class","error__title svelte-16d8hlt"),_(a,"class","error__message svelte-16d8hlt"),_(t,"class","error svelte-16d8hlt")},m(e,h){u(e,t,h),f(t,s),f(s,r),f(t,n),f(t,a),f(a,l),f(t,o),Q(i,t,null),c=!0},p(e,[t]){(!c||1&t)&&k(r,e[0]),(!c||2&t)&&k(l,e[1]);const s={};4&t&&(s.$$scope={dirty:t,ctx:e}),i.$set(s)},i(e){c||(J(i.$$.fragment,e),c=!0)},o(e){K(i.$$.fragment,e),c=!1},d(e){e&&h(t),Z(i)}}}function Te(e,t,s){let{title:r}=t,{message:n}=t;return e.$set=e=>{"title"in e&&s(0,r=e.title),"message"in e&&s(1,n=e.message)},[r,n]}class He extends se{constructor(e){super(),te(this,e,Te,Ue,l,{title:0,message:1})}}function qe(t){let s,r;const n=new He({props:{title:"Something went wrong",message:"Oops the page you were looking for was not found. "}});return{c(){s=d(),W(n.$$.fragment),this.h()},l(e){S('[data-svelte="svelte-11rapdj"]',document.head).forEach(h),s=x(e),X(n.$$.fragment,e),this.h()},h(){document.title="Page Not Found"},m(e,t){u(e,s,t),Q(n,e,t),r=!0},p:e,i(e){r||(J(n.$$.fragment,e),r=!0)},o(e){K(n.$$.fragment,e),r=!1},d(e){e&&h(s),Z(n,e)}}}class Fe extends se{constructor(e){super(),te(this,e,null,qe,l,{})}}function Me(e){let t;const s=new He({props:{title:"Something went wrong",message:"Please refresh the page or return to homepage"}});return{c(){W(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,r){Q(s,e,r),t=!0},i(e){t||(J(s.$$.fragment,e),t=!0)},o(e){K(s.$$.fragment,e),t=!1},d(e){Z(s,e)}}}function Be(e){let t;const s=new Fe({});return{c(){W(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,r){Q(s,e,r),t=!0},i(e){t||(J(s.$$.fragment,e),t=!0)},o(e){K(s.$$.fragment,e),t=!1},d(e){Z(s,e)}}}function Ge(e){let t,s,r=e[1].stack+"";return{c(){t=m("pre"),s=g(r)},l(e){t=y(e,"PRE",{});var n=E(t);s=b(n,r),n.forEach(h)},m(e,r){u(e,t,r),f(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&k(s,r)},d(e){e&&h(t)}}}function Je(e){let t,s,r,n,a,l,o;document.title=t="Authgear: "+e[0];const c=[Be,Me],i=[];function f(e,t){return 404===e[0]?0:1}r=f(e),n=i[r]=c[r](e);let p=e[2]&&e[1].stack&&Ge(e);return{c(){s=d(),n.c(),a=d(),p&&p.c(),l=v()},l(e){S('[data-svelte="svelte-nqwbyq"]',document.head).forEach(h),s=x(e),n.l(e),a=x(e),p&&p.l(e),l=v()},m(e,t){u(e,s,t),i[r].m(e,t),u(e,a,t),p&&p.m(e,t),u(e,l,t),o=!0},p(e,[s]){(!o||1&s)&&t!==(t="Authgear: "+e[0])&&(document.title=t);let u=r;r=f(e),r!==u&&(B(),K(i[u],1,1,()=>{i[u]=null}),G(),n=i[r],n||(n=i[r]=c[r](e),n.c()),J(n,1),n.m(a.parentNode,a)),e[2]&&e[1].stack?p?p.p(e,s):(p=Ge(e),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},i(e){o||(J(n),o=!0)},o(e){K(n),o=!1},d(e){e&&h(s),i[r].d(e),e&&h(a),p&&p.d(e),e&&h(l)}}}function Ke(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)},[r,n,!1]}class Ye extends se{constructor(e){super(),te(this,e,Ke,Je,l,{status:0,error:1})}}function ze(e){let s,r;const n=[e[4].props];var a=e[4].component;function l(e){let s={};for(let e=0;e<n.length;e+=1)s=t(s,n[e]);return{props:s}}if(a)var o=new a(l());return{c(){o&&W(o.$$.fragment),s=v()},l(e){o&&X(o.$$.fragment,e),s=v()},m(e,t){o&&Q(o,e,t),u(e,s,t),r=!0},p(e,t){const r=16&t?Y(n,[z(e[4].props)]):{};if(a!==(a=e[4].component)){if(o){B();const e=o;K(e.$$.fragment,1,0,()=>{Z(e,1)}),G()}a?(W((o=new a(l())).$$.fragment),J(o.$$.fragment,1),Q(o,s.parentNode,s)):o=null}else a&&o.$set(r)},i(e){r||(o&&J(o.$$.fragment,e),r=!0)},o(e){o&&K(o.$$.fragment,e),r=!1},d(e){e&&h(s),o&&Z(o,e)}}}function We(e){let t;const s=new Ye({props:{error:e[0],status:e[1]}});return{c(){W(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,r){Q(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(J(s.$$.fragment,e),t=!0)},o(e){K(s.$$.fragment,e),t=!1},d(e){Z(s,e)}}}function Xe(e){let t,s,r,n;const a=[We,ze],l=[];function o(e,t){return e[0]?0:1}return t=o(e),s=l[t]=a[t](e),{c(){s.c(),r=v()},l(e){s.l(e),r=v()},m(e,s){l[t].m(e,s),u(e,r,s),n=!0},p(e,n){let c=t;t=o(e),t===c?l[t].p(e,n):(B(),K(l[c],1,1,()=>{l[c]=null}),G(),s=l[t],s||(s=l[t]=a[t](e),s.c()),J(s,1),s.m(r.parentNode,r))},i(e){n||(J(s),n=!0)},o(e){K(s),n=!1},d(e){l[t].d(e),e&&h(r)}}}function Qe(e){let s;const r=[{segment:e[2][0]},e[3].props];let n={$$slots:{default:[Xe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);const a=new Re({props:n});return{c(){W(a.$$.fragment)},l(e){X(a.$$.fragment,e)},m(e,t){Q(a,e,t),s=!0},p(e,[t]){const s=12&t?Y(r,[4&t&&{segment:e[2][0]},8&t&&z(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s)},i(e){s||(J(a.$$.fragment,e),s=!0)},o(e){K(a.$$.fragment,e),s=!1},d(e){Z(a,e)}}}function Ze(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:l}=t,{level0:o}=t,{level1:c=null}=t,{notify:i}=t;var f,u,h;return f=i,I().$$.after_update.push(f),u=ae,h=r,I().$$.context.set(u,h),e.$set=e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,l=e.segments),"level0"in e&&s(3,o=e.level0),"level1"in e&&s(4,c=e.level1),"notify"in e&&s(6,i=e.notify)},[n,a,l,o,c,r,i]}class et extends se{constructor(e){super(),te(this,e,Ze,Qe,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const tt=[],st=[{js:()=>import("./index.571be653.js"),css:[]},{js:()=>import("./data-privacy.1f0dccda.js"),css:[]},{js:()=>import("./security.c6d03c3c.js"),css:[]},{js:()=>import("./pricing.ffdc0683.js"),css:[]},{js:()=>import("./promise.0139dc4a.js"),css:[]},{js:()=>import("./policy.cbc6d9dc.js"),css:[]},{js:()=>import("./terms.61b12186.js"),css:[]},{js:()=>import("./404.a3f4b520.js"),css:[]},{js:()=>import("./sla.fbf58455.js"),css:[]}],rt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/data-privacy\/?$/,parts:[{i:1}]},{pattern:/^\/security\/?$/,parts:[{i:2}]},{pattern:/^\/pricing\/?$/,parts:[{i:3}]},{pattern:/^\/promise\/?$/,parts:[{i:4}]},{pattern:/^\/policy\/?$/,parts:[{i:5}]},{pattern:/^\/terms\/?$/,parts:[{i:6}]},{pattern:/^\/404\/?$/,parts:[{i:7}]},{pattern:/^\/sla\/?$/,parts:[{i:8}]}];const nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let at,lt,ot,ct=!1,it=[],ft="{}";const ut={page:function(e){const t=ne(e);let s=!0;return{notify:function(){s=!0,t.update(e=>e)},set:function(e){s=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||s&&t!==r)&&e(r=t)})}}}({}),preloading:ne(null),session:ne(nt&&nt.session)};let ht,pt;ut.session.subscribe(async e=>{if(ht=e,!ct)return;pt=!0;const t=yt(new URL(location.href)),s=lt={},{redirect:r,props:n,branch:a}=await wt(t);s===lt&&await kt(r,a,n,t.page)});let mt,gt=null;let dt,vt=1;const $t="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},_t={};function Et(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function yt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(nt.baseUrl))return null;let t=e.pathname.slice(nt.baseUrl.length);if(""===t&&(t="/"),!tt.some(e=>e.test(t)))for(let s=0;s<rt.length;s+=1){const r=rt[s],n=r.pattern.exec(t);if(n){const s=Et(e.search),a=r.parts[r.parts.length-1],l=a.params?a.params(n):{},o={host:location.host,path:t,query:s,params:l};return{href:e.href,route:r,match:n,page:o}}}}function bt(){return{x:pageXOffset,y:pageYOffset}}async function xt(e,t,s,r){if(t)dt=t;else{const e=bt();_t[dt]=e,t=dt=++vt,_t[dt]=s?e:{x:0,y:0}}dt=t,at&&ut.preloading.set(!0);const n=gt&&gt.href===e.href?gt.promise:wt(e);gt=null;const a=lt={},{redirect:l,props:o,branch:c}=await n;if(a===lt&&(await kt(l,c,o,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=_t[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}_t[dt]=e,e&&scrollTo(e.x,e.y)}}async function kt(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=yt(new URL(e,document.baseURI));return s?($t[t.replaceState?"replaceState":"pushState"]({id:dt},"",e),xt(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ut.page.set(r),ut.preloading.set(!1),at)at.$set(s);else{s.stores={page:{subscribe:ut.page.subscribe},preloading:{subscribe:ut.preloading.subscribe},session:ut.session},s.level0={props:await ot},s.notify=ut.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)St(e.nextSibling);St(e),St(t)}at=new et({target:mt,props:s,hydrate:!0})}it=t,ft=JSON.stringify(r.query),ct=!0,pt=!1}async function wt(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},l={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let o;ot||(ot=nt.preloaded[0]||le.call(l,{host:s.host,path:s.path,query:s.query,params:{}},ht));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let f=!1;o=await Promise.all(t.parts.map(async(t,o)=>{const u=r[o];if(function(e,t,s,r){if(r!==ft)return!0;const n=it[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(o,u,i,n)&&(f=!0),a.segments[c]=r[o+1],!t)return{segment:u};const h=c++;if(!pt&&!f&&it[o]&&it[o].part===t.i)return it[o];f=!1;const{default:p,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(At);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(st[t.i]);let g;return g=ct||!nt.preloaded[o+1]?m?await m.call(l,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ht):{}:nt.preloaded[o+1],a["level"+h]={component:p,props:g,segment:u,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,o=[]}return{redirect:n,props:a,branch:o}}function At(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function St(e){e.parentNode.removeChild(e)}function Lt(e){const t=yt(new URL(e,document.baseURI));if(t)return gt&&e===gt.href||function(e,t){gt={href:e,promise:t}}(e,wt(t)),gt.promise}let Pt;function It(e){clearTimeout(Pt),Pt=setTimeout(()=>{Dt(e)},20)}function Dt(e){const t=Rt(e.target);t&&"prefetch"===t.rel&&Lt(t.href)}function jt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Rt(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=yt(n);if(a){xt(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),$t.pushState({id:dt},"",n.href)}}function Rt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ct(e){if(_t[dt]=bt(),e.state){const t=yt(new URL(location.href));t?xt(t,e.state.id):location.href=location.href}else vt=vt+1,function(e){dt=e}(vt),$t.replaceState({id:dt},"",location.href)}var Nt;Nt={target:document.querySelector("#sapper")},"scrollRestoration"in $t&&($t.scrollRestoration="manual"),addEventListener("beforeunload",()=>{$t.scrollRestoration="auto"}),addEventListener("load",()=>{$t.scrollRestoration="manual"}),function(e){mt=e}(Nt.target),addEventListener("click",jt),addEventListener("popstate",Ct),addEventListener("touchstart",Dt),addEventListener("mousemove",It),Promise.resolve().then(()=>{const{hash:e,href:t}=location;$t.replaceState({id:vt},"",t);const s=new URL(location.href);if(nt.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:l,error:o}=nt;ot||(ot=a&&a[0]),kt(null,[],{error:o,status:l,session:n,level0:{props:ot},level1:{props:{status:l,error:o},component:Ye},segments:a},{host:t,path:s,query:Et(r),params:{}})}();const r=yt(s);return r?xt(r,vt,!0,e):void 0});export{o as A,c as B,pe as C,i as D,t as E,Y as F,z as G,S as H,Ve as I,Ae as L,Fe as N,se as S,d as a,y as b,W as c,E as d,m as e,b as f,h as g,x as h,te as i,X as j,_ as k,u as l,f as m,Q as n,e as o,J as p,K as q,Z as r,l as s,g as t,p as u,A as v,$ as w,k as x,B as y,G as z};

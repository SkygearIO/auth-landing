function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(s)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,s,r){if(e){const n=l(e,t,s,r);return e[0](n)}}function l(e,s,r,n){return e[1]&&n?t(r.ctx.slice(),e[1](n(s))):r.ctx}function i(e,t,s,r){if(e[2]&&r){const n=e[2](r(s));if(void 0===t.dirty)return n;if("object"==typeof n){const e=[],s=Math.max(t.dirty.length,n.length);for(let r=0;r<s;r+=1)e[r]=t.dirty[r]|n[r];return e}return t.dirty|n}return t.dirty}function f(e,t){e.appendChild(t)}function u(e,t,s){e.insertBefore(t,s||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function v(){return m(" ")}function g(){return m("")}function y(e,t,s,r){return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)}function E(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function $(e){return Array.from(e.childNodes)}function w(e,t,s,r){for(let r=0;r<e.length;r+=1){const n=e[r];if(n.nodeName===t){let t=0;for(;t<n.attributes.length;){const e=n.attributes[t];s[e.name]?t++:n.removeAttribute(e.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):d(t)}function b(e,t){for(let s=0;s<e.length;s+=1){const r=e[s];if(3===r.nodeType)return r.data=""+t,e.splice(s,1)[0]}return m(t)}function q(e){return b(e," ")}function _(e,t){t=""+t,e.data!==t&&(e.data=t)}function A(e,t,s,r){e.style.setProperty(t,s,r?"important":"")}function x(e,t,s){e.classList[s?"add":"remove"](t)}function S(e,t=document.body){return Array.from(t.querySelectorAll(e))}let L;function I(e){L=e}function P(){if(!L)throw new Error("Function called outside component initialization");return L}const k=[],D=[],N=[],R=[],C=Promise.resolve();let U=!1;function O(e){N.push(e)}let V=!1;const T=new Set;function j(){if(!V){V=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];I(t),B(t.$$)}for(k.length=0;D.length;)D.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];T.has(t)||(T.add(t),t())}N.length=0}while(k.length);for(;R.length;)R.pop()();U=!1,V=!1,T.clear()}}function B(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const F=new Set;let J;function G(){J={r:0,c:[],p:J}}function M(){J.r||n(J.c),J=J.p}function H(e,t){e&&e.i&&(F.delete(e),e.i(t))}function z(e,t,s,r){if(e&&e.o){if(F.has(e))return;F.add(e),J.c.push(()=>{F.delete(e),r&&(s&&e.d(1),r())}),e.o(t)}}function K(e,t){const s={},r={},n={$$scope:1};let a=e.length;for(;a--;){const o=e[a],c=t[a];if(c){for(const e in o)e in c||(r[e]=1);for(const e in c)n[e]||(s[e]=c[e],n[e]=1);e[a]=c}else for(const e in o)n[e]=1}for(const e in r)e in s||(s[e]=void 0);return s}function Y(e){return"object"==typeof e&&null!==e?e:{}}function W(e){e&&e.c()}function X(e,t){e&&e.l(t)}function Q(e,t,r){const{fragment:o,on_mount:c,on_destroy:l,after_update:i}=e.$$;o&&o.m(t,r),O(()=>{const t=c.map(s).filter(a);l?l.push(...t):n(t),e.$$.on_mount=[]}),i.forEach(O)}function Z(e,t){const s=e.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(k.push(e),U||(U=!0,C.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,s,a,o,c,l,i=[-1]){const f=L;I(t);const u=s.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i};let d=!1;if(p.ctx=a?a(t,u,(e,s,...r)=>{const n=r.length?r[0]:s;return p.ctx&&c(p.ctx[e],p.ctx[e]=n)&&(p.bound[e]&&p.bound[e](n),d&&ee(t,e)),s}):[],p.update(),d=!0,n(p.before_update),p.fragment=!!o&&o(p.ctx),s.target){if(s.hydrate){const e=$(s.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&H(t.$$.fragment),Q(t,s.target,s.anchor),j()}I(f)}class se{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(){}}const re=[];function ne(t,s=e){let r;const n=[];function a(e){if(o(t,e)&&(t=e,r)){const e=!re.length;for(let e=0;e<n.length;e+=1){const s=n[e];s[1](),re.push(s,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(o,c=e){const l=[o,c];return n.push(l),1===n.length&&(r=s(a)||e),o(t),()=>{const e=n.indexOf(l);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}const ae={},oe=()=>({});function ce(e,t,s){const r=e.slice();return r[1]=t[s],r}function le(t){let s,r,n,a,o,c=t[1].name+"";return{c(){s=d("li"),r=d("a"),n=m(c),o=v(),this.h()},l(e){s=w(e,"LI",{class:!0});var t=$(s);r=w(t,"A",{class:!0,href:!0});var a=$(r);n=b(a,c),a.forEach(h),o=q(t),t.forEach(h),this.h()},h(){E(r,"class","nav__link svelte-1ybarxu"),E(r,"href",a=t[1].href),E(s,"class","nav__link-item svelte-1ybarxu")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(s,o)},p:e,d(e){e&&h(s)}}}function ie(t){let s,r,n,a,o,c,l,i,g,y,_,A,x,S,L,I,P,k,D,N,R,C,U,O=t[0],V=[];for(let e=0;e<O.length;e+=1)V[e]=le(ce(t,O,e));return{c(){s=d("header"),r=d("div"),n=d("div"),a=d("div"),o=d("a"),c=d("img"),i=v(),g=d("div"),y=d("nav"),_=d("div"),A=d("input"),x=v(),S=d("span"),L=v(),I=d("span"),P=v(),k=d("span"),D=v(),N=d("ul");for(let e=0;e<V.length;e+=1)V[e].c();R=v(),C=d("a"),U=m("Talk to Us"),this.h()},l(e){s=w(e,"HEADER",{class:!0});var t=$(s);r=w(t,"DIV",{class:!0});var l=$(r);n=w(l,"DIV",{class:!0});var f=$(n);a=w(f,"DIV",{class:!0});var u=$(a);o=w(u,"A",{href:!0});var p=$(o);c=w(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(h),u.forEach(h),i=q(f),g=w(f,"DIV",{class:!0});var d=$(g);y=w(d,"NAV",{class:!0});var m=$(y);_=w(m,"DIV",{class:!0});var v=$(_);A=w(v,"INPUT",{class:!0,type:!0}),x=q(v),S=w(v,"SPAN",{class:!0}),$(S).forEach(h),L=q(v),I=w(v,"SPAN",{class:!0}),$(I).forEach(h),P=q(v),k=w(v,"SPAN",{class:!0}),$(k).forEach(h),D=q(v),N=w(v,"UL",{class:!0});var E=$(N);for(let e=0;e<V.length;e+=1)V[e].l(E);E.forEach(h),v.forEach(h),R=q(m),C=w(m,"A",{href:!0,class:!0});var O=$(C);U=b(O,"Talk to Us"),O.forEach(h),m.forEach(h),d.forEach(h),f.forEach(h),l.forEach(h),t.forEach(h),this.h()},h(){E(c,"class","nav__logo-img svelte-1ybarxu"),c.src!==(l="img/header-logo.png")&&E(c,"src","img/header-logo.png"),E(c,"alt","Skygear Auth Logo"),E(o,"href","."),E(a,"class","nav__logo-wrapper col-6 col-sm-6 col-md-3 svelte-1ybarxu"),E(A,"class","nav__mobile-toggle svelte-1ybarxu"),E(A,"type","checkbox"),E(S,"class","nav__mobile-toggle-line svelte-1ybarxu"),E(I,"class","nav__mobile-toggle-line svelte-1ybarxu"),E(k,"class","nav__mobile-toggle-line svelte-1ybarxu"),E(N,"class","nav__links-list svelte-1ybarxu"),E(_,"class","nav__mobile-menu svelte-1ybarxu"),E(C,"href","https://oursky.us2.list-manage.com/subscribe/post?u=34db69ee3e01fe49e12302054&id=78e15b4a2a"),E(C,"class","nav__action-btn svelte-1ybarxu"),E(y,"class","nav__links-wrapper svelte-1ybarxu"),E(g,"class","col-6 col-sm-6 col-md-9"),E(n,"class","row"),E(r,"class","container-fluid svelte-1ybarxu"),E(s,"class","nav svelte-1ybarxu")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,a),f(a,o),f(o,c),f(n,i),f(n,g),f(g,y),f(y,_),f(_,A),f(_,x),f(_,S),f(_,L),f(_,I),f(_,P),f(_,k),f(_,D),f(_,N);for(let e=0;e<V.length;e+=1)V[e].m(N,null);f(y,R),f(y,C),f(C,U)},p(e,[t]){if(1&t){let s;for(O=e[0],s=0;s<O.length;s+=1){const r=ce(e,O,s);V[s]?V[s].p(r,t):(V[s]=le(r),V[s].c(),V[s].m(N,null))}for(;s<V.length;s+=1)V[s].d(1);V.length=O.length}},i:e,o:e,d(e){e&&h(s),p(V,e)}}}function fe(e){return[[{name:"Features",href:"."},{name:"Comparison",href:"."},{name:"Documentation",href:"."},{name:"Pricing",href:"pricing"},{name:"Open Sources",href:"."}]]}class ue extends se{constructor(e){super(),te(this,e,fe,ie,o,{})}}function he(t){let s,r,n,a,o,c,l,i,p,g,y,_,A,x,S,L,I,P,k,D,N,R,C,U,O,V,T,j,B,F,J,G,M,H,z,K,Y,W,X,Q,Z,ee,te,se,re,ne,ae,oe,ce,le,ie,fe,ue,he,pe,de,me,ve,ge,ye,Ee,$e,we,be,qe,_e,Ae,xe,Se,Le,Ie,Pe,ke,De,Ne,Re,Ce,Ue,Oe,Ve,Te,je,Be,Fe,Je,Ge,Me,He,ze,Ke,Ye,We,Xe,Qe,Ze,et,tt,st;return{c(){s=d("footer"),r=d("div"),n=d("div"),a=d("div"),o=d("img"),l=v(),i=d("div"),p=d("span"),g=m("Learn"),y=v(),_=d("ul"),A=d("li"),x=d("a"),S=m("Blog"),L=v(),I=d("li"),P=d("a"),k=m("Demo Projects"),D=v(),N=d("li"),R=d("a"),C=m("Documentation"),U=v(),O=d("li"),V=d("a"),T=m("Tutorials"),j=v(),B=d("li"),F=d("a"),J=m("Terms of Services"),G=v(),M=d("li"),H=d("a"),z=m("Our Promises"),K=v(),Y=d("li"),W=d("a"),X=m("Acceptable Use Policy"),Q=v(),Z=d("li"),ee=d("a"),te=m("Data Privacy Policy"),se=v(),re=d("li"),ne=d("a"),ae=m("Service Level Agreement"),oe=v(),ce=d("li"),le=d("a"),ie=m("Security"),fe=v(),ue=d("div"),he=d("span"),pe=m("Company"),de=v(),me=d("ul"),ve=d("li"),ge=d("a"),ye=m("Team"),Ee=v(),$e=d("li"),we=d("a"),be=m("Contact"),qe=v(),_e=d("li"),Ae=d("a"),xe=m("Jobs"),Se=v(),Le=d("div"),Ie=d("span"),Pe=m("Connect"),ke=v(),De=d("ul"),Ne=d("li"),Re=d("a"),Ce=m("Twitter"),Ue=v(),Oe=d("li"),Ve=d("a"),Te=m("Facebook"),je=v(),Be=d("li"),Fe=d("a"),Je=m("Github"),Ge=v(),Me=d("li"),He=d("a"),ze=m("Discourse"),Ke=v(),Ye=d("div"),We=d("div"),Xe=d("a"),Qe=m("hello@skygear.io"),Ze=v(),et=d("div"),tt=d("span"),st=m("© Oursky Ltd. All rights reserved"),this.h()},l(e){s=w(e,"FOOTER",{class:!0});var t=$(s);r=w(t,"DIV",{class:!0});var c=$(r);n=w(c,"DIV",{class:!0});var f=$(n);a=w(f,"DIV",{class:!0});var u=$(a);o=w(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(h),l=q(f),i=w(f,"DIV",{class:!0});var d=$(i);p=w(d,"SPAN",{class:!0});var m=$(p);g=b(m,"Learn"),m.forEach(h),y=q(d),_=w(d,"UL",{class:!0});var v=$(_);A=w(v,"LI",{class:!0});var E=$(A);x=w(E,"A",{href:!0,class:!0});var rt=$(x);S=b(rt,"Blog"),rt.forEach(h),E.forEach(h),L=q(v),I=w(v,"LI",{class:!0});var nt=$(I);P=w(nt,"A",{href:!0,class:!0});var at=$(P);k=b(at,"Demo Projects"),at.forEach(h),nt.forEach(h),D=q(v),N=w(v,"LI",{class:!0});var ot=$(N);R=w(ot,"A",{href:!0,class:!0});var ct=$(R);C=b(ct,"Documentation"),ct.forEach(h),ot.forEach(h),U=q(v),O=w(v,"LI",{class:!0});var lt=$(O);V=w(lt,"A",{href:!0,class:!0});var it=$(V);T=b(it,"Tutorials"),it.forEach(h),lt.forEach(h),j=q(v),B=w(v,"LI",{class:!0});var ft=$(B);F=w(ft,"A",{href:!0,class:!0});var ut=$(F);J=b(ut,"Terms of Services"),ut.forEach(h),ft.forEach(h),G=q(v),M=w(v,"LI",{class:!0});var ht=$(M);H=w(ht,"A",{href:!0,class:!0});var pt=$(H);z=b(pt,"Our Promises"),pt.forEach(h),ht.forEach(h),K=q(v),Y=w(v,"LI",{class:!0});var dt=$(Y);W=w(dt,"A",{href:!0,class:!0});var mt=$(W);X=b(mt,"Acceptable Use Policy"),mt.forEach(h),dt.forEach(h),Q=q(v),Z=w(v,"LI",{class:!0});var vt=$(Z);ee=w(vt,"A",{href:!0,class:!0});var gt=$(ee);te=b(gt,"Data Privacy Policy"),gt.forEach(h),vt.forEach(h),se=q(v),re=w(v,"LI",{class:!0});var yt=$(re);ne=w(yt,"A",{href:!0,class:!0});var Et=$(ne);ae=b(Et,"Service Level Agreement"),Et.forEach(h),yt.forEach(h),oe=q(v),ce=w(v,"LI",{class:!0});var $t=$(ce);le=w($t,"A",{href:!0,class:!0});var wt=$(le);ie=b(wt,"Security"),wt.forEach(h),$t.forEach(h),v.forEach(h),d.forEach(h),fe=q(f),ue=w(f,"DIV",{class:!0});var bt=$(ue);he=w(bt,"SPAN",{class:!0});var qt=$(he);pe=b(qt,"Company"),qt.forEach(h),de=q(bt),me=w(bt,"UL",{class:!0});var _t=$(me);ve=w(_t,"LI",{class:!0});var At=$(ve);ge=w(At,"A",{href:!0,class:!0});var xt=$(ge);ye=b(xt,"Team"),xt.forEach(h),At.forEach(h),Ee=q(_t),$e=w(_t,"LI",{class:!0});var St=$($e);we=w(St,"A",{href:!0,class:!0});var Lt=$(we);be=b(Lt,"Contact"),Lt.forEach(h),St.forEach(h),qe=q(_t),_e=w(_t,"LI",{class:!0});var It=$(_e);Ae=w(It,"A",{href:!0,class:!0});var Pt=$(Ae);xe=b(Pt,"Jobs"),Pt.forEach(h),It.forEach(h),_t.forEach(h),bt.forEach(h),Se=q(f),Le=w(f,"DIV",{class:!0});var kt=$(Le);Ie=w(kt,"SPAN",{class:!0});var Dt=$(Ie);Pe=b(Dt,"Connect"),Dt.forEach(h),ke=q(kt),De=w(kt,"UL",{class:!0});var Nt=$(De);Ne=w(Nt,"LI",{class:!0});var Rt=$(Ne);Re=w(Rt,"A",{href:!0,class:!0});var Ct=$(Re);Ce=b(Ct,"Twitter"),Ct.forEach(h),Rt.forEach(h),Ue=q(Nt),Oe=w(Nt,"LI",{class:!0});var Ut=$(Oe);Ve=w(Ut,"A",{href:!0,class:!0});var Ot=$(Ve);Te=b(Ot,"Facebook"),Ot.forEach(h),Ut.forEach(h),je=q(Nt),Be=w(Nt,"LI",{class:!0});var Vt=$(Be);Fe=w(Vt,"A",{href:!0,class:!0});var Tt=$(Fe);Je=b(Tt,"Github"),Tt.forEach(h),Vt.forEach(h),Ge=q(Nt),Me=w(Nt,"LI",{class:!0});var jt=$(Me);He=w(jt,"A",{href:!0,class:!0});var Bt=$(He);ze=b(Bt,"Discourse"),Bt.forEach(h),jt.forEach(h),Nt.forEach(h),kt.forEach(h),f.forEach(h),Ke=q(c),Ye=w(c,"DIV",{class:!0});var Ft=$(Ye);We=w(Ft,"DIV",{class:!0});var Jt=$(We);Xe=w(Jt,"A",{href:!0});var Gt=$(Xe);Qe=b(Gt,"hello@skygear.io"),Gt.forEach(h),Jt.forEach(h),Ze=q(Ft),et=w(Ft,"DIV",{class:!0});var Mt=$(et);tt=w(Mt,"SPAN",{});var Ht=$(tt);st=b(Ht,"© Oursky Ltd. All rights reserved"),Ht.forEach(h),Mt.forEach(h),Ft.forEach(h),c.forEach(h),t.forEach(h),this.h()},h(){E(o,"class","footer-logo svelte-8wq1sh"),o.src!==(c="img/footer-logo.png")&&E(o,"src","img/footer-logo.png"),E(o,"alt","Footer Logo"),E(a,"class","col-12 col-md-6"),E(p,"class","sitemap-title svelte-8wq1sh"),E(x,"href","."),E(x,"class","svelte-8wq1sh"),E(A,"class","svelte-8wq1sh"),E(P,"href","."),E(P,"class","svelte-8wq1sh"),E(I,"class","svelte-8wq1sh"),E(R,"href","."),E(R,"class","svelte-8wq1sh"),E(N,"class","svelte-8wq1sh"),E(V,"href","."),E(V,"class","svelte-8wq1sh"),E(O,"class","svelte-8wq1sh"),E(F,"href","."),E(F,"class","svelte-8wq1sh"),E(B,"class","svelte-8wq1sh"),E(H,"href","."),E(H,"class","svelte-8wq1sh"),E(M,"class","svelte-8wq1sh"),E(W,"href","."),E(W,"class","svelte-8wq1sh"),E(Y,"class","svelte-8wq1sh"),E(ee,"href","."),E(ee,"class","svelte-8wq1sh"),E(Z,"class","svelte-8wq1sh"),E(ne,"href","."),E(ne,"class","svelte-8wq1sh"),E(re,"class","svelte-8wq1sh"),E(le,"href","."),E(le,"class","svelte-8wq1sh"),E(ce,"class","svelte-8wq1sh"),E(_,"class","sitemap-list svelte-8wq1sh"),E(i,"class","col-12 col-md-2"),E(he,"class","sitemap-title svelte-8wq1sh"),E(ge,"href","."),E(ge,"class","svelte-8wq1sh"),E(ve,"class","svelte-8wq1sh"),E(we,"href","."),E(we,"class","svelte-8wq1sh"),E($e,"class","svelte-8wq1sh"),E(Ae,"href","."),E(Ae,"class","svelte-8wq1sh"),E(_e,"class","svelte-8wq1sh"),E(me,"class","sitemap-list svelte-8wq1sh"),E(ue,"class","col-12 col-md-2"),E(Ie,"class","sitemap-title svelte-8wq1sh"),E(Re,"href","."),E(Re,"class","svelte-8wq1sh"),E(Ne,"class","svelte-8wq1sh"),E(Ve,"href","."),E(Ve,"class","svelte-8wq1sh"),E(Oe,"class","svelte-8wq1sh"),E(Fe,"href","."),E(Fe,"class","svelte-8wq1sh"),E(Be,"class","svelte-8wq1sh"),E(He,"href","."),E(He,"class","svelte-8wq1sh"),E(Me,"class","svelte-8wq1sh"),E(De,"class","sitemap-list svelte-8wq1sh"),E(Le,"class","col-12 col-md-2"),E(n,"class","row"),E(Xe,"href","mailto:hello@skygear.io"),E(We,"class","col-12 col-md-6"),E(et,"class","col-12 col-md-6 copyright svelte-8wq1sh"),E(Ye,"class","row copyright-wrapper svelte-8wq1sh"),E(r,"class","container-fluid svelte-8wq1sh"),E(s,"class","svelte-8wq1sh")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,a),f(a,o),f(n,l),f(n,i),f(i,p),f(p,g),f(i,y),f(i,_),f(_,A),f(A,x),f(x,S),f(_,L),f(_,I),f(I,P),f(P,k),f(_,D),f(_,N),f(N,R),f(R,C),f(_,U),f(_,O),f(O,V),f(V,T),f(_,j),f(_,B),f(B,F),f(F,J),f(_,G),f(_,M),f(M,H),f(H,z),f(_,K),f(_,Y),f(Y,W),f(W,X),f(_,Q),f(_,Z),f(Z,ee),f(ee,te),f(_,se),f(_,re),f(re,ne),f(ne,ae),f(_,oe),f(_,ce),f(ce,le),f(le,ie),f(n,fe),f(n,ue),f(ue,he),f(he,pe),f(ue,de),f(ue,me),f(me,ve),f(ve,ge),f(ge,ye),f(me,Ee),f(me,$e),f($e,we),f(we,be),f(me,qe),f(me,_e),f(_e,Ae),f(Ae,xe),f(n,Se),f(n,Le),f(Le,Ie),f(Ie,Pe),f(Le,ke),f(Le,De),f(De,Ne),f(Ne,Re),f(Re,Ce),f(De,Ue),f(De,Oe),f(Oe,Ve),f(Ve,Te),f(De,je),f(De,Be),f(Be,Fe),f(Fe,Je),f(De,Ge),f(De,Me),f(Me,He),f(He,ze),f(r,Ke),f(r,Ye),f(Ye,We),f(We,Xe),f(Xe,Qe),f(Ye,Ze),f(Ye,et),f(et,tt),f(tt,st)},p:e,i:e,o:e,d(e){e&&h(s)}}}class pe extends se{constructor(e){super(),te(this,e,null,he,o,{})}}function de(e){let t,s,r,n;const a=new ue({}),o=e[1].default,f=c(o,e,e[0],null),p=new pe({});return{c(){W(a.$$.fragment),t=v(),s=d("main"),f&&f.c(),r=v(),W(p.$$.fragment)},l(e){X(a.$$.fragment,e),t=q(e),s=w(e,"MAIN",{});var n=$(s);f&&f.l(n),n.forEach(h),r=q(e),X(p.$$.fragment,e)},m(e,o){Q(a,e,o),u(e,t,o),u(e,s,o),f&&f.m(s,null),u(e,r,o),Q(p,e,o),n=!0},p(e,[t]){f&&f.p&&1&t&&f.p(l(o,e,e[0],null),i(o,e[0],t,null))},i(e){n||(H(a.$$.fragment,e),H(f,e),H(p.$$.fragment,e),n=!0)},o(e){z(a.$$.fragment,e),z(f,e),z(p.$$.fragment,e),n=!1},d(e){Z(a,e),e&&h(t),e&&h(s),f&&f.d(e),e&&h(r),Z(p,e)}}}function me(e,t,s){let{$$slots:r={},$$scope:n}=t;return e.$set=e=>{"$$scope"in e&&s(0,n=e.$$scope)},[n,r]}class ve extends se{constructor(e){super(),te(this,e,me,de,o,{})}}function ge(e){let t,s,r=e[1].stack+"";return{c(){t=d("pre"),s=m(r)},l(e){t=w(e,"PRE",{});var n=$(t);s=b(n,r),n.forEach(h)},m(e,r){u(e,t,r),f(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&_(s,r)},d(e){e&&h(t)}}}function ye(t){let s,r,n,a,o,c,l,i,p,y=t[1].message+"";document.title=s=t[0];let A=t[2]&&t[1].stack&&ge(t);return{c(){r=v(),n=d("h1"),a=m(t[0]),o=v(),c=d("p"),l=m(y),i=v(),A&&A.c(),p=g(),this.h()},l(e){S('[data-svelte="svelte-1moakz"]',document.head).forEach(h),r=q(e),n=w(e,"H1",{class:!0});var s=$(n);a=b(s,t[0]),s.forEach(h),o=q(e),c=w(e,"P",{class:!0});var f=$(c);l=b(f,y),f.forEach(h),i=q(e),A&&A.l(e),p=g(),this.h()},h(){E(n,"class","svelte-y9wctx"),E(c,"class","svelte-y9wctx")},m(e,t){u(e,r,t),u(e,n,t),f(n,a),u(e,o,t),u(e,c,t),f(c,l),u(e,i,t),A&&A.m(e,t),u(e,p,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&_(a,e[0]),2&t&&y!==(y=e[1].message+"")&&_(l,y),e[2]&&e[1].stack?A?A.p(e,t):(A=ge(e),A.c(),A.m(p.parentNode,p)):A&&(A.d(1),A=null)},i:e,o:e,d(e){e&&h(r),e&&h(n),e&&h(o),e&&h(c),e&&h(i),A&&A.d(e),e&&h(p)}}}function Ee(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)},[r,n,!1]}class $e extends se{constructor(e){super(),te(this,e,Ee,ye,o,{status:0,error:1})}}function we(e){let s,r;const n=[e[4].props];var a=e[4].component;function o(e){let s={};for(let e=0;e<n.length;e+=1)s=t(s,n[e]);return{props:s}}if(a)var c=new a(o());return{c(){c&&W(c.$$.fragment),s=g()},l(e){c&&X(c.$$.fragment,e),s=g()},m(e,t){c&&Q(c,e,t),u(e,s,t),r=!0},p(e,t){const r=16&t?K(n,[Y(e[4].props)]):{};if(a!==(a=e[4].component)){if(c){G();const e=c;z(e.$$.fragment,1,0,()=>{Z(e,1)}),M()}a?(W((c=new a(o())).$$.fragment),H(c.$$.fragment,1),Q(c,s.parentNode,s)):c=null}else a&&c.$set(r)},i(e){r||(c&&H(c.$$.fragment,e),r=!0)},o(e){c&&z(c.$$.fragment,e),r=!1},d(e){e&&h(s),c&&Z(c,e)}}}function be(e){let t;const s=new $e({props:{error:e[0],status:e[1]}});return{c(){W(s.$$.fragment)},l(e){X(s.$$.fragment,e)},m(e,r){Q(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(H(s.$$.fragment,e),t=!0)},o(e){z(s.$$.fragment,e),t=!1},d(e){Z(s,e)}}}function qe(e){let t,s,r,n;const a=[be,we],o=[];function c(e,t){return e[0]?0:1}return t=c(e),s=o[t]=a[t](e),{c(){s.c(),r=g()},l(e){s.l(e),r=g()},m(e,s){o[t].m(e,s),u(e,r,s),n=!0},p(e,n){let l=t;t=c(e),t===l?o[t].p(e,n):(G(),z(o[l],1,1,()=>{o[l]=null}),M(),s=o[t],s||(s=o[t]=a[t](e),s.c()),H(s,1),s.m(r.parentNode,r))},i(e){n||(H(s),n=!0)},o(e){z(s),n=!1},d(e){o[t].d(e),e&&h(r)}}}function _e(e){let s;const r=[{segment:e[2][0]},e[3].props];let n={$$slots:{default:[qe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);const a=new ve({props:n});return{c(){W(a.$$.fragment)},l(e){X(a.$$.fragment,e)},m(e,t){Q(a,e,t),s=!0},p(e,[t]){const s=12&t?K(r,[4&t&&{segment:e[2][0]},8&t&&Y(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s)},i(e){s||(H(a.$$.fragment,e),s=!0)},o(e){z(a.$$.fragment,e),s=!1},d(e){Z(a,e)}}}function Ae(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t,{notify:i}=t;var f,u,h;return f=i,P().$$.after_update.push(f),u=ae,h=r,P().$$.context.set(u,h),e.$set=e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,l=e.level1),"notify"in e&&s(6,i=e.notify)},[n,a,o,c,l,r,i]}class xe extends se{constructor(e){super(),te(this,e,Ae,_e,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Se=[],Le=[{js:()=>import("./index.1eaaf8ee.js"),css:[]},{js:()=>import("./pricing.b930b00a.js"),css:[]}],Ie=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/pricing\/?$/,parts:[{i:1}]}];const Pe="undefined"!=typeof __SAPPER__&&__SAPPER__;let ke,De,Ne,Re=!1,Ce=[],Ue="{}";const Oe={page:function(e){const t=ne(e);let s=!0;return{notify:function(){s=!0,t.update(e=>e)},set:function(e){s=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||s&&t!==r)&&e(r=t)})}}}({}),preloading:ne(null),session:ne(Pe&&Pe.session)};let Ve,Te;Oe.session.subscribe(async e=>{if(Ve=e,!Re)return;Te=!0;const t=ze(new URL(location.href)),s=De={},{redirect:r,props:n,branch:a}=await Xe(t);s===De&&await We(r,a,n,t.page)});let je,Be=null;let Fe,Je=1;const Ge="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Me={};function He(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ze(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Pe.baseUrl))return null;let t=e.pathname.slice(Pe.baseUrl.length);if(""===t&&(t="/"),!Se.some(e=>e.test(t)))for(let s=0;s<Ie.length;s+=1){const r=Ie[s],n=r.pattern.exec(t);if(n){const s=He(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function Ke(){return{x:pageXOffset,y:pageYOffset}}async function Ye(e,t,s,r){if(t)Fe=t;else{const e=Ke();Me[Fe]=e,t=Fe=++Je,Me[Fe]=s?e:{x:0,y:0}}Fe=t,ke&&Oe.preloading.set(!0);const n=Be&&Be.href===e.href?Be.promise:Xe(e);Be=null;const a=De={},{redirect:o,props:c,branch:l}=await n;if(a===De&&(await We(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Me[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}Me[Fe]=e,e&&scrollTo(e.x,e.y)}}async function We(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ze(new URL(e,document.baseURI));return s?(Ge[t.replaceState?"replaceState":"pushState"]({id:Fe},"",e),Ye(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Oe.page.set(r),Oe.preloading.set(!1),ke)ke.$set(s);else{s.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},s.level0={props:await Ne},s.notify=Oe.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ze(e.nextSibling);Ze(e),Ze(t)}ke=new xe({target:je,props:s,hydrate:!0})}Ce=t,Ue=JSON.stringify(r.query),Re=!0,Te=!1}async function Xe(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;Ne||(Ne=Pe.preloaded[0]||oe.call(o,{host:s.host,path:s.path,query:s.query,params:{}},Ve));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let f=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const u=r[c];if(function(e,t,s,r){if(r!==Ue)return!0;const n=Ce[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(c,u,i,n)&&(f=!0),a.segments[l]=r[c+1],!t)return{segment:u};const h=l++;if(!Te&&!f&&Ce[c]&&Ce[c].part===t.i)return Ce[c];f=!1;const{default:p,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Qe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Le[t.i]);let m;return m=Re||!Pe.preloaded[c+1]?d?await d.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},Ve):{}:Pe.preloaded[c+1],a["level"+h]={component:p,props:m,segment:u,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Qe(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function Ze(e){e.parentNode.removeChild(e)}function et(e){const t=ze(new URL(e,document.baseURI));if(t)return Be&&e===Be.href||function(e,t){Be={href:e,promise:t}}(e,Xe(t)),Be.promise}let tt;function st(e){clearTimeout(tt),tt=setTimeout(()=>{rt(e)},20)}function rt(e){const t=at(e.target);t&&"prefetch"===t.rel&&et(t.href)}function nt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=at(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ze(n);if(a){Ye(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),Ge.pushState({id:Fe},"",n.href)}}function at(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ot(e){if(Me[Fe]=Ke(),e.state){const t=ze(new URL(location.href));t?Ye(t,e.state.id):location.href=location.href}else Je=Je+1,function(e){Fe=e}(Je),Ge.replaceState({id:Fe},"",location.href)}var ct;ct={target:document.querySelector("#sapper")},"scrollRestoration"in Ge&&(Ge.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ge.scrollRestoration="auto"}),addEventListener("load",()=>{Ge.scrollRestoration="manual"}),function(e){je=e}(ct.target),addEventListener("click",nt),addEventListener("popstate",ot),addEventListener("touchstart",rt),addEventListener("mousemove",st),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ge.replaceState({id:Je},"",t);const s=new URL(location.href);if(Pe.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=Pe;Ne||(Ne=a&&a[0]),We(null,[],{error:c,status:o,session:n,level0:{props:Ne},level1:{props:{status:o,error:c},component:$e},segments:a},{host:t,path:s,query:He(r),params:{}})}();const r=ze(s);return r?Ye(r,Je,!0,e):void 0});export{c as A,l as B,i as C,se as S,v as a,w as b,W as c,$ as d,d as e,b as f,h as g,q as h,te as i,X as j,E as k,u as l,f as m,Q as n,e as o,H as p,z as q,Z as r,o as s,m as t,p as u,x as v,y as w,_ as x,S as y,A as z};
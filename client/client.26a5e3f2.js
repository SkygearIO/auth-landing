function e(){}function s(e,s){for(const t in s)e[t]=s[t];return e}function t(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(t)}function n(e){return"function"==typeof e}function c(e,s){return e!=e?s==s:e!==s||e&&"object"==typeof e||"function"==typeof e}function o(e,t,r,a){return e[1]&&a?s(r.ctx.slice(),e[1](a(t))):r.ctx}function l(e,s){e.appendChild(s)}function i(e,s,t){e.insertBefore(s,t||null)}function f(e){e.parentNode.removeChild(e)}function u(e,s){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(s)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function v(){return p(" ")}function d(){return p("")}function m(e,s,t,r){return e.addEventListener(s,t,r),()=>e.removeEventListener(s,t,r)}function g(e,s,t){null==t?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function E(e){return Array.from(e.childNodes)}function $(e,s,t,r){for(let r=0;r<e.length;r+=1){const a=e[r];if(a.nodeName===s){let s=0;for(;s<a.attributes.length;){const e=a.attributes[s];t[e.name]?s++:a.removeAttribute(e.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(s):h(s)}function y(e,s){for(let t=0;t<e.length;t+=1){const r=e[t];if(3===r.nodeType)return r.data=""+s,e.splice(t,1)[0]}return p(s)}function w(e){return y(e," ")}function b(e,s){s=""+s,e.data!==s&&(e.data=s)}function A(e,s=document.body){return Array.from(s.querySelectorAll(e))}let q;function L(e){q=e}function S(){if(!q)throw new Error("Function called outside component initialization");return q}const I=[],k=[],x=[],P=[],j=Promise.resolve();let D=!1;function _(e){x.push(e)}let N=!1;const C=new Set;function R(){if(!N){N=!0;do{for(let e=0;e<I.length;e+=1){const s=I[e];L(s),U(s.$$)}for(I.length=0;k.length;)k.pop()();for(let e=0;e<x.length;e+=1){const s=x[e];C.has(s)||(C.add(s),s())}x.length=0}while(I.length);for(;P.length;)P.pop()();D=!1,N=!1,C.clear()}}function U(e){if(null!==e.fragment){e.update(),a(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(_)}}const O=new Set;let V;function T(){V={r:0,c:[],p:V}}function F(){V.r||a(V.c),V=V.p}function B(e,s){e&&e.i&&(O.delete(e),e.i(s))}function J(e,s,t,r){if(e&&e.o){if(O.has(e))return;O.add(e),V.c.push(()=>{O.delete(e),r&&(t&&e.d(1),r())}),e.o(s)}}function G(e,s){const t={},r={},a={$$scope:1};let n=e.length;for(;n--;){const c=e[n],o=s[n];if(o){for(const e in c)e in o||(r[e]=1);for(const e in o)a[e]||(t[e]=o[e],a[e]=1);e[n]=o}else for(const e in c)a[e]=1}for(const e in r)e in t||(t[e]=void 0);return t}function M(e){return"object"==typeof e&&null!==e?e:{}}function H(e){e&&e.c()}function K(e,s){e&&e.l(s)}function z(e,s,r){const{fragment:c,on_mount:o,on_destroy:l,after_update:i}=e.$$;c&&c.m(s,r),_(()=>{const s=o.map(t).filter(n);l?l.push(...s):a(s),e.$$.on_mount=[]}),i.forEach(_)}function Y(e,s){const t=e.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function W(e,s){-1===e.$$.dirty[0]&&(I.push(e),D||(D=!0,j.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function X(s,t,n,c,o,l,i=[-1]){const u=q;L(s);const h=t.props||{},p=s.$$={fragment:null,ctx:null,props:l,update:e,not_equal:o,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let v=!1;if(p.ctx=n?n(s,h,(e,t,...r)=>{const a=r.length?r[0]:t;return p.ctx&&o(p.ctx[e],p.ctx[e]=a)&&(p.bound[e]&&p.bound[e](a),v&&W(s,e)),t}):[],p.update(),v=!0,a(p.before_update),p.fragment=!!c&&c(p.ctx),t.target){if(t.hydrate){const e=E(t.target);p.fragment&&p.fragment.l(e),e.forEach(f)}else p.fragment&&p.fragment.c();t.intro&&B(s.$$.fragment),z(s,t.target,t.anchor),R()}L(u)}class Q{$destroy(){Y(this,1),this.$destroy=e}$on(e,s){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(s),()=>{const e=t.indexOf(s);-1!==e&&t.splice(e,1)}}$set(){}}const Z=[];function ee(s,t=e){let r;const a=[];function n(e){if(c(s,e)&&(s=e,r)){const e=!Z.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),Z.push(t,s)}if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:n,update:function(e){n(e(s))},subscribe:function(c,o=e){const l=[c,o];return a.push(l),1===a.length&&(r=t(n)||e),c(s),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(r(),r=null)}}}}const se={},te=()=>({});function re(s){let t,r,a,n,c,o,u,d,m,b,A,q,L,S,I,k,x,P,j,D,_,N,C,R,U,O,V,T,F;return{c(){t=h("div"),r=h("input"),a=v(),n=h("span"),c=v(),o=h("span"),u=v(),d=h("span"),m=v(),b=h("ul"),A=h("li"),q=h("a"),L=p("Features"),S=v(),I=h("li"),k=h("a"),x=p("Comparison"),P=v(),j=h("li"),D=h("a"),_=p("Documentation"),N=v(),C=h("li"),R=h("a"),U=p("Pricing"),O=v(),V=h("li"),T=h("a"),F=p("Open Sources"),this.h()},l(e){t=$(e,"DIV",{id:!0,class:!0});var s=E(t);r=$(s,"INPUT",{type:!0,class:!0}),a=w(s),n=$(s,"SPAN",{class:!0}),E(n).forEach(f),c=w(s),o=$(s,"SPAN",{class:!0}),E(o).forEach(f),u=w(s),d=$(s,"SPAN",{class:!0}),E(d).forEach(f),m=w(s),b=$(s,"UL",{id:!0,class:!0});var l=E(b);A=$(l,"LI",{class:!0});var i=E(A);q=$(i,"A",{class:!0});var h=E(q);L=y(h,"Features"),h.forEach(f),i.forEach(f),S=w(l),I=$(l,"LI",{class:!0});var p=E(I);k=$(p,"A",{class:!0});var v=E(k);x=y(v,"Comparison"),v.forEach(f),p.forEach(f),P=w(l),j=$(l,"LI",{class:!0});var g=E(j);D=$(g,"A",{class:!0});var B=E(D);_=y(B,"Documentation"),B.forEach(f),g.forEach(f),N=w(l),C=$(l,"LI",{class:!0});var J=E(C);R=$(J,"A",{class:!0});var G=E(R);U=y(G,"Pricing"),G.forEach(f),J.forEach(f),O=w(l),V=$(l,"LI",{class:!0});var M=E(V);T=$(M,"A",{class:!0});var H=E(T);F=y(H,"Open Sources"),H.forEach(f),M.forEach(f),l.forEach(f),s.forEach(f),this.h()},h(){g(r,"type","checkbox"),g(r,"class","svelte-11his3i"),g(n,"class","svelte-11his3i"),g(o,"class","svelte-11his3i"),g(d,"class","svelte-11his3i"),g(q,"class","svelte-11his3i"),g(A,"class","svelte-11his3i"),g(k,"class","svelte-11his3i"),g(I,"class","svelte-11his3i"),g(D,"class","svelte-11his3i"),g(j,"class","svelte-11his3i"),g(R,"class","svelte-11his3i"),g(C,"class","svelte-11his3i"),g(T,"class","svelte-11his3i"),g(V,"class","svelte-11his3i"),g(b,"id","mobile-menu-list"),g(b,"class","svelte-11his3i"),g(t,"id","mobile-menu"),g(t,"class","svelte-11his3i")},m(e,s){i(e,t,s),l(t,r),l(t,a),l(t,n),l(t,c),l(t,o),l(t,u),l(t,d),l(t,m),l(t,b),l(b,A),l(A,q),l(q,L),l(b,S),l(b,I),l(I,k),l(k,x),l(b,P),l(b,j),l(j,D),l(D,_),l(b,N),l(b,C),l(C,R),l(R,U),l(b,O),l(b,V),l(V,T),l(T,F)},p:e,i:e,o:e,d(e){e&&f(t)}}}class ae extends Q{constructor(e){super(),X(this,e,null,re,c,{})}}function ne(s){let t,r,a,n,c,o,u,d,m,b,A,q,L,S,I,k,x,P,j,D,_,N,C,R,U,O,V,T,F,G,M,W,X,Q,Z,ee;const se=new ae({});return{c(){t=h("header"),r=h("div"),a=h("div"),n=h("div"),c=h("a"),o=h("img"),d=v(),m=h("div"),b=h("nav"),A=h("ul"),q=h("li"),L=h("a"),S=p("Features"),I=v(),k=h("li"),x=h("a"),P=p("Comparison"),j=v(),D=h("li"),_=h("a"),N=p("Documentation"),C=v(),R=h("li"),U=h("a"),O=p("Pricing"),V=v(),T=h("li"),F=h("a"),G=p("Open Sources"),M=v(),W=h("li"),X=h("a"),Q=p("Talk to Us"),Z=v(),H(se.$$.fragment),this.h()},l(e){t=$(e,"HEADER",{class:!0});var s=E(t);r=$(s,"DIV",{class:!0});var l=E(r);a=$(l,"DIV",{class:!0});var i=E(a);n=$(i,"DIV",{class:!0});var u=E(n);c=$(u,"A",{href:!0,class:!0});var h=E(c);o=$(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(f),u.forEach(f),d=w(i),m=$(i,"DIV",{class:!0});var p=E(m);b=$(p,"NAV",{class:!0});var v=E(b);A=$(v,"UL",{class:!0});var g=E(A);q=$(g,"LI",{class:!0});var B=E(q);L=$(B,"A",{class:!0});var J=E(L);S=y(J,"Features"),J.forEach(f),B.forEach(f),I=w(g),k=$(g,"LI",{class:!0});var H=E(k);x=$(H,"A",{class:!0});var z=E(x);P=y(z,"Comparison"),z.forEach(f),H.forEach(f),j=w(g),D=$(g,"LI",{class:!0});var Y=E(D);_=$(Y,"A",{class:!0});var ee=E(_);N=y(ee,"Documentation"),ee.forEach(f),Y.forEach(f),C=w(g),R=$(g,"LI",{class:!0});var te=E(R);U=$(te,"A",{class:!0});var re=E(U);O=y(re,"Pricing"),re.forEach(f),te.forEach(f),V=w(g),T=$(g,"LI",{class:!0});var ae=E(T);F=$(ae,"A",{class:!0});var ne=E(F);G=y(ne,"Open Sources"),ne.forEach(f),ae.forEach(f),M=w(g),W=$(g,"LI",{class:!0});var ce=E(W);X=$(ce,"A",{class:!0});var oe=E(X);Q=y(oe,"Talk to Us"),oe.forEach(f),ce.forEach(f),g.forEach(f),v.forEach(f),p.forEach(f),i.forEach(f),l.forEach(f),s.forEach(f),Z=w(e),K(se.$$.fragment,e),this.h()},h(){o.src!==(u="header-logo.png")&&g(o,"src","header-logo.png"),g(o,"alt","Skygear Auth Logo"),g(o,"class","svelte-1vpjnks"),g(c,"href","/"),g(c,"class","svelte-1vpjnks"),g(n,"class","logo-wrapper col-6 col-sm-6 col-md-3 svelte-1vpjnks"),g(L,"class","svelte-1vpjnks"),g(q,"class","svelte-1vpjnks"),g(x,"class","svelte-1vpjnks"),g(k,"class","svelte-1vpjnks"),g(_,"class","svelte-1vpjnks"),g(D,"class","svelte-1vpjnks"),g(U,"class","svelte-1vpjnks"),g(R,"class","svelte-1vpjnks"),g(F,"class","svelte-1vpjnks"),g(T,"class","svelte-1vpjnks"),g(X,"class","svelte-1vpjnks"),g(W,"class","action-item svelte-1vpjnks"),g(A,"class","svelte-1vpjnks"),g(b,"class","svelte-1vpjnks"),g(m,"class","links-wrapper col-6 col-sm-6 col-md-9 svelte-1vpjnks"),g(a,"class","row"),g(r,"class","container-fluid svelte-1vpjnks"),g(t,"class","svelte-1vpjnks")},m(e,s){i(e,t,s),l(t,r),l(r,a),l(a,n),l(n,c),l(c,o),l(a,d),l(a,m),l(m,b),l(b,A),l(A,q),l(q,L),l(L,S),l(A,I),l(A,k),l(k,x),l(x,P),l(A,j),l(A,D),l(D,_),l(_,N),l(A,C),l(A,R),l(R,U),l(U,O),l(A,V),l(A,T),l(T,F),l(F,G),l(A,M),l(A,W),l(W,X),l(X,Q),i(e,Z,s),z(se,e,s),ee=!0},p:e,i(e){ee||(B(se.$$.fragment,e),ee=!0)},o(e){J(se.$$.fragment,e),ee=!1},d(e){e&&f(t),e&&f(Z),Y(se,e)}}}class ce extends Q{constructor(e){super(),X(this,e,null,ne,c,{})}}function oe(s){let t,r,a,n,c,o,u,d,m,b,A,q,L,S,I,k,x,P,j,D,_,N,C,R,U,O,V,T,F,B,J,G,M,H,K,z,Y,W,X,Q,Z,ee,se,te,re,ae,ne,ce,oe,le,ie,fe,ue,he,pe,ve,de,me,ge,Ee,$e,ye,we,be,Ae,qe,Le,Se,Ie,ke,xe,Pe,je,De,_e,Ne,Ce,Re,Ue,Oe,Ve,Te,Fe,Be,Je,Ge,Me,He,Ke,ze,Ye,We,Xe,Qe,Ze,es,ss,ts;return{c(){t=h("footer"),r=h("div"),a=h("div"),n=h("div"),c=h("img"),u=v(),d=h("div"),m=h("span"),b=p("Learn"),A=v(),q=h("ul"),L=h("li"),S=h("a"),I=p("Blog"),k=v(),x=h("li"),P=h("a"),j=p("Demo Projects"),D=v(),_=h("li"),N=h("a"),C=p("Documentation"),R=v(),U=h("li"),O=h("a"),V=p("Tutorials"),T=v(),F=h("li"),B=h("a"),J=p("Terms of Services"),G=v(),M=h("li"),H=h("a"),K=p("Our Promises"),z=v(),Y=h("li"),W=h("a"),X=p("Acceptable Use Policy"),Q=v(),Z=h("li"),ee=h("a"),se=p("Data Privacy Policy"),te=v(),re=h("li"),ae=h("a"),ne=p("Service Level Agreement"),ce=v(),oe=h("li"),le=h("a"),ie=p("Security"),fe=v(),ue=h("div"),he=h("span"),pe=p("Company"),ve=v(),de=h("ul"),me=h("li"),ge=h("a"),Ee=p("Team"),$e=v(),ye=h("li"),we=h("a"),be=p("Contact"),Ae=v(),qe=h("li"),Le=h("a"),Se=p("Jobs"),Ie=v(),ke=h("div"),xe=h("span"),Pe=p("Connect"),je=v(),De=h("ul"),_e=h("li"),Ne=h("a"),Ce=p("Twitter"),Re=v(),Ue=h("li"),Oe=h("a"),Ve=p("Facebook"),Te=v(),Fe=h("li"),Be=h("a"),Je=p("Github"),Ge=v(),Me=h("li"),He=h("a"),Ke=p("Discourse"),ze=v(),Ye=h("div"),We=h("div"),Xe=h("a"),Qe=p("hello@skygear.io"),Ze=v(),es=h("div"),ss=h("span"),ts=p("© Oursky Ltd. All rights reserved"),this.h()},l(e){t=$(e,"FOOTER",{class:!0});var s=E(t);r=$(s,"DIV",{class:!0});var o=E(r);a=$(o,"DIV",{class:!0});var l=E(a);n=$(l,"DIV",{class:!0});var i=E(n);c=$(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(f),u=w(l),d=$(l,"DIV",{class:!0});var h=E(d);m=$(h,"SPAN",{class:!0});var p=E(m);b=y(p,"Learn"),p.forEach(f),A=w(h),q=$(h,"UL",{class:!0});var v=E(q);L=$(v,"LI",{class:!0});var g=E(L);S=$(g,"A",{class:!0});var rs=E(S);I=y(rs,"Blog"),rs.forEach(f),g.forEach(f),k=w(v),x=$(v,"LI",{class:!0});var as=E(x);P=$(as,"A",{class:!0});var ns=E(P);j=y(ns,"Demo Projects"),ns.forEach(f),as.forEach(f),D=w(v),_=$(v,"LI",{class:!0});var cs=E(_);N=$(cs,"A",{class:!0});var os=E(N);C=y(os,"Documentation"),os.forEach(f),cs.forEach(f),R=w(v),U=$(v,"LI",{class:!0});var ls=E(U);O=$(ls,"A",{class:!0});var is=E(O);V=y(is,"Tutorials"),is.forEach(f),ls.forEach(f),T=w(v),F=$(v,"LI",{class:!0});var fs=E(F);B=$(fs,"A",{class:!0});var us=E(B);J=y(us,"Terms of Services"),us.forEach(f),fs.forEach(f),G=w(v),M=$(v,"LI",{class:!0});var hs=E(M);H=$(hs,"A",{class:!0});var ps=E(H);K=y(ps,"Our Promises"),ps.forEach(f),hs.forEach(f),z=w(v),Y=$(v,"LI",{class:!0});var vs=E(Y);W=$(vs,"A",{class:!0});var ds=E(W);X=y(ds,"Acceptable Use Policy"),ds.forEach(f),vs.forEach(f),Q=w(v),Z=$(v,"LI",{class:!0});var ms=E(Z);ee=$(ms,"A",{class:!0});var gs=E(ee);se=y(gs,"Data Privacy Policy"),gs.forEach(f),ms.forEach(f),te=w(v),re=$(v,"LI",{class:!0});var Es=E(re);ae=$(Es,"A",{class:!0});var $s=E(ae);ne=y($s,"Service Level Agreement"),$s.forEach(f),Es.forEach(f),ce=w(v),oe=$(v,"LI",{class:!0});var ys=E(oe);le=$(ys,"A",{class:!0});var ws=E(le);ie=y(ws,"Security"),ws.forEach(f),ys.forEach(f),v.forEach(f),h.forEach(f),fe=w(l),ue=$(l,"DIV",{class:!0});var bs=E(ue);he=$(bs,"SPAN",{class:!0});var As=E(he);pe=y(As,"Company"),As.forEach(f),ve=w(bs),de=$(bs,"UL",{class:!0});var qs=E(de);me=$(qs,"LI",{class:!0});var Ls=E(me);ge=$(Ls,"A",{class:!0});var Ss=E(ge);Ee=y(Ss,"Team"),Ss.forEach(f),Ls.forEach(f),$e=w(qs),ye=$(qs,"LI",{class:!0});var Is=E(ye);we=$(Is,"A",{class:!0});var ks=E(we);be=y(ks,"Contact"),ks.forEach(f),Is.forEach(f),Ae=w(qs),qe=$(qs,"LI",{class:!0});var xs=E(qe);Le=$(xs,"A",{class:!0});var Ps=E(Le);Se=y(Ps,"Jobs"),Ps.forEach(f),xs.forEach(f),qs.forEach(f),bs.forEach(f),Ie=w(l),ke=$(l,"DIV",{class:!0});var js=E(ke);xe=$(js,"SPAN",{class:!0});var Ds=E(xe);Pe=y(Ds,"Connect"),Ds.forEach(f),je=w(js),De=$(js,"UL",{class:!0});var _s=E(De);_e=$(_s,"LI",{class:!0});var Ns=E(_e);Ne=$(Ns,"A",{class:!0});var Cs=E(Ne);Ce=y(Cs,"Twitter"),Cs.forEach(f),Ns.forEach(f),Re=w(_s),Ue=$(_s,"LI",{class:!0});var Rs=E(Ue);Oe=$(Rs,"A",{class:!0});var Us=E(Oe);Ve=y(Us,"Facebook"),Us.forEach(f),Rs.forEach(f),Te=w(_s),Fe=$(_s,"LI",{class:!0});var Os=E(Fe);Be=$(Os,"A",{class:!0});var Vs=E(Be);Je=y(Vs,"Github"),Vs.forEach(f),Os.forEach(f),Ge=w(_s),Me=$(_s,"LI",{class:!0});var Ts=E(Me);He=$(Ts,"A",{class:!0});var Fs=E(He);Ke=y(Fs,"Discourse"),Fs.forEach(f),Ts.forEach(f),_s.forEach(f),js.forEach(f),l.forEach(f),ze=w(o),Ye=$(o,"DIV",{class:!0});var Bs=E(Ye);We=$(Bs,"DIV",{class:!0});var Js=E(We);Xe=$(Js,"A",{href:!0});var Gs=E(Xe);Qe=y(Gs,"hello@skygear.io"),Gs.forEach(f),Js.forEach(f),Ze=w(Bs),es=$(Bs,"DIV",{class:!0});var Ms=E(es);ss=$(Ms,"SPAN",{});var Hs=E(ss);ts=y(Hs,"© Oursky Ltd. All rights reserved"),Hs.forEach(f),Ms.forEach(f),Bs.forEach(f),o.forEach(f),s.forEach(f),this.h()},h(){g(c,"class","footer-logo svelte-8wq1sh"),c.src!==(o="footer-logo.png")&&g(c,"src","footer-logo.png"),g(c,"alt","Footer Logo"),g(n,"class","col-12 col-md-6"),g(m,"class","sitemap-title svelte-8wq1sh"),g(S,"class","svelte-8wq1sh"),g(L,"class","svelte-8wq1sh"),g(P,"class","svelte-8wq1sh"),g(x,"class","svelte-8wq1sh"),g(N,"class","svelte-8wq1sh"),g(_,"class","svelte-8wq1sh"),g(O,"class","svelte-8wq1sh"),g(U,"class","svelte-8wq1sh"),g(B,"class","svelte-8wq1sh"),g(F,"class","svelte-8wq1sh"),g(H,"class","svelte-8wq1sh"),g(M,"class","svelte-8wq1sh"),g(W,"class","svelte-8wq1sh"),g(Y,"class","svelte-8wq1sh"),g(ee,"class","svelte-8wq1sh"),g(Z,"class","svelte-8wq1sh"),g(ae,"class","svelte-8wq1sh"),g(re,"class","svelte-8wq1sh"),g(le,"class","svelte-8wq1sh"),g(oe,"class","svelte-8wq1sh"),g(q,"class","sitemap-list svelte-8wq1sh"),g(d,"class","col-12 col-md-2"),g(he,"class","sitemap-title svelte-8wq1sh"),g(ge,"class","svelte-8wq1sh"),g(me,"class","svelte-8wq1sh"),g(we,"class","svelte-8wq1sh"),g(ye,"class","svelte-8wq1sh"),g(Le,"class","svelte-8wq1sh"),g(qe,"class","svelte-8wq1sh"),g(de,"class","sitemap-list svelte-8wq1sh"),g(ue,"class","col-12 col-md-2"),g(xe,"class","sitemap-title svelte-8wq1sh"),g(Ne,"class","svelte-8wq1sh"),g(_e,"class","svelte-8wq1sh"),g(Oe,"class","svelte-8wq1sh"),g(Ue,"class","svelte-8wq1sh"),g(Be,"class","svelte-8wq1sh"),g(Fe,"class","svelte-8wq1sh"),g(He,"class","svelte-8wq1sh"),g(Me,"class","svelte-8wq1sh"),g(De,"class","sitemap-list svelte-8wq1sh"),g(ke,"class","col-12 col-md-2"),g(a,"class","row"),g(Xe,"href","mailto:hello@skygear.io"),g(We,"class","col-12 col-md-6"),g(es,"class","col-12 col-md-6 copyright svelte-8wq1sh"),g(Ye,"class","row copyright-wrapper svelte-8wq1sh"),g(r,"class","container-fluid svelte-8wq1sh"),g(t,"class","svelte-8wq1sh")},m(e,s){i(e,t,s),l(t,r),l(r,a),l(a,n),l(n,c),l(a,u),l(a,d),l(d,m),l(m,b),l(d,A),l(d,q),l(q,L),l(L,S),l(S,I),l(q,k),l(q,x),l(x,P),l(P,j),l(q,D),l(q,_),l(_,N),l(N,C),l(q,R),l(q,U),l(U,O),l(O,V),l(q,T),l(q,F),l(F,B),l(B,J),l(q,G),l(q,M),l(M,H),l(H,K),l(q,z),l(q,Y),l(Y,W),l(W,X),l(q,Q),l(q,Z),l(Z,ee),l(ee,se),l(q,te),l(q,re),l(re,ae),l(ae,ne),l(q,ce),l(q,oe),l(oe,le),l(le,ie),l(a,fe),l(a,ue),l(ue,he),l(he,pe),l(ue,ve),l(ue,de),l(de,me),l(me,ge),l(ge,Ee),l(de,$e),l(de,ye),l(ye,we),l(we,be),l(de,Ae),l(de,qe),l(qe,Le),l(Le,Se),l(a,Ie),l(a,ke),l(ke,xe),l(xe,Pe),l(ke,je),l(ke,De),l(De,_e),l(_e,Ne),l(Ne,Ce),l(De,Re),l(De,Ue),l(Ue,Oe),l(Oe,Ve),l(De,Te),l(De,Fe),l(Fe,Be),l(Be,Je),l(De,Ge),l(De,Me),l(Me,He),l(He,Ke),l(r,ze),l(r,Ye),l(Ye,We),l(We,Xe),l(Xe,Qe),l(Ye,Ze),l(Ye,es),l(es,ss),l(ss,ts)},p:e,i:e,o:e,d(e){e&&f(t)}}}class le extends Q{constructor(e){super(),X(this,e,null,oe,c,{})}}function ie(e){let s,t,r,a;const n=new ce({}),c=e[2].default,l=function(e,s,t,r){if(e){const a=o(e,s,t,r);return e[0](a)}}(c,e,e[1],null),u=new le({});return{c(){H(n.$$.fragment),s=v(),t=h("main"),l&&l.c(),r=v(),H(u.$$.fragment)},l(e){K(n.$$.fragment,e),s=w(e),t=$(e,"MAIN",{});var a=E(t);l&&l.l(a),a.forEach(f),r=w(e),K(u.$$.fragment,e)},m(e,c){z(n,e,c),i(e,s,c),i(e,t,c),l&&l.m(t,null),i(e,r,c),z(u,e,c),a=!0},p(e,[s]){l&&l.p&&2&s&&l.p(o(c,e,e[1],null),function(e,s,t,r){if(e[2]&&r){const a=e[2](r(t));if(void 0===s.dirty)return a;if("object"==typeof a){const e=[],t=Math.max(s.dirty.length,a.length);for(let r=0;r<t;r+=1)e[r]=s.dirty[r]|a[r];return e}return s.dirty|a}return s.dirty}(c,e[1],s,null))},i(e){a||(B(n.$$.fragment,e),B(l,e),B(u.$$.fragment,e),a=!0)},o(e){J(n.$$.fragment,e),J(l,e),J(u.$$.fragment,e),a=!1},d(e){Y(n,e),e&&f(s),e&&f(t),l&&l.d(e),e&&f(r),Y(u,e)}}}function fe(e,s,t){let{segment:r}=s,{$$slots:a={},$$scope:n}=s;return e.$set=e=>{"segment"in e&&t(0,r=e.segment),"$$scope"in e&&t(1,n=e.$$scope)},[r,n,a]}class ue extends Q{constructor(e){super(),X(this,e,fe,ie,c,{segment:0})}}function he(e){let s,t,r=e[1].stack+"";return{c(){s=h("pre"),t=p(r)},l(e){s=$(e,"PRE",{});var a=E(s);t=y(a,r),a.forEach(f)},m(e,r){i(e,s,r),l(s,t)},p(e,s){2&s&&r!==(r=e[1].stack+"")&&b(t,r)},d(e){e&&f(s)}}}function pe(s){let t,r,a,n,c,o,u,m,q,L=s[1].message+"";document.title=t=s[0];let S=s[2]&&s[1].stack&&he(s);return{c(){r=v(),a=h("h1"),n=p(s[0]),c=v(),o=h("p"),u=p(L),m=v(),S&&S.c(),q=d(),this.h()},l(e){A('[data-svelte="svelte-1moakz"]',document.head).forEach(f),r=w(e),a=$(e,"H1",{class:!0});var t=E(a);n=y(t,s[0]),t.forEach(f),c=w(e),o=$(e,"P",{class:!0});var l=E(o);u=y(l,L),l.forEach(f),m=w(e),S&&S.l(e),q=d(),this.h()},h(){g(a,"class","svelte-y9wctx"),g(o,"class","svelte-y9wctx")},m(e,s){i(e,r,s),i(e,a,s),l(a,n),i(e,c,s),i(e,o,s),l(o,u),i(e,m,s),S&&S.m(e,s),i(e,q,s)},p(e,[s]){1&s&&t!==(t=e[0])&&(document.title=t),1&s&&b(n,e[0]),2&s&&L!==(L=e[1].message+"")&&b(u,L),e[2]&&e[1].stack?S?S.p(e,s):(S=he(e),S.c(),S.m(q.parentNode,q)):S&&(S.d(1),S=null)},i:e,o:e,d(e){e&&f(r),e&&f(a),e&&f(c),e&&f(o),e&&f(m),S&&S.d(e),e&&f(q)}}}function ve(e,s,t){let{status:r}=s,{error:a}=s;return e.$set=e=>{"status"in e&&t(0,r=e.status),"error"in e&&t(1,a=e.error)},[r,a,!1]}class de extends Q{constructor(e){super(),X(this,e,ve,pe,c,{status:0,error:1})}}function me(e){let t,r;const a=[e[4].props];var n=e[4].component;function c(e){let t={};for(let e=0;e<a.length;e+=1)t=s(t,a[e]);return{props:t}}if(n)var o=new n(c());return{c(){o&&H(o.$$.fragment),t=d()},l(e){o&&K(o.$$.fragment,e),t=d()},m(e,s){o&&z(o,e,s),i(e,t,s),r=!0},p(e,s){const r=16&s?G(a,[M(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){T();const e=o;J(e.$$.fragment,1,0,()=>{Y(e,1)}),F()}n?(H((o=new n(c())).$$.fragment),B(o.$$.fragment,1),z(o,t.parentNode,t)):o=null}else n&&o.$set(r)},i(e){r||(o&&B(o.$$.fragment,e),r=!0)},o(e){o&&J(o.$$.fragment,e),r=!1},d(e){e&&f(t),o&&Y(o,e)}}}function ge(e){let s;const t=new de({props:{error:e[0],status:e[1]}});return{c(){H(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,r){z(t,e,r),s=!0},p(e,s){const r={};1&s&&(r.error=e[0]),2&s&&(r.status=e[1]),t.$set(r)},i(e){s||(B(t.$$.fragment,e),s=!0)},o(e){J(t.$$.fragment,e),s=!1},d(e){Y(t,e)}}}function Ee(e){let s,t,r,a;const n=[ge,me],c=[];function o(e,s){return e[0]?0:1}return s=o(e),t=c[s]=n[s](e),{c(){t.c(),r=d()},l(e){t.l(e),r=d()},m(e,t){c[s].m(e,t),i(e,r,t),a=!0},p(e,a){let l=s;s=o(e),s===l?c[s].p(e,a):(T(),J(c[l],1,1,()=>{c[l]=null}),F(),t=c[s],t||(t=c[s]=n[s](e),t.c()),B(t,1),t.m(r.parentNode,r))},i(e){a||(B(t),a=!0)},o(e){J(t),a=!1},d(e){c[s].d(e),e&&f(r)}}}function $e(e){let t;const r=[{segment:e[2][0]},e[3].props];let a={$$slots:{default:[Ee]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=s(a,r[e]);const n=new ue({props:a});return{c(){H(n.$$.fragment)},l(e){K(n.$$.fragment,e)},m(e,s){z(n,e,s),t=!0},p(e,[s]){const t=12&s?G(r,[4&s&&{segment:e[2][0]},8&s&&M(e[3].props)]):{};147&s&&(t.$$scope={dirty:s,ctx:e}),n.$set(t)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){Y(n,e)}}}function ye(e,s,t){let{stores:r}=s,{error:a}=s,{status:n}=s,{segments:c}=s,{level0:o}=s,{level1:l=null}=s,{notify:i}=s;var f,u,h;return f=i,S().$$.after_update.push(f),u=se,h=r,S().$$.context.set(u,h),e.$set=e=>{"stores"in e&&t(5,r=e.stores),"error"in e&&t(0,a=e.error),"status"in e&&t(1,n=e.status),"segments"in e&&t(2,c=e.segments),"level0"in e&&t(3,o=e.level0),"level1"in e&&t(4,l=e.level1),"notify"in e&&t(6,i=e.notify)},[a,n,c,o,l,r,i]}class we extends Q{constructor(e){super(),X(this,e,ye,$e,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const be=[],Ae=[{js:()=>import("./index.1a1cdbdc.js"),css:[]}],qe=[{pattern:/^\/$/,parts:[{i:0}]}];const Le="undefined"!=typeof __SAPPER__&&__SAPPER__;let Se,Ie,ke,xe=!1,Pe=[],je="{}";const De={page:function(e){const s=ee(e);let t=!0;return{notify:function(){t=!0,s.update(e=>e)},set:function(e){t=!1,s.set(e)},subscribe:function(e){let r;return s.subscribe(s=>{(void 0===r||t&&s!==r)&&e(r=s)})}}}({}),preloading:ee(null),session:ee(Le&&Le.session)};let _e,Ne;De.session.subscribe(async e=>{if(_e=e,!xe)return;Ne=!0;const s=Be(new URL(location.href)),t=Ie={},{redirect:r,props:a,branch:n}=await He(s);t===Ie&&await Me(r,n,a,s.page)});let Ce,Re=null;let Ue,Oe=1;const Ve="undefined"!=typeof history?history:{pushState:(e,s,t)=>{},replaceState:(e,s,t)=>{},scrollRestoration:""},Te={};function Fe(e){const s=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,t,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof s[t]&&(s[t]=[s[t]]),"object"==typeof s[t]?s[t].push(r):s[t]=r}),s}function Be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Le.baseUrl))return null;let s=e.pathname.slice(Le.baseUrl.length);if(""===s&&(s="/"),!be.some(e=>e.test(s)))for(let t=0;t<qe.length;t+=1){const r=qe[t],a=r.pattern.exec(s);if(a){const t=Fe(e.search),n=r.parts[r.parts.length-1],c=n.params?n.params(a):{},o={host:location.host,path:s,query:t,params:c};return{href:e.href,route:r,match:a,page:o}}}}function Je(){return{x:pageXOffset,y:pageYOffset}}async function Ge(e,s,t,r){if(s)Ue=s;else{const e=Je();Te[Ue]=e,s=Ue=++Oe,Te[Ue]=t?e:{x:0,y:0}}Ue=s,Se&&De.preloading.set(!0);const a=Re&&Re.href===e.href?Re.promise:He(e);Re=null;const n=Ie={},{redirect:c,props:o,branch:l}=await a;if(n===Ie&&(await Me(c,l,o,e.page),document.activeElement&&document.activeElement.blur(),!t)){let e=Te[s];if(r){const s=document.getElementById(r.slice(1));s&&(e={x:0,y:s.getBoundingClientRect().top+scrollY})}Te[Ue]=e,e&&scrollTo(e.x,e.y)}}async function Me(e,s,t,r){if(e)return function(e,s={replaceState:!1}){const t=Be(new URL(e,document.baseURI));return t?(Ve[s.replaceState?"replaceState":"pushState"]({id:Ue},"",e),Ge(t,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(De.page.set(r),De.preloading.set(!1),Se)Se.$set(t);else{t.stores={page:{subscribe:De.page.subscribe},preloading:{subscribe:De.preloading.subscribe},session:De.session},t.level0={props:await ke},t.notify=De.page.notify;const e=document.querySelector("#sapper-head-start"),s=document.querySelector("#sapper-head-end");if(e&&s){for(;e.nextSibling!==s;)ze(e.nextSibling);ze(e),ze(s)}Se=new we({target:Ce,props:t,hydrate:!0})}Pe=s,je=JSON.stringify(r.query),xe=!0,Ne=!1}async function He(e){const{route:s,page:t}=e,r=t.path.split("/").filter(Boolean);let a=null;const n={error:null,status:200,segments:[r[0]]},c={fetch:(e,s)=>fetch(e,s),redirect:(e,s)=>{if(a&&(a.statusCode!==e||a.location!==s))throw new Error("Conflicting redirects");a={statusCode:e,location:s}},error:(e,s)=>{n.error="string"==typeof s?new Error(s):s,n.status=e}};let o;ke||(ke=Le.preloaded[0]||te.call(c,{host:t.host,path:t.path,query:t.query,params:{}},_e));let l=1;try{const a=JSON.stringify(t.query),i=s.pattern.exec(t.path);let f=!1;o=await Promise.all(s.parts.map(async(s,o)=>{const u=r[o];if(function(e,s,t,r){if(r!==je)return!0;const a=Pe[e];return!!a&&(s!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(t.slice(1,e+2)))||void 0))}(o,u,i,a)&&(f=!0),n.segments[l]=r[o+1],!s)return{segment:u};const h=l++;if(!Ne&&!f&&Pe[o]&&Pe[o].part===s.i)return Pe[o];f=!1;const{default:p,preload:v}=await function(e){const s="string"==typeof e.css?[]:e.css.map(Ke);return s.unshift(e.js()),Promise.all(s).then(e=>e[0])}(Ae[s.i]);let d;return d=xe||!Le.preloaded[o+1]?v?await v.call(c,{host:t.host,path:t.path,query:t.query,params:s.params?s.params(e.match):{}},_e):{}:Le.preloaded[o+1],n["level"+h]={component:p,props:d,segment:u,match:i,part:s.i}}))}catch(e){n.error=e,n.status=500,o=[]}return{redirect:a,props:n,branch:o}}function Ke(e){const s="client/"+e;if(!document.querySelector(`link[href="${s}"]`))return new Promise((e,t)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=s,r.onload=()=>e(),r.onerror=t,document.head.appendChild(r)})}function ze(e){e.parentNode.removeChild(e)}function Ye(e){const s=Be(new URL(e,document.baseURI));if(s)return Re&&e===Re.href||function(e,s){Re={href:e,promise:s}}(e,He(s)),Re.promise}let We;function Xe(e){clearTimeout(We),We=setTimeout(()=>{Qe(e)},20)}function Qe(e){const s=es(e.target);s&&"prefetch"===s.rel&&Ye(s.href)}function Ze(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const s=es(e.target);if(!s)return;if(!s.href)return;const t="object"==typeof s.href&&"SVGAnimatedString"===s.href.constructor.name,r=String(t?s.href.baseVal:s.href);if(r===location.href)return void(location.hash||e.preventDefault());if(s.hasAttribute("download")||"external"===s.getAttribute("rel"))return;if(t?s.target.baseVal:s.target)return;const a=new URL(r);if(a.pathname===location.pathname&&a.search===location.search)return;const n=Be(a);if(n){Ge(n,null,s.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Ve.pushState({id:Ue},"",a.href)}}function es(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ss(e){if(Te[Ue]=Je(),e.state){const s=Be(new URL(location.href));s?Ge(s,e.state.id):location.href=location.href}else Oe=Oe+1,function(e){Ue=e}(Oe),Ve.replaceState({id:Ue},"",location.href)}var ts;ts={target:document.querySelector("#sapper")},"scrollRestoration"in Ve&&(Ve.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ve.scrollRestoration="auto"}),addEventListener("load",()=>{Ve.scrollRestoration="manual"}),function(e){Ce=e}(ts.target),addEventListener("click",Ze),addEventListener("popstate",ss),addEventListener("touchstart",Qe),addEventListener("mousemove",Xe),Promise.resolve().then(()=>{const{hash:e,href:s}=location;Ve.replaceState({id:Oe},"",s);const t=new URL(location.href);if(Le.error)return function(e){const{host:s,pathname:t,search:r}=location,{session:a,preloaded:n,status:c,error:o}=Le;ke||(ke=n&&n[0]),Me(null,[],{error:o,status:c,session:a,level0:{props:ke},level1:{props:{status:c,error:o},component:de},segments:n},{host:s,path:t,query:Fe(r),params:{}})}();const r=Be(t);return r?Ge(r,Oe,!0,e):void 0});export{Q as S,v as a,E as b,$ as c,w as d,h as e,y as f,f as g,g as h,X as i,i as j,l as k,m as l,H as m,e as n,K as o,z as p,B as q,J as r,c as s,p as t,Y as u,u as v,A as w};

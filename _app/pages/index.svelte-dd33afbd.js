import{S as Dt,i as Vt,s as Tt,J as zt,e as s,t as T,k as h,c as a,a as n,g as z,n as m,d as l,f as O,H as e,I as Ct,b as u,K as ie,L as me,M as vt,j as ft,m as dt,N as R,O as Lt,o as ht,P as mt,h as At,x as pt,u as _t,v as bt,Q as yt,R as Pt}from"../chunks/vendor-edc00703.js";import{b as pe}from"../chunks/paths-28a87002.js";import{T as St}from"../chunks/TitleBar-a43bdf22.js";var Mt={"icons/_IconClose.svelte":{props:[{name:"height",type:"string | number",defaultValue:"24"},{name:"width",type:"string | number",defaultValue:"24"}],actions:[]},"icons/_IconMaximize.svelte":{props:[{name:"height",type:"string | number",defaultValue:"24"},{name:"width",type:"string | number",defaultValue:"24"}],actions:[]},"icons/_IconMinimize.svelte":{props:[{name:"height",type:"string | number",defaultValue:"24"},{name:"width",type:"string | number",defaultValue:"24"}],actions:[]},"icons/_IconUnmaximize.svelte":{props:[{name:"height",type:"string | number",defaultValue:"24"},{name:"width",type:"string | number",defaultValue:"24"}],actions:[]},"TitleBar.svelte":{props:[{name:"title",defaultValue:"Title"},{name:"isMaximized",defaultValue:"false"}],actions:[{name:"clickMinimize"},{name:"clickUnmaximize"},{name:"clickMaximize"},{name:"clickClose"}]}};function gt(i,o,r){const f=i.slice();return f[17]=o[r],f}function Et(i){let o,r=i[17].text+"",f,E,c;return{c(){o=s("option"),f=T(r),E=h(),this.h()},l(p){o=a(p,"OPTION",{});var v=n(o);f=z(v,r),E=m(v),v.forEach(l),this.h()},h(){o.__value=c=i[17].id,o.value=o.__value},m(p,v){O(p,o,v),e(o,f),e(o,E)},p:Ct,d(p){p&&l(o)}}}function kt(i){let o,r,f,E,c,p,v,y,A,k,d,M,P;return{c(){o=s("label"),r=s("span"),f=T("--background-color"),E=h(),c=s("input"),p=h(),v=s("label"),y=s("span"),A=T("--text-color"),k=h(),d=s("input"),this.h()},l(g){o=a(g,"LABEL",{});var I=n(o);r=a(I,"SPAN",{class:!0});var j=n(r);f=z(j,"--background-color"),j.forEach(l),E=m(I),c=a(I,"INPUT",{type:!0}),I.forEach(l),p=m(g),v=a(g,"LABEL",{});var D=n(v);y=a(D,"SPAN",{class:!0});var N=n(y);A=z(N,"--text-color"),N.forEach(l),k=m(D),d=a(D,"INPUT",{type:!0}),D.forEach(l),this.h()},h(){u(r,"class","label svelte-1387t1v"),u(c,"type","color"),u(y,"class","label svelte-1387t1v"),u(d,"type","color")},m(g,I){O(g,o,I),e(o,r),e(r,f),e(o,E),e(o,c),ie(c,i[4]),O(g,p,I),O(g,v,I),e(v,y),e(y,A),e(v,k),e(v,d),ie(d,i[5]),M||(P=[me(c,"input",i[15]),me(d,"input",i[16])],M=!0)},p(g,I){I&16&&ie(c,g[4]),I&32&&ie(d,g[5])},d(g){g&&l(o),g&&l(p),g&&l(v),M=!1,vt(P)}}}function Nt(i){let o,r,f,E,c,p,v,y,A,k,d,M,P,g,I,j,D,N,ne,oe,q,Q,Ie,De,w,Ve,H,F,Te,ze,J,Ce,B,G,Le,Ae,K,W,ye,Pe,U,Se,_e,V,X,Me,Ne,re,Y,Be,Ue,ce,Z,$e,we,ue,x,Oe,je,ve,ee,Re,qe,fe,te,He,de,Je,Fe;r=new zt({props:{name:"SvelteTitlebar",urlPackage:"@el3um4s/svelte-titlebar",info:Mt["TitleBar.svelte"],description:"A Titlebar component for Svelte Projects"}}),k=new St({props:{title:i[0],isMaximized:i[1],class:i[2]}}),k.$on("clickMinimize",i[10]),k.$on("clickUnmaximize",i[8]),k.$on("clickMaximize",i[9]),k.$on("clickClose",i[11]);let le=i[7],C=[];for(let t=0;t<le.length;t+=1)C[t]=Et(gt(i,le,t));let L=i[2]==="custom"&&kt(i);return{c(){o=s("section"),f=s("div"),ft(r.$$.fragment),E=h(),c=s("section"),p=s("div"),v=T("Live demo"),y=h(),A=s("div"),d=s("div"),ft(k.$$.fragment),M=h(),P=s("div"),g=T("Click: "),I=T(i[3]),j=h(),D=s("div"),N=s("div"),ne=T("Props"),oe=h(),q=s("label"),Q=s("span"),Ie=T("title"),De=h(),w=s("input"),Ve=h(),H=s("label"),F=s("span"),Te=T("isMaximized"),ze=h(),J=s("input"),Ce=h(),B=s("div"),G=s("div"),Le=T("Colors"),Ae=h(),K=s("label"),W=s("span"),ye=T("Themes"),Pe=h(),U=s("select");for(let t=0;t<C.length;t+=1)C[t].c();Se=h(),L&&L.c(),_e=h(),V=s("section"),X=s("div"),Me=T("Test e2e"),Ne=h(),re=s("div"),Y=s("a"),Be=T("Default"),Ue=h(),ce=s("div"),Z=s("a"),$e=T("Dark"),we=h(),ue=s("div"),x=s("a"),Oe=T("Light"),je=h(),ve=s("div"),ee=s("a"),Re=T("Dark and Light"),qe=h(),fe=s("div"),te=s("a"),He=T("Colors"),this.h()},l(t){o=a(t,"SECTION",{class:!0});var _=n(o);f=a(_,"DIV",{style:!0});var $=n(f);dt(r.$$.fragment,$),_.forEach(l),E=m(t),c=a(t,"SECTION",{class:!0});var b=n(c);p=a(b,"DIV",{class:!0});var he=n(p);v=z(he,"Live demo"),he.forEach(l),y=m(b),A=a(b,"DIV",{class:!0});var be=n(A);d=a(be,"DIV",{style:!0});var It=n(d);dt(k.$$.fragment,It),M=m(be),P=a(be,"DIV",{class:!0});var Ke=n(P);g=z(Ke,"Click: "),I=z(Ke,i[3]),Ke.forEach(l),be.forEach(l),j=m(b),D=a(b,"DIV",{class:!0});var se=n(D);N=a(se,"DIV",{class:!0});var Ge=n(N);ne=z(Ge,"Props"),Ge.forEach(l),oe=m(se),q=a(se,"LABEL",{});var ge=n(q);Q=a(ge,"SPAN",{class:!0});var We=n(Q);Ie=z(We,"title"),We.forEach(l),De=m(ge),w=a(ge,"INPUT",{type:!0,class:!0}),ge.forEach(l),Ve=m(se),H=a(se,"LABEL",{});var Ee=n(H);F=a(Ee,"SPAN",{class:!0});var Xe=n(F);Te=z(Xe,"isMaximized"),Xe.forEach(l),ze=m(Ee),J=a(Ee,"INPUT",{type:!0}),Ee.forEach(l),se.forEach(l),Ce=m(b),B=a(b,"DIV",{class:!0});var ae=n(B);G=a(ae,"DIV",{class:!0});var Ye=n(G);Le=z(Ye,"Colors"),Ye.forEach(l),Ae=m(ae),K=a(ae,"LABEL",{});var ke=n(K);W=a(ke,"SPAN",{class:!0});var Ze=n(W);ye=z(Ze,"Themes"),Ze.forEach(l),Pe=m(ke),U=a(ke,"SELECT",{class:!0});var xe=n(U);for(let Qe=0;Qe<C.length;Qe+=1)C[Qe].l(xe);xe.forEach(l),ke.forEach(l),Se=m(ae),L&&L.l(ae),ae.forEach(l),b.forEach(l),_e=m(t),V=a(t,"SECTION",{class:!0});var S=n(V);X=a(S,"DIV",{class:!0});var et=n(X);Me=z(et,"Test e2e"),et.forEach(l),Ne=m(S),re=a(S,"DIV",{});var tt=n(re);Y=a(tt,"A",{href:!0});var lt=n(Y);Be=z(lt,"Default"),lt.forEach(l),tt.forEach(l),Ue=m(S),ce=a(S,"DIV",{});var st=n(ce);Z=a(st,"A",{href:!0});var at=n(Z);$e=z(at,"Dark"),at.forEach(l),st.forEach(l),we=m(S),ue=a(S,"DIV",{});var it=n(ue);x=a(it,"A",{href:!0});var nt=n(x);Oe=z(nt,"Light"),nt.forEach(l),it.forEach(l),je=m(S),ve=a(S,"DIV",{});var ot=n(ve);ee=a(ot,"A",{href:!0});var rt=n(ee);Re=z(rt,"Dark and Light"),rt.forEach(l),ot.forEach(l),qe=m(S),fe=a(S,"DIV",{});var ct=n(fe);te=a(ct,"A",{href:!0});var ut=n(te);He=z(ut,"Colors"),ut.forEach(l),ct.forEach(l),S.forEach(l),this.h()},h(){R(f,"display","contents"),R(f,"--background-color","#f9fafb"),R(f,"--text-color","#1f2937"),u(o,"class","svelte-info svelte-1387t1v"),u(p,"class","title svelte-1387t1v"),R(d,"display","contents"),R(d,"--background-color",i[4]),R(d,"--text-color",i[5]),u(P,"class","log svelte-1387t1v"),u(A,"class","titlebar svelte-1387t1v"),u(N,"class","title svelte-1387t1v"),u(Q,"class","label svelte-1387t1v"),u(w,"type","text"),u(w,"class","svelte-1387t1v"),u(F,"class","label svelte-1387t1v"),u(J,"type","checkbox"),u(D,"class","details svelte-1387t1v"),u(G,"class","title svelte-1387t1v"),u(W,"class","label svelte-1387t1v"),u(U,"class","themes svelte-1387t1v"),i[2]===void 0&&Lt(()=>i[14].call(U)),u(B,"class","details svelte-1387t1v"),u(c,"class","details svelte-1387t1v"),u(X,"class","title svelte-1387t1v"),u(Y,"href",""+(pe+"/test/titlebars/default")),u(Z,"href",""+(pe+"/test/titlebars/dark")),u(x,"href",""+(pe+"/test/titlebars/light")),u(ee,"href",""+(pe+"/test/titlebars/dark-light")),u(te,"href",""+(pe+"/test/titlebars/colors")),u(V,"class","details svelte-1387t1v")},m(t,_){O(t,o,_),e(o,f),ht(r,f,null),O(t,E,_),O(t,c,_),e(c,p),e(p,v),e(c,y),e(c,A),e(A,d),ht(k,d,null),e(A,M),e(A,P),e(P,g),e(P,I),e(c,j),e(c,D),e(D,N),e(N,ne),e(D,oe),e(D,q),e(q,Q),e(Q,Ie),e(q,De),e(q,w),ie(w,i[0]),e(D,Ve),e(D,H),e(H,F),e(F,Te),e(H,ze),e(H,J),J.checked=i[1],e(c,Ce),e(c,B),e(B,G),e(G,Le),e(B,Ae),e(B,K),e(K,W),e(W,ye),e(K,Pe),e(K,U);for(let $=0;$<C.length;$+=1)C[$].m(U,null);mt(U,i[2]),e(B,Se),L&&L.m(B,null),O(t,_e,_),O(t,V,_),e(V,X),e(X,Me),e(V,Ne),e(V,re),e(re,Y),e(Y,Be),e(V,Ue),e(V,ce),e(ce,Z),e(Z,$e),e(V,we),e(V,ue),e(ue,x),e(x,Oe),e(V,je),e(V,ve),e(ve,ee),e(ee,Re),e(V,qe),e(V,fe),e(fe,te),e(te,He),de=!0,Je||(Fe=[me(w,"input",i[12]),me(J,"change",i[13]),me(U,"change",i[14])],Je=!0)},p(t,[_]){_&16&&R(d,"--background-color",t[4]),_&32&&R(d,"--text-color",t[5]);const $={};if(_&1&&($.title=t[0]),_&2&&($.isMaximized=t[1]),_&4&&($.class=t[2]),k.$set($),(!de||_&8)&&At(I,t[3]),_&1&&w.value!==t[0]&&ie(w,t[0]),_&2&&(J.checked=t[1]),_&128){le=t[7];let b;for(b=0;b<le.length;b+=1){const he=gt(t,le,b);C[b]?C[b].p(he,_):(C[b]=Et(he),C[b].c(),C[b].m(U,null))}for(;b<C.length;b+=1)C[b].d(1);C.length=le.length}_&132&&mt(U,t[2]),t[2]==="custom"?L?L.p(t,_):(L=kt(t),L.c(),L.m(B,null)):L&&(L.d(1),L=null)},i(t){de||(pt(r.$$.fragment,t),pt(k.$$.fragment,t),de=!0)},o(t){_t(r.$$.fragment,t),_t(k.$$.fragment,t),de=!1},d(t){t&&l(o),bt(r),t&&l(E),t&&l(c),bt(k),yt(C,t),L&&L.d(),t&&l(_e),t&&l(V),Je=!1,vt(Fe)}}}function Bt(i,o,r){let f="Title",E=!1,c="theme-light",p="";const v=oe=>{r(3,p=oe)};let y=[{id:"theme-light",text:"Light"},{id:"theme-dark",text:"Dark"},{id:"custom",text:"Custom"}];function A(){v("unmaximize"),r(1,E=!1)}function k(){v("maximize"),r(1,E=!0)}let d="#1e609f",M="#DBDBDB";const P=()=>v("minimize"),g=()=>v("close");function I(){f=this.value,r(0,f)}function j(){E=this.checked,r(1,E)}function D(){c=Pt(this),r(2,c),r(7,y)}function N(){d=this.value,r(4,d)}function ne(){M=this.value,r(5,M)}return setInterval(()=>{r(3,p="")},1500),[f,E,c,p,d,M,v,y,A,k,P,g,I,j,D,N,ne]}class Ot extends Dt{constructor(o){super();Vt(this,o,Bt,Nt,Tt,{})}}export{Ot as default};

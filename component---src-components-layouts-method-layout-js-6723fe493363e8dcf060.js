(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NUQS:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));var n=a("MUpH"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),i=a("vOnD"),m=a("69XP"),c=a.n(m),u=a("8MiI"),d=a("vrFN"),s=a("xtXq"),h=a("K+Zf"),p=a("G1e7"),E=a("qSSW"),f=a("foDo");function g(){var e=Object(n.a)(["\n    min-height: 6rem;\n  "]);return g=function(){return e},e}function _(){var e=Object(n.a)(["\n    grid-column: span 2;\n  "]);return _=function(){return e},e}var y=Object(i.d)(s.f).withConfig({displayName:"method-layout__MethodHeadline",componentId:"sc-1ukxja6-0"})(["",""],E.a.mediumUp(_())),w=i.d.img.withConfig({displayName:"method-layout__MethodIcon",componentId:"sc-1ukxja6-1"})(["position:relative;max-width:2.5rem;margin-left:1rem;margin-top:1rem;bottom:-0.25rem;vertical-align:bottom;"]),v=i.d.article.withConfig({displayName:"method-layout__MethodIntro",componentId:"sc-1ukxja6-2"})(["display:flex;flex-flow:column nowrap;p{max-width:60ch;&:first-of-type{&::first-line{text-transform:uppercase;font-weight:bold;}}}"]),b=i.d.aside.withConfig({displayName:"method-layout__MethodMeta",componentId:"sc-1ukxja6-3"})([""]),M=i.d.section.withConfig({displayName:"method-layout__ActivityList",componentId:"sc-1ukxja6-4"})(["grid-column:span 2;","{margin-top:2rem;}"],f.c),k=Object(i.d)(f.d).withConfig({displayName:"method-layout__ActivityCard",componentId:"sc-1ukxja6-5"})([""," ","{margin:0;}"],E.a.mediumUp(g()),f.b);t.default=function(e){var t=e.data,a=e.location,n=t.method.childMarkdownRemark,r=n.frontmatter,i=n.fields.frontmattermd,m=t.activities.edges,E={};m.forEach((function(e){var t;return E[e.node.childMarkdownRemark.frontmatter.title]={slug:e.node.fields.slug,excerpt:null===(t=e.node.childMarkdownRemark.fields.frontmattermd.summary)||void 0===t?void 0:t.excerpt}}));var g=t.references.edges,_={};g.forEach((function(e){return _[e.node.childMarkdownRemark.frontmatter.title]={title:e.node.childMarkdownRemark.frontmatter.title,html:e.node.childMarkdownRemark.html}}));var I=a.state,x=(I=void 0===I?{}:I).prevPath,L=I.prevPage,S=c()(i,(function(e){return e&&e.html?e.html.replace(/<img src="\/img/g,'<img src="'+Object(o.d)("/img")):e}));return l.a.createElement(u.a,null,l.a.createElement(d.a,{title:"Method: "+r.title}),l.a.createElement(s.a,null,l.a.createElement(s.d,null,l.a.createElement(s.g,{columnLayout:"2:1"},l.a.createElement(y,null,l.a.createElement(h.a,{direction:"back",to:(null==x?void 0:x.startsWith("/guide-builder"))?L:"/#allMethods"},"Back to ",x?"guide builder":"all methods"),l.a.createElement(s.h,{size:"jumbo",variation:"primary"},r.title,l.a.createElement(w,{src:r.method_icon}))),l.a.createElement(v,null,l.a.createElement(s.h,{size:"large",withDeco:!0},"Summary"),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:i.summary.html}}),l.a.createElement(s.h,{size:"large",withDeco:!0},"Purpose"),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:i.purpose.html}})),l.a.createElement(b,null,l.a.createElement(p.b,{boldDesc:!0},l.a.createElement("dt",null,"Author"),l.a.createElement("dd",null,r.authors),""!==r.info_provided&&l.a.createElement(l.a.Fragment,null,l.a.createElement("dt",null,"Info Provided"),l.a.createElement("dd",null,r.info_provided),l.a.createElement("dt",null,"Info Required"),l.a.createElement("dd",null,r.required)))))),l.a.createElement(s.b,null,l.a.createElement(s.g,{columnLayout:"2:1"},l.a.createElement("section",null,S.the_flow_of_information&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.h,{size:"large",withDeco:!0},"The Flow of Information"),l.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:S.the_flow_of_information}})),l.a.createElement(s.h,{size:"large",withDeco:!0},"Guiding Questions"),l.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:S.guiding_questions}})),l.a.createElement("section",null)),l.a.createElement(s.g,{columnLayout:"1:1"},S.operational_security&&l.a.createElement(f.d,{border:"base"},l.a.createElement(f.b,null,"Operational Security"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.operational_security}})),S.preparation&&l.a.createElement(f.d,{border:"base"},l.a.createElement(f.b,null,"Preparation"),l.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:S.preparation}}))),l.a.createElement(s.g,{columnLayout:"2:1"},l.a.createElement("section",null,S.outputs&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.h,{size:"large",withDeco:!0},"Outputs"),l.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:S.outputs}}))))),l.a.createElement(s.b,null,l.a.createElement(s.g,{columnLayout:"2:1"},l.a.createElement("section",null,l.a.createElement(s.h,{size:"large",withDeco:!0},"References"),l.a.createElement(p.a,null,(r.references||[]).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,_[e].title,":"),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:_[e].html}}))})))),l.a.createElement("section",null),l.a.createElement(M,null,l.a.createElement(s.h,{size:"large",withDeco:!0},"Activities"),l.a.createElement(f.c,null,(r.activities||[]).map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(k,{as:o.a,to:E[e].slug+"/",border:"primary",variation:"secondary",withHover:!0},l.a.createElement(f.b,{variation:"primary"},e,"_"),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:E[e].excerpt}})))}))))))))};var I="3242759330"}}]);
//# sourceMappingURL=component---src-components-layouts-method-layout-js-6723fe493363e8dcf060.js.map
import{b as L,c as N,d as D,e as E}from"./chunk-R4RDYJZ4.js";import{e as S}from"./chunk-HNRCINPO.js";import{$a as y,Ja as r,Ka as w,Ra as s,W as p,Ya as v,bb as g,cb as f,da as P,db as _,ea as x,eb as n,fb as i,gb as c,jb as k,nb as M,ob as b,sb as F,tb as m,ub as d,yb as l,zb as h}from"./chunk-HTOIXPZH.js";var I=t=>({selected:t});function V(t,o){if(t&1){let e=k();n(0,"a",6,0),M("click",function(){let O=P(e).$implicit,j=b();return x(j.selectedSection.set(O.header))}),n(2,"div",7),m(3),i(),c(4,"div",8),i()}if(t&2){let e=o.$implicit,a=F(1);v("routerLink",e.redirect),r(2),v("ngClass",h(4,I,a.isActive)),r(),d(e.header),r(),v("ngClass",h(6,I,a.isActive))}}var C=class t{constructor(o){this.router=o;this.router}navOpts=s({name:"yaswanth_narayana_pilla",sections:[{header:"_home",redirect:"/home"},{header:"_about",redirect:"/about-me"},{header:"_projects",redirect:"/skills-projects"},{header:"_contact-me",redirect:"/contact"}]});selectedSection=s("_home");static \u0275fac=function(e){return new(e||t)(w(N))};static \u0275cmp=p({type:t,selectors:[["app-nav"]],standalone:!0,features:[l],decls:7,vars:1,consts:[["activeLink","routerLinkActive"],[1,"nav-wrapper"],["routerLink","/",1,"nav-item","non-section",3,"click"],[1,"header"],[1,"nav-sections"],["routerLinkActive","active",1,"nav-item",3,"routerLink"],["routerLinkActive","active",1,"nav-item",3,"click","routerLink"],[1,"header",3,"ngClass"],[1,"active",3,"ngClass"]],template:function(e,a){e&1&&(n(0,"div",1)(1,"a",2),M("click",function(){return a.selectedSection.set("_home")}),n(2,"div",3),m(3),i()(),n(4,"div",4),f(5,V,5,8,"a",5,g),i()()),e&2&&(r(3),d(a.navOpts().name),r(2),_(a.navOpts().sections))},dependencies:[D,E,S],styles:[".nav-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid}.nav-wrapper[_ngcontent-%COMP%]   .nav-sections[_ngcontent-%COMP%]{display:flex}.nav-wrapper[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{text-decoration:none;border-left:1px solid;position:relative;text-align:center}.nav-wrapper[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{color:var(--active-color)}.nav-wrapper[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:1rem 3rem}.nav-wrapper[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;width:100%;background-color:var(--orange-color);opacity:0}.nav-wrapper[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{opacity:1;color:var(--orange-color)}.nav-wrapper[_ngcontent-%COMP%]   .non-section[_ngcontent-%COMP%]{border-left:none;width:20vw;border-right:1px solid}@media screen and (max-width: 800px){.nav-sections[_ngcontent-%COMP%]{display:none!important}.non-section[_ngcontent-%COMP%]{border:none!important;width:max-content!important}}"]})};function $(t,o){if(t&1&&(n(0,"div",2),c(1,"i",3),n(2,"span",4),m(3),i()()),t&2){let e=o.$implicit;r(),y(e.icon),r(2),d(e.logo)}}var u=class t{mediaProfiles=s([{logo:"instagram",icon:"ph-fill ph-instagram-logo",redirect:""},{logo:"threads",icon:"ph-fill ph-threads-logo",redirect:""},{logo:"linkedin",icon:"ph-fill ph-linkedin-logo",redirect:""},{logo:"facebook",icon:"ph-fill ph-facebook-logo",redirect:""},{logo:"mail",icon:"ph-fill ph-envelope-simple",redirect:""},{logo:"github",icon:"ph-fill ph-github-logo",redirect:""}]);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-media-footer"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"media-wrapper"],[1,"media-prefix"],[1,"media-item"],[1,"media-icon"],[1,"icon-info"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"span",1),m(2,"catch me on :"),i(),f(3,$,4,3,"div",2,g),i()),e&2&&(r(3),_(a.mediaProfiles()))},styles:[".media-wrapper[_ngcontent-%COMP%]{position:absolute;bottom:4px;display:flex;align-items:center;border-top:1px solid;width:calc(100vw - 22px)}.media-wrapper[_ngcontent-%COMP%]   .media-prefix[_ngcontent-%COMP%]{margin-left:2rem}.media-wrapper[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;gap:.5rem;padding:1rem 2rem}.media-wrapper[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%]:hover   .media-icon[_ngcontent-%COMP%], .media-wrapper[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%]:hover   .icon-info[_ngcontent-%COMP%]{color:var(--active-color)}.media-wrapper[_ngcontent-%COMP%]   .media-item[_ngcontent-%COMP%]   .media-icon[_ngcontent-%COMP%]{font-size:20px}@media screen and (max-width: 800px){.media-prefix[_ngcontent-%COMP%]{display:none}.media-item[_ngcontent-%COMP%]{padding:1rem!important}.icon-info[_ngcontent-%COMP%]{display:none!important}}"]})};var R=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-main"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"cv-main"],[1,"cv-content"]],template:function(e,a){e&1&&(n(0,"div",0),c(1,"app-nav"),n(2,"div",1),c(3,"router-outlet"),i(),c(4,"app-media-footer"),i())},dependencies:[C,u,L],styles:[".cv-main[_ngcontent-%COMP%]{height:calc(100vh - 10px);overflow:hidden;margin:10px;border:1px solid;border-radius:5px}"]})};export{R as MainLayout};

(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"UYr/":function(t,o,n){"use strict";n.r(o),n.d(o,"routes",(function(){return l})),n.d(o,"PricesModule",(function(){return b}));var e=n("ofXK"),r=n("fXoL"),i=n("IHAV"),c=n("JqCM");function s(t,o){if(1&t&&(r.Ob(0,"div",5),r.Kb(1,"img",6),r.Nb()),2&t){const t=o.$implicit;r.xb(1),r.ic("src","data:image/jpg;base64,",t.image,"",r.qc)}}let a=(()=>{class t{constructor(t,o){this.WakCatalogService=t,this.spinner=o,this.catalogs=null}ngOnInit(){this.spinner.show(),this.WakCatalogService.getPriceList().then(t=>{this.catalogs=t,this.spinner.hide()}).catch(t=>{console.log("errors"+t),this.spinner.hide()})}}return t.\u0275fac=function(o){return new(o||t)(r.Jb(i.a),r.Jb(c.c))},t.\u0275cmp=r.Db({type:t,selectors:[["app-prices-list"]],decls:7,vars:1,consts:[[1,"fill","container-main"],[1,"container","pt-1","text-center"],[1,"product-title","m-2","text-uppercase","text-white"],[1,"row","overflow-auto","pt-2","row-category","h-100"],["class","col-12 my-auto mx-auto",4,"ngFor","ngForOf"],[1,"col-12","my-auto","mx-auto"],[1,"img","img-fluid",3,"src"]],template:function(t,o){1&t&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"h5",2),r.wc(3,"Lista de precios"),r.Nb(),r.Ob(4,"div",3),r.Kb(5,"ngx-spinner"),r.uc(6,s,2,1,"div",4),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.xb(6),r.gc("ngForOf",o.catalogs))},directives:[c.a,e.k],styles:[".container-main[_ngcontent-%COMP%]{background-color:#ffd3f2!important}.product-title[_ngcontent-%COMP%]{background-color:#ff5dbc;font-family:AronGrotesque-Regular;font-size:1.25em;border-radius:5px}.summary[_ngcontent-%COMP%]{background-color:#ffbce4;border-radius:15px;margin-bottom:60px;color:#fff;position:fixed;bottom:0;left:0;right:0;font-size:.8em}.img[_ngcontent-%COMP%]{border-radius:10px}"]}),t})();var u=n("tyNb");const l=[{path:"",component:a}];let b=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(o){return new(o||t)},imports:[[e.b,u.e.forChild(l),c.b]]}),t})()}}]);
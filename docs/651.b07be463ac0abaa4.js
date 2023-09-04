"use strict";(self.webpackChunkcountriesApp=self.webpackChunkcountriesApp||[]).push([[651],{651:(re,x,c)=>{c.r(x),c.d(x,{CountriesModule:()=>te});var a=c(895),l=c(551),e=c(256),b=c(262),C=c(646),T=c(4),p=c(505),A=c(529);let g=(()=>{var n;class o{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1/",this.cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{term:"",countries:[]}},this.loadFromLocalStorage()}saveOnLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,b.K)(()=>(0,C.of)([])))}searchByAlphaCode(t){return this.http.get(`https://restcountries.com/v3.1/alpha/${t}`).pipe((0,T.U)(i=>i.length>0?i[0]:null),(0,b.K)(()=>(0,C.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,p.b)(i=>this.cacheStore.byCapital={term:t,countries:i}),(0,p.b)(()=>this.saveOnLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`https://restcountries.com/v3.1/name/${t}`).pipe((0,p.b)(i=>this.cacheStore.byCountry={term:t,countries:i}),(0,p.b)(()=>this.saveOnLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`https://restcountries.com/v3.1/region/${t}`).pipe((0,p.b)(i=>this.cacheStore.byRegion={term:t,countries:i}),(0,p.b)(()=>this.saveOnLocalStorage()))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.LFG(A.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),o})();var w=c(579),q=c(727);class U extends q.w0{constructor(o,r){super()}schedule(o,r=0){return this}}const f={setInterval(n,o,...r){const{delegate:t}=f;return t?.setInterval?t.setInterval(n,o,...r):setInterval(n,o,...r)},clearInterval(n){const{delegate:o}=f;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var B=c(737);const Z={now:()=>(Z.delegate||Date).now(),delegate:void 0};class m{constructor(o,r=m.now){this.schedulerActionCtor=o,this.now=r}schedule(o,r=0,t){return new this.schedulerActionCtor(this,o).schedule(t,r)}}m.now=Z.now;const P=new class O extends m{constructor(o,r=m.now){super(o,r),this.actions=[],this._active=!1}flush(o){const{actions:r}=this;if(this._active)return void r.push(o);let t;this._active=!0;do{if(t=o.execute(o.state,o.delay))break}while(o=r.shift());if(this._active=!1,t){for(;o=r.shift();)o.unsubscribe();throw t}}}(class I extends U{constructor(o,r){super(o,r),this.scheduler=o,this.work=r,this.pending=!1}schedule(o,r=0){var t;if(this.closed)return this;this.state=o;const s=this.id,i=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(i,s,r)),this.pending=!0,this.delay=r,this.id=null!==(t=this.id)&&void 0!==t?t:this.requestAsyncId(i,this.id,r),this}requestAsyncId(o,r,t=0){return f.setInterval(o.flush.bind(o,this),t)}recycleAsyncId(o,r,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return r;null!=r&&f.clearInterval(r)}execute(o,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(o,r);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,r){let s,t=!1;try{this.work(o)}catch(i){t=!0,s=i||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:o,scheduler:r}=this,{actions:t}=r;this.work=this.state=this.scheduler=null,this.pending=!1,(0,B.P)(t,this),null!=o&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,super.unsubscribe()}}});var J=c(482),L=c(403);let _=(()=>{var n;class o{constructor(){this.debouncer=new w.x,this.placeholder="Buscar",this.value="",this.inputSearch=new e.vpe}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function R(n,o=P){return(0,J.e)((r,t)=>{let s=null,i=null,u=null;const d=()=>{if(s){s.unsubscribe(),s=null;const h=i;i=null,t.next(h)}};function ne(){const h=u+n,S=o.now();if(S<h)return s=this.schedule(void 0,h-S),void t.add(s);d()}r.subscribe((0,L.x)(t,h=>{i=h,u=o.now(),s||(s=o.schedule(ne,n),t.add(s))},()=>{d(),t.complete()},void 0,()=>{i=s=null}))})}(500)).subscribe(t=>{this.inputSearch.emit(t)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}emitInputValue(t){this.inputSearch.emit(t)}onKeyPress(t){this.debouncer.next(t)}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",value:"value"},outputs:{inputSearch:"inputSearch"},decls:2,vars:2,consts:[["type","text",1,"w-full","focus:ring-blue-200","focus:ring-2","outline-none","p-2","rounded-sm","border-2","border-slate-400",3,"placeholder","value","keyup","keyup.enter"],["searchInput",""]],template:function(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(i);const d=e.MAs(1);return e.KtG(s.onKeyPress(d.value))})("keyup.enter",function(){e.CHM(i);const d=e.MAs(1);return e.KtG(s.emitInputValue(d.value))}),e.qZA()}2&t&&e.Q6J("placeholder",s.placeholder)("value",s.value)},encapsulation:2}),o})(),y=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:4,vars:0,consts:[[1,"fixed","bottom-4","right-4","bg-black","text-white","flex","items-center","p-4","gap-2","rounded-full"],[1,"w-20"],[1,"custom-loader"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Buscando"),e.qZA(),e._UZ(3,"div",2),e.qZA())},styles:[".custom-loader[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;border:5px solid;border-color:#FFF #0000;animation:_ngcontent-%COMP%_s1 1s infinite}@keyframes _ngcontent-%COMP%_s1{to{transform:rotate(.5turn)}}"]}),o})();function F(n,o){1&n&&(e.TgZ(0,"div",2),e._UZ(1,"img",3),e.qZA())}const M=function(n){return["/countries/by/",n]};function N(n,o){if(1&n&&(e.TgZ(0,"tr",5)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",7),e._uU(16,"Ver mas "),e.qZA()()()),2&n){const r=o.$implicit,t=o.index;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.Oqu(r.flag),e.xp6(2),e.Q6J("src",r.flags.svg,e.LSH)("alt",r.name.common),e.xp6(2),e.Oqu(r.name.common),e.xp6(2),e.Oqu(r.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,r.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,M,r.cca3))}}function Q(n,o){if(1&n&&(e.TgZ(0,"table")(1,"thead")(2,"th"),e._uU(3,"#"),e.qZA(),e.TgZ(4,"th"),e._uU(5,"Siglas"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Bandera"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Nombre"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Capital"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Poblacion"),e.qZA(),e._UZ(14,"th"),e.qZA(),e.TgZ(15,"tbody"),e.YNc(16,N,17,12,"tr",4),e.qZA()()),2&n){const r=e.oxw();e.xp6(16),e.Q6J("ngForOf",r.countries)}}let v=(()=>{var n;class o{constructor(t){this.router=t,this.countries=[],this.path="countries/by/"}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","max-w-screen-sm mx-auto",4,"ngIf","ngIfElse"],["table",""],[1,"max-w-screen-sm","mx-auto"],["src","/assets/undraw-world.svg","alt","world_img"],["class","hover:bg-slate-600 hover:text-white border-b",4,"ngFor","ngForOf"],[1,"hover:bg-slate-600","hover:text-white","border-b"],[1,"w-6","mx-auto",3,"src","alt"],[1,"text-blue-400",3,"routerLink"]],template:function(t,s){if(1&t&&(e.YNc(0,F,2,0,"div",0),e.YNc(1,Q,17,1,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",0===s.countries.length)("ngIfElse",i)}},dependencies:[a.sg,a.O5,l.rH,a.JJ],encapsulation:2}),o})();function Y(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let k=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.term="",this.isLoading=!1}ngOnInit(){this.countriesByService()}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe(s=>{this.countries=s,this.isLoading=!1})}countriesByService(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.term=this.countriesService.cacheStore.byCapital.term}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-capital-page"]],decls:10,vars:3,consts:[[1,"text-3xl","md:text-4xl","mb-4"],[1,"my-4"],["placeholder","Buscar por capital",3,"value","inputSearch"],[1,"overflow-x-auto","mb-16","w-[90%]","mx-auto"],[4,"ngIf"],[3,"countries"]],template:function(t,s){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Por capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",1)(4,"div")(5,"shared-search-box",2),e.NdJ("inputSearch",function(u){return s.searchByCapital(u)}),e.qZA()()(),e.TgZ(6,"div")(7,"div",3),e.YNc(8,Y,1,0,"shared-loading-spinner",4),e._UZ(9,"countries-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("value",s.term),e.xp6(3),e.Q6J("ngIf",s.isLoading),e.xp6(1),e.Q6J("countries",s.countries))},dependencies:[a.O5,_,y,v],encapsulation:2}),o})();function j(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let E=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.term=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountry.countries,this.term=this.countriesService.cacheStore.byCountry.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchCountry(t).subscribe(s=>{this.countries=s,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-country-page"]],decls:10,vars:3,consts:[[1,"text-3xl","md:text-4xl","mb-4"],[1,"my-4"],["placeholder","Buscar por pa\xeds",3,"value","inputSearch"],[1,"overflow-x-auto","mb-16","w-[90%]","mx-auto"],[4,"ngIf"],[3,"countries"]],template:function(t,s){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Por pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",1)(4,"div")(5,"shared-search-box",2),e.NdJ("inputSearch",function(u){return s.searchByCountry(u)}),e.qZA()()(),e.TgZ(6,"div")(7,"div",3),e.YNc(8,j,1,0,"shared-loading-spinner",4),e._UZ(9,"countries-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("value",s.term),e.xp6(3),e.Q6J("ngIf",s.isLoading),e.xp6(1),e.Q6J("countries",s.countries))},dependencies:[a.O5,_,y,v],encapsulation:2}),o})();const K=function(n){return{"text-emerald-500 border-emerald-500":n}};function $(n,o){if(1&n){const r=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){const i=e.CHM(r).$implicit,u=e.oxw();return e.KtG(u.searchByRegion(i))}),e._uU(1),e.qZA()}if(2&n){const r=o.$implicit,t=e.oxw();e.Q6J("ngClass",e.VKq(2,K,t.currentRegion===r)),e.xp6(1),e.hij(" ",r," ")}}function V(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let X=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.currentRegion=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.currentRegion=this.countriesService.cacheStore.byRegion.term}searchByRegion(t){this.currentRegion=t,this.isLoading=!0,this.countriesService.searchRegion(t).subscribe(s=>{this.countries=s,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-region-page"]],decls:10,vars:3,consts:[[1,"text-3xl","md:text-4xl","mb-4"],[1,"my-4"],[1,"gap-4","flex","items-center","justify-center","flex-wrap","mb-12"],["class","border-2 border-slate-500 md:py-2 md:px-3 md:rounded-lg md:text-lg\n      text-base py-1 w-24 hover:text-emerald-500 hover:border-emerald-500\n      md:w-28 shrink-0 rounded-md",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"overflow-x-auto","mb-16","w-[90%]","mx-auto"],[4,"ngIf"],[3,"countries"],[1,"border-2","border-slate-500","md:py-2","md:px-3","md:rounded-lg","md:text-lg","text-base","py-1","w-24","hover:text-emerald-500","hover:border-emerald-500","md:w-28","shrink-0","rounded-md",3,"ngClass","click"]],template:function(t,s){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Por continente"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",1)(4,"div",2),e.YNc(5,$,2,4,"button",3),e.qZA()(),e.TgZ(6,"div")(7,"div",4),e.YNc(8,V,1,0,"shared-loading-spinner",5),e._UZ(9,"countries-table",6),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",s.regions),e.xp6(3),e.Q6J("ngIf",s.isLoading),e.xp6(1),e.Q6J("countries",s.countries))},dependencies:[a.mk,a.sg,a.O5,y,v],encapsulation:2}),o})();var H=c(900);function z(n,o){1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._uU(2," Espere por favor "),e.qZA()())}function D(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5)(2,"h2",6),e._uU(3,"Pa\xeds: "),e.TgZ(4,"strong"),e._uU(5),e.qZA()()(),e.TgZ(6,"div",7)(7,"div",8),e._UZ(8,"img",9),e.qZA(),e.TgZ(9,"div",10)(10,"ul",11)(11,"li",12)(12,"strong"),e._uU(13,"Poblaci\xf3n: "),e.qZA(),e._uU(14),e.ALo(15,"number"),e.qZA(),e.TgZ(16,"li",12)(17,"strong"),e._uU(18,"C\xf3digo: "),e.qZA(),e._uU(19),e.qZA(),e.TgZ(20,"li",12)(21,"strong"),e._uU(22,"Capital: "),e.qZA(),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",13)(25,"h3",14),e._uU(26,"Traducciones"),e.qZA(),e.TgZ(27,"ul",15)(28,"li",16),e._uU(29),e.qZA(),e.TgZ(30,"li",16),e._uU(31),e.qZA(),e.TgZ(32,"li",16),e._uU(33),e.qZA(),e.TgZ(34,"li",16),e._uU(35),e.qZA(),e.TgZ(36,"li",16),e._uU(37),e.qZA(),e.TgZ(38,"li",16),e._uU(39),e.qZA(),e.TgZ(40,"li",16),e._uU(41),e.qZA(),e.TgZ(42,"li",16),e._uU(43),e.qZA()()()()),2&n){const r=e.oxw();e.xp6(5),e.Oqu(r.country.name.common),e.xp6(3),e.Q6J("src",r.country.flags.svg,e.LSH)("alt",r.country.name.common),e.xp6(6),e.hij("",e.lcZ(15,14,r.country.population)," "),e.xp6(5),e.hij("",r.country.cca3," "),e.xp6(4),e.hij("",r.country.capital," "),e.xp6(6),e.Oqu(r.country.translations.ara.common),e.xp6(2),e.Oqu(r.country.translations.bre.common),e.xp6(2),e.Oqu(r.country.translations.per.common),e.xp6(2),e.Oqu(r.country.translations.deu.common),e.xp6(2),e.Oqu(r.country.translations.hun.common),e.xp6(2),e.Oqu(r.country.translations.jpn.common),e.xp6(2),e.Oqu(r.country.translations.fra.common),e.xp6(2),e.Oqu(r.country.translations.kor.common)}}const G=[{path:"by-country",component:E},{path:"by-region",component:X},{path:"by-capital",component:k},{path:"by/:id",component:(()=>{var n;class o{constructor(t,s,i){this.activatedRoute=t,this.router=s,this.countriesService=i}ngOnInit(){this.activatedRoute.params.pipe((0,H.w)(({id:t})=>this.countriesService.searchByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(l.gz),e.Y36(l.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],["class","md:block flex flex-col justify-center items-center",4,"ngIf","ngIfElse"],[1,"md:h-[calc(100vh-16px)]","md:flex","mt-16","md:mt-0"],[1,"text-center","p-10","w-4/5","max-w-lg","bg-cyan-200","border-2","border-cyan-600","text-slate-800","text-2xl","font-bold","rounded-md","m-auto"],[1,"md:block","flex","flex-col","justify-center","items-center"],[1,"mt-8"],[1,"text-2xl","md:text-3xl"],[1,"md:grid","md:grid-flow-col","auto-cols-[1fr_2fr]","flex","flex-col","items-center"],[1,"my-12"],[1,"md:w-full","w-1/2","mx-auto",3,"src","alt"],[1,"md:flex","items-center","md:justify-center"],[1,"md:w-1/2","space-y-2","text-start","text-lg","md:text-xl","w-full"],[1,"border-b","p-2","border-black"],[1,"mt-12","pb-12"],[1,"md:text-3xl","text-2xl","my-8","text-center","md:text-left"],[1,"flex","flex-wrap","gap-4","md:justify-start","justify-center"],[1,"bg-blue-500","text-white","px-4","py-1","rounded-full"]],template:function(t,s){if(1&t&&(e.YNc(0,z,3,0,"ng-template",null,0,e.W1O),e.YNc(2,D,44,16,"div",1)),2&t){const i=e.MAs(1);e.xp6(2),e.Q6J("ngIf",s.country)("ngIfElse",i)}},dependencies:[a.O5,a.JJ],encapsulation:2}),o})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(G),l.Bz]}),o})();var ee=c(466);let te=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,W,ee.m]}),o})()}}]);
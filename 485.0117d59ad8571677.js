"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[485],{3485:(et,d,s)=>{s.r(d),s.d(d,{default:()=>tt});var i=s(433),f=s(6895),b=s(6578),g=s(5870),t=s(4650),F=s(9751),l=s(727),Z=s(833),p=s(8090),_=s(117),m=s(9886),y=s(415),C=s(6260);const V=["input"];let G=(()=>{class n{constructor(e){this.tokenValue=e,this.form=new i.cw({range:new i.NI}),this.changeDateValue=new t.vpe,this.input={},this.min=p.TU.fromLocalNativeDate(new Date),this.max=new p.TU(this.min.year,this.min.month+1,this.min.day)}changeValue(){this.changeDateValue.emit(this.form.controls.range.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.P_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-date-range"]],viewQuery:function(e,o){if(1&e&&t.Gf(V,5),2&e){let a;t.iGM(a=t.CRH())&&(o.input=a.first)}},outputs:{changeDateValue:"changeDateValue"},decls:5,vars:3,consts:[[3,"formGroup"],["tuiUnfinishedValidator","Finish filling the field","formControlName","range","tuiTextfieldSize","m",3,"min","max","tuiValueChanges"],["input",""],["tuiTextfield","","placeholder","From - To"]],template:function(e,o){1&e&&(t.ynx(0,0),t.TgZ(1,"tui-input-date-range",1,2),t.NdJ("tuiValueChanges",function(){return o.changeValue()}),t._uU(3," Choose dates "),t._UZ(4,"input",3),t.qZA(),t.BQk()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("min",o.min)("max",o.max))},dependencies:[_.MB,m.sz,y.z,C.H5,C.dc,i.JJ,i.JL,i.sg,i.u]}),n})();var v=s(1841);const J=["input"];let D=(()=>{class n{constructor(e){this.tokenValue=e,this.changeDateValue=new t.vpe,this.input={},this.form=new i.cw({date:new i.NI})}changeValue(){this.changeDateValue.emit(this.form.controls.date.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.P_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-date"]],viewQuery:function(e,o){if(1&e&&t.Gf(J,5),2&e){let a;t.iGM(a=t.CRH())&&(o.input=a.first)}},outputs:{changeDateValue:"changeDateValue"},decls:4,vars:1,consts:[[3,"formGroup"],["tuiTextfieldSize","m","formControlName","date",3,"tuiValueChanges"],["input",""]],template:function(e,o){1&e&&(t.ynx(0,0),t.TgZ(1,"tui-input-date",1,2),t.NdJ("tuiValueChanges",function(){return o.changeValue()}),t._uU(3," Choose a date "),t.qZA(),t.BQk()),2&e&&t.Q6J("formGroup",o.form)},dependencies:[m.sz,y.z,v.jL,v.k_,i.JJ,i.JL,i.sg,i.u]}),n})(),L=(()=>{class n{constructor(e,o){this.componentFactoryResolver=e,this.injector=o}createOneWayCalendar(e){const o=this.componentFactoryResolver.resolveComponentFactory(D),a=t.zs3.create({providers:[{provide:p.P_,useValue:e}],parent:this.injector});return o.create(a)}createRangeCalendar(e){const o=this.componentFactoryResolver.resolveComponentFactory(G),a=t.zs3.create({providers:[{provide:p.P_,useValue:e}],parent:this.injector});return o.create(a)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t._Vd),t.LFG(t.zs3))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=(()=>{return(n=u||(u={})).oneWay="One Way",n.round="Round Trip",u;var n})(),R=s(9653),x=s(9367),I=s(7579),N=s(9300),S=s(3900),A=s(4004),M=s(7250),Q=s(3861),h=s(9216),z=s(8917),T=s(7765),P=s(4227);const O=["from"],U=["to"];function Y(n,r){if(1&n&&t._UZ(0,"tui-data-list-wrapper",9),2&n){const e=t.oxw().tuiLet;t.Q6J("items",e)}}function W(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tui-combo-box",5),t.NdJ("searchChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSearchChange(a))})("focusedChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.focus())}),t._uU(1," From "),t.TgZ(2,"input",6,7),t.NdJ("input",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSearchChange(c.extractValueFromEvent(a)))}),t.qZA(),t.YNc(4,Y,1,1,"tui-data-list-wrapper",8),t.qZA()}}function B(n,r){if(1&n&&t._UZ(0,"tui-data-list-wrapper",9),2&n){const e=t.oxw().tuiLet;t.Q6J("items",e)}}function j(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tui-combo-box",10),t.NdJ("searchChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSearchChange(a))}),t._uU(1," To "),t.TgZ(2,"input",6,11),t.NdJ("input",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSearchChange(c.extractValueFromEvent(a)))}),t.qZA(),t.YNc(4,B,1,1,"tui-data-list-wrapper",8),t.qZA()}}let k=(()=>{class n{constructor(e,o){this.formGroupRoot=e,this.apiService=o,this.search$=new I.x,this.fromInput={},this.toInput={},this.items$=this.search$.pipe((0,N.h)(a=>null!==a),(0,S.w)(a=>this.serverRequest(a))),this.form=new i.cw({})}ngOnInit(){this.form=this.formGroupRoot.control,this.search$.next(null)}focus(){this.search$.next("")}onSearchChange(e){this.search$.next(e)}extractValueFromEvent(e){return e.target?.value||null}switchLocation(){const e=this.fromInput.host.value;this.fromInput.host.onValueChange(this.toInput.host.value),this.toInput.host.onValueChange(e)}serverRequest(e){return this.apiService.getAirports(e??"").pipe((0,A.U)(a=>a.map(c=>`${c.name}, ${c.city} ${c.country}(${c.ICAO})`)))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.sg),t.Y36(M.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-location"]],viewQuery:function(e,o){if(1&e&&(t.Gf(O,5),t.Gf(U,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.fromInput=a.first),t.iGM(a=t.CRH())&&(o.toInput=a.first)}},decls:7,vars:7,consts:[[3,"formGroup"],["formGroupName","location","tuiGroup",""],["tuiTextfieldSize","m","formControlName","from",3,"searchChange","focusedChange",4,"tuiLet"],["tuiIconButton","","icon","tuiIconRefreshCw","size","m",1,"tui-group__auto-width-item",3,"click"],["tuiTextfieldSize","m","formControlName","to",3,"searchChange",4,"tuiLet"],["tuiTextfieldSize","m","formControlName","from",3,"searchChange","focusedChange"],["tuiTextfield","","placeholder","Type a name",3,"input"],["from",""],[3,"items",4,"tuiDataList"],[3,"items"],["tuiTextfieldSize","m","formControlName","to",3,"searchChange"],["to",""]],template:function(e,o){1&e&&(t.ynx(0,0),t.TgZ(1,"div",1),t.YNc(2,W,5,0,"tui-combo-box",2),t.ALo(3,"async"),t.TgZ(4,"button",3),t.NdJ("click",function(){return o.switchLocation()}),t.qZA(),t.YNc(5,j,5,0,"tui-combo-box",4),t.ALo(6,"async"),t.qZA(),t.BQk()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("tuiLet",t.lcZ(3,3,o.items$)),t.xp6(3),t.Q6J("tuiLet",t.lcZ(6,5,o.items$)))},dependencies:[Q.gX,z.eC,_.MB,m.sz,x.v0,T._p,T.m2,P.Ls,h.gZ,i.JJ,i.JL,i.sg,i.u,i.x0,f.Ov],changeDetection:0}),n})();var $=s(8920);let H=(()=>{class n{constructor(e){this.formGroupRoot=e,this.tripTypes=u,this.form=new i.cw({})}ngOnInit(){this.form=this.formGroupRoot.control}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.sg))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-type"]],decls:6,vars:5,consts:[[3,"formGroup"],["formGroupName","tripType","tuiGroup","",1,"trip-type"],["formControlName","type","size","m",1,"tui-space_bottom-5","tui-group__auto-width-item",3,"item"]],template:function(e,o){1&e&&(t.ynx(0,0),t.TgZ(1,"div",1)(2,"tui-radio-labeled",2),t._uU(3),t.qZA(),t.TgZ(4,"tui-radio-labeled",2),t._uU(5),t.qZA()(),t.BQk()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("item",o.tripTypes.round),t.xp6(1),t.hij(" ",o.tripTypes.round," "),t.xp6(1),t.Q6J("item",o.tripTypes.oneWay),t.xp6(1),t.hij(" ",o.tripTypes.oneWay," "))},dependencies:[$.Y,h.gZ,i.JJ,i.JL,i.sg,i.u,i.x0],styles:[".trip-type[_ngcontent-%COMP%]{justify-content:center;gap:40px;padding:0 20px}"]}),n})();var w=s(9603);let X=(()=>{class n{constructor(e){this.formGroupRoot=e,this.form=new i.cw({})}ngOnInit(){this.form=this.formGroupRoot.control}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.sg))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-passengers"]],decls:8,vars:7,consts:[[3,"formGroup"],["tuiGroup","","formGroupName","passengers"],["formControlName","adults","tuiTextfieldSize","m",1,"tui-group__inherit-item",3,"min","max"],["formControlName","child","tuiTextfieldSize","m",1,"tui-group__inherit-item",3,"min","max"],["formControlName","infant","tuiTextfieldSize","m",1,"tui-group__inherit-item",3,"min","max"]],template:function(e,o){1&e&&(t.ynx(0,0),t.TgZ(1,"div",1)(2,"tui-input-count",2),t._uU(3," Adults "),t.qZA(),t.TgZ(4,"tui-input-count",3),t._uU(5," Child "),t.qZA(),t.TgZ(6,"tui-input-count",4),t._uU(7," Infant "),t.qZA()(),t.BQk()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("min",0)("max",100),t.xp6(2),t.Q6J("min",0)("max",100),t.xp6(2),t.Q6J("min",0)("max",100))},dependencies:[m.sz,w.EA,w.aQ,h.gZ,i.JJ,i.JL,i.sg,i.u,i.x0],changeDetection:0}),n})();const E=["container"],K=[{path:"",component:(()=>{class n{constructor(e,o){this.calendarFactory=e,this.store=o,this.container={},this.type=new F.y,this.dateFormatSubscribtion=new l.w0,this.typeSubscription=new l.w0,this.changeDateSubscription=new l.w0,this.dateFormat=u.oneWay,this.searchFlightsForm=new i.cw({passengers:new i.cw({adults:new i.NI(0,[i.kI.required]),child:new i.NI(0,[i.kI.required]),infant:new i.NI(0,[i.kI.required])}),tripType:new i.cw({type:new i.NI(u.round,[i.kI.required])}),location:new i.cw({from:new i.NI("",[i.kI.required]),to:new i.NI("",[i.kI.required])}),date:new i.cw({oneWay:new i.NI(null,[i.kI.nullValidator,this.dateOneWayValidator.bind(this)]),range:new i.NI(null,[i.kI.nullValidator,this.dateRangeValidator.bind(this)])},{validators:this.dateGroupValidator()})})}ngOnInit(){this.type=this.searchFlightsForm.controls.tripType.valueChanges,this.typeSubscription=this.type.subscribe(()=>{this.tripType.value&&this.createCalendar(this.tripType.value)}),this.dateFormatSubscribtion=this.store.select(Z.iY).subscribe(e=>{this.dateFormat=e;try{this.tripType.value&&this.createCalendar(this.tripType.value)}catch(o){console.log(o)}})}ngAfterViewInit(){this.tripType.value&&this.createCalendar(this.tripType.value)}ngOnDestroy(){this.dateFormatSubscribtion.unsubscribe(),this.typeSubscription.unsubscribe(),this.changeDateSubscription.unsubscribe()}onSubmit(){console.log(this.searchFlightsForm)}get tripType(){return this.searchFlightsForm.controls.tripType.controls.type}isOneWayTrip(){return this.tripType.value===u.oneWay}dateGroupValidator(){return e=>e.get("oneWay")?.value||e.get("range")?.value?null:{date:!0}}dateOneWayValidator(e){return!e.value||this.checkDate(e.value)?null:{date:!0}}dateRangeValidator(e){return!e.value||this.checkDate(e.value.from)?null:{date:!0}}checkDate(e){const o=(new Date).getTime();return new Date(e.year,e.month,e.day).getTime()>o}createCalendar(e){let o;e===u.oneWay?(o=this.calendarFactory.createOneWayCalendar(this.modifyDateFormat(this.dateFormat)),this.changeDateSubscription=o.instance.changeDateValue.subscribe(a=>{this.searchFlightsForm.controls.date.controls.oneWay.setValue(a)})):(o=this.calendarFactory.createRangeCalendar(this.modifyDateFormat(this.dateFormat)),this.changeDateSubscription=o.instance.changeDateValue.subscribe(a=>{this.searchFlightsForm.controls.date.controls.range.setValue(a)})),this.container.clear(),this.container.insert(o.hostView)}modifyDateFormat(e){return e.split("/").reduce((o,a)=>o+a[0],"")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L),t.Y36(R.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main-page"]],viewQuery:function(e,o){if(1&e&&t.Gf(E,5,t.s_b),2&e){let a;t.iGM(a=t.CRH())&&(o.container=a.first)}},decls:12,vars:2,consts:[[1,"flight-search","b-form",3,"formGroup","tuiTextfieldCleaner"],[1,"form-field"],["container",""],["tuiButton","","size","m",1,"button",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1),t._UZ(2,"app-type"),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"app-location"),t.qZA(),t.TgZ(5,"div",1),t.GkF(6,null,2),t.qZA(),t.TgZ(8,"div",1),t._UZ(9,"app-passengers"),t.qZA(),t.TgZ(10,"button",3),t.NdJ("click",function(){return o.onSubmit()}),t._uU(11,"Search"),t.qZA()()),2&e&&t.Q6J("formGroup",o.searchFlightsForm)("tuiTextfieldCleaner",!0)},dependencies:[m.be,x.v0,i._Y,i.JL,i.sg,k,H,X],styles:[".flight-search[_ngcontent-%COMP%]{box-shadow:0 1.125rem 1.875rem #0000007a;width:40%;height:400px;min-width:500px;margin:50px auto;background-color:var(--tui-base-01);border-radius:25px;padding:20px}@media screen and (max-width: 63.9625em){.flight-search[_ngcontent-%COMP%]{margin:50px auto;min-width:360px;width:80%}}@media screen and (max-width: 47.9625em){.flight-search[_ngcontent-%COMP%]{margin:100px auto;min-width:300px;width:90%}}.flight-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center}.flight-search[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{margin:20px 0}.flight-search[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:50%;margin:20px 25%}"],changeDetection:0}),n})()}],q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(K),g.Bz]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.Z,q,i.UX,i.u5,f.ez]}),n})()}}]);
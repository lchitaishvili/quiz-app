(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6Mme":function(e,t,r){"use strict";r.r(t),r.d(t,"ResultsModule",(function(){return m}));var n=r("ofXK"),c=r("PCNd"),o=r("tyNb"),s=r("BSWP"),i=r("fXoL"),u=r("kmKP"),a=r("QfPV"),b=r("bTqV"),l=r("NFeN");const f=[{path:"",component:(()=>{class e{constructor(e,t,r){this.userService=e,this.questionsService=t,this.router=r}ngOnInit(){}retry(){this.userService.setCurrentScore(0),this.questionsService.reset(),this.router.navigateByUrl("info")}get name(){return this.userService.getName()}get score(){return this.userService.getCurrentScore()}get amount(){return this.questionsService.getAmount()}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(u.a),i.Lb(a.a),i.Lb(o.e))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-results"]],decls:14,vars:4,consts:[[1,"wrapper"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h1"),i.Rb(2,"b"),i.qc(3),i.Qb(),i.qc(4,", your score is "),i.Rb(5,"b"),i.qc(6),i.Qb(),i.qc(7," out of "),i.Rb(8,"b"),i.qc(9),i.Qb(),i.Qb(),i.Rb(10,"button",1),i.Yb("click",(function(){return t.retry()})),i.qc(11," Try Again "),i.Rb(12,"mat-icon"),i.qc(13,"refresh"),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.fc("@slowSlide",void 0),i.Ab(3),i.rc(t.name),i.Ab(3),i.rc(t.score),i.Ab(3),i.rc(t.amount))},directives:[b.a,l.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"],data:{animation:[s.a]},changeDetection:0}),e})()}];let p=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[o.f.forChild(f)],o.f]}),e})(),m=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[n.b,c.a,p]]}),e})()}}]);
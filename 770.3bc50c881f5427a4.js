"use strict";(self.webpackChunktbc_digital_game=self.webpackChunktbc_digital_game||[]).push([[770],{770:(A,a,i)=>{i.r(a),i.d(a,{QuizModule:()=>b});var c=i(895),p=i(322),n=i(256);const l=function(t,r,e){return{success:t,error:r,selected:e}};function d(t,r){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"button",2),n.NdJ("click",function(){const u=n.CHM(e).index,P=n.oxw();return n.KtG(P.onSelect(u+1))}),n.TgZ(2,"span",3),n._uU(3),n.qZA(),n.TgZ(4,"span",4),n._uU(5,"\u10db\u10d4, \u10d1\u10d4\u10d1\u10d8\u10d0, \u10d8\u10da\u10d8\u10d9\u10dd \u10d3\u10d0 \u10d8\u10da\u10d0\u10e0\u10d8\u10dd\u10dc\u10d8"),n.qZA()(),n.BQk()}if(2&t){const e=r.index,o=n.oxw();n.xp6(1),n.Q6J("ngClass",n.kEZ(2,l,e+1===o.correctIndex,e+1===o.incorrectIndex,e+1===o.selectedIndex)),n.xp6(2),n.Oqu("0"+(e+1))}}const g=function(){return[1,2,3,4]};let x=(()=>{class t{constructor(){this.correctIndex=NaN,this.incorrectIndex=NaN,this.selectedIndex=NaN,this.selectAnswer=new n.vpe}ngOnInit(){}onSelect(e){this.selectAnswer.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-multiple-choice"]],inputs:{correctIndex:"correctIndex",incorrectIndex:"incorrectIndex",selectedIndex:"selectedIndex"},outputs:{selectAnswer:"selectAnswer"},decls:2,vars:2,consts:[[1,"wrapper","flex","column"],[4,"ngFor","ngForOf"],[1,"answer","flex","align-center",3,"ngClass","click"],[1,"index","title-large"],[1,"text"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.YNc(1,d,6,6,"ng-container",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,g)))},dependencies:[c.mk,c.sg],styles:[".wrapper[_ngcontent-%COMP%]{gap:12px}.wrapper[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{background-color:var(--primary-bg);width:100%;padding:12px;border:1px solid var(--primary-border);border-radius:8px;gap:15px;transition:all .25s linear}.wrapper[_ngcontent-%COMP%]   .answer.success[_ngcontent-%COMP%]{background-color:var(--success);border-color:var(--success)!important}.wrapper[_ngcontent-%COMP%]   .answer.success[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .answer.success[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--primary-bg)}.wrapper[_ngcontent-%COMP%]   .answer.error[_ngcontent-%COMP%]{background-color:var(--error);border-color:var(--error)!important}.wrapper[_ngcontent-%COMP%]   .answer.error[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .answer.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--primary-bg)}.wrapper[_ngcontent-%COMP%]   .answer.selected[_ngcontent-%COMP%]{border-color:var(--brand)}.wrapper[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%]{color:var(--success)}.wrapper[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:13px}",".error[_ngcontent-%COMP%]{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translateZ(0)}@keyframes shake{10%,90%{transform:translate3d(-2px,0,0)}20%,80%{transform:translate3d(4px,0,0)}30%,50%,70%{transform:translate3d(-8px,0,0)}40%,60%{transform:translate3d(8px,0,0)}}"]}),t})();function m(t,r){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"input",2),n.NdJ("keyup",function(s){n.CHM(e);const u=n.oxw();return n.KtG(u.onDigitInput(s))}),n.qZA(),n.BQk()}if(2&t){const e=r.index;n.xp6(1),n.MGl("id","input",e,"")}}const _=function(){return[1,2,3,4,5,6,7,8,9,10]};let D=(()=>{class t{constructor(){}ngOnInit(){}onDigitInput(e){let o;"Backspace"!==e.code&&(o=e.srcElement.nextElementSibling),"Backspace"===e.code&&(o=e.srcElement.previousElementSibling),o?.focus()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-fill"]],decls:2,vars:2,consts:[[1,"wrapper"],[4,"ngFor","ngForOf"],["type","text","maxlength","1",3,"id","keyup"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.YNc(1,m,2,1,"ng-container",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,_)))},dependencies:[c.sg],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;gap:7.5px;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;background-color:var(--primary-bg);border:1px solid rgba(32,33,36,.1215686275);text-align:center;font-size:18px;font-weight:700}",".error[_ngcontent-%COMP%]{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translateZ(0)}@keyframes shake{10%,90%{transform:translate3d(-2px,0,0)}20%,80%{transform:translate3d(4px,0,0)}30%,50%,70%{transform:translate3d(-8px,0,0)}40%,60%{transform:translate3d(8px,0,0)}}"]}),t})();function C(t,r){if(1&t&&(n.TgZ(0,"p",7),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Oqu(e.errorText)}}function f(t,r){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"app-multiple-choice",8),n.NdJ("selectAnswer",function(s){n.CHM(e);const u=n.oxw();return n.KtG(u.selectAnswer(s))}),n.qZA(),n.BQk()}if(2&t){const e=n.oxw();n.xp6(1),n.Q6J("correctIndex",e.correctAnswerIndex)("incorrectIndex",e.incorrectAnswerIndex)("selectedIndex",e.selectedAnswerIndex)}}function w(t,r){1&t&&(n.ynx(0),n._UZ(1,"app-fill"),n.BQk())}let M=(()=>{class t{constructor(){this.selectedAnswerIndex=NaN,this.correctAnswerIndex=NaN,this.incorrectAnswerIndex=NaN,this.errorText=""}ngOnInit(){}onSubmit(){this.selectedAnswerIndex?(this.correctAnswerIndex=2,this.selectedAnswerIndex!==this.correctAnswerIndex&&(this.incorrectAnswerIndex=this.selectedAnswerIndex)):this.errorText="\u10d2\u10d7\u10ee\u10dd\u10d5\u10d7, \u10db\u10dd\u10dc\u10d8\u10e8\u10dc\u10d4 \u10d4\u10e0\u10d7-\u10d4\u10e0\u10d7\u10d8 \u10de\u10d0\u10e1\u10e3\u10ee\u10d8"}selectAnswer(e){this.errorText="",this.selectedAnswerIndex=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-question"]],decls:11,vars:3,consts:[[1,"wrapper","flex","column","align-center","justify-between"],["src","assets/images/temp-img.png","alt","",1,"mb-3","no-point"],[1,"question-text","text","mb-2"],["class","error mb-2",4,"ngIf"],[1,"answer","mb-5"],[4,"ngIf"],[3,"click"],[1,"error","mb-2"],[3,"correctIndex","incorrectIndex","selectedIndex","selectAnswer"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div"),n._UZ(2,"img",1),n.TgZ(3,"p",2),n._uU(4," \u10e0\u10dd\u10db\u10d4\u10da\u10d8 \u10e0\u10dd\u10db\u10d0\u10dc\u10d8\u10e1 \u10db\u10d7\u10d0\u10d5\u10d0\u10e0\u10d8 \u10de\u10d4\u10e0\u10e1\u10dd\u10dc\u10d0\u10df\u10d8\u10e1 \u10e1\u10d0\u10ee\u10d4\u10da\u10d8 \u10e8\u10d4\u10d8\u10eb\u10da\u10d4\u10d1\u10d0 \u10d2\u10d0\u10d5\u10d8\u10d2\u10dd\u10d7 \u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd\u10e1 \u10f0\u10d8\u10db\u10dc\u10d8\u10e1 \u10d3\u10d0\u10e1\u10d0\u10ec\u10e7\u10d8\u10e1\u10e8\u10d8? "),n.qZA(),n.YNc(5,C,2,1,"p",3),n.TgZ(6,"div",4),n.YNc(7,f,2,3,"ng-container",5),n.YNc(8,w,2,0,"ng-container",5),n.qZA()(),n.TgZ(9,"button",6),n.NdJ("click",function(){return o.onSubmit()}),n._uU(10,"\u10d3\u10d0\u10d0\u10d3\u10d0\u10e1\u10e2\u10e3\u10e0\u10d4"),n.qZA()()),2&e&&(n.xp6(5),n.Q6J("ngIf",o.errorText),n.xp6(2),n.Q6J("ngIf",!0),n.xp6(1),n.Q6J("ngIf",!1))},dependencies:[c.O5,x,D],styles:[".wrapper[_ngcontent-%COMP%]{min-height:350px}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:16px}.wrapper[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%]{color:var(--text-strong);font-weight:500}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:var(--error)}",".error[_ngcontent-%COMP%]{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translateZ(0)}@keyframes shake{10%,90%{transform:translate3d(-2px,0,0)}20%,80%{transform:translate3d(4px,0,0)}30%,50%,70%{transform:translate3d(-8px,0,0)}40%,60%{transform:translate3d(8px,0,0)}}"]}),t})();const O=[{path:"",component:(()=>{class t{constructor(e){this.location=e,this.data={}}ngOnInit(){}back(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.Ye))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-quiz"]],inputs:{data:"data"},decls:9,vars:0,consts:[[1,"quiz-wrapper"],[1,"top","flex","justify-between","mb-3"],["src","assets/icons/back-arrow.svg","alt","back",3,"click"],[1,"title"],[1,"empty"],[1,"question-wrapper"],[1,"inner-wrapper"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"img",2),n.NdJ("click",function(){return o.back()}),n.qZA(),n.TgZ(3,"p",3),n._uU(4,"\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0 04"),n.qZA(),n._UZ(5,"div",4),n.qZA(),n.TgZ(6,"div",5)(7,"div",6),n._UZ(8,"app-question"),n.qZA()()())},dependencies:[M],styles:[".quiz-wrapper[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{width:1px;height:1px}.quiz-wrapper[_ngcontent-%COMP%]   .question-wrapper[_ngcontent-%COMP%]{background-color:var(--secondary-bg);border-radius:16px;padding:12px 12px 24px}.quiz-wrapper[_ngcontent-%COMP%]   .question-wrapper[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]{background-color:var(--primary-bg);padding:16px;border-radius:16px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(O),p.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,h]}),t})()}}]);
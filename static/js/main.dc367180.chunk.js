(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n,a=i(7),s=i.n(a),c=i(2),r=i(3),m=i(4),l=i(1);!function(e){e.itemId="itemWidth",e.marginId="margin",e.frameId="frameSize",e.stepId="step",e.animationDurationId="animationDuration",e.infiniteId="infinite"}(n||(n={}));var o=i(6),p=i.n(o),u=(i(12),i(0)),b=function(e){var t=e.images,i=e.margin,n=e.step,a=e.frameSize,s=e.itemWidth,c=e.animationDuration,r=e.infinite,o=Object(l.useState)(0),b=Object(m.a)(o,2),d=b[0],j=b[1],g=t.length-a,h=0===d&&!r,_=d===g&&!r;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*(s+2*i),"px"),transition:"".concat(c,"ms")},children:[Object(u.jsx)("ul",{className:"Carousel__list",children:t.map((function(e,t){return Object(u.jsx)("li",{style:{transform:"translateX(".concat(-d*(s+2*i),"px)"),transition:"transform ".concat(c,"ms ease")},children:Object(u.jsx)("img",{className:"Carousel__img",style:{margin:"0 ".concat(i,"px"),transition:"margin ".concat(c,"ms ease")},src:e,alt:"".concat(t+1),width:s})},e)}))}),Object(u.jsxs)("div",{className:"Carousel__controls",children:[Object(u.jsx)("button",{className:p()("Carousel__btn",{"Carousel__btn--disable":h,"Carousel__btn--active":!h}),type:"button",onClick:function(){return j(0!==d?d-n>=0?d-n:0:g)},disabled:h,children:"Prev"}),Object(u.jsx)("button",{className:p()("Carousel__btn",{"Carousel__btn--disable":_,"Carousel__btn--active":!_}),"data-cy":"next",type:"button",onClick:function(){return j(d!==g?d+n<=g?d+n:g:0)},disabled:_,children:"Next"})]})]})},d=(i(14),["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]),j=function(){var e=Object(l.useState)({step:3,margin:15,frameSize:4,itemWidth:100,animationDuration:500,infinite:!1}),t=Object(m.a)(e,2),i=t[0],a=t[1];function s(e){"infiniteId"!==e.target.id?a((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(c.a)({},n[e.target.id],+e.target.value))})):a((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(c.a)({},n[e.target.id],!t.infinite))}))}return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title","data-cy":"title",children:"Carousel with ".concat(d.length," images")}),Object(u.jsxs)("div",{className:"App__wrapper",children:[Object(u.jsxs)("label",{className:"App__label",htmlFor:"itemId",children:["Item Width: ",Object(u.jsx)("input",{className:"App__input",id:"itemId",type:"number",min:70,max:260,step:5,value:i.itemWidth,onChange:s})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"marginId",children:["Item Margin: ",Object(u.jsx)("input",{className:"App__input",id:"marginId",type:"number",min:5,max:40,step:5,value:i.margin,onChange:s})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"frameId",children:["Frame Size: ",Object(u.jsx)("input",{className:"App__input",id:"frameId",type:"number",min:1,max:d.length,step:1,value:i.frameSize,onChange:s})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"stepId",children:["Step: ",Object(u.jsx)("input",{className:"App__input",id:"stepId",type:"number",min:1,max:i.frameSize,value:i.step,onChange:s})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"animationDurationId",children:["Animation duration: ",Object(u.jsx)("input",{className:"App__input",id:"animationDurationId",type:"number",min:0,max:2500,step:250,value:i.animationDuration,onChange:s})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"infiniteId",children:["Infinite :",Object(u.jsx)("input",{className:"App__checkbox",id:"infiniteId",type:"checkbox",role:"switch",onChange:s})]})]}),Object(u.jsx)(b,{images:d,margin:i.margin,step:i.step,frameSize:i.frameSize,itemWidth:i.itemWidth,animationDuration:i.animationDuration,infinite:i.infinite})]})};s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dc367180.chunk.js.map
(self.webpackChunk_2023_mcdonalds_star_metaverse=self.webpackChunk_2023_mcdonalds_star_metaverse||[]).push([[677],{2677:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var i=t(7294),r=t(3379),a=t.n(r),o=t(7795),s=t.n(o),d=t(569),l=t.n(d),c=t(3565),m=t.n(c),u=t(9216),g=t.n(u),x=t(4589),p=t.n(x),b=t(8622),f=t.n(b),h={};h.styleTagTransform=p(),h.setAttributes=m(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=g(),a()(f(),h),f()&&f().locals&&f().locals;var k=t(5893),w=function(n){var e=n.data,t=e.name,r=e.productName,a=e.image,o=(0,i.useMemo)((function(){return t.split("").map((function(n){return"星"===n?(0,k.jsx)("div",{className:"capitalize"}):n}))}),[t]);return(0,k.jsxs)("div",{className:"box",children:[(0,k.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),(0,k.jsx)("div",{className:"name",children:o.map((function(n,e){return(0,k.jsx)(i.Fragment,{children:n},"d".concat(e))}))}),(0,k.jsx)("div",{className:"productName",children:(0,k.jsx)("div",{children:r})})]})},y=function(n){var e=n.data.troll;return(0,k.jsxs)("div",{className:"message",children:[(0,k.jsx)("div",{className:"title"}),(0,k.jsx)("div",{className:"body",children:e.map((function(n){return(0,k.jsx)("p",{children:n},n)}))})]})},v=(0,i.memo)((function(n){var e=n.data,t=e.buddies;return(0,k.jsxs)("div",{className:"Buddy",children:[t.map((function(n){return(0,k.jsx)(w,{data:n},JSON.stringify(n))})),(0,k.jsx)(y,{data:e})]})}))},8622:function(n,e,t){var i=t(8081),r=t(3645),a=t(1667),o=t(1268),s=t(6524),d=t(9154),l=t(3120),c=r(i),m=a(o),u=a(s),g=a(d),x=a(l);c.push([n.id,".Buddy {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  margin-top: 25px;\n  width: 100%;\n  height: 218px;\n  border: solid 2px #cd718c;\n  background: -webkit-gradient(linear, left bottom, left top, from(#141043), to(#ae4773));\n  background: linear-gradient(0deg, #141043 0%, #ae4773 100%);\n  -webkit-box-shadow: 0 0 20px #c95e8a;\n          box-shadow: 0 0 20px #c95e8a;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}.Buddy > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * 0);\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * (1 - 0));\n  margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(1.5rem * calc(1 - 0));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.Buddy {\n  border-radius: 1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.Buddy::after {\n  position: absolute;\n  right: 0px;\n  bottom: -26px;\n  width: 75.26px;\n  height: 80.23px;\n  background-image: url("+m+");\n  background-size: 100%;\n  content: '';\n  pointer-events: none;\n}\n.Buddy .box {\n  position: relative;\n  width: 132px;\n  height: 100%;\n}\n.Buddy .box .image {\n  margin-top: 15px;\n  padding-bottom: 105%;\n  width: 100%;\n  background-color: #c95e8a;\n  background-position: center;\n  background-size: cover;\n  border-radius: 0.75rem;\n  text-align: center;\n}\n.Buddy .box .name {\n  width: 100%;\n  color: #f3b03d;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family: Bold, Microsoft JhengHei, PingFang, sans-serif;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  letter-spacing: 0.1em;\n}\n.Buddy .box .name .capitalize {\n  margin: 0 3px 0 2px;\n  margin-top: 0.5px;\n  width: 18.17px;\n  height: 19.75px;\n  background-image: url("+u+");\n  background-size: 100%;\n}\n.Buddy .box .productName {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Buddy .box .productName > div {\n  width: 86%;\n  background-color: #000;\n  text-align: center;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  font-family: Medium, Microsoft JhengHei, PingFang, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.Buddy .message {\n  position: relative;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.Buddy .message .title {\n  position: relative;\n  margin-top: 12px;\n  width: 262.7px;\n  height: 68.16px;\n  background-image: url("+g+");\n  background-size: 100%;\n}\n.Buddy .message .title::after {\n  position: absolute;\n  bottom: -32px;\n  width: 23.43px;\n  height: 22.01px;\n  background-image: url("+x+");\n  background-size: 100%;\n  content: '';\n}\n.Buddy .message .body {\n  margin-top: 23px;\n  width: 100%;\n  text-align: center;\n  font-family: Regular, Microsoft JhengHei, PingFang, sans-serif;\n  letter-spacing: 0.1em;\n}\n",""]),n.exports=c},6524:function(n,e,t){"use strict";t.r(e),e.default=t.p+"bundle/image/pages/result/userContent/buddy/img/capitalize.svg"},3120:function(n,e,t){"use strict";t.r(e),e.default=t.p+"bundle/image/pages/result/userContent/buddy/img/heart.svg"},1268:function(n,e,t){"use strict";t.r(e),e.default=t.p+"bundle/image/pages/result/userContent/buddy/img/star.svg"},9154:function(n,e,t){"use strict";t.r(e),e.default=t.p+"bundle/image/pages/result/userContent/buddy/img/title.svg"}}]);
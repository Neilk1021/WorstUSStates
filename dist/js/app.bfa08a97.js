(function(){"use strict";var t={7332:function(t,e,o){var n=o(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v(" Which US State is the Worst? ")]),e("br"),e("br"),e("div",{staticClass:"examples__block__map examples__block__map--usa"},[e("SvgMap",{attrs:{map:t.USA,"location-class":t.getLocationClass},on:{mouseover:t.pointLocation,mouseout:t.unpointLocation,mousemove:t.moveOnLocation}}),e("div",{staticClass:"examples__block__map__tooltip",style:t.tooltipStyle},[t._v(" "+t._s(t.pointedLocation)+" ")])],1),e("div",{staticClass:"DividerInfo"},[e("vs-divider",{attrs:{color:"default"}},[t._v("Information")]),e("vs-row",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[e("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[e("vs-collapse",{attrs:{accordion:""}},[e("vs-collapse-item",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v(" What are the worst states? ")]),t._v(" According to a survey taken by "),e("a",{attrs:{href:"https://forms.gle/JtedZd1XcBqeUb777",color:"#ad3939"}},[t._v("50 participants")]),t._v(" Florida, Ohio, California, New York, Texas, Alabama, and Wyoming "),e("a",{attrs:{href:"https://wyomingisntreal.com/",color:"#ad3939"}},[t._v("(not real)")]),t._v(" are by far the worst states. Ohio comes in first with 25.7% of participants deeming it the worst state, in second is Florida with 14.3%, and finally a three way tie for third between California Wyoming and Texas. ")]),e("vs-collapse-item",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v(" Why make this? ")]),t._v(" For the bit. ")]),e("vs-collapse-item",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v(" About ")]),t._v(" Built with "),e("a",{attrs:{href:"https://vuejs.org/",color:"#ad3939"}},[t._v("Vue Js")]),t._v(" by "),e("a",{attrs:{href:"https://www.instagram.com/nel_kett/",color:"#ad3939"}},[t._v(" Neil K ")])])],1)],1)],1)],1)])},i=[];function r(t){return t&&t.attributes.name.value}function s(t){return Array.from(t.parentElement.children).indexOf(t)}var l=o(230),c=o(5175),u={name:"App",components:{SvgMap:l.lQ},data(){return{USA:c.Z,States:[2,12,6,4,10,2,1,0,6,9,3,1,5,4,2,6,4,6,5,1,3,1,3,1,1,3,3,3,4,1,3,5,3,1,7,11,3,1,3,1,1,4,2,10,5,1,3,2,3,5,8],pointedLocation:null,tooltipStyle:null,PercentHate:0}},mounted(){this.unpointLocation()},methods:{pointLocation(){this.PercentHate=this.States[s(event.target)]/.31,this.pointedLocation=r(event.target)+" "+this.PercentHate.toFixed(2)+"%"},unpointLocation(){this.pointedLocation=null,this.tooltipStyle={display:"none"}},moveOnLocation(){this.tooltipStyle={display:"block",top:`${event.clientY+10}px`,left:event.clientX-100+"px"}},getLocationClass(t,e){return this.States[e]/194<.006?"svg-map__location svg-map__location--heat0":this.States[e]/194<.02?"svg-map__location svg-map__location--heat1":this.States[e]/194<.03?"svg-map__location svg-map__location--heat2":this.States[e]/194<.04?"svg-map__location svg-map__location--heat3":this.States[e]/194>=.04?"svg-map__location svg-map__location--heat4":void 0}}},v=u,p=o(1001),f=(0,p.Z)(v,a,i,!1,null,null,null),h=f.exports,d=o(825),_=o.n(d);n["default"].config.productionTip=!1,n["default"].use(_(),{}),new n["default"]({render:t=>t(h)}).$mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(e&&e(n);c<r.length;c++)i=r[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},n=self["webpackChunkWhat_is_the_worst_state"]=self["webpackChunkWhat_is_the_worst_state"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7332)}));n=o.O(n)})();
//# sourceMappingURL=app.bfa08a97.js.map
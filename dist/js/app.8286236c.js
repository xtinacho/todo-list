(function(e){function t(t){for(var n,i,a=t[0],l=t[1],s=t[2],p=0,d=[];p<a.length;p++)i=a[p],r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},c=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("c21b"),r=o.n(n);r.a},"445f":function(e,t,o){},"541a":function(e,t,o){e.exports="img/hello-kitty.5239c5bc.png"},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("541a")}}),n("toDoList")],1)},c=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("To Do List!")]),o("form",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newToDo,expression:"newToDo"}],attrs:{type:"text",placeholder:"To Do Item"},domProps:{value:e.newToDo},on:{input:function(t){t.target.composing||(e.newToDo=t.target.value)}}}),o("button",{attrs:{type:"button"},on:{click:function(t){e.add()}}},[e._v("Add")])]),o("div",[o("h2",[e._v("Things to Do:")]),o("ul",e._l(e.ToDos,function(t,n){return o("li",{key:n,class:{completed:t.completed}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"ToDo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,c=!!r.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);r.checked?a<0&&e.$set(t,"completed",n.concat([i])):a>-1&&e.$set(t,"completed",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"completed",c)}}}),o("span",[e._v(e._s(t.name))])])}))]),o("button",{attrs:{type:"button"},on:{click:function(t){e.destroy()}}},[e._v("Clear Tasks")])])},a=[],l={name:"ToDo",data:function(){return{newToDo:"",ToDos:[]}},methods:{add:function(){this.ToDos.push({name:this.newToDo,completed:!1}),this.newToDo=""},destroy:function(){this.ToDos=[]}},mounted:function(){localStorage.getItem("ToDos")&&(this.ToDos=JSON.parse(localStorage.getItem("ToDos")))},watch:{ToDos:{handler:function(){localStorage.setItem("ToDos",JSON.stringify(this.ToDos))}}}},s=l,u=(o("666a"),o("2877")),p=Object(u["a"])(s,i,a,!1,null,"68774700",null);p.options.__file="toDoList.vue";var d=p.exports,f={name:"app",components:{toDoList:d}},m=f,v=(o("034f"),Object(u["a"])(m,r,c,!1,null,null,null));v.options.__file="App.vue";var h=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"666a":function(e,t,o){"use strict";var n=o("445f"),r=o.n(n);r.a},c21b:function(e,t,o){}});
//# sourceMappingURL=app.8286236c.js.map
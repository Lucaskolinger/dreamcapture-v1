(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{462:function(t,e,o){var content=o(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("25537ce5",content,!0,{sourceMap:!1})},465:function(t,e,o){var content=o(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("008d4151",content,!0,{sourceMap:!1})},466:function(t,e,o){"use strict";o(462)},467:function(t,e,o){var n=o(26)(!1);n.push([t.i,".container[data-v-7820b936]{grid-area:home;width:100%;height:100vh;color:red;display:flex;justify-content:center;align-items:center}",""]),t.exports=n},468:function(t,e,o){"use strict";o.r(e);var n={},r=(o(466),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container"},[t._v("Home content")])}),[],!1,null,"7820b936",null);e.default=component.exports},474:function(t,e,o){"use strict";o(465)},475:function(t,e,o){var n=o(26)(!1);n.push([t.i,".container[data-v-9ca4a7b6]{grid-area:vcs;background-color:#011a38;height:calc(100vh - 4rem);overflow-y:scroll}@media(min-width:56.25em){.container[data-v-9ca4a7b6]{display:none}}.container .button-section[data-v-9ca4a7b6]{margin-top:1rem;margin-bottom:1rem;display:flex;background-color:#011a38;align-items:center;justify-content:center;padding-left:1rem;padding-right:1rem}.container .button-section .toggle-btn[data-v-9ca4a7b6]{display:block;width:50%;padding:1rem;background-color:#011a38;cursor:pointer;border-style:none;color:#fff}.container .button-section .active[data-v-9ca4a7b6]{background-color:#01233f;border-radius:.5rem}",""]),t.exports=n},487:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{showList:!0,showHome:!1}},methods:{showHomeHandler:function(){this.showHome=!0,this.showList=!1,this.$refs.homebtn.classList.add("active"),this.$refs.listbtn.classList.remove("active")},showListHandler:function(){this.showList=!0,this.showHome=!1,this.$refs.homebtn.classList.remove("active"),this.$refs.listbtn.classList.add("active")}}},r=(o(474),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"button-section"},[o("button",{ref:"homebtn",staticClass:"toggle-btn",on:{click:t.showHomeHandler}},[t._v("\n      Neues von Dreamcapture\n    ")]),t._v(" "),o("button",{ref:"listbtn",staticClass:"toggle-btn active",on:{click:t.showListHandler}},[t._v("\n      Dreamcapture Projekte\n    ")])]),t._v(" "),t.showList?o("card-list"):t._e(),t._v(" "),t.showHome?o("home"):t._e()],1)}),[],!1,null,"9ca4a7b6",null);e.default=component.exports;installComponents(component,{CardList:o(266).default,Home:o(468).default})}}]);
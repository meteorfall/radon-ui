webpackJsonp([20,33],{2:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.rdMark=void 0;var c=t(3),o=r(c);n.rdMark=o.default},3:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var c=t(4),o=r(c);n.default={functional:!0,render:function(e,n){var t="",r=!0,c=!1,d=void 0;try{for(var a,u=(0,o.default)(n.children);!(r=(a=u.next()).done);r=!0){var i=a.value;t+=i.text}}catch(e){c=!0,d=e}finally{try{!r&&u.return&&u.return()}finally{if(c)throw d}}return e("div",{class:["marked"],domProps:{innerHTML:window.marked(t)}})}}},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),c=t(5);n.default={data:function(){return{code:{one:'<rd-checkbox :checkbox="checkbox"></rd-checkbox>'},checkbox:{checked:!1,text:"我已阅读用户协议"},checkA:{disabled:!1,checked:!1,text:"同意服务条款"}}},components:{rdCheckbox:c.rdCheckbox,rdMark:r.rdMark}}},610:function(e,n,t){var r,c;r=t(247);var o=t(666);c=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(c=r=r.default),"function"==typeof c&&(c=c.options),c.render=o.render,c.staticRenderFns=o.staticRenderFns,e.exports=r},666:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return n("div",{staticClass:"ex-content"},[n("h2")," ",n("div",{staticClass:"ex-card"},[n("rd-mark",["\n# Checkbox 多选框\n\n简单的checkbox\n\n### 示例\n        "])," ",n("p",[n("rd-checkbox",{attrs:{checkbox:e.checkbox}})," ",n("rd-checkbox",{attrs:{checkbox:e.checkA}})])," ",n("rd-mark",["\n### 代码\n\n```html\n"+e._s(e.code.one)+'\n```\n\n```javascript\nexport default {\n    data () {\n        return {\n            checkbox: {\n                checked: false,\n                text: "我已阅读用户协议"\n            }\n        }\n    },\n    components: {\n       rdCheckbox\n    }\n}\n```\n\n### API\n\n** checkbox **\n\n| 参数            | 类型         | 说明        |\n| :------------- |:-------------|:------------|\n| checked        | Bolean       | 选中状态     |\n| text           | String       | 文字         |\n        '])])])},staticRenderFns:[]}}});
//# sourceMappingURL=20.1e67e40001351d07935a.js.map
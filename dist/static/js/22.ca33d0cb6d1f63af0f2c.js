webpackJsonp([22,33],{245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),i=[{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]}];t.default={data:function(){var e=this;return{textEditVue:{value:"Vuejs",tip:!0},textEditReact:{value:"React",tip:!1},textArea:{value:"",minHeight:100,autoResize:!0,lineHeight:14,input:function(){console.log("textarea is inputing")},change:function(){console.log("textarea is changed")}},number:{value:0,step:.1,format:2,min:-5,max:10},audio:{title:"ninelie-Aimer",src:"http://covteam.u.qiniudn.com/test2.mp3",poster:"http://covteam.u.qiniudn.com/ka2.jpg",options:{preload:!1,autoplay:!1,rate:1,loop:!1,volume:.5}},breadcrumb:{separator:"/",list:[{icon:"ion-home",value:"首页",route:{path:"/"}},{icon:"ion-document",value:"订单",route:{path:"/button"}},{value:"订单查询",route:{path:"/form"}}]},TableData:{options:{select:!0,state:!0,editable:!0},columns:[{index:0,key:"id",value:"ID",sort:{state:!1,func:function(t,a){e.sortBy(a)}}},{index:1,key:"name",value:"姓名"},{index:2,key:"age",value:"年龄",sort:{state:!1,func:function(t,a){e.sortBy(a)}}},{index:3,key:"wechat",value:"微信"}],actions:[{type:"button",text:"删除",func:function(t,a){console.log(a),e.removeTableItem(a)}}],tableData:[{id:{value:1,type:"number",editable:!1},name:{value:"王尼玛",type:"text",editable:!0},age:{value:"26",type:"number",editable:!0},wechat:{value:"wangnima",type:"text",editable:!0},state:{type:"success",value:"批准"},checkbox:{disabled:!1,checked:!1,text:""}},{id:{value:2,type:"number",editable:!1},name:{value:"赵铁柱",type:"text",editable:!0},age:{value:"26",type:"number",editable:!0},wechat:{value:"Iron-column-zhao",type:"text",editable:!0},state:{type:"info",value:"待审"},checkbox:{disabled:!1,checked:!1,text:""}},{id:{value:3,type:"number",editable:!1},name:{value:"张全蛋",type:"text",editable:!0},age:{value:"27",type:"number",editable:!0},wechat:{value:"Michael Jack",type:"text",editable:!0},state:{type:"failed",value:"拒绝"},checkbox:{disabled:!1,checked:!1,text:""}}]},cascader:{options:i,valueArr:[]},timeline:[{icon:"ion-alert-circled",color:"#2db7f5",text:"创建服务现场 2015-09-01"},{color:"#2db7f5",text:"创建服务现场 2015-09-01"},{color:"red",text:"创建服务现场 2015-09-01"}],timePicker:{value:""},datePicker:{value:"",options:{timePicker:!0,format:"YYYY-MM-DD",monthList:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],weekList:["一","二","三","四","五","六","日"],limit:{weekDay:{availables:[1,2,3,4,5,6,0]},customerLimit:function(e){return 2*Math.random()>1}}}},slider:{value:43},switchA:{checked:!1},switchB:{checked:!1,size:"small"},progressCommon:{percent:50,options:{color:"#2db7f5",size:"common",state:"loading"}},progressSmall:{percent:50,options:{color:"#2db7f5",size:"small",state:"loading"}},progressCircle:{percent:50,options:{color:"#2db7f5",size:"small",state:"",format:function(e){return e+"% "}}},radios:[{checked:!1,value:"A"},{checked:!1,value:"B"},{checked:!1,value:"C"},{checked:!1,value:"aa"}],selectCity:{value:{},options:[]},selectProvince:{value:{},options:[{selected:!1,disabled:!1,value:"四川",id:1},{selected:!1,disabled:!1,value:"北京",id:2},{selected:!1,disabled:!1,value:"广东",id:3}]},checkbox:{checked:!1,text:"我已阅读用户协议"},form:{user:{value:"",placeHolder:"input here",title:"用户名:",state:"loading",tip:""},pass:{value:"",placeHolder:"input here",title:"密码:",state:"default",tip:""},bio:{value:"",placeHolder:"input here",title:"验证码:",state:"failed"}}}},computed:{selectCityOptions:function(){var e={1:[{selected:!1,disabled:!1,value:"成都",id:1},{selected:!1,disabled:!1,value:"德阳",id:2}],2:[{selected:!1,disabled:!1,value:"海淀",id:2},{selected:!1,disabled:!1,value:"朝阳",id:1}],3:[{selected:!1,disabled:!1,value:"广州",id:2},{selected:!1,disabled:!1,value:"深圳",id:1}]};return this.selectProvince.value.id?e[this.selectProvince.value.id].slice():[]}},components:{formItem:r.formItem,rdSelect:r.rdSelect,rdButton:r.rdButton,rdButtonGroup:r.rdButtonGroup,rdDropButton:r.rdDropButton,rdUpload:r.rdUpload,rdCheckbox:r.rdCheckbox,rdText:r.rdText,rdTextarea:r.rdTextarea,rdEditText:r.rdEditText,rdTextSelect:r.rdTextSelect,rdRadioGroup:r.rdRadioGroup,rdProgress:r.rdProgress,rdProgressCircle:r.rdProgressCircle,rdCascader:r.rdCascader,rdSwitch:r.rdSwitch,rdSlider:r.rdSlider,rdDatepicker:r.rdDatepicker,rdTooltip:r.rdTooltip,rdTimeline:r.rdTimeline,rdAlert:r.rdAlert,rdTable:r.rdTable,rdTimepicker:r.rdTimepicker,rdSpin:r.rdSpin,rdBreadcrumb:r.rdBreadcrumb,rdAudio:r.rdAudio,rdNumber:r.rdNumber},methods:{editTable:function(e){this.$Notification.success("正在编辑"+e._value[0],"",5e3)},removeTableItem:function(e){var t=this;this.TableData.tableData.forEach(function(a){a.id===e.id&&t.TableData.tableData.$remove(a)}),this.$Notification.success("删除"+e._value[0]+"成功","",5e3)},notificationAction:function(){this.$Notification.success("2333","233",5e3)},userInputing:function(){var e=this;this.form.user.state="loading";var t={0:{state:"loading",tip:"loading?!"},1:{state:"failed",tip:"该用户名已被使用"},2:{state:"success",tip:"该用户名似乎没有被使用"},3:{state:"info",tip:"该用户名已被使用"},4:{state:"warning",tip:"该用户名已被使用"}};setTimeout(function(){var a=Math.floor(4.9*Math.random());e.form.user.state=t[a].state,e.form.user.tip=t[a].tip},2e3)},passInputing:function(){this.form.pass.value.length<6?(this.form.pass.state="warning",this.form.pass.tip="请输入数字和字母"):(this.form.pass.state="default",this.form.pass.tip="")},failed:function(e){this.$Modal.create("网络错误","无法连接到服务器",function(){e.state="default",console.log("confirmed")},function(){console.log("canceled")})},startProgress:function(e){e.percent=0,e.options.state="";var t=setInterval(function(){e.percent<100?e.percent++:(2*Math.random()<1?e.options.state="failed":e.options.state="success",clearInterval(t))},50)}}}},328:function(e,t,a){t=e.exports=a(17)(),t.push([e.id,".form{max-width:540px}.img-min{width:10rem}","",{version:3,sources:["/./src/views/form.vue"],names:[],mappings:"AACA,MACI,eAAiB,CACpB,AACD,SACI,WAAa,CAChB",file:"form.vue",sourcesContent:["\n.form {\n    max-width: 540px;\n}\n.img-min {\n    width: 10rem;\n}\n"],sourceRoot:"webpack://"}])},359:function(e,t,a){var r=a(328);"string"==typeof r&&(r=[[e.id,r,""]]);a(18)(r,{});r.locals&&(e.exports=r.locals)},608:function(e,t,a){var r,i;a(359),r=a(245);var o=a(668);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},668:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("rd-button",{on:{click:e.notificationAction}},[t("rd-tooltip",["点我触发notification"]),"默认按钮"])," ",t("rd-button",{attrs:{type:"primary"}},["按钮"])," ",t("rd-button",{attrs:{type:"ghost",size:"large"}},["large"])," ",t("rd-button",{attrs:{type:"ghost"}},["common"])," ",t("rd-button",{attrs:{type:"ghost",size:"small"}},["small"])," ",t("rd-button",{attrs:{type:"ghost",loading:!0}},["save"])," ",t("rd-button",{attrs:{type:"icon"}},[t("i",{staticClass:"ion-upload"})])," ",t("rd-button-group",[t("rd-button",{attrs:{type:"ghost"}},["common"])," ",t("rd-button",{attrs:{type:"ghost"}},["common"])," ",t("rd-button",{attrs:{type:"ghost"}},["common"])])," ",t("rd-drop-button",{attrs:{text:"2333"}},[t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])," ",t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])])," ",t("rd-drop-button",{attrs:{text:"2333"}},[t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])," ",t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])])," ",t("rd-drop-button",{attrs:{text:"2333",type:"primary"}},[t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])," ",t("rd-button",{attrs:{type:"ghost"},on:{click:e.notificationAction}},["common"])])," ",t("p",[t("rd-upload")])," ",t("p")," ",t("p",["\n        相信大多数前端开发人员，都使用过Angular、",t("rd-edit-text",{attrs:{value:e.textEditReact}}),"或者",t("rd-edit-text",{attrs:{value:e.textEditVue}}),"。他们都通过数据绑定的方法，提升了开发效率。\n    "])," ",t("form",{staticClass:"form"},[t("form-item",{attrs:{title:"2333:"}},[t("rd-text",{attrs:{textfield:e.form.user}})])," ",t("form-item",{attrs:{title:"username:"}},[t("rd-text",{attrs:{textfield:e.form.user,input:e.userInputing}})])," ",t("form-item",{attrs:{title:"password:"}},[t("rd-text",{attrs:{textfield:e.form.pass,input:e.passInputing,type:"password"}})])," ",t("form-item",{attrs:{title:"verify:"}},[t("rd-text",{attrs:{textfield:e.form.bio},on:{click:function(t){e.failed(e.form.bio)}}})])," ",t("form-item",{attrs:{title:"agree:"}},[t("rd-checkbox",{attrs:{checkbox:e.checkbox}})," ",t("rd-checkbox",{attrs:{checkbox:e.checkbox}})])," ",t("form-item",{attrs:{title:"sex:"}},[t("rd-radio-group",{attrs:{radios:e.radios}})])," ",t("form-item",{attrs:{title:"load:"}},[t("rd-progress",{attrs:{progress:e.progressCommon},on:{click:function(t){e.startProgress(e.progressCommon)}}})])," ",t("form-item",{attrs:{title:"sex:"}},[t("rd-progress",{attrs:{progress:e.progressSmall},on:{click:function(t){e.startProgress(e.progressSmall)}}})])," ",t("div",[t("rd-progress-circle",{attrs:{progress:e.progressCircle},on:{click:function(t){e.startProgress(e.progressCircle)}}})])," ",t("div",[t("rd-select",{attrs:{select:e.selectProvince}})," ",t("rd-select",{attrs:{select:e.selectCity}})])," ",t("form-item",{attrs:{title:"address:"}},[t("rd-cascader",{attrs:{cascader:e.cascader}})])," ",t("form-item",{attrs:{title:"address:"}},[t("rd-switch",{attrs:{value:e.switchA}})," ",t("rd-switch",{attrs:{value:e.switchB}})])," ",t("form-item",{attrs:{title:"price:"}},[t("rd-slider",{attrs:{slider:e.slider}})," ",t("rd-timeline",{attrs:{timeline:e.timeline}})])," ",t("form-item",{attrs:{title:"出发时间:"}},[t("rd-datepicker",{attrs:{date:e.datePicker}})," ",t("rd-timepicker",{attrs:{"time-picker":e.timePicker}})," ",t("rd-alert")])," ",t("div")," ",t("p",[t("rd-spin")," ",t("rd-spin",{attrs:{color:"red"}})])," ",t("p",[t("span",["233333333",t("rd-tooltip",["这里是tooltip"])])," ",t("span",["啊啊啊",t("rd-tooltip",["这里是tooltip"])])," ",t("span",["按时打算发生的",t("rd-tooltip",["这里是tooltip"])])," ",t("span",["啊啊",t("rd-tooltip",["这里是tooltip"])])])," ",t("p",[t("rd-breadcrumb",{attrs:{breadcrumb:e.breadcrumb.list,separator:"/"}})])])," ",t("p",[t("rd-number",{attrs:{number:e.number}})])," ",t("p",[t("rd-audio",{attrs:{audio:e.audio}})])," ",t("p",[t("rd-textarea",{attrs:{textfield:e.textArea}})])," ",t("p",[t("img",{directives:[{name:"preview",rawName:"v-preview",value:"http://covteam.u.qiniudn.com/ka2.jpg",expression:"'http:\\/\\/covteam.u.qiniudn.com/ka2.jpg'"}],staticClass:"img-min",attrs:{src:"http://covteam.u.qiniudn.com/ka2.jpg",alt:""}})])," ",t("p",[t("img",{directives:[{name:"preview",rawName:"v-preview",value:"http://covteam.u.qiniudn.com/poster.png",expression:"'http:\\/\\/covteam.u.qiniudn.com/poster.png'"}],staticClass:"img-min",attrs:{src:"http://covteam.u.qiniudn.com/poster.png",alt:""}})])])},staticRenderFns:[]}}});
//# sourceMappingURL=22.ca33d0cb6d1f63af0f2c.js.map
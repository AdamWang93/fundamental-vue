(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],a[o]&&d.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={1:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;r.push([19,0]),n()})({19:function(e,t,n){e.exports=n("Vtdi")},"1xUM":function(e,t,n){"use strict";var i=n("eMGQ"),a=n.n(i);a.a},"3H6J":function(e,t,n){"use strict";var i=n("bH7b"),a=n.n(i);a.a},"51CG":function(e,t,n){},"609Z":function(e,t,n){"use strict";var i=n("Dj9X"),a=n.n(i);a.a},"63re":function(e,t,n){"use strict";var i=n("bfbM"),a=n.n(i);a.a},ATTD:function(e,t,n){"use strict";var i=n("51CG"),a=n.n(i);a.a},AfJy:function(e,t,n){"use strict";var i=n("jecX"),a=n.n(i);a.a},Bch5:function(e,t,n){},Dj9X:function(e,t,n){},EMrR:function(e,t,n){"use strict";var i=n("zEnE"),a=n.n(i);a.a},JgQE:function(e,t,n){"use strict";var i=n("h+oW"),a=n.n(i);a.a},Jtj6:function(e,t,n){},MaJs:function(e,t,n){},Pt6G:function(e,t,n){},"SGG+":function(e,t,n){"use strict";var i=n("MaJs"),a=n.n(i);a.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var i=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"sidebar"},[n("h1",{staticClass:"logo"},[e._v("FUNDAMENTAL VUE")]),n("ul",{staticClass:"nav"},[n("li",{staticClass:"side-nav__headers"},[e._v("Components")]),e._l(e.routes,function(t){return n("li",{key:t.path},[n("router-link",{staticClass:"nav-item",attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})],2)]),n("div",{staticClass:"content"},[n("div",{staticClass:"content-margin"},[n("router-view")],1)])])])},r=[],o={name:"app",components:{},data:function(){return{routes:[{path:"/badge",name:"Badge and Label"},{path:"/button",name:"Button"},{path:"/icon",name:"Icon"},{path:"/identifier",name:"Identifier"},{path:"/image",name:"Image"}]}}},s=o,l=(n("AfJy"),n("KHd+")),c=Object(l["a"])(s,a,r,!1,null,null,null),p=c.exports,u=n("jE9Z"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",[e._v("Button")]),n("Description",[e._v("The Buttons allow users to perform actions. The priority of buttons within a page should be considered. For instance, only use the main button once within a page or modal. Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.")]),n("Import",{attrs:{module:"Button",path:"/fundamental-vue/src/"}}),n("Separator"),n("Properties",{attrs:{type:"Inputs",desc:e.description}}),n("Separator"),n("h2",[e._v("Button Types")]),n("Description",[e._v('Types can be "primary", "main", "secondary", and "toolbar". Semantic modifiers '),n("code",[e._v("positive")]),e._v(" for approve and "),n("code",[e._v("negative")]),e._v(" for reject can be applied to the button.")]),n("DocsTile",[n("Button",[e._v("Primary Button")]),n("Button",{attrs:{type:"main"}},[e._v("Main Button")]),n("Button",{attrs:{type:"secondary"}},[e._v("Secondary Button")]),n("Button",{attrs:{type:"toolbar"}},[e._v("Toolbar Button")]),n("Button",{attrs:{semantic:"positive"}},[e._v("Accept")]),n("Button",{attrs:{semantic:"negative"}},[e._v("Reject")])],1),n("DocsText",[e._v(e._s(e.buttonTypesCode))]),n("Separator"),n("h2",[e._v("Buttons with Icon")]),n("Description",[e._v("Button can have an icon with text or just and icon. You can use "),n("code",[e._v(' glyph="iconName"')]),e._v(" to attach an icon to the button.")]),n("DocsTile",[n("Button",{attrs:{type:"secondary",glyph:"cart",size:"compact",state:"selected"}},[e._v("Add to Cart")]),n("Button",{attrs:{type:"primary",glyph:"cart",size:"compact",state:"selected"}},[e._v("Add to Cart")]),n("Button",{attrs:{type:"toolbar",glyph:"filter",semantic:"positive",size:"compact",state:"disabled"}},[e._v("BUTTON")]),n("Button",{attrs:{type:"main",glyph:"accept",semantic:"positive",size:"compact"}}),n("Button",{attrs:{type:"main",glyph:"decline",semantic:"negative",size:"compact"}})],1),n("DocsText",[e._v(e._s(e.buttonIconCode))]),n("Separator"),n("h2",[e._v("Button Sizes")]),n("Description",[e._v("There are five different sizes can be rendered with modifiers: "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("compact")]),e._v(", "),n("code",[e._v("default")]),e._v(", and "),n("code",[e._v("l")]),e._v(".")]),n("DocsTile",[n("Button",{attrs:{size:"xs"}},[e._v("BUTTON")]),n("Button",{attrs:{size:"s"}},[e._v("BUTTON")]),n("Button",{attrs:{size:"compact"}},[e._v("BUTTON")]),n("Button",[e._v("BUTTON")]),n("Button",{attrs:{size:"l"}},[e._v("BUTTON")])],1),n("DocsText",[e._v(e._s(e.buttonSizesCode))]),n("Separator"),n("h2",[e._v("Button States")]),n("Description",[e._v("There are three states: "),n("code",[e._v("normal")]),e._v(" (default), "),n("code",[e._v("selected")]),e._v(", and "),n("code",[e._v("disabled")]),e._v(".")]),n("DocsTile",[n("Button",{attrs:{size:"compact"}},[e._v("Normal State")]),n("Button",{attrs:{size:"compact",state:"selected"}},[e._v("Selected State")]),n("Button",{attrs:{size:"compact",state:"disabled"}},[e._v("Disabled State")])],1),n("DocsText",[e._v(e._s(e.buttonStatesCode))]),n("Separator")],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:[{"fd-button":!0},e.type?"fd-button--"+e.type:"",e.semantic?"fd-button--"+e.semantic:"",e.size?"fd-button--"+e.size:"",e.glyph?"sap-icon--"+e.glyph:"",e.state?"is-"+e.state:""],on:{click:function(t){e.$emit("onclick",e.data)}}},[e._t("default")],2)},g=[],h={name:"Button",props:{type:{default:"",type:String},semantic:{default:"",type:String},size:{default:"",type:String},glyph:{default:"",type:String},state:{default:"",type:String},onclick:{type:Function}}},v=h,y=(n("zPRp"),Object(l["a"])(v,m,g,!1,null,"498f8df0",null)),b=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._t("default")],2)},B=[],I={name:"Header"},z=I,D=(n("xIA0"),Object(l["a"])(z,_,B,!1,null,"9294b58e",null)),S=D.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},x=[],w={name:"Separator"},O=w,C=(n("SGG+"),Object(l["a"])(O,T,x,!1,null,"68e95aa0",null)),j=C.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"description"},[e._t("default")],2)},E=[],L={name:"Description"},P=L,$=(n("63re"),Object(l["a"])(P,W,E,!1,null,"397340e1",null)),k=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._t("default")],2)},A=[],U={name:"DocsText"},H=U,M=(n("usI8"),Object(l["a"])(H,N,A,!1,null,"8ad0a452",null)),J=M.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fd-tile fd-has-background-color-background-1 docsTile"},[n("div",{staticClass:"fd-tile__content"},[e._t("default")],2)])},G=[],R={name:"DocsTile"},F=R,X=(n("1xUM"),Object(l["a"])(F,q,G,!1,null,"7687115a",null)),Z=X.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",[e._v("import { "+e._s(e.module)+" } from '"+e._s(e.path)+"';")])},Q=[],V={name:"Import",props:{module:{default:"",type:String,required:!0},path:{default:"",type:String,required:!0}}},Y=V,ee=(n("609Z"),Object(l["a"])(Y,K,Q,!1,null,"2fac397a",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"header"},[e._v("@"+e._s(e.type))]),n("table",[n("tbody",e._l(e.desc,function(t){return n("tr",{key:t.name,staticClass:"property-row"},[n("th",{staticClass:"property-header"},[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.description))])])}))])])},ie=[],ae={name:"Properties",props:{type:{default:"",type:String,required:!0},desc:{type:Array,required:!0}}},re=ae,oe=(n("qNYK"),Object(l["a"])(re,ne,ie,!1,null,"c63872d4",null)),se=oe.exports,le='<Button>Primary Button</Button>\n<Button type="main">Main Button</Button>\n<Button type="secondary">Secondary Button</Button>\n<Button type="toolbar">Toolbar Button</Button>\n<Button semantic="positive">Accept</Button>\n<Button semantic="negative">Reject</Button>\n',ce='<Button type="secondary" glyph="cart" size="compact" state="selected">Add to Cart</Button>\n<Button type="primary" glyph="cart" size="compact" state="selected">Add to Cart</Button>\n<Button type="toolbar" glyph="filter" semantic="positive" size="compact" state="disabled">BUTTON</Button>\n<Button type="main" glyph="accept" semantic="positive" size="compact" ></Button>\n<Button type="main" glyph="decline" semantic="negative" size="compact"></Button>\n',pe='<Button size="xs">BUTTON</Button>\n<Button size="s">BUTTON</Button>\n<Button size="compact">BUTTON</Button>\n<Button >BUTTON</Button>\n<Button size="l">BUTTON</Button>\n',ue='<Button size="compact">Normal State</Button>\n<Button size="compact" state="selected">Selected State</Button>\n<Button size="compact" state="disabled">Disabled State</Button>\n',de={name:"ButtonComponent",components:{Button:b,Header:S,Separator:j,Description:k,DocsText:J,DocsTile:Z,Import:te,Properties:se},data:function(){return{buttonTypesCode:le,buttonIconCode:ce,buttonSizesCode:pe,buttonStatesCode:ue,description:[{name:"type",description:"String - The type of the button. Options include 'primary', 'main', 'secondary', and 'toolbar'. Leave empty for default."},{name:"semantic",description:"String - Semantic buttons. Semantic modifiers include 'positive' and 'negative'. Leave empty for no modifier."},{name:"size",description:"String - The size of the button. Options include 'xs', 's', 'compact', 'default', and 'l'. Leave empty for default."},{name:"glyph",description:"String - The icon to include in the button. See the icon page for the list of icons."},{name:"state",description:"String - The state of the button. Options include 'normal', 'selected', and 'disabled'. Leave empty for normal."},{name:"typeAttr",description:"String - Specifies the type attribute for the button element. Options include 'button', 'submit', and 'reset'."},{name:"onclick",description:"Func - The function that is executed when the button is clicked."}]}}},fe=de,me=(n("ATTD"),Object(l["a"])(fe,d,f,!1,null,"34ce8777",null)),ge=me.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",[e._v("Badge and Label")]),n("Description",[e._v("Badges and labels are used to indicate status. Colors, generally in combination with text, are used to easily highlight the state of an object. "),n("br"),e._v("\n   The following colors should be used: "),n("br"),e._v("\n     - Black: default or inactive status; "),n("br"),e._v("\n     - Green: positive status, used for active, published, approved; "),n("br"),e._v("\n     - Orange: a warning status or to indicate that an action can be taken; "),n("br"),e._v("\n     - Red: error status. ")]),n("Import",{attrs:{module:"Badge, Label",path:"/fundamental-vue/src/"}}),n("Separator"),n("Properties",{attrs:{type:"Inputs",desc:e.description}}),n("Separator"),n("h2",[e._v("Default Badge")]),n("DocsTile",[n("Badge",[e._v("Default")]),n("Badge",{attrs:{type:"success"}},[e._v("Default")]),n("Badge",{attrs:{type:"warning"}},[e._v("Default")]),n("Badge",{attrs:{type:"error"}},[e._v("Default")])],1),n("DocsText",[e._v(e._s(e.defaultBadge))]),n("Separator"),n("h2",[e._v("Pill Badge")]),n("Description",[n("code",[e._v("fd-badge--pill")]),e._v(" modifier can be used to render a pill version of the badge.")]),n("DocsTile",[n("Badge",{attrs:{modifier:"pill"}},[e._v("Default")]),n("Badge",{attrs:{type:"success",modifier:"pill"}},[e._v("Default")]),n("Badge",{attrs:{type:"warning",modifier:"pill"}},[e._v("Default")]),n("Badge",{attrs:{type:"error",modifier:"pill"}},[e._v("Default")])],1),n("DocsText",[e._v(e._s(e.pillBadge))]),n("Separator"),n("h2",[e._v("Filled Badge")]),n("Description",[n("code",[e._v("fd-badge--filled")]),e._v(" modifier can be used to render a filled version of the badge.")]),n("DocsTile",[n("Badge",{attrs:{modifier:"filled"}},[e._v("Default")]),n("Badge",{attrs:{type:"success",modifier:"filled"}},[e._v("Default")]),n("Badge",{attrs:{type:"warning",modifier:"filled"}},[e._v("Default")]),n("Badge",{attrs:{type:"error",modifier:"filled"}},[e._v("Default")])],1),n("DocsText",[e._v(e._s(e.filledBadge))]),n("Separator"),n("h2",[e._v("Label")]),n("DocsTile",[n("Label",[e._v("Default")]),n("Label",{attrs:{type:"success"}},[e._v("Default")]),n("Label",{attrs:{type:"warning"}},[e._v("Default")]),n("Label",{attrs:{type:"error"}},[e._v("Default")])],1),n("DocsText",[e._v(e._s(e.label))])],1)},ve=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[{"fd-badge":!0},e.type?"fd-badge--"+e.type:"",e.modifier?"fd-badge--"+e.modifier:""]},[e._t("default")],2)},be=[],_e={name:"Badge",props:{type:{default:"",type:String},modifier:{default:"",type:String}}},Be=_e,Ie=(n("EMrR"),Object(l["a"])(Be,ye,be,!1,null,"609f4b4c",null)),ze=Ie.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[{"fd-label":!0},e.type?"fd-label--"+e.type:""]},[e._t("default")],2)},Se=[],Te={name:"Label",props:{type:{default:"",type:String}}},xe=Te,we=(n("JgQE"),Object(l["a"])(xe,De,Se,!1,null,"42652571",null)),Oe=we.exports,Ce='<Badge>Default</Badge>\n<Badge type="success">Default</Badge>\n<Badge type="warning">Default</Badge>\n<Badge type="error">Default</Badge>',je='<Badge modifier="pill">Default</Badge>\n<Badge type="success" modifier="pill">Default</Badge>\n<Badge type="warning" modifier="pill">Default</Badge>\n<Badge type="error" modifier="pill">Default</Badge>',We='<Badge modifier="filled">Default</Badge>\n<Badge type="success" modifier="filled">Default</Badge>\n<Badge type="warning" modifier="filled">Default</Badge>\n<Badge type="error" modifier="filled">Default</Badge>',Ee='<Label>Default</Label>\n<Label type="success">Default</Label>\n<Label type="warning">Default</Label>\n<Label type="error">Default</Label>',Le={name:"BadgeComponent",components:{Badge:ze,Label:Oe,Header:S,Separator:j,Description:k,DocsText:J,DocsTile:Z,Import:te,Properties:se},data:function(){return{defaultBadge:Ce,pillBadge:je,filledBadge:We,label:Ee,description:[{name:"type",description:"String - The type indicates the status of the badge/label. Options include default, success, warning, and error. Leave empty for default."},{name:"modifier",description:"String - Modifiers can be pill and filled. Leave empty for normal."}]}}},Pe=Le,$e=(n("yxsJ"),Object(l["a"])(Pe,he,ve,!1,null,"ec6e82b6",null)),ke=$e.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",[e._v("Icon")]),n("Description",[e._v("Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun. Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.")]),n("Import",{attrs:{module:"Icon",path:"/fundamental-vue/src/"}}),n("Separator"),n("Properties",{attrs:{type:"Inputs",desc:e.description}}),n("Separator"),n("DocsTile",[n("Icon",{attrs:{glyph:"cart",size:"s"}}),n("Icon",{attrs:{glyph:"cart"}}),n("Icon",{attrs:{glyph:"cart",size:"m"}}),n("Icon",{attrs:{glyph:"cart",size:"l"}}),n("Icon",{attrs:{glyph:"cart",size:"xl"}})],1),n("DocsText",[e._v(e._s(e.icons))])],1)},Ae=[],Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[e.glyph?"sap-icon--"+e.glyph:"",e.size?"sap-icon--"+e.size:""]},[e._t("default")],2)},He=[],Me={name:"Icon",props:{glyph:{default:"",type:String,required:!0},size:{default:"",type:String}}},Je=Me,qe=(n("WhHp"),Object(l["a"])(Je,Ue,He,!1,null,"431c6120",null)),Ge=qe.exports,Re='<Icon glyph="cart" size="s"/>\n<Icon glyph="cart" />\n<Icon glyph="cart" size="m"/>\n<Icon glyph="cart" size="l"/>\n<Icon glyph="cart" size="xl"/>',Fe={name:"IconComponent",components:{Icon:Ge,Header:S,Separator:j,Description:k,DocsText:J,DocsTile:Z,Import:te,Properties:se},data:function(){return{icons:Re,description:[{name:"glyph",description:"String (required) - Icon name."},{name:"size",description:"String - Size of the icon. Options include 'xs', 's', 'compact', and 'l'. If no size is provided, default (normal) will be used."}]}}},Xe=Fe,Ze=(n("3H6J"),Object(l["a"])(Xe,Ne,Ae,!1,null,"577ef38a",null)),Ke=Ze.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",[e._v("Image")]),n("Description",[e._v("When using images, use the following helpers classes to adjust the size and the shape.")]),n("Import",{attrs:{module:"Image",path:"/fundamental-vue/src/"}}),n("Separator"),n("Properties",{attrs:{type:"Inputs",desc:e.description}}),n("Separator"),n("h2",[e._v("Sizes")]),n("DocsTile",[n("Img",{attrs:{size:"s",url:"https://placeimg.com/400/400/nature"}}),n("Img",{attrs:{size:"m",url:"https://placeimg.com/400/400/nature"}}),n("Img",{attrs:{size:"l",url:"https://placeimg.com/400/400/nature"}})],1),n("DocsText",[e._v(e._s(e.sizesImage))]),n("Separator"),n("h2",[e._v("Shapes")]),n("DocsTile",[n("Img",{attrs:{size:"s",isCircle:"",url:"https://placeimg.com/400/400/nature"}}),n("Img",{attrs:{size:"m",isCircle:"",url:"https://placeimg.com/400/400/nature"}}),n("Img",{attrs:{size:"l",isCircle:"",url:"https://placeimg.com/400/400/nature"}})],1),n("DocsText",[e._v(e._s(e.shapesImage))])],1)},Ve=[],Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[e.size?"fd-image--"+e.size:"",{"fd-image--circle":e.isCircle}],style:{backgroundImage:"url("+e.url+")"}})},et=[],tt={name:"Img",props:{size:{default:"",type:String},isCircle:{default:!1,type:Boolean},url:{default:"",type:String}}},nt=tt,it=(n("rltv"),Object(l["a"])(nt,Ye,et,!1,null,"f5e596bc",null)),at=it.exports,rt='<Img size="s" photo="https://placeimg.com/400/400/nature" />\n<Img size="m" photo="https://placeimg.com/400/400/nature" />\n<Img size="l" photo="https://placeimg.com/400/400/nature" />',ot='<Img size="s" type="circle" photo="https://placeimg.com/400/400/nature" />\n<Img size="m" type="circle" photo="https://placeimg.com/400/400/nature" />\n<Img size="l" type="circle" photo="https://placeimg.com/400/400/nature" />',st={name:"ImageComponent",components:{Img:at,Header:S,Separator:j,Description:k,DocsText:J,DocsTile:Z,Import:te,Properties:se},data:function(){return{sizesImage:rt,shapesImage:ot,description:[{name:"size",description:"String (required)- the size of the image. Size options include 's' (24x24), 'm' (36x36), and 'l' (48x48)."},{name:"photo",description:"String (required) - picture url."},{name:"type",description:"String - When set to true renders a round image."}]}}},lt=st,ct=(n("XLUJ"),Object(l["a"])(lt,Qe,Ve,!1,null,"b0a5c2e4",null)),pt=ct.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",[e._v("Identifier")]),n("Description",[e._v("A visual presentation option around using an icon or user initials .")]),n("Import",{attrs:{module:"Identifier",path:"/fundamental-vue/src/"}}),n("Separator"),n("Properties",{attrs:{type:"Inputs",desc:e.description}}),n("Separator"),n("h2",[e._v("Icon")]),n("DocsTile",[n("Identifier",{attrs:{size:"s",glyph:"washing-machine"}}),n("Identifier",{attrs:{size:"m",glyph:"washing-machine"}}),n("Identifier",{attrs:{size:"l",glyph:"washing-machine"}})],1),n("DocsText",[e._v(e._s(e.icons))]),n("Separator"),n("h2",[e._v("Initials")]),n("DocsTile",[n("Identifier",{attrs:{size:"s",label:"Wendy Wallace"}},[e._v("WW")]),n("Identifier",{attrs:{size:"m",label:"Wendy Wallace"}},[e._v("WW")]),n("Identifier",{attrs:{size:"l",label:"Wendy Wallace"}},[e._v("WW")])],1),n("DocsText",[e._v(e._s(e.initials))]),n("Separator"),n("h2",[e._v("Circle")]),n("DocsTile",[n("Identifier",{attrs:{size:"s",glyph:"washing-machine",modifier:"circle"}}),n("Identifier",{attrs:{size:"m",glyph:"washing-machine",modifier:"circle"}}),n("Identifier",{attrs:{size:"l",glyph:"washing-machine",modifier:"circle"}})],1),n("DocsText",[e._v(e._s(e.circle))]),n("Separator"),n("h2",[e._v("Transparent")]),n("DocsTile",[n("Identifier",{attrs:{size:"m",label:"Wendy Wallace",modifier:"transparent"}},[e._v("WW")]),n("Identifier",{attrs:{size:"l",glyph:"washing-machine",modifier:"transparent"}})],1),n("DocsText",[e._v(e._s(e.transparent))]),n("Separator"),n("h2",[e._v("Accent Colors")]),n("DocsTile",[n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"1"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"2"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"3"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"4"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"5"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"6"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"7"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"8"}}),n("Identifier",{attrs:{size:"m",glyph:"money-bills",color:"9"}})],1),n("DocsText",[e._v(e._s(e.accentColors))])],1)},dt=[],ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[e.size?"fd-identifier--"+e.size:"",e.glyph?"sap-icon--"+e.glyph:"",e.modifier?"fd-identifier--"+e.modifier:"",e.color?"fd-has-background-color-accent-"+e.color:""],attrs:{role:!e.label&&"presentation","aria-label":!!e.label&&e.label}},[e._t("default")],2)},mt=[],gt={name:"Identifier",props:{size:{default:"",type:String,required:!0},modifier:{default:"",type:String},glyph:{default:"",type:String},color:{default:"",type:String},label:{default:"",type:String}}},ht=gt,vt=(n("gkiw"),Object(l["a"])(ht,ft,mt,!1,null,"115d2e71",null)),yt=vt.exports,bt='<Identifier size="s" glyph="washing-machine" />\n<Identifier size="m" glyph="washing-machine" />\n<Identifier size="l" glyph="washing-machine" />',_t='<Identifier size="s" label="Wendy Wallace">WW</Identifier>\n<Identifier size="m" label="Wendy Wallace">WW</Identifier>\n<Identifier size="l" label="Wendy Wallace">WW</Identifier>',Bt='<Identifier size="s" glyph="washing-machine" modifier="circle" />\n<Identifier size="m" glyph="washing-machine" modifier="circle" />\n<Identifier size="l" glyph="washing-machine" modifier="circle" />',It='<Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>\n<Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>',zt='<Identifier size="m" glyph="money-bills" color="1"></Identifier>\n<Identifier size="m" glyph="money-bills" color="2"></Identifier>\n<Identifier size="m" glyph="money-bills" color="3"></Identifier>\n<Identifier size="m" glyph="money-bills" color="4"></Identifier>\n<Identifier size="m" glyph="money-bills" color="5"></Identifier>\n<Identifier size="m" glyph="money-bills" color="6"></Identifier>\n<Identifier size="m" glyph="money-bills" color="7"></Identifier>\n<Identifier size="m" glyph="money-bills" color="8"></Identifier>\n<Identifier size="m" glyph="money-bills" color="9"></Identifier>',Dt={name:"IdentifierComponent",components:{Identifier:yt,Header:S,Separator:j,Description:k,DocsText:J,DocsTile:Z,Import:te,Properties:se},data:function(){return{icons:bt,initials:_t,circle:Bt,transparent:It,accentColors:zt,description:[{name:"size",description:"String - Three sizes are available: s (small) - 24px, m (medium) - 36px, and l  (large) - 48px."},{name:"glyph",description:"String - The name of the icon to include. See the icon page for the list of icons."},{name:"label",description:"String - Label text"},{name:"modifier",description:"String - Can be 'circle' or 'transparent'."},{name:"color",description:"Number - Applies a background color. Options include numbers from 1 to 9"}]}}},St=Dt,Tt=(n("a8Rn"),Object(l["a"])(St,ut,dt,!1,null,"ba790dc2",null)),xt=Tt.exports;i["a"].use(u["a"]);var wt=new u["a"]({routes:[{path:"/badge",name:"Badge and Label",component:ke},{path:"/button",name:"Button",component:ge},{path:"/icon",name:"Icon",component:Ke},{path:"/identifier",name:"Identifier",component:xt},{path:"/image",name:"Image",component:pt}]});i["a"].config.productionTip=!1,new i["a"]({router:wt,render:function(e){return e(p)}}).$mount("#app")},WhHp:function(e,t,n){"use strict";var i=n("Bch5"),a=n.n(i);a.a},XLUJ:function(e,t,n){"use strict";var i=n("bud9"),a=n.n(i);a.a},a8Rn:function(e,t,n){"use strict";var i=n("ce93"),a=n.n(i);a.a},bH7b:function(e,t,n){},bfbM:function(e,t,n){},blDZ:function(e,t,n){},bud9:function(e,t,n){},ce93:function(e,t,n){},eMGQ:function(e,t,n){},gkiw:function(e,t,n){"use strict";var i=n("u8/S"),a=n.n(i);a.a},"h+oW":function(e,t,n){},jecX:function(e,t,n){},qNYK:function(e,t,n){"use strict";var i=n("Pt6G"),a=n.n(i);a.a},"rOS/":function(e,t,n){},rltv:function(e,t,n){"use strict";var i=n("blDZ"),a=n.n(i);a.a},"u8/S":function(e,t,n){},usI8:function(e,t,n){"use strict";var i=n("w0F6"),a=n.n(i);a.a},vh1x:function(e,t,n){},w0F6:function(e,t,n){},xIA0:function(e,t,n){"use strict";var i=n("rOS/"),a=n.n(i);a.a},yxsJ:function(e,t,n){"use strict";var i=n("Jtj6"),a=n.n(i);a.a},zEnE:function(e,t,n){},zPRp:function(e,t,n){"use strict";var i=n("vh1x"),a=n.n(i);a.a}});
//# sourceMappingURL=app.f25251fc.js.map
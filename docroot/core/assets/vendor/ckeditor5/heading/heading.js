!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Choose heading":"Choose heading",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Paragraph:"Paragraph","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(298),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}",""]);const a=o},298:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},62:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var h=s(l),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(g)):r.push({identifier:l,updater:f(g,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,h=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function g(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,p=0;function f(e,t){var n,i,o;if(t.singleton){var a=p++;n=u||(u=c(t)),i=g.bind(null,n,a,!1),o=g.bind(null,n,a,!0)}else n=c(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var a=d(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},747:(e,t,n)=>{e.exports=n(79)("./src/paragraph.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var i={};(()=>{"use strict";n.r(i),n.d(i,{Heading:()=>f,HeadingButtonsUI:()=>w,HeadingEditing:()=>d,HeadingUI:()=>p,Title:()=>y});var e=n(704),t=n(747),o=n(209);class a extends e.Command{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=(0,o.first)(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t=>r(e,t,this.editor.model.schema)))}execute(e){const t=this.editor.model,n=t.document,i=e.value;t.change((e=>{const o=Array.from(n.selection.getSelectedBlocks()).filter((e=>r(e,i,t.schema)));for(const t of o)t.is("element",i)||e.rename(t,i)}))}}function r(e,t,n){return n.checkChild(e.parent,t)&&!n.isObject(e)}const s="paragraph";class d extends e.Plugin{static get pluginName(){return"HeadingEditing"}constructor(e){super(e),e.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[t.Paragraph]}init(){const e=this.editor,t=e.config.get("heading.options"),n=[];for(const i of t)i.model!==s&&(e.model.schema.register(i.model,{inheritAllFrom:"$block"}),e.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(e),e.commands.add("heading",new a(e,n))}afterInit(){const e=this.editor,t=e.commands.get("enter"),n=e.config.get("heading.options");t&&this.listenTo(t,"afterExecute",((t,i)=>{const o=e.model.document.selection.getFirstPosition().parent;n.some((e=>o.is("element",e.model)))&&!o.is("element",s)&&0===o.childCount&&i.writer.rename(o,s)}))}_addDefaultH1Conversion(e){e.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:o.priorities.get("low")+1})}}var c=n(273);function l(e){const t=e.t,n={Paragraph:t("Paragraph"),"Heading 1":t("Heading 1"),"Heading 2":t("Heading 2"),"Heading 3":t("Heading 3"),"Heading 4":t("Heading 4"),"Heading 5":t("Heading 5"),"Heading 6":t("Heading 6")};return e.config.get("heading.options").map((e=>{const t=n[e.title];return t&&t!=e.title&&(e.title=t),e}))}var h=n(62),g=n.n(h),m=n(609),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};g()(m.Z,u);m.Z.locals;class p extends e.Plugin{static get pluginName(){return"HeadingUI"}init(){const e=this.editor,t=e.t,n=l(e),i=t("Choose heading"),a=t("Heading");e.ui.componentFactory.add("heading",(t=>{const r={},s=new o.Collection,d=e.commands.get("heading"),l=e.commands.get("paragraph"),h=[d];for(const e of n){const t={type:"button",model:new c.Model({label:e.title,class:e.class,withText:!0})};"paragraph"===e.model?(t.model.bind("isOn").to(l,"value"),t.model.set("commandName","paragraph"),h.push(l)):(t.model.bind("isOn").to(d,"value",(t=>t===e.model)),t.model.set({commandName:"heading",commandValue:e.model})),s.add(t),r[e.model]=e.title}const g=(0,c.createDropdown)(t);return(0,c.addListToDropdown)(g,s),g.buttonView.set({isOn:!1,withText:!0,tooltip:a}),g.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),g.bind("isEnabled").toMany(h,"isEnabled",((...e)=>e.some((e=>e)))),g.buttonView.bind("label").to(d,"value",l,"value",((e,t)=>{const n=e||t&&"paragraph";return r[n]?r[n]:i})),this.listenTo(g,"execute",(t=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()})),g}))}}class f extends e.Plugin{static get requires(){return[d,p]}static get pluginName(){return"Heading"}}const v={heading1:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9v10h-2v-8h-2V9h4zM4 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11H4v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v4.5z"/></svg>',heading2:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm16.076 8.343V18.5h-6.252c.067-.626.27-1.22.61-1.78.338-.561 1.006-1.305 2.005-2.232.804-.749 1.297-1.257 1.479-1.523.245-.368.368-.732.368-1.092 0-.398-.107-.703-.32-.917-.214-.214-.51-.32-.886-.32-.372 0-.669.111-.889.336-.22.224-.347.596-.38 1.117l-1.778-.178c.106-.982.438-1.686.997-2.114.558-.427 1.257-.64 2.095-.64.918 0 1.64.247 2.164.742.525.495.787 1.11.787 1.847 0 .419-.075.818-.225 1.197-.15.378-.388.775-.714 1.19-.216.275-.605.67-1.168 1.187-.563.516-.92.859-1.07 1.028a3.11 3.11 0 0 0-.365.495h3.542z"/></svg>',heading3:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm9.989 7.53 1.726-.209c.055.44.203.777.445 1.01.24.232.533.349.876.349.368 0 .678-.14.93-.42.251-.279.377-.655.377-1.13 0-.448-.12-.803-.362-1.066a1.153 1.153 0 0 0-.882-.393c-.228 0-.501.044-.819.133l.197-1.453c.482.012.85-.092 1.105-.315.253-.222.38-.517.38-.885 0-.313-.093-.563-.279-.75-.186-.185-.434-.278-.743-.278a1.07 1.07 0 0 0-.78.317c-.216.212-.347.52-.394.927l-1.644-.28c.114-.562.287-1.012.517-1.348.231-.337.553-.601.965-.794a3.24 3.24 0 0 1 1.387-.289c.876 0 1.579.28 2.108.838.436.457.653.973.653 1.549 0 .817-.446 1.468-1.339 1.955.533.114.96.37 1.28.768.319.398.478.878.478 1.441 0 .817-.298 1.513-.895 2.088-.596.576-1.339.864-2.228.864-.842 0-1.54-.243-2.094-.727-.555-.485-.876-1.118-.965-1.901z"/></svg>',heading4:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm13.55 10v-1.873h-3.81v-1.561l4.037-5.91h1.498v5.904h1.156v1.567h-1.156V18.5H17.05zm0-3.44v-3.18l-2.14 3.18h2.14z"/></svg>',heading5:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm9.578 7.607 1.777-.184c.05.402.201.72.45.955a1.223 1.223 0 0 0 1.81-.101c.258-.303.387-.759.387-1.368 0-.572-.128-1-.384-1.286-.256-.285-.59-.428-1-.428-.512 0-.971.226-1.377.679l-1.448-.21.915-4.843h4.716v1.67H15.56l-.28 1.58a2.697 2.697 0 0 1 1.219-.298 2.68 2.68 0 0 1 2.012.863c.55.576.825 1.323.825 2.241a3.36 3.36 0 0 1-.666 2.05c-.605.821-1.445 1.232-2.52 1.232-.86 0-1.56-.23-2.101-.692-.542-.461-.866-1.081-.971-1.86z"/></svg>',heading6:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm15.595 2.973-1.726.19c-.043-.355-.153-.617-.33-.787-.178-.169-.409-.253-.692-.253-.377 0-.695.169-.956.507-.26.339-.424 1.043-.492 2.114.445-.525.997-.787 1.657-.787.745 0 1.383.284 1.914.85.531.568.797 1.3.797 2.197 0 .952-.28 1.716-.838 2.291-.559.576-1.276.864-2.152.864-.94 0-1.712-.365-2.317-1.095-.605-.73-.908-1.927-.908-3.59 0-1.705.316-2.935.946-3.688.63-.753 1.45-1.13 2.457-1.13.706 0 1.291.198 1.755.594.463.395.758.97.885 1.723zm-4.043 3.891c0 .58.133 1.028.4 1.343.266.315.57.473.914.473.33 0 .605-.13.825-.388.22-.258.33-.68.33-1.27 0-.604-.118-1.047-.355-1.329a1.115 1.115 0 0 0-.89-.422c-.342 0-.632.134-.869.403s-.355.666-.355 1.19z"/></svg>'};class w extends e.Plugin{init(){l(this.editor).filter((e=>"paragraph"!==e.model)).map((e=>this._createButton(e)))}_createButton(e){const t=this.editor;t.ui.componentFactory.add(e.model,(n=>{const i=new c.ButtonView(n),o=t.commands.get("heading");return i.label=e.title,i.icon=e.icon||v[e.model],i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(o),i.bind("isOn").to(o,"value",(t=>t==e.model)),i.on("execute",(()=>{t.execute("heading",{value:e.model}),t.editing.view.focus()})),i}))}}var b=n(492);const x=new Set(["paragraph","heading1","heading2","heading3","heading4","heading5","heading6"]);class y extends e.Plugin{static get pluginName(){return"Title"}static get requires(){return["Paragraph"]}init(){const e=this.editor,t=e.model;this._bodyPlaceholder=null,t.schema.register("title",{isBlock:!0,allowIn:"$root"}),t.schema.register("title-content",{isBlock:!0,allowIn:"title",allowAttributes:["alignment"]}),t.schema.extend("$text",{allowIn:"title-content"}),t.schema.addAttributeCheck((e=>{if(e.endsWith("title-content $text"))return!1})),e.editing.mapper.on("modelToViewPosition",C(e.editing.view)),e.data.mapper.on("modelToViewPosition",C(e.editing.view)),e.conversion.for("downcast").elementToElement({model:"title-content",view:"h1"}),e.conversion.for("downcast").add((e=>e.on("insert:title",((e,t,n)=>{n.consumable.consume(t.item,e.name)})))),e.data.upcastDispatcher.on("element:h1",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h2",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h3",H,{priority:"high"}),t.document.registerPostFixer((e=>this._fixTitleContent(e))),t.document.registerPostFixer((e=>this._fixTitleElement(e))),t.document.registerPostFixer((e=>this._fixBodyElement(e))),t.document.registerPostFixer((e=>this._fixExtraParagraph(e))),this._attachPlaceholders(),this._attachTabPressHandling()}getTitle(e={}){const t=this._getTitleElement().getChild(0);return this.editor.data.stringify(t,e)}getBody(e={}){const t=this.editor,n=t.data,i=t.model,o=t.model.document.getRoot(),a=t.editing.view,r=new b.DowncastWriter(a.document),s=i.createRangeIn(o),d=r.createDocumentFragment(),c=i.createPositionAfter(o.getChild(0)),l=i.createRange(c,i.createPositionAt(o,"end")),h=new Map;for(const e of i.markers){const t=l.getIntersection(e.getRange());t&&h.set(e.name,t)}return n.mapper.clearBindings(),n.mapper.bindElements(o,d),n.downcastDispatcher.convert(s,h,r,e),r.remove(r.createRangeOn(d.getChild(0))),t.data.processor.toData(d)}_getTitleElement(){const e=this.editor.model.document.getRoot();for(const t of e.getChildren())if(T(t))return t}_fixTitleContent(e){const t=this._getTitleElement();if(!t||1===t.maxOffset)return!1;const n=Array.from(t.getChildren());n.shift();for(const i of n)e.move(e.createRangeOn(i),t,"after"),e.rename(i,"paragraph");return!0}_fixTitleElement(e){const t=this.editor.model,n=t.document.getRoot(),i=Array.from(n.getChildren()).filter(T),o=i[0],a=n.getChild(0);if(a.is("element","title"))return P(i,e,t);if(!o&&!x.has(a.name)){const t=e.createElement("title");return e.insert(t,n),e.insertElement("title-content",t),!0}return x.has(a.name)?function(e,t,n){const i=t.createElement("title");t.insert(i,e,"before"),t.insert(e,i,0),t.rename(e,"title-content"),n.schema.removeDisallowedAttributes([e],t)}(a,e,t):e.move(e.createRangeOn(o),n,0),P(i,e,t),!0}_fixBodyElement(e){const t=this.editor.model.document.getRoot();return t.childCount<2&&(this._bodyPlaceholder=e.createElement("paragraph"),e.insert(this._bodyPlaceholder,t,1),!0)}_fixExtraParagraph(e){const t=this.editor.model.document.getRoot(),n=this._bodyPlaceholder;return!!function(e,t){if(!e||!e.is("element","paragraph")||e.childCount)return!1;if(t.childCount<=2||t.getChild(t.childCount-1)!==e)return!1;return!0}(n,t)&&(this._bodyPlaceholder=null,e.remove(n),!0)}_attachPlaceholders(){const e=this.editor,t=e.t,n=e.editing.view,i=n.document.getRoot(),o=e.sourceElement,a=e.config.get("title.placeholder")||t("Type your title"),r=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder")||t("Type or paste your content here.");let s;e.editing.downcastDispatcher.on("insert:title-content",((e,t,i)=>{(0,b.enablePlaceholder)({view:n,element:i.mapper.toViewElement(t.item),text:a,keepOnFocus:!0})})),n.document.registerPostFixer((e=>{const t=i.getChild(1);let n=!1;return t!==s&&(s&&((0,b.hidePlaceholder)(e,s),e.removeAttribute("data-placeholder",s)),e.setAttribute("data-placeholder",r,t),s=t,n=!0),n=(0,b.needsPlaceholder)(t,!0)&&2===i.childCount&&"p"===t.name?!!(0,b.showPlaceholder)(e,t)||n:!!(0,b.hidePlaceholder)(e,t)||n,n}))}_attachTabPressHandling(){const e=this.editor,t=e.model;e.keystrokes.set("TAB",((e,n)=>{t.change((e=>{const i=t.document.selection,o=Array.from(i.getSelectedBlocks());if(1===o.length&&o[0].is("element","title-content")){const i=t.document.getRoot().getChild(1);e.setSelection(i,0),n()}}))})),e.keystrokes.set("SHIFT + TAB",((n,i)=>{t.change((n=>{const a=t.document.selection;if(!a.isCollapsed)return;const r=e.model.document.getRoot(),s=(0,o.first)(a.getSelectedBlocks()),d=a.getFirstPosition(),c=r.getChild(0);s===r.getChild(1)&&d.isAtStart&&(n.setSelection(c.getChild(0),0),i())}))}))}}function H(e,t,n){const i=t.modelCursor,o=t.viewItem;if(!i.isAtStart||!i.parent.is("element","$root"))return;if(!n.consumable.consume(o,{name:!0}))return;const a=n.writer,r=a.createElement("title"),s=a.createElement("title-content");a.append(s,r),a.insert(r,i),n.convertChildren(o,s),n.updateConversionResult(r,t)}function C(e){return(t,n)=>{const i=n.modelPosition.parent;if(!i.is("element","title"))return;const o=i.parent,a=n.mapper.toViewElement(o);n.viewPosition=e.createPositionAt(a,0),t.stop()}}function T(e){return e.is("element","title")}function P(e,t,n){let i=!1;for(const o of e)0!==o.index&&(_(o,t,n),i=!0);return i}function _(e,t,n){const i=e.getChild(0);i.isEmpty?t.remove(e):(t.move(t.createRangeOn(i),e,"before"),t.rename(i,"paragraph"),t.remove(e),n.schema.removeDisallowedAttributes([i],t))}})(),(window.CKEditor5=window.CKEditor5||{}).heading=i})();
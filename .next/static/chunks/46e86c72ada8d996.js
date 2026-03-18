(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17831,(e,t,i)=>{"use strict";var n,a;Object.defineProperty(i,"__esModule",{value:!0}),i.Doctype=i.CDATA=i.Tag=i.Style=i.Script=i.Comment=i.Directive=i.Text=i.Root=i.isTag=i.ElementType=void 0,(a=n=i.ElementType||(i.ElementType={})).Root="root",a.Text="text",a.Directive="directive",a.Comment="comment",a.Script="script",a.Style="style",a.Tag="tag",a.CDATA="cdata",a.Doctype="doctype",i.isTag=function(e){return e.type===n.Tag||e.type===n.Script||e.type===n.Style},i.Root=n.Root,i.Text=n.Text,i.Directive=n.Directive,i.Comment=n.Comment,i.Script=n.Script,i.Style=n.Style,i.Tag=n.Tag,i.CDATA=n.CDATA,i.Doctype=n.Doctype},11304,(e,t,i)=>{"use strict";var n,a=e.e&&e.e.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=e.e&&e.e.__assign||function(){return(o=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0}),i.cloneNode=i.hasChildren=i.isDocument=i.isDirective=i.isComment=i.isText=i.isCDATA=i.isTag=i.Element=i.Document=i.CDATA=i.NodeWithChildren=i.ProcessingInstruction=i.Comment=i.Text=i.DataNode=i.Node=void 0;var r=e.r(17831),s=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),k(this,e)},e}();i.Node=s;var l=function(e){function t(t){var i=e.call(this)||this;return i.data=t,i}return a(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(s);i.DataNode=l;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.ElementType.Text,t}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(l);i.Text=d;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.ElementType.Comment,t}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(l);i.Comment=p;var c=function(e){function t(t,i){var n=e.call(this,i)||this;return n.name=t,n.type=r.ElementType.Directive,n}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(l);i.ProcessingInstruction=c;var g=function(e){function t(t){var i=e.call(this)||this;return i.children=t,i}return a(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!=(e=this.children[0])?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(s);i.NodeWithChildren=g;var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.ElementType.CDATA,t}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(g);i.CDATA=h;var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=r.ElementType.Root,t}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(g);i.Document=m;var u=function(e){function t(t,i,n,a){void 0===n&&(n=[]),void 0===a&&(a="script"===t?r.ElementType.Script:"style"===t?r.ElementType.Style:r.ElementType.Tag);var o=e.call(this,n)||this;return o.name=t,o.attribs=i,o.type=a,o}return a(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map(function(t){var i,n;return{name:t,value:e.attribs[t],namespace:null==(i=e["x-attribsNamespace"])?void 0:i[t],prefix:null==(n=e["x-attribsPrefix"])?void 0:n[t]}})},enumerable:!1,configurable:!0}),t}(g);function f(e){return(0,r.isTag)(e)}function x(e){return e.type===r.ElementType.CDATA}function b(e){return e.type===r.ElementType.Text}function v(e){return e.type===r.ElementType.Comment}function y(e){return e.type===r.ElementType.Directive}function w(e){return e.type===r.ElementType.Root}function k(e,t){if(void 0===t&&(t=!1),b(e))i=new d(e.data);else if(v(e))i=new p(e.data);else if(f(e)){var i,n=t?C(e.children):[],a=new u(e.name,o({},e.attribs),n);n.forEach(function(e){return e.parent=a}),null!=e.namespace&&(a.namespace=e.namespace),e["x-attribsNamespace"]&&(a["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(a["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),i=a}else if(x(e)){var n=t?C(e.children):[],r=new h(n);n.forEach(function(e){return e.parent=r}),i=r}else if(w(e)){var n=t?C(e.children):[],s=new m(n);n.forEach(function(e){return e.parent=s}),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),i=s}else if(y(e)){var l=new c(e.name,e.data);null!=e["x-name"]&&(l["x-name"]=e["x-name"],l["x-publicId"]=e["x-publicId"],l["x-systemId"]=e["x-systemId"]),i=l}else throw Error("Not implemented yet: ".concat(e.type));return i.startIndex=e.startIndex,i.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(i.sourceCodeLocation=e.sourceCodeLocation),i}function C(e){for(var t=e.map(function(e){return k(e,!0)}),i=1;i<t.length;i++)t[i].prev=t[i-1],t[i-1].next=t[i];return t}i.Element=u,i.isTag=f,i.isCDATA=x,i.isText=b,i.isComment=v,i.isDirective=y,i.isDocument=w,i.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},i.cloneNode=k},92599,(e,t,i)=>{"use strict";var n=e.e&&e.e.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var a=Object.getOwnPropertyDescriptor(t,i);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,a)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),a=e.e&&e.e.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(i,"__esModule",{value:!0}),i.DomHandler=void 0;var o=e.r(17831),r=e.r(11304);a(e.r(11304),i);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function e(e,t,i){this.dom=[],this.root=new r.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(i=t,t=s),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:s,this.elementCB=null!=i?i:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new r.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var i=this.options.xmlMode?o.ElementType.Tag:void 0,n=new r.Element(e,t,void 0,i);this.addNode(n),this.tagStack.push(n)},e.prototype.ontext=function(e){var t=this.lastNode;if(t&&t.type===o.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var i=new r.Text(e);this.addNode(i),this.lastNode=i}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===o.ElementType.Comment){this.lastNode.data+=e;return}var t=new r.Comment(e);this.addNode(t),this.lastNode=t},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new r.Text(""),t=new r.CDATA([e]);this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var i=new r.ProcessingInstruction(e,t);this.addNode(i)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom);else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],i=t.children[t.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),i&&(e.prev=i,i.next=e),e.parent=t,this.lastNode=null},e}();i.DomHandler=l,i.default=l},99235,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.CARRIAGE_RETURN_PLACEHOLDER_REGEX=i.CARRIAGE_RETURN_PLACEHOLDER=i.CARRIAGE_RETURN_REGEX=i.CARRIAGE_RETURN=i.CASE_SENSITIVE_TAG_NAMES_MAP=i.CASE_SENSITIVE_TAG_NAMES=void 0,i.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],i.CASE_SENSITIVE_TAG_NAMES_MAP=i.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,t){return e[t.toLowerCase()]=t,e},{}),i.CARRIAGE_RETURN="\r",i.CARRIAGE_RETURN_REGEX=RegExp(i.CARRIAGE_RETURN,"g"),i.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(),"__"),i.CARRIAGE_RETURN_PLACEHOLDER_REGEX=RegExp(i.CARRIAGE_RETURN_PLACEHOLDER,"g")},73217,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.formatAttributes=o,i.hasOpenTag=function(e,t){var i="<"+t,n=e.toLowerCase().indexOf(i);if(-1===n)return!1;var a=e[n+i.length];return">"===a||" "===a||"	"===a||"\n"===a||"\r"===a||"/"===a},i.escapeSpecialCharacters=function(e){return e.replace(a.CARRIAGE_RETURN_REGEX,a.CARRIAGE_RETURN_PLACEHOLDER)},i.revertEscapedCharacters=r,i.formatDOM=function e(t,i,s){void 0===i&&(i=null);for(var l,d,p,c,g,h=[],m=0,u=t.length;m<u;m++){var f=t[m];switch(f.nodeType){case 1:var x=function(e){var t,i=(t=e=e.toLowerCase(),a.CASE_SENSITIVE_TAG_NAMES_MAP[t]);return i||e}(f.nodeName);(g=new n.Element(x,o(f.attributes))).children=e("template"===x?f.content.childNodes:f.childNodes,g);break;case 3:g=new n.Text(r(null!=(l=f.nodeValue)?l:""));break;case 8:g=new n.Comment(null!=(d=f.nodeValue)?d:"");break;default:continue}var b=null!=(p=h[m-1])?p:null;b&&(b.next=g),g.parent=i,g.prev=b,g.next=null,h.push(g)}return s&&((g=new n.ProcessingInstruction(s.substring(0,s.indexOf(" ")).toLowerCase(),s)).next=null!=(c=h[0])?c:null,g.parent=i,h.unshift(g),h[1]&&(h[1].prev=h[0])),h};var n=e.r(92599),a=e.r(99235);function o(e){for(var t={},i=0,n=e.length;i<n;i++){var a=e[i];t[a.name]=a.value}return t}function r(e){return e.replace(a.CARRIAGE_RETURN_PLACEHOLDER_REGEX,a.CARRIAGE_RETURN)}},12369,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){var t,i,c,g,h,m,f=l.exec(e=(0,a.escapeSpecialCharacters)(e)),x=null==(t=null==f?void 0:f[1])?void 0:t.toLowerCase();switch(x){case o:var b=p(e);if(!(0,a.hasOpenTag)(e,r)){var v=b.querySelector(r);null==(i=null==v?void 0:v.parentNode)||i.removeChild(v)}if(!(0,a.hasOpenTag)(e,s)){var v=b.querySelector(s);null==(c=null==v?void 0:v.parentNode)||c.removeChild(v)}return b.querySelectorAll(o);case r:case s:var y=d(e).querySelectorAll(x);if((0,a.hasOpenTag)(e,s)&&(0,a.hasOpenTag)(e,r))return null!=(h=null==(g=y[0].parentNode)?void 0:g.childNodes)?h:u();return y;default:if(n)return n(e);var v=d(e,s).querySelector(s);return null!=(m=null==v?void 0:v.childNodes)?m:u()}};var n,a=e.r(73217),o="html",r="head",s="body",l=/<([a-zA-Z]+[0-9]?)/,d=function(e,t){throw Error("This browser does not support `document.implementation.createHTMLDocument`")},p=function(e,t){throw Error("This browser does not support `DOMParser.prototype.parseFromString`")},c="object"==typeof window&&window.DOMParser;if("function"==typeof c){var g=new c;d=p=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),g.parseFromString(e,"text/html")}}if("object"==typeof document&&document.implementation){var h=document.implementation.createHTMLDocument();d=function(e,t){if(t){var i=h.documentElement.querySelector(t);return i&&(i.innerHTML=e),h}return h.documentElement.innerHTML=e,h}}var m="object"==typeof document&&document.createElement("template");m&&m.content&&(n=function(e){return m.innerHTML=e,m.content.childNodes});var u=function(){return document.createDocumentFragment().childNodes}},71883,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];var t=r.exec(e),i=t?t[1]:void 0;return(0,o.formatDOM)((0,a.default)(e),null,i)};var a=n(e.r(12369)),o=e.r(73217),r=/<(![a-zA-Z\s]+)>/},59878,(e,t,i)=>{i.SAME=0,i.CAMELCASE=1,i.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},94555,(e,t,i)=>{"use strict";function n(e,t,i,n,a,o,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=r}let a={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(e=>{a[e]=new n(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{a[e]=new n(e,1,!1,t,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(e=>{a[e]=new n(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{a[e]=new n(e,2,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{a[e]=new n(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(e=>{a[e]=new n(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(e=>{a[e]=new n(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(e=>{a[e]=new n(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(e=>{a[e]=new n(e,5,!1,e.toLowerCase(),null,!1,!1)});let o=/[\-\:]([a-z])/g,r=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{let t=e.replace(o,r);a[t]=new n(t,1,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{let t=e.replace(o,r);a[t]=new n(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(e=>{let t=e.replace(o,r);a[t]=new n(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(e=>{a[e]=new n(e,1,!1,e.toLowerCase(),null,!1,!1)}),a.xlinkHref=new n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(e=>{a[e]=new n(e,1,!1,e.toLowerCase(),null,!0,!0)});let{CAMELCASE:s,SAME:l,possibleStandardNames:d}=e.r(59878),p=RegExp.prototype.test.bind(RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),c=Object.keys(d).reduce((e,t)=>{let i=d[t];return i===l?e[t]=t:i===s?e[t.toLowerCase()]=t:e[t]=i,e},{});i.BOOLEAN=3,i.BOOLEANISH_STRING=2,i.NUMERIC=5,i.OVERLOADED_BOOLEAN=4,i.POSITIVE_NUMERIC=6,i.RESERVED=0,i.STRING=1,i.getPropertyInfo=function(e){return a.hasOwnProperty(e)?a[e]:null},i.isCustomAttribute=p,i.possibleStandardNames=c},26568,(e,t,i)=>{"use strict";var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,o=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,p=/^\s+|\s+$/g;function c(e){return e?e.replace(p,""):""}t.exports=function(e,t){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];t=t||{};var i=1,p=1;function g(e){var t=e.match(a);t&&(i+=t.length);var n=e.lastIndexOf("\n");p=~n?e.length-n:p+e.length}function h(){var e={line:i,column:p};return function(t){return t.position=new m(e),f(o),t}}function m(e){this.start=e,this.end={line:i,column:p},this.source=t.source}function u(n){var a=Error(t.source+":"+i+":"+p+": "+n);if(a.reason=n,a.filename=t.source,a.line=i,a.column=p,a.source=e,t.silent);else throw a}function f(t){var i=t.exec(e);if(i){var n=i[0];return g(n),e=e.slice(n.length),i}}function x(e){var t;for(e=e||[];t=b();)!1!==t&&e.push(t);return e}function b(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var i=2;""!=e.charAt(i)&&("*"!=e.charAt(i)||"/"!=e.charAt(i+1));)++i;if(i+=2,""===e.charAt(i-1))return u("End of comment missing");var n=e.slice(2,i-2);return p+=2,g(n),e=e.slice(i),p+=2,t({type:"comment",comment:n})}}m.prototype.content=e,f(o);var v,y=[];for(x(y);v=function(){var e=h(),t=f(r);if(t){if(b(),!f(s))return u("property missing ':'");var i=f(l),a=e({type:"declaration",property:c(t[0].replace(n,"")),value:i?c(i[0].replace(n,"")):""});return f(d),a}}();)!1!==v&&(y.push(v),x(y));return y}},70454,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){let i=null;if(!e||"string"!=typeof e)return i;let n=(0,a.default)(e),o="function"==typeof t;return n.forEach(e=>{if("declaration"!==e.type)return;let{property:n,value:a}=e;o?t(n,a,e):a&&((i=i||{})[n]=a)}),i};let a=n(e.r(26568))},65185,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,o=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,l=function(e,t){return t.toUpperCase()},d=function(e,t){return"".concat(t,"-")};i.camelCase=function(e,t){var i;return(void 0===t&&(t={}),!(i=e)||o.test(i)||n.test(i))?e:(e=e.toLowerCase(),(e=t.reactCompat?e.replace(s,d):e.replace(r,d)).replace(a,l))}},15511,(e,t,i)=>{"use strict";var n=(e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(e.r(70454)),a=e.r(65185);function o(e,t){var i={};return e&&"string"==typeof e&&(0,n.default)(e,function(e,n){e&&n&&(i[(0,a.camelCase)(e,t)]=n)}),i}o.default=o,t.exports=o},46335,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.returnFirstArg=i.canTextBeChildOfNode=i.ELEMENTS_WITH_NO_TEXT_CHILDREN=i.PRESERVE_CUSTOM_ATTRIBUTES=void 0,i.isCustomComponent=function(e,t){return e.includes("-")?!r.has(e):!!(t&&"string"==typeof t.is)},i.setStyleProp=function(e,t){if("string"==typeof e){if(!e.trim()){t.style={};return}try{t.style=(0,o.default)(e,s)}catch(e){t.style={}}}};var a=e.r(71645),o=n(e.r(15511)),r=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]),s={reactCompat:!0};i.PRESERVE_CUSTOM_ATTRIBUTES=Number(a.version.split(".")[0])>=16,i.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]),i.canTextBeChildOfNode=function(e){return!i.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)},i.returnFirstArg=function(e){return e}},12467,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){void 0===e&&(e={});var i={},d=!!(e.type&&s[e.type]);for(var p in e){var c=e[p];if((0,n.isCustomAttribute)(p)){i[p]=c;continue}var g=p.toLowerCase(),h=l(g);if(h){var m=(0,n.getPropertyInfo)(h);switch(o.includes(h)&&r.includes(t)&&!d&&(h=l("default"+g)),i[h]=c,null==m?void 0:m.type){case n.BOOLEAN:i[h]=!0;break;case n.OVERLOADED_BOOLEAN:""===c&&(i[h]=!0)}continue}a.PRESERVE_CUSTOM_ATTRIBUTES&&(i[p]=c)}return(0,a.setStyleProp)(e.style,i),i};var n=e.r(94555),a=e.r(46335),o=["checked","value"],r=["input","select","textarea"],s={reset:!0,submit:!0};function l(e){return n.possibleStandardNames[e]}},54465,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function e(t,i){void 0===i&&(i={});for(var n,a,l,d,p,c=[],g="function"==typeof i.replace,h=null!=(n=i.transform)?n:r.returnFirstArg,m=null!=(a=i.library)?a:s,u=m.cloneElement,f=m.createElement,x=m.isValidElement,b=t.length,v=0;v<b;v++){var y,w=t[v];if(g){var k=null==(l=i.replace)?void 0:l.call(i,w,v);if(x(k)){b>1&&(k=u(k,{key:null!=(d=k.key)?d:v})),c.push(h(k,w,v));continue}}if("text"===w.type){var C=!w.data.trim().length;if(C&&w.parent&&!(0,r.canTextBeChildOfNode)(w.parent)||i.trim&&C)continue;c.push(h(w.data,w,v));continue}var E={};(y=w,r.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===y.type&&(0,r.isCustomComponent)(y.name,y.attribs))?((0,r.setStyleProp)(w.attribs.style,w.attribs),E=w.attribs):w.attribs&&(E=(0,o.default)(w.attribs,w.name));var M=void 0;switch(w.type){case"script":case"style":w.children[0]&&(E.dangerouslySetInnerHTML={__html:w.children[0].data});break;case"tag":"textarea"===w.name&&w.children[0]?E.defaultValue=w.children[0].data:(null==(p=w.children)?void 0:p.length)&&(M=e(w.children,i));break;default:continue}b>1&&(E.key=v),c.push(h(f(w.name,E,M),w,v))}return 1===c.length?c[0]:c};var a=e.r(71645),o=n(e.r(12467)),r=e.r(46335),s={cloneElement:a.cloneElement,createElement:a.createElement,isValidElement:a.isValidElement}},17870,(e,t,i)=>{"use strict";var n=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.htmlToDOM=i.domToReact=i.attributesToProps=i.Text=i.ProcessingInstruction=i.Element=i.Comment=void 0,i.default=function(e,t){var i;if("string"!=typeof e)throw TypeError("First argument must be a string");return e?(0,o.default)((0,a.default)(e,null!=(i=null==t?void 0:t.htmlparser2)?i:s),t):[]};var a=n(e.r(71883));i.htmlToDOM=a.default,i.attributesToProps=n(e.r(12467)).default;var o=n(e.r(54465));i.domToReact=o.default;var r=e.r(92599);Object.defineProperty(i,"Comment",{enumerable:!0,get:function(){return r.Comment}}),Object.defineProperty(i,"Element",{enumerable:!0,get:function(){return r.Element}}),Object.defineProperty(i,"ProcessingInstruction",{enumerable:!0,get:function(){return r.ProcessingInstruction}}),Object.defineProperty(i,"Text",{enumerable:!0,get:function(){return r.Text}});var s={lowerCaseAttributeNames:!1}},12774,e=>{"use strict";var t=e.i(43476);e.i(71645);var i=e.i(17870);let n=i.default.default||i.default;function a(){let e=`<style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .nav-container {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 5px;
                padding: 8px;
            }
            
            .mobile-hamburger img {
                width: 20px;
                height: 20px;
                opacity: 1;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%;
                max-width: 300px;
            }
            
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: 'DM Sans', sans-serif;
                font-weight: 500;
                font-style: normal;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0%;
                transition: color 0.3s ease;
                display: block;
                padding: 14px 0;
                opacity: 1;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure content is properly sized on mobile */
            html, 
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 20px;
            width: 100%;
        }
        
        @media (max-width: 992px) {
            /* Hide all navigation elements on mobile */
            .navbar, .mobile-hamburger, .nav-container, .nav-links, .mobile-menu, #mobileHamburger, .mobile-menu-container, .menu-overlay {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            
            /* Mobile menu styles - slides in from right */
            .mobile-menu {
                position: fixed;
                top: 0;
                right: -300px; /* Start off-screen to the right */
                width: 280px;
                height: 100%;
                background: #fff;
                z-index: 1001;
                padding: 80px 20px 20px;
                box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
                transition: right 0.3s ease-in-out;
                overflow-y: auto;
            }
            
            .mobile-menu.active {
                right: 0; /* Slide in from right */
            }
            
            .mobile-menu .nav-links {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 0;
                margin: 0;
                list-style: none;
            }
            
            .mobile-menu .nav-links li a {
                color: #333;
                text-decoration: none;
                font-size: 18px;
                font-weight: 500;
                display: block;
                padding: 10px 0;
                transition: color 0.2s;
            }
            
            .mobile-menu .nav-links li a:hover {
                color: #8e6c88; /* Match your site's accent color */
            }
            
            /* Overlay when menu is open */
            .menu-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1000;
            }
            
            .menu-overlay.active {
                display: block;
            }
            
            .nav-links.active {
                transform: translateY(0);
            }
            
            .nav-links li {
                margin: 15px 0;
            }
            
            .mobile-hamburger {
                display: block;
            }
        }
        
        @media (max-width: 768px) {
            .divine-offerings {
                padding: 0 15px;
                width: 100%;
                margin: 0 auto;
                box-sizing: border-box;
            }
            
            .divine-offerings .container {
                width: 100%;
                max-width: 100%;
                padding: 0;
            }
            
            .tabs-container {
                width: 100%;
                padding: 0 10px;
                box-sizing: border-box;
            }
            
            .divine-offerings h2 {
                font-size: 24px !important;
                text-align: left !important;
                padding: 0 10px;
            }
            .hero-content h1{
                font-size: 42px !important;
            }
            .hero-content p{
                font-size: 20px !important;
                line-height: 1.2 !important;
            }
            
            .tabs-header {
                width: 100%;
                margin-bottom: 15px;
            }
            
            .tab-row {
                display: flex;
                flex-wrap: wrap;
                gap: 5px !important;
        margin-bottom: -10px;
    }
    .tab-content h3 {
        margin-top: -18px !important;
        font-size: 18px !important;
        margin-bottom: -18px !important;
            }
            
            .tab-content p {
                font-size: 14px !important;
                margin-bottom: 16px !important;
            }
            
            .tab-image {
                width: 100%;
                height: auto;
                border-radius: 10px;
            }

            .tab-button {
                flex: 1 1 calc(50% - 4px);
                white-space: normal;
                text-align: center;
                padding: 8px 5px;
                font-size: 12px !important;
                margin: 0;
                word-break: break-word;
                height: auto;
                min-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .energy-exchange .exchange-label{
                font-size: 12px !important;
                text-align: left !important;
            }
            
            .tab-content {
                flex-direction: column;
                width: 100% !important;
                padding: 20px 0; /* Removed horizontal padding */
                min-height: auto;
            }
            
            .tab-content-right .tab-image {
                max-width: 100%;
                height: auto;
            }
            .exchange-amount {
                font-size: 16px !important;
                text-align: left !important;
            }
            .book-now {
                justify-content: right !important;
                margin: auto !important;
                margin-right: 0 !important;
                display: flex !important;
                width: auto !important;
                float: right;
            }
            .badge-container {
                justify-content: flex-start !important;
                display: flex !important;
                margin: 0 !important; /* Match pricing div padding */
                width: auto !important;
                text-align: left !important;
                box-sizing: border-box;
                gap: 8px;
                flex-wrap: wrap;
            }
            .testimonial:not(:last-child) {
                margin-right: -2% !important;
            }
            .tab-content-right .pricing {
                width: 100%;
                max-width: 100%;
                margin:0;
                text-align: center;
                padding: 15px 10px;
            }
            .tab-content-left,
            .tab-content-right {
                width: 100% !important;
                padding: 0;
            }
            
            
}
            
          
           
            
           
            .pricing {
                margin-top: 15px;
                padding: 15px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .pricing .price {
                font-size: 24px;
                font-weight: bold;
                margin: 10px 0;
                white-space: nowrap;
            }
            
            .pricing .duration {
                font-size: 14px;
                opacity: 0.8;
                margin-bottom: 15px;
            }
            
            .pricing-container {
                position: relative;
                width: 100%;
                margin: 15px 0 0;
                padding: 0 10px;
            }
            
            .pricing-frame {
                display: none;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 20px;
                height: 30px;
                border: 2px solid #4F1C4C;
                pointer-events: none;
            }
            
            .frame-left {
                left: 0;
                border-right: none;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            
            .frame-right {
                right: 0;
                border-left: none;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            
            .book-now {
                width: 100%;
                max-width: 180px;
                margin: 10px auto 0;
                padding: 8px 16px;
                background: #4F1C4C;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                text-align: center;
                text-decoration: none;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
            }
            
            .book-now:hover {
                background: #3a1438;
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            
            @media (max-width: 767px) {
                .pricing-frame {
                    display: block;
                }
                
                .book-now {
                    padding: 6px 12px;
                    font-size: 13px;
                    max-width: 140px;
                    top: 1.5px;
                }
            }
        
        
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Mobile Menu Button - Always visible on mobile */
            #mobileHamburger {
                display: flex !important;
                visibility: visible !important;
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            
            /* Mobile Menu Overlay - Hidden by default */
            #mobileMenuOverlay {
                display: none !important;
                visibility: hidden;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease, visibility 0.3s ease;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            #mobileMenuOverlay.active {
                display: flex !important;
                visibility: visible !important;
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex !important;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 4px;
                padding: 5px;
            }
            
            .mobile-hamburger:focus {
                outline: 2px solid white;
                outline-offset: 2px;
            }
            
            .mobile-hamburger img {
                width: 100%;
                height: auto;
                display: block !important;
            }
            
            /* Mobile Menu Overlay - Using ID selector for higher specificity */
            #mobileMenuOverlay {
                justify-content: flex-start;
                padding-top: 80px;
                align-items: flex-start;
                text-align: left;
            }
            
            #mobileMenuOverlay .mobile-nav-links {
                list-style: none;
                margin: 0;
                padding: 0 20px;
                width: 100%;
                max-width: 300px;
                box-sizing: border-box;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0 20px;
                margin: 0;
                width: 100%;
                max-width: 300px;
                box-sizing: border-box;
            }
            
            
            .mobile-nav-links a {
                color: white !important;
                text-decoration: none;
                font-family: 'DM Sans', sans-serif !important;
                transition: color 0.3s ease;
                display: block;
                padding: 12px 20px;
                width: 100%;
                box-sizing: border-box;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2 !important;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Override any conflicting styles */
            body.menu-open {
                overflow: hidden;
            }
            
            /* Ensure no other rules are hiding our elements */
            .mobile-hamburger,
            #mobileHamburger,
            .mobile-menu-overlay,
            #mobileMenuOverlay,
            .mobile-nav-links,
            .mobile-nav-links * {
                opacity: 1 !important;
            }
            
            .mobile-menu-overlay.active {
                display: flex !important;
            }
        }
        
        /* Desktop styles - hide mobile elements */
        @media (min-width: 1024px) {
            .mobile-hamburger,
            .mobile-menu-overlay {
                display: none !important;
            }
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        
        
        .hero {
            width: 100%;
            height: 600px;
            background-image: url('assets/land1.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            margin: 0;
            padding: 0;
            opacity: 1;
        }
        
        /* Optional: Add content container inside hero */
        .hero-content {
            padding-top: 80px; /* Add padding to account for fixed navbar */
            position: relative;
            z-index: 1;
            max-width: 1280px;
            margin: 0 auto;
            height: 100%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        
        .hero h1 {
            font-family: 'DM Sans', serif;
            font-weight: 700;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #F2DA91;
            margin-bottom: 1.5rem;
            max-width: 900px;
        }
        
        .hero p {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: 0%;
            max-width: 900px;
        }
        
        /* Navbar Styles */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 25px 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            transition: background-color 0.3s ease;
        }
        
        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-logo {
            color: #FFFFFF;
            font-family: 'DM Sans', serif;
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            z-index: 1001;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-links a {
            position: relative;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #FFFFFF;
            text-decoration: none;
            transition: color 0.3s ease;
            padding: 5px 0;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #fff;
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .cart-icon:hover img {
            transform: scale(1.1);
        }
        
        .dropdown-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 12px 0;
            position: relative;
        }
        
        .dropdown-header span {
            font-family: 'DM Sans';
            font-weight: 600;
            color: #FCF7FE;
            display: inline-block;
            width: calc(100% - 30px);
        }
        
        .dropdown-header img.dropdown-icon {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            transition: transform 0.3s ease;
        }
        
        .dropdown.active .dropdown-header img.dropdown-icon {
            transform: rotate(180deg);
        }
        
        .dropdown-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .dropdown.active .dropdown-content {
            max-height: 500px; /* Adjust based on content */
            padding: 10px 0;
        }
        
        .dropdown-content p {
            margin: 0;
            color: #A07AA9;
            font-size: 14px;
            line-height: 1.5;
        }
        
        /* Divine Offerings Section */
        .divine-offerings {
            padding: 80px 0;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        .divine-offerings h2 {
            font-family: 'DM Sans', serif;
            font-weight: 700;
            font-size: 36px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #4F1C4C;
            text-align: center;
            margin-bottom: 40px;
        }

        /* Tab Styles */
        .tabs-container {
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .tabs-header {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 32px;
        }
        
        .tab-row {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 8px;
        }

        .tab-button {
            height: 44px;
            padding: 12px 18px;
            background-color: #EFD0F7;
            border: none;
            border-radius: 5px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-style: Medium;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #533952;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            text-align: center;
        }

        .tab-button:hover {
            background-color: #e0b5f0;
        }

        .tab-button.active {
            background-color: #4F1C4C;
            color: #FFFFFF;
        }
        
        .badge-container {
            display: flex;
            gap: 5px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }
        
        .tab-badge {
            height: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #6D436A;
            color: white;
            border-radius: 20px;
            padding: 5px 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            font-weight: 500;
            gap: 6px;
        }
        
        .tab-badge svg {
            width: 14px;
            height: 14px;
        }
        
        .tab-badge svg path {
            stroke: white;
        }
        
        
        .tab-content h3 {
            font-family: 'DM Sans', serif;
            color: #4F1C4C;
            margin: 0 0 20px 0;
        }

        .tab-content {
            display: none;
            width: 1120px;
            min-height: 452px;
            background: linear-gradient(90.03deg, #4F1C4C 0.03%, #30112E 99.97%);
            border-radius: 20px;
            padding: 24px 0 0 24px;
            color: #FFFFFF;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
        }
        
        .tab-content.active {
            display: flex;
            justify-content: space-between;
            position: relative;
        }
        
        .tab-content-left {
            width: 488px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            padding-right: 20px;
        }
        
        .tab-content h3 {
            font-family: 'DM Sans', serif;
            font-size: 36px;
            margin: 0 0 16px 0;
            color: #FFFFFF;
        }
        
        .tab-content p {
            font-family: 'DM Sans', sans-serif;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 24px 0;
        }
        
        .dropdown {
            margin-bottom: 16px;
            position: relative;
            border-bottom: 1px solid #877586;
        }
        
        .dropdown-header {
            cursor: pointer;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .dropdown-header span {
            font-family: 'DM Sans';
            font-weight: 600;
            color: #FCF7FE;
        }
        
        .dropdown-content {
            padding: 16px 0 0 0;
            display: none;
        }
        
        .dropdown.active .dropdown-content {
            display: block;
            padding-bottom: 16px;
        }
        
        .dropdown.active .dropdown-header {
            margin-bottom: 0;
        }
        
        .dropdown-content p {
            position: relative;
            padding-left: 24px;
            margin: 8px 0;
            color: #FCF7FE;
            font-family: 'DM Sans';
            font-size: 14px;
            line-height: 1.5;
        }
        
        .dropdown-content p:before {
            content: '';
            position: absolute;
            left: 0;
            top: 5px;
            width: 12px;
            height: 12px;
            background-image: url('bullet.svg');
            background-size: contain;
            background-repeat: no-repeat;
        }
        
        .dropdown.active .dropdown-content {
            display: block;
        }
        
        .tab-content-right {
            position: absolute;
            right: 24px;
            top: 2px;
            width: 488px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        
        .tab-image {
            width: 100%;
            max-height: 400px;
            min-height: 200px;
            border-radius: 10px;
            object-fit: cover;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 24px;
            margin-bottom: 24px;
        }
        
        .pricing {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 488px;
            min-height: 66px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.05);
            padding: 8px 12px;
            opacity: 1;
            transform: rotate(0deg);
            box-sizing: border-box;
        }
        
        .energy-exchange {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .exchange-label {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #B7A2B6;
            white-space: nowrap;
        }
        
        .exchange-amount {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #F2DA91;
        }
        
        .pricing {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        
        .energy-exchange {
            display: flex;
            flex-direction: column;
        }
        
        .pricing .book-now {
            margin-right: -1px;
            display: flex;
            bottom: 4px;
            align-items: center;
            height: 100%;
        }
        
        .price {
            font-family: 'DM Sans', serif;
            font-size: 24px;
            font-weight: 700;
        }
        
        .book-now {
            position: relative;
            overflow: hidden;
            z-index: 1;
            background: #F2DA91;
            color: #4F1C4C;
            border: none;
            width: 207px;
            height: 44px;
            padding: 12px 35px 12px 35px;
            border-radius: 5px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-sizing: border-box;
        }
        
        .book-now::before,
        .book-now::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background-size: contain;
            background-repeat: no-repeat;
            transition: all 0.3s ease;
            opacity: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .book-now::before {
            left: 15px;
            background-image: url("frame1.svg");
        }

        .book-now::after {
            right: 15px;
            background-image: url("frame1.svg");
            transform: translateY(-50%) rotate(180deg);
        }

        .book-now:hover {
            background: #E6C973;
        }

        .book-now:hover::before,
        .book-now:hover::after {
            opacity: 1;
        }

        .book-now:hover::before {
            left: 10px;
            animation: fadeInLeft 0.5s ease-out;
        }

        .book-now:hover::after {
            right: 10px;
            animation: fadeInRight 0.5s ease-out;
        }
        
        /* Make frames always visible on mobile */
        @media (max-width: 767px) {
            .book-now::before,
            .book-now::after {
                opacity: 1 !important;
            }
            
            .book-now::before {
                left: 10px !important;
            }
            
            .book-now::after {
                right: 10px !important;
            }
        }

        .tab-content.active {
            display: block;
        }
    </style>
<div class="page-body " style="">

    <!-- Mobile Hamburger Menu -->
    
    
    <!-- Mobile Menu Overlay -->
    

    <!-- Desktop Navigation -->
    
    
    <section class="hero">
        <div class="hero-content">
            <h1>One soul. Many paths to healing</h1>
            <p>Each offering is guided by Abhirang Spectrum to help you clear what holds you back and return to your highest self.</p>
        </div>
    </section>
    <!-- divine offering  -->
    <section class="divine-offerings">
        <div class="container">
            <div class="tabs-container">
                <div style="margin-bottom: 80px;">
                    <h2 style="font-family: 'DM Sans', serif; font-weight: 700; font-size: 36px; line-height: 100%; letter-spacing: 0%; color: #4F1C4C; margin-bottom: 12px; text-align: left;">
                        Explore divinely guided offerings
                    </h2>
                    <div style="height: 1px; background-color: #000000; width: 100%;"></div>
                </div>
                <div class="tabs-header">
                    <div class="tab-row">
                        <button class="tab-button" data-tab="Graphology">Graphology</button>
                        <button class="tab-button active" data-tab="Abhirang Energy Healing">Abhirang Energy Healing </button>
                        <button class="tab-button" data-tab="Anhad Naad">Anhad Naad</button>
                        <button class="tab-button" data-tab="Dynamic Healing Session">Dynamic Healing Session</button>
                        <button class="tab-button" data-tab="Full Moon Healing &amp; Meditation">Full Moon Healing &amp; Meditation </button>
                        <button class="tab-button" data-tab="New Moon Healing &amp; Meditation">New Moon Healing &amp; Meditation </button>
                    </div>
                    <div class="tab-row">
                        <button class="tab-button" data-tab="Aura Scanning, Reading &amp; Cleansing Session">Aura Scanning, Reading &amp; Cleansing Session</button>
                        <!-- <button class="tab-button" data-tab="tab6">Bach Flower Remedy Consultation</button> -->
                    </div>
                </div>
                
                <div id="Abhirang Energy Healing" class="tab-content active">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                60 Mins
                            </div>
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z"></path>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z"></path>
                                </svg>
                                Online
                            </div>
                            <div class="tab-badge">
                                <img src="/pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Group
                            </div>
                        </div>
                        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '40px', lineHeight: '48px', color: '#FCF7FE', margin: '0 0 16px 0' }}>Abhirang Energy Healing </h3>
                        <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '28px', color: '#DFD8DE', margin: '0 0 24px 0' }}>It is an integrated and holistic system of addressing your physical, emotional and mental ailments at the root level using the cosmic energy field. </p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '100%', color: '#A07AA9', margin: '0 0 24px 0' }}> Feeling stuck, drained, or emotionally heavy? Step into this soul-nourishing group session and immerse yourself in powerful collective energy healing. Cleanse your aura, realign your chakras, and elevate your vibration to leave feeling lighter, clearer, and deeply connected to your inner peace..</p>
                        
                       
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Aura Cleansing</p>
                                <p>Chakra Balancing</p>
                                <p>Breathwork</p>
                                <p>Deep Healing</p>
                            </div>
                            
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Calm your mind and restore emotional balance</p>
                                <p>Open your heart to deeper self-love</p>
                                <p>Activate and reset your chakras</p>
                                <p>Gain confidence, clarity, and divine focus</p>
                                <p>Awaken inner abundance</p>
                                <p>Strengthen relationships</p>
                                <p>Remove psychic attacks and evil eye energies</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Monthly energetic tune-ups.</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p> Please provide at least 24 hours notice for cancellations.</p>
                                <p>Missed appointments without notice may be charged.</p>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="/assets/Rectangle%2025.webp" alt="Group Energy Healing Session" class="tab-image" width="500" height="350" loading="lazy">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹599 | $23 USD</span>
                            </div>
                            <a href="/contact" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div>
                
                <div id="Dynamic Healing Session" class="tab-content">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                45 Mins
                            </div>
                            <div class="tab-badge secondary">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z" stroke="white"></path>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z" stroke="white"></path>
                                </svg>
                                Online/Offline
                            </div>
                            <div class="tab-badge">
                                <img src="/pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Individual
                            </div>
                        </div>
                        <h3 style="font-family: 'DM Sans'; font-weight: 700; font-size: 40px; line-height: 48px; color: #FCF7FE; margin: 0 0 16px 0;">Dynamic Healing Session</h3>
                        <p style="font-family: 'DM Sans'; font-weight: 400; font-size: 20px; line-height: 100%; letter-spacing: 10%; text-transform: uppercase; color: #FCF7FECC; margin: 0 0 24px 0;"> Deep Release. Personal Clarity. Transformation.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 1.6; color: #A07AA9; margin: 0 0 24px 0;">
                            Ready for deep, personal healing? This 1:1 session is tailored to your unique emotional, energetic, and physical challenges. Whether you’re facing stress, spiritual blocks, or limiting beliefs around health, wealth, success, and abundance, this transformational session blends intuitive guidance, energy healing, and chakra balancing to help you break through and elevate your life.</p>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Personal energy scanning</p>
                                <p>Focused chakra healing</p>
                                <p>Kundalini activation</p>
                                <p>Release of emotional and energetic blocks</p>
                                <p>Customized intuitive guidance</p>
                                <p>Ancestral curse release</p>
                                <p>Clearing karmic baggage</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Experience deeply personalized healing</p>
                                <p>Release old patterns and limiting beliefs</p>
                                <p>Gain spiritual clarity and inner peace</p>
                                <p>Reconnect with your divine purpose</p>
                                <p>Reactivate your inner abundance</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Anyone seeking deeper, transformative healing for a life of abundance</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p> Please provide at least 24 hours notice for cancellations.</p>
                                <p>Missed appointments without notice may be charged.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="/assets/Rectangle%2025%20(1).webp" alt="Full Moon Healing &amp; Meditation Session" class="tab-image" width="500" height="350" loading="lazy">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹5999 | $149 USD</span>
                            </div>
                            <a href="/contact" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div>
                
                <div id="Full Moon Healing &amp; Meditation" class="tab-content">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                60 Mins
                            </div>
                            <div class="tab-badge secondary">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z" stroke="white"></path>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z" stroke="white"></path>
                                </svg>
                                Online
                            </div>
                            <div class="tab-badge">
                                <img src="/pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Group
                            </div>
                        </div>
                        <h3 style="font-family: 'DM Sans'; font-weight: 700; font-size: 40px; line-height: 48px; color: #FCF7FE; margin: 0 0 16px 0;">Full Moon Healing &amp; Meditation</h3>
                        <p style="font-family: 'DM Sans'; font-weight: 400; font-size: 20px; line-height: 100%; letter-spacing: 10%; text-transform: uppercase; color: #FCF7FECC; margin: 0 0 24px 0;"> Let Go. Cleanse. Receive. Rise.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 100%; color: #A07AA9; margin: 0 0 24px 0;">
                            The Full Moon is a powerful time for release and renewal. Join this sacred group session to shed emotional burdens, karmic residue, energetic heaviness, and subconscious blocks. Under the luminous glow of the Full Moon, we’ll journey together to heal, transform, and reset your body, mind, and soul.</p>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Aura Cleansing</p>
                                <p>Breathwork</p>
                                <p>Chakra Balancing</p>
                                <p>Third Eye Chakra Activation</p>
                                <p>Kundalini Activation</p>
                                <p>Deep Healing</p>
                                <p>Gratitude Prayer</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Release emotional baggage with lunar support</p>
                                <p>Cleanse your aura under divine moonlight</p>
                                <p>Recharge spiritually for new beginnings</p>
                                <p>Open to divine guidance and powerful manifestations</p>
                                <p>Realign with inner abundance</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>A Lunar rituals and monthly energetic resets</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p> Please provide at least 24 hours notice for cancellations.</p>
                                <p>Missed appointments without notice may be charged.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="/assets/Rectangle%2025%20(2).webp" alt="New Moon Manifestation &amp; Intention Setting" class="tab-image" width="500" height="350" loading="lazy">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹599 | $23 USD</span>
                            </div>
                            <a href="/contact" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div>
                
                <div id="New Moon Healing &amp; Meditation" class="tab-content">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                45 Mins
                            </div>
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z"></path>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z"></path>
                                </svg>
                                Online
                            </div>
                            <div class="tab-badge">
                                <img src="/pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Group
                            </div>
                        </div>
                        <h3 style="font-family: 'DM Sans'; font-weight: 700; font-size: 40px; line-height: 48px; color: #FCF7FE; margin: 0 0 16px 0;">New Moon Healing &amp; Meditation</h3>
                        <p style="font-family: 'DM Sans'; font-weight: 400; font-size: 20px; line-height: 100%; letter-spacing: 10%; text-transform: uppercase; color: #FCF7FECC; margin: 0 0 24px 0;"> Set Intentions. Plant Seeds. Manifest.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 100%; color: #A07AA9; margin: 0 0 24px 0;"> The New Moon marks a fresh start and the perfect time to plant seeds of intention. This group healing session helps you clear your energetic field, anchor new goals, and amplify your manifestation power. Harness the collective energy to manifest abundance and spiritual renewal.</p>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Aura Cleansing</p>
                                <p>Breathwork</p>
                                <p>Relaxing Meditation</p>
                                <p>“Make a Wish” Intention Setting</p>
                                <p>Manifestation Rituals</p>
                                <p>Deep Healing</p>
                                <p>Chakra Balancing</p>
                                <p>Root Chakra Activation</p>
                                <p>Releasing Limiting Beliefs</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Clear energetic blocks for new beginnings</p>
                                <p>Boost your manifestation energy</p>
                                <p>Align your aura with cosmic cycles</p>
                                <p>Deepen your connection to divine guidance</p>
                                <p>Reactivate inner abundance</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>
                                    Vision boards, intention setting, career growth, and fulfilling material goals
                                </p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p> Please provide at least 24 hours notice for cancellations.</p>
                                <p>Missed appointments without notice may be charged.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="/assets/Rectangle%2025%20(3).webp" alt="Personalized Dynamic Energy Healing" class="tab-image" width="500" height="350" loading="lazy">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹599 | $23 USD</span>
                            </div>
                            <a href="/contact" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div>
                
                <div id="Aura Scanning, Reading &amp; Cleansing Session" class="tab-content">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                20 Mins
                            </div>
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z"></path>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z"></path>
                                </svg>
                                Online
                            </div>
                            <div class="tab-badge">
                                <img src="/pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Individual
                            </div>
                        </div>
                        <h3 style="font-family: 'DM Sans'; font-weight: 700; font-size: 40px; line-height: 48px; color: #FCF7FE; margin: 0 0 16px 0;">Aura Scanning, Reading &amp; Cleansing Session</h3>
                        <p style="font-family: 'DM Sans'; font-weight: 400; font-size: 20px; line-height: 100%; letter-spacing: 10%; text-transform: uppercase; color: #FCF7FECC; margin: 0 0 24px 0;">Reveal. Heal. Shine.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 100%; color: #A07AA9; margin: 0 0 24px 0;">Have you ever walked into a space and felt a heaviness, unease, or a strange presence, without any visible reason? These sensations often signal energetic imprints left by past trauma, illness, emotional upheavals, or even entities. Such stagnant energy can silently affect your mood, productivity, relationships, and overall well-being.

                            Curious about what your aura reveals? In this focused session, discover insights about your current life, emotions, and spiritual journey. You’ll receive an intuitive scan and reading of your aura and surrounding space to identify blockages, past-life imprints, or stress points, followed by a gentle cleansing to restore energetic balance and brightness.</p>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Intuitive aura scan and reading</p>
                                <p>Identification of energetic blocks</p>
                                <p>Brief chakra balancing</p>
                                <p>Light aura cleansing</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Gain clarity on hidden energetic influences</p>
                                <p>Release stress and emotional heaviness</p>
                                <p>Feel refreshed and energetically lighter</p>
                                <p>Understand your spiritual path on a deeper level</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Quick energetic check-ups or spiritual clarity</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy</span>
                                <img src="/dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p> Please provide at least 24 hours notice for cancellations.</p>
                                <p>Missed appointments without notice may be charged.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="/assets/Rectangle%2025%20(4).webp" alt="Sacred Space Clearing &amp; Energetic Cleansing" class="tab-image" width="500" height="350" loading="lazy">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹2099 | $39.99 USD</span>
                            </div>
                            <a href="/contact" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div>
                
                <!-- <div id="tab6" class="tab-content">
                    <div class="tab-content-left">
                        <div class="badge-container">
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8337 7.50033C12.8337 10.7203 10.2203 13.3337 7.00033 13.3337C3.78033 13.3337 1.16699 10.7203 1.16699 7.50033C1.16699 4.28033 3.78033 1.66699 7.00033 1.66699C10.2203 1.66699 12.8337 4.28033 12.8337 7.50033Z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.16418 9.35503L7.35585 8.27586C7.04085 8.08919 6.78418 7.64003 6.78418 7.27253V4.88086" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                45 Mins
                            </div>
                            <div class="tab-badge">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99969 8.33434C8.00485 8.33434 8.81969 7.51949 8.81969 6.51434C8.81969 5.50918 8.00485 4.69434 6.99969 4.69434C5.99453 4.69434 5.17969 5.50918 5.17969 6.51434C5.17969 7.51949 5.99453 8.33434 6.99969 8.33434Z"/>
                                    <path d="M2.11133 5.45283C3.2605 0.40116 10.7447 0.406994 11.888 5.45866C12.5588 8.42199 10.7155 10.9303 9.09967 12.482C7.92717 13.6137 6.07217 13.6137 4.89383 12.482C3.28383 10.9303 1.4405 8.41616 2.11133 5.45283Z"/>
                                </svg>
                                Online
                            </div>
                            <div class="tab-badge">
                                <img src="pill3.svg" alt="Individual" style="width: 14px; height: 14px; margin-right: 4px;">
                                Individual
                            </div>
                        </div>
                        <h3 style="font-family: 'DM Sans'; font-weight: 700; font-size: 40px; line-height: 48px; color: #FCF7FE; margin: 0 0 16px 0;">Bach Flower Remedies</h3>
                        <p style="font-family: 'DM Sans'; font-weight: 400; font-size: 20px; line-height: 100%; letter-spacing: 10%; text-transform: uppercase; color: #FCF7FECC; margin: 0 0 24px 0;">Emotional Balance. Inner Clarity. Gentle Yet Powerful Healing.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 1.6; color: #A07AA9; margin: 0 0 24px 0;">Bach Flower Remedies are natural, vibrational plant essences that work subtly yet powerfully to restore emotional harmony, support mental well-being, and unlock inner strength.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 500; font-size: 16px; line-height: 1.6; color: #A07AA9; margin: 0 0 24px 0;">Handpicked from flowers in their highest energetic state, these remedies don't suppress symptoms, they gently shift the emotional patterns at the root of imbalance, creating space for healing, growth, and peace.</p>
                        <p style="font-family: 'DM Sans'; font-weight: 600; font-size: 16px; line-height: 1.6; color: #FCF7FE; margin: 0 0 24px 0;">Ready to feel lighter, calmer, and more balanced?</p>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>What This Session Includes:</span>
                                <img src="dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Personalized consultation, custom flower essence selection, and a tailored blend to support your emotional well-being.</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Why Join This Session?</span>
                                <img src="dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Experience gentle yet powerful emotional support that works in harmony with your body's natural healing abilities.</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Perfect For:</span>
                                <img src="dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>Anyone experiencing emotional challenges, stress, or seeking natural support for mental well-being and personal growth.</p>
                            </div>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-header">
                                <span>Cancellation Policy:</span>
                                <img src="dropd.svg" alt="Toggle dropdown" class="dropdown-icon" width="16" height="16">
                            </div>
                            <div class="dropdown-content">
                                <p>24-hour cancellation notice required for rescheduling. No refunds for no-shows.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content-right">
                        <img src="Rectangle 25 (5).png" alt="Bach Flower Remedies" class="tab-image">
                        <div class="pricing">
                            <div class="energy-exchange">
                                <span class="exchange-label">Energy Exchange:</span>
                                <span class="exchange-amount">₹599 | $23 USD</span>
                            </div>
                            <a href="form.html" class="book-now" style="text-decoration: none;">Reserve a spot</a>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
    
    <!-- Yellow Spacer with Services -->
    <section class="yellow-spacer" style="background: #FAF0D2; padding: 60px 0; width: 100%;">
        <div style="max-width: 1282px; margin: 0 auto; padding: 0 20px;">
            <div style="max-width: 1136px; margin: 0 auto; padding: 0 25px 25px 25px;">
                <div style="margin-bottom: 80px;">
                    <h2 style="font-family: 'DM Sans', serif; font-weight: 700; font-size: 36px; line-height: 100%; letter-spacing: 0%; color: #4F1C4C; margin-bottom: 12px; text-align: left;">
                        Quantum Healing Workshop
                    </h2>
                    <div style="height: 1px; background-color: #000000; width: 100%;"></div>
                </div>
                
                <!-- Services Section -->
                <div style="font-family: DM Sans;
                    font-weight: 600;
                    font-size: 24px;
                    letter-spacing: 8%;
                    text-transform: uppercase;
                    text-align: left;
                    color: #948558;
                    margin-bottom: -20px;
                ">OUR SPECIALIZED OFFERINGS
                </div>
            </div>
        <div class="container" style="align-items: baseline; height: auto; margin: 0; padding: 0;">
            <section class="services mobile-scrollable" style="margin: 0; padding: 0;">
                <div class="services-grid">
                    <!-- Card 1: Students -->
                    <div class="service-card" style="--bg-image: url('assets/1.webp')">
                        <div class="card-panel">
                            <div class="panel-header">
                                <h3 class="panel-title">Students</h3>
                                <img src="/uparrow.svg" alt="" class="arrow-icon">
                            </div>
                            <div class="panel-body">
                                <div class="panel-desc-initial">
                                    <p>Ready to boost focus and feel more confident in exams?</p>
                                </div>
                                <div class="panel-desc-expanded">
                                    <ul>
                                        <li>Quantum Reiki Grid supports clarity, memory, and confidence for students.</li>
                                        <li>Energy that helps you study smarter, sleep deeper, and show up stronger.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- Card 2: Young Adults -->
                    <div class="service-card" style="--bg-image: url('assets/2.webp')">
                        <div class="card-panel">
                            <div class="panel-header">
                                <h3 class="panel-title">Young Adults</h3>
                                <img src="/uparrow.svg" alt="" class="arrow-icon">
                            </div>
                            <div class="panel-body">
                                <div class="panel-desc-initial">
                                    <p>Building your career and looking to invite more abundance?</p>
                                </div>
                                <div class="panel-desc-expanded">
                                    <ul>
                                        <li>Quantum Reiki helps clear financial blocks and attract new opportunities.</li>
                                        <li>Experience energy shifts that align you with prosperity and success.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- Card 3: Midlife Professionals -->
                    <div class="service-card" style="--bg-image: url('assets/3.webp')">
                        <div class="card-panel">
                            <div class="panel-header">
                                <h3 class="panel-title">Midlife Professionals</h3>
                                <img src="/uparrow.svg" alt="" class="arrow-icon">
                            </div>
                            <div class="panel-body">
                                <div class="panel-desc-initial">
                                    <p>Seeking the next leap in your career and energy?</p>
                                </div>
                                <div class="panel-desc-expanded">
                                    <ul>
                                        <li>Overcome mid-career slumps and rediscover your professional passion.</li>
                                        <li>Quantum Reiki enhances vitality, focus, and leadership presence.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- Card 4: Late Bloomers -->
                    <div class="service-card" style="--bg-image: url('assets/4.webp')">
                        <div class="card-panel">
                            <div class="panel-header">
                                <h3 class="panel-title">Late Bloomers</h3>
                                <img src="/uparrow.svg" alt="" class="arrow-icon">
                            </div>
                            <div class="panel-body">
                                <div class="panel-desc-initial">
                                    <p>It's never too late to feel aligned, fulfilled, and financially free.</p>
                                </div>
                                <div class="panel-desc-expanded">
                                    <ul>
                                        <li>Embrace your golden years with renewed purpose and vibrant energy.</li>
                                        <li>Quantum Reiki supports emotional balance, joy, and a deep sense of fulfillment.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
                <section class="cta-section mobile-cta" style="width: 830px;
    height: 114px;
    gap: 120px;
    border-radius: 10px;
    padding: 24px;
    background: #E9E0C4;
    display: flex;
        margin-left: 260px;
    
    ">
                    <div style="width: 384px;
    height: 66px;font-family: DM Sans;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 6%;
    color: #000000;
    ">Want to Know More
                        <span style="font-family: DM Sans;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 6%;
    ">?<br>Join the webinar @₹99/</span>
                    </div>
                    <a href="/contact" class="cta-btn purple" style="display: inline-flex; align-items: center; justify-content: center; width: 232px; height: 44px; border-radius: 5px; text-decoration: none; padding: 12px 35px 12px 35px; font-size: 14px; line-height: 1.2; margin-top: 20px; background-color:#30112E; color: #F2DA91; position: relative; overflow: hidden;">
                        <span style="position: relative; z-index: 2;">Reserve Your Spot</span>
                    </a>
                    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-hamburger img {
                width: 100%;
                height: auto;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: "DM Sans", sans-serif;
                transition: color 0.3s ease;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
                            .cta-btn.purple:hover .frame-decoration {
                            opacity: 1;
                        }
                        .cta-btn.purple:hover .frame-left {
                            left: 16px;
                            animation: fadeInLeft 0.5s;
                        }
                        .cta-btn.purple:hover .frame-right {
                            right: 16px;
                            animation: fadeInRight 0.5s ;
                        }
                    </style>
                </section>
            </section>
        </div>
    </div></section>

    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
            /* Services Grid Styles */
        .services {
            padding: 0 2rem 0 2rem;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scroll-padding: 2rem;
            gap: 2rem;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            flex-direction: column;
            margin: 0 auto;
            align-items: center;
            width: 100%;
        }

        .services h2 {
            text-align: center;
            font-size: 2.5rem;
            color: #4a1a4a;
            margin-bottom: 1.5rem;
        }

        .services-grid {
            width: 100%;
            max-width: 1120px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin: 0 auto;
            padding: 20px 0;
            justify-items: center;
        }

        .service-card {
            width: 100%;
            max-width: 300px;
            height: 323px;
            border-radius: 10px;
            background: var(--bg-image) center center / cover no-repeat;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            margin: 0 auto;
        }

        .card-panel {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 130px;
            background: rgba(30, 10, 30, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            color: white;
            padding: 20px;
            transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card.expanded .card-panel {
            height: 260px;
        }

        .service-card .panel-desc-expanded {
            display: none;
        }

        .service-card.expanded .panel-title,
        .service-card.expanded .panel-desc-initial {
            display: none;
        }

        .service-card.expanded .panel-desc-expanded {
            display: block;
            opacity: 1;
            position: static;
            padding-top: 0;
        }

        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            position: relative;
            padding-right: 30px; /* Make space for the arrow */
        }

        .panel-title {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 18px;
            margin: 0;
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: transform 0.3s ease;
        }

        .service-card.expanded .arrow-icon {
            transform: translateY(-50%) rotate(180deg);
        }

        .panel-body {
            position: relative;
            height: 100%;
            overflow: hidden;
        }

        .panel-desc-initial p {
            margin: 0;
            font-family: 'DM Sans', sans-serif;
            font-size: 16px;
            line-height: 1.4;
            font-weight: 500;
        }

        .panel-desc-expanded {
            opacity: 0;
            transition: opacity 0.3s ease;
            height: 100%;
            overflow-y: auto;
        }

        .service-card.expanded .panel-desc-expanded {
            top: 0;
            opacity: 1;
        }

        .panel-desc-expanded ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .panel-desc-expanded li {
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 8px;
            position: relative;
            padding-left: 15px;
        }

        @media (max-width: 1024px) {
            .services-grid {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                padding: 20px 10px;
                margin: 0 10px;
                scroll-padding: 0 20px;
                scroll-behavior: smooth;
                scrollbar-width: none;
            }
            
            .services-grid::-webkit-scrollbar {
                display: none;
            }
            
            .service-card {
                flex: 0 0 280px;
                scroll-snap-align: start;
                margin: 0 5px;
            }
        }
    </style>

    
    

    <!-- Quantum Grid Section -->
    <section class="quantum-section">
        <div class="quantum-content">
            <div class="quantum-text">
                <h2>The Quantum Grid</h2>
                <p>So what happens after the webinar?</p>
                <ul>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>24x7 Remote Healing Access</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>Chakra Cleansing &amp; Manifestation Work</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>Weekly Zoom Healing Circles</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>Voice Note Affirmations</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>Spiritual Shielding</p>
                        </div>
                    </li>
                    <li>
                        <div class="list-item">
                            <img src="/frame.svg" alt="pointer">
                            <p>Grid Access Activated by Antahkarana Symbol</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chakra-animation-container">
                <img src="/assets/Chakras.webp" alt="Chakra 7" class="chakra-img active">
                <img src="/assets/Chakras1.webp" alt="Chakra 1" class="chakra-img">
                <img src="/assets/Chakras2.webp" alt="Chakra 2" class="chakra-img">
                <img src="/assets/Chakras3.webp" alt="Chakra 3" class="chakra-img">
                <img src="/assets/Chakras4.webp" alt="Chakra 4" class="chakra-img">
                <img src="/assets/Chakras5.webp" alt="Chakra 5" class="chakra-img">
                <img src="/assets/Chakras6.webp" alt="Chakra 6" class="chakra-img">
            </div>
        </div>
    </section>

    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-hamburger img {
                width: 100%;
                height: auto;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
                
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: "DM Sans", sans-serif;
                transition: color 0.3s ease;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
            /* Button Hover Animations */
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-10px) translateY(-50%);
            }
            to {
                opacity: 1;
                transform: translateX(0) translateY(-50%);
            }
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(10px) translateY(-50%) rotate(180deg);
            }
            to {
                opacity: 1;
                transform: translateX(0) translateY(-50%) rotate(180deg);
            }
        }

        .cta-btn {
            position: relative;
            overflow: hidden;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 40px;
            font-family: "DM Sans", sans-serif;
            font-weight: 600;
            font-size: 1.1rem;
            color: #4a1a4a;
            text-decoration: none;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #f8efc8 0%, #f5e3a1 100%);
            transition: all 0.3s ease;
            margin: 0 5px;
        }

        .cta-btn.purple {
            background: radial-gradient(100.3% 100.3% at 102.84% 0%, #4f1c4c 0%, #30112e 100%);
            color: #f2da91;
        }

        .cta-btn::before,
        .cta-btn::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background-size: contain;
            background-repeat: no-repeat;
            transition: all 0.3s ease;
            opacity: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .cta-btn::before {
            left: 15px;
            background-image: url("frame1.svg");
        }

        .cta-btn::after {
            right: 15px;
            background-image: url("frame1.svg");
            transform: translateY(-50%) rotate(180deg);
        }

        .cta-btn:hover::before,
        .cta-btn:hover::after {
            opacity: 1 !important;
        }
        
        /* Make frames always visible on mobile */
        @media (max-width: 767px) {
            .cta-btn::before,
            .cta-btn::after {
                opacity: 1 !important;
            }
            .testimonial-container{
            gap: 24px;}
            .cta-btn::before {
                left: 20px !important;
            }
            
            .cta-btn::after {
                right: 20px !important;
            }
        }

        .cta-btn:hover::before {
            left: 20px;
            animation: fadeInLeft 0.5s ease-out;
        }

        .cta-btn:hover::after {
            right: 20px;
            animation: fadeInRight 0.5s ease-out;
        }

        .cta-btn.purple::before,
        .cta-btn.purple::after {
            background-image: url("frame.svg");
        }

        /* Quantum Grid Section */
        .quantum-section {
            padding: 80px 0;
            background-image: url('assets/rectangle14.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .quantum-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }
        
        .quantum-text {
            max-width: 600px;
        }
        
        .quantum-text h2 {
            font-family: 'DM Sans', serif;
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        
        .quantum-text p {
            font-family: 'DM Sans', sans-serif;
            font-size: 20px;
            color: #B7A2B6;
            margin-bottom: 30px;
        }
        
        .quantum-text ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .quantum-text li {
            margin-bottom: 15px;
        }
        .quantum-text h2{
            font-size: 36px;
        }
        .list-item {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .list-item img {
            width: 24px;
            height: 24px;
        }
        
        .list-item p {
            margin: 0;
            font-family: 'DM Sans', sans-serif;
            font-size: 18px;
            color: #F2DA91;
        }
        
        .chakra-animation-container {
            position: relative;
            width: 400px;
            height: 400px;
        }
        
        .chakra-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        
        .chakra-img.active {
            opacity: 1;
        }
        
        @media (max-width: 767px) {
            .quantum-content {
                flex-direction: column;
                text-align: left;
            }
            
            .quantum-text {
                margin-bottom: 40px;
                text-align: left;
            }
            
            .list-item {
                justify-content: flex-start;
                text-align: left;
            }
            
            .chakra-animation-container {
                width: 300px;
                height: 300px;
                margin: 0 auto;
            }
            
            /* Ensure badge container fits all badges in one row on mobile */
            .badge-container {
                flex-wrap: nowrap;
                justify-content: space-between;
                width: 100%;
                margin-top: 20px;
            }
            
            .tab-badge {
                flex: 1;
                min-width: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                padding: 5px 4px;
                font-size: 12px;
            }
            
            .tab-badge img {
                width: 12px;
                height: 12px;
                margin-right: 3px;
            }
            
            /* Mobile CTA Section */
            .mobile-cta {
                width: 354px !important;
                height: 255px !important;
                top: 2646px;
                left: 18px;
                border-radius: 10px;
                padding: 24px !important;
                gap: 64px !important;
                background: #E9E0C4 !important;
                flex-direction: column !important;
                align-items: flex-start !important;
                margin: 0 !important;
                box-sizing: border-box;
            }
            
            .mobile-cta > div {
                width: 100% !important;
                text-align: left !important;
                margin: 0 !important;
                padding: 0 !important;
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 500 !important;
                font-size: 20px !important;
                line-height: 1.3 !important;
                color: #000000 !important;
            }
            
            .mobile-cta .cta-btn {
                left: 64px !important;
                height: 60px !important;
                padding: 12px 8px !important;
                margin: 0 !important;
                border-radius: 5px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                background-color: #30112E !important;
                color: #F2DA91 !important;
                text-decoration: none !important;
                font-size: 14px !important;
                line-height: 1.2 !important;
            }
            
            /* Show frames only on mobile */
            .mobile-cta .frame-decoration {
                display: none;
            }
            
            .mobile-cta .frame-left {
                display: block !important;
                left: 10px !important;
                opacity: 1 !important;
            }
            
            .mobile-cta .frame-right {
                display: block !important;
                right: 10px !important;
                opacity: 1 !important;
            }
        }
    </style>

    
    
    

    <!-- Testimonial Section -->
    <section class="testimonial-section" style="padding: 80px 0; width: 100%; max-width: 100%; overflow: hidden; -ms-overflow-style: none; scrollbar-width: none;">
        <div style="max-width: 1282px; width: 100%; margin: 0 auto; padding: 0 20px;">
            <h1 style="text-align: center; margin-bottom: 40px; font-family: 'DM Sans', serif;">Real Transformations</h1>
            <div class="testimonial-carousel">
                <div class="btn-container">
                    <button class="carousel-button prev" aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#7C4681" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button class="carousel-button next" aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#7C4681" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="testimonial-container">
                    <div class="testimonial">
                        <!-- <img src="1.png" alt="Person 1"> -->
                        <div class="testimonial-text">
                            <p>"I've felt a lot of relief from tension throughout the sessions Reckhha Mam. I feel "lighter" and more in-tune with myself after a session, and I am more prepared to deal with life's challenges.I also feel motivated and reaffirmed that I'm spiritually exactly where I should be.Grateful to you mam🙏🏼😊."
                            </p>
                            <span>Kusum Sharma</span>
                        </div>
                    </div>
                    <div class="testimonial">
                        <!-- <img src="2.png" alt="Person 2"> -->
                        <div class="testimonial-text">
                            <p>"I have been member of Soul family for six months now. I have taken personal and group healings from Mam. Also attended workshop on Hanuman Raksha Kavach and Candle Manifestation. Candle manifestation workshop has really worked like magic as 3 out of my 4 wishes got manifested effortlessly including Marriage. 😃"</p>
                            <span>Harshada</span>
                        </div>
                    </div>
                    <div class="testimonial">
                        <!-- <img src="3.png" alt="Person 3"> -->
                        <div class="testimonial-text">
                            <p>"Hiee this is my testimonial for mam initially I saw her on you tube n took a lot of sessions on you tube and it really helped me a lot n then I joined this wats app community and personally took a healing session with her it was soo powerful n amazing 👏🎉 I got instant relief in many aspects of my life and I m continuing with her sessions 🙏❤️ thank you soo much mam gratitude"</p>
                            <span>Priyanka</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-hamburger img {
                width: 100%;
                height: auto;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: "DM Sans", sans-serif;
                transition: color 0.3s ease;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
            /* Testimonial Section */
        .testimonial-section {
            text-align: center;
            padding: 2rem 0 1rem 0;
            position: relative;
            background-color: #f4defa;
            overflow: hidden;
        }

        .testimonial-section h1 {
            font-family: 'DM Sans', serif;
            font-weight: 700;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0;
            color: #4F1C4C;
            margin: 70px 0 2.5rem 0;
        }

        .testimonial-carousel {
            position: relative;
            width: 100%;
            max-width: 1558px;
            margin: 0 auto;
            overflow: hidden;
            padding: 2rem 0;
            padding-left: 40px;
        }

        .testimonial-container {
            display: flex;
            width: 100%;
            max-width: 1558px;
            height: 400px;
            gap: 50px;
            margin: 0;
            transition: transform 0.5s ease;
            scroll-behavior: smooth;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 1rem 0 1rem 40px;
            box-sizing: border-box;
            scroll-padding-left: 40px;
        }

        .testimonial-container .testimonial:first-child {
            margin-left: 0;
            scroll-margin-left: 40px;
        }

        .testimonial {
            width: 763px;
            height: 355px;
            border: 1px solid #30112E;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 18px;
            gap: 24px;
            flex-shrink: 0;
            background: transparent;
            box-sizing: border-box;
            scroll-snap-align: start;
            margin-right: 0;
        }

        .testimonial:not(.testimonial-mobile) img {
            width: 362px;
            height: 319px;
            flex-shrink: 0;
            object-fit: cover;
            margin: 0;
            border-radius: 5px;
            border: none;
            align-self: flex-start;
        }

        .testimonial-text {
            flex: 1;
            display: flex;
            width: 341px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: left;
            margin: 3rem 0 0 0;
            padding: 0 1rem;
        }

        .testimonial p {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 28px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #4F1C4C;
            margin-bottom: 1rem;
            width: 100%;
            height: auto;
            min-height: 140px;
            display: block;
            text-align: left;
        }

        .testimonial span {
            font-family: 'DM Sans', serif;
            font-weight: 500;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #997B97;
            width: 100%;
            display: block;
            text-align: left;
            margin-top: 0.5rem;
        }

        .carousel-button {
            border: 2px solid #4F1C4C;
            background-color: transparent;
            border-radius: 50%;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            padding: 0;
        }

        .carousel-button:hover {
            background: #ffffff;
            transform: scale(1.05);
        }

        .btn-container {
            position: absolute;
            right: 1rem;
            top: 0.5rem;
            width: 90px;
            display: flex;
            justify-content: space-between;
            z-index: 10;
            gap: 8px;
        }
        
        @media (max-width: 768px) {
            .btn-container {
                position: relative;
                right: -100px;
                top: auto;
                margin: 0 auto 1.5rem;
                justify-content: center;
                width: 100%;
                padding: 0 20px;
                box-sizing: border-box;
            }
        }

        @media (max-width: 768px) {
            .testimonial-carousel {
                overflow: hidden;
                position: relative;
                padding: 0 20px 40px;
                -ms-overflow-style: none;
                scrollbar-width: none;
            }

            .testimonial-container {
                display: flex;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                scroll-padding: 0 20px;
                padding: 0 0 20px;
                margin: 0 -10px;
                /* Hide scrollbar by using a negative margin and padding */
                overflow-x: scroll;
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
                /* Hide scrollbar for WebKit/Blink */
                scrollbar-color: transparent transparent;
                scrollbar-width: 0;
            }
            
            /* Completely hide scrollbar for WebKit browsers */
            .testimonial-container::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
                background: transparent;
                -webkit-appearance: none;
            }
            
            .testimonial-container::-webkit-scrollbar-thumb {
                background: transparent;
                display: none;
            }
            
            .testimonial-container::-webkit-scrollbar-track {
                background: transparent;
                display: none;
            }
            
            /* Ensure all testimonial related elements hide scrollbars */
            .testimonial-section,
            .testimonial-carousel,
            .testimonial-container {
                -ms-overflow-style: none;
                scrollbar-width: none;
                -webkit-overflow-scrolling: touch;
            }
            
            .testimonial-section::-webkit-scrollbar,
            .testimonial-carousel::-webkit-scrollbar,
            .testimonial-container::-webkit-scrollbar {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                background: transparent !important;
            }
            
            .testimonial {
                flex: 0 0 85%;
                min-width: 85%;
                max-width: 85%;
                height: auto;
                min-height: 400px;
                margin-right: 15px;
                scroll-snap-align: start;
                background: #F4DEFA;
                border: 1px solid #30112E;
                border-radius: 10px;
                padding: 20px;
                position: relative;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            /* Show part of the next testimonial */
            .testimonial:not(:last-child) {
                margin-right: -15%;
            }
            
            .testimonial img {
                width: 220px !important;
                height: 200px !important;
                max-width: 220px !important;
                max-height: 200px !important;
                border-radius: 5px !important;
                object-fit: cover !important;
                margin: 0 auto !important;
                display: block !important;
                flex-shrink: 0 !important;
            }
            
            .testimonial-text {
                width: 100% !important;
                height: auto !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 500 !important;
                font-size: 26px !important;
                line-height: 1.3 !important;
                letter-spacing: 0 !important;
                margin: 0 !important;
                padding: 12px 0 0 !important;
                flex-grow: 1 !important;
                color: #30112E !important;
            }

            .testimonial p,
            .testimonial span {
                min-height: auto;
                font-size: 1.14rem;
            }
            .tab-content-left {
                left: -7px;
                margin-top: 390px;
            }
            .tab-content-right {
                text-align: center;
                display: flex;
                left: -.5px;
                top:-5px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                width: 100%;
                padding: 0 15px;
                box-sizing: border-box;
            }
        }
    </style>

    

    <!-- Final CTA -->
    <div class="final-cta-wrapper">
        <section class="final-cta-section" id="book">
            <div class="final-cta-bg">
                <img src="/assets/group3.webp" alt="Stars Background" class="cta-bg-stars">
                <picture>
                    <source media="(max-width: 768px)" srcset="assets/Ellipse17.svg">
                    <img src="/assets/Ellipse15.webp" alt="Moon Arc" class="cta-bg-arc">
                </picture>

                <div class="final-cta-content">
                    <h2>Only 10 Webinar seats Open for this Month</h2>
                    <div class="final-cta-price" style="margin-bottom: 30px;">Just At <span>₹99</span></div>
                    <a href="/contact" class="cta-btn final-cta-button" style="display: inline-flex; align-items: center; justify-content: center; width: 180px; height: 40px; border-radius: 5px; text-decoration: none; padding: 8px 10px; font-size: 14px; line-height: 1.2; margin-top: 15px; background: #F2DA91; color: #4F1C4C; font-family: 'DM Sans', sans-serif; font-weight: 600; position: relative; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        <span class="final-cta-text">Reserve a Spot</span>
                    </a>
                </div>
            </div>
        </section>
    </div>

    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-hamburger img {
                width: 100%;
                height: auto;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: "DM Sans", sans-serif;
                transition: color 0.3s ease;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
            /* Final CTA Section */
        .final-cta-wrapper {
            position: relative;
            width: 100%;
            background: #f4defa;
            padding: 20px 0 0;
            margin-bottom: 40px !important;
        }

        /* Final CTA Button Frames - Mobile Only */
        .final-frame {
            position: absolute;
            width: 12px;
            height: 12px;
            background-image: url('frame1.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .final-frame-left {
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .final-frame-right {
            right: 12px;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
        }
        
        @media (max-width: 767px) {
            .final-cta-button {
                position: relative !important;
                padding-left: 30px !important;
                padding-right: 30px !important;
                width: 270px !important;
            }
            
            .final-cta-button .final-frame {
                opacity: 1;
            }
            
            .final-cta-button:hover .final-frame-left {
                left: 12px;
            }
            
            .final-cta-button:hover .final-frame-right {
                right: 12px;
            }
        }
        
        @media (max-width: 900px) {
            .final-cta-wrapper {
                margin-bottom: 20px !important;
            }
        }

        .final-cta-section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100px;
            position: relative;
            z-index: 1;
            padding-bottom: 80px !important;
        }

        .final-cta-bg {
            position: relative;
            width: 1300px;
            height: 683px;
            max-width: 95%;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 32px 0 rgba(40, 8, 40, 0.2);
            background: transparent;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }

        .cta-bg-stars {
            position: absolute;
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%;
            object-fit: cover;
            z-index: 1;
            pointer-events: none;
        }

        .cta-bg-arc {
            position: absolute;
            left: 50%;
            bottom: -60px;
            transform: translateX(-50%);
            width: 120%;
            height: 380px;
            max-width: 1400px;
            z-index: 7;
            pointer-events: none;
        }

        .final-cta-content {
            position: relative;
            z-index: 4;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 48px 32px 0 32px;
            box-sizing: border-box;
        }

        .final-cta-content h2 {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 2rem;
            color: #F2DA91;
            margin-bottom: 18px;
            text-align: center;
        }

        .final-cta-price {
            font-family: 'DM Sans', serif;
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 28px;
            text-align: center;
        }

        .final-cta-price span {
            font-size: 3.3rem;
        }

        .final-cta-content .cta-btn {
            margin-bottom: 50px;
            transition: all 0.3s ease;
        }

        .final-cta-content .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 900px) {
            .final-cta-bg {
                width: 100%;
                min-height: 700px;
                padding-bottom: 0;
                height: auto;
            }
            
            .final-cta-content {
                padding: 40px 20px 0;
                width: 100%;
                box-sizing: border-box;
            }
            
            .final-cta-content h2 {
                font-size: 1.8rem;
                margin-bottom: 15px;
            }
            
            .final-cta-price {
                font-size: 2.2rem;
                margin-bottom: 20px;
            }
            
            .final-cta-section {
                padding: 0;
                min-height: 100vh;
                display: flex;
                align-items: center;
            }
            
            .cta-bg-arc {
                bottom: 10px;
            }
        }
    </style>

    

    <!-- Footer -->
    

    <style>
        /* Mobile Menu Styles */
        @media (max-width: 1023px) {
            /* Hide desktop nav on mobile */
            .desktop-nav {
                display: none !important;
            }
            
            /* Mobile Menu Button */
            .mobile-hamburger {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                cursor: pointer;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-hamburger img {
                width: 50px;
                height: auto;
            }
            
            /* Mobile Menu Overlay */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #4F1C4C;
                z-index: 999;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .mobile-menu-overlay.active {
                display: flex;
                animation: fadeIn 0.3s ease;
            }
            
            .mobile-nav-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .mobile-nav-links a {
                color: white;
                text-decoration: none;
                font-family: "DM Sans", sans-serif;
                transition: color 0.3s ease;
            }
            
            .mobile-nav-links a:hover {
                color: #e4aef2;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Ensure the menu appears above other content */
            html, body {
                overflow-x: hidden;
                position: relative;
                width: 100%;
            }
        }
        
        @media (min-width: 1024px) {
            .mobile-menu-container, .mobile-hamburger, .mobile-menu-overlay {
                display: none !important;
            }
        }
            /* Footer Styles */
        footer {
            background: url("assets/rectangle17.webp") center center/cover no-repeat;
            padding: 35px 40px 0;
            color: #e4aef2;
            font-family: "DM Sans", sans-serif;
            min-height: 330px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
        }

        .footer-main {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            max-width: 1120px;
            width: 100%;
            margin: 0 auto;
            position: relative;
            padding: 0 20px;
            box-sizing: border-box;
            margin-bottom: 20px;
            flex-wrap: nowrap;
        }

        .footer-logo {
            flex: 0 0 auto;
            margin-right: 40px;
        }

        .footer-logo-img {
            max-width: 200px;
            height: auto;
        }

        .footer-content {
            display: flex;
            gap: 80px;
            justify-content: flex-end;
        }

        .footer-col {
            width: auto;
            min-width: 180px;
            text-align: left;
        }

        .footer-col h3 {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 24px;
            font-family: "Georgia", serif;
            text-align: left;
        }

        .footer-contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 16px;
            color: #e4aef2;
            margin-bottom: 18px;
            font-weight: 500;
        }
        
        /* Prevent phone numbers from being styled as links */
        .footer-contact-item span {
            color: #e4aef2 !important;
            text-decoration: none !important;
        }
        
        /* Target iOS specifically */
        .footer-contact-item a[href^="tel:"] {
            color: #e4aef2 !important;
            text-decoration: none !important;
        }

        .footer-icon {
            width: 24px;
            height: 24px;
            object-fit: contain;
            filter: none;
            display: inline-block;
            vertical-align: middle;
        }

        .footer-svg-line {
            display: block;
            width: calc(100% - 80px);
            max-width: 1120px;
            height: 1px;
            border: none;
            background: #e4aef2;
            opacity: 0.3;
            margin: 60px auto 20px;
        }

        .footer-bottom-text {
            text-align: left;
            width: calc(100% - 80px);
            max-width: 1120px;
            color: #e4aef2;
            font-family: "DM Sans", sans-serif;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 auto;
            padding-bottom: 20px;
            font-weight: 500;
            box-sizing: border-box;
        }

        @media (max-width: 900px) {
            /* Fix line height for Aura Scanning heading in mobile view */
            #tab5 h3 {
                line-height: 1.2 !important;
                margin-top: 0px !important;
                margin-bottom: 0px !important;
            }
            
            footer {
                padding: 40px 20px;
                min-height: auto;
            }

            .footer-main {
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
                gap: 30px;
                padding-bottom: 30px;
                max-width: 100%;
                width: 100%;
            }

            .footer-logo {
                margin-top: 0;
                margin-bottom: 20px;
                width: 100%;
                text-align: left;
            }

            .footer-content {
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                gap: 30px;
            }

            .footer-col {
                text-align: left;
                width: 100%;
            }

            .footer-col h3 {
                text-align: left;
                font-size: 1.5rem;
                margin-bottom: 15px;
            }

            .footer-svg-line {
                margin: 30px 0;
                width: 100%;
            }

            .footer-bottom-text {
                text-align: left;
                margin: 15px 0 30px;
                width: 100%;
                padding: 0;
            }
        }
    </style>
    <!-- Service Structured Data -->
    



</div>`;return(0,t.jsx)("div",{className:"page-wrapper services-wrapper",children:n(e)})}e.s(["default",()=>a],12774)}]);
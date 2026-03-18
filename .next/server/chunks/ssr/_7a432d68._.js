module.exports=[72829,(a,b,c)=>{"use strict";var d,e;Object.defineProperty(c,"__esModule",{value:!0}),c.Doctype=c.CDATA=c.Tag=c.Style=c.Script=c.Comment=c.Directive=c.Text=c.Root=c.isTag=c.ElementType=void 0,(e=d=c.ElementType||(c.ElementType={})).Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype",c.isTag=function(a){return a.type===d.Tag||a.type===d.Script||a.type===d.Style},c.Root=d.Root,c.Text=d.Text,c.Directive=d.Directive,c.Comment=d.Comment,c.Script=d.Script,c.Style=d.Style,c.Tag=d.Tag,c.CDATA=d.CDATA,c.Doctype=d.Doctype},7877,(a,b,c)=>{"use strict";var d,e=a.e&&a.e.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Class extends value "+String(b)+" is not a constructor or null");function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=a.e&&a.e.__assign||function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};Object.defineProperty(c,"__esModule",{value:!0}),c.cloneNode=c.hasChildren=c.isDocument=c.isDirective=c.isComment=c.isText=c.isCDATA=c.isTag=c.Element=c.Document=c.CDATA=c.NodeWithChildren=c.ProcessingInstruction=c.Comment=c.Text=c.DataNode=c.Node=void 0;var g=a.r(72829),h=function(){function a(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(a.prototype,"parentNode",{get:function(){return this.parent},set:function(a){this.parent=a},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"previousSibling",{get:function(){return this.prev},set:function(a){this.prev=a},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"nextSibling",{get:function(){return this.next},set:function(a){this.next=a},enumerable:!1,configurable:!0}),a.prototype.cloneNode=function(a){return void 0===a&&(a=!1),w(this,a)},a}();c.Node=h;var i=function(a){function b(b){var c=a.call(this)||this;return c.data=b,c}return e(b,a),Object.defineProperty(b.prototype,"nodeValue",{get:function(){return this.data},set:function(a){this.data=a},enumerable:!1,configurable:!0}),b}(h);c.DataNode=i;var j=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.type=g.ElementType.Text,b}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),b}(i);c.Text=j;var k=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.type=g.ElementType.Comment,b}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),b}(i);c.Comment=k;var l=function(a){function b(b,c){var d=a.call(this,c)||this;return d.name=b,d.type=g.ElementType.Directive,d}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),b}(i);c.ProcessingInstruction=l;var m=function(a){function b(b){var c=a.call(this)||this;return c.children=b,c}return e(b,a),Object.defineProperty(b.prototype,"firstChild",{get:function(){var a;return null!=(a=this.children[0])?a:null},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"childNodes",{get:function(){return this.children},set:function(a){this.children=a},enumerable:!1,configurable:!0}),b}(h);c.NodeWithChildren=m;var n=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.type=g.ElementType.CDATA,b}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),b}(m);c.CDATA=n;var o=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.type=g.ElementType.Root,b}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),b}(m);c.Document=o;var p=function(a){function b(b,c,d,e){void 0===d&&(d=[]),void 0===e&&(e="script"===b?g.ElementType.Script:"style"===b?g.ElementType.Style:g.ElementType.Tag);var f=a.call(this,d)||this;return f.name=b,f.attribs=c,f.type=e,f}return e(b,a),Object.defineProperty(b.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"tagName",{get:function(){return this.name},set:function(a){this.name=a},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"attributes",{get:function(){var a=this;return Object.keys(this.attribs).map(function(b){var c,d;return{name:b,value:a.attribs[b],namespace:null==(c=a["x-attribsNamespace"])?void 0:c[b],prefix:null==(d=a["x-attribsPrefix"])?void 0:d[b]}})},enumerable:!1,configurable:!0}),b}(m);function q(a){return(0,g.isTag)(a)}function r(a){return a.type===g.ElementType.CDATA}function s(a){return a.type===g.ElementType.Text}function t(a){return a.type===g.ElementType.Comment}function u(a){return a.type===g.ElementType.Directive}function v(a){return a.type===g.ElementType.Root}function w(a,b){if(void 0===b&&(b=!1),s(a))c=new j(a.data);else if(t(a))c=new k(a.data);else if(q(a)){var c,d=b?x(a.children):[],e=new p(a.name,f({},a.attribs),d);d.forEach(function(a){return a.parent=e}),null!=a.namespace&&(e.namespace=a.namespace),a["x-attribsNamespace"]&&(e["x-attribsNamespace"]=f({},a["x-attribsNamespace"])),a["x-attribsPrefix"]&&(e["x-attribsPrefix"]=f({},a["x-attribsPrefix"])),c=e}else if(r(a)){var d=b?x(a.children):[],g=new n(d);d.forEach(function(a){return a.parent=g}),c=g}else if(v(a)){var d=b?x(a.children):[],h=new o(d);d.forEach(function(a){return a.parent=h}),a["x-mode"]&&(h["x-mode"]=a["x-mode"]),c=h}else if(u(a)){var i=new l(a.name,a.data);null!=a["x-name"]&&(i["x-name"]=a["x-name"],i["x-publicId"]=a["x-publicId"],i["x-systemId"]=a["x-systemId"]),c=i}else throw Error("Not implemented yet: ".concat(a.type));return c.startIndex=a.startIndex,c.endIndex=a.endIndex,null!=a.sourceCodeLocation&&(c.sourceCodeLocation=a.sourceCodeLocation),c}function x(a){for(var b=a.map(function(a){return w(a,!0)}),c=1;c<b.length;c++)b[c].prev=b[c-1],b[c-1].next=b[c];return b}c.Element=p,c.isTag=q,c.isCDATA=r,c.isText=s,c.isComment=t,c.isDirective=u,c.isDocument=v,c.hasChildren=function(a){return Object.prototype.hasOwnProperty.call(a,"children")},c.cloneNode=w},97219,(a,b,c)=>{"use strict";var d=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),e=a.e&&a.e.__exportStar||function(a,b){for(var c in a)"default"===c||Object.prototype.hasOwnProperty.call(b,c)||d(b,a,c)};Object.defineProperty(c,"__esModule",{value:!0}),c.DomHandler=void 0;var f=a.r(72829),g=a.r(7877);e(a.r(7877),c);var h={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},i=function(){function a(a,b,c){this.dom=[],this.root=new g.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof b&&(c=b,b=h),"object"==typeof a&&(b=a,a=void 0),this.callback=null!=a?a:null,this.options=null!=b?b:h,this.elementCB=null!=c?c:null}return a.prototype.onparserinit=function(a){this.parser=a},a.prototype.onreset=function(){this.dom=[],this.root=new g.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(a){this.handleCallback(a)},a.prototype.onclosetag=function(){this.lastNode=null;var a=this.tagStack.pop();this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(a)},a.prototype.onopentag=function(a,b){var c=this.options.xmlMode?f.ElementType.Tag:void 0,d=new g.Element(a,b,void 0,c);this.addNode(d),this.tagStack.push(d)},a.prototype.ontext=function(a){var b=this.lastNode;if(b&&b.type===f.ElementType.Text)b.data+=a,this.options.withEndIndices&&(b.endIndex=this.parser.endIndex);else{var c=new g.Text(a);this.addNode(c),this.lastNode=c}},a.prototype.oncomment=function(a){if(this.lastNode&&this.lastNode.type===f.ElementType.Comment){this.lastNode.data+=a;return}var b=new g.Comment(a);this.addNode(b),this.lastNode=b},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var a=new g.Text(""),b=new g.CDATA([a]);this.addNode(b),a.parent=b,this.lastNode=a},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(a,b){var c=new g.ProcessingInstruction(a,b);this.addNode(c)},a.prototype.handleCallback=function(a){if("function"==typeof this.callback)this.callback(a,this.dom);else if(a)throw a},a.prototype.addNode=function(a){var b=this.tagStack[this.tagStack.length-1],c=b.children[b.children.length-1];this.options.withStartIndices&&(a.startIndex=this.parser.startIndex),this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),b.children.push(a),c&&(a.prev=c,c.next=a),a.parent=b,this.lastNode=null},a}();c.DomHandler=i,c.default=i},12734,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.escapeText=c.escapeAttribute=c.escapeUTF8=c.escape=c.encodeXML=c.getCodePoint=c.xmlReplacer=void 0,c.xmlReplacer=/["&'<>$\x80-\uFFFF]/g;var d=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]);function e(a){for(var b,e="",f=0;null!==(b=c.xmlReplacer.exec(a));){var g=b.index,h=a.charCodeAt(g),i=d.get(h);void 0!==i?(e+=a.substring(f,g)+i,f=g+1):(e+="".concat(a.substring(f,g),"&#x").concat((0,c.getCodePoint)(a,g).toString(16),";"),f=c.xmlReplacer.lastIndex+=Number((64512&h)==55296))}return e+a.substr(f)}function f(a,b){return function(c){for(var d,e=0,f="";d=a.exec(c);)e!==d.index&&(f+=c.substring(e,d.index)),f+=b.get(d[0].charCodeAt(0)),e=d.index+1;return f+c.substring(e)}}c.getCodePoint=null!=String.prototype.codePointAt?function(a,b){return a.codePointAt(b)}:function(a,b){return(64512&a.charCodeAt(b))==55296?(a.charCodeAt(b)-55296)*1024+a.charCodeAt(b+1)-56320+65536:a.charCodeAt(b)},c.encodeXML=e,c.escape=e,c.escapeUTF8=f(/[&<>'"]/g,d),c.escapeAttribute=f(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),c.escapeText=f(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},28956,(a,b,c)=>{"use strict";function d(a){for(var b=1;b<a.length;b++)a[b][0]+=a[b-1][0]+1;return a}Object.defineProperty(c,"__esModule",{value:!0}),c.default=new Map(d([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(d([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(d([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(d([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},55510,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.encodeNonAsciiHTML=c.encodeHTML=void 0;var e=d(a.r(28956)),f=a.r(12734),g=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;function h(a,b){for(var c,d="",g=0;null!==(c=a.exec(b));){var h=c.index;d+=b.substring(g,h);var i=b.charCodeAt(h),j=e.default.get(i);if("object"==typeof j){if(h+1<b.length){var k=b.charCodeAt(h+1),l="number"==typeof j.n?j.n===k?j.o:void 0:j.n.get(k);if(void 0!==l){d+=l,g=a.lastIndex+=1;continue}}j=j.v}if(void 0!==j)d+=j,g=h+1;else{var m=(0,f.getCodePoint)(b,h);d+="&#x".concat(m.toString(16),";"),g=a.lastIndex+=Number(m!==i)}}return d+b.substr(g)}c.encodeHTML=function(a){return h(g,a)},c.encodeNonAsciiHTML=function(a){return h(f.xmlReplacer,a)}},42326,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(a){return a.charCodeAt(0)}))},84937,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=new Uint16Array("Ȁaglq	\x15\x18\x1bɭ\x0f\0\0\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(a){return a.charCodeAt(0)}))},70770,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.replaceCodePoint=c.fromCodePoint=void 0;var d,e=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function f(a){var b;return a>=55296&&a<=57343||a>1114111?65533:null!=(b=e.get(a))?b:a}c.fromCodePoint=null!=(d=String.fromCodePoint)?d:function(a){var b="";return a>65535&&(a-=65536,b+=String.fromCharCode(a>>>10&1023|55296),a=56320|1023&a),b+=String.fromCharCode(a)},c.replaceCodePoint=f,c.default=function(a){return(0,c.fromCodePoint)(f(a))}},64664,(a,b,c)=>{"use strict";var d,e,f,g,h,i,j,k,l=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),m=a.e&&a.e.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),n=a.e&&a.e.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&l(b,a,c);return m(b,a),b},o=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.decodeXML=c.decodeHTMLStrict=c.decodeHTMLAttribute=c.decodeHTML=c.determineBranch=c.EntityDecoder=c.DecodingMode=c.BinTrieFlags=c.fromCodePoint=c.replaceCodePoint=c.decodeCodePoint=c.xmlDecodeTree=c.htmlDecodeTree=void 0;var p=o(a.r(42326));c.htmlDecodeTree=p.default;var q=o(a.r(84937));c.xmlDecodeTree=q.default;var r=n(a.r(70770));c.decodeCodePoint=r.default;var s=a.r(70770);function t(a){return a>=h.ZERO&&a<=h.NINE}Object.defineProperty(c,"replaceCodePoint",{enumerable:!0,get:function(){return s.replaceCodePoint}}),Object.defineProperty(c,"fromCodePoint",{enumerable:!0,get:function(){return s.fromCodePoint}}),(d=h||(h={}))[d.NUM=35]="NUM",d[d.SEMI=59]="SEMI",d[d.EQUALS=61]="EQUALS",d[d.ZERO=48]="ZERO",d[d.NINE=57]="NINE",d[d.LOWER_A=97]="LOWER_A",d[d.LOWER_F=102]="LOWER_F",d[d.LOWER_X=120]="LOWER_X",d[d.LOWER_Z=122]="LOWER_Z",d[d.UPPER_A=65]="UPPER_A",d[d.UPPER_F=70]="UPPER_F",d[d.UPPER_Z=90]="UPPER_Z",(e=i=c.BinTrieFlags||(c.BinTrieFlags={}))[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE",(f=j||(j={}))[f.EntityStart=0]="EntityStart",f[f.NumericStart=1]="NumericStart",f[f.NumericDecimal=2]="NumericDecimal",f[f.NumericHex=3]="NumericHex",f[f.NamedEntity=4]="NamedEntity",(g=k=c.DecodingMode||(c.DecodingMode={}))[g.Legacy=0]="Legacy",g[g.Strict=1]="Strict",g[g.Attribute=2]="Attribute";var u=function(){function a(a,b,c){this.decodeTree=a,this.emitCodePoint=b,this.errors=c,this.state=j.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=k.Strict}return a.prototype.startEntity=function(a){this.decodeMode=a,this.state=j.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},a.prototype.write=function(a,b){switch(this.state){case j.EntityStart:if(a.charCodeAt(b)===h.NUM)return this.state=j.NumericStart,this.consumed+=1,this.stateNumericStart(a,b+1);return this.state=j.NamedEntity,this.stateNamedEntity(a,b);case j.NumericStart:return this.stateNumericStart(a,b);case j.NumericDecimal:return this.stateNumericDecimal(a,b);case j.NumericHex:return this.stateNumericHex(a,b);case j.NamedEntity:return this.stateNamedEntity(a,b)}},a.prototype.stateNumericStart=function(a,b){return b>=a.length?-1:(32|a.charCodeAt(b))===h.LOWER_X?(this.state=j.NumericHex,this.consumed+=1,this.stateNumericHex(a,b+1)):(this.state=j.NumericDecimal,this.stateNumericDecimal(a,b))},a.prototype.addToNumericResult=function(a,b,c,d){if(b!==c){var e=c-b;this.result=this.result*Math.pow(d,e)+parseInt(a.substr(b,e),d),this.consumed+=e}},a.prototype.stateNumericHex=function(a,b){for(var c=b;b<a.length;){var d,e=a.charCodeAt(b);if(!t(e)&&(!((d=e)>=h.UPPER_A)||!(d<=h.UPPER_F))&&(!(d>=h.LOWER_A)||!(d<=h.LOWER_F)))return this.addToNumericResult(a,c,b,16),this.emitNumericEntity(e,3);b+=1}return this.addToNumericResult(a,c,b,16),-1},a.prototype.stateNumericDecimal=function(a,b){for(var c=b;b<a.length;){var d=a.charCodeAt(b);if(!t(d))return this.addToNumericResult(a,c,b,10),this.emitNumericEntity(d,2);b+=1}return this.addToNumericResult(a,c,b,10),-1},a.prototype.emitNumericEntity=function(a,b){var c;if(this.consumed<=b)return null==(c=this.errors)||c.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(a===h.SEMI)this.consumed+=1;else if(this.decodeMode===k.Strict)return 0;return this.emitCodePoint((0,r.replaceCodePoint)(this.result),this.consumed),this.errors&&(a!==h.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},a.prototype.stateNamedEntity=function(a,b){for(var c=this.decodeTree,d=c[this.treeIndex],e=(d&i.VALUE_LENGTH)>>14;b<a.length;b++,this.excess++){var f=a.charCodeAt(b);if(this.treeIndex=w(c,d,this.treeIndex+Math.max(1,e),f),this.treeIndex<0)return 0===this.result||this.decodeMode===k.Attribute&&(0===e||function(a){var b;return a===h.EQUALS||(b=a)>=h.UPPER_A&&b<=h.UPPER_Z||b>=h.LOWER_A&&b<=h.LOWER_Z||t(b)}(f))?0:this.emitNotTerminatedNamedEntity();if(0!=(e=((d=c[this.treeIndex])&i.VALUE_LENGTH)>>14)){if(f===h.SEMI)return this.emitNamedEntityData(this.treeIndex,e,this.consumed+this.excess);this.decodeMode!==k.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return -1},a.prototype.emitNotTerminatedNamedEntity=function(){var a,b=this.result,c=(this.decodeTree[b]&i.VALUE_LENGTH)>>14;return this.emitNamedEntityData(b,c,this.consumed),null==(a=this.errors)||a.missingSemicolonAfterCharacterReference(),this.consumed},a.prototype.emitNamedEntityData=function(a,b,c){var d=this.decodeTree;return this.emitCodePoint(1===b?d[a]&~i.VALUE_LENGTH:d[a+1],c),3===b&&this.emitCodePoint(d[a+2],c),c},a.prototype.end=function(){var a;switch(this.state){case j.NamedEntity:return 0!==this.result&&(this.decodeMode!==k.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case j.NumericDecimal:return this.emitNumericEntity(0,2);case j.NumericHex:return this.emitNumericEntity(0,3);case j.NumericStart:return null==(a=this.errors)||a.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case j.EntityStart:return 0}},a}();function v(a){var b="",c=new u(a,function(a){return b+=(0,r.fromCodePoint)(a)});return function(a,d){for(var e=0,f=0;(f=a.indexOf("&",f))>=0;){b+=a.slice(e,f),c.startEntity(d);var g=c.write(a,f+1);if(g<0){e=f+c.end();break}e=f+g,f=0===g?e+1:e}var h=b+a.slice(e);return b="",h}}function w(a,b,c,d){var e=(b&i.BRANCH_LENGTH)>>7,f=b&i.JUMP_TABLE;if(0===e)return 0!==f&&d===f?c:-1;if(f){var g=d-f;return g<0||g>=e?-1:a[c+g]-1}for(var h=c,j=h+e-1;h<=j;){var k=h+j>>>1,l=a[k];if(l<d)h=k+1;else{if(!(l>d))return a[k+e];j=k-1}}return -1}c.EntityDecoder=u,c.determineBranch=w;var x=v(p.default),y=v(q.default);c.decodeHTML=function(a,b){return void 0===b&&(b=k.Legacy),x(a,b)},c.decodeHTMLAttribute=function(a){return x(a,k.Attribute)},c.decodeHTMLStrict=function(a){return x(a,k.Strict)},c.decodeXML=function(a){return y(a,k.Strict)}},53528,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.decodeXMLStrict=c.decodeHTML5Strict=c.decodeHTML4Strict=c.decodeHTML5=c.decodeHTML4=c.decodeHTMLAttribute=c.decodeHTMLStrict=c.decodeHTML=c.decodeXML=c.DecodingMode=c.EntityDecoder=c.encodeHTML5=c.encodeHTML4=c.encodeNonAsciiHTML=c.encodeHTML=c.escapeText=c.escapeAttribute=c.escapeUTF8=c.escape=c.encodeXML=c.encode=c.decodeStrict=c.decode=c.EncodingMode=c.EntityLevel=void 0;var d,e,f,g,h=a.r(64664),i=a.r(55510),j=a.r(12734);function k(a,b){if(void 0===b&&(b=f.XML),("number"==typeof b?b:b.level)===f.HTML){var c="object"==typeof b?b.mode:void 0;return(0,h.decodeHTML)(a,c)}return(0,h.decodeXML)(a)}(d=f=c.EntityLevel||(c.EntityLevel={}))[d.XML=0]="XML",d[d.HTML=1]="HTML",(e=g=c.EncodingMode||(c.EncodingMode={}))[e.UTF8=0]="UTF8",e[e.ASCII=1]="ASCII",e[e.Extensive=2]="Extensive",e[e.Attribute=3]="Attribute",e[e.Text=4]="Text",c.decode=k,c.decodeStrict=function(a,b){void 0===b&&(b=f.XML);var c="number"==typeof b?{level:b}:b;return null!=c.mode||(c.mode=h.DecodingMode.Strict),k(a,c)},c.encode=function(a,b){void 0===b&&(b=f.XML);var c="number"==typeof b?{level:b}:b;return c.mode===g.UTF8?(0,j.escapeUTF8)(a):c.mode===g.Attribute?(0,j.escapeAttribute)(a):c.mode===g.Text?(0,j.escapeText)(a):c.level===f.HTML?c.mode===g.ASCII?(0,i.encodeNonAsciiHTML)(a):(0,i.encodeHTML)(a):(0,j.encodeXML)(a)};var l=a.r(12734);Object.defineProperty(c,"encodeXML",{enumerable:!0,get:function(){return l.encodeXML}}),Object.defineProperty(c,"escape",{enumerable:!0,get:function(){return l.escape}}),Object.defineProperty(c,"escapeUTF8",{enumerable:!0,get:function(){return l.escapeUTF8}}),Object.defineProperty(c,"escapeAttribute",{enumerable:!0,get:function(){return l.escapeAttribute}}),Object.defineProperty(c,"escapeText",{enumerable:!0,get:function(){return l.escapeText}});var m=a.r(55510);Object.defineProperty(c,"encodeHTML",{enumerable:!0,get:function(){return m.encodeHTML}}),Object.defineProperty(c,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return m.encodeNonAsciiHTML}}),Object.defineProperty(c,"encodeHTML4",{enumerable:!0,get:function(){return m.encodeHTML}}),Object.defineProperty(c,"encodeHTML5",{enumerable:!0,get:function(){return m.encodeHTML}});var n=a.r(64664);Object.defineProperty(c,"EntityDecoder",{enumerable:!0,get:function(){return n.EntityDecoder}}),Object.defineProperty(c,"DecodingMode",{enumerable:!0,get:function(){return n.DecodingMode}}),Object.defineProperty(c,"decodeXML",{enumerable:!0,get:function(){return n.decodeXML}}),Object.defineProperty(c,"decodeHTML",{enumerable:!0,get:function(){return n.decodeHTML}}),Object.defineProperty(c,"decodeHTMLStrict",{enumerable:!0,get:function(){return n.decodeHTMLStrict}}),Object.defineProperty(c,"decodeHTMLAttribute",{enumerable:!0,get:function(){return n.decodeHTMLAttribute}}),Object.defineProperty(c,"decodeHTML4",{enumerable:!0,get:function(){return n.decodeHTML}}),Object.defineProperty(c,"decodeHTML5",{enumerable:!0,get:function(){return n.decodeHTML}}),Object.defineProperty(c,"decodeHTML4Strict",{enumerable:!0,get:function(){return n.decodeHTMLStrict}}),Object.defineProperty(c,"decodeHTML5Strict",{enumerable:!0,get:function(){return n.decodeHTMLStrict}}),Object.defineProperty(c,"decodeXMLStrict",{enumerable:!0,get:function(){return n.decodeXML}})},18687,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.attributeNames=c.elementNames=void 0,c.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(function(a){return[a.toLowerCase(),a]})),c.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(function(a){return[a.toLowerCase(),a]}))},78881,(a,b,c)=>{"use strict";var d=a.e&&a.e.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},e=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),f=a.e&&a.e.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),g=a.e&&a.e.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&e(b,a,c);return f(b,a),b};Object.defineProperty(c,"__esModule",{value:!0}),c.render=void 0;var h=g(a.r(72829)),i=a.r(53528),j=a.r(18687),k=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function l(a){return a.replace(/"/g,"&quot;")}var m=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function n(a,b){void 0===b&&(b={});for(var c=("length"in a)?a:[a],e="",f=0;f<c.length;f++)e+=function(a,b){var c,e,f;switch(a.type){case h.Root:return n(a.children,b);case h.Doctype:case h.Directive:return c=a,"<".concat(c.data,">");case h.Comment:return e=a,"<!--".concat(e.data,"-->");case h.CDATA:return f=a,"<![CDATA[".concat(f.children[0].data,"]]>");case h.Script:case h.Style:case h.Tag:return function(a,b){"foreign"===b.xmlMode&&(a.name=null!=(c=j.elementNames.get(a.name))?c:a.name,a.parent&&o.has(a.parent.name)&&(b=d(d({},b),{xmlMode:!1}))),!b.xmlMode&&p.has(a.name)&&(b=d(d({},b),{xmlMode:"foreign"}));var c,e="<".concat(a.name),f=function(a,b){if(a){var c,d=(null!=(c=b.encodeEntities)?c:b.decodeEntities)===!1?l:b.xmlMode||"utf8"!==b.encodeEntities?i.encodeXML:i.escapeAttribute;return Object.keys(a).map(function(c){var e,f,g=null!=(e=a[c])?e:"";return("foreign"===b.xmlMode&&(c=null!=(f=j.attributeNames.get(c))?f:c),b.emptyAttrs||b.xmlMode||""!==g)?"".concat(c,'="').concat(d(g),'"'):c}).join(" ")}}(a.attribs,b);return f&&(e+=" ".concat(f)),0===a.children.length&&(b.xmlMode?!1!==b.selfClosingTags:b.selfClosingTags&&m.has(a.name))?(b.xmlMode||(e+=" "),e+="/>"):(e+=">",a.children.length>0&&(e+=n(a.children,b)),(b.xmlMode||!m.has(a.name))&&(e+="</".concat(a.name,">"))),e}(a,b);case h.Text:return function(a,b){var c,d=a.data||"";return(null!=(c=b.encodeEntities)?c:b.decodeEntities)===!1||!b.xmlMode&&a.parent&&k.has(a.parent.name)||(d=b.xmlMode||"utf8"!==b.encodeEntities?(0,i.encodeXML)(d):(0,i.escapeText)(d)),d}(a,b)}}(c[f],b);return e}c.render=n,c.default=n;var o=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),p=new Set(["svg","math"])},83867,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.getOuterHTML=h,c.getInnerHTML=function(a,b){return(0,e.hasChildren)(a)?a.children.map(function(a){return h(a,b)}).join(""):""},c.getText=function a(b){return Array.isArray(b)?b.map(a).join(""):(0,e.isTag)(b)?"br"===b.name?"\n":a(b.children):(0,e.isCDATA)(b)?a(b.children):(0,e.isText)(b)?b.data:""},c.textContent=function a(b){return Array.isArray(b)?b.map(a).join(""):(0,e.hasChildren)(b)&&!(0,e.isComment)(b)?a(b.children):(0,e.isText)(b)?b.data:""},c.innerText=function a(b){return Array.isArray(b)?b.map(a).join(""):(0,e.hasChildren)(b)&&(b.type===g.ElementType.Tag||(0,e.isCDATA)(b))?a(b.children):(0,e.isText)(b)?b.data:""};var e=a.r(97219),f=d(a.r(78881)),g=a.r(72829);function h(a,b){return(0,f.default)(a,b)}},37147,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.getChildren=e,c.getParent=f,c.getSiblings=function(a){var b=f(a);if(null!=b)return e(b);for(var c=[a],d=a.prev,g=a.next;null!=d;)c.unshift(d),d=d.prev;for(;null!=g;)c.push(g),g=g.next;return c},c.getAttributeValue=function(a,b){var c;return null==(c=a.attribs)?void 0:c[b]},c.hasAttrib=function(a,b){return null!=a.attribs&&Object.prototype.hasOwnProperty.call(a.attribs,b)&&null!=a.attribs[b]},c.getName=function(a){return a.name},c.nextElementSibling=function(a){for(var b=a.next;null!==b&&!(0,d.isTag)(b);)b=b.next;return b},c.prevElementSibling=function(a){for(var b=a.prev;null!==b&&!(0,d.isTag)(b);)b=b.prev;return b};var d=a.r(97219);function e(a){return(0,d.hasChildren)(a)?a.children:[]}function f(a){return a.parent||null}},41082,(a,b,c)=>{"use strict";function d(a){if(a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),a.parent){var b=a.parent.children,c=b.lastIndexOf(a);c>=0&&b.splice(c,1)}a.next=null,a.prev=null,a.parent=null}Object.defineProperty(c,"__esModule",{value:!0}),c.removeElement=d,c.replaceElement=function(a,b){var c=b.prev=a.prev;c&&(c.next=b);var d=b.next=a.next;d&&(d.prev=b);var e=b.parent=a.parent;if(e){var f=e.children;f[f.lastIndexOf(a)]=b,a.parent=null}},c.appendChild=function(a,b){if(d(b),b.next=null,b.parent=a,a.children.push(b)>1){var c=a.children[a.children.length-2];c.next=b,b.prev=c}else b.prev=null},c.append=function(a,b){d(b);var c=a.parent,e=a.next;if(b.next=e,b.prev=a,a.next=b,b.parent=c,e){if(e.prev=b,c){var f=c.children;f.splice(f.lastIndexOf(e),0,b)}}else c&&c.children.push(b)},c.prependChild=function(a,b){if(d(b),b.parent=a,b.prev=null,1!==a.children.unshift(b)){var c=a.children[1];c.prev=b,b.next=c}else b.next=null},c.prepend=function(a,b){d(b);var c=a.parent;if(c){var e=c.children;e.splice(e.indexOf(a),0,b)}a.prev&&(a.prev.next=b),b.parent=c,b.prev=a.prev,b.next=a,a.prev=b}},3723,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.filter=function(a,b,c,d){return void 0===c&&(c=!0),void 0===d&&(d=1/0),e(a,Array.isArray(b)?b:[b],c,d)},c.find=e,c.findOneChild=function(a,b){return b.find(a)},c.findOne=function a(b,c,e){void 0===e&&(e=!0);for(var f=Array.isArray(c)?c:[c],g=0;g<f.length;g++){var h=f[g];if((0,d.isTag)(h)&&b(h))return h;if(e&&(0,d.hasChildren)(h)&&h.children.length>0){var i=a(b,h.children,!0);if(i)return i}}return null},c.existsOne=function a(b,c){return(Array.isArray(c)?c:[c]).some(function(c){return(0,d.isTag)(c)&&b(c)||(0,d.hasChildren)(c)&&a(b,c.children)})},c.findAll=function(a,b){for(var c=[],e=[Array.isArray(b)?b:[b]],f=[0];;){if(f[0]>=e[0].length){if(1===e.length)return c;e.shift(),f.shift();continue}var g=e[0][f[0]++];(0,d.isTag)(g)&&a(g)&&c.push(g),(0,d.hasChildren)(g)&&g.children.length>0&&(f.unshift(0),e.unshift(g.children))}};var d=a.r(97219);function e(a,b,c,e){for(var f=[],g=[Array.isArray(b)?b:[b]],h=[0];;){if(h[0]>=g[0].length){if(1===h.length)return f;g.shift(),h.shift();continue}var i=g[0][h[0]++];if(a(i)&&(f.push(i),--e<=0))return f;c&&(0,d.hasChildren)(i)&&i.children.length>0&&(h.unshift(0),g.unshift(i.children))}}},53217,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.testElement=function(a,b){var c=i(a);return!c||c(b)},c.getElements=function(a,b,c,d){void 0===d&&(d=1/0);var f=i(a);return f?(0,e.filter)(f,b,c,d):[]},c.getElementById=function(a,b,c){return void 0===c&&(c=!0),Array.isArray(b)||(b=[b]),(0,e.findOne)(g("id",a),b,c)},c.getElementsByTagName=function(a,b,c,d){return void 0===c&&(c=!0),void 0===d&&(d=1/0),(0,e.filter)(f.tag_name(a),b,c,d)},c.getElementsByClassName=function(a,b,c,d){return void 0===c&&(c=!0),void 0===d&&(d=1/0),(0,e.filter)(g("class",a),b,c,d)},c.getElementsByTagType=function(a,b,c,d){return void 0===c&&(c=!0),void 0===d&&(d=1/0),(0,e.filter)(f.tag_type(a),b,c,d)};var d=a.r(97219),e=a.r(3723),f={tag_name:function(a){return"function"==typeof a?function(b){return(0,d.isTag)(b)&&a(b.name)}:"*"===a?d.isTag:function(b){return(0,d.isTag)(b)&&b.name===a}},tag_type:function(a){return"function"==typeof a?function(b){return a(b.type)}:function(b){return b.type===a}},tag_contains:function(a){return"function"==typeof a?function(b){return(0,d.isText)(b)&&a(b.data)}:function(b){return(0,d.isText)(b)&&b.data===a}}};function g(a,b){return"function"==typeof b?function(c){return(0,d.isTag)(c)&&b(c.attribs[a])}:function(c){return(0,d.isTag)(c)&&c.attribs[a]===b}}function h(a,b){return function(c){return a(c)||b(c)}}function i(a){var b=Object.keys(a).map(function(b){var c=a[b];return Object.prototype.hasOwnProperty.call(f,b)?f[b](c):g(b,c)});return 0===b.length?null:b.reduce(h)}},95828,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.DocumentPosition=void 0,c.removeSubsets=function(a){for(var b=a.length;--b>=0;){var c=a[b];if(b>0&&a.lastIndexOf(c,b-1)>=0){a.splice(b,1);continue}for(var d=c.parent;d;d=d.parent)if(a.includes(d)){a.splice(b,1);break}}return a},c.compareDocumentPosition=g,c.uniqueSort=function(a){return(a=a.filter(function(a,b,c){return!c.includes(a,b+1)})).sort(function(a,b){var c=g(a,b);return c&e.PRECEDING?-1:c&e.FOLLOWING?1:0}),a};var d,e,f=a.r(97219);function g(a,b){var c=[],d=[];if(a===b)return 0;for(var g=(0,f.hasChildren)(a)?a:a.parent;g;)c.unshift(g),g=g.parent;for(g=(0,f.hasChildren)(b)?b:b.parent;g;)d.unshift(g),g=g.parent;for(var h=Math.min(c.length,d.length),i=0;i<h&&c[i]===d[i];)i++;if(0===i)return e.DISCONNECTED;var j=c[i-1],k=j.children,l=c[i],m=d[i];return k.indexOf(l)>k.indexOf(m)?j===b?e.FOLLOWING|e.CONTAINED_BY:e.FOLLOWING:j===a?e.PRECEDING|e.CONTAINS:e.PRECEDING}(d=e||(c.DocumentPosition=e={}))[d.DISCONNECTED=1]="DISCONNECTED",d[d.PRECEDING=2]="PRECEDING",d[d.FOLLOWING=4]="FOLLOWING",d[d.CONTAINS=8]="CONTAINS",d[d.CONTAINED_BY=16]="CONTAINED_BY"},84831,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.getFeed=function(a){var b,c,d,f,g,m,n,o,p,q,r,s=i(l,a);return s?"feed"===s.name?(c=s.children,d={type:"atom",items:(0,e.getElementsByTagName)("entry",c).map(function(a){var b,c=a.children,d={media:h(c)};k(d,"id","id",c),k(d,"title","title",c);var e=null==(b=i("link",c))?void 0:b.attribs.href;e&&(d.link=e);var f=j("summary",c)||j("content",c);f&&(d.description=f);var g=j("updated",c);return g&&(d.pubDate=new Date(g)),d})},k(d,"id","id",c),k(d,"title","title",c),(f=null==(b=i("link",c))?void 0:b.attribs.href)&&(d.link=f),k(d,"description","subtitle",c),(g=j("updated",c))&&(d.updated=new Date(g)),k(d,"author","email",c,!0),d):(p=null!=(o=null==(n=i("channel",(m=s).children))?void 0:n.children)?o:[],q={type:m.name.substr(0,3),id:"",items:(0,e.getElementsByTagName)("item",m.children).map(function(a){var b=a.children,c={media:h(b)};k(c,"id","guid",b),k(c,"title","title",b),k(c,"link","link",b),k(c,"description","description",b);var d=j("pubDate",b)||j("dc:date",b);return d&&(c.pubDate=new Date(d)),c})},k(q,"title","title",p),k(q,"link","link",p),k(q,"description","description",p),(r=j("lastBuildDate",p))&&(q.updated=new Date(r)),k(q,"author","managingEditor",p,!0),q):null};var d=a.r(83867),e=a.r(53217),f=["url","type","lang"],g=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function h(a){return(0,e.getElementsByTagName)("media:content",a).map(function(a){for(var b=a.attribs,c={medium:b.medium,isDefault:!!b.isDefault},d=0;d<f.length;d++){var e=f[d];b[e]&&(c[e]=b[e])}for(var h=0;h<g.length;h++){var e=g[h];b[e]&&(c[e]=parseInt(b[e],10))}return b.expression&&(c.expression=b.expression),c})}function i(a,b){return(0,e.getElementsByTagName)(a,b,!0,1)[0]}function j(a,b,c){return void 0===c&&(c=!1),(0,d.textContent)((0,e.getElementsByTagName)(a,b,c,1)).trim()}function k(a,b,c,d,e){void 0===e&&(e=!1);var f=j(c,d,e);f&&(a[b]=f)}function l(a){return"rss"===a||"feed"===a||"rdf:RDF"===a}},27543,(a,b,c)=>{"use strict";var d=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),e=a.e&&a.e.__exportStar||function(a,b){for(var c in a)"default"===c||Object.prototype.hasOwnProperty.call(b,c)||d(b,a,c)};Object.defineProperty(c,"__esModule",{value:!0}),c.hasChildren=c.isDocument=c.isComment=c.isText=c.isCDATA=c.isTag=void 0,e(a.r(83867),c),e(a.r(37147),c),e(a.r(41082),c),e(a.r(3723),c),e(a.r(53217),c),e(a.r(95828),c),e(a.r(84831),c);var f=a.r(97219);Object.defineProperty(c,"isTag",{enumerable:!0,get:function(){return f.isTag}}),Object.defineProperty(c,"isCDATA",{enumerable:!0,get:function(){return f.isCDATA}}),Object.defineProperty(c,"isText",{enumerable:!0,get:function(){return f.isText}}),Object.defineProperty(c,"isComment",{enumerable:!0,get:function(){return f.isComment}}),Object.defineProperty(c,"isDocument",{enumerable:!0,get:function(){return f.isDocument}}),Object.defineProperty(c,"hasChildren",{enumerable:!0,get:function(){return f.hasChildren}})},1974,(a,b,c)=>{"use strict";var d;Object.defineProperty(c,"__esModule",{value:!0}),c.fromCodePoint=void 0,c.replaceCodePoint=f,c.decodeCodePoint=function(a){return(0,c.fromCodePoint)(f(a))};let e=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function f(a){var b;return a>=55296&&a<=57343||a>1114111?65533:null!=(b=e.get(a))?b:a}c.fromCodePoint=null!=(d=String.fromCodePoint)?d:a=>{let b="";return a>65535&&(a-=65536,b+=String.fromCharCode(a>>>10&1023|55296),a=56320|1023&a),b+=String.fromCharCode(a)}},59461,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.decodeBase64=function(a){let b="function"==typeof atob?atob(a):"function"==typeof Buffer.from?Buffer.from(a,"base64").toString("binary"):new Buffer(a,"base64").toString("binary"),c=-2&b.length,d=new Uint16Array(c/2);for(let a=0,e=0;a<c;a+=2){let c=b.charCodeAt(a),f=b.charCodeAt(a+1);d[e++]=c|f<<8}return d}},62457,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.htmlDecodeTree=void 0,c.htmlDecodeTree=(0,a.r(59461).decodeBase64)("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg")},85202,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.xmlDecodeTree=void 0,c.xmlDecodeTree=(0,a.r(59461).decodeBase64)("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg")},94225,(a,b,c)=>{"use strict";var d,e;Object.defineProperty(c,"__esModule",{value:!0}),c.BinTrieFlags=void 0,(e=d||(c.BinTrieFlags=d={}))[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.FLAG13=8192]="FLAG13",e[e.BRANCH_LENGTH=8064]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"},94197,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.xmlDecodeTree=c.htmlDecodeTree=c.replaceCodePoint=c.fromCodePoint=c.decodeCodePoint=c.EntityDecoder=c.DecodingMode=void 0,c.determineBranch=k,c.decodeHTML=function(a,b=s.Legacy){return l(a,b)},c.decodeHTMLAttribute=function(a){return l(a,s.Attribute)},c.decodeHTMLStrict=function(a){return l(a,s.Strict)},c.decodeXML=function(a){return m(a,s.Strict)};let d=a.r(1974),e=a.r(62457),f=a.r(85202),g=a.r(94225);function h(a){return a>=q.ZERO&&a<=q.NINE}(n=q||(q={}))[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z",(o=r||(r={}))[o.EntityStart=0]="EntityStart",o[o.NumericStart=1]="NumericStart",o[o.NumericDecimal=2]="NumericDecimal",o[o.NumericHex=3]="NumericHex",o[o.NamedEntity=4]="NamedEntity",(p=s||(c.DecodingMode=s={}))[p.Legacy=0]="Legacy",p[p.Strict=1]="Strict",p[p.Attribute=2]="Attribute";class i{constructor(a,b,c){this.decodeTree=a,this.emitCodePoint=b,this.errors=c,this.state=r.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=s.Strict,this.runConsumed=0}startEntity(a){this.decodeMode=a,this.state=r.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1,this.runConsumed=0}write(a,b){switch(this.state){case r.EntityStart:if(a.charCodeAt(b)===q.NUM)return this.state=r.NumericStart,this.consumed+=1,this.stateNumericStart(a,b+1);return this.state=r.NamedEntity,this.stateNamedEntity(a,b);case r.NumericStart:return this.stateNumericStart(a,b);case r.NumericDecimal:return this.stateNumericDecimal(a,b);case r.NumericHex:return this.stateNumericHex(a,b);case r.NamedEntity:return this.stateNamedEntity(a,b)}}stateNumericStart(a,b){return b>=a.length?-1:(32|a.charCodeAt(b))===q.LOWER_X?(this.state=r.NumericHex,this.consumed+=1,this.stateNumericHex(a,b+1)):(this.state=r.NumericDecimal,this.stateNumericDecimal(a,b))}stateNumericHex(a,b){for(;b<a.length;){var c;let d=a.charCodeAt(b);if(!h(d)&&(!((c=d)>=q.UPPER_A)||!(c<=q.UPPER_F))&&(!(c>=q.LOWER_A)||!(c<=q.LOWER_F)))return this.emitNumericEntity(d,3);{let a=d<=q.NINE?d-q.ZERO:(32|d)-q.LOWER_A+10;this.result=16*this.result+a,this.consumed++,b++}}return -1}stateNumericDecimal(a,b){for(;b<a.length;){let c=a.charCodeAt(b);if(!h(c))return this.emitNumericEntity(c,2);this.result=10*this.result+(c-q.ZERO),this.consumed++,b++}return -1}emitNumericEntity(a,b){var c;if(this.consumed<=b)return null==(c=this.errors)||c.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(a===q.SEMI)this.consumed+=1;else if(this.decodeMode===s.Strict)return 0;return this.emitCodePoint((0,d.replaceCodePoint)(this.result),this.consumed),this.errors&&(a!==q.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(a,b){let{decodeTree:c}=this,d=c[this.treeIndex],e=(d&g.BinTrieFlags.VALUE_LENGTH)>>14;for(;b<a.length;){if(0===e&&(d&g.BinTrieFlags.FLAG13)!=0){let f=(d&g.BinTrieFlags.BRANCH_LENGTH)>>7;if(0===this.runConsumed){let c=d&g.BinTrieFlags.JUMP_TABLE;if(a.charCodeAt(b)!==c)return 0===this.result?0:this.emitNotTerminatedNamedEntity();b++,this.excess++,this.runConsumed++}for(;this.runConsumed<f;){if(b>=a.length)return -1;let d=this.runConsumed-1,e=c[this.treeIndex+1+(d>>1)],f=d%2==0?255&e:e>>8&255;if(a.charCodeAt(b)!==f)return this.runConsumed=0,0===this.result?0:this.emitNotTerminatedNamedEntity();b++,this.excess++,this.runConsumed++}this.runConsumed=0,this.treeIndex+=1+(f>>1),e=((d=c[this.treeIndex])&g.BinTrieFlags.VALUE_LENGTH)>>14}if(b>=a.length)break;let f=a.charCodeAt(b);if(f===q.SEMI&&0!==e&&(d&g.BinTrieFlags.FLAG13)!=0)return this.emitNamedEntityData(this.treeIndex,e,this.consumed+this.excess);if(this.treeIndex=k(c,d,this.treeIndex+Math.max(1,e),f),this.treeIndex<0)return 0===this.result||this.decodeMode===s.Attribute&&(0===e||function(a){var b;return a===q.EQUALS||(b=a)>=q.UPPER_A&&b<=q.UPPER_Z||b>=q.LOWER_A&&b<=q.LOWER_Z||h(b)}(f))?0:this.emitNotTerminatedNamedEntity();if(0!=(e=((d=c[this.treeIndex])&g.BinTrieFlags.VALUE_LENGTH)>>14)){if(f===q.SEMI)return this.emitNamedEntityData(this.treeIndex,e,this.consumed+this.excess);this.decodeMode!==s.Strict&&(d&g.BinTrieFlags.FLAG13)==0&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}b++,this.excess++}return -1}emitNotTerminatedNamedEntity(){var a;let{result:b,decodeTree:c}=this,d=(c[b]&g.BinTrieFlags.VALUE_LENGTH)>>14;return this.emitNamedEntityData(b,d,this.consumed),null==(a=this.errors)||a.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(a,b,c){let{decodeTree:d}=this;return this.emitCodePoint(1===b?d[a]&~(g.BinTrieFlags.VALUE_LENGTH|g.BinTrieFlags.FLAG13):d[a+1],c),3===b&&this.emitCodePoint(d[a+2],c),c}end(){var a;switch(this.state){case r.NamedEntity:return 0!==this.result&&(this.decodeMode!==s.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case r.NumericDecimal:return this.emitNumericEntity(0,2);case r.NumericHex:return this.emitNumericEntity(0,3);case r.NumericStart:return null==(a=this.errors)||a.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case r.EntityStart:return 0}}}function j(a){let b="",c=new i(a,a=>b+=(0,d.fromCodePoint)(a));return function(a,d){let e=0,f=0;for(;(f=a.indexOf("&",f))>=0;){b+=a.slice(e,f),c.startEntity(d);let g=c.write(a,f+1);if(g<0){e=f+c.end();break}e=f+g,f=0===g?e+1:e}let g=b+a.slice(e);return b="",g}}function k(a,b,c,d){let e=(b&g.BinTrieFlags.BRANCH_LENGTH)>>7,f=b&g.BinTrieFlags.JUMP_TABLE;if(0===e)return 0!==f&&d===f?c:-1;if(f){let b=d-f;return b<0||b>=e?-1:a[c+b]-1}let h=e+1>>1,i=0,j=e-1;for(;i<=j;){let b=i+j>>>1,e=a[c+(b>>1)]>>(1&b)*8&255;if(e<d)i=b+1;else{if(!(e>d))return a[c+h+b];j=b-1}}return -1}c.EntityDecoder=i;let l=j(e.htmlDecodeTree),m=j(f.xmlDecodeTree);var n,o,p,q,r,s,t=a.r(1974);Object.defineProperty(c,"decodeCodePoint",{enumerable:!0,get:function(){return t.decodeCodePoint}}),Object.defineProperty(c,"fromCodePoint",{enumerable:!0,get:function(){return t.fromCodePoint}}),Object.defineProperty(c,"replaceCodePoint",{enumerable:!0,get:function(){return t.replaceCodePoint}});var u=a.r(62457);Object.defineProperty(c,"htmlDecodeTree",{enumerable:!0,get:function(){return u.htmlDecodeTree}});var v=a.r(85202);Object.defineProperty(c,"xmlDecodeTree",{enumerable:!0,get:function(){return v.xmlDecodeTree}})},95940,(a,b,c)=>{"use strict";var d,e,f,g,h,i;Object.defineProperty(c,"__esModule",{value:!0}),c.QuoteType=void 0;let j=a.r(94197);function k(a){return a===d.Space||a===d.NewLine||a===d.Tab||a===d.FormFeed||a===d.CarriageReturn}function l(a){return a===d.Slash||a===d.Gt||k(a)}(g=d||(d={}))[g.Tab=9]="Tab",g[g.NewLine=10]="NewLine",g[g.FormFeed=12]="FormFeed",g[g.CarriageReturn=13]="CarriageReturn",g[g.Space=32]="Space",g[g.ExclamationMark=33]="ExclamationMark",g[g.Number=35]="Number",g[g.Amp=38]="Amp",g[g.SingleQuote=39]="SingleQuote",g[g.DoubleQuote=34]="DoubleQuote",g[g.Dash=45]="Dash",g[g.Slash=47]="Slash",g[g.Zero=48]="Zero",g[g.Nine=57]="Nine",g[g.Semi=59]="Semi",g[g.Lt=60]="Lt",g[g.Eq=61]="Eq",g[g.Gt=62]="Gt",g[g.Questionmark=63]="Questionmark",g[g.UpperA=65]="UpperA",g[g.LowerA=97]="LowerA",g[g.UpperF=70]="UpperF",g[g.LowerF=102]="LowerF",g[g.UpperZ=90]="UpperZ",g[g.LowerZ=122]="LowerZ",g[g.LowerX=120]="LowerX",g[g.OpeningSquareBracket=91]="OpeningSquareBracket",(h=e||(e={}))[h.Text=1]="Text",h[h.BeforeTagName=2]="BeforeTagName",h[h.InTagName=3]="InTagName",h[h.InSelfClosingTag=4]="InSelfClosingTag",h[h.BeforeClosingTagName=5]="BeforeClosingTagName",h[h.InClosingTagName=6]="InClosingTagName",h[h.AfterClosingTagName=7]="AfterClosingTagName",h[h.BeforeAttributeName=8]="BeforeAttributeName",h[h.InAttributeName=9]="InAttributeName",h[h.AfterAttributeName=10]="AfterAttributeName",h[h.BeforeAttributeValue=11]="BeforeAttributeValue",h[h.InAttributeValueDq=12]="InAttributeValueDq",h[h.InAttributeValueSq=13]="InAttributeValueSq",h[h.InAttributeValueNq=14]="InAttributeValueNq",h[h.BeforeDeclaration=15]="BeforeDeclaration",h[h.InDeclaration=16]="InDeclaration",h[h.InProcessingInstruction=17]="InProcessingInstruction",h[h.BeforeComment=18]="BeforeComment",h[h.CDATASequence=19]="CDATASequence",h[h.InSpecialComment=20]="InSpecialComment",h[h.InCommentLike=21]="InCommentLike",h[h.BeforeSpecialS=22]="BeforeSpecialS",h[h.BeforeSpecialT=23]="BeforeSpecialT",h[h.SpecialStartSequence=24]="SpecialStartSequence",h[h.InSpecialTag=25]="InSpecialTag",h[h.InEntity=26]="InEntity",(i=f||(c.QuoteType=f={}))[i.NoValue=0]="NoValue",i[i.Unquoted=1]="Unquoted",i[i.Single=2]="Single",i[i.Double=3]="Double";let m={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97]),XmpEnd:new Uint8Array([60,47,120,109,112])};c.default=class{constructor({xmlMode:a=!1,decodeEntities:b=!0},c){this.cbs=c,this.state=e.Text,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=e.Text,this.isSpecial=!1,this.running=!0,this.offset=0,this.currentSequence=void 0,this.sequenceIndex=0,this.xmlMode=a,this.decodeEntities=b,this.entityDecoder=new j.EntityDecoder(a?j.xmlDecodeTree:j.htmlDecodeTree,(a,b)=>this.emitCodePoint(a,b))}reset(){this.state=e.Text,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=e.Text,this.currentSequence=void 0,this.running=!0,this.offset=0}write(a){this.offset+=this.buffer.length,this.buffer=a,this.parse()}end(){this.running&&this.finish()}pause(){this.running=!1}resume(){this.running=!0,this.index<this.buffer.length+this.offset&&this.parse()}stateText(a){a===d.Lt||!this.decodeEntities&&this.fastForwardTo(d.Lt)?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=e.BeforeTagName,this.sectionStart=this.index):this.decodeEntities&&a===d.Amp&&this.startEntity()}stateSpecialStartSequence(a){let b=this.sequenceIndex===this.currentSequence.length;if(b?l(a):(32|a)===this.currentSequence[this.sequenceIndex]){if(!b)return void this.sequenceIndex++}else this.isSpecial=!1;this.sequenceIndex=0,this.state=e.InTagName,this.stateInTagName(a)}stateInSpecialTag(a){if(this.sequenceIndex===this.currentSequence.length){if(a===d.Gt||k(a)){let b=this.index-this.currentSequence.length;if(this.sectionStart<b){let a=this.index;this.index=b,this.cbs.ontext(this.sectionStart,b),this.index=a}this.isSpecial=!1,this.sectionStart=b+2,this.stateInClosingTagName(a);return}this.sequenceIndex=0}(32|a)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:0===this.sequenceIndex?this.currentSequence===m.TitleEnd?this.decodeEntities&&a===d.Amp&&this.startEntity():this.fastForwardTo(d.Lt)&&(this.sequenceIndex=1):this.sequenceIndex=Number(a===d.Lt)}stateCDATASequence(a){a===m.Cdata[this.sequenceIndex]?++this.sequenceIndex===m.Cdata.length&&(this.state=e.InCommentLike,this.currentSequence=m.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=e.InDeclaration,this.stateInDeclaration(a))}fastForwardTo(a){for(;++this.index<this.buffer.length+this.offset;)if(this.buffer.charCodeAt(this.index-this.offset)===a)return!0;return this.index=this.buffer.length+this.offset-1,!1}stateInCommentLike(a){a===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===m.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index,2):this.cbs.oncomment(this.sectionStart,this.index,2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=e.Text):0===this.sequenceIndex?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):a!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}isTagStartChar(a){return this.xmlMode?!l(a):a>=d.LowerA&&a<=d.LowerZ||a>=d.UpperA&&a<=d.UpperZ}startSpecial(a,b){this.isSpecial=!0,this.currentSequence=a,this.sequenceIndex=b,this.state=e.SpecialStartSequence}stateBeforeTagName(a){if(a===d.ExclamationMark)this.state=e.BeforeDeclaration,this.sectionStart=this.index+1;else if(a===d.Questionmark)this.state=e.InProcessingInstruction,this.sectionStart=this.index+1;else if(this.isTagStartChar(a)){let b=32|a;this.sectionStart=this.index,this.xmlMode?this.state=e.InTagName:b===m.ScriptEnd[2]?this.state=e.BeforeSpecialS:b===m.TitleEnd[2]||b===m.XmpEnd[2]?this.state=e.BeforeSpecialT:this.state=e.InTagName}else a===d.Slash?this.state=e.BeforeClosingTagName:(this.state=e.Text,this.stateText(a))}stateInTagName(a){l(a)&&(this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=e.BeforeAttributeName,this.stateBeforeAttributeName(a))}stateBeforeClosingTagName(a){k(a)||(a===d.Gt?this.state=e.Text:(this.state=this.isTagStartChar(a)?e.InClosingTagName:e.InSpecialComment,this.sectionStart=this.index))}stateInClosingTagName(a){(a===d.Gt||k(a))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=e.AfterClosingTagName,this.stateAfterClosingTagName(a))}stateAfterClosingTagName(a){(a===d.Gt||this.fastForwardTo(d.Gt))&&(this.state=e.Text,this.sectionStart=this.index+1)}stateBeforeAttributeName(a){a===d.Gt?(this.cbs.onopentagend(this.index),this.isSpecial?(this.state=e.InSpecialTag,this.sequenceIndex=0):this.state=e.Text,this.sectionStart=this.index+1):a===d.Slash?this.state=e.InSelfClosingTag:k(a)||(this.state=e.InAttributeName,this.sectionStart=this.index)}stateInSelfClosingTag(a){a===d.Gt?(this.cbs.onselfclosingtag(this.index),this.state=e.Text,this.sectionStart=this.index+1,this.isSpecial=!1):k(a)||(this.state=e.BeforeAttributeName,this.stateBeforeAttributeName(a))}stateInAttributeName(a){(a===d.Eq||l(a))&&(this.cbs.onattribname(this.sectionStart,this.index),this.sectionStart=this.index,this.state=e.AfterAttributeName,this.stateAfterAttributeName(a))}stateAfterAttributeName(a){a===d.Eq?this.state=e.BeforeAttributeValue:a===d.Slash||a===d.Gt?(this.cbs.onattribend(f.NoValue,this.sectionStart),this.sectionStart=-1,this.state=e.BeforeAttributeName,this.stateBeforeAttributeName(a)):k(a)||(this.cbs.onattribend(f.NoValue,this.sectionStart),this.state=e.InAttributeName,this.sectionStart=this.index)}stateBeforeAttributeValue(a){a===d.DoubleQuote?(this.state=e.InAttributeValueDq,this.sectionStart=this.index+1):a===d.SingleQuote?(this.state=e.InAttributeValueSq,this.sectionStart=this.index+1):k(a)||(this.sectionStart=this.index,this.state=e.InAttributeValueNq,this.stateInAttributeValueNoQuotes(a))}handleInAttributeValue(a,b){a===b||!this.decodeEntities&&this.fastForwardTo(b)?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(b===d.DoubleQuote?f.Double:f.Single,this.index+1),this.state=e.BeforeAttributeName):this.decodeEntities&&a===d.Amp&&this.startEntity()}stateInAttributeValueDoubleQuotes(a){this.handleInAttributeValue(a,d.DoubleQuote)}stateInAttributeValueSingleQuotes(a){this.handleInAttributeValue(a,d.SingleQuote)}stateInAttributeValueNoQuotes(a){k(a)||a===d.Gt?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(f.Unquoted,this.index),this.state=e.BeforeAttributeName,this.stateBeforeAttributeName(a)):this.decodeEntities&&a===d.Amp&&this.startEntity()}stateBeforeDeclaration(a){a===d.OpeningSquareBracket?(this.state=e.CDATASequence,this.sequenceIndex=0):this.state=a===d.Dash?e.BeforeComment:e.InDeclaration}stateInDeclaration(a){(a===d.Gt||this.fastForwardTo(d.Gt))&&(this.cbs.ondeclaration(this.sectionStart,this.index),this.state=e.Text,this.sectionStart=this.index+1)}stateInProcessingInstruction(a){(a===d.Gt||this.fastForwardTo(d.Gt))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=e.Text,this.sectionStart=this.index+1)}stateBeforeComment(a){a===d.Dash?(this.state=e.InCommentLike,this.currentSequence=m.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=e.InDeclaration}stateInSpecialComment(a){(a===d.Gt||this.fastForwardTo(d.Gt))&&(this.cbs.oncomment(this.sectionStart,this.index,0),this.state=e.Text,this.sectionStart=this.index+1)}stateBeforeSpecialS(a){let b=32|a;b===m.ScriptEnd[3]?this.startSpecial(m.ScriptEnd,4):b===m.StyleEnd[3]?this.startSpecial(m.StyleEnd,4):(this.state=e.InTagName,this.stateInTagName(a))}stateBeforeSpecialT(a){switch(32|a){case m.TitleEnd[3]:this.startSpecial(m.TitleEnd,4);break;case m.TextareaEnd[3]:this.startSpecial(m.TextareaEnd,4);break;case m.XmpEnd[3]:this.startSpecial(m.XmpEnd,4);break;default:this.state=e.InTagName,this.stateInTagName(a)}}startEntity(){this.baseState=this.state,this.state=e.InEntity,this.entityStart=this.index,this.entityDecoder.startEntity(this.xmlMode?j.DecodingMode.Strict:this.baseState===e.Text||this.baseState===e.InSpecialTag?j.DecodingMode.Legacy:j.DecodingMode.Attribute)}stateInEntity(){let a=this.index-this.offset,b=this.entityDecoder.write(this.buffer,a);if(b>=0)this.state=this.baseState,0===b&&(this.index-=1);else{if(a<this.buffer.length&&this.buffer.charCodeAt(a)===d.Amp){this.state=this.baseState,this.index-=1;return}this.index=this.offset+this.buffer.length-1}}cleanup(){this.running&&this.sectionStart!==this.index&&(this.state===e.Text||this.state===e.InSpecialTag&&0===this.sequenceIndex?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===e.InAttributeValueDq||this.state===e.InAttributeValueSq||this.state===e.InAttributeValueNq)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}shouldContinue(){return this.index<this.buffer.length+this.offset&&this.running}parse(){for(;this.shouldContinue();){let a=this.buffer.charCodeAt(this.index-this.offset);switch(this.state){case e.Text:this.stateText(a);break;case e.SpecialStartSequence:this.stateSpecialStartSequence(a);break;case e.InSpecialTag:this.stateInSpecialTag(a);break;case e.CDATASequence:this.stateCDATASequence(a);break;case e.InAttributeValueDq:this.stateInAttributeValueDoubleQuotes(a);break;case e.InAttributeName:this.stateInAttributeName(a);break;case e.InCommentLike:this.stateInCommentLike(a);break;case e.InSpecialComment:this.stateInSpecialComment(a);break;case e.BeforeAttributeName:this.stateBeforeAttributeName(a);break;case e.InTagName:this.stateInTagName(a);break;case e.InClosingTagName:this.stateInClosingTagName(a);break;case e.BeforeTagName:this.stateBeforeTagName(a);break;case e.AfterAttributeName:this.stateAfterAttributeName(a);break;case e.InAttributeValueSq:this.stateInAttributeValueSingleQuotes(a);break;case e.BeforeAttributeValue:this.stateBeforeAttributeValue(a);break;case e.BeforeClosingTagName:this.stateBeforeClosingTagName(a);break;case e.AfterClosingTagName:this.stateAfterClosingTagName(a);break;case e.BeforeSpecialS:this.stateBeforeSpecialS(a);break;case e.BeforeSpecialT:this.stateBeforeSpecialT(a);break;case e.InAttributeValueNq:this.stateInAttributeValueNoQuotes(a);break;case e.InSelfClosingTag:this.stateInSelfClosingTag(a);break;case e.InDeclaration:this.stateInDeclaration(a);break;case e.BeforeDeclaration:this.stateBeforeDeclaration(a);break;case e.BeforeComment:this.stateBeforeComment(a);break;case e.InProcessingInstruction:this.stateInProcessingInstruction(a);break;case e.InEntity:this.stateInEntity()}this.index++}this.cleanup()}finish(){this.state===e.InEntity&&(this.entityDecoder.end(),this.state=this.baseState),this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let a=this.buffer.length+this.offset;this.sectionStart>=a||(this.state===e.InCommentLike?this.currentSequence===m.CdataEnd?this.cbs.oncdata(this.sectionStart,a,0):this.cbs.oncomment(this.sectionStart,a,0):this.state===e.InTagName||this.state===e.BeforeAttributeName||this.state===e.BeforeAttributeValue||this.state===e.AfterAttributeName||this.state===e.InAttributeName||this.state===e.InAttributeValueSq||this.state===e.InAttributeValueDq||this.state===e.InAttributeValueNq||this.state===e.InClosingTagName||this.cbs.ontext(this.sectionStart,a))}emitCodePoint(a,b){this.baseState!==e.Text&&this.baseState!==e.InSpecialTag?(this.sectionStart<this.entityStart&&this.cbs.onattribdata(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+b,this.index=this.sectionStart-1,this.cbs.onattribentity(a)):(this.sectionStart<this.entityStart&&this.cbs.ontext(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+b,this.index=this.sectionStart-1,this.cbs.ontextentity(a,this.sectionStart))}}},34037,(a,b,c)=>{"use strict";var d,e=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),f=a.e&&a.e.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),g=a.e&&a.e.__importStar||(d=function(a){return(d=Object.getOwnPropertyNames||function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[b.length]=c);return b})(a)},function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c=d(a),g=0;g<c.length;g++)"default"!==c[g]&&e(b,a,c[g]);return f(b,a),b});Object.defineProperty(c,"__esModule",{value:!0}),c.Parser=void 0;let h=g(a.r(95940)),i=a.r(94197),j=new Set(["input","option","optgroup","select","button","datalist","textarea"]),k=new Set(["p"]),l=new Set(["thead","tbody"]),m=new Set(["dd","dt"]),n=new Set(["rt","rp"]),o=new Map([["tr",new Set(["tr","th","td"])],["th",new Set(["th"])],["td",new Set(["thead","th","td"])],["body",new Set(["head","link","script"])],["li",new Set(["li"])],["p",k],["h1",k],["h2",k],["h3",k],["h4",k],["h5",k],["h6",k],["select",j],["input",j],["output",j],["button",j],["datalist",j],["textarea",j],["option",new Set(["option"])],["optgroup",new Set(["optgroup","option"])],["dd",m],["dt",m],["address",k],["article",k],["aside",k],["blockquote",k],["details",k],["div",k],["dl",k],["fieldset",k],["figcaption",k],["figure",k],["footer",k],["form",k],["header",k],["hr",k],["main",k],["nav",k],["ol",k],["pre",k],["section",k],["table",k],["ul",k],["rt",n],["rp",n],["tbody",l],["tfoot",l]]),p=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),q=new Set(["math","svg"]),r=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignobject","desc","title"]),s=/\s|\//;c.Parser=class{constructor(a,b={}){var c,d,e,f,g,i;this.options=b,this.startIndex=0,this.endIndex=0,this.openTagStart=0,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.buffers=[],this.bufferOffset=0,this.writeIndex=0,this.ended=!1,this.cbs=null!=a?a:{},this.htmlMode=!this.options.xmlMode,this.lowerCaseTagNames=null!=(c=b.lowerCaseTags)?c:this.htmlMode,this.lowerCaseAttributeNames=null!=(d=b.lowerCaseAttributeNames)?d:this.htmlMode,this.recognizeSelfClosing=null!=(e=b.recognizeSelfClosing)?e:!this.htmlMode,this.tokenizer=new(null!=(f=b.Tokenizer)?f:h.default)(this.options,this),this.foreignContext=[!this.htmlMode],null==(i=(g=this.cbs).onparserinit)||i.call(g,this)}ontext(a,b){var c,d;let e=this.getSlice(a,b);this.endIndex=b-1,null==(d=(c=this.cbs).ontext)||d.call(c,e),this.startIndex=b}ontextentity(a,b){var c,d;this.endIndex=b-1,null==(d=(c=this.cbs).ontext)||d.call(c,(0,i.fromCodePoint)(a)),this.startIndex=b}isVoidElement(a){return this.htmlMode&&p.has(a)}onopentagname(a,b){this.endIndex=b;let c=this.getSlice(a,b);this.lowerCaseTagNames&&(c=c.toLowerCase()),this.emitOpenTag(c)}emitOpenTag(a){var b,c,d,e;this.openTagStart=this.startIndex,this.tagname=a;let f=this.htmlMode&&o.get(a);if(f)for(;this.stack.length>0&&f.has(this.stack[0]);){let a=this.stack.shift();null==(c=(b=this.cbs).onclosetag)||c.call(b,a,!0)}!this.isVoidElement(a)&&(this.stack.unshift(a),this.htmlMode&&(q.has(a)?this.foreignContext.unshift(!0):r.has(a)&&this.foreignContext.unshift(!1))),null==(e=(d=this.cbs).onopentagname)||e.call(d,a),this.cbs.onopentag&&(this.attribs={})}endOpenTag(a){var b,c;this.startIndex=this.openTagStart,this.attribs&&(null==(c=(b=this.cbs).onopentag)||c.call(b,this.tagname,this.attribs,a),this.attribs=null),this.cbs.onclosetag&&this.isVoidElement(this.tagname)&&this.cbs.onclosetag(this.tagname,!0),this.tagname=""}onopentagend(a){this.endIndex=a,this.endOpenTag(!1),this.startIndex=a+1}onclosetag(a,b){var c,d,e,f,g,h,i,j;this.endIndex=b;let k=this.getSlice(a,b);if(this.lowerCaseTagNames&&(k=k.toLowerCase()),this.htmlMode&&(q.has(k)||r.has(k))&&this.foreignContext.shift(),this.isVoidElement(k))this.htmlMode&&"br"===k&&(null==(f=(e=this.cbs).onopentagname)||f.call(e,"br"),null==(h=(g=this.cbs).onopentag)||h.call(g,"br",{},!0),null==(j=(i=this.cbs).onclosetag)||j.call(i,"br",!1));else{let a=this.stack.indexOf(k);if(-1!==a)for(let b=0;b<=a;b++){let e=this.stack.shift();null==(d=(c=this.cbs).onclosetag)||d.call(c,e,b!==a)}else this.htmlMode&&"p"===k&&(this.emitOpenTag("p"),this.closeCurrentTag(!0))}this.startIndex=b+1}onselfclosingtag(a){this.endIndex=a,this.recognizeSelfClosing||this.foreignContext[0]?(this.closeCurrentTag(!1),this.startIndex=a+1):this.onopentagend(a)}closeCurrentTag(a){var b,c;let d=this.tagname;this.endOpenTag(a),this.stack[0]===d&&(null==(c=(b=this.cbs).onclosetag)||c.call(b,d,!a),this.stack.shift())}onattribname(a,b){this.startIndex=a;let c=this.getSlice(a,b);this.attribname=this.lowerCaseAttributeNames?c.toLowerCase():c}onattribdata(a,b){this.attribvalue+=this.getSlice(a,b)}onattribentity(a){this.attribvalue+=(0,i.fromCodePoint)(a)}onattribend(a,b){var c,d;this.endIndex=b,null==(d=(c=this.cbs).onattribute)||d.call(c,this.attribname,this.attribvalue,a===h.QuoteType.Double?'"':a===h.QuoteType.Single?"'":a===h.QuoteType.NoValue?void 0:null),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribvalue=""}getInstructionName(a){let b=a.search(s),c=b<0?a:a.substr(0,b);return this.lowerCaseTagNames&&(c=c.toLowerCase()),c}ondeclaration(a,b){this.endIndex=b;let c=this.getSlice(a,b);if(this.cbs.onprocessinginstruction){let a=this.getInstructionName(c);this.cbs.onprocessinginstruction(`!${a}`,`!${c}`)}this.startIndex=b+1}onprocessinginstruction(a,b){this.endIndex=b;let c=this.getSlice(a,b);if(this.cbs.onprocessinginstruction){let a=this.getInstructionName(c);this.cbs.onprocessinginstruction(`?${a}`,`?${c}`)}this.startIndex=b+1}oncomment(a,b,c){var d,e,f,g;this.endIndex=b,null==(e=(d=this.cbs).oncomment)||e.call(d,this.getSlice(a,b-c)),null==(g=(f=this.cbs).oncommentend)||g.call(f),this.startIndex=b+1}oncdata(a,b,c){var d,e,f,g,h,i,j,k,l,m;this.endIndex=b;let n=this.getSlice(a,b-c);!this.htmlMode||this.options.recognizeCDATA?(null==(e=(d=this.cbs).oncdatastart)||e.call(d),null==(g=(f=this.cbs).ontext)||g.call(f,n),null==(i=(h=this.cbs).oncdataend)||i.call(h)):(null==(k=(j=this.cbs).oncomment)||k.call(j,`[CDATA[${n}]]`),null==(m=(l=this.cbs).oncommentend)||m.call(l)),this.startIndex=b+1}onend(){var a,b;if(this.cbs.onclosetag){this.endIndex=this.startIndex;for(let a=0;a<this.stack.length;a++)this.cbs.onclosetag(this.stack[a],!0)}null==(b=(a=this.cbs).onend)||b.call(a)}reset(){var a,b,c,d;null==(b=(a=this.cbs).onreset)||b.call(a),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack.length=0,this.startIndex=0,this.endIndex=0,null==(d=(c=this.cbs).onparserinit)||d.call(c,this),this.buffers.length=0,this.foreignContext.length=0,this.foreignContext.unshift(!this.htmlMode),this.bufferOffset=0,this.writeIndex=0,this.ended=!1}parseComplete(a){this.reset(),this.end(a)}getSlice(a,b){for(;a-this.bufferOffset>=this.buffers[0].length;)this.shiftBuffer();let c=this.buffers[0].slice(a-this.bufferOffset,b-this.bufferOffset);for(;b-this.bufferOffset>this.buffers[0].length;)this.shiftBuffer(),c+=this.buffers[0].slice(0,b-this.bufferOffset);return c}shiftBuffer(){this.bufferOffset+=this.buffers[0].length,this.writeIndex--,this.buffers.shift()}write(a){var b,c;if(this.ended){null==(c=(b=this.cbs).onerror)||c.call(b,Error(".write() after done!"));return}this.buffers.push(a),this.tokenizer.running&&(this.tokenizer.write(a),this.writeIndex++)}end(a){var b,c;if(this.ended){null==(c=(b=this.cbs).onerror)||c.call(b,Error(".end() after done!"));return}a&&this.write(a),this.ended=!0,this.tokenizer.end()}pause(){this.tokenizer.pause()}resume(){for(this.tokenizer.resume();this.tokenizer.running&&this.writeIndex<this.buffers.length;)this.tokenizer.write(this.buffers[this.writeIndex++]);this.ended&&this.tokenizer.end()}parseChunk(a){this.write(a)}done(a){this.end(a)}}},32999,(a,b,c)=>{"use strict";var d,e=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),f=a.e&&a.e.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),g=a.e&&a.e.__importStar||(d=function(a){return(d=Object.getOwnPropertyNames||function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[b.length]=c);return b})(a)},function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c=d(a),g=0;g<c.length;g++)"default"!==c[g]&&e(b,a,c[g]);return f(b,a),b}),h=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.DomUtils=c.getFeed=c.ElementType=c.QuoteType=c.Tokenizer=c.DefaultHandler=c.DomHandler=c.Parser=void 0,c.parseDocument=m,c.parseDOM=n,c.createDocumentStream=function(a,b,c){let d=new k.DomHandler(b=>a(b,d.root),b,c);return new i.Parser(d,b)},c.createDomStream=function(a,b,c){let d=new k.DomHandler(a,b,c);return new i.Parser(d,b)},c.parseFeed=function(a,b=r){return(0,p.getFeed)(n(a,b))};let i=a.r(34037);var j=a.r(34037);Object.defineProperty(c,"Parser",{enumerable:!0,get:function(){return j.Parser}});let k=a.r(97219);var l=a.r(97219);function m(a,b){let c=new k.DomHandler(void 0,b);return new i.Parser(c,b).end(a),c.root}function n(a,b){return m(a,b).children}Object.defineProperty(c,"DomHandler",{enumerable:!0,get:function(){return l.DomHandler}}),Object.defineProperty(c,"DefaultHandler",{enumerable:!0,get:function(){return l.DomHandler}});var o=a.r(95940);Object.defineProperty(c,"Tokenizer",{enumerable:!0,get:function(){return h(o).default}}),Object.defineProperty(c,"QuoteType",{enumerable:!0,get:function(){return o.QuoteType}}),c.ElementType=g(a.r(72829));let p=a.r(27543);var q=a.r(27543);Object.defineProperty(c,"getFeed",{enumerable:!0,get:function(){return q.getFeed}});let r={xmlMode:!0};c.DomUtils=g(a.r(27543))},89618,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.unsetRootParent=function(a){for(var b=0,c=a.length;b<c;b++)a[b].parent=null;return a}},26514,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a,b){if("string"!=typeof a)throw TypeError("First argument must be a string.");if(!a)return[];var c=new d.DomHandler(void 0,b);return new e.Parser(c,b).end(a),(0,f.unsetRootParent)(c.dom)};var d=a.r(97219),e=a.r(32999),f=a.r(89618)},34744,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0})},33920,(a,b,c)=>{"use strict";var d=a.e&&a.e.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),e=a.e&&a.e.__exportStar||function(a,b){for(var c in a)"default"===c||Object.prototype.hasOwnProperty.call(b,c)||d(b,a,c)},f=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var g=a.r(26514);Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f(g).default}}),e(a.r(34744),c)},95993,(a,b,c)=>{c.SAME=0,c.CAMELCASE=1,c.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},33069,(a,b,c)=>{"use strict";function d(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b,this.attributeName=d,this.attributeNamespace=e,this.mustUseProperty=c,this.propertyName=a,this.type=b,this.sanitizeURL=f,this.removeEmptyString=g}let e={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(a=>{e[a]=new d(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([a,b])=>{e[a]=new d(a,1,!1,b,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(a=>{e[a]=new d(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(a=>{e[a]=new d(a,2,!1,a,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(a=>{e[a]=new d(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(a=>{e[a]=new d(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(a=>{e[a]=new d(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(a=>{e[a]=new d(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(a=>{e[a]=new d(a,5,!1,a.toLowerCase(),null,!1,!1)});let f=/[\-\:]([a-z])/g,g=a=>a[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(a=>{let b=a.replace(f,g);e[b]=new d(b,1,!1,a,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(a=>{let b=a.replace(f,g);e[b]=new d(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(a=>{let b=a.replace(f,g);e[b]=new d(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(a=>{e[a]=new d(a,1,!1,a.toLowerCase(),null,!1,!1)}),e.xlinkHref=new d("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(a=>{e[a]=new d(a,1,!1,a.toLowerCase(),null,!0,!0)});let{CAMELCASE:h,SAME:i,possibleStandardNames:j}=a.r(95993),k=RegExp.prototype.test.bind(RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),l=Object.keys(j).reduce((a,b)=>{let c=j[b];return c===i?a[b]=b:c===h?a[b.toLowerCase()]=b:a[b]=c,a},{});c.BOOLEAN=3,c.BOOLEANISH_STRING=2,c.NUMERIC=5,c.OVERLOADED_BOOLEAN=4,c.POSITIVE_NUMERIC=6,c.RESERVED=0,c.STRING=1,c.getPropertyInfo=function(a){return e.hasOwnProperty(a)?e[a]:null},c.isCustomAttribute=k,c.possibleStandardNames=l},3897,(a,b,c)=>{"use strict";var d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,f=/^\s*/,g=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,j=/^[;\s]*/,k=/^\s+|\s+$/g;function l(a){return a?a.replace(k,""):""}b.exports=function(a,b){if("string"!=typeof a)throw TypeError("First argument must be a string");if(!a)return[];b=b||{};var c=1,k=1;function m(a){var b=a.match(e);b&&(c+=b.length);var d=a.lastIndexOf("\n");k=~d?a.length-d:k+a.length}function n(){var a={line:c,column:k};return function(b){return b.position=new o(a),q(f),b}}function o(a){this.start=a,this.end={line:c,column:k},this.source=b.source}function p(d){var e=Error(b.source+":"+c+":"+k+": "+d);if(e.reason=d,e.filename=b.source,e.line=c,e.column=k,e.source=a,b.silent);else throw e}function q(b){var c=b.exec(a);if(c){var d=c[0];return m(d),a=a.slice(d.length),c}}function r(a){var b;for(a=a||[];b=s();)!1!==b&&a.push(b);return a}function s(){var b=n();if("/"==a.charAt(0)&&"*"==a.charAt(1)){for(var c=2;""!=a.charAt(c)&&("*"!=a.charAt(c)||"/"!=a.charAt(c+1));)++c;if(c+=2,""===a.charAt(c-1))return p("End of comment missing");var d=a.slice(2,c-2);return k+=2,m(d),a=a.slice(c),k+=2,b({type:"comment",comment:d})}}o.prototype.content=a,q(f);var t,u=[];for(r(u);t=function(){var a=n(),b=q(g);if(b){if(s(),!q(h))return p("property missing ':'");var c=q(i),e=a({type:"declaration",property:l(b[0].replace(d,"")),value:c?l(c[0].replace(d,"")):""});return q(j),e}}();)!1!==t&&(u.push(t),r(u));return u}},83359,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a,b){let c=null;if(!a||"string"!=typeof a)return c;let d=(0,e.default)(a),f="function"==typeof b;return d.forEach(a=>{if("declaration"!==a.type)return;let{property:d,value:e}=a;f?b(d,e,a):e&&((c=c||{})[d]=e)}),c};let e=d(a.r(3897))},50433,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.camelCase=void 0;var d=/^--[a-zA-Z0-9_-]+$/,e=/-([a-z])/g,f=/^[^-]+$/,g=/^-(webkit|moz|ms|o|khtml)-/,h=/^-(ms)-/,i=function(a,b){return b.toUpperCase()},j=function(a,b){return"".concat(b,"-")};c.camelCase=function(a,b){var c;return(void 0===b&&(b={}),!(c=a)||f.test(c)||d.test(c))?a:(a=a.toLowerCase(),(a=b.reactCompat?a.replace(h,j):a.replace(g,j)).replace(e,i))}},52540,(a,b,c)=>{"use strict";var d=(a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}})(a.r(83359)),e=a.r(50433);function f(a,b){var c={};return a&&"string"==typeof a&&(0,d.default)(a,function(a,d){a&&d&&(c[(0,e.camelCase)(a,b)]=d)}),c}f.default=f,b.exports=f},87992,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.returnFirstArg=c.canTextBeChildOfNode=c.ELEMENTS_WITH_NO_TEXT_CHILDREN=c.PRESERVE_CUSTOM_ATTRIBUTES=void 0,c.isCustomComponent=function(a,b){return a.includes("-")?!g.has(a):!!(b&&"string"==typeof b.is)},c.setStyleProp=function(a,b){if("string"==typeof a){if(!a.trim()){b.style={};return}try{b.style=(0,f.default)(a,h)}catch(a){b.style={}}}};var e=a.r(72131),f=d(a.r(52540)),g=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]),h={reactCompat:!0};c.PRESERVE_CUSTOM_ATTRIBUTES=Number(e.version.split(".")[0])>=16,c.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]),c.canTextBeChildOfNode=function(a){return!c.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(a.name)},c.returnFirstArg=function(a){return a}},67273,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(a,b){void 0===a&&(a={});var c={},j=!!(a.type&&h[a.type]);for(var k in a){var l=a[k];if((0,d.isCustomAttribute)(k)){c[k]=l;continue}var m=k.toLowerCase(),n=i(m);if(n){var o=(0,d.getPropertyInfo)(n);switch(f.includes(n)&&g.includes(b)&&!j&&(n=i("default"+m)),c[n]=l,null==o?void 0:o.type){case d.BOOLEAN:c[n]=!0;break;case d.OVERLOADED_BOOLEAN:""===l&&(c[n]=!0)}continue}e.PRESERVE_CUSTOM_ATTRIBUTES&&(c[k]=l)}return(0,e.setStyleProp)(a.style,c),c};var d=a.r(33069),e=a.r(87992),f=["checked","value"],g=["input","select","textarea"],h={reset:!0,submit:!0};function i(a){return d.possibleStandardNames[a]}},3727,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function a(b,c){void 0===c&&(c={});for(var d,e,i,j,k,l=[],m="function"==typeof c.replace,n=null!=(d=c.transform)?d:g.returnFirstArg,o=null!=(e=c.library)?e:h,p=o.cloneElement,q=o.createElement,r=o.isValidElement,s=b.length,t=0;t<s;t++){var u,v=b[t];if(m){var w=null==(i=c.replace)?void 0:i.call(c,v,t);if(r(w)){s>1&&(w=p(w,{key:null!=(j=w.key)?j:t})),l.push(n(w,v,t));continue}}if("text"===v.type){var x=!v.data.trim().length;if(x&&v.parent&&!(0,g.canTextBeChildOfNode)(v.parent)||c.trim&&x)continue;l.push(n(v.data,v,t));continue}var y={};(u=v,g.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===u.type&&(0,g.isCustomComponent)(u.name,u.attribs))?((0,g.setStyleProp)(v.attribs.style,v.attribs),y=v.attribs):v.attribs&&(y=(0,f.default)(v.attribs,v.name));var z=void 0;switch(v.type){case"script":case"style":v.children[0]&&(y.dangerouslySetInnerHTML={__html:v.children[0].data});break;case"tag":"textarea"===v.name&&v.children[0]?y.defaultValue=v.children[0].data:(null==(k=v.children)?void 0:k.length)&&(z=a(v.children,c));break;default:continue}s>1&&(y.key=t),l.push(n(q(v.name,y,z),v,t))}return 1===l.length?l[0]:l};var e=a.r(72131),f=d(a.r(67273)),g=a.r(87992),h={cloneElement:e.cloneElement,createElement:e.createElement,isValidElement:e.isValidElement}},96450,(a,b,c)=>{"use strict";var d=a.e&&a.e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0}),c.htmlToDOM=c.domToReact=c.attributesToProps=c.Text=c.ProcessingInstruction=c.Element=c.Comment=void 0,c.default=function(a,b){var c;if("string"!=typeof a)throw TypeError("First argument must be a string");return a?(0,f.default)((0,e.default)(a,null!=(c=null==b?void 0:b.htmlparser2)?c:h),b):[]};var e=d(a.r(33920));c.htmlToDOM=e.default,c.attributesToProps=d(a.r(67273)).default;var f=d(a.r(3727));c.domToReact=f.default;var g=a.r(97219);Object.defineProperty(c,"Comment",{enumerable:!0,get:function(){return g.Comment}}),Object.defineProperty(c,"Element",{enumerable:!0,get:function(){return g.Element}}),Object.defineProperty(c,"ProcessingInstruction",{enumerable:!0,get:function(){return g.ProcessingInstruction}}),Object.defineProperty(c,"Text",{enumerable:!0,get:function(){return g.Text}});var h={lowerCaseAttributeNames:!1}},86541,a=>{"use strict";var b=a.i(87924);a.i(72131);var c=a.i(96450);let d=c.default.default||c.default;function e(){let a=`<style>
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
    



</div>`;return(0,b.jsx)("div",{className:"page-wrapper services-wrapper",children:d(a)})}a.s(["default",()=>e],86541)}];

//# sourceMappingURL=_7a432d68._.js.map
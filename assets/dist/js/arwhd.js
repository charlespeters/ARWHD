window.onload=function(){fitVids(".entry")},function(e,t){"use strict";e.fitVids=function(e,t){var a=document.querySelectorAll(e);if(a){var n={customSelector:null},i=document.createElement("div"),r=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];i.className="fit-vids-style",i.innerHTML="&shy;<style>         		  .fluid-width-video-wrapper {        			 width: 100%;                     			 position: relative;              			 padding: 0;                      		  }                                   											  		  .fluid-width-video-wrapper iframe,  		  .fluid-width-video-wrapper object,  		  .fluid-width-video-wrapper embed {  			 position: absolute;              			 top: 0;                          			 left: 0;                         			 width: 100%;                     			 height: 100%;                    		  }                                   		</style>",r.parentNode.insertBefore(i,r),t&&(n=JSON.parse(JSON.stringify(t)));var s=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];n.customSelector&&s.push(n.customSelector);for(var l=[],o=0;o<a.length;o++){var u=a[o],d=u.querySelectorAll(s.join(","));if(d.length>0)for(var g=0;g<d.length;g++)l.push(d[g])}for(var o=0;o<l.length;o++){var u=l[o];if("embed"===u.tagName.toLowerCase()&&"object"===u.parentNode.tagName||/fluid-width-video-wrapper/.test(u.parentNode.className))return;var c="object"===u.tagName.toLowerCase()||u.getAttribute("height")&&!isNaN(parseInt(u.getAttribute("height"),10))?parseInt(u.getAttribute("height"),10):u.clientHeight,p=isNaN(parseInt(u.getAttribute("width"),10))?u.clientWidth:parseInt(u.getAttribute("width"),10),m=c/p;if(!u.getAttribute("id")){var f="fitvid"+Math.floor(999999*Math.random());u.setAttribute("id",f)}u.removeAttribute("height"),u.removeAttribute("width");var h=document.createElement("div");h.className="fluid-width-video-wrapper",h.appendChild(u.cloneNode(!0)),u.parentNode.replaceChild(h,u),h.style.paddingTop=""+100*m+"%"}}}}(window),self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=t.util.clone(e[i]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var i in a)n[i]=a[i];return n},insertBefore:function(e,a,n,i){i=i||t.languages;var r=i[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var l={};for(var o in r)if(r.hasOwnProperty(o)){if(o==a)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=r[o]}return t.languages.DFS(t.languages,function(t,a){a===i[e]&&t!=e&&(this[t]=l)}),i[e]=l},DFS:function(e,a,n){for(var i in e)e.hasOwnProperty(i)&&(a.call(e,i,e[i],n||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],a):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],a,i))}},highlightAll:function(e,a){for(var n,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;n=i[r++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,i,r){for(var s,l,o=n;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=n.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var d={element:n,language:s,grammar:l,code:u};if(t.hooks.run("before-highlight",d),i&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){d.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r&&r.call(d.element),t.hooks.run("after-highlight",d)},g.postMessage(JSON.stringify({language:d.language,code:d.code}))}else d.highlightedCode=t.highlight(d.code,d.grammar,d.language),t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",d)}}},highlight:function(e,n,i){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),i)},tokenize:function(e,a,n){var i=t.Token,r=[e],s=a.rest;if(s){for(var l in s)a[l]=s[l];delete a.rest}e:for(var l in a)if(a.hasOwnProperty(l)&&a[l]){var o=a[l];o="Array"===t.util.type(o)?o:[o];for(var u=0;u<o.length;++u){var d=o[u],g=d.inside,c=!!d.lookbehind,p=0,m=d.alias;d=d.pattern||d;for(var f=0;f<r.length;f++){var h=r[f];if(r.length>e.length)break e;if(!(h instanceof i)){d.lastIndex=0;var b=d.exec(h);if(b){c&&(p=b[1].length);var w=b.index-1+p,b=b[0].slice(p),y=b.length,k=w+y,v=h.slice(0,w+1),P=h.slice(k+1),N=[f,1];v&&N.push(v);var A=new i(l,g?t.tokenize(b,g):b,m);N.push(A),P&&N.push(P),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var r={type:e.type,content:a.stringify(e.content,n,i),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}t.hooks.run("wrap",r);var l="";for(var o in r.attributes)l+=o+'="'+(r.attributes[o]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+l+">"+r.content+"</"+r.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,i=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:\.\w]+/,id:/#[-:\.\w]+/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/}),Prism.languages.git={comment:/^#.*$/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,deleted:/^-(?!-).+$/m,inserted:/^\+(?!\+).+$/m,commit_sha1:/^commit \w{40}$/m},function(e){e.languages.haml={"multiline-comment":[{pattern:/((?:^|\n)([\t ]*))\/.*(\n\2[\t ]+.+)*/,lookbehind:!0,alias:"comment"},{pattern:/((?:^|\n)([\t ]*))-#.*(\n\2[\t ]+.+)*/,lookbehind:!0,alias:"comment"}],"multiline-code":[{pattern:/((?:^|\n)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(\n\2[\t ]+.*,[\t ]*)*(\n\2[\t ]+.+)/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/((?:^|\n)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(\n\2[\t ]+.*\|[\t ]*)*/,lookbehind:!0,inside:{rest:e.languages.ruby}}],filter:{pattern:/((?:^|\n)([\t ]*)):[\w-]+(\n(?:\2[\t ]+.+|\s*?(?=\n)))+/,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},markup:{pattern:/((?:^|\n)[\t ]*)<.+/,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\n)[\t ]*)!!!(?: .+)?/,lookbehind:!0},tag:{pattern:/((?:^|\n)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,lookbehind:!0,inside:{attributes:[{pattern:/(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,lookbehind:!0},"attr-name":/[\w:-]+(?=\s*!?=|\s*[,)])/,punctuation:/[=(),]/}},{pattern:/\[[^\]]+\]/,inside:{rest:e.languages.ruby}}],punctuation:/[<>]/}},code:{pattern:/((?:^|\n)[\t ]*(?:[~-]|[&!]?=)).+/,lookbehind:!0,inside:{rest:e.languages.ruby}},interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.ruby}},punctuation:{pattern:/((?:^|\n)[\t ]*)[~=\-&!]/,lookbehind:!0}};for(var t="((?:^|\\n)([\\t ]*)):{{filter_name}}(\\n(?:\\2[\\t ]+.+|\\s*?(?=\\n)))+",a=["css",{filter:"coffee",language:"coffeescript"},"erb","javascript","less","markdown","ruby","scss","textile"],n={},i=0,r=a.length;r>i;i++){var s=a[i];s="string"==typeof s?{filter:s,language:s}:s,e.languages[s.language]&&(n["filter-"+s.filter]={pattern:RegExp(t.replace("{{filter_name}}",s.filter)),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[s.language]}})}e.languages.insertBefore("haml","filter",n)}(Prism),function(e){var t=/\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:t,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)+?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,"boolean":/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\w+/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\w\W]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\w\W]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(t,function(t){return e.tokenStack.push(t),"___HANDLEBARS"+e.tokenStack.length+"___"}))}),e.hooks.add("before-insert",function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(t){if("handlebars"===t.language){for(var a,n=0;a=t.tokenStack[n];n++)t.highlightedCode=t.highlightedCode.replace("___HANDLEBARS"+(n+1)+"___",e.highlight(a,t.grammar,"handlebars"));t.element.innerHTML=t.highlightedCode}})}(Prism),function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i,e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{[\w\W]*?\})/i,inside:{"function":e.languages.javascript["function"],punctuation:/[={}[\];(),.:]/,keyword:e.languages.javascript.keyword},alias:"language-javascript"}},e.languages.jsx.tag)}(Prism),Prism.languages.ruby=Prism.languages.extend("clike",{comment:/#[^\r\n]*(\r?\n|$)/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*[?!]?\b/}),Prism.languages.insertBefore("ruby","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0},variable:/[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/,symbol:/:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/}),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/i,url:/([-a-z]+-)*url(?=\()/i,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","function",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/i,"boolean":/\b(true|false)\b/,"null":/\b(null)\b/,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/}),Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:(\n[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#[^\n]+/,key:{pattern:/(\s*[:\-,[{\n?][ \t]*(![^\s]+)?[ \t]*)[^\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/((^|\n)[ \t]*)%[^\n]+/,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*(\n|$|,|]|}))/,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')(?=[ \t]*(\n|$|,|]|}))/,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\dA-Fa-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/([:[\]{}\-,|>?]|---|\.\.\.)/},function(){if(self.Prism){var e={csharp:"C#",cpp:"C++"};Prism.hooks.add("before-highlight",function(t){var a=t.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var n=e[t.language]||t.language;a.setAttribute("data-language",n)}})}}();
!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("4",tinymce.util.Tools.resolve),g("1",["4"],function(a){return a("tinymce.PluginManager")}),g("2",["4"],function(a){return a("tinymce.util.Tools")}),g("3",[],function(){function a(a){return a&&1==a.nodeType&&"false"===a.contentEditable}function b(b,c,d,e,f){function g(a,b){if(b=b||0,!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";var c=a.index;if(b>0){var d=a[b];if(!d)throw"Invalid capture group";c+=a[0].indexOf(d),a[0]=d}return[c,c+a[0].length,[a[0]]]}function h(b){var c;if(3===b.nodeType)return b.data;if(o[b.nodeName]&&!n[b.nodeName])return"";if(c="",a(b))return"\n";if((n[b.nodeName]||p[b.nodeName])&&(c+="\n"),b=b.firstChild)do c+=h(b);while(b=b.nextSibling);return c}function i(b,c,d){var e,f,g,h,i=[],j=0,k=b,l=c.shift(),m=0;a:for(;;){if((n[k.nodeName]||p[k.nodeName]||a(k))&&j++,3===k.nodeType&&(!f&&k.length+j>=l[1]?(f=k,h=l[1]-j):e&&i.push(k),!e&&k.length+j>l[0]&&(e=k,g=l[0]-j),j+=k.length),e&&f){if(k=d({startNode:e,startNodeIndex:g,endNode:f,endNodeIndex:h,innerNodes:i,match:l[2],matchIndex:m}),j-=f.length-h,e=null,f=null,i=[],l=c.shift(),m++,!l)break}else if(o[k.nodeName]&&!n[k.nodeName]||!k.firstChild){if(k.nextSibling){k=k.nextSibling;continue}}else if(!a(k)){k=k.firstChild;continue}for(;;){if(k.nextSibling){k=k.nextSibling;break}if(k.parentNode===b)break a;k=k.parentNode}}}function j(a){var b;if("function"!=typeof a){var c=a.nodeType?a:m.createElement(a);b=function(a,b){var d=c.cloneNode(!1);return d.setAttribute("data-mce-index",b),a&&d.appendChild(m.createTextNode(a)),d}}else b=a;return function(a){var c,d,e,f=a.startNode,g=a.endNode,h=a.matchIndex;if(f===g){var i=f;e=i.parentNode,a.startNodeIndex>0&&(c=m.createTextNode(i.data.substring(0,a.startNodeIndex)),e.insertBefore(c,i));var j=b(a.match[0],h);return e.insertBefore(j,i),a.endNodeIndex<i.length&&(d=m.createTextNode(i.data.substring(a.endNodeIndex)),e.insertBefore(d,i)),i.parentNode.removeChild(i),j}c=m.createTextNode(f.data.substring(0,a.startNodeIndex)),d=m.createTextNode(g.data.substring(a.endNodeIndex));for(var k=b(f.data.substring(a.startNodeIndex),h),l=[],n=0,o=a.innerNodes.length;n<o;++n){var p=a.innerNodes[n],q=b(p.data,h);p.parentNode.replaceChild(q,p),l.push(q)}var r=b(g.data.substring(0,a.endNodeIndex),h);return e=f.parentNode,e.insertBefore(c,f),e.insertBefore(k,f),e.removeChild(f),e=g.parentNode,e.insertBefore(r,g),e.insertBefore(d,g),e.removeChild(g),r}}var k,l,m,n,o,p,q=[],r=0;if(m=c.ownerDocument,n=f.getBlockElements(),o=f.getWhiteSpaceElements(),p=f.getShortEndedElements(),l=h(c)){if(b.global)for(;k=b.exec(l);)q.push(g(k,e));else k=l.match(b),q.push(g(k,e));return q.length&&(r=q.length,i(c,q,j(d))),r}}return{findAndReplaceDOMText:b}}),g("0",["1","2","3"],function(a,b,c){function d(a){function d(){function c(){g.statusbar.find("#next").disabled(!h(m+1).length),g.statusbar.find("#prev").disabled(!h(m-1).length)}function d(){a.windowManager.alert("Could not find the specified string.",function(){g.find("#find")[0].focus()})}var e,f={};e=b.trim(a.selection.getContent({format:"text"}));var g=a.windowManager.open({layout:"flex",pack:"center",align:"center",onClose:function(){a.focus(),l.done()},onSubmit:function(a){var b,e,i,j;return a.preventDefault(),e=g.find("#case").checked(),j=g.find("#words").checked(),i=g.find("#find").value(),i.length?f.text==i&&f.caseState==e&&f.wholeWord==j?0===h(m+1).length?void d():(l.next(),void c()):(b=l.find(i,e,j),b||d(),g.statusbar.items().slice(1).disabled(0===b),c(),void(f={text:i,caseState:e,wholeWord:j})):(l.done(!1),void g.statusbar.items().slice(1).disabled(!0))},buttons:[{text:"Find",subtype:"primary",onclick:function(){g.submit()}},{text:"Replace",disabled:!0,onclick:function(){l.replace(g.find("#replace").value())||(g.statusbar.items().slice(1).disabled(!0),m=-1,f={})}},{text:"Replace all",disabled:!0,onclick:function(){l.replace(g.find("#replace").value(),!0,!0),g.statusbar.items().slice(1).disabled(!0),f={}}},{type:"spacer",flex:1},{text:"Prev",name:"prev",disabled:!0,onclick:function(){l.prev(),c()}},{text:"Next",name:"next",disabled:!0,onclick:function(){l.next(),c()}}],title:"Find and replace",items:{type:"form",padding:20,labelGap:30,spacing:10,items:[{type:"textbox",name:"find",size:40,label:"Find",value:e},{type:"textbox",name:"replace",size:40,label:"Replace with"},{type:"checkbox",name:"case",text:"Match case",label:" "},{type:"checkbox",name:"words",text:"Whole words",label:" "}]}})}function e(a){var b=a.getAttribute("data-mce-index");return"number"==typeof b?""+b:b}function f(b){var d,e;return e=a.dom.create("span",{"data-mce-bogus":1}),e.className="mce-match-marker",d=a.getBody(),l.done(!1),c.findAndReplaceDOMText(b,d,e,!1,a.schema)}function g(a){var b=a.parentNode;a.firstChild&&b.insertBefore(a.firstChild,a),a.parentNode.removeChild(a)}function h(c){var d,f=[];if(d=b.toArray(a.getBody().getElementsByTagName("span")),d.length)for(var g=0;g<d.length;g++){var h=e(d[g]);null!==h&&h.length&&h===c.toString()&&f.push(d[g])}return f}function i(b){var c=m,d=a.dom;b=b!==!1,b?c++:c--,d.removeClass(h(m),"mce-match-marker-selected");var e=h(c);return e.length?(d.addClass(h(c),"mce-match-marker-selected"),a.selection.scrollIntoView(e[0]),c):-1}function j(b){var c=a.dom,d=b.parentNode;c.remove(b),c.isEmpty(d)&&c.remove(d)}function k(a){var b=e(a);return null!==b&&b.length>0}var l=this,m=-1;l.init=function(a){a.addMenuItem("searchreplace",{text:"Find and replace",shortcut:"Meta+F",onclick:d,separator:"before",context:"edit"}),a.addButton("searchreplace",{tooltip:"Find and replace",shortcut:"Meta+F",onclick:d}),a.addCommand("SearchReplace",d),a.shortcuts.add("Meta+F","",d)},l.find=function(a,b,c){a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),a=a.replace(/\s/g,"\\s"),a=c?"\\b"+a+"\\b":a;var d=f(new RegExp(a,b?"g":"gi"));return d&&(m=-1,m=i(!0)),d},l.next=function(){var a=i(!0);a!==-1&&(m=a)},l.prev=function(){var a=i(!1);a!==-1&&(m=a)},l.replace=function(c,d,f){var i,n,o,p,q,r,s=m;for(d=d!==!1,o=a.getBody(),n=b.grep(b.toArray(o.getElementsByTagName("span")),k),i=0;i<n.length;i++){var t=e(n[i]);if(p=q=parseInt(t,10),f||p===m){for(c.length?(n[i].firstChild.nodeValue=c,g(n[i])):j(n[i]);n[++i];){if(p=parseInt(e(n[i]),10),p!==q){i--;break}j(n[i])}d&&s--}else q>m&&n[i].setAttribute("data-mce-index",q-1)}return a.undoManager.add(),m=s,d?(r=h(s+1).length>0,l.next()):(r=h(s-1).length>0,l.prev()),!f&&r},l.done=function(c){var d,f,h,i;for(f=b.toArray(a.getBody().getElementsByTagName("span")),d=0;d<f.length;d++){var j=e(f[d]);null!==j&&j.length&&(j===m.toString()&&(h||(h=f[d].firstChild),i=f[d].firstChild),g(f[d]))}if(h&&i){var k=a.dom.createRng();return k.setStart(h,0),k.setEnd(i,i.data.length),c!==!1&&a.selection.setRng(k),k}}}return a.add("searchreplace",d),function(){}}),d("0")()}();
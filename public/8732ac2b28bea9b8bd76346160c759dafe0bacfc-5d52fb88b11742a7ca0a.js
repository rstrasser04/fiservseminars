(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/ula":function(e,t,n){"use strict";var r=n("KQm4"),o=n("o0o1"),a=n.n(o),i=(n("ls82"),n("HaE+")),c=n("dI71"),l=n("q1tI"),s=n.n(l),u=(n("Wbzz"),n("AL3R")),d=n("X4fA"),f="\n  mutation CreateNote(\n    $input: CreateNoteInput!\n    $condition: ModelNoteConditionInput\n  ) {\n    createNote(input: $input, condition: $condition) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",h="\n  mutation UpdateNote(\n    $input: UpdateNoteInput!\n    $condition: ModelNoteConditionInput\n  ) {\n    updateNote(input: $input, condition: $condition) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",p="\n  mutation DeleteNote(\n    $input: DeleteNoteInput!\n    $condition: ModelNoteConditionInput\n  ) {\n    deleteNote(input: $input, condition: $condition) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",m="\n  query ListNotes(\n    $filter: ModelNoteFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        note\n        createdAt\n        updatedAt\n        owner\n      }\n      nextToken\n    }\n  }\n",v=Object(d.a)(),w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={id:"",note:"",notes:[]},t.getUser=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.currentAuthenticatedUser();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),t.getNotes=Object(i.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.graphql(Object(u.d)(m));case 2:n=e.sent,t.setState({notes:n.data.listNotes.items});case 4:case"end":return e.stop()}}),e)}))),t.handleChangeNote=function(e){return t.setState({note:e.target.value})},t.hasExistingNote=function(){var e=t.state,n=e.notes,r=e.id;return!!r&&n.findIndex((function(e){return e.id===r}))>-1},t.handleUpdateNote=Object(i.a)(a.a.mark((function e(){var n,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,r=n.id,o=n.note,i={id:r,note:o},e.next=4,u.a.graphql(Object(u.d)(h,{textarea:i}));case 4:case"end":return e.stop()}}),e)}))),t.handleAddNote=function(){var e=Object(i.a)(a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.state.note,n.preventDefault(),!t.hasExistingNote()){e.next=6;break}t.handleUpdateNote(),e.next=10;break;case 6:return o={note:r},e.next=9,u.a.graphql(Object(u.d)(f,{textarea:o}));case 9:t.setState({note:""});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleDeleteNote=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t},e.next=3,u.a.graphql(Object(u.d)(p,{textarea:n}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleSetNote=function(e){var n=e.note,r=e.id;return t.setState({note:n,id:r})},t}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.getNotes(),this.createNoteListener=this.getUser().then((function(t){u.a.graphql(Object(u.d)("\n  subscription OnCreateNote($owner: String!) {\n    onCreateNote(owner: $owner) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",{owner:t.username})).subscribe({next:function(t){var n=t.value.data.onCreateNote,o=e.state.notes.filter((function(e){return e.id!==n.id})),a=[].concat(Object(r.a)(o),[n]);e.setState({notes:a})},error:function(e){console.warn(e)}})})),this.deleteNoteListener=this.getUser().then((function(t){u.a.graphql(Object(u.d)("\n  subscription OnDeleteNote($owner: String!) {\n    onDeleteNote(owner: $owner) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",{owner:t.username})).subscribe({next:function(t){var n=t.value.data.onDeleteNote,r=e.state.notes.filter((function(e){return e.id!==n.id}));e.setState({notes:r})}})})),this.updateNoteListener=this.getUser().then((function(t){u.a.graphql(Object(u.d)("\n  subscription OnUpdateNote($owner: String!) {\n    onUpdateNote(owner: $owner) {\n      id\n      note\n      createdAt\n      updatedAt\n      owner\n    }\n  }\n",{owner:t.username})).subscribe({next:function(t){var n=e.state.notes,o=t.value.data.onUpdateNote,a=n.findIndex((function(e){return e.id===o.id})),i=[].concat(Object(r.a)(n.slice(0,a)),[o],Object(r.a)(n.slice(a+1)));e.setState({notes:i,note:"",id:""})}})}))},n.render=function(){var e=this,t=v.name,n=this.state,r=n.notes,o=n.note,a=n.id;return s.a.createElement("div",{className:"notes-wrapper"},s.a.createElement("h1",null,"Notes"),s.a.createElement("div",{className:"notes-form"},s.a.createElement("p",null,"User: ",t),s.a.createElement("form",{onSubmit:this.handleAddNote},s.a.createElement("textarea",{type:"text",placeholder:"Write your note!",onChange:this.handleChangeNote,value:o,className:"notes-input"}),s.a.createElement("button",{className:"add-note",type:"submit"},a?"Update Note":"Add Note")),s.a.createElement("div",null,r.map((function(t){return s.a.createElement("div",{key:t.id,className:"flex items-center"},s.a.createElement("li",{onClick:function(){return e.handleSetNote(t)},className:""},t.note),s.a.createElement("button",{onClick:function(){return e.handleDeleteNote(t.id)}},s.a.createElement("span",null,"×")))})))))},t}(s.a.Component);t.a=w},"F0+o":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("6qGY"),i=n.n(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e){for(var t=e.url,n=e.allowFullScreen,r=e.position,a=e.display,l=e.height,s=e.width,u=e.overflow,d=e.styles,f=e.onLoad,h=e.onMouseOver,p=e.onMouseOut,m=e.scrolling,v=e.id,w=e.frameBorder,y=e.ariaHidden,g=e.sandbox,b=e.allow,N=e.className,E=e.title,x=e.ariaLabel,O=e.ariaLabelledby,j=e.name,L=e.target,k=e.loading,A=e.importance,$=e.referrerpolicy,S=e.allowpaymentrequest,I=e.src,C=i()({src:I||t,target:L||null,style:{position:r||null,display:a||"block",overflow:u||null},scrolling:m||null,allowpaymentrequest:S||null,importance:A||null,sandbox:g||null,loading:k||null,styles:d||null,name:j||null,className:N||null,referrerpolicy:$||null,title:E||null,allow:b||null,id:v||null,"aria-labelledby":O||null,"aria-hidden":y||null,"aria-label":x||null,width:s||null,height:l||null,onLoad:f||null,onMouseOver:h||null,onMouseOut:p||null}),M=Object.create(null),U=0,P=Object.keys(C);U<P.length;U++){var T=P[U];null!=C[T]&&(M[T]=C[T])}for(var F=0,_=Object.keys(M.style);F<_.length;F++){var q=_[F];null==M.style[q]&&delete M.style[q]}if(n)if("allow"in M){var D=M.allow.replace("fullscreen","");M.allow=("fullscreen "+D.trim()).trim()}else M.allow="fullscreen";return w>=0&&(M.style.hasOwnProperty("border")||(M.style.border=w)),o.a.createElement("iframe",c({},M))};t.a=function(){return"http://localhost:8000/app/meetings"===window.location.href||"https://test.fiservseminars.com/meetings"===window.location.href?o.a.createElement("section",{className:"left meetings"},o.a.createElement("div",null,o.a.createElement("h1",null,"Video Feed"),o.a.createElement(l,{url:"https://www.youtube.com/embed/28MfzZ1mtF4",width:"560px",height:"315px",id:"myId",className:"myClassname",display:"initial",position:"relative"})),o.a.createElement("div",{className:"chat"},o.a.createElement("h1",null,"Live Chat"),o.a.createElement("div",{className:"chat-window"}))):o.a.createElement("section",{className:"left"},o.a.createElement("div",null,o.a.createElement("h1",null,"Introduction"),o.a.createElement("div",{className:"welcome-video"},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Cpcv-g9TEPI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),o.a.createElement("p",null,"We are better together. Join Fiserv experts and your peers for interactive presentations and discussions that provide the necessary insight to become more efficient. Use this virtual venue to learn more about the software you use every day and share your best practices and software tips all while building a diverse network of professional relationships."),o.a.createElement("p",null,"This fall, the Precision Education Seminars are three days of interactive sessions that provide the ideal setting to gain new perspectives and make valuable connections with peers and Fiserv experts. During the three days you will experience a Simulive training event, On-Demand recordings including a look into the new User Interface (UI) and Abiliti for online banking, a virtual social hour, a chance to win awesome prizes, a few special video surprises and access to the electronic version of the meeting material.")))}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,l,"next",e)}function l(e){r(i,o,a,c,l,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},LKIc:function(e,t,n){"use strict";var r,o=n("q1tI"),a=n.n(o),i=n("wx14"),c=n("zLVn"),l=n("TSYQ"),s=n.n(l),u=n("17x9"),d=n.n(u);function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var h="object"==typeof window&&window.Element||function(){};d.a.oneOfType([d.a.string,d.a.func,function(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},d.a.shape({current:d.a.any})]),d.a.oneOfType([d.a.func,d.a.string,d.a.shape({$$typeof:d.a.symbol,render:d.a.func}),d.a.arrayOf(d.a.oneOfType([d.a.func,d.a.string,d.a.shape({$$typeof:d.a.symbol,render:d.a.func})]))]),"undefined"==typeof window||!window.document||window.document.createElement;function p(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var m=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,u=e.widths,d=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];u.forEach((function(t,n){var r=e[t];if(delete d[t],r){var o=!n;h.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=f(s()(t,r?"no-gutters":null,l?"form-row":"row",h),n);return a.a.createElement(o,Object(i.a)({},d,{className:p}))};m.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var v=m,w=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,r=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach((function(t,r){var o=e[t];if(delete l[t],o||""===o){var a=!r;if(p(o)){var i,c=a?"-":"-"+t+"-",d=w(a,t,o.size);u.push(f(s()(((i={})[d]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var h=w(a,t,o);u.push(h)}}})),u.length||u.push("col");var d=f(s()(t,u),n);return a.a.createElement(o,Object(i.a)({},l,{className:d}))};y.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var g=y,b=(n("Wbzz"),[{title:"How to use Access Manager to it's Fullest Potential",date:"August 5",time:"9:00 am"},{title:"How to use Access Manager to it's Fullest Potential",date:"August 5",time:"9:00 am"}]),N=n("/ula");t.a=function(){return"http://localhost:8000/app/meetings"===window.location.href||"https://test.fiservseminars.com/meetings"===window.location.href?a.a.createElement("section",{className:"right meetings"},a.a.createElement(N.a,null)):a.a.createElement("section",{className:"right"},a.a.createElement("div",null,a.a.createElement("div",{className:"meetingContent"},a.a.createElement("h1",null,"Meetings")),a.a.createElement("div",{className:"meetings"},a.a.createElement(v,{className:""},b.map((function(e,t){return a.a.createElement(g,{key:t,md:5,className:"meetingContent"},a.a.createElement("h3",{className:"meetingTitle"},e.title),a.a.createElement("p",null,e.date," @ ",e.time))}))))))}},ls82:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u={};function d(){}function f(){}function h(){}var p={};p[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==t&&n.call(v,o)&&(p=v);var w=h.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(o,a){function i(){return new t((function(r,i){!function r(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=w.constructor=h,h.constructor=f,f.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[a]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new g(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(w),c(w,i,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,n){e.exports=n("ls82")}}]);
//# sourceMappingURL=8732ac2b28bea9b8bd76346160c759dafe0bacfc-5d52fb88b11742a7ca0a.js.map
(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[8411],{98411:(t,n,r)=>{!function(t){"use strict";t.defineMode("http",(function(){function t(t,n){return t.skipToEnd(),n.cur=i,"error"}function n(n,e){return n.match(/^HTTP\/\d\.\d/)?(e.cur=r,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(e.cur=o,"keyword"):t(n,e)}function r(n,r){var o=n.match(/^\d+/);if(!o)return t(n,r);r.cur=e;var u=Number(o[0]);return u>=100&&u<200?"positive informational":u>=200&&u<300?"positive success":u>=300&&u<400?"positive redirect":u>=400&&u<500?"negative client-error":u>=500&&u<600?"negative server-error":"error"}function e(t,n){return t.skipToEnd(),n.cur=i,null}function o(t,n){return t.eatWhile(/\S/),n.cur=u,"string-2"}function u(n,r){return n.match(/^HTTP\/\d\.\d$/)?(r.cur=i,"keyword"):t(n,r)}function i(t){return t.sol()&&!t.eat(/[ \t]/)?t.match(/^.*?:/)?"atom":(t.skipToEnd(),"error"):(t.skipToEnd(),"string")}function c(t){return t.skipToEnd(),null}return{token:function(t,n){var r=n.cur;return r!=i&&r!=c&&t.eatSpace()?null:r(t,n)},blankLine:function(t){t.cur=c},startState:function(){return{cur:n}}}})),t.defineMIME("message/http","http")}(r(4631))}}]);
//# sourceMappingURL=8411.40bf0122a3401ded0fd9.js.map
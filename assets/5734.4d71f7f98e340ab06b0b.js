(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[5734],{15734:(e,n,t)=>{!function(e){"use strict";e.defineMode("octave",(function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),t=new RegExp("^[\\(\\[\\{\\},:=;\\.]"),r=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),i=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=new RegExp("^((>>=)|(<<=))"),a=new RegExp("^[\\]\\)]"),c=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),s=e(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),m=e(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);function u(e,n){return e.sol()||"'"!==e.peek()?(n.tokenize=l,l(e,n)):(e.next(),n.tokenize=l,"operator")}function f(e,n){return e.match(/^.*%}/)?(n.tokenize=l,"comment"):(e.skipToEnd(),"comment")}function l(h,d){if(h.eatSpace())return null;if(h.match("%{"))return d.tokenize=f,h.skipToEnd(),"comment";if(h.match(/^[%#]/))return h.skipToEnd(),"comment";if(h.match(/^[0-9\.+-]/,!1)){if(h.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return h.tokenize=l,"number";if(h.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(h.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(h.match(e(["nan","NaN","inf","Inf"])))return"number";var p=h.match(/^"(?:[^"]|"")*("|$)/)||h.match(/^'(?:[^']|'')*('|$)/);return p?p[1]?"string":"string error":h.match(m)?"keyword":h.match(s)?"builtin":h.match(c)?"variable":h.match(n)||h.match(r)?"operator":h.match(t)||h.match(i)||h.match(o)?null:h.match(a)?(d.tokenize=u,null):(h.next(),"error")}return{startState:function(){return{tokenize:l}},token:function(e,n){var t=n.tokenize(e,n);return"number"!==t&&"variable"!==t||(n.tokenize=u),t},lineComment:"%",fold:"indent"}})),e.defineMIME("text/x-octave","octave")}(t(4631))}}]);
//# sourceMappingURL=5734.4d71f7f98e340ab06b0b.js.map
!function(t,e,a,i){var s=a.config.menuSettings,n=MathJax.Extension.AssistiveMML={version:"2.7.9",config:a.CombineConfig("AssistiveMML",{disabled:!1,styles:{".MJX_Assistive_MathML":{position:"absolute!important",top:0,left:0,clip:a.Browser.isMSIE&&(document.documentMode||0)<8?"rect(1px 1px 1px 1px)":"rect(1px, 1px, 1px, 1px)",padding:"1px 0 0 0!important",border:"0!important",height:"1px!important",width:"1px!important",overflow:"hidden!important",display:"block!important","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},".MJX_Assistive_MathML.MJX_Assistive_MathML_Block":{width:"100%!important"}}}),Config:function(){this.config.disabled||null!=s.assistiveMML||a.Config({menuSettings:{assistiveMML:!0}}),t.Styles(this.config.styles),a.Register.MessageHook("End Math",(function(t){if(s.assistiveMML)return n.AddAssistiveMathML(t[1])}))},AddAssistiveMathML:function(t){var e={jax:a.getAllJax(t),i:0,callback:MathJax.Callback({})};return this.HandleMML(e),e.callback},RemoveAssistiveMathML:function(t){for(var e,i=a.getAllJax(t),s=0,n=i.length;s<n;s++)(e=document.getElementById(i[s].inputID+"-Frame"))&&e.getAttribute("data-mathml")&&(e.removeAttribute("data-mathml"),e.lastChild&&e.lastChild.className.match(/MJX_Assistive_MathML/)&&e.removeChild(e.lastChild))},HandleMML:function(t){var e,a,s,n,o=t.jax.length,l=MathJax.ElementJax.mml;for(l.copyAttributes.id=1;t.i<o;){if(e=t.jax[t.i],s=document.getElementById(e.inputID+"-Frame"),"NativeMML"!==e.outputJax&&"PlainSource"!==e.outputJax&&s&&!s.getAttribute("data-mathml")){try{a=e.root.toMathML("").replace(/\n */g,"").replace(/<!--.*?-->/g,"")}catch(e){if(l.copyAttributes.id=!0,!e.restart)throw e;return MathJax.Callback.After(["HandleMML",this,t],e.restart)}s.setAttribute("data-mathml",a),n=i.addElement(s,"span",{isMathJax:!0,unselectable:"on",className:"MJX_Assistive_MathML"+("block"===e.root.Get("display")?" MJX_Assistive_MathML_Block":"")});try{n.innerHTML=a}catch(t){}s.style.position="relative",s.setAttribute("role","presentation"),s.firstChild.setAttribute("aria-hidden","true"),n.setAttribute("role","presentation")}t.i++}l.copyAttributes.id=!0,t.callback()}};a.Startup.signal.Post("AssistiveMML Ready")}(MathJax.Ajax,MathJax.Callback,MathJax.Hub,MathJax.HTML),MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/toMathML.js"],["loadComplete",MathJax.Ajax,"[MathJax]/extensions/AssistiveMML.js"],(function(){MathJax.Hub.Register.StartupHook("End Config",["Config",MathJax.Extension.AssistiveMML])}));
!function(t,e,i,a){var s,n,h,o,r,l=e.Browser.isMSIE;e.Register.StartupHook("MathZoom Ready",(function(){r=MathJax.Extension.MathZoom}));var d=function(t,e){var i=a.Element("span");t="padding"+t,e&&(i.style.cssText=e.getAttribute("style")||"",""===i.style.padding&&""===(i.style[t]||"")&&(i.style[t]="0px",e.setAttribute("style",i.style.cssText)))},M=function(t,e,i){if(t){var s=a.Element("span");if(s.style.cssText=t.getAttribute("style")||"",""===s.style.padding){var n={paddingLeft:i,paddingTop:e,paddingRight:"0px",paddingBottom:"0px"};for(var h in n)n.hasOwnProperty(h)&&""===(s.style[h]||"")&&(s.style[h]=n[h])}t.setAttribute("style",s.style.cssText)}};t.Augment({config:{styles:{".MathJax_MathML":{"font-style":"normal","font-weight":"normal","line-height":"normal","font-size":"100%","font-size-adjust":"none","text-indent":0,"text-align":"left","text-transform":"none","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none",direction:"ltr","max-width":"none","max-height":"none","min-width":0,"min-height":0,border:0,padding:0,margin:0},"span.MathJax_MathML":{display:"inline!important"},"div.MathJax_MathML":{display:"block!important"},".MathJax_mmlExBox":{display:"block!important",overflow:"hidden",height:"1px",width:"60ex","min-height":0,"max-height":"none",padding:0,border:0,margin:0}}},handlesVariants:!1,settings:e.config.menuSettings,ex:1,scale:1,adjustWidths:[],Config:function(){if(this.SUPER(arguments).Config.call(this),this.settings.scale&&(this.config.scale=this.settings.scale),"center"!==e.config.displayAlign){var t=e.config.displayAlign,i=e.config.displayIndent,a={"text-align":t+"!important"};a["margin-"+t]=i+"!important",e.Insert(this.config.styles,{"div.MathJax_MathML":a,"div.MathJax_MathML math":{"text-align":t},"div.MathJax_MathContainer > span":{"text-align":t+"!important"}})}this.require||(this.require=[]),this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){return n=MathJax.Extension.MathEvents.Event,h=MathJax.Extension.MathEvents.Touch,o=MathJax.Extension.MathEvents.Hover,this.ContextMenu=n.ContextMenu,this.Mousedown=n.AltContextMenu,this.Mouseover=o.Mouseover,this.Mouseout=o.Mouseout,this.Mousemove=o.Mousemove,e.Browser.hasMathPlayer||(this.EmExSpan=a.Element("span",{style:{position:"absolute","font-size-adjust":"none"}},[["div",{className:"MathJax_mmlExBox"}],["span",{className:"MathJax_MathML"}]]),s.math(s.mspace().With({width:"60ex"})).toNativeMML(this.EmExSpan.lastChild)),i.Styles(this.config.styles)},InitializeMML:function(){if(this.initialized=!0,e.Browser.hasMathPlayer)try{if(!e.Browser.mpNamespace){var t=document.createElement("object");t.id="mathplayer",t.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987",document.getElementsByTagName("head")[0].appendChild(t),document.namespaces.add("m","http://www.w3.org/1998/Math/MathML"),e.Browser.mpNamespace=!0}e.Browser.mpImported||(document.namespaces.m.doImport("#mathplayer"),e.Browser.mpImported=!0)}catch(t){this.config.noMathPlayerWarning||alert(MathJax.Localization._(["MathML","MathPlayer"],"MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics."))}else document.body.appendChild(this.EmExSpan),this.defaultEx=this.EmExSpan.firstChild.offsetWidth/60,this.defaultMEx=this.EmExSpan.lastChild.offsetWidth/60,document.body.removeChild(this.EmExSpan)},preTranslate:function(t){var e,i,s,n,h,o,r,d,M,m,u=t.jax[this.id],p=u.length;for(e=0;e<p;e++)if((i=u[e]).parentNode&&(this.initialized||this.InitializeMML(),(s=i.previousSibling)&&"MathJax_MathML"===s.className&&s.parentNode.removeChild(s),r=i.MathJax.elementJax)){o=r.root,r.NativeMML={};var c="block"===o.Get("display")?"div":"span";n=a.Element(c,{className:"MathJax_MathML",id:r.inputID+"-Frame"},[["span",{className:"MathJax_MathContainer",isMathJax:!0,jaxID:this.id,style:{position:"relative",display:"inline-block","white-space":"nowrap"}},[["span",{isMathJax:!0,style:{display:"inline-block"}}]]]]),i.parentNode.insertBefore(n,i),l||i.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),i)}for(e=0;e<p;e++)(i=u[e]).parentNode&&(r=i.MathJax.elementJax)&&(l?m=100:(d=(h=i.previousSibling).firstChild.offsetWidth/60,M=h.lastChild.offsetWidth/60,0!==d&&"NaN"!==d||(d=this.defaultEx,M=this.defaultMEx),m=this.config.matchFontHeight&&M>1?d/M:1,m=Math.floor(Math.max(this.config.minScaleAdjust/100,m)*this.config.scale),r.NativeMML.ex=d,r.NativeMML.mex=M),r.NativeMML.fontSize=m+"%",r.NativeMML.scale=m/100);if(!l)for(e=0;e<p;e++)(i=u[e]).parentNode&&i.MathJax.elementJax&&i.parentNode.removeChild(i.previousSibling)},Translate:function(t){if(t.parentNode){var i=t.MathJax.elementJax,a=i.root,s=document.getElementById(i.inputID+"-Frame");if(s){var o=s.firstChild,r=o.firstChild;this.ex=i.NativeMML.ex||this.defaultEx,this.scale=i.NativeMML.scale||1,1!==this.scale&&(s.style.fontSize=i.NativeMML.fontSize);try{a.toNativeMML(r,i)}catch(t){if(t.restart)for(;r.firstChild;)r.removeChild(r.firstChild);throw t}if(l)if(o.addEventListener)for(var d in this.MSIE9events)this.MSIE9events.hasOwnProperty(d)&&o.addEventListener(d,this.MSIE9event,!0);else!(null!=this.config.showMathMenuMSIE?this:e).config.showMathMenuMSIE||this.settings.mpContext||this.settings.mpMouse?(o.style.position="",r.firstChild.onmousedown=this.MSIEaltMenu):this.MSIEoverlay(o);else o.oncontextmenu=n.Menu,o.onmouseover=n.Mouseover,o.onmouseout=n.Mouseout,o.onmousedown=n.Mousedown,o.onclick=n.Click,o.ondblclick=n.DblClick,o.onkeydown=n.Keydown,o.tabIndex=e.getTabOrder(i),e.Browser.noContextMenu&&(o.ontouchstart=h.start,o.ontouchend=h.end)}}},postTranslate:function(t){if(this.forceReflow){var e=(document.styleSheets||[])[0]||{};e.disabled=!0,e.disabled=!1}},Remove:function(t){var e=t.SourceElement();e&&(e=e.previousSibling)&&e.className.match(/MathJax_MathML/)&&e.parentNode.removeChild(e)},MMLnamespace:"http://www.w3.org/1998/Math/MathML",isFullWidth:function(t){if(t){var e=t.getAttribute("width")||(String(t.getAttribute("style")).match(/(?:^| )width: *([^; ]*)/)||[])[1];if(e)return!!e.match(/%/);if(t.nodeName.match(/^(semantics|math|mstyle)$/))e=this.isFullWidth(t.firstChild);else if("mrow"===t.nodeName.toLowerCase())for(var i=0,a=t.childNodes.length;i<a&&!e;i++)e=this.isFullWidth(t.childNodes[i]);if(e){var s="width:100%; "+(t.getAttribute("style")||"");t.setAttribute("style",s.replace(/ +$/,""))}return e}},MSIEoverlay:function(t){var i=t.firstChild;"span"===i.nodeName.toLowerCase()&&(i=i.firstChild);var s=this.getHoverBBox(null,i,{});a.addElement(t,"span",{style:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{isMathJax:!0,className:"MathJax_MathPlayer_Overlay",style:{display:"inline-block",position:"absolute",left:o.Px(-s.w),top:o.Px(-s.h-(s.y||0)-1),width:o.Px(s.w),height:o.Px(s.h+s.d),cursor:"pointer","background-color":"white",filter:"alpha(opacity=0)"}}]]),e.Insert(t,{msieMath:i,onmousedown:this.MSIEevent,oncontextmenu:this.MSIEevent,onclick:this.MSIEevent,onmouseup:this.MSIEevent,onmousemove:this.MSIEevent,ondblclick:this.MSIEevent,onmouseover:this.MSIEevent,onmouseout:this.MSIEevent})},MSIEevents:{mousedown:"Mousedown",contextmenu:"ContextMenu",click:"Click",mouseup:"Mouseup",mousemove:"Mousemove",dblclick:"DblClick",mouseover:"Mouseover",mouseout:"Mouseout"},MSIEevent:function(){var e=window.event,i=t.MSIEevents[e.type];return(!t[i]||!1!==t[i](e,this))&&(!r||!1!==r.HandleEvent(e,i,this))&&("MathJax_MathPlayer_Overlay"===e.srcElement.className&&this.msieMath.fireEvent&&("ContextMenu"!==i&&"Mouseover"!==i&&"Mouseout"!==i||this.msieMath.fireEvent("on"+e.type,e)),n.False(e))},MSIEaltMenu:function(){for(var t=this.parentNode.parentNode;!t.jaxID;)t=t.parentNode;n.AltContextMenu(window.event,t)},MSIE9events:{contextmenu:"Menu",click:"Click",dblclick:"DblClick",mouseup:"False",mouseover:"Mouseover",mouseout:"Mouseout"},MSIE9event:function(e){if("contextmenu"===e.type&&t.settings.mpContext)return!0;if("mouseup"===e.type&&t.settings.mpMouse)return!0;if("click"===e.type&&t.settings.mpContext)return n.AltContextMenu(e,this);var i=t.MSIE9events[e.type];return n[i].call(this,e)},getJaxFromMath:function(t){t=t.parentNode;do{t=t.nextSibling}while(t&&"script"!==t.nodeName.toLowerCase());return e.getJaxFor(t)},getHoverSpan:function(t,e){return e.firstChild},getHoverBBox:function(t,e,i){return n.getBBox(e.parentNode)},Zoom:function(e,i,a,s,h){e.root.toNativeMML(i),this.msieIE8HeightBug&&(i.style.position="absolute"),t.widthBug&&(i.style.width=i.parentNode.style.width=""),i.parentNode.style.width.match(/%$/)&&(i.parentNode.style.minWidth=Math.ceil(3*h/4)+"px");var o=a.offsetWidth||a.scrollWidth,r=a.offsetHeight||a.scrollHeight,l=i.offsetWidth,d=i.offsetHeight;if(t.widthBug||i.style.width.match(/%/)){var M=i.firstChild.firstChild.scrollWidth;M>l&&(l=M,i.parentNode.style.width=i.style.minWidth=l+"px")}return this.msieIE8HeightBug&&(i.style.position=""),{Y:-n.getBBox(i.parentNode).h,mW:o,mH:r,zW:l,zH:d}},NAMEDSPACE:{negativeveryverythinmathspace:"-.0556em",negativeverythinmathspace:"-.1111em",negativethinmathspace:"-.1667em",negativemediummathspace:"-.2222em",negativethickmathspace:"-.2778em",negativeverythickmathspace:"-.3333em",negativeveryverythickmathspace:"-.3889em",veryverythinmathspace:".0556em",verythinmathspace:".1111em",thinmathspace:".1667em",mediummathspace:".2222em",thickmathspace:".2778em",verythickmathspace:".3333em",veryverythickmathspace:".3889em"}}),e.Register.StartupHook("mml Jax Ready",(function(){if((s=MathJax.ElementJax.mml).mbase.Augment({toNativeMML:function(t){var e=this.NativeMMLelement(this.type);this.NativeMMLattributes(e);for(var i=0,a=this.data.length;i<a;i++)this.data[i]?this.data[i].toNativeMML(e):e.appendChild(this.NativeMMLelement("mrow"));t.appendChild(e)},NativeMMLattributes:function(t){var e="mstyle"===this.type?s.math.prototype.defaults:this.defaults,i=this.attrNames||s.copyAttributeNames,a=s.skipAttributes,n=s.copyAttributes;if(!this.attrNames)for(var h in e)a[h]||n[h]||!e.hasOwnProperty(h)||null!=this[h]&&this[h]!==e[h]&&this.Get(h,null,1)!==this[h]&&t.setAttribute(h,this.NativeMMLattribute(this[h]));for(var o=0,r=i.length;o<r;o++)if(1!==n[i[o]]||e.hasOwnProperty(i[o])){var l=(this.attr||{})[i[o]];null==l&&(l=this[i[o]]),null!=l&&t.setAttribute(i[o],this.NativeMMLattribute(l))}this.NativeMMLclass(t)},NativeMMLclass:function(t){var e=[];if(this.class&&e.push(this.class),this.isa(s.TeXAtom)){var i=["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];i&&(e.push("MJX-TeXAtom-"+i),"OP"!==i||this.movablelimits||e.push("MJX-fixedlimits"))}this.mathvariant&&this.NativeMMLvariants[this.mathvariant]&&e.push("MJX"+this.mathvariant),this.variantForm&&e.push("MJX-variant"),e.length&&t.setAttribute("class",e.join(" "))},NativeMMLattribute:function(e){return e=String(e),t.NAMEDSPACE[e]?e=t.NAMEDSPACE[e]:e.match(/^\s*(([-+])?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)?e=(RegExp.$2||"")+(1/18*RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em":this.NativeMMLvariants[e]&&(e=this.NativeMMLvariants[e]),e},NativeMMLvariants:{"-tex-caligraphic":s.VARIANT.SCRIPT,"-tex-caligraphic-bold":s.VARIANT.BOLDSCRIPT,"-tex-oldstyle":s.VARIANT.NORMAL,"-tex-oldstyle-bold":s.VARIANT.BOLD,"-tex-mathit":s.VARIANT.ITALIC},NativeMMLelement:function(i){var a=e.Browser.mpNamespace?document.createElement("m:"+i):document.createElementNS?document.createElementNS(t.MMLnamespace,i):document.createElement(i);return a.isMathJax=!0,a}}),s.mrow.Augment({toNativeMML:function(e){var i,a;if(this.inferred&&this.parent.inferRow)for(i=0,a=this.data.length;i<a;i++)this.data[i]?this.data[i].toNativeMML(e):e.appendChild(this.NativeMMLelement("mrow"));else if(t.stretchyMoBug&&(this.open||this.close)){var s=this.NativeMMLelement("mfenced");this.NativeMMLattributes(s),i=0,a=this.data.length,this.open&&(s.setAttribute("open",this.open),i++),this.close&&(s.setAttribute("close",this.close),a--);var n=s;for(a-i+1>1&&(n=this.NativeMMLelement("mrow"),e.appendChild(s),e=s);i<a;i++)this.data[i]?this.data[i].toNativeMML(n):n.appendChild(this.NativeMMLelement("mrow"));e.appendChild(n)}else this.SUPER(arguments).toNativeMML.call(this,e)}}),s.msubsup.Augment({toNativeMML:function(t){var e=this.type;null==this.data[this.sup]&&(e="msub"),null==this.data[this.sub]&&(e="msup");var i=this.NativeMMLelement(e);this.NativeMMLattributes(i),this.data[0]&&delete this.data[0].inferred;for(var a=0,s=this.data.length;a<s;a++)this.data[a]&&this.data[a].toNativeMML(i);t.appendChild(i)}}),s.munderover.Augment({toNativeMML:function(t){var e=this.type,i=this.data[this.base];i&&i.isa(s.TeXAtom)&&i.movablelimits&&!i.Get("displaystyle")?(e="msubsup",null==this.data[this.under]&&(e="msup"),null==this.data[this.over]&&(e="msub")):(null==this.data[this.under]&&(e="mover"),null==this.data[this.over]&&(e="munder"));var a=this.NativeMMLelement(e);this.NativeMMLattributes(a),this.data[0]&&delete this.data[0].inferred;for(var n=0,h=this.data.length;n<h;n++)this.data[n]&&this.data[n].toNativeMML(a);t.appendChild(a)}}),!l){var n=e.SplitList;s.mtable.Augment({toNativeMML:function(i){var a,h;if(t.tableSpacingBug){var o=this.getValues("rowspacing","columnspacing");this.nMMLtopPadding=n("0px "+o.rowspacing),this.nMMLleftPadding=n("0px "+o.columnspacing);var r=this.nMMLtopPadding,l=r.length;for(a=0,h=this.data.length;a<h;a++)this.data[a]&&(this.data[a].nMMLtopPadding=r[a<l?a:l-1])}if(t.tableLabelBug)for(a=0,h=this.data.length;a<h;a++)if(this.data[a]&&this.data[a].isa(s.mlabeledtr)){var d=e.config.displayAlign.charAt(0),M=this.Get("side").charAt(0);this.nMMLhasLabels=!0,this.nMMLlaMatch=d===M,this.nMMLforceWidth="c"===d||!!(this.width||"").match("%");break}if(this.width&&this.ffTableWidthBug){var m=(this.style||"").replace(/;\s*$/,"").split(";");""===m[0]&&m.shift(),m.push("width:"+this.width),this.style=m.join(";")}if(this.SUPER(arguments).toNativeMML.call(this,i),this.nMMLhasLabels){var u=i.firstChild;if(this.nMMLforceWidth||"r"!==M){var p=("l"!==d?1:0)+("l"===M?1:0);if(p){var c={columnalign:"left",columnwidth:"auto",columnspacing:"0px",columnlines:"none"};for(var f in c)if(c.hasOwnProperty(f)&&this[f]){var v=[c[f],c[f]].slice(2-p).join(" ")+" ";u.setAttribute(f,v+u.getAttribute(f))}}}!this.nMMLforceWidth&&this.nMMLlaMatch||u.setAttribute("width","100%")}}}),s.mtr.Augment({toNativeMML:function(i){this.SUPER(arguments).toNativeMML.call(this,i);var a=i.lastChild;if(t.tableSpacingBug)for(var s=this.parent.nMMLleftPadding,n=s.length,h=a.firstChild,o=0;h;h=h.nextSibling,o++)M(h,this.nMMLtopPadding,s[o<n?o:n-1]);if(t.tableLabelBug){var r=this.parent.nMMLforceWidth,l=this.parent.Get("side").charAt(0),m=e.config.displayAlign.charAt(0);this.parent.nMMLhasLabels&&a.firstChild&&((r||"r"!==l)&&(d("Left",a.firstChild),"l"!==m&&a.insertBefore(this.NativeMMLelement("mtd"),a.firstChild).setAttribute("style","padding:0"),"l"===l&&a.insertBefore(this.NativeMMLelement("mtd"),a.firstChild).setAttribute("style","padding:0")),(r||"l"!==l)&&d("Right",a.lastChild))}}}),s.mlabeledtr.Augment({toNativeMML:function(i){var a=this.NativeMMLelement("mtr");this.NativeMMLattributes(a);for(var s=1,n=this.data.length;s<n;s++)this.data[s]?this.data[s].toNativeMML(a):a.appendChild(this.NativeMMLelement("mtd"));if(t.tableSpacingBug){var h=this.parent.nMMLleftPadding,o=h.length;s=0;for(var r=a.firstChild;r;r=r.nextSibling,s++)M(r,this.nMMLtopPadding,h[s<o?s:o-1])}if(t.tableLabelBug&&this.data[0]){var l=this.parent.Get("side").charAt(0),m=e.config.displayAlign.charAt(0),u=e.config.displayIndent;this.data[0].toNativeMML(a);var p=a.lastChild,c=p;l===m?(p.setAttribute("style","width:"+u),p.setAttribute("columnalign",e.config.displayAlign)):((c=this.NativeMMLelement("mpadded")).setAttribute("style","width:0"),c.setAttribute("width","0px"),c.appendChild(p.firstChild),p.appendChild(c)),d("",p),a.removeChild(p);var f=100,v=this.parent.nMMLforceWidth;(this.parent.width||"").match(/%/)&&(f-=parseFloat(this.parent.width));var g=f;(v||"r"!==l)&&(d("Left",a.firstChild),"l"!==m&&("c"===m&&(g/=2),f-=g,a.insertBefore(this.NativeMMLelement("mtd"),a.firstChild).setAttribute("style","padding:0;width:"+g+"%")),"l"===l&&a.insertBefore(p,a.firstChild)),(v||"l"!==l)&&(d("Right",a.lastChild),"r"!==m&&a.appendChild(this.NativeMMLelement("mtd")).setAttribute("style","padding:0;width:"+f+"%"),"r"===l&&(l!==m&&c.setAttribute("lspace","-1width"),a.appendChild(p)))}i.appendChild(a)}}),s.mtd.Augment({toNativeMML:function(e){var i=e.appendChild(this.NativeMMLelement(this.type));this.NativeMMLattributes(i),t.mtdWidthBug&&(t.adjustWidths.push(i),i=i.appendChild(this.NativeMMLelement("mrow")));for(var a=0,s=this.data.length;a<s;a++)this.data[a]?this.data[a].toNativeMML(i):i.appendChild(this.NativeMMLelement("mrow"))}}),s.mspace.Augment({toNativeMML:function(e){if(this.SUPER(arguments).toNativeMML.call(this,e),t.spaceWidthBug&&this.width){var i=e.lastChild,a=i.getAttribute("width"),s=(i.getAttribute("style")||"").replace(/;?\s*/,"; ");i.setAttribute("style",s+"width:"+a)}}}),s.mn.Augment({NativeMMLremapMinus:function(t){return t.replace(/^-/,"−")},toNativeMML:function(t){var e=this.NativeMMLelement(this.type);this.NativeMMLattributes(e);for(var i=this.NativeMMLremapMinus,a=0,s=this.data.length;a<s;a++)this.data[a]&&(this.data[a].toNativeMML(e,i),i=null);t.appendChild(e)}});var h=i.fileURL(MathJax.OutputJax.fontDir+"/HTML-CSS/TeX/otf");t.Augment({config:{styles:{'[class="MJX-tex-oldstyle"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-oldstyle-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},'[class="MJX-tex-caligraphic"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-caligraphic-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},"@font-face /*1*/":{"font-family":"MathJax_Caligraphic-WEB",src:"url('"+h+"/MathJax_Caligraphic-Regular.otf')"},"@font-face /*2*/":{"font-family":"MathJax_Caligraphic-WEB","font-weight":"bold",src:"url('"+h+"/MathJax_Caligraphic-Bold.otf')"}}}}),this.handlesVariants||t.Augment({config:{styles:{'[mathvariant="double-struck"]':{"font-family":"MathJax_AMS, MathJax_AMS-WEB"},'[mathvariant="script"]':{"font-family":"MathJax_Script, MathJax_Script-WEB"},'[mathvariant="fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB"},'[mathvariant="bold-script"]':{"font-family":"MathJax_Script, MathJax_Caligraphic-WEB","font-weight":"bold"},'[mathvariant="bold-fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB","font-weight":"bold"},'[mathvariant="monospace"]':{"font-family":"monospace"},'[mathvariant="sans-serif"]':{"font-family":"sans-serif"},'[mathvariant="bold-sans-serif"]':{"font-family":"sans-serif","font-weight":"bold"},'[mathvariant="sans-serif-italic"]':{"font-family":"sans-serif","font-style":"italic"},'[mathvariant="sans-serif-bold-italic"]':{"font-family":"sans-serif","font-style":"italic","font-weight":"bold"},"@font-face /*3*/":{"font-family":"MathJax_AMS-WEB",src:"url('"+h+"/MathJax_AMS-Regular.otf')"},"@font-face /*4*/":{"font-family":"MathJax_Script-WEB",src:"url('"+h+"/MathJax_Script-Regular.otf')"},"@font-face /*5*/":{"font-family":"MathJax_Fraktur-WEB",src:"url('"+h+"/MathJax_Fraktur-Regular.otf')"},"@font-face /*6*/":{"font-family":"MathJax_Fraktur-WEB","font-weight":"bold",src:"url('"+h+"/MathJax_Fraktur-Bold.otf')"}}}})}s.math.Augment({toNativeMML:function(i,a){var s,n,h=this.NativeMMLelement(this.type),o=h,r=a?MathJax.InputJax[a.inputJax].annotationEncoding:null;if(t.adjustWidths=[],h.setAttribute("xmlns",t.MMLnamespace),this.NativeMMLattributes(h),t.widthBug&&(h=h.appendChild(this.NativeMMLelement("mrow"))),r){(h=h.appendChild(this.NativeMMLelement("semantics"))).appendChild(this.NativeMMLelement("mrow"));var l=h.appendChild(this.NativeMMLelement("annotation"));l.appendChild(document.createTextNode(a.originalText)),l.setAttribute("encoding",r),h=h.firstChild}for(s=0,n=this.data.length;s<n;s++)this.data[s]?this.data[s].toNativeMML(h):h.appendChild(this.NativeMMLelement("mrow"));var d=(this.data[0]||{data:[]}).data[0]||{};d.nMMLhasLabels&&(!d.nMMLforceWidth&&d.nMMLlaMatch||(h.setAttribute("style","width:100%"),r&&h.parentNode.setAttribute("style","width:100%")),d.nMMLlaMatch&&"div"===i.parentNode.parentNode.nodeName.toLowerCase()&&i.parentNode.parentNode.style.setProperty("margin-"+e.config.displayAlign,"0px","important"));var M=t.isFullWidth(o);if(M&&(i.style.width=i.parentNode.style.width="100%"),i.appendChild(o),t.widthBug&&!M&&(i.style.width=(o.firstChild.scrollWidth/t.ex/t.scale).toFixed(3)+"ex",a&&(a.NativeMML.scrollWidth=o.firstChild.scrollWidth)),t.adjustWidths.length){var m=[];for(s=0,n=t.adjustWidths.length;s<n;s++){var u=(h=t.adjustWidths[s]).getAttribute("style")||"";if(!u.match(/(^|;)\s*min-width:/)){var p=h.firstChild.scrollWidth;m.push(p),p=(p/t.ex).toFixed(3)+"ex",u=u.replace(/;?\s*$/,"; "),h.setAttribute("style",u+"min-width:"+p)}}a||(a=e.getJaxFor(i)),a&&(a.NativeMML.mtds=m),o.MathJaxMtds=t.adjustWidths,t.adjustWidths=[]}}}),s.mfenced.Augment({toNativeMML:function(i){if(t.mfencedBug){var a,s,n,h=e.Browser.isOpera,o=this.getValues("open","close","separators");if(o.open=o.open.replace(/^\s+/,"").replace(/\s+$/,""),o.close=o.close.replace(/^\s+/,"").replace(/\s+$/,""),o.separators=o.separators.replace(/\s+/g,"").split(""),0==o.separators.length)o.separators=null;else if(o.separators.length<this.data.length-1){var r=o.separators[o.separators.length-1];for(a=this.data.length-1-o.separators.length;a>0;a--)o.separators.push(r)}var l=this.NativeMMLelement(h?this.type:"mrow");for(this.NativeMMLattributes(l),l.removeAttribute("separators"),h?(l.setAttribute("open",o.open),l.setAttribute("close",o.close),this.data.length>1&&(i.appendChild(l),i=l,l=this.NativeMMLelement("mrow"))):(l.removeAttribute("open"),l.removeAttribute("close")),h||((n=this.NativeMMLelement("mo")).setAttribute("fence","true"),n.textContent=o.open,l.appendChild(n)),a=0,s=this.data.length;a<s;a++)o.separators&&a>0&&((n=this.NativeMMLelement("mo")).setAttribute("separator","true"),n.textContent=o.separators[a-1],l.appendChild(n)),this.data[a]?this.data[a].toNativeMML(l):l.appendChild(this.NativeMMLelement("mrow"));h||((n=this.NativeMMLelement("mo")).setAttribute("fence","true"),n.textContent=o.close,l.appendChild(n)),i.appendChild(l)}else this.SUPER(arguments).toNativeMML.call(this,i)}}),s.TeXAtom.Augment({toNativeMML:function(t){var e=this.NativeMMLelement("mrow");this.NativeMMLattributes(e),this.data[0].toNativeMML(e),t.appendChild(e)}}),s.chars.Augment({toNativeMML:function(t,e){var i=this.toString();e&&(i=e(i)),t.appendChild(document.createTextNode(i))}}),s.entity.Augment({toNativeMML:function(t){t.appendChild(document.createTextNode(this.toString()))}}),s.xml.Augment({toNativeMML:function(t){for(var e=0,i=this.data.length;e<i;e++)t.appendChild(this.data[e].cloneNode(!0))}}),s.mi.Augment({toNativeMML:function(e){if(this.SUPER(arguments).toNativeMML.call(this,e),t.miItalicBug&&this.Get("mathvariant")===s.VARIANT.NORMAL){var i=e.lastChild;i.setAttribute("mathvariant",s.VARIANT.NORMAL)}}}),s.mo.Augment({toNativeMML:function(e){if(this.SUPER(arguments).toNativeMML.call(this,e),t.webkitMoSpacingBug){var i=0,s=0,n=this.parent;if(n&&"mrow"===n.type&&(n.inferred||!n.isEmbellished())){var h=this.getValues("lspace","rspace");i=h.lspace,s=h.rspace,t.NAMEDSPACE[i]&&(i=t.NAMEDSPACE[i]),t.NAMEDSPACE[s]&&(s=t.NAMEDSPACE[s])}var o=e.lastChild,r=a.Element("span");r.style.cssText=o.getAttribute("style")||"",r.style.setProperty("-webkit-margin-start",i),r.style.setProperty("-webkit-margin-end",s),o.setAttribute("style",r.style.cssText)}}}),s.mmultiscripts.Augment({toNativeMML:function(e){if(t.mmultiscriptsBug&&0!==this.data.length){var i=this.NativeMMLelement("mrow");this.NativeMMLattributes(i),this.data[0]?this.data[0].toNativeMML(i):i.appendChild(this.NativeMMLelement("mrow"));var a,s,n=i.removeChild(i.lastChild),h=this.data.length;for(a=1;a<h&&"mprescripts"!==this.data[a].type;a+=2)(s=this.NativeMMLelement("msubsup")).appendChild(n),this.data[a]?this.data[a].toNativeMML(s):s.appendChild(this.NativeMMLelement("mrow")),a+1<h&&this.data[a+1]?this.data[a+1].toNativeMML(s):s.appendChild(this.NativeMMLelement("mrow")),n=s;for(i.appendChild(n),a++;a<h;a+=2)(s=this.NativeMMLelement("msubsup")).appendChild(this.NativeMMLelement("mrow")),this.data[a]?this.data[a].toNativeMML(s):s.appendChild(this.NativeMMLelement("mrow")),a+1<h&&this.data[a+1]?this.data[a+1].toNativeMML(s):s.appendChild(this.NativeMMLelement("mrow")),i.insertBefore(s,n);e.appendChild(i)}else this.SUPER(arguments).toNativeMML.call(this,e)}}),e.Register.StartupHook("TeX mathchoice Ready",(function(){s.TeXmathchoice.Augment({toNativeMML:function(t){this.Core().toNativeMML(t)}})})),setTimeout(MathJax.Callback(["loadComplete",t,"jax.js"]),0)})),e.Browser.Select({MSIE:function(e){var i=document.documentMode||0;t.msieIE8HeightBug=8===i},Opera:function(e){t.stretchyMoBug=!0,t.tableLabelBug=!0,t.mfencedBug=!0,t.miBug=!0,t.mmultiscriptsBug=!0},Firefox:function(e){var i=e.versionAtLeast("29.0");t.ffTableWidthBug=!e.versionAtLeast("13.0"),t.forceReflow=!i,t.widthBug=!i,t.mtdWidthBug=!0,t.handlesVariants=i,t.spaceWidthBug=!e.versionAtLeast("20.0"),t.tableSpacingBug=!e.versionAtLeast("33.0"),t.tableLabelBug=!0,t.mfencedBug=!0},Chrome:function(e){t.tableSpacingBug=!0,t.tableLabelBug=!0,t.mfencedBug=!0},Safari:function(e){t.tableSpacingBug=!0,t.tableLabelBug=!0,t.mfencedBug=!0,t.miItalicBug=!0,t.webkitMoSpacingBug=!0,t.spaceWidthBug=!0,t.mmultiscriptsBug=!0}}),e.Register.StartupHook("End Cookie",(function(){"None"!==e.config.menuSettings.zoom&&i.Require("[MathJax]/extensions/MathZoom.js")}))}(MathJax.OutputJax.NativeMML,MathJax.Hub,MathJax.Ajax,MathJax.HTML);
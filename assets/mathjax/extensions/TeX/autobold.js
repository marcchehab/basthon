MathJax.Extension["TeX/autobold"]={version:"2.7.9"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",(function(){MathJax.InputJax.TeX.prefilterHooks.Add((function(e){var t=e.script.parentNode.insertBefore(document.createElement("span"),e.script);t.visibility="hidden",t.style.fontFamily="Times, serif",t.appendChild(document.createTextNode("ABCXYZabcxyz"));var a=t.offsetWidth;t.style.fontWeight="bold",a&&t.offsetWidth===a&&(e.math="\\boldsymbol{"+e.math+"}"),t.parentNode.removeChild(t)})),MathJax.Hub.Startup.signal.Post("TeX autobold Ready")})),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/autobold.js");
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{561:function(e,s,t){"use strict";t.r(s);var r=t(17),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"before-chrome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before-chrome"}},[e._v("#")]),e._v(" before Chrome")]),e._v(" "),t("blockquote",[t("p",[e._v("Browser")])]),e._v(" "),t("ol",[t("li",[e._v("rendering engine")]),e._v(" "),t("li",[e._v("UI")]),e._v(" "),t("li",[e._v("networking")]),e._v(" "),t("li",[e._v("storage")]),e._v(" "),t("li",[e._v("image decoding")]),e._v(" "),t("li",[e._v("plugins")])]),e._v(" "),t("h2",{attrs:{id:"chrome-at-launch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-at-launch"}},[e._v("#")]),e._v(" Chrome at launch")]),e._v(" "),t("blockquote",[t("p",[e._v("IPC(inter-process communication)")])]),e._v(" "),t("ul",[t("li",[e._v("message passing between processes, with shared memory for large data")]),e._v(" "),t("li",[e._v("usually between processes of different privileges, so need security review")])]),e._v(" "),t("blockquote",[t("p",[e._v("multi-process architecture")])]),e._v(" "),t("ol",[t("li",[e._v("Browser( UI, Networking, storage)")]),e._v(" "),t("li",[e._v("Renderer(WebKit)")]),e._v(" "),t("li",[e._v("Plugin(NP API)")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("chrome search input (Browser)")]),e._v(" "),t("p",[e._v("video palyer(Plugin)")]),e._v(" "),t("p",[e._v("page (Renderer)")]),e._v(" "),t("h2",{attrs:{id:"why-multi-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-multi-process"}},[e._v("#")]),e._v(" why Multi-Process?")]),e._v(" "),t("ul",[t("li",[e._v("can't write perfect code")]),e._v(" "),t("li",[e._v("security : untrusted web content shouldn't use exploits to access file system")]),e._v(" "),t("li",[e._v("speed : misbehaving tabs shouldn't impact other tabs or the browser")]),e._v(" "),t("li",[e._v("stability : crashed should only affect the tab and not other tabs or the browser")])]),e._v(" "),t("h2",{attrs:{id:"sandboxing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sandboxing"}},[e._v("#")]),e._v(" Sandboxing")]),e._v(" "),t("ul",[t("li",[e._v("untrusted data can be used to exploit bugs and run arbitrary code")]),e._v(" "),t("li",[e._v("as we moved from simple HTML pages to web apps, more code to exploit")]),e._v(" "),t("li",[e._v("run untrusted web content in a locked-down process where it doesn't have access to file system, OS calls")]),e._v(" "),t("li",[e._v("exact mechanism to lock down a process is platform-specific")]),e._v(" "),t("li",[e._v("multiple levels of sandboxing depending on process type")])]),e._v(" "),t("h2",{attrs:{id:"rendereer-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendereer-process"}},[e._v("#")]),e._v(" Rendereer Process")]),e._v(" "),t("ul",[t("li",[e._v("where data from the web is handled, e.g.\n"),t("ul",[t("li",[e._v("parsing")]),e._v(" "),t("li",[e._v("layout")]),e._v(" "),t("li",[e._v("executing JavaScript")]),e._v(" "),t("li",[e._v("decoding")])])]),e._v(" "),t("li",[e._v("completely sandboxed to prevent bugs from gaining access to user data and or installing malware")])]),e._v(" "),t("h2",{attrs:{id:"plugins-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins-process"}},[e._v("#")]),e._v(" Plugins Process")]),e._v(" "),t("ul",[t("li",[e._v("had to be unsandboxed since plugins were written assuming full access")])]),e._v(" "),t("h2",{attrs:{id:"browser-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#browser-process"}},[e._v("#")]),e._v(" Browser Process")]),e._v(" "),t("ul",[t("li",[e._v("central coordinator")]),e._v(" "),t("li",[e._v("owns browser state such as profile data, settings etc...")]),e._v(" "),t("li",[e._v("draws UI")]),e._v(" "),t("li",[e._v("handles networking")]),e._v(" "),t("li",[e._v("can't trust renderer")])]),e._v(" "),t("h2",{attrs:{id:"chrome-today-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chrome-today-2019"}},[e._v("#")]),e._v(" Chrome Today(2019)")]),e._v(" "),t("blockquote",[t("p",[e._v("diff layers")])]),e._v(" "),t("ul",[t("li",[e._v("GPU(compositing , scrolling)")]),e._v(" "),t("li",[e._v("Browser(UI, Networking, storage)")]),e._v(" "),t("li",[e._v("Utility")]),e._v(" "),t("li",[e._v("Renderer(Blink)")]),e._v(" "),t("li",[e._v("Plugin(Pepper)")]),e._v(" "),t("li",[e._v("Extension")])]),e._v(" "),t("h2",{attrs:{id:"gpu-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-process"}},[e._v("#")]),e._v(" GPU Process")]),e._v(" "),t("ul",[t("li",[e._v("machines with powerful GPUS were becoming widespread")]),e._v(" "),t("li",[e._v("web platform features like WebGL meant that we'd have to make expensive GPU readback to render a page")]),e._v(" "),t("li",[e._v("large project to offload compositing and scrolling to GPU")]),e._v(" "),t("li",[e._v("separate process for stability and security")])]),e._v(" "),t("h2",{attrs:{id:"extension-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extension-process"}},[e._v("#")]),e._v(" Extension Process")]),e._v(" "),t("blockquote",[t("p",[e._v("we wanted to extension system to work well with our core principles")])]),e._v(" "),t("ul",[t("li",[e._v("speed & stability : didn't want badly written extension code to adversely affect pages")]),e._v(" "),t("li",[e._v("security : wanted extensions to have limited access to browser, page and system")]),e._v(" "),t("li",[e._v("simplicity : extensions installed and uninstalled without restart")])])])}),[],!1,null,null,null);s.default=a.exports}}]);
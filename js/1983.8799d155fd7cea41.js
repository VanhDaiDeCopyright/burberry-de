"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1983],{11983:(e,t,o)=>{o.r(t),o.d(t,{MasterCellAdapter:()=>ek});var i=o(2445),n=o(96540),r=o(82393),l=o(1760),d=o(71893),a=o(55456),c=o(4418),u=o(62843),s=o(69815),v=o(17437),f=(0,s.default)("div",{target:"e1oiqjla0"})("display:flex;flex-direction:column;width:100%;height:100%;position:relative;> div{display:grid;flex:1;grid-template-columns:auto auto auto;> div{width:100%;display:flex;flex-direction:column;&[id$='-left']{align-items:flex-start;}&[id$='-center']{align-items:center;}&[id$='-right']{align-items:flex-end;}}&#top{> div{justify-content:flex-start;}}&#middle{> div{justify-content:center;}}&#bottom{> div{justify-content:flex-end;}}}"),p={left:"flex-start",center:"center",right:"flex-end"},m={top:(0,v.css)("top:0;position:sticky;"),middle:(0,v.css)("top:auto;bottom:50%;position:sticky;"),bottom:(0,v.css)("bottom:0;position:sticky;")},h={large:function(e,t){return(0,v.css)(t,":4rem;",e.media.gteMedium,"{",t,":4.4rem;}",e.media.gteLarge,"{",t,":7.6rem;}",e.media.extraLarge,"{",t,":6.4rem;}")}},_=(0,s.default)("div",{shouldForwardProp:function(e){return!["color","blend","alignment","sticky","textShadow","textShadowBlur","textShadowColor","paddingTop","paddingBottom"].includes(e)},target:"e1oiqjla1"})(function(e){var t=e.theme,o=e.paddingTop;return o?h[o](t,"--block-padding-top"):"--block-padding-top: 0rem"},";",function(e){var t=e.theme,o=e.paddingBottom;return o?h[o](t,"--block-padding-bottom"):"--block-padding-bottom: 0rem"},";--block-padding-y:2.4rem;--block-blend:",function(e){return e.blend||"normal"},";",function(e){var t=e.color;return t?"--color: ".concat(t):""},";--text-alignment:",function(e){var t=e.alignment;return void 0===t?"center":t},";display:flex;flex-direction:column;justify-content:center;align-items:",function(e){var t=e.alignment;return p[void 0===t?"center":t]},";color:var(--color);padding:calc(var(--block-padding-y) + var(--block-padding-top)) 0\n    calc(var(--block-padding-y) + var(--block-padding-bottom)) 0;text-align:var(--text-alignment);z-index:",function(e){var t;return null===(t=e.theme.layers)||void 0===t?void 0:t.foreground},";",function(e){var t=e.sticky;return t?m[t]:""}," ",function(e){var t=e.textShadow,o=e.textShadowBlur,i=e.textShadowColor;return t?"\n          text-shadow: 0px 0px ".concat(14+(void 0===o?0:o)/100*6,"px rgba(").concat("white"===(void 0===i?"black":i)?"255,255,255":"0,0,0"," , ").concat(t/100,")\n        "):""},";@supports (mix-blend-mode:",function(e){return e.blend},"){mix-blend-mode:var(--block-blend);background-color:transparent;}@media (prefers-contrast:more){mix-blend-mode:normal;background-color:",function(e){var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.white},";color:",function(e){var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.black},";text-shadow:none;}",function(e){return e.theme.media.gteMedium},"{--block-padding-y:2rem;}",function(e){return e.theme.media.extraLarge},"{--block-padding-y:3.2rem;}"),g=o(93038),y=o(70708),b=["h1","h2","h3","h4","h5","p","span"],k=(0,s.default)(u.f.Copy,{target:"ehdpulm0"})("white-space:pre-line;"),x=(0,n.forwardRef)(function(e,t){var o=e.color,n=e.type,r=e.blend,l=e.element,a=void 0===l?"h2":l,u=(0,c._)(e,["color","type","blend","element"]);return b.includes(a)?(0,i.Y)(k,{ref:t,asChild:!0,type:n,color:o,blend:r,children:(0,i.Y)(a,(0,d._)({},u))}):null});x.displayName="MasterCellCopy";var Y=o(73536),C=o(91942),w=(0,s.default)(x,{target:"e1j1iaf10"})("position:fixed;pointer-events:none;z-index:",function(e){var t;return null===(t=e.theme.layers)||void 0===t?void 0:t.foreground},";",function(e){return e.theme.media.small},"{display:none;}"),L=(0,s.default)("div",{target:"e1psskd00"})("padding:0 1.2rem;",function(e){var t;return null===(t=e.theme.media)||void 0===t?void 0:t.gteMedium},"{padding:0 2rem;display:",function(e){return e.hasCursorCopy?"none":"flex"},";@media (hover:none){display:flex;}}",function(e){var t;return null===(t=e.theme.media)||void 0===t?void 0:t.extraLarge},"{padding:0 3.2rem;}").withComponent(u.f.Viewport),S=function(e){var t=e.hover,o=e.children,n=(0,c._)(e,["hover","children"]);return"rolodex"===t?(0,i.Y)(u.f.Rolodex,(0,a._)((0,d._)({},n),{children:o})):(0,i.Y)(i.FK,{children:o})},R=(0,n.forwardRef)(function(e,t){var o=e.hover,n=(0,c._)(e,["hover"]);return(0,i.Y)(S,{hover:o,children:n.href?(0,i.Y)(u.f.PureLink,(0,d._)({ref:t},n)):(0,i.Y)(i.FK,{children:n.children})})});R.displayName="MasterCellPureLink";var P=(0,n.forwardRef)(function(e,t){var o=e.hover,n=(0,c._)(e,["hover"]),r="rolodex"===o?u.f.PureLink:u.f.Link;return(0,i.Y)(S,{hover:o,children:n.href?(0,i.Y)(r,(0,d._)({ref:t},n)):(0,i.Y)(i.FK,{children:n.children})})});P.displayName="MasterCellLink";var F=(0,s.default)("div",{target:"e17i9q810"})("margin-top:",function(e){var t=e.hasTitle;return e.hasBody?"2.4rem":t?"1.2rem":0},";margin-bottom:0.4rem;",function(e){return e.theme.media.gteLarge},"{margin-top:",function(e){var t=e.hasTitle;return e.hasBody?"2.4rem":t?"1.6rem":0},";}"),M=o(33144),z=o(71854),B=o(85940),T=o(21002),K=(0,s.default)("div",{target:"esp26260"})("overflow:hidden;width:100%;height:100%;display:block;"),N=(0,s.default)(M.P.div,{target:"esp26261"})("display:block;"),X=function(e){var t=e.factor,o=void 0===t?1:t,r=e.children,l=(0,n.useRef)(null),d=(0,z.L)({target:l,offset:["start","end start"]}).scrollYProgress,a=(0,n.useMemo)(function(){return(0,T.q)((0,C.Q8)(o),0,1)},[o]),c=(0,B.G)(d,[0,1],[1,1+a],{clamp:!0});return(0,i.Y)(K,{ref:l,children:(0,i.Y)(N,{style:{scale:c},children:r})})},O=(0,n.forwardRef)(function(e,t){var o=e.children,n=(0,c._)(e,["children"]);return(0,i.Y)(u.f,(0,a._)((0,d._)({ref:t},n),{children:o}))});O.displayName="MasterCellRoot";var E=Object.assign(O,{Blocks:function(e){var t=e.topLeft,o=e.topCenter,n=e.topRight,r=e.middleLeft,l=e.middleCenter,u=e.middleRight,s=e.bottomLeft,v=e.bottomCenter,p=e.bottomRight,m=(0,c._)(e,["topLeft","topCenter","topRight","middleLeft","middleCenter","middleRight","bottomLeft","bottomCenter","bottomRight"]),h=!!t||!!o||!!n,_=!!r||!!l||!!u,g=!!s||!!v||!!p;return(0,i.FD)(f,(0,a._)((0,d._)({},m),{children:[h?(0,i.FD)("div",{id:"top",children:[(0,i.Y)("div",{id:"top-left",children:t?(0,i.Y)(i.FK,{children:t}):null}),(0,i.Y)("div",{id:"top-center",children:o?(0,i.Y)(i.FK,{children:o}):null}),(0,i.Y)("div",{id:"top-right",children:n?(0,i.Y)(i.FK,{children:n}):null})]}):null,_?(0,i.FD)("div",{id:"middle",children:[(0,i.Y)("div",{id:"middle-left",children:r?(0,i.Y)(i.FK,{children:r}):null}),(0,i.Y)("div",{id:"middle-center",children:l?(0,i.Y)(i.FK,{children:l}):null}),(0,i.Y)("div",{id:"middle-right",children:u?(0,i.Y)(i.FK,{children:u}):null})]}):null,g?(0,i.FD)("div",{id:"bottom",children:[(0,i.Y)("div",{id:"bottom-left",children:s?(0,i.Y)(i.FK,{children:s}):null}),(0,i.Y)("div",{id:"bottom-center",children:v?(0,i.Y)(i.FK,{children:v}):null}),(0,i.Y)("div",{id:"bottom-right",children:p?(0,i.Y)(i.FK,{children:p}):null})]}):null]}))},Block:_,ScaleOnScroll:function(e){return(0,y.I)()?e.children:(0,i.Y)(X,(0,d._)({},e))},Link:P,Viewport:L,PureLink:R,Copy:x,Rolodex:u.f.Rolodex,CursorCopy:function(e){var t,o,r,l,a,c=(0,y.I)(),u=(0,g._)((0,n.useState)(!1),2),s=u[0],v=u[1],f=(0,Y.N)(),p=(0,n.useRef)(null);return(o=(t={onCapture:function(e,t){if(s){var o;null===(o=p.current)||void 0===o||o.style.setProperty("transform","translate3d(calc(".concat(e,"px - 50%), calc(").concat(t,"px - 50%), 0px)"))}else{var i,n=f.current;if(!n)return;n.style.setProperty("cursor","none");for(var r=0;r<n.children.length;r++){var l=n.children[r];"A"===l.tagName&&(l.style.cursor="none")}null===(i=p.current)||void 0===i||i.style.setProperty("transform","translate3d(calc(".concat(e,"px - 50%), calc(").concat(t,"px - 50%), 0px)")),v(!0)}},onCaptureEnd:function(){v(!1);var e,t=f.current;if(t){t.style.removeProperty("cursor");for(var o=0;o<t.children.length;o++){var i=t.children[o];"A"===i.tagName&&(i.style.cursor="pointer")}null===(e=p.current)||void 0===e||e.style.removeProperty("transform")}}}).disabled,r=t.safeAreaY,l=t.onCapture,a=t.onCaptureEnd,(0,n.useEffect)(function(){var e=null==f?void 0:f.current;if(e&&!o)return e.addEventListener("mouseleave",t),e.addEventListener("mousemove",i),function(){e.removeEventListener("mouseleave",t),e.removeEventListener("mousemove",i)};function t(){null==a||a()}function i(t){var o=t.clientX,i=t.clientY,n=e.getBoundingClientRect(),d=n.left,c=n.right,u=n.bottom,s=n.top,v=null!=r?(0,C.Q8)(r):0;i>=s+v-window.scrollY&&i<=u-v&&o>=d&&o<=c?null==l||l(o-d,i-s-window.scrollY):null==a||a()}},[f,o,r,l,a]),!s||c)?null:(0,i.Y)(w,(0,d._)({ref:p,color:"#fff",blend:"difference",type:"titleXS"},e))},CtaList:function(e){var t=e.children,o=e.hasTitle,n=e.hasBody,r=(0,c._)(e,["children","hasTitle","hasBody"]);return(0,i.Y)(u.f.CtaList,(0,a._)((0,d._)({asChild:!0},r),{children:(0,i.Y)(F,{hasTitle:o,hasBody:n,children:t})}))},displayName:"MasterCell"}),j=o(48797),D=o(65503),H=o(19400),A=o(26714),q=o(23793),V=o(17025),I=o(50467),U=o(68101),W=o(91804),$=o(51167),Q={title_l:"titleL",title_m:"titleM",title_s:"titleS",title_xs:"titleXS",title_xl:"titleXL",title_xxl:"titleXXL"},G={copy_l_sans_serif:"copyLSansSerif",copy_l_serif:"copyLSerif",copy_m_sans_serif:"copyMSansSerif",copy_m_sans_serif_strikethrough:"copyMSansSerifStrikethrough",copy_m_serif:"copyMSerif",copy_m_serif_strikethrough:"copyMSerifStrikethrough",copy_s_sans_serif:"copySSansSerif",copy_s_sans_serif_strikethrough:"copySSansSerifStrikethrough",copy_s_serif:"copySSerif",copy_xl_sans_serif_medium:"copyXLSansSerifMedium",copy_xxl_sans_serif_medium:"copyXXLSansSerifMedium"},J={horizontally:"horizontal",vertically:"vertical"},Z={none:void 0,difference:"difference"},ee={White:"#fff",Black:"#000"},et={white:"#fff",black:"#000",blue:"#0006cf"},eo={White:"white",Black:"black"},ei={none:void 0,Difference:"difference"},en={none:void 0,large_padding:"large"};function er(e,t,o){if("Custom"===e&&null!=t&&null!=o)return 0===t||0===o?0:t/o;if("100% Viewport Height"===e)return"viewport-height";var i=(0,g._)(e.split(":").map(Number),2),n=i[0],r=i[1];return n&&r?n/r:16/9}function el(e){return[er(e.mobile_ratio||"3:4",e.mobile_width,e.mobile_height),er(e.desktop_ratio||"16:9",e.desktop_width,e.desktop_height)]}function ed(e){var t;return null===(t=e.image)||void 0===t?void 0:t.alt_text}var ea={left:"Left",right:"Right",center:"Center"},ec=o(14404),eu=function(e){var t,o,n,r,l,d,a,c,u,s,v,f,p,m,h,_,g,y,b,k,x,Y,C,w,L,S,R,P,F,M,z,B,K=e.media,N=e.lazy,X=e.imageSizes,O=(o=(t=K.video||{}).mobile_video_id,n=t.desktop_video_id,[o||n||"",n||o||""]),E=el(K),j=(null===(r=K.video)||void 0===r?void 0:r.link_url)||"",D=(null===(l=K.video)||void 0===l?void 0:l.loop)||!1,H=(null===(d=K.video)||void 0===d?void 0:d.live_video)||!1,A=null===(a=K.video)||void 0===a?void 0:a.mute,V=Z[(null===(c=K.video)||void 0===c?void 0:c.blend)||"none"],I=null===(u=K.video)||void 0===u?void 0:u.title,U=null===(s=K.video)||void 0===s?void 0:s.text_hover,$=(null===(v=K.video)||void 0===v?void 0:v.display_scrubber_bar)||!1,Q=(null===(f=K.video)||void 0===f?void 0:f.display_full_screen_control)||!1,G=(h=(m=(null===(p=K.video)||void 0===p?void 0:p.poster_frame)||{}).desktop_image,_=m.mobile_image,(0,W.Kv)([{id:_||h||"",widths:[200,375,420,475,600,800,1e3,1200]},{id:h||_||"",widths:[340,480,640,950,1024,1280,1366,1440,1920,2200]}])),J=null===(y=K.video)||void 0===y?void 0:null===(g=y.poster_frame)||void 0===g?void 0:g.alt_text,et=(null===(b=K.video)||void 0===b?void 0:b.play_type)==="Autoplay"||(null===(k=K.video)||void 0===k?void 0:k.play_type)==="Play when in Viewport",eo=(null===(x=K.video)||void 0===x?void 0:x.play_type)==="Hover to Play",ei=(K.video||{}).display_controls,en=ee[(K.video||{}).controls_colour||"White"],er=Math.min(100,(0,T.q)(0,0,(null===(Y=K.video)||void 0===Y?void 0:Y.controls_gradient_opacity)||0)),ed=(K.video||{}).sticky_a11y_controls,ea=(K.video||{}).show_a11y_sound_controls,ec=(null==(C=(K.video||{}).poster_frame)?void 0:C.mobile_video_id)||(null==C?void 0:C.desktop_video_id)?[(null==C?void 0:C.mobile_video_id)||(null==C?void 0:C.desktop_video_id)||"",(null==C?void 0:C.desktop_video_id)||(null==C?void 0:C.mobile_video_id)||""]:null,eu=null===(L=K.video)||void 0===L?void 0:null===(w=L.poster_frame)||void 0===w?void 0:w.cta,es=null==(S=(K.video||{}).poster_frame)?void 0:S.loop,ev=null==(R=(K.video||{}).poster_frame)?void 0:R.mute,ef=(null==(P=(K.video||{}).poster_frame)?void 0:P.play_type)==="Autoplay"||(null==P?void 0:P.play_type)==="Play when in Viewport",ep=(null==(F=(K.video||{}).poster_frame)?void 0:F.play_type)==="Hover to Play",em=(M=(K.video||{}).poster_frame,Math.min(100,(0,T.q)(0,0,(null==M?void 0:M.video_overlay_opacity)||0))),eh=null==(z=(K.video||{}).poster_frame)?void 0:z.sticky_a11y_controls,e_=null==(B=(K.video||{}).poster_frame)?void 0:B.show_a11y_sound_controls;return(0,i.Y)(q.L9,{src:O,url:j,ratio:E,lazy:N,loop:D,live:H,muted:A,autoplay:et,playOnHover:eo,color:en,blend:V,controls:ei?(0,i.Y)(q.H2,{title:I?(0,i.Y)(q.Y6,{url:j||"",rolodex:"rolodex"===U,children:I}):null,shadow:er,scrubberBar:$,fullscreen:Q}):null,a11yControls:(0,i.Y)(q.bi,{color:en,shadow:er,sticky:ed?"bottom":void 0,muteUnmute:ea}),poster:G?(0,i.Y)(q.nT,{sources:G,alt:J||"",ratio:E,lazy:N,preload:!N,sizes:X}):null,videoPoster:ec?(0,i.Y)(q.vT,{src:ec,ratio:E,lazy:N,blend:V,color:en,loop:es,muted:ev,autoplay:ef,playOnHover:ep,a11yControls:(0,i.Y)(q.x$,{title:I||"",cta:eu,shadow:em,muteUnmute:e_,sticky:eh?"bottom":void 0})}):null})},es=function(e){var t,o,n,r,l=e.media,u=e.onClick,s=e.children,v=null===(t=l.image)||void 0===t?void 0:t.link_type,f=null===(o=l.image)||void 0===o?void 0:o.link_reference,p=null===(n=l.image)||void 0===n?void 0:n.link_url,m=(null===(r=l.image)||void 0===r?void 0:r.open_link_in_new_tab)?"_blank":void 0,h=ed(l);if(p)return(0,i.Y)(D.B,{href:p,target:m,"aria-label":h,children:s});switch(v){case"url":if(!p)return(0,i.Y)(i.FK,{children:s});return(0,i.Y)(D.B,{href:p,target:m,"aria-label":h,children:s});case"modal":var _=(0,g._)(f||[],1)[0];if(!_)return(0,i.Y)(i.FK,{children:s});return(0,i.Y)(V.RA,{text:"",modalUid:_.uid,modalContentType:_._content_type_uid,children:function(e){var t=e.onClick,o=(0,c._)(e,["onClick"]);return(0,i.Y)(H.p,(0,a._)((0,d._)({onClick:function(){null==t||t(),u()}},o),{children:s}))}},_.uid);default:return(0,i.Y)(i.FK,{children:s})}},ev=function(e){var t,o,n,r,l,d,a,c,u,s,v=e.media,f=e.lazy,p=e.imageSizes,m=(0,ec.s)();if(!v.image)return null;var h=(n=(o=v.image||{}).small_asset,r=o.large_asset,d="image_scale_upon_scroll"===(void 0===(l=o.animation)?"none":l),(0,W.Kv)([{id:(null===(t=v.image)||void 0===t?void 0:t.small_asset)||r||"",widths:d?[280,525,588,665,840,1120,1400,1680]:[200,375,420,475,600,800,1e3,1200]},{id:r||n||"",widths:d?[476,672,896,1330,1433,1792,1912,2016,2688,2800]:[340,480,640,950,1024,1280,1366,1440,1920,2200]}])),_=el(v),g=ed(v),y=null===(a=v.image)||void 0===a?void 0:a.animation,b=(u=(c=v.image||{}).mobile_scale_factor,s=c.desktop_scale_factor,[u||s||1.4,s||u||1]),k=(0,i.Y)(es,{media:v,onClick:function(){var e,t,o,i=(0,C.Q8)(h);if(i){var n=(null==(o="string"==typeof i?null===(e=(0,j.parse)(i))||void 0===e?void 0:e.pathname:null===(t=(0,j.parse)(Object.values(i)[0]))||void 0===t?void 0:t.pathname)?void 0:o.split("/").slice(-1)[0])||null;n&&m.navigation.asset({id:n,component:"MasterCell",context:g||void 0,title:g||null,type:"image"})}},children:(0,i.Y)(A._,{sources:h,ratio:_,alt:g,lazy:f,preload:!f,sizes:p})});return"image_scale_upon_scroll"===y?(0,i.Y)(E.ScaleOnScroll,{factor:b,children:k}):k},ef=function(e){var t,o=e.data,n=e.lazy,r=e.imageSizes;switch(null===(t=o.media)||void 0===t?void 0:t.type){case"Video":return(0,i.Y)(eu,{media:o.media,lazy:n,imageSizes:r});case"Image":return(0,i.Y)(ev,{media:o.media,lazy:n,imageSizes:r});default:return null}},ep=o(83303);function em(e){var t=e.context,o=e.description,i=(0,ec.s)();return{onClick:function(){i.navigation.generic({component:"MasterCell",context:t,description:o,type:"text"})}}}var eh=function(e){var t=e.data,o=e.color,n=e.hover,r=t.title_link_url,l=t.open_link_in_new_tab?"_blank":void 0,d=Q[t.style||"title_xs"],a=t.rich_title||t.copy,c=em({context:"MasterCell Title",description:(null==a?void 0:a.replaceAll("\n"," "))||""}).onClick;return a?(0,i.Y)(E.PureLink,{hover:n,href:r,target:l,onClick:c,children:(0,i.Y)(E.Copy,{type:d,color:o,element:t.title_element,children:a})}):null},e_=function(e){var t=e.data,o=e.color,n=e.hasTitle,r=(0,ep.vw)(t.body_copy||"",{excludeContainerTag:!0}),l=t.style?G[t.style]:void 0;return t.body_copy?(0,i.Y)(E.Copy,{element:"p",type:l,color:o,dangerouslySetInnerHTML:{__html:r},style:{marginTop:n?"1.6rem":0}}):null},eg=function(e){var t,o=e.data,r=e.color,l=e.hover,u=em({context:"MasterCell Cta",description:o.link_copy||""}).onClick,s=(0,i.Y)(E.Copy,{type:"rolodex"===l?"titleXS":"bodyLarge",color:r,element:"span",children:o.link_copy});switch((null===(t=o.link_type)||void 0===t?void 0:t.toLowerCase())||"url"){case"modal":var v=(0,g._)(o.link_reference||[],1)[0];if(!v)return null;return(0,i.Y)(V.RA,{text:o.link_copy||"",modalUid:v.uid,modalContentType:v._content_type_uid,children:function(e){var t=e.onClick,r=(0,c._)(e,["onClick"]),v="rolodex"===l?E.Rolodex:n.Fragment;return(0,i.Y)(v,{children:(0,i.Y)(H.p,(0,a._)((0,d._)({onClick:function(){null==t||t(),u()},"aria-label":o.link_copy},r),{children:s}))})}},o.link_copy);case"url":return(0,i.Y)(E.Link,{hover:l,href:o.link_url,variant:"tertiary",onClick:u,"aria-label":o.link_copy,children:s});default:return null}},ey=function(e){var t=e.data,o=e.color,n=e.hover,r=e.hasTitle,l=e.hasBody;if(!t.ctas||0===t.ctas.length)return null;var d=J[t.stacking||"horizontally"];return(0,i.Y)(E.CtaList,{stacking:d,hasTitle:r,hasBody:l,children:t.ctas.map(function(e,t){return(0,i.Y)(eg,{data:e,color:o,hover:n},"cta-".concat(t))})})},eb=function(e){var t,o,n,r,l,d,a=e.data,c=e.position,u=a.copy,s=a.fixed_copy,v=a.text_hover,f=a.cta_section,p=a.alignment,m=Z[a.blend||"none"],h=et[a.text_colour||"black"],_=a.custom_text_colour?(0,$.x)(a.custom_text_colour):void 0,g=null===(t=a.copy_radial_gradient_config)||void 0===t?void 0:t.text_shadow,y=(null===(o=a.copy_radial_gradient_config)||void 0===o?void 0:o.text_blur)||0,b=eo[(null===(n=a.copy_radial_gradient_config)||void 0===n?void 0:n.gradient_colour)||"Black"],k=en[a.vertical_padding||"none"],x=!!(null==u?void 0:null===(r=u.title)||void 0===r?void 0:r.rich_title)||!!(null==u?void 0:null===(l=u.title)||void 0===l?void 0:l.copy),Y=!!(null==u?void 0:null===(d=u.body)||void 0===d?void 0:d.body_copy);return(0,i.FD)(E.Block,{sticky:s?c:void 0,blend:m,color:_||h,alignment:p,textShadow:g,textShadowBlur:y,textShadowColor:b,paddingTop:["top","middle"].includes(c)?k:void 0,paddingBottom:["bottom","middle"].includes(c)?k:void 0,children:[(null==u?void 0:u.title)&&x?(0,i.Y)(eh,{data:u.title,color:_||h,hover:v}):null,(null==u?void 0:u.body)&&Y?(0,i.Y)(e_,{data:u.body,color:_||h,hasTitle:x}):null,f?(0,i.Y)(ey,{data:f,color:_||h,hover:v,hasTitle:x,hasBody:Y}):null]})},ek=function(e){var t,o=e.id,c=e.data,u=e.metadata,s=e.imageSizes,v=e.columns,f=e.offsetLeft,p=e.offsetRight,m=e.fullbleed,h=e.disableBoxStyles,_=e.cssProp,g=e.forwardedRef,y=(0,r.bl)().addDemandForTransparency,b=(0,l.dJ)({fullbleed:void 0===m||m,columns:v,offsetLeft:f,offsetRight:p,disabled:void 0!==h&&h});if((0,n.useEffect)(function(){var e,t,o,i,n;if(null==u?void 0:u.isFirstOnPage)return(null==c?void 0:null===(e=c.cell_configuration)||void 0===e?void 0:e.transparent_nav)?y((null==c?void 0:null===(o=c.cell_configuration)||void 0===o?void 0:null===(t=o.transparent_nav_config)||void 0===t?void 0:t.nav_colour)==="Light"?"#fff":"#000",ei[(null==c?void 0:null===(n=c.cell_configuration)||void 0===n?void 0:null===(i=n.transparent_nav_config)||void 0===i?void 0:i.header_blend_mode)||"none"]):function(){}},[c,null==u?void 0:u.isFirstOnPage,y]),!c)return null;var k=null===(t=c.cursor_config)||void 0===t?void 0:t.cursor_copy,x=(c.blocks||[]).reduce(function(e,t){var o=t.alignment,i=t.position,n="".concat(void 0===i?"middle":i).concat(ea[void 0===o?"center":o]);return(0,a._)((0,d._)({},e),(0,I._)({},n,(0,U._)(e[n]).concat([t])))},{topLeft:[],topCenter:[],topRight:[],middleLeft:[],middleCenter:[],middleRight:[],bottomLeft:[],bottomCenter:[],bottomRight:[]}),Y=x.topLeft,C=x.topCenter,w=x.topRight,L=x.middleLeft,S=x.middleCenter,R=x.middleRight,P=x.bottomLeft,F=x.bottomCenter,M=x.bottomRight;return(0,i.FD)(E,{id:o,css:[_,b],ref:g,children:[(0,i.Y)(ef,{data:c,lazy:!(null==u?void 0:u.isFirstMediaComponentOnPage),imageSizes:s}),k?(0,i.Y)(E.CursorCopy,{children:k}):null,(0,i.Y)(E.Viewport,{hasCursorCopy:!!k,children:(0,i.Y)(E.Blocks,{topLeft:Y.length>0?Y.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"top"},"tl-".concat(t))}):null,topCenter:C.length>0?C.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"top"},"tc-".concat(t))}):null,topRight:w.length>0?w.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"top"},"tr-".concat(t))}):null,middleLeft:L.length>0?L.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"middle"},"ml-".concat(t))}):null,middleCenter:S.length>0?S.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"middle"},"mc-".concat(t))}):null,middleRight:R.length>0?R.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"middle"},"mr-".concat(t))}):null,bottomLeft:P.length>0?P.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"bottom"},"bl-".concat(t))}):null,bottomCenter:F.length>0?F.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"bottom"},"bc-".concat(t))}):null,bottomRight:M.length>0?M.map(function(e,t){return(0,i.Y)(eb,{data:e,position:"bottom"},"br-".concat(t))}):null})})]})}},62843:(e,t,o)=>{o.d(t,{f:()=>S});var i=o(71893),n=o(55456),r=o(4418),l=o(2445),d=o(96540),a=o(69815),c=o(33362),u=o(91071),s=o(15370),v=(0,a.default)(s.Y,{target:"exp7wlb0"})("pointer-events:all;"),f=(0,a.default)("div",{target:"e1hwpyz20"})("inset:0;position:absolute;width:100%;height:100%;display:flex;align-items:flex-start;pointer-events:none;"),p=o(91942),m=(0,d.forwardRef)(function(e,t){var o=e.asChild,n=(0,r._)(e,["asChild"]),d=o?c.DX:"p";return(0,l.Y)(d,(0,i._)({ref:t},n))});m.displayName="HeadlessCopy";var h=(0,a.default)(m,{shouldForwardProp:function(e){return!["type","color","blend"].includes(e)},target:"e6rf6gk0"})(function(e){var t=e.theme,o=e.type;return o?t.typography[o]:""},";",function(e){var t=e.theme,o=e.color;return(0,p.IR)(o,function(e){return e?"--color: ".concat(e,";"):""},t.media)},";",function(e){var t=e.theme,o=e.blend;return(0,p.IR)(o,function(e){return e?"--blend: ".concat(e,";"):""},t.media)},";color:var(--color);mix-blend-mode:var(--blend);@media (prefers-contrast:more){color:",function(e){var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.black},";}"),_=o(17437),g=(0,d.forwardRef)(function(e,t){var o=e.asChild,n=(0,r._)(e,["asChild"]),d=o?c.DX:"ul";return(0,l.Y)(d,(0,i._)({ref:t},n))});g.displayName="HeadlessCtaList";var y={horizontal:(0,_.css)("flex-direction:row;flex-wrap:wrap;"),vertical:(0,_.css)("flex-direction:column;")},b=(0,a.default)(g,{shouldForwardProp:function(e){return"stacking"!==e},target:"e1nbzcwa0"})("display:flex;column-gap:1.6rem;row-gap:0.8rem;",function(e){var t=e.stacking;return y[void 0===t?"horizontal":t]}," ",function(e){var t;return null===(t=e.theme.media)||void 0===t?void 0:t.gteMedium},"{column-gap:2rem;}"),k=o(65636),x=o(65503),Y=(0,a.default)(x.B,{shouldForwardProp:function(e){return!["color"].includes(e)},target:"e40b8ys0"})(function(e){var t=e.color;return t?"--color: ".concat(t):""},";pointer-events:all;color:var(--color);"),C=(0,a.default)(k.N,{shouldForwardProp:function(e){return!["color"].includes(e)},target:"e40b8ys1"})(function(e){var t=e.color;return t?"--color: ".concat(t):""},";pointer-events:all;color:var(--color);"),w=o(73536),L=(0,d.forwardRef)(function(e,t){var o=e.asChild,a=e.children,s=(0,r._)(e,["asChild","children"]),v=(0,d.useRef)(null),f=(0,u.s)(v,t),p=o?c.DX:"article";return(0,l.Y)(w.d.Provider,{value:v,children:(0,l.Y)(p,(0,n._)((0,i._)({ref:f},s),{children:a}))})});L.displayName="HeadlessCell";var S=Object.assign((0,a.default)(L,{target:"eqp2i400"})("width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;position:relative;"),{Copy:h,CtaList:b,Rolodex:v,Link:C,PureLink:Y,Viewport:f,displayName:"Cell"})},73536:(e,t,o)=>{o.d(t,{N:()=>r,d:()=>n});var i=o(96540),n=(0,i.createContext)(null);function r(){var e=(0,i.useContext)(n);if(!e)throw Error("This hook needs to be used inside a <Cell />");return e}},21002:(e,t,o)=>{o.d(t,{q:()=>i});function i(e,t,o){return Math.max(t,Math.min(o,e))}},71854:(e,t,o)=>{o.d(t,{L:()=>c});var i=o(77979),n=o(72199),r=o(24785),l=o(28601),d=o(25128),a=function(){return{scrollX:(0,r.O)(0),scrollY:(0,r.O)(0),scrollXProgress:(0,r.O)(0),scrollYProgress:(0,r.O)(0)}};function c(e){void 0===e&&(e={});var t=e.container,o=e.target,r=(0,i.__rest)(e,["container","target"]),c=(0,l.M)(a);return(0,d.E)(function(){return(0,n.W)(function(e){var t=e.x,o=e.y;c.scrollX.set(t.current),c.scrollXProgress.set(t.progress),c.scrollY.set(o.current),c.scrollYProgress.set(o.progress)},(0,i.__assign)((0,i.__assign)({},r),{container:(null==t?void 0:t.current)||void 0,target:(null==o?void 0:o.current)||void 0}))},[]),c}}}]);
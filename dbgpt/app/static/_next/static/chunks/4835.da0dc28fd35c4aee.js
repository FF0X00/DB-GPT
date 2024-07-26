(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4835],{21332:function(e,n,t){"use strict";t.d(n,{_:function(){return D},a:function(){return M}});var r=t(85893),o=t(51009),a=t(71230),i=t(15746),l=t(42075),d=t(83062),c=t(71577),u=t(32983),s=t(38041),f=t(36353),g=t(64352),m=t(72905),h=t(96486);let p=e=>{let{charts:n,scopeOfCharts:t,ruleConfig:r}=e,o={};if(null==n||n.forEach(e=>{if(e.chartKnowledge.toSpec){let n=e.chartKnowledge.toSpec;e.chartKnowledge.toSpec=(e,t)=>({...n(e,t),dataProps:t})}else e.chartKnowledge.toSpec=(e,n)=>({dataProps:n});o[e.chartType]=e.chartKnowledge}),(null==t?void 0:t.exclude)&&t.exclude.forEach(e=>{Object.keys(o).includes(e)&&delete o[e]}),null==t?void 0:t.include){let e=t.include;Object.keys(o).forEach(n=>{e.includes(n)||delete o[n]})}let a={...t,custom:o},i={...r},l=new g.w({ckbCfg:a,ruleCfg:i});return l},k=e=>{var n;let{data:t,dataMetaMap:r,myChartAdvisor:o}=e,a=r?Object.keys(r).map(e=>({name:e,...r[e]})):null,i=new m.Z(t).info(),l=(0,h.size)(i)>2?null==i?void 0:i.filter(e=>"string"!==e.recommendation&&"date"!==e.recommendation||e.distinct&&e.distinct>1):i,d=null==o?void 0:o.adviseWithLog({data:t,dataProps:a,fields:null==l?void 0:l.map(e=>e.name)});return null!==(n=null==d?void 0:d.advices)&&void 0!==n?n:[]};var v=t(67294);function b(e,n){return n.every(n=>e.includes(n))}function x(e,n){let t=n.find(n=>n.name===e);return(null==t?void 0:t.recommendation)==="date"?n=>new Date(n[e]):e}function y(e){return e.find(e=>{var n;return e.levelOfMeasurements&&(n=e.levelOfMeasurements,["Time","Ordinal"].some(e=>n.includes(e)))})}function _(e){return e.find(e=>e.levelOfMeasurements&&b(e.levelOfMeasurements,["Nominal"]))}let j=e=>{let{data:n,xField:t}=e,r=(0,h.uniq)(n.map(e=>e[t]));return r.length<=1},w=(e,n,t)=>{let{field4Split:r,field4X:o}=t;if((null==r?void 0:r.name)&&(null==o?void 0:o.name)){let t=e[r.name],a=n.filter(e=>r.name&&e[r.name]===t);return j({data:a,xField:o.name})?5:void 0}return(null==o?void 0:o.name)&&j({data:n,xField:o.name})?5:void 0},C=e=>{let{data:n,chartType:t,xField:r}=e,o=(0,h.cloneDeep)(n);try{if(t.includes("line")&&(null==r?void 0:r.name)&&"date"===r.recommendation)return o.sort((e,n)=>new Date(e[r.name]).getTime()-new Date(n[r.name]).getTime()),o;t.includes("line")&&(null==r?void 0:r.name)&&["float","integer"].includes(r.recommendation)&&o.sort((e,n)=>e[r.name]-n[r.name])}catch(e){console.error(e)}return o},N=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.map(e=>{let t={};return Object.keys(e).forEach(r=>{t[r]=e[r]===n?null:e[r]}),t})},S="multi_line_chart",Z="multi_measure_line_chart",P=[{chartType:"multi_line_chart",chartKnowledge:{id:S,name:"multi_line_chart",alias:["multi_line_chart"],family:["LineCharts"],def:"multi_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Trend"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:1,fieldConditions:["Time","Ordinal"]},{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:0,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,n)=>{var t,r;let o=y(n),a=_(n),i=null!==(t=null!=o?o:a)&&void 0!==t?t:n[0],l=n.filter(e=>e.name!==(null==i?void 0:i.name)),d=null!==(r=l.filter(e=>e.levelOfMeasurements&&b(e.levelOfMeasurements,["Interval"])))&&void 0!==r?r:[l[0]],c=l.filter(e=>!d.find(n=>n.name===e.name)).find(e=>e.levelOfMeasurements&&b(e.levelOfMeasurements,["Nominal"]));if(!i||!d)return null;let u={type:"view",autoFit:!0,data:C({data:e,chartType:S,xField:i}),children:[]};return d.forEach(t=>{let r={type:"line",encode:{x:x(i.name,n),y:t.name,size:n=>w(n,e,{field4Split:c,field4X:i})},legend:{size:!1}};c&&(r.encode.color=c.name),u.children.push(r)}),u}},chineseName:"折线图"},{chartType:"multi_measure_column_chart",chartKnowledge:{id:"multi_measure_column_chart",name:"multi_measure_column_chart",alias:["multi_measure_column_chart"],family:["ColumnCharts"],def:"multi_measure_column_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,n)=>{try{let t=null==n?void 0:n.filter(e=>b(e.levelOfMeasurements,["Interval"])),r=_(n),o=y(n),a=null!=r?r:o;if(!a||!t)return null;let i={type:"view",data:e,children:[]};return null==t||t.forEach(e=>{let n={type:"interval",encode:{x:a.name,y:e.name,color:()=>e.name,series:()=>e.name}};i.children.push(n)}),i}catch(e){return console.log(e),null}}},chineseName:"折线图"},{chartType:"multi_measure_line_chart",chartKnowledge:{id:Z,name:"multi_measure_line_chart",alias:["multi_measure_line_chart"],family:["LineCharts"],def:"multi_measure_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,n)=>{try{var t,r;let o=null!==(r=null!==(t=_(n))&&void 0!==t?t:y(n))&&void 0!==r?r:n[0],a=null==n?void 0:n.filter(e=>e.name!==(null==o?void 0:o.name)&&b(e.levelOfMeasurements,["Interval"]));if(!o||!a)return null;let i={type:"view",data:C({data:e,chartType:Z,xField:o}),children:[]};return null==a||a.forEach(t=>{let r={type:"line",encode:{x:x(o.name,n),y:t.name,color:()=>t.name,series:()=>t.name,size:n=>w(n,e,{field4X:o})},legend:{size:!1}};i.children.push(r)}),i}catch(e){return console.log(e),null}}},chineseName:"折线图"}];var E=t(41468);let O=e=>{if(!e)return;let n=e.getContainer(),t=n.getElementsByTagName("canvas")[0];return t};var T=t(23430);let M=e=>"response_line_chart"===e?["multi_line_chart","multi_measure_line_chart"]:"response_bar_chart"===e?["multi_measure_column_chart"]:"response_pie_chart"===e?["pie_chart"]:"response_scatter_chart"===e?["scatter_plot"]:"response_area_chart"===e?["area_chart"]:"response_heatmap_chart"===e?["heatmap"]:[],{Option:I}=o.default,D=e=>{let{chartType:n,scopeOfCharts:t,ruleConfig:g,data:m}=e,b=N(m),{mode:x}=(0,v.useContext)(E.p),[y,_]=(0,v.useState)(),[j,w]=(0,v.useState)([]),[S,Z]=(0,v.useState)(),M=(0,v.useRef)();(0,v.useEffect)(()=>{_(p({charts:P,scopeOfCharts:{exclude:["area_chart","stacked_area_chart","percent_stacked_area_chart"]},ruleConfig:g}))},[g,t]);let D=e=>{if(!y)return[];let t=function(e){let{advices:n}=e;return n}({advices:e}),r=(0,h.uniq)((0,h.compact)((0,h.concat)(n,e.map(e=>e.type)))),o=r.map(e=>{let n=t.find(n=>n.type===e);if(n)return n;let r=y.dataAnalyzer.execute({data:b});if("data"in r){var o;let n=y.specGenerator.execute({data:r.data,dataProps:r.dataProps,chartTypeRecommendations:[{chartType:e,score:1}]});if("advices"in n)return null===(o=n.advices)||void 0===o?void 0:o[0]}}).filter(e=>null==e?void 0:e.spec);return o};(0,v.useEffect)(()=>{if(b&&y){var e;let n=k({data:b,myChartAdvisor:y}),t=D(n);w(t),Z(null===(e=t[0])||void 0===e?void 0:e.type)}},[JSON.stringify(b),y,n]);let L=(0,v.useMemo)(()=>{if((null==j?void 0:j.length)>0){var e,n,t,o;let a=null!=S?S:j[0].type,i=null!==(n=null===(e=null==j?void 0:j.find(e=>e.type===a))||void 0===e?void 0:e.spec)&&void 0!==n?n:void 0;if(i){if(i.data&&["line_chart","step_line_chart"].includes(a)){let e=null==y?void 0:y.dataAnalyzer.execute({data:b});e&&"dataProps"in e&&(i.data=C({data:i.data,xField:null===(o=e.dataProps)||void 0===o?void 0:o.find(e=>"date"===e.recommendation),chartType:a}))}return"pie_chart"===a&&(null==i?void 0:null===(t=i.encode)||void 0===t?void 0:t.color)&&(i.tooltip={title:{field:i.encode.color}}),(0,r.jsx)(s.k,{options:{...i,theme:x,autoFit:!0,height:300},ref:M},a)}}},[j,S]);return S?(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{justify:"space-between",className:"mb-2",children:[(0,r.jsx)(i.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("span",{children:f.Z.t("Advices")}),(0,r.jsx)(o.default,{className:"w-52",value:S,placeholder:"Chart Switcher",onChange:e=>Z(e),size:"small",children:null==j?void 0:j.map(e=>{let n=f.Z.t(e.type);return(0,r.jsx)(I,{value:e.type,children:(0,r.jsx)(d.Z,{title:n,placement:"right",children:(0,r.jsx)("div",{children:n})})},e.type)})})]})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(d.Z,{title:f.Z.t("Download"),children:(0,r.jsx)(c.ZP,{onClick:()=>(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Chart",t=document.createElement("a"),r="".concat(n,".png");setTimeout(()=>{let n=function(e){let n=O(e);if(n){let e=n.toDataURL("image/png");return e}}(e);if(n){t.addEventListener("click",()=>{t.download=r,t.href=n});let e=document.createEvent("MouseEvents");e.initEvent("click",!1,!1),t.dispatchEvent(e)}},16)})(M.current,f.Z.t(S)),icon:(0,r.jsx)(T.Z,{}),type:"text"})})})]}),(0,r.jsx)("div",{className:"auto-chart-content",children:L})]}):(0,r.jsx)(u.Z,{image:u.Z.PRESENTED_IMAGE_SIMPLE,description:"暂无合适的可视化视图"})}},39156:function(e,n,t){"use strict";t.d(n,{_z:function(){return h._},ZP:function(){return p},aG:function(){return h.a}});var r=t(85893),o=t(41118),a=t(30208),i=t(40911),l=t(41468),d=t(38041),c=t(67294);function u(e){let{chart:n}=e,{mode:t}=(0,c.useContext)(l.p);return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:n.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:n.chart_desc}),(0,r.jsx)("div",{className:"h-[300px]",children:(0,r.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:t,type:"interval",data:n.values,encode:{x:"name",y:"value",color:"type"},axis:{x:{labelAutoRotate:!1}}}})})]})})}function s(e){let{chart:n}=e,{mode:t}=(0,c.useContext)(l.p);return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:n.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:n.chart_desc}),(0,r.jsx)("div",{className:"h-[300px]",children:(0,r.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:t,type:"view",data:n.values,children:[{type:"line",encode:{x:"name",y:"value",color:"type",shape:"smooth"}},{type:"area",encode:{x:"name",y:"value",color:"type",shape:"smooth"},legend:!1,style:{fillOpacity:.15}}],axis:{x:{labelAutoRotate:!1}}}})})]})})}var f=t(61685),g=t(96486);function m(e){var n,t;let{chart:o}=e,a=(0,g.groupBy)(o.values,"type");return(0,r.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("div",{className:"mb-2",children:o.chart_name}),(0,r.jsx)("div",{className:"opacity-80 text-sm mb-2",children:o.chart_desc}),(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsxs)(f.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:Object.keys(a).map(e=>(0,r.jsx)("th",{children:e},e))})}),(0,r.jsx)("tbody",{children:null===(n=Object.values(a))||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.map((e,n)=>{var t;return(0,r.jsx)("tr",{children:null===(t=Object.keys(a))||void 0===t?void 0:t.map(e=>{var t;return(0,r.jsx)("td",{children:(null==a?void 0:null===(t=a[e])||void 0===t?void 0:t[n].value)||""},e)})},n)})})]})})]})})}var h=t(21332),p=function(e){let{chartsData:n}=e,t=(0,c.useMemo)(()=>{if(n){let e=[],t=null==n?void 0:n.filter(e=>"IndicatorValue"===e.chart_type);t.length>0&&e.push({charts:t,type:"IndicatorValue"});let r=null==n?void 0:n.filter(e=>"IndicatorValue"!==e.chart_type),o=r.length,a=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][o].forEach(n=>{if(n>0){let t=r.slice(a,a+n);a+=n,e.push({charts:t})}}),e}},[n]);return(0,r.jsx)("div",{className:"flex flex-col gap-3",children:null==t?void 0:t.map((e,n)=>(0,r.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex gap-3":""),children:e.charts.map(e=>"IndicatorValue"===e.chart_type||"IndicatorValue"===e.type?(0,r.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(o.Z,{sx:{background:"transparent"},children:(0,r.jsxs)(a.Z,{className:"justify-around",children:[(0,r.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,r.jsx)(i.ZP,{children:e.value})]})})},e.name))},e.chart_uid):"LineChart"===e.chart_type||"LineChart"===e.type?(0,r.jsx)(s,{chart:e},e.chart_uid):"BarChart"===e.chart_type||"BarChart"===e.type?(0,r.jsx)(u,{chart:e},e.chart_uid):"Table"===e.chart_type||"Table"===e.type?(0,r.jsx)(m,{chart:e},e.chart_uid):void 0)},"chart_row_".concat(n)))})}},67772:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(85893),o=t(67294),a=t(2453),i=t(83062),l=t(84553),d=t(71577),c=t(49591),u=t(88484),s=t(29158),f=t(89182),g=t(41468),m=function(e){var n;let{convUid:t,chatMode:m,onComplete:h,...p}=e,[k,v]=(0,o.useState)(!1),[b,x]=a.ZP.useMessage(),[y,_]=(0,o.useState)([]),[j,w]=(0,o.useState)(),{model:C}=(0,o.useContext)(g.p),N=async e=>{var n;if(!e){a.ZP.error("Please select the *.(csv|xlsx|xls) file");return}if(!/\.(csv|xlsx|xls)$/.test(null!==(n=e.file.name)&&void 0!==n?n:"")){a.ZP.error("File type must be csv, xlsx or xls");return}_([e.file])},S=async()=>{v(!0);try{let e=new FormData;e.append("doc_file",y[0]),b.open({content:"Uploading ".concat(y[0].name),type:"loading",duration:0});let[n]=await (0,f.Vx)((0,f.qn)({convUid:t,chatMode:m,data:e,model:C,config:{timeout:36e5,onUploadProgress:e=>{let n=Math.ceil(e.loaded/(e.total||0)*100);w(n)}}}));if(n)return;a.ZP.success("success"),null==h||h()}catch(e){a.ZP.error((null==e?void 0:e.message)||"Upload Error")}finally{v(!1),b.destroy()}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[x,(0,r.jsx)(i.Z,{placement:"bottom",title:"File cannot be changed after upload",children:(0,r.jsx)(l.default,{disabled:k,className:"mr-1",beforeUpload:()=>!1,fileList:y,name:"file",accept:".csv,.xlsx,.xls",multiple:!1,onChange:N,showUploadList:{showDownloadIcon:!1,showPreviewIcon:!1,showRemoveIcon:!1},itemRender:()=>(0,r.jsx)(r.Fragment,{}),...p,children:(0,r.jsx)(d.ZP,{className:"flex justify-center items-center",type:"primary",disabled:k,icon:(0,r.jsx)(c.Z,{}),children:"Select File"})})}),(0,r.jsx)(d.ZP,{type:"primary",loading:k,className:"flex justify-center items-center",disabled:!y.length,icon:(0,r.jsx)(u.Z,{}),onClick:S,children:k?100===j?"Analysis":"Uploading":"Upload"}),!!y.length&&(0,r.jsxs)("div",{className:"mt-2 text-gray-500 text-sm flex items-center",children:[(0,r.jsx)(s.Z,{className:"mr-2"}),(0,r.jsx)("span",{children:null===(n=y[0])||void 0===n?void 0:n.name})]})]})})},h=function(e){let{onComplete:n}=e,{currentDialogue:t,scene:a,chatId:i}=(0,o.useContext)(g.p);return"chat_excel"!==a?null:(0,r.jsx)("div",{className:"max-w-md h-full relative",children:t?(0,r.jsxs)("div",{className:"flex h-8 overflow-hidden rounded",children:[(0,r.jsx)("div",{className:"flex items-center justify-center px-2 bg-gray-600 text-lg",children:(0,r.jsx)(s.Z,{className:"text-white"})}),(0,r.jsx)("div",{className:"flex items-center justify-center px-3 bg-gray-100 text-xs rounded-tr rounded-br dark:text-gray-800 truncate",children:t.select_param})]}):(0,r.jsx)(m,{convUid:i,chatMode:a,onComplete:n})})};t(23293);var p=t(78045),k=t(16165),v=t(96991),b=t(82353);function x(){let{isContract:e,setIsContract:n,scene:t}=(0,o.useContext)(g.p),a=t&&["chat_with_db_execute","chat_dashboard"].includes(t);return a?(0,r.jsxs)(p.ZP.Group,{value:e,defaultValue:!0,buttonStyle:"solid",onChange:()=>{n(!e)},children:[(0,r.jsxs)(p.ZP.Button,{value:!1,children:[(0,r.jsx)(k.Z,{component:b.ig,className:"mr-1"}),"Preview"]}),(0,r.jsxs)(p.ZP.Button,{value:!0,children:[(0,r.jsx)(v.Z,{className:"mr-1"}),"Editor"]})]}):null}var y=t(81799),_=t(62418),j=t(2093),w=t(51009),C=t(25675),N=t.n(C),S=function(e){let{src:n,label:t,width:o,height:a,className:i}=e;return(0,r.jsx)(N(),{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white ".concat(i),width:o||44,height:a||44,src:n,alt:t||"db-icon"})},Z=function(){let{scene:e,dbParam:n,setDbParam:t}=(0,o.useContext)(g.p),[a,i]=(0,o.useState)([]);(0,j.Z)(async()=>{let[,n]=await (0,f.Vx)((0,f.vD)(e));i(null!=n?n:[])},[e]);let l=(0,o.useMemo)(()=>{var e;return null===(e=a.map)||void 0===e?void 0:e.call(a,e=>({name:e.param,..._.S$[e.type]}))},[a]);return((0,o.useEffect)(()=>{(null==l?void 0:l.length)&&!n&&t(l[0].name)},[l,t,n]),null==l?void 0:l.length)?(0,r.jsx)(w.default,{value:n,className:"w-36",onChange:e=>{t(e)},children:l.map(e=>(0,r.jsxs)(w.default.Option,{children:[(0,r.jsx)(S,{width:24,height:24,src:e.icon,label:e.label,className:"w-[1.5em] h-[1.5em] mr-1 inline-block mt-[-4px]"}),e.name]},e.name))}):null},P=t(56155),E=t(67421),O=function(){let{t:e}=(0,E.$G)(),{agent:n,setAgent:t}=(0,o.useContext)(g.p),{data:a=[]}=(0,P.Z)(async()=>{let[,e]=await (0,f.Vx)((0,f.H4)());return null!=e?e:[]});return(0,r.jsx)(w.default,{className:"w-60",value:n,placeholder:e("Select_Plugins"),options:a.map(e=>({label:e.app_name,value:e.app_code})),allowClear:!0,onChange:e=>{null==t||t(e)}})},T=function(e){let{refreshHistory:n,modelChange:t}=e,{scene:a,refreshDialogList:i}=(0,o.useContext)(g.p);return(0,r.jsxs)("div",{className:"w-full py-2 px-4 md:px-4 flex flex-wrap items-center justify-center gap-1 md:gap-4",children:[(0,r.jsx)(y.Z,{onChange:t}),(0,r.jsx)(Z,{}),"chat_excel"===a&&(0,r.jsx)(h,{onComplete:()=>{null==i||i(),null==n||n()}}),"chat_agent"===a&&(0,r.jsx)(O,{}),(0,r.jsx)(x,{})]})}},81799:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});var r=t(85893),o=t(41468),a=t(51009),i=t(19284),l=t(25675),d=t.n(l),c=t(67294),u=t(67421);function s(e,n){var t;let{width:o,height:a}=n||{};return e?(0,r.jsx)(d(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:o||24,height:a||24,src:(null===(t=i.H[e])||void 0===t?void 0:t.icon)||"/models/huggingface.svg",alt:"llm"}):null}n.Z=function(e){let{onChange:n}=e,{t}=(0,u.$G)(),{modelList:l,model:d}=(0,c.useContext)(o.p);return!l||l.length<=0?null:(0,r.jsx)(a.default,{value:d,placeholder:t("choose_model"),className:"w-52",onChange:e=>{null==n||n(e)},children:l.map(e=>{var n;return(0,r.jsx)(a.default.Option,{children:(0,r.jsxs)("div",{className:"flex items-center",children:[s(e),(0,r.jsx)("span",{className:"ml-2",children:(null===(n=i.H[e])||void 0===n?void 0:n.label)||e})]})},e)})})}},74434:function(e,n,t){"use strict";let r;t.d(n,{Z:function(){return m}});var o=t(85893),a=t(9869),i=t(63764),l=t(93967),d=t.n(l),c=t(67294),u=t(62418),s=t(3930),f=t(41468);async function g(){window.obMonaco={getWorkerUrl:e=>{switch(e){case"mysql":return location.origin+"/_next/static/ob-workers/mysql.js";case"obmysql":return location.origin+"/_next/static/ob-workers/obmysql.js";case"oboracle":return location.origin+"/_next/static/ob-workers/oracle.js"}return""}};let e=await t.e(2057).then(t.bind(t,12057)),n=e.default;return r||(r=new n).setup(["mysql"]),r}function m(e){let{className:n,value:t,language:r="mysql",onChange:a,thoughts:l,session:m}=e,h=(0,c.useMemo)(()=>"mysql"!==r?t:l&&l.length>0?(0,u._m)("-- ".concat(l," \n").concat(t)):(0,u._m)(t),[t,l]),p=(0,s.Z)(m),k=(0,c.useContext)(f.p);async function v(e){var n,t;let r=await g();r.setModelOptions((null===(n=e.getModel())||void 0===n?void 0:n.id)||"",function(e,n){let{modelId:t,delimiter:r}=e;return{delimiter:r,async getTableList(e){var t;return(null==n?void 0:null===(t=n())||void 0===t?void 0:t.getTableList(e))||[]},async getTableColumns(e,t){var r;return(null==n?void 0:null===(r=n())||void 0===r?void 0:r.getTableColumns(e))||[]},async getSchemaList(){var e;return(null==n?void 0:null===(e=n())||void 0===e?void 0:e.getSchemaList())||[]}}}({modelId:(null===(t=e.getModel())||void 0===t?void 0:t.id)||"",delimiter:";"},()=>p.current||null))}return(0,o.jsx)(i.ZP,{className:d()(n),onMount:v,value:h,defaultLanguage:r,onChange:a,theme:(null==k?void 0:k.mode)!=="dark"?"github":"githubDark",options:{minimap:{enabled:!1},wordWrap:"on"}})}i._m.config({monaco:a}),a.editor.defineTheme("github",{base:"vs",inherit:!0,rules:[{background:"ffffff",token:""},{foreground:"6a737d",token:"comment"},{foreground:"6a737d",token:"punctuation.definition.comment"},{foreground:"6a737d",token:"string.comment"},{foreground:"005cc5",token:"constant"},{foreground:"005cc5",token:"entity.name.constant"},{foreground:"005cc5",token:"variable.other.constant"},{foreground:"005cc5",token:"variable.language"},{foreground:"6f42c1",token:"entity"},{foreground:"6f42c1",token:"entity.name"},{foreground:"24292e",token:"variable.parameter.function"},{foreground:"22863a",token:"entity.name.tag"},{foreground:"d73a49",token:"keyword"},{foreground:"d73a49",token:"storage"},{foreground:"d73a49",token:"storage.type"},{foreground:"24292e",token:"storage.modifier.package"},{foreground:"24292e",token:"storage.modifier.import"},{foreground:"24292e",token:"storage.type.java"},{foreground:"032f62",token:"string"},{foreground:"032f62",token:"punctuation.definition.string"},{foreground:"032f62",token:"string punctuation.section.embedded source"},{foreground:"005cc5",token:"support"},{foreground:"005cc5",token:"meta.property-name"},{foreground:"e36209",token:"variable"},{foreground:"24292e",token:"variable.other"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.broken"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.deprecated"},{foreground:"fafbfc",background:"b31d28",fontStyle:"italic underline",token:"invalid.illegal"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"carriage-return"},{foreground:"b31d28",fontStyle:"bold italic underline",token:"invalid.unimplemented"},{foreground:"b31d28",token:"message.error"},{foreground:"24292e",token:"string source"},{foreground:"005cc5",token:"string variable"},{foreground:"032f62",token:"source.regexp"},{foreground:"032f62",token:"string.regexp"},{foreground:"032f62",token:"string.regexp.character-class"},{foreground:"032f62",token:"string.regexp constant.character.escape"},{foreground:"032f62",token:"string.regexp source.ruby.embedded"},{foreground:"032f62",token:"string.regexp string.regexp.arbitrary-repitition"},{foreground:"22863a",fontStyle:"bold",token:"string.regexp constant.character.escape"},{foreground:"005cc5",token:"support.constant"},{foreground:"005cc5",token:"support.variable"},{foreground:"005cc5",token:"meta.module-reference"},{foreground:"735c0f",token:"markup.list"},{foreground:"005cc5",fontStyle:"bold",token:"markup.heading"},{foreground:"005cc5",fontStyle:"bold",token:"markup.heading entity.name"},{foreground:"22863a",token:"markup.quote"},{foreground:"24292e",fontStyle:"italic",token:"markup.italic"},{foreground:"24292e",fontStyle:"bold",token:"markup.bold"},{foreground:"005cc5",token:"markup.raw"},{foreground:"b31d28",background:"ffeef0",token:"markup.deleted"},{foreground:"b31d28",background:"ffeef0",token:"meta.diff.header.from-file"},{foreground:"b31d28",background:"ffeef0",token:"punctuation.definition.deleted"},{foreground:"22863a",background:"f0fff4",token:"markup.inserted"},{foreground:"22863a",background:"f0fff4",token:"meta.diff.header.to-file"},{foreground:"22863a",background:"f0fff4",token:"punctuation.definition.inserted"},{foreground:"e36209",background:"ffebda",token:"markup.changed"},{foreground:"e36209",background:"ffebda",token:"punctuation.definition.changed"},{foreground:"f6f8fa",background:"005cc5",token:"markup.ignored"},{foreground:"f6f8fa",background:"005cc5",token:"markup.untracked"},{foreground:"6f42c1",fontStyle:"bold",token:"meta.diff.range"},{foreground:"005cc5",token:"meta.diff.header"},{foreground:"005cc5",fontStyle:"bold",token:"meta.separator"},{foreground:"005cc5",token:"meta.output"},{foreground:"586069",token:"brackethighlighter.tag"},{foreground:"586069",token:"brackethighlighter.curly"},{foreground:"586069",token:"brackethighlighter.round"},{foreground:"586069",token:"brackethighlighter.square"},{foreground:"586069",token:"brackethighlighter.angle"},{foreground:"586069",token:"brackethighlighter.quote"},{foreground:"b31d28",token:"brackethighlighter.unmatched"},{foreground:"b31d28",token:"sublimelinter.mark.error"},{foreground:"e36209",token:"sublimelinter.mark.warning"},{foreground:"959da5",token:"sublimelinter.gutter-mark"},{foreground:"032f62",fontStyle:"underline",token:"constant.other.reference.link"},{foreground:"032f62",fontStyle:"underline",token:"string.other.link"}],colors:{"editor.foreground":"#24292e","editor.background":"#ffffff","editor.selectionBackground":"#c8c8fa","editor.inactiveSelectionBackground":"#fafbfc","editor.lineHighlightBackground":"#fafbfc","editorCursor.foreground":"#24292e","editorWhitespace.foreground":"#959da5","editorIndentGuide.background":"#959da5","editorIndentGuide.activeBackground":"#24292e","editor.selectionHighlightBorder":"#fafbfc"}}),a.editor.defineTheme("githubDark",{base:"vs-dark",inherit:!0,rules:[{background:"24292e",token:""},{foreground:"959da5",token:"comment"},{foreground:"959da5",token:"punctuation.definition.comment"},{foreground:"959da5",token:"string.comment"},{foreground:"c8e1ff",token:"constant"},{foreground:"c8e1ff",token:"entity.name.constant"},{foreground:"c8e1ff",token:"variable.other.constant"},{foreground:"c8e1ff",token:"variable.language"},{foreground:"b392f0",token:"entity"},{foreground:"b392f0",token:"entity.name"},{foreground:"f6f8fa",token:"variable.parameter.function"},{foreground:"7bcc72",token:"entity.name.tag"},{foreground:"ea4a5a",token:"keyword"},{foreground:"ea4a5a",token:"storage"},{foreground:"ea4a5a",token:"storage.type"},{foreground:"f6f8fa",token:"storage.modifier.package"},{foreground:"f6f8fa",token:"storage.modifier.import"},{foreground:"f6f8fa",token:"storage.type.java"},{foreground:"79b8ff",token:"string"},{foreground:"79b8ff",token:"punctuation.definition.string"},{foreground:"79b8ff",token:"string punctuation.section.embedded source"},{foreground:"c8e1ff",token:"support"},{foreground:"c8e1ff",token:"meta.property-name"},{foreground:"fb8532",token:"variable"},{foreground:"f6f8fa",token:"variable.other"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.broken"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.deprecated"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"invalid.illegal"},{foreground:"fafbfc",background:"d73a49",fontStyle:"italic underline",token:"carriage-return"},{foreground:"d73a49",fontStyle:"bold italic underline",token:"invalid.unimplemented"},{foreground:"d73a49",token:"message.error"},{foreground:"f6f8fa",token:"string source"},{foreground:"c8e1ff",token:"string variable"},{foreground:"79b8ff",token:"source.regexp"},{foreground:"79b8ff",token:"string.regexp"},{foreground:"79b8ff",token:"string.regexp.character-class"},{foreground:"79b8ff",token:"string.regexp constant.character.escape"},{foreground:"79b8ff",token:"string.regexp source.ruby.embedded"},{foreground:"79b8ff",token:"string.regexp string.regexp.arbitrary-repitition"},{foreground:"7bcc72",fontStyle:"bold",token:"string.regexp constant.character.escape"},{foreground:"c8e1ff",token:"support.constant"},{foreground:"c8e1ff",token:"support.variable"},{foreground:"c8e1ff",token:"meta.module-reference"},{foreground:"fb8532",token:"markup.list"},{foreground:"0366d6",fontStyle:"bold",token:"markup.heading"},{foreground:"0366d6",fontStyle:"bold",token:"markup.heading entity.name"},{foreground:"c8e1ff",token:"markup.quote"},{foreground:"f6f8fa",fontStyle:"italic",token:"markup.italic"},{foreground:"f6f8fa",fontStyle:"bold",token:"markup.bold"},{foreground:"c8e1ff",token:"markup.raw"},{foreground:"b31d28",background:"ffeef0",token:"markup.deleted"},{foreground:"b31d28",background:"ffeef0",token:"meta.diff.header.from-file"},{foreground:"b31d28",background:"ffeef0",token:"punctuation.definition.deleted"},{foreground:"176f2c",background:"f0fff4",token:"markup.inserted"},{foreground:"176f2c",background:"f0fff4",token:"meta.diff.header.to-file"},{foreground:"176f2c",background:"f0fff4",token:"punctuation.definition.inserted"},{foreground:"b08800",background:"fffdef",token:"markup.changed"},{foreground:"b08800",background:"fffdef",token:"punctuation.definition.changed"},{foreground:"2f363d",background:"959da5",token:"markup.ignored"},{foreground:"2f363d",background:"959da5",token:"markup.untracked"},{foreground:"b392f0",fontStyle:"bold",token:"meta.diff.range"},{foreground:"c8e1ff",token:"meta.diff.header"},{foreground:"0366d6",fontStyle:"bold",token:"meta.separator"},{foreground:"0366d6",token:"meta.output"},{foreground:"ffeef0",token:"brackethighlighter.tag"},{foreground:"ffeef0",token:"brackethighlighter.curly"},{foreground:"ffeef0",token:"brackethighlighter.round"},{foreground:"ffeef0",token:"brackethighlighter.square"},{foreground:"ffeef0",token:"brackethighlighter.angle"},{foreground:"ffeef0",token:"brackethighlighter.quote"},{foreground:"d73a49",token:"brackethighlighter.unmatched"},{foreground:"d73a49",token:"sublimelinter.mark.error"},{foreground:"fb8532",token:"sublimelinter.mark.warning"},{foreground:"6a737d",token:"sublimelinter.gutter-mark"},{foreground:"79b8ff",fontStyle:"underline",token:"constant.other.reference.link"},{foreground:"79b8ff",fontStyle:"underline",token:"string.other.link"}],colors:{"editor.foreground":"#f6f8fa","editor.background":"#24292e","editor.selectionBackground":"#4c2889","editor.inactiveSelectionBackground":"#444d56","editor.lineHighlightBackground":"#444d56","editorCursor.foreground":"#ffffff","editorWhitespace.foreground":"#6a737d","editorIndentGuide.background":"#6a737d","editorIndentGuide.activeBackground":"#f6f8fa","editor.selectionHighlightBorder":"#444d56"}})},91085:function(e,n,t){"use strict";var r=t(85893),o=t(32983),a=t(71577),i=t(93967),l=t.n(i),d=t(67421);n.Z=function(e){let{className:n,error:t,description:i,refresh:c}=e,{t:u}=(0,d.$G)();return(0,r.jsx)(o.Z,{image:"/empty.png",imageStyle:{width:320,height:196,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:l()("flex items-center justify-center flex-col h-full w-full",n),description:t?(0,r.jsx)(a.ZP,{type:"primary",onClick:c,children:u("try_again")}):null!=i?i:u("no_data")})}},30119:function(e,n,t){"use strict";t.d(n,{Tk:function(){return d},PR:function(){return c}});var r=t(2453),o=t(6154),a=t(83454);let i=o.default.create({baseURL:a.env.API_BASE_URL});i.defaults.timeout=1e4,i.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),t(96486);let l={"content-type":"application/json"},d=(e,n)=>{if(n){let t=Object.keys(n).filter(e=>void 0!==n[e]&&""!==n[e]).map(e=>"".concat(e,"=").concat(n[e])).join("&");t&&(e+="?".concat(t))}return i.get("/api"+e,{headers:l}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},c=(e,n)=>i.post(e,n,{headers:l}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},23293:function(){}}]);
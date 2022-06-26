(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7483:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packet-log",function(){return r(4459)}])},4459:function(e,n,r){"use strict";r.r(n);var t,o=r(9837),a=r(3803),l=r(5105),c=r(421),i=r(3319),s=r(8391),d=r(9017),u=r(2828),g=r(7015),m=r(8144),f=r.n(m),w=r(3617),h=r(5353),p=r(2373);function v(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function x(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){x(e,n,r[n])}))}return e}function y(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var N=(x(t={},d.wj.Auth,"AUTH"),x(t,d.wj.Close,"CLSE"),x(t,d.wj.Connect,"CNXN"),x(t,d.wj.OK,"OKAY"),x(t,d.wj.Open,"OPEN"),x(t,d.wj.Write,"WRTE"),t),j=new(function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectedPacket=void 0,(0,u.ky)(this,{selectedPacket:u.LO.ref}),(0,u.EH)((function(){0===h.q.logs.length&&(n.selectedPacket=void 0)}))}var n,r,t;return n=e,(r=[{key:"empty",get:function(){return!h.q.logs.length}},{key:"commandBarItems",get:function(){return[{key:"clear",disabled:this.empty,iconProps:{iconName:p.PJ.Delete},text:"Clear",onClick:function(){return h.q.clearLog()}}]}}])&&v(n.prototype,r),t&&v(n,t),e}()),C=(0,c.Z)({grow:{height:0},grid:{height:"100%"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:b({fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default"},i.q5.overflow("hidden")),hexViewer:b({},i.q5.padding("12px"),i.q5.borderTop("1px","solid","rgb(243, 242, 241)"))}),k=[{title:"Direction",width:100,CellComponent:(0,p.$g)("Direction")((function(e){var n=e.className,r=e.rowIndex,t=y(e,["className","rowIndex"]),a=h.q.logs[r],l=C();return(0,o.jsx)("div",b({className:(0,s.z)(n,l.code)},t,{children:a.direction}))}))},{title:"Command",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n,r=e.className,t=e.rowIndex,a=y(e,["className","rowIndex"]),l=h.q.logs[t];l.commandString||(l.commandString=null!==(n=N[l.command])&&void 0!==n?n:(0,d.FO)(new Uint32Array([l.command])));var c=C();return(0,o.jsx)("div",b({className:(0,s.z)(r,c.code)},a,{children:l.commandString}))}))},{title:"Arg0",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=y(e,["className","rowIndex"]),a=h.q.logs[r];a.arg0String||(a.arg0String=a.arg0.toString(16).padStart(8,"0"));var l=C();return(0,o.jsx)("div",b({className:(0,s.z)(n,l.code)},t,{children:a.arg0String}))}))},{title:"Arg1",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=y(e,["className","rowIndex"]),a=h.q.logs[r];a.arg1String||(a.arg1String=a.arg1.toString(16).padStart(8,"0"));var l=C();return(0,o.jsx)("div",b({className:(0,s.z)(n,l.code)},t,{children:a.arg1String}))}))},{title:"Payload",width:200,flexGrow:1,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=y(e,["className","rowIndex"]),a=h.q.logs[r];a.payloadString||(a.payloadString=(0,w.lr)(a.payload.subarray(0,100)));var l=C();return(0,o.jsx)("div",b({className:(0,s.z)(n,l.code)},t,{children:a.payloadString}))}))}],O=(0,p.$g)("Header")((function(e){var n=e.className,r=e.columnIndex,t=y(e,["className","columnIndex"]),a=C();return(0,o.jsx)("div",b({className:(0,s.z)(n,a.header)},t,{children:k[r].title}))})),P=(0,g.Pi)((function(e){var n=e.className,r=e.rowIndex,t=y(e,["className","rowIndex"]),a=C(),l=(0,p.R9)((function(){(0,u.z)((function(){j.selectedPacket=h.q.logs[r]}))}));return(0,o.jsx)("div",b({className:(0,s.z)(n,a.row,j.selectedPacket===h.q.logs[r]&&a.selected),onClick:l},t))}));n.default=(0,g.Pi)((function(){var e=C();return(0,o.jsxs)(a.K,b({},p.LE,{tokens:{},children:[(0,o.jsx)(f(),{children:(0,o.jsx)("title",{children:"Packet Log - Android Web Toolbox"})}),(0,o.jsx)(w.X3,{items:j.commandBarItems}),(0,o.jsx)(l.v,{className:e.grow,grow:!0,children:(0,o.jsx)(w.rj,{className:e.grid,rowCount:h.q.logs.length,rowHeight:32,columns:k,HeaderComponent:O,RowComponent:P})}),j.selectedPacket&&j.selectedPacket.payload.length>0&&(0,o.jsx)(l.v,{className:e.grow,grow:!0,children:(0,o.jsx)(w.Kb,{className:e.hexViewer,data:j.selectedPacket.payload})})]}))}))}},function(e){e.O(0,[774,888,179],(function(){return n=7483,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=packet-log-16cc6d5c41414c3d.js.map
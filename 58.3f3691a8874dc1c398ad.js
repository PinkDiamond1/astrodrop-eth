(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{xhLS:function(e,t,n){"use strict";n.r(t),n("ls82");var r=n("NcyZ");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)})}}n("kB5k"),n("/TMw"),n("M39V"),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.heading,n=e.description,o=e.icon,c=e.html,a=e.button;return function(){var e=u(regeneratorRuntime.mark(function e(s){var l,f,p,w,h,b,d,v,k;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f=s.appNetworkId,p=s.walletSelect,w=s.walletCheck,h=s.exit,b=s.stateSyncStatus,d=s.stateStore,v=s.wallet,null!==(l=s.network)){e.next=5;break}if(!b.network){e.next=5;break}return e.next=5,new Promise(function(e){b.network&&b.network.then(e),setTimeout(function(){null===l&&e(void 0)},500)});case 5:if("WalletConnect"===Object(r.h)(null==v?void 0:v.provider)){e.next=13;break}return e.prev=6,e.next=9,null==v||null===(k=v.provider)||void 0===k?void 0:k.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+(null==f?void 0:f.toString(16))}]});case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:if(d.network.get()==f){e.next=15;break}return e.abrupt("return",{heading:t||"You Must Change Networks",description:n||"We've detected that you need to switch your wallet's network from <b>".concat(Object(r.m)(l),"</b> to <b>").concat(Object(r.m)(f),'</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:a||{onclick:function(){var e=u(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1,{switchingWallets:!0}),e.next=3,p();case 3:if(e.t0=e.sent,!e.t0){e.next=9;break}return e.next=8,w();case 8:e.t0=e.sent;case 9:t=e.t0,r.c.update(function(e){return i(i({},e),{},{switchingWallets:!1,walletCheckCompleted:t})});case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),text:"Switch Wallet"},html:c,icon:o||r.j});case 15:case"end":return e.stop()}},e,null,[[6,11]])}));return function(t){return e.apply(this,arguments)}}()}}}]);
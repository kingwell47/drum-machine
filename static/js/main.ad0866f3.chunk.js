(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var i=c(1),d=c(4),n=c.n(d),o=(c(9),c(10),c(2)),s=c(0);var a=function(t){var e=Object(i.useState)(!1),c=Object(o.a)(e,2),d=c[0],n=c[1],a=function(e){e.key.toLowerCase()===t.id.toLowerCase()&&r()};Object(i.useEffect)((function(){window.addEventListener("keydown",a)}));var r=function(){n(!0),u(),t.handler(t.desc),setTimeout((function(){n(!1)}),100)},u=function(){document.getElementById(t.id).play()};return Object(s.jsxs)("div",{className:d?"drum-pad active":"drum-pad",id:t.btnId,onClick:r,children:[Object(s.jsx)("audio",{className:"clip",id:t.id,src:t.src}),t.id]})},r={1:c.p+"static/media/270304__littlerobotsoundfactory__collect-point-00.5a9b4fe5.wav",2:c.p+"static/media/270307__littlerobotsoundfactory__explosion-01.49ac8afa.wav",3:c.p+"static/media/270317__littlerobotsoundfactory__jump-01.04d2a67e.wav",4:c.p+"static/media/270326__littlerobotsoundfactory__hit-01.918b6925.wav",5:c.p+"static/media/270336__littlerobotsoundfactory__shoot-02.0ede2a0f.wav",6:c.p+"static/media/270337__littlerobotsoundfactory__pickup-00.8cb42375.wav",7:c.p+"static/media/270340__littlerobotsoundfactory__pickup-01.03807d0f.wav",8:c.p+"static/media/270341__littlerobotsoundfactory__pickup-04.0bf07ee0.wav",9:c.p+"static/media/270342__littlerobotsoundfactory__pickup-03.21a2eb5e.wav"},u=[{id:"Q",src:r[1],desc:"Collect Point 00",btnId:"collect-point-00"},{id:"W",src:r[2],desc:"Explosion 01",btnId:"explosion-01"},{id:"E",src:r[3],desc:"Jump 01",btnId:"jump-01"},{id:"A",src:r[4],desc:"Hit 01",btnId:"hit-01"},{id:"S",src:r[5],desc:"Shoot 02",btnId:"shoot-02"},{id:"D",src:r[6],desc:"Pickup 00",btnId:"pickup-00"},{id:"Z",src:r[7],desc:"Pickup 01",btnId:"pickup-01"},{id:"X",src:r[8],desc:"Pickup 04",btnId:"pickup-04"},{id:"C",src:r[9],desc:"Pickup 03",btnId:"pickup-03"}];var l=function(t){return Object(s.jsx)("section",{className:"button-grid",children:u.map((function(e){return Object(s.jsx)(a,{id:e.id,src:e.src,desc:e.desc,btnId:e.btnId,handler:t.handler},e.id)}))})};var p=function(t){var e=Object(i.useState)(""),c=Object(o.a)(e,2),d=c[0],n=c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"display",id:"display",children:Object(s.jsx)("p",{children:d})}),Object(s.jsx)(l,{handler:function(t){return n(t)}})]})};var b=function(){return Object(s.jsxs)("div",{id:"drum-machine",className:"drum-machine",children:[Object(s.jsx)("h1",{children:"8-Bit Sound Machine"}),Object(s.jsx)(p,{}),Object(s.jsx)("a",{href:"https://freesound.org/people/LittleRobotSoundFactory/packs/16681/",children:"Sounds by LittleRobotSoundFactory"}),Object(s.jsx)("a",{href:"https://www.kingwell47.com",children:"Coded by Kingwell47"})]})};n.a.render(Object(s.jsx)("main",{className:"main",children:Object(s.jsx)(b,{})}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.ad0866f3.chunk.js.map
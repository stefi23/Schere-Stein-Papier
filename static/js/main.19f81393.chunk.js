(this["webpackJsonprock-paper-scissors-game"]=this["webpackJsonprock-paper-scissors-game"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(12),a(3)),s=a(4),m=a(5),i=a(6),u=(a(13),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChoice=function(e){e.preventDefault();var t=e.target.value,a=setInterval((function(){n.setState({counter:n.state.counter-1})}),1e3);setTimeout((function(){clearInterval(a),n.setState({counter:3,counterComplete:!0}),n.getScore(l)}),3e3);var r=n.getComputerMove(),l=n.getWinner(t,r);n.setState({player:t,winner:l,computer:r})},n.getComputerMove=function(){var e=Math.floor(3*Math.random())+0;return 0===e?"\u270b":1===e?"\u270c\ufe0f":"\u270a"},n.getWinner=function(e,t){return e===t?"tie":"\u270a"===e?"\u270c\ufe0f"===t?"Player":"Computer":"\u270c\ufe0f"===e?"\u270b"===t?"Player":"Computer":"\u270b"===e?"\u270a"===t?"Player":"Computer":void 0},n.playGame=function(){n.setState({winner:"unknown",counterComplete:!1})},n.resetGame=function(){n.setState({computerScore:0,playerScore:0,tie:0,counterComplete:!1}),n.playGame()},n.getScore=function(e){"Player"===e?n.setState({playerScore:n.state.playerScore+1}):"Computer"===e?n.setState({computerScore:n.state.computerScore+1}):n.setState({tie:n.state.tie+1})},n.state={element:["\u270b","\u270c\ufe0f","\u270a"],computer:"",player:"",winner:"unknown",computerScore:0,playerScore:0,tie:0,counter:3,counterComplete:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App "},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"p-3 box"},r.a.createElement("h1",null,"Rock, Paper, Scissors!"),"unknown"===this.state.winner?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container "},r.a.createElement("p",null,"Play against the computer. Press any button to start.")),r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"\u270a",className:"m-2 buttonGrayRounded"},r.a.createElement("span",{role:"img","aria-label":"rock"},"\u270a")),r.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"\u270b",className:"m-2 buttonGrayRounded"},r.a.createElement("span",{role:"img","aria-label":"paper"},"\u270b")),r.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"\u270c\ufe0f",className:"m-2 buttonGrayRounded"},r.a.createElement("span",{role:"img","aria-label":"scissors"},"\u270c\ufe0f")))):r.a.createElement("div",{className:"row p-3 m-3"},r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("p",null,"Player:"),r.a.createElement("p",{className:"m-2"},r.a.createElement("span",{role:"img","aria-label":"player choice",className:"buttonBox",style:{background:"Player"===this.state.winner&&!0===this.state.counterComplete?"#8a6a76":(!0===this.state.counterComplete&&this.state.winner,"#49515f")}}," ",this.state.player))),r.a.createElement("div",{className:"col-4 text-center d-flex align-items-center justify-content-center "},this.state.counterComplete?r.a.createElement("p",{className:"mb-0"}," ","tie"===this.state.winner?"You have a tie":this.state.winner+" won!"):r.a.createElement("p",{className:"mb-0",style:{fontSize:"28px"}},this.state.counter)),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("p",null,"Computer:"),this.state.counterComplete?r.a.createElement("p",{className:"m-2 "},r.a.createElement("span",{role:"img","aria-label":"computer choice",className:"buttonBox",style:{background:"Computer"===this.state.winner&&!0===this.state.counterComplete?"#8a6a76":(!0===this.state.counterComplete&&this.state.winner,"#49515f")}}," ",this.state.computer)):r.a.createElement("p",{className:"m-2"},r.a.createElement("span",{className:"buttonBox",role:"img","aria-label":"question mark"},"\u2754"))))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-12"},"unknown"!==this.state.winner&&!0===this.state.counterComplete?r.a.createElement("button",{className:"buttonGray m-2 border rounded",onClick:this.playGame},"Play again"):null,r.a.createElement("button",{className:"buttonGray m-2 border rounded",onClick:this.resetGame,disabled:0===this.state.computerScore&&0===this.state.playerScore&&0===this.state.tie},"Reset Game"))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{id:"scoreboard",align:"center",className:"table table-dark"},r.a.createElement("tr",null,r.a.createElement("td",null," Player "),r.a.createElement("td",{width:"30"}," \xa0 "),r.a.createElement("td",null," Computer "),r.a.createElement("td",{width:"30"}," \xa0 "),r.a.createElement("td",null," Tie ")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.playerScore),r.a.createElement("td",null," \xa0 "),r.a.createElement("td",null,this.state.computerScore),r.a.createElement("td",null," \xa0 "),r.a.createElement("td",null,this.state.tie)))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.19f81393.chunk.js.map
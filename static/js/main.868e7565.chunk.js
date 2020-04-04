(this["webpackJsonprock-paper-scissors-game"]=this["webpackJsonprock-paper-scissors-game"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),l=a.n(c),o=(a(12),a(3)),s=a(4),i=a(5),m=a(6),u=(a(13),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleChoice=function(e){e.preventDefault();var t=e.target.value,a=r.getComputerMove(),n=r.getWinner(t,a);r.setState({player:t,computer:a,winner:n}),r.getScore(n)},r.getComputerMove=function(){var e=Math.floor(3*Math.random())+0;return 0===e?"paper":1===e?"scissors":"rock"},r.getWinner=function(e,t){return e===t?"tie":"rock"===e?"scissors"===t?"player":"computer":"scissors"===e?"paper"===t?"player":"computer":"paper"===e?"rock"===t?"player":"computer":void 0},r.playGame=function(){r.setState({winner:"unknown"})},r.getScore=function(e){"player"===e?r.setState({playerScore:r.state.playerScore+1}):"computer"===e?r.setState({computerScore:r.state.computerScore+1}):r.setState({tie:r.state.tie+1})},r.state={element:["paper","scissors","rock"],computer:"",player:"",winner:"unknown",computerScore:0,playerScore:0,tie:0},r}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Rock, Paper, Scissors!"),n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"Play against the computer! Press any button to start."),"unknown"===this.state.winner?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"paper",className:"m-2"},"Paper"),n.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"rock",className:"m-2"},"Rock"),n.a.createElement("button",{onClick:this.handleChoice,name:"user",value:"scissors",className:"m-2"},"Scissors"))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement("p",null,this.state.player)),n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement("p",null,this.state.computer)),n.a.createElement("div",{className:"col-12 text-center"},n.a.createElement("p",null,this.state.winner," won!")))),n.a.createElement("button",{className:"btn btn-dark m-2",onClick:this.playGame},"Play again!"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},"Score",n.a.createElement("table",{id:"scoreboard",align:"center"},n.a.createElement("tr",null,n.a.createElement("td",null," Player "),n.a.createElement("td",{width:"30"}," \xa0 "),n.a.createElement("td",null," Computer "),n.a.createElement("td",{width:"30"}," \xa0 "),n.a.createElement("td",null," Tie ")),n.a.createElement("tr",null,n.a.createElement("td",null,this.state.playerScore),n.a.createElement("td",null," \xa0 "),n.a.createElement("td",null,this.state.computerScore),n.a.createElement("td",null," \xa0 "),n.a.createElement("td",null,this.state.tie)))))))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.868e7565.chunk.js.map
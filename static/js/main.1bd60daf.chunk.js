(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(3),i=a.n(s),r=(a(15),a(4)),c=a(5),m=a(7),o=a(6),u=a(8),h=a(1),p=a.n(h),d=(a(17),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={radio:"1",image:"",yourName:"",live:"",job:"",hobby:"",like:"",comment:"",url:"",message:"",successClass:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleInputLive",value:function(e){var t=e.target.value;this.setState({live:t})}},{key:"handleInputName",value:function(e){var t=e.target.value;this.setState({yourName:t})}},{key:"handleInputJob",value:function(e){var t=e.target.value;this.setState({job:t})}},{key:"handleInputHobby",value:function(e){var t=e.target.value;this.setState({hobby:t})}},{key:"handleInputLike",value:function(e){var t=e.target.value;this.setState({like:t})}},{key:"handleInputComment",value:function(e){var t=e.target.value;this.setState({comment:t})}},{key:"handleInputUrl",value:function(e){var t=e.target.value;this.setState({url:t})}},{key:"send",value:function(){this.writeMsg(),""===this.state.yourName?window.alert("\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"):(p()(".outputArea__msg").css("opacity",1),setTimeout(function(){p()(".outputArea__sns").css("opacity",1)},400))}},{key:"writeMsg",value:function(){var e=this.state.radio,t=this.state.live,a=this.state.job,n=this.state.hobby,l=this.state.like,s=this.state.comment,i="";"1"===e?(this.setState({image:"./girl.jpg"}),i="@ "+t+" /* job */"+a+" /* hobby */"+n+" /* love */"+l+" "+s):"2"===e?(this.setState({image:"./dog.jpg"}),i=t+" | "+a+" | "+n+" | "+l+" | "+s+" "+s):(this.setState({image:"./pika.jpg"}),i=t+"\u3067"+a+"\u3084\u3063\u3066\u307e\u3059\u3002"+n+","+l+"\u304c\u597d\u304d\u3067\u3059\uff01\uff01 "+s),this.setState({message:i})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"top"},l.a.createElement("h1",{className:"top__title"},"Profile Creator"),l.a.createElement("p",{className:"top__desc"},"Let's create your profile you can use your page in SNS!")),l.a.createElement("div",{className:"formArea"},l.a.createElement("div",{className:"radioArea"},l.a.createElement("p",{className:"radioArea__txt"},"Select Type"),l.a.createElement("div",{className:"radioArea__button"},l.a.createElement("ul",{className:"typeList"},l.a.createElement("li",{className:"typeList__item"},l.a.createElement("input",{type:"radio",name:"textType",id:"type1",value:"1",checked:"1"===this.state.radio,onChange:function(){return e.setState({radio:"1"})}}),l.a.createElement("label",{htmlFor:"type1"},"SHAREOTSU")),l.a.createElement("li",{className:"typeList__item"},l.a.createElement("input",{type:"radio",name:"textType",id:"type2",value:"2",checked:"2"===this.state.radio,onChange:function(){return e.setState({radio:"2"})}}),l.a.createElement("label",{htmlFor:"type2"},"SHIMPLE")),l.a.createElement("li",{className:"typeList__item"},l.a.createElement("input",{type:"radio",name:"textType",id:"type3",value:"3",checked:"3"===this.state.radio,onChange:function(){return e.setState({radio:"3"})}}),l.a.createElement("label",{htmlFor:"type3"},"TALKING"))))),l.a.createElement("div",{className:"inputArea"},l.a.createElement("p",{className:"inputArea__txt"},"Fill In The Blanks"),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u540d\u524d"),l.a.createElement("input",{type:"text",value:this.state.yourName,onChange:this.handleInputName.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u5c45\u4f4f\u5730"),l.a.createElement("input",{type:"text",value:this.state.live,onChange:this.handleInputLive.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u8077\u696d"),l.a.createElement("input",{type:"text",value:this.state.job,onChange:this.handleInputJob.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u8da3\u5473"),l.a.createElement("input",{type:"text",value:this.state.hobby,onChange:this.handleInputHobby.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u597d\u304d\u306a\u3082\u306e"),l.a.createElement("input",{type:"text",value:this.state.like,onChange:this.handleInputLike.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"\u3072\u3068\u3053\u3068"),l.a.createElement("input",{type:"text",value:this.state.comment,onChange:this.handleInputComment.bind(this)})),l.a.createElement("div",{className:"inputArea__item"},l.a.createElement("label",null,"URL"),l.a.createElement("input",{type:"text",value:this.state.url,onChange:this.handleInputUrl.bind(this)}))),l.a.createElement("button",{className:"sendButton",onClick:this.send.bind(this)},"CREATE!")),l.a.createElement("div",{className:"outputArea"},l.a.createElement("p",{className:"outputArea__msg"},"Created!!!"),l.a.createElement("div",{className:"outputArea__sns"},l.a.createElement("div",{className:"sns__header"},l.a.createElement("img",{src:"./sns_header.png",alt:""})),l.a.createElement("div",{className:"sns__content"},l.a.createElement("div",{className:"sns__content__photo"},l.a.createElement("img",{src:this.state.image,alt:""})),l.a.createElement("div",{className:"sns__content__text"},l.a.createElement("div",{className:"row1"},l.a.createElement("p",{className:"userId"},"nijibox"),l.a.createElement("p",{className:"lookPro"},"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u7de8\u96c6"),l.a.createElement("span",{className:"wheel"},l.a.createElement("img",{src:"./wheel.png",alt:""}))),l.a.createElement("div",{className:"row2"},l.a.createElement("p",null,"\u6295\u7a3f98\u4ef6\xa0\xa0\xa0\u30d5\u30a9\u30ed\u30ef\u30fc201\u4eba\xa0\xa0\xa0228\u4eba\u3092\u30d5\u30a9\u30ed\u30fc\u4e2d ")),l.a.createElement("div",{className:"row3"},this.state.yourName),l.a.createElement("pre",{className:"row4"},this.state.message),l.a.createElement("div",{className:"row5"},l.a.createElement("a",{href:this.state.url,target:"_blank"},this.state.url)))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.1bd60daf.chunk.js.map
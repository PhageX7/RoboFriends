(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),s=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=n(0),b=function(e){var t=e.id,n=e.name,r=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?size=250x250")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:n}),Object(l.jsx)("p",{children:r})]})]})},u=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"searchbox",placeholder:"Search Robot"})})};var d=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{className:"font-face-sega",children:"Opps, Error on page."}):this.props.children}}]),n}(r.Component),p=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfeild:t.target.value})},e.state={robots:[],searchfeild:""},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfeild,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"font-face-sega",children:"Robo Friends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(u,{robots:r})})})]})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(15),n.p;a.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.e3a20f91.chunk.js.map
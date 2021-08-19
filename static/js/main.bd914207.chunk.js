(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a,r,c,o,i,s,d,l,b,u,j,m=t(1),f=t.n(m),h=t(8),x=t.n(h),g=(t(22),t(9)),O=t(10),p=t(11),v=t(17),k=t(16),w=t(3),y=t(2),F=y.a.section(a||(a=Object(w.a)(["\n  background-color: #e6faf5;\n  padding: 1rem 2rem;\n  border: 1px solid #6723ba;\n  border-radius: 1rem;\n  box-shadow: 7px 7px 15px -8px rgba(0, 0, 0, 0.56);\n  font-family: Open Sans;\n"]))),P=y.a.h1(r||(r=Object(w.a)(["\n  margin: 0 0 1.5rem;\n  text-align: center;\n  color: #6723ba;\n  text-transform: uppercase;\n\n  font-size: 2.25rem;\n"]))),C=t(0),N=function(e){var n=e.title,t=e.children;return Object(C.jsxs)(F,{children:[Object(C.jsx)(P,{children:n}),t]})},S=y.a.div(c||(c=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  @media (min-width: 480px) {\n    flex-direction: row;\n  }\n"]))),z=y.a.button(o||(o=Object(w.a)(["\n  min-width: 160px;\n\n  background-color: #e6e6e6;\n  border: 1px solid #6723ba;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1.5rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  color: #6723ba;\n\n  margin-bottom: 1rem;\n\n  transition: background-color 250ms ease-in-out;\n\n  @media (min-width: 480px) {\n    margin-bottom: 0;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #fafafa;\n  }\n"]))),T=function(e){var n=e.options,t=e.onLeaveFeedback,a={good:128512,neutral:128528,bad:128533},r=Object.keys(n).map((function(e,n){return Object(C.jsxs)(z,{type:"button",value:e,onClick:t,children:["".concat(String.fromCodePoint(a[e])," "),e]},n)}));return Object(C.jsx)(S,{children:r})},V=y.a.section(i||(i=Object(w.a)(["\n  background-color: #e6faf5;\n  padding: 1rem 2rem;\n"]))),L=y.a.h2(s||(s=Object(w.a)(["\n  text-align: center;\n  color: #6723ba;\n  text-transform: uppercase;\n"]))),B=y.a.ul(d||(d=Object(w.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n\n  margin: -1rem;\n"]))),I=y.a.h2(l||(l=Object(w.a)(["\n  text-align: center;\n  color: #6723ba;\n  text-transform: uppercase;\n  font-size: 2rem;\n\n  margin-bottom: 1rem;\n"]))),J=y.a.li(b||(b=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 600;\n  font-size: 1.5rem;\n\n  margin: 1rem;\n"]))),M=y.a.span(u||(u=Object(w.a)(["\n  font-weight: 800;\n  color: #6723ba;\n  font-size: 1.5rem;\n\n  margin-top: 0.5rem;\n"]))),D=t(15),E=t.n(D),G=function(e){var n=e.good,t=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage,o=e.formatValue;return Object(C.jsxs)(V,{children:[Object(C.jsx)(I,{children:"Statistics"}),Object(C.jsxs)(B,{children:[Object(C.jsxs)(J,{children:["Good: ",Object(C.jsx)(M,{children:n})]}),Object(C.jsxs)(J,{children:["Neutral: ",Object(C.jsx)(M,{children:t})]}),Object(C.jsxs)(J,{children:["Bad: ",Object(C.jsx)(M,{children:a})]}),Object(C.jsxs)(J,{children:["Total: ",Object(C.jsx)(M,{children:r})]}),Object(C.jsxs)(J,{children:["Positive feedback:",Object(C.jsxs)(M,{children:[Object(C.jsx)(E.a,{value:c,duration:300,formatValue:o}),"%"]})]})]})]})},q=function(e){var n=e.message;return Object(C.jsx)(V,{children:Object(C.jsx)(L,{children:n})})},A=y.a.div(j||(j=Object(w.a)(["\n  width: 600px;\n  margin: 1rem auto;\n"]))),H=function(e){Object(v.a)(t,e);var n=Object(k.a)(t);function t(e){var a;return Object(O.a)(this,t),(a=n.call(this,e)).onFeedbackClick=function(e){var n=e.target.value;a.setState((function(e){return Object(g.a)({},n,e[n]+=1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,n){return e+n}))},a.countPositiveFeedbackPercentage=function(e){var n=Math.floor(a.state.good/e*100);return Number.isNaN(n)?0:n},a.formatValue=function(e){return"".concat(Number(e).toFixed(0))},a.state={good:0,neutral:0,bad:0},a}return Object(p.a)(t,[{key:"render",value:function(){var e=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage(e);return Object(C.jsx)(A,{children:Object(C.jsxs)(N,{title:"Please leave feedback",children:[Object(C.jsx)(T,{options:this.state,onLeaveFeedback:this.onFeedbackClick}),0!==e?Object(C.jsx)(G,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:n,formatValue:this.formatValue}):Object(C.jsx)(q,{message:"No feedback given"})]})})}}]),t}(f.a.Component),K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};x.a.render(Object(C.jsx)(f.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),K()}},[[26,1,2]]]);
//# sourceMappingURL=main.bd914207.chunk.js.map
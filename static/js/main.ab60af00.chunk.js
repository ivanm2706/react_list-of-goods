(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s(2),d=s.n(h),p=(s(14),s(15),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},e.sortAlphabetically=function(){e.setState({isReversed:!1,sortType:n.ALPHABET})},e.sortByLength=function(){e.setState({isReversed:!1,sortType:n.LENGTH})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.reset=function(){e.setState({isReversed:!1,sortType:n.NONE})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortType,r=function(e,t){var s=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(s){case n.ALPHABET:return e.localeCompare(t);case n.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),c}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button","is-info",{"is-light":s!==n.ALPHABET}),onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button","is-success",{"is-light":s!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button","is-warning",{"is-light":!t}),onClick:this.reverse,children:"Reverse"}),(s||t)&&Object(p.jsx)("button",{type:"button",className:"button is-danger",onClick:this.reset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),s}(b.PureComponent);c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ab60af00.chunk.js.map
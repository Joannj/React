(window["webpackJsonpreact-to-do"]=window["webpackJsonpreact-to-do"]||[]).push([[0],{10:function(t,e,o){t.exports=o(15)},15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(7),i=o.n(r),c=o(9),l=o(1),d=o(2),s=o(4),u=o(3),p=o(5),m=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,a.a.createElement("button",{style:h,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),e}(n.Component),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},f=m,b=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(f,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(n.Component);var g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y=function(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null,"TodoList"))},v=o(8),k=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title)},o.onChange=function(t){return o.setState(Object(v.a)({},t.target.name,t.target.value))},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"add Todo....",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.a.Component),j=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:1,title:"Take out the dirt",completed:!1},{id:2,title:"Take out kids",completed:!1},{id:3,title:"Meeting with client",completed:!1}]},o.markComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.delTodo=function(t){o.setState({todos:Object(c.a)(o.state.todos.filter((function(e){return e.id!==t})))})},o.AddTodo=function(t){console.log(t)},o}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"container"},a.a.createElement(y,null),a.a.createElement(k,{addTodo:this.AddTodo}),a.a.createElement(b,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7e058c66.chunk.js.map
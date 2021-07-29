/*! For license information please see app.js.LICENSE.txt */
  height: 60px;
  width: 1200px;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,ne=Xt.div`
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #f7f7f5;
  z-index: 8;
`,te=Xt.div`
  width: 120px;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 20px;

  font-weight: bold;

  & a {
    text-decoration: none;
    color: #000;
  }

  & a:hover {
    color: #000;
  }
`,ee=Xt.div`
  position: relative;
  width: 100%;
  height: 100%;
`,ae=Xt.div`
  height: 100%;
  display: flex;
  float: right;

  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  & ul > li {
    display: inline;
    margin-left: 15px;
  }

  & ul > li > a {
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: #939597;
  }

  & ul > li > a:hover {
    color: #0f4c81;
  }
`,re=Xt.div`
  color: ${n=>n.isActive?"#0f4c81":"#939597"};
  :hover {
    color: #0f4c81;
  }

  & i {
    color: #939597;
  }

  & i > span {
    font-size: 5px;
    position: absolute;
    top: 18px;
    right: -1px;
    z-index: 2;
    color: #0f4c81;
  }
`;var oe=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))||this).history=k(t.props),t}return o(e,n),e.prototype.render=function(){return t.createElement(G,{history:this.history,children:this.props.children})},e}(t.Component);t.Component;var ie=function(n,t){return"function"==typeof n?n(t):n},le=function(n,t){return"string"==typeof n?b(n,null,null,t):n},se=function(n){return n},Ae=t.forwardRef;void 0===Ae&&(Ae=se);var ce=Ae((function(n,e){var a=n.innerRef,r=n.navigate,o=n.onClick,i=S(n,["innerRef","navigate","onClick"]),l=i.target,A=s({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||l&&"_self"!==l||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return A.ref=se!==Ae&&e||a,t.createElement("a",A)})),pe=Ae((function(n,e){var a=n.component,r=void 0===a?ce:a,o=n.replace,i=n.to,l=n.innerRef,A=S(n,["component","replace","to","innerRef"]);return t.createElement(J.Consumer,null,(function(n){n||u(!1);var a=n.history,c=le(ie(i,n.location),n.location),p=c?a.createHref(c):"",d=s({},A,{href:p,navigate:function(){var t=ie(i,n.location);(o?a.replace:a.push)(t)}});return se!==Ae?d.ref=e||l:d.innerRef=l,t.createElement(r,d)}))})),de=function(n){return n},ue=t.forwardRef;void 0===ue&&(ue=de),ue((function(n,e){var a=n["aria-current"],r=void 0===a?"page":a,o=n.activeClassName,i=void 0===o?"active":o,l=n.activeStyle,A=n.className,c=n.exact,p=n.isActive,d=n.location,f=n.sensitive,m=n.strict,h=n.style,g=n.to,b=n.innerRef,E=S(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return t.createElement(J.Consumer,null,(function(n){n||u(!1);var a=d||n.location,o=le(ie(g,a),a),x=o.pathname,v=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),y=v?H(a.pathname,{path:v,exact:c,sensitive:f,strict:m}):null,C=!!(p?p(y,a):y),w=C?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(A,i):A,k=C?s({},h,{},l):h,B=s({"aria-current":C&&r||null,className:w,style:k,to:o},E);return de!==ue?B.ref=e||b:B.innerRef=b,t.createElement(pe,B)}))}));const fe=()=>{const{isLoggedIn:n,user:e}=fn((n=>n.auth)),a=window.location.pathname,r=cn();return t.createElement(ee,null,t.createElement(ae,null,n?t.createElement("ul",null,t.createElement("li",null,t.createElement(pe,{to:"/mybookrecord"},t.createElement(re,{isActive:a.includes("/mybookrecord")},"독서 기록"))),t.createElement("li",null,t.createElement(pe,{to:"/shareboard"},t.createElement(re,{isActive:a.includes("/shareboard")},"독서 공유"))),t.createElement("li",null,t.createElement(pe,{to:"/discussion"},t.createElement(re,{isActive:a.includes("/discussion")},"독서 토론"))),t.createElement("li",null,t.createElement(pe,{to:"/event/now"},t.createElement(re,{isActive:a.includes("/event")},"이벤트"))),t.createElement("li",{onClick:()=>{r((n=>{sessionStorage.removeItem("access_token"),sessionStorage.removeItem("refresh_token"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("user_grade"),n({type:En})}))}},t.createElement(pe,{to:"/"},"로그아웃")),"ADMIN"===e.user_grade?t.createElement("li",null,t.createElement(pe,{to:"/admin"},t.createElement(re,{isActive:a.includes("/admin")},"관리자"))):t.createElement(t.Fragment,null,t.createElement("li",null,t.createElement(pe,{to:`/mypage/profile/${e.user_id}`},t.createElement(re,{isActive:a.includes("/mypage")},t.createElement("i",{className:"fas fa-user-circle fa-lg"})))),t.createElement("li",null,t.createElement(pe,{to:"/note"},t.createElement(re,{isActive:a.includes("/note")},t.createElement("i",{className:"far fa-bell fa-lg"})))))):t.createElement("ul",null,t.createElement("li",null,t.createElement(pe,{to:"/mybookrecord"},t.createElement(re,{isActive:a.includes("/mybookrecord")},"독서 기록"))),t.createElement("li",null,t.createElement(pe,{to:"/shareboard"},t.createElement(re,{isActive:a.includes("/shareboard")},"독서 공유"))),t.createElement("li",null,t.createElement(pe,{to:"/discussion"},t.createElement(re,{isActive:a.includes("/discussion")},"독서 토론"))),t.createElement("li",null,t.createElement(pe,{to:"/event/now"},t.createElement(re,{isActive:a.includes("/event")},"이벤트"))),t.createElement("li",null,t.createElement(pe,{to:"/login"},t.createElement(re,{isActive:a.includes("/login")},"로그인"))))))},me=()=>t.createElement(ne,null,t.createElement($t,null,t.createElement(te,null,t.createElement(pe,{to:"/"},t.createElement("img",{alt:"",src:"/images/udodok.png",style:{width:"98px"}}))),t.createElement(fe,null))),he=Xt.footer`
  width: 100%;
  color: #4e4e4e;
  background-color: #f7f7f5;
  height: 300px;
  position: relative;
  transform: translateY(-100%);
`,ge=Xt.div`
  padding-top: 20px;
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,be=Xt.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 70px;
`,Ee=Xt.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  & i {
    margin-right: 20px;
  }
`,xe=Xt.ul`
  color: black;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  align-items: center;
`,ve=Xt.li`
  list-style: none;
  flex: 0 0 60%;
  flex-wrap: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,ye=Xt.div`
  font-size: 16px;
  font-weight: bold;
`,Ce=Xt.div`
  margin-top: 20px;
  display: block;
`,we=Xt.div`
  font-size: 11px;
  margin-top: 6px;
`,ke=()=>t.createElement(he,null,t.createElement(ge,null,t.createElement(be,null,t.createElement(xe,null,t.createElement(ve,null,t.createElement("a",null," 자주 묻는 질문 ")),t.createElement(ve,null,t.createElement("a",null," 문의하기 ")),t.createElement(ve,null,t.createElement("a",null," 공지사항 ")),t.createElement(ve,null,t.createElement("a",null," 이용 약관 "))),t.createElement(Ee,null,t.createElement("i",{className:"fab fa-facebook-square fa-2x"}),t.createElement("i",{className:"fab fa-instagram fa-2x"}),t.createElement("i",{className:"fab fa-twitter fa-2x"}),t.createElement("i",{className:"fab fa-youtube fa-2x"}))),t.createElement(ye,null,"주식회사 Go-Getter"),t.createElement(Ce,null,t.createElement(we,null,"팀장: 변현우 | 전화번호: 010-1234-5678"),t.createElement(we,null,"주소: 대한민국 서울특별시 강남구 000-000, 센트로폴리스 A동 20층 우편번호 123456"),t.createElement(we,null,"사업자등록번호: 123-45-678910"),t.createElement(we,null,"클라우드 호스팅: Amazon Web Services Inc.")))),Be=()=>t.createElement("div",{style:{height:"100%"}},t.createElement("div",null,t.createElement(me,null),t.createElement("div",null,"메인 화면입니다.")),t.createElement(ke,null)),De=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`,Ie=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,ze=Xt.form`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,Fe=Xt.div`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ced4da;

  & span > a {
    color: #939597;
    font-size: 14px;
  }
`,_e=Xt.div`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  & h2 {
    width: 100%;
    margin: 40px 0;
    margin-bottom: 60px;
    font-size: 30px;
  }

  & span > a {
    color: #0f4c81;
    font-size: 14px;
    float: right;
  }
`,Se=Xt.div`
  margin-top: 25px;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,Oe=Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Ne=Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #0f4c81;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Me=Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4167b2;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(65, 103, 178, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`,Je=Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #f13f31;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(241, 63, 49, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`,Ge=n=>{const[e,a]=(0,t.useState)(n);return[e,(0,t.useCallback)((n=>{a(n.target.value)}),[]),a]},Ue=Y((n=>{const[e,a]=Ge(""),[r,o]=Ge(""),[i,l]=(0,t.useState)(!1),{isLoggedIn:s}=fn((n=>n.auth)),{message:A}=fn((n=>n.message)),c=cn(),p=(0,t.useCallback)((n=>{n.preventDefault();const t=wn(r);c(((n,t)=>e=>((n,t)=>yn().post("/api/signin",{email:n,password:t},{withCredentials:!0}).then((n=>(n.data.data&&(sessionStorage.setItem("access_token",JSON.stringify(n.data.data.access_token)),sessionStorage.setItem("refresh_token",JSON.stringify(n.data.data.refresh_token)),sessionStorage.setItem("user_id",JSON.stringify(n.data.data.user_id)),sessionStorage.setItem("user_grade",JSON.stringify(n.data.data.user_grade))),n.data))))(n,t).then((n=>("아이디불일치"===n.message?e({type:bn}):e({type:gn,payload:{user:n.data}}),Promise.resolve())),(n=>{const t=n.response&&n.response.data&&n.response.data.message||n.message||n.toString();return e({type:bn}),e({type:xn,payload:t}),Promise.reject()})))(e,t)).then((()=>{})).catch((n=>{console.dir(n)}))}),[e,r]);return t.createElement("div",{id:"container",style:{height:"100%"}},t.createElement(Ie,null,t.createElement(me,null),t.createElement(De,null,t.createElement(_e,null,t.createElement("h2",null,"로그인"),t.createElement(ze,{onSubmit:p},t.createElement("span",null,t.createElement(pe,{to:"/signup"},"우도독 가입하기")),t.createElement("div",{id:"email"},t.createElement(Oe,{type:"email",id:"email",name:"email",placeholder:"이메일",value:e,onChange:a})),t.createElement("div",{id:"password"},t.createElement(Oe,{type:"password",id:"password",name:"password",placeholder:"비밀번호",value:r,onChange:o})),t.createElement(Ne,{type:"submit"},"로그인"))),t.createElement(Fe,null,t.createElement("span",null,t.createElement(pe,{to:"/"},"아이디 찾기")," | ",t.createElement(pe,{to:"/"},"비밀번호 찾기"))),t.createElement(Se,null,t.createElement(Me,null,t.createElement("i",{className:"fab fa-facebook-square"})," 페이스북으로 시작하기"),t.createElement(Je,null,t.createElement("i",{className:"fab fa-google"})," 구글로 시작하기")))),t.createElement(ke,null))})),Re=Xt.div`
  width: 1200px;
  height: 100vh - 180px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`,je=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,Te=(Xt.form`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,Xt.div`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ced4da;

  & span > a {
    color: #939597;
    font-size: 14px;
  }
`,Xt.div`
  width: 300px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  position: relative;

  & h2 {
    width: 100%;
    margin: 40px 0;
    margin-bottom: 60px;
    font-size: 30px;
  }

  & span {
    font-size: 14px;
  }

  & span > a {
    color: #0f4c81;
    font-size: 14px;
  }
`),Pe=Xt.div`
  text-align: right;
  display: flex;
  flex-direction: column;
`,qe=Xt.div`
  margin-top: 25px;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,Le=(Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #0f4c81;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`),He=Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4167b2;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(65, 103, 178, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`,We=Xt.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #f13f31;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(241, 63, 49, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`,Ke=()=>t.createElement("div",{id:"container",style:{height:"100%"}},t.createElement(je,null,t.createElement(me,null),t.createElement(Re,null,t.createElement(Te,null,t.createElement("h2",null,"회원가입"),t.createElement(qe,null,t.createElement(He,null,t.createElement("i",{className:"fab fa-facebook-square"})," 페이스북으로 회원가입"),t.createElement(We,null,t.createElement("i",{className:"fab fa-google"})," 구글로 회원가입")),t.createElement(pe,{to:"/signup2"},t.createElement(Le,null,"이메일로 회원가입")),t.createElement(Pe,null,t.createElement("span",null,"이미 우도독 회원이신가요?"),t.createElement("span",null,t.createElement(pe,{to:"/login"},"로그인하기")))))),t.createElement(ke,null)),Ye=Xt.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 20px;
  width: 500px;
`,Ve=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,Qe=Xt.div`
  font-size: 30px;
  font-weight: bold;
`,Ze=Xt.form`
  margin-top: 40px;
`,Xe=Xt.div`
  margin-bottom: 20px;
`,$e=Xt.label`
  font-size: 16px;
  margin-bottom: 0px;

  & span {
    color: blue;
  }
`,na=Xt.div`
  width: 460px;
`,ta=Xt.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 353px;
  height: 45px;
  margin-top: 8px;
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,ea=Xt.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 460px;
  margin-top: 8px;
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,aa=Xt.div`
  font-size: 13px;
  color: #939597;
`,ra=Xt.div`
  margin-top: 50px;
`,oa=Xt.span`
  font-size: 12px;
  padding-left: 5px;

  & a {
    color: #1778b5;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
`,ia=Xt.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
  font-size: 12px;
`,la=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 100px;
  height: 38px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`,sa=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 38px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 8px;
  pointer-events: none;
`,Aa=Xt.button`
  font-size: 16px;
  color: white;
  background-color: #0f4c81;
  border: 0px;
  border-radius: 3px;
  width: 460px;
  height: 47px;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
`,ca=Xt.div`
  display: ${n=>n.signUpModal?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`,pa=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 225px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`,da=Xt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,ua=Xt.div`
  font-size: 18px;
`,fa=Xt.div`
  padding-top: 5px;
  font-size: 12px;
  color: #c4c4c4;
`,ma=Xt.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${n=>n.signUpModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,ha=Xt.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 225px;
  margin-top: 8px;
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`,ga=({authModalOpen:n,setAuthModalOpen:e,setEmailAuthCheck:a,email:r})=>{const[o,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(""),A=(0,t.useCallback)((()=>{e(!1),i(!1)}),[]),c=(0,t.useCallback)((n=>{i(!1),yn().get(`/api/email-confirm?email=${r}`,{withCredentials:!0}).then((n=>{"이메일중복"===n.data.message?alert("이미 가입된 이메일입니다."):i(!o)})).catch((n=>{console.dir(n)}))}),[r]),p=(0,t.useCallback)((n=>{const{value:t}=n.target,e=t.replace(/[^0-9]/g,"");s(e)}),[]),d=(0,t.useCallback)((n=>{n.preventDefault(),a(!1),yn().get(`/api/issuance-confirm?number=${l}`,{withCredentials:!0}).then((n=>{"일치"===n.data.message?(a(!0),A()):alert("인증 번호가 일치하지 않습니다.")})).catch((n=>{console.dir(n)}))}),[l]);return t.createElement(t.Fragment,null,t.createElement(ca,{signUpModal:n,onClick:A}),t.createElement(ma,{signUpModal:n},!o&&t.createElement(da,null,t.createElement(ua,null,"입력하신 이메일로 인증을 진행해 주세요."),t.createElement(fa,null,"*수신함에서 인증메일을 찾을 수 없을 경우 스팸함을 조회하세요."),t.createElement("br",null),t.createElement(pa,{onClick:c},"인증 메일 발송")),o&&t.createElement("form",null,t.createElement(da,null,t.createElement(ua,null,"이메일을 확인해주세요."),t.createElement(fa,null,"*수신함에서 인증메일을 찾을 수 없을 경우 스팸함을 조회하세요."),t.createElement(ha,{name:"text",id:"text",type:"text",placeholder:"인증번호를 입력해주세요.",onChange:p,value:l}),t.createElement(pa,{onClick:d},"인증 번호 확인")))))},ba=Xt.div`
  display: ${n=>n.signUpModal?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`,Ea=Xt.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,xa=(Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #0f4c81;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
`,Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`),va=Xt.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`,ya=Xt.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ced4da;
`,Ca=Xt.textarea`
  padding: 10px;
  font-size: 12px;
  color: #4e4e4e;
  width: 460px;
  height: 200px;
  border: 1px solid #ced4da;
  resize: none;

  &:focus {
    outline: none;
  }
`,wa=Xt.div`
  width: 500px;
  height: 350px;
  background-color: white;
  display: ${n=>n.signUpModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,ka=n=>{const e=n.check,a=[{mainText:"이용약관, 개인정보 수집 및 이용에 동의합니다.(필수)",subText:"수집하는 개인정보의 항목 및 수집방법\n  우리도 독서 (이하 '우도독' 이라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’라 함), 개인정보보호법 등 모임이 준수하여야 할 국내 개인정보 보호 법령을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.\n  \n  본 개인정보처리방침은  'Go-Getter'가 운영하는 우도독 관련 제반 서비스(이하 '프로젝트 모임'이라 함)에 적용되며 다음과 같은 내용을 담고 있습니다.\n  \n  이 개인정보처리방침에서 사용하는 용어의 의미는 관련 법령 및 우도독의 이용약관에서 정한 바에 따르며, 그 밖의 사항은 일반적인 상관례에 따릅니다.\n  \n  \n  가. 수집하는 개인정보의 항목\n  우도독은 '커뮤니티 및 기타' 서비스 이용을 위해 회원 가입을 할 경우, 서비스 제공에 필요한 개인 정보를 회원가입을 통해 수집합니다.\n  \n  1. ‘이름, 이메일, 닉네임, 휴대전화 번호’가 필수항목으로 수집됩니다.\n  \n  나. 개인정보의 수집방법\n  \n  우도독은 다음과 같은 방법으로 개인정보를 수집합니다.\n  \n  1) 본 회원가입을 통해 귀하의 개인정보를 수집합니다.\n  \n  1. 개인정보의 수집 및 이용 목적\n  \n  우도독은 각종 홈페이지 내의 회원 관리, 서비스 제공과 개발 및 개선 등의 목적으로만 개인정보를 이용합니다.\n  \n    1) 회원 식별을 위해 이용합니다. \n    2) 법령 및 우도독 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여        \n      서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 약관 개정 등의 고지사항 \n      전달, 분쟁조정을 위한 기록 보존, 회원 문의 처리 등 회원 보호 및  서비스 운영을 위해 \n      이용합니다.\n  \n  2. 개인정보의 제공 및 위탁\n  \n  우도독은 회원의 사전 동의 없이 개인정보를 제3자 혹은 외부에 제공하지 않습니다. \n  \n  단, 법령에 따라 필요할 경우 회원에게 해당 내용을 고지합니다.\n  \n  가. 개인정보의 제3자 제공\n      1) 회원이 사전에 동의한 경우\n      2) 법률에 특별한 규정이 있거나, 수사 목적으로 법률에 정해진 절차와 방법에 따라 수사기관의 \n        요구가 있는 경우\n  \n  3. 개인정보 보유 및 이용기간\n  \n  우도독는 원칙적으로 회원의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.\n  \n  단, 회원에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.\n  \n  1) 내부 방침에 의한 보관\n    - 부정이용기록은 부정 이용 방지를 위해 1년간 보관됩니다.\n  \n  2) 관련 법령에 의한 보관\n    - 계약 또는 청약철회 등에 관한 기록 보유 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률)\n    - 대금결제 및 재화 등의 공급에 관한 기록 보유 : 5년 \n      (전자상거래 등에서의 소비자보호에 관한 법률)\n    - 소비자 불만 또는 분쟁처리에 관한 기록 보유 : 3년 \n      (전자상거래 등에서의 소비자보호에 관한 법률)\n    - 방문에 관한 기록 보유 : 3개월 (통신비밀보호법)\n  \n  4. 회원의 권리\n  \n  가. 회원은 언제든지 '마이페이지'의 회원 수정을 통해 자신의 개인정보를 수정할 수 있습니다.\n  나. 회원이 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 해당 개인정보를      \n      이용 또는 제공하지 않습니다.\n      또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 \n      통지하여 정정이 이루어지도록 하겠습니다.\n  \n  5. 회원의 권리와 의무\n  \n  회원은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 회원의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.\n  \n  회원이 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 회원 자신에게 있습니다. 회원은 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방하여야 할 의무가 있습니다.\n  \n  회원이 위 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 관련 법률에 의해 처벌받을 수 있습니다.\n  \n  6. 기타\n  \n  우도독 내에 링크되어 있는 웹사이트 등 타 서비스들이 개인정보를 수집하는 행위에 대해서는 본 우도독 개인정보처리방침이 적용되지 않음을 알려드립니다.\n  \n  우도독에 회원가입 시 제출해 주신 개인정보 및 모든 내용은 우도독 관리자 혹은 관리자가 허가한 사람에 한해 관리 및 감독 / 열람 할 수 있습니다.\n  \n  7. 고지의 의무\n  \n  현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 시행일 최소 7일전부터 본 홈페이지 공지사항에 공지할 것입니다. 다만, 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하도록 하며 필요 시 이용자의 동의를 다시 받을 수도 있습니다.\n  \n  공고일자 : 2020. 05. 29.\n  \n  시행일자 : 2020. 06. 05."},{mainText:"마케팅 동의",subText:"마케팅 동의 내용"}];return t.createElement(t.Fragment,null,t.createElement(ba,{signUpModal:n.serviceModalOpen}),t.createElement(wa,{signUpModal:n.serviceModalOpen},t.createElement(va,null,t.createElement(ya,null,a[e].mainText),t.createElement(Ca,{value:a[e].subText}),t.createElement(Ea,null,t.createElement(xa,{onClick:()=>{n.setServiceModalOpen(!1)}},"닫기")))))},Ba=()=>{const n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,e=/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{4,16}$/,[a,r]=(0,t.useState)(!1),[o,i]=Ge(""),[l,s]=Ge(""),[A,c]=Ge(""),[p,d]=(0,t.useState)(""),[u,f]=(0,t.useState)(""),[m,h]=(0,t.useState)(""),[g,b]=(0,t.useState)(0),[E,x]=(0,t.useState)(!1),[v,y]=Ge(!1),[C,w]=(0,t.useState)(!1),[k,B]=(0,t.useState)(!1),[D,I]=(0,t.useState)(!1),{message:z}=fn((n=>n.message)),F=cn(),_=(0,t.useCallback)((n=>{d(n.target.value),I(n.target.value!==u)}),[u]),S=(0,t.useCallback)((n=>{f(n.target.value),I(n.target.value!==p)}),[p]),O=(0,t.useCallback)((n=>{const{value:t}=n.target,e=t.replace(/[^0-9]/g,"");h(e)}),[]),N=(0,t.useCallback)((n=>{n.preventDefault(),w(!0)}),[o]),M=(0,t.useCallback)((n=>{n.preventDefault(),B(!0);const t=n.target.id;b("check1"===t?0:1)}),[]),J=(0,t.useCallback)((t=>{t.preventDefault(),E?n.test(p)?e.test(A)?l.length&&l.trim().length?m.length&&m.trim().length?v?F(((n,t,e,a,r)=>o=>((n,t,e,a,r)=>{const o=wn(a);return yn().post("/api/signup",{email:n,name:t,nick_name:e,password:o,phone_number:r},{withCredentials:!0})})(n,t,e,a,r).then((n=>(o({type:mn}),o({type:xn,payload:n.data.message}),Promise.resolve())),(n=>{const t=n.response&&n.response.data&&n.response.data.message||n.message||n.toString();return o({type:hn}),o({type:xn,payload:t}),Promise.reject()})))(o,l,A,p,m)).then((()=>{r(!0),alert("회원 가입 성공")})).catch((n=>{console.dir(n)})):alert("이용 약관 동의하세요"):alert("휴대폰 번호 오류"):alert("이름 오류"):alert("닉네임 오류"):alert("비밀번호 오류"):alert("이메일 인증을 먼저 해주세요")}),[o,p,l,m,A,n]);return a?t.createElement(P,{to:"/login"}):t.createElement("div",{id:"container",style:{height:"100%"}},t.createElement(ga,{authModalOpen:C,setAuthModalOpen:w,setEmailAuthCheck:x,email:o}),t.createElement(ka,{serviceModalOpen:k,setServiceModalOpen:B,check:g}),t.createElement(Ve,null,t.createElement(me,null),t.createElement(Ye,null,t.createElement(Qe,null,"회원가입"),t.createElement(Ze,{onSubmit:J},t.createElement(Xe,null,t.createElement(na,null,t.createElement($e,null,"이메일",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ta,{type:"email",id:"email",name:"email",placeholder:"이메일을 입력해주세요.",onChange:i,value:o}),!E&&t.createElement(la,{onClick:N},"인증받기"),E&&t.createElement(sa,null,"인증 완료"))),t.createElement(Xe,null,t.createElement($e,null,"비밀번호",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ea,{type:"password",id:"password",name:"password",placeholder:"비밀번호를 입력해주세요.",onChange:_,value:p}),t.createElement(aa,null,"비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.")),t.createElement(Xe,null,t.createElement($e,null,"비밀번호 확인",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ea,{type:"password",id:"password-check",name:"password-check",placeholder:"비밀번호를 다시 입력해주세요.",onChange:S,value:u}),D&&t.createElement(ia,null,"비밀번호가 일치하지 않습니다.")),t.createElement(Xe,null,t.createElement($e,null,"이름",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ea,{type:"text",id:"name",name:"name",placeholder:"이름을 입력해주세요.",onChange:s,value:l}),!l&&t.createElement(ia,null,"이름을 입력해주세요.")),t.createElement(Xe,null,t.createElement($e,null,"휴대폰 번호",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ea,{type:"text",id:"phone-number",name:"phone-number",placeholder:"-없이 번호를 입력해주세요.",onChange:O,value:m}),!m&&t.createElement(ia,null,"휴대폰 번호를 입력해주세요.")),t.createElement(Xe,null,t.createElement($e,null,"닉네임",t.createElement("span",null," *")),t.createElement("br",null),t.createElement(ea,{type:"text",id:"nick-name",name:"nick-name",placeholder:"닉네임을 입력해주세요.",onChange:c,value:A}),t.createElement(aa,null,"닉네임은 4~16자로 입력해주세요."),!A&&t.createElement(ia,null,"닉네임을 입력해주세요.")),t.createElement(ra,null,t.createElement("div",null,t.createElement("input",{type:"checkbox",id:"terms",name:"terms",value:v,onClick:y}),t.createElement(oa,null,"우도독의"," ",t.createElement("a",{id:"check1",onClick:M},"이용약관 및 개인정보 처리 방침"),"(필수)에 동의합니다.",t.createElement("br",null)),t.createElement("input",{type:"checkbox"}),t.createElement(oa,null,t.createElement("a",{id:"check2",onClick:M},"마케팅 정보 수신"),"(선택)에 동의합니다."))),t.createElement(Aa,{type:"submit"},"회원가입")))),t.createElement(ke,null))},Da=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`,Ia=Xt.h2`
  padding: 50px 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
  padding-bottom: 30px;
`,za=Xt.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`,Fa=Xt.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`,_a=Xt.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`,Sa=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Oa=Xt.div`
  width: 250px;
  margin: 0px 10px;
  position: relative;
`,Na=Xt.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 5px;
`,Ma=Xt.div``,Ja=Xt.p`
  margin: 0px;
  font-size: 16px;
`,Ga=Xt.p`
  margin: 0px;
  font-size: 16px;
`,Ua=Xt.p`
  margin: 0px;
`,Ra=Xt.p`
  /* padding-top: 5px; */
  margin-bottom: 5px;
  color: #939597;
  font-size: 12px;
`;Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 80px;
  height: 38px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`;var ja=e(4949);function Ta(n){return(Ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var Pa=e(4184),qa=e.n(Pa);const La=(0,t.createContext)({});function Ha(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Wa(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function Ka(n){return(Ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function Ya(n,t){return!t||"object"!==Ta(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}const Va={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var Qa={lang:s({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),timePickerLocale:s({},Va)},Za="${label} is not a valid ${type}";const Xa={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},DatePicker:Qa,TimePicker:Va,Calendar:Qa,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Za,method:Za,array:Za,object:Za,number:Za,date:Za,boolean:Za,integer:Za,float:Za,regexp:Za,email:Za,url:Za,hex:Za},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}},$a=(0,t.createContext)(void 0);var nr=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}(l,n);var t,e,a,o,i=(a=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=Ka(a);if(o){var e=Ka(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return Ya(this,n)});function l(){return Ha(this,l),i.apply(this,arguments)}return t=l,(e=[{key:"getLocale",value:function(){var n=this.props,t=n.componentName,e=n.defaultLocale||Xa[null!=t?t:"global"],a=this.context,r=t&&a?a[t]:{};return s(s({},e instanceof Function?e():e),r||{})}},{key:"getLocaleCode",value:function(){var n=this.context,t=n&&n.locale;return n&&n.exist&&!t?Xa.locale:t}},{key:"render",value:function(){return this.props.children(this.getLocale(),this.getLocaleCode(),this.context)}}])&&Wa(t.prototype,e),l}(t.Component);nr.defaultProps={componentName:"global"},nr.contextType=$a;const tr=function(){var n=(0,t.useContext(lr).getPrefixCls)("empty-img-default");return t.createElement("svg",{className:n,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(24 31.67)"},t.createElement("ellipse",{className:"".concat(n,"-ellipse"),cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t.createElement("path",{className:"".concat(n,"-path-1"),d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),t.createElement("path",{className:"".concat(n,"-path-2"),d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",transform:"translate(13.56)"}),t.createElement("path",{className:"".concat(n,"-path-3"),d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),t.createElement("path",{className:"".concat(n,"-path-4"),d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})),t.createElement("path",{className:"".concat(n,"-path-5"),d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),t.createElement("g",{className:"".concat(n,"-g"),transform:"translate(149.65 15.383)"},t.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))},er=function(){var n=(0,t.useContext(lr).getPrefixCls)("empty-img-simple");return t.createElement("svg",{className:n,width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},t.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},t.createElement("ellipse",{className:"".concat(n,"-ellipse"),cx:"32",cy:"33",rx:"32",ry:"7"}),t.createElement("g",{className:"".concat(n,"-g"),fillRule:"nonzero"},t.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),t.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"".concat(n,"-path")}))))};var ar=t.createElement(tr,null),rr=t.createElement(er,null),or=function(n){var e=n.className,a=n.prefixCls,r=n.image,o=void 0===r?ar:r,i=n.description,l=n.children,A=n.imageStyle,c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(e[a[r]]=n[a[r]])}return e}(n,["className","prefixCls","image","description","children","imageStyle"]),p=t.useContext(lr),d=p.getPrefixCls,u=p.direction;return t.createElement(nr,{componentName:"Empty"},(function(n){var r,p,f=d("empty",a),m=void 0!==i?i:n.description,h="string"==typeof m?m:"empty";return p="string"==typeof o?t.createElement("img",{alt:h,src:o}):o,t.createElement("div",s({className:qa()(f,(r={},(0,ja.Z)(r,"".concat(f,"-normal"),o===rr),(0,ja.Z)(r,"".concat(f,"-rtl"),"rtl"===u),r),e)},c),t.createElement("div",{className:"".concat(f,"-image"),style:A},p),m&&t.createElement("div",{className:"".concat(f,"-description")},m),l&&t.createElement("div",{className:"".concat(f,"-footer")},l))}))};or.PRESENTED_IMAGE_DEFAULT=ar,or.PRESENTED_IMAGE_SIMPLE=rr;const ir=or;var lr=t.createContext({getPrefixCls:function(n,t){return t||(n?"ant-".concat(n):"ant")},renderEmpty:function(n){return t.createElement(sr,null,(function(e){var a=(0,e.getPrefixCls)("empty");switch(n){case"Table":case"List":return t.createElement(ir,{image:ir.PRESENTED_IMAGE_SIMPLE});case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return t.createElement(ir,{image:ir.PRESENTED_IMAGE_SIMPLE,className:"".concat(a,"-small")});default:return t.createElement(ir,null)}}))}}),sr=lr.Consumer,Ar=["xs","sm","md","lg","xl","xxl"],cr=t.forwardRef((function(n,e){var a,r=t.useContext(lr),o=r.getPrefixCls,i=r.direction,l=t.useContext(La),A=l.gutter,c=l.wrap,p=l.supportFlexGap,d=n.prefixCls,u=n.span,f=n.order,m=n.offset,h=n.push,g=n.pull,b=n.className,E=n.children,x=n.flex,v=n.style,y=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(e[a[r]]=n[a[r]])}return e}(n,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=o("col",d),w={};Ar.forEach((function(t){var e,a={},r=n[t];"number"==typeof r?a.span=r:"object"===Ta(r)&&(a=r||{}),delete y[t],w=s(s({},w),(e={},(0,ja.Z)(e,"".concat(C,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,ja.Z)(e,"".concat(C,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,ja.Z)(e,"".concat(C,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,ja.Z)(e,"".concat(C,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,ja.Z)(e,"".concat(C,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,ja.Z)(e,"".concat(C,"-rtl"),"rtl"===i),e))}));var k=qa()(C,(a={},(0,ja.Z)(a,"".concat(C,"-").concat(u),void 0!==u),(0,ja.Z)(a,"".concat(C,"-order-").concat(f),f),(0,ja.Z)(a,"".concat(C,"-offset-").concat(m),m),(0,ja.Z)(a,"".concat(C,"-push-").concat(h),h),(0,ja.Z)(a,"".concat(C,"-pull-").concat(g),g),a),b,w),B={};if(A&&A[0]>0){var D=A[0]/2;B.paddingLeft=D,B.paddingRight=D}if(A&&A[1]>0&&!p){var I=A[1]/2;B.paddingTop=I,B.paddingBottom=I}return x&&(B.flex=function(n){return"number"==typeof n?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}(x),"auto"!==x||!1!==c||B.minWidth||(B.minWidth=0)),t.createElement("div",s({},y,{style:s(s({},B),v),className:k,ref:e}),E)}));cr.displayName="Col";const pr=cr;var dr=e(3379),ur=e.n(dr),fr=e(3989);ur()(fr.Z,{insert:"head",singleton:!1}),fr.Z.locals;const mr=n=>{let e=n.title,a=n.bookTitle;e.length>13&&(e=e.slice(0,10)+"..."),a.length>13&&(a=a.slice(0,10)+"...");const r=n.share;return t.createElement(pr,{span:6},r?t.createElement(Oa,null,t.createElement(pe,{to:`/shareboard/detail/${n.boardId}`,style:{textDecoration:"none",color:"#000",hover:"none"}},t.createElement("div",{className:"card",style:{borderRadius:"5px"}},t.createElement("img",{style:{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",maxHeight:"250px"},src:"images/placeholder.png",alt:""}),t.createElement("div",{className:"card-body",style:{textAlign:"right"}},t.createElement(Na,null,e),t.createElement(Ma,null,t.createElement(Ja,null,a),t.createElement(Ga,null,n.writerNickName),t.createElement(Ua,null,n.createdBoard),t.createElement(Ra,null,n.bookTag)))))):t.createElement(Oa,null,t.createElement(pe,{to:`/mybookrecord/detail/${n.boardId}`,style:{textDecoration:"none",color:"#000",hover:"none"}},t.createElement("div",{className:"card",style:{borderRadius:"5px"}},t.createElement("img",{style:{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",maxHeight:"250px"},src:"images/placeholder.png",alt:""}),t.createElement("div",{className:"card-body",style:{textAlign:"right"}},t.createElement(Na,null,n.title.slice(0,10)+"..."),t.createElement(Ma,null,t.createElement(Ja,null,n.bookTitle?n.bookTitle:"책 제목 없음"),t.createElement(Ua,null,n.createdBoard),t.createElement(Ra,null,n.bookTag?n.bookTag:"")))))))};function hr(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function gr(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],a=!0,r=!1,o=void 0;try{for(var i,l=n[Symbol.iterator]();!(a=(i=l.next()).done)&&(e.push(i.value),!t||e.length!==t);a=!0);}catch(n){r=!0,o=n}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return e}}(n,t)||function(n,t){if(n){if("string"==typeof n)return hr(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?hr(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var br=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t},Er=["xxl","xl","lg","md","sm","xs"],xr={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},vr=new Map,yr=-1,Cr={};const wr={matchHandlers:{},dispatch:function(n){return Cr=n,vr.forEach((function(n){return n(Cr)})),vr.size>=1},subscribe:function(n){return vr.size||this.register(),yr+=1,vr.set(yr,n),n(Cr),yr},unsubscribe:function(n){vr.delete(n),vr.size||this.unregister()},unregister:function(){var n=this;Object.keys(xr).forEach((function(t){var e=xr[t],a=n.matchHandlers[e];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),vr.clear()},register:function(){var n=this;Object.keys(xr).forEach((function(t){var e=xr[t],a=function(e){var a=e.matches;n.dispatch(s(s({},Cr),(0,ja.Z)({},t,a)))},r=window.matchMedia(e);r.addListener(a),n.matchHandlers[e]={mql:r,listener:a},a(r)}))}};var kr;const Br=function(){var n=gr(t.useState(!1),2),e=n[0],a=n[1];return t.useEffect((function(){a(function(){if(!("undefined"!=typeof window&&window.document&&window.document.createElement&&window.document.documentElement))return!1;if(void 0!==kr)return kr;var n=document.createElement("div");return n.style.display="flex",n.style.flexDirection="column",n.style.rowGap="1px",n.appendChild(document.createElement("div")),n.appendChild(document.createElement("div")),document.body.appendChild(n),kr=1===n.scrollHeight,document.body.removeChild(n),kr}())}),[]),e};var Dr=(br("top","middle","bottom","stretch"),br("start","end","center","space-around","space-between"),t.forwardRef((function(n,e){var a,r=n.prefixCls,o=n.justify,i=n.align,l=n.className,A=n.style,c=n.children,p=n.gutter,d=void 0===p?0:p,u=n.wrap,f=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(e[a[r]]=n[a[r]])}return e}(n,["prefixCls","justify","align","className","style","children","gutter","wrap"]),m=t.useContext(lr),h=m.getPrefixCls,g=m.direction,b=gr(t.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),2),E=b[0],x=b[1],v=Br(),y=t.useRef(d);t.useEffect((function(){var n=wr.subscribe((function(n){var t=y.current||0;(!Array.isArray(t)&&"object"===Ta(t)||Array.isArray(t)&&("object"===Ta(t[0])||"object"===Ta(t[1])))&&x(n)}));return function(){return wr.unsubscribe(n)}}),[]);var C,w=h("row",r),k=(C=[0,0],(Array.isArray(d)?d:[d,0]).forEach((function(n,t){if("object"===Ta(n))for(var e=0;e<Er.length;e++){var a=Er[e];if(E[a]&&void 0!==n[a]){C[t]=n[a];break}}else C[t]=n||0})),C),B=qa()(w,(a={},(0,ja.Z)(a,"".concat(w,"-no-wrap"),!1===u),(0,ja.Z)(a,"".concat(w,"-").concat(o),o),(0,ja.Z)(a,"".concat(w,"-").concat(i),i),(0,ja.Z)(a,"".concat(w,"-rtl"),"rtl"===g),a),l),D={},I=k[0]>0?k[0]/-2:void 0,z=k[1]>0?k[1]/-2:void 0;if(I&&(D.marginLeft=I,D.marginRight=I),v){var F=gr(k,2);D.rowGap=F[1]}else z&&(D.marginTop=z,D.marginBottom=z);var _=t.useMemo((function(){return{gutter:k,wrap:u,supportFlexGap:v}}),[k,u,v]);return t.createElement(La.Provider,{value:_},t.createElement("div",s({},f,{className:B,style:s(s({},D),A),ref:e}),c))})));Dr.displayName="Row";const Ir=Dr;var zr=e(6693);ur()(zr.Z,{insert:"head",singleton:!1}),zr.Z.locals;var Fr=e(8447);const _r=({bookBoard:n=null,discussion:e=null,totalElements:a,currentPage:r,handlePageChange:o})=>t.createElement("div",null,n?t.createElement(Fr.Z,{activePage:r+1,itemsCountPerPage:8,totalItemsCount:a,pageRangeDisplayed:5,prevPageText:"<",nextPageText:">",onChange:o}):e?t.createElement(Fr.Z,{activePage:r+1,itemsCountPerPage:7,totalItemsCount:a,pageRangeDisplayed:10,prevPageText:"<",nextPageText:">",onChange:o}):t.createElement(Fr.Z,{activePage:r+1,itemsCountPerPage:20,totalItemsCount:a,pageRangeDisplayed:10,prevPageText:"<",nextPageText:">",onChange:o})),Sr=JSON.parse(sessionStorage.getItem("refresh_token")),Or=yn().create({baseURL:"/api",timeout:1e3});Or.interceptors.request.use((n=>(n.headers["Content-Type"]="application/json; charset=utf-8",n.headers.Authorization="Bearer "+Sr,n)),(n=>(console.dir(n),Promise.reject(n)))),Or.interceptors.response.use((n=>n.data),(n=>(console.dir(n),Promise.reject(n))));const Nr=Or,Mr=JSON.parse(sessionStorage.getItem("access_token")),Jr=yn().create({baseURL:"/api",withCredentials:!0});Jr.interceptors.request.use((n=>(n.headers["Content-Type"]="application/json; charset=utf-8",n.headers.Authorization="Bearer "+Mr,n)),(n=>(console.dir(n),Promise.reject(n)))),Jr.interceptors.response.use((n=>n),(async n=>{console.dir(n);const t=n.config;let e;if(void 0!==n.response&&(e=n.response.data.message),"엑세스토큰 불일치"===e){const{data:n}=await Nr({url:"/token",method:"get"});sessionStorage.setItem("access_token",JSON.stringify(n.access_token));const e=n.access_token;return t.headers.Authorization="Bearer "+e,yn()(t)}return Promise.reject(n)}));const Gr=Jr,Ur=Y((n=>{const e=fn((n=>n.auth)).user.user_id,[a,r]=(0,t.useState)(0),[o,i]=(0,t.useState)(0),[l,s]=(0,t.useState)([]);(0,t.useEffect)((()=>{A(a)}),[]);const A=async n=>{let t={page:n-1};const a=await Gr({url:`/bkusers/book-reports/${e}`,method:"get",data:t});"조회성공"===a.data.message&&(s(a.data.data.content),i(a.data.pagination.total_elements),r(a.data.pagination.current_page))},c=(0,t.useCallback)((()=>{n.history.push("/mybookrecord/write")}),[]);return t.createElement("div",{style:{height:"100%"}},t.createElement(Da,null,t.createElement(me,null),t.createElement(Ia,null,"기록 게시판"),t.createElement(za,null,t.createElement("h4",null,"나의 게시물"),t.createElement(_a,null,t.createElement(Ir,{gutter:[16,32]},l&&l.map(((n,e)=>t.createElement(t.Fragment,{key:e},t.createElement(mr,{title:n.title,createdBoard:n.create_at,boardId:n.book_report_id,bookTitle:n.book_name,bookTag:n.book_report_tag}))))))),t.createElement("div",{style:{marginBottom:"50px"}},t.createElement(Sa,{onClick:c},"작성하기")),t.createElement("div",{style:{marginLeft:"150px"}},t.createElement(_r,{bookBoard:!0,totalElements:o,currentPage:a,handlePageChange:A}))),t.createElement(ke,null))})),Rr=Xt.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 0px;
  width: 1200px;
`,jr=Xt.h2`
  padding: 50px 30px;
`,Tr=Xt.form``,Pr=Xt.div`
  margin: 0px 80px;
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
  font-size: 17px;
  color: #0f4c81;
  font-weight: bold;
  & div {
    margin-bottom: 20px;
  }

  & div#content {
    margin-top: 50px;
  }
`,qr=Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 35px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Lr=Xt.textarea`
  resize: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 12px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 300px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Hr=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Wr=()=>{const[n,e]=Ge(""),[a,r]=Ge(""),[o,i]=Ge(""),[l,s]=Ge(""),[A,c]=(0,t.useState)(!1),p=fn((n=>n.auth.user)).user_id,d=(0,t.useCallback)((t=>{t.preventDefault(),console.log(n,a,o,l,p),n.length&&n.trim().length?a.length&&a.trim().length?o.length&&o.trim().length?Gr({url:`/bkusers/book-reports?userId=${p}`,method:"post",data:{book_name:a,book_report_tag:l,content:o,title:n}}).then((n=>{alert("성공적으로 작성되었습니다."),c(!0)})):alert("내용을 작성해주세요."):alert("책 제목을 작성해주세요."):alert("글 제목을 작성해주세요.")}),[n,a,o,l,p]);return A?t.createElement(P,{to:"/mybookrecord"}):t.createElement("div",null,t.createElement(Rr,null,t.createElement(jr,null,"게시글 작성"),t.createElement(Tr,{onSubmit:d},t.createElement(Pr,null,t.createElement("div",{id:"title"},"글 제목",t.createElement(qr,{id:"title",name:"title",placeholder:"제목을 입력해주세요.",value:n,onChange:e})),t.createElement("div",{id:"book_title"},"책 제목",t.createElement(qr,{id:"book_title",name:"book_title",placeholder:"제목을 입력해주세요.",value:a,onChange:r})),t.createElement("div",{id:"content"},"본문",t.createElement(Lr,{id:"content",name:"content",placeholder:"내용을 입력해주세요.",value:o,onChange:i})),t.createElement("div",{id:"tag"},"태그",t.createElement(qr,{id:"tag",name:"tag",placeholder:"#태그",value:l,onChange:s})),t.createElement(Hr,{type:"submit"},"작성하기")))))},Kr=Xt.div``,Yr=Xt.div``,Vr=Y((()=>t.createElement("div",{style:{height:"100%"}},t.createElement(Yr,null,t.createElement(me,null),t.createElement(Kr,null,t.createElement(Wr,null))),t.createElement(ke,null)))),Qr=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
`,Zr=Xt.h4`
  padding: 50px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
  font-weight: bold;
`,Xr=Xt.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`,$r=Xt.div`
  margin-top: 100px;
  display: flex;
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,no=Xt.div`
  & div {
    text-align: right;
  }

  & div.title {
    font-weight: bold;
    font-size: 17px;
  }

  & div.author {
    color: #4e4e4e;
  }
`,to=Xt.div`
  margin-left: 100px;
  width: 100%;
  text-align: right;
`,eo=Xt.div`
  margin-bottom: 15px;
`,ao=Xt.div`
  padding-bottom: 13px;
  border-bottom: 1px solid grey;

  & div.title {
    font-weight: bold;
    font-size: 19px;
    padding-bottom: 10px;
  }

  & div.date {
    color: #4e4e4e;
  }
`,ro=Xt.div`
  margin-top: 35px;
  font-size: 17px;
  line-height: 27px;
  & div {
    color: #0f4c81;
    padding-top: 30px;
  }
`,oo=(Xt.div``,Xt.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: space-between;

  & div i {
    font-size: 25px;
    cursor: pointer;
  }

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  & button.edit {
    background: #939597;
    :hover {
      background-color: rgba(147, 149, 151, 0.8);
    }
  }

  & button.delete {
    background: #900020;
    :hover {
      background-color: rgba(144, 0, 32, 0.8);
    }
  }
`),io=n=>{const e=n.recordDetailData,a=(0,t.useCallback)((t=>{t.preventDefault(),n.setEditModalOpen(!0)}),[]),r=(0,t.useCallback)((t=>{t.preventDefault(),n.setDeleteModalOpen(!0)}),[]);return t.createElement("div",null,t.createElement($r,null,t.createElement(no,null,t.createElement(eo,null,t.createElement("img",{src:"/images/placeholder.png"})),t.createElement("div",{className:"title"},e.book_name)),t.createElement(to,null,t.createElement(ao,null,t.createElement("div",{className:"title"},e.title),t.createElement("div",{className:"time"},e.create_at)),t.createElement(ro,null,e.content,t.createElement("div",{id:"tag"},e.book_report_tag)),t.createElement(oo,null,t.createElement("button",{className:"edit",onClick:a},"수정하기"),t.createElement("button",{className:"delete",onClick:r},"삭제하기")))))},lo=Xt.div`
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  /* width: 1920px;
  height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
`,so=Xt.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,Ao=Xt.button`
  border-radius: 3px;
  border: none;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  background: #900020;
  :hover {
    background-color: rgba(144, 0, 32, 0.8);
  }
`,co=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,po=Xt.form`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  height: 100%;

  & h5 {
    font-weight: bold;
  }
`,uo=Xt.textarea`
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`,fo=Xt.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 350px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`,mo=Xt.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 500px;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`,ho=Xt.div`
  border: 3px solid #939597;
  width: 800px;
  height: 720px;
  background-color: white;
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,go=n=>{const e=fn((n=>n.auth.user)),a=n.boardId,[r,o,i]=Ge(n.post.title),[l,s,A]=Ge(n.post.book_name),[c,p,d]=Ge(n.post.content),[u,f,m]=Ge(n.post.book_report_tag);(0,t.useEffect)((()=>{i(n.post.title),A(n.post.book_name),d(n.post.content),m(n.post.book_report_tag)}),[n]);const h=(0,t.useCallback)((t=>{t.preventDefault();let r={book_name:l,content:c,tag_name:u};Gr({url:`/bkusers/book-reports/${a}?userId=${e.user_id}`,method:"patch",data:r}).then((t=>{n.setSuccessEdit(!0),alert("수정되었습니다.")}))}),[a,r,l,c,u,e,n]),g=(0,t.useCallback)((t=>{t.preventDefault(),n.setEditModalOpen(!1)}),[n]);return t.createElement(t.Fragment,null,t.createElement(lo,{editModal:n.editModalOpen}),t.createElement(ho,{editModal:n.editModalOpen},t.createElement(po,{onSubmit:h},t.createElement("h5",null,"글 제목"),t.createElement(uo,{id:"title",type:"text",placeholder:r,value:r,onChange:o,disabled:!0}),t.createElement("h5",null,"책 제목"),t.createElement(uo,{id:"book_title",type:"text",placeholder:l,value:l,onChange:s}),t.createElement("h5",null,"내용"),t.createElement(fo,{id:"content",type:"text",placeholder:c,value:c,onChange:p}),t.createElement("h5",null,"태그"),t.createElement(mo,{id:"tag",type:"text",placeholder:u,value:u,onChange:f}),t.createElement(so,null,t.createElement(Ao,{type:"submit"},"수정"),t.createElement(co,{onClick:g},"닫기")))))},bo=Xt.div`
  display: ${n=>n.checkModal?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`,Eo=Xt.div`
  display: flex;
`,xo=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,vo=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`,yo=Xt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Co=Xt.div`
  font-size: 18px;
  font-weight: bold;
`,wo=Xt.div`
  padding-top: 5px;
  font-size: 12px;
  color: #c4c4c4;
`,ko=Xt.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${n=>n.checkModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,Bo=n=>{const e=(0,t.useCallback)((t=>{t.preventDefault(),Gr({url:`/bkusers/book-reports/${n.boardId}?userId=${n.userId}`,method:"delete"}).then((t=>{alert("삭제되었습니다."),n.setSuccessDelete(!0)}))}),[n]);return t.createElement(t.Fragment,null,t.createElement(bo,{checkModal:n.deleteModalOpen}),t.createElement(ko,{checkModal:n.deleteModalOpen},t.createElement(yo,null,t.createElement(Co,null,"삭제하시겠습니까?"),t.createElement(wo,null),t.createElement(Eo,null,t.createElement(xo,{onClick:()=>{n.setDeleteModalOpen(!1)}},"취소하기"),t.createElement(vo,{onClick:e},"삭제하기")))))},Do=n=>{const{boardId:e}=Z(),a=fn((n=>n.auth.user)),[r,o]=(0,t.useState)([]),[i,l]=(0,t.useState)(!1),[s,A]=(0,t.useState)(!1),[c,p]=(0,t.useState)(!1),[d,u]=(0,t.useState)(!1);(0,t.useEffect)((()=>{f()}),[]);const f=async()=>{const n=await Gr({url:`/bkusers/book-reports/detail/${e}`,method:"get"});o(n.data.data)};return c&&(l(!1),n.history.push(`/mybookrecord/detail/${e}`),window.location.reload(),p(!1)),d&&(A(!1),n.history.push("/mybookrecord"),window.location.reload(),u(!1)),t.createElement("div",{style:{height:"100%"}},t.createElement(go,{boardId:e,post:r,editModalOpen:i,setEditModalOpen:l,setSuccessEdit:p}),t.createElement(Bo,{deleteModalOpen:s,setDeleteModalOpen:A,boardId:e,setSuccessDelete:u,userId:a.user_id}),t.createElement(Qr,null,t.createElement(me,null),t.createElement(Zr,null,"나의 게시물"),t.createElement(Xr,null,t.createElement(io,{recordDetailData:r,setEditModalOpen:l,setDeleteModalOpen:A}))),t.createElement(ke,null))},Io=Xt.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 500px;
`,zo=Xt.h2`
  padding: 50px 30px;
`,Fo=Xt.div`
  height: auto;
  min-height: 100%;
  & div {
    margin-top: 100px;
  }
`,_o=Xt.div`
  display: flex;
  justify-content: flex-end;

  & i {
    position: absolute;
    font-size: 16px;
    color: #0f4c81;
    top: 248px;
    right: 5px;
    z-index: 2;
    cursor: pointer;
  }

  & select {
    border-color: #0f4c81;
    color: #0f4c81;
    border-radius: 3px;
    margin-right: 10px;
  }

  & input {
    width: 298px;
    height: 34px;
    border: 1px solid #939597;
    border-radius: 3px;
  }
`,So=Xt.table`
  width: 100%;
  border-top: 0.5px solid #0f4c81;
  border-collapse: collapse;
  margin-top: 12px;
`,Oo=Xt.thead`
  border: 0px;
  border-bottom: 1px solid #0f4c81;
  text-align: center;
  & th {
    border: 0px;
    padding: 5px;
    height: 60px;
    font-size: 15px;
    color: #0f4c81;
    width: 110px;
  }

  & th.textNo {
    width: 150px;
  }

  & th.title {
    width: 850px;
  }
`,No=Xt.tbody`
  height: 60px;
  text-align: center;

  & tr {
    height: 60px;
  }
  & tr.notice {
    font-weight: bold;
  }

  & td {
    border-bottom: 1px solid #939597;
  }

  & td.title {
    text-align: left;
    padding-left: 40px;
  }

  & td.title > a {
    text-decoration: none;
    color: black;
  }
`,Mo=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  :hover {
    cursor: pointer;
    background-color: rgba(15, 76, 129, 0.8);
  }
`,Jo=function(n){return n.replace("T"," ")},Go=()=>{const{isLoggedIn:n}=fn((n=>n.auth)),[e,a]=(0,t.useState)(),[r,o]=(0,t.useState)(),[i,l]=(0,t.useState)(0),[s,A]=Ge(""),[c,p]=(0,t.useState)(),[d,u]=(0,t.useState)();return(0,t.useEffect)((()=>{yn().get("/api/discussions",{withCredentials:!0,params:{page:i}}).then((n=>{const t=n.data.data.content,e=n.data.pagination,{total_pages:r,total_elements:i,current_page:s,current_elements:A}=e;a(t),o(i),l(s)})).catch((n=>{console.log(n)}))}),[]),t.createElement("div",{id:"discussion",style:{height:"100%"}},t.createElement(me,null),t.createElement(Io,null,t.createElement(Fo,null,t.createElement(zo,null,"토론 게시판"),t.createElement(_o,null,t.createElement("select",{onChange:n=>{const{value:t}=n.target;u(t)},value:c},t.createElement("option",null,"선택"),t.createElement("option",{value:"all"},"제목/내용"),t.createElement("option",{value:"title"},"제목"),t.createElement("option",{value:"content"},"내용")),t.createElement("i",{className:"fas fa-search",onClick:n=>{yn().get(`/api/discussions/search-${d}/${s}`,{withCredentials:!0}).then((n=>{const t=n.data.data.content;a(t)})).catch((n=>{console.log(n)}))}}),t.createElement("input",{placeholder:"검색어를 입력해주세요.",onChange:A,value:s})),t.createElement(So,null,t.createElement(Oo,null,t.createElement("tr",null,t.createElement("th",{className:"textNo"},"글번호"),t.createElement("th",{className:"title"},"제목"),t.createElement("th",null,"조회수"),t.createElement("th",null,"작성자"),t.createElement("th",null,"작성날짜"))),t.createElement(No,null,e?.map(((e,a)=>t.createElement(Uo,{key:a,item:e,isLoggedIn:n}))))),t.createElement(pe,{to:"/discussion/write"},t.createElement(Mo,null,"글쓰기")),t.createElement("div",null,t.createElement(_r,{discussion:!0,totalElements:r,currentPage:i,handlePageChange:n=>{yn().get("/api/discussions",{withCredentials:!0,params:{page:n-1}}).then((n=>{const t=n.data.data.content,e=n.data.pagination,{total_pages:r,total_elements:i,current_page:s,current_elements:A}=e;console.log(t),a(t),o(i),l(s)})).catch((n=>{console.log(n)}))}})))),t.createElement(ke,null))},Uo=({item:n,isLoggedIn:e})=>{const{id:a,title:r,user_nickname:o,create_at:i,read_hit:l}=n;return t.createElement("tr",null,t.createElement("td",null,a),e?t.createElement("td",{className:"title"},t.createElement(pe,{to:{pathname:`/discussion/content/${a}`,state:{read_hit:l}}},r," ")):t.createElement("td",{className:"title"},t.createElement(pe,{to:"/login"},r)),t.createElement("td",null,l),t.createElement("td",null,o),t.createElement("td",null,Jo(i)))},Ro=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`,jo=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,To=Xt.h2`
  padding: 50px 30px;
`,Po=Xt.div`
  height: 400px;
`,qo=Xt.div`
  font-size: 24px;
  padding: 20px 20px;
  font-weight: bold;
`,Lo=Xt.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #939597;
`,Ho=Xt.div`
  font-size: 15px;
  padding: 10px;
  color: #939597;
  & .date {
    margin-right: 10px;
  }
  & .count {
    margin-left: 10px;
  }
  & .countNo {
    color: #0f4c81;
    font-weight: bold;
  }
`,Wo=Xt.div`
  font-size: 18px;
  margin-bottom: 20px;

  & i {
    font-size: 35px;
    padding: 0px 30px 0 10px;
  }
`,Ko=Xt.article`
  padding: 30px;
  font-size: 18px;
  line-height: 30px;
`,Yo=Xt.div`
  display: flex;
  justify-content: center;

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    background-color: white;
    color: #900020;
    cursor: pointer;
    border: 1px solid #900020;
  }

  & button.delete {
    border: 1px solid #900020;
  }
`,Vo=Xt.div`
  margin-top: 100px;
  & span {
    font-weight: bold;
    color: #0f4c81;
  }
`,Qo=Xt.div``,Zo=Xt.div`
  margin-bottom: 50px;
`,Xo=Xt.div`
  display: flex;
  align-items: center;
  height: 110px;
  :not(:last-of-type) {
    border-bottom: 1px solid #f7f7f5;
  }
`,$o=Xt.div`
  display: flex;
  align-items: center;
  width: 270px;

  & i {
    font-size: 40px;
    margin-right: 10px;
  }
  & div.nickName {
    font-weight: bold;
    font-size: 18px;
  }
  & div.date {
    font-size: 13px;
    color: grey;
  }
`,ni=Xt.div`
  width: 100%;
  align-self: center;
  font-size: 16px;
  & button {
    float: right;
    color: red;
    font-size: 20px;
    border: 0px;
    background-color: white;
    :hover {
      cursor: pointer;
    }
  }
`,ti=Xt.form`
  display: flex;
  align-items: flex-end;
  & div {
  }
  & textarea {
    resize: none;
    border-radius: 3px;
    border: 1px solid #ced4da;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    height: 74px;
    line-height: 1.33333333;
    font-size: 14px;
    margin-right: 15px;

    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }
  }
  & button {
    border: 0px;
    border-radius: 5px;
    background-color: #0f4c81;
    color: white;
    width: 97px;
    height: 42px;
    font-weight: bold;
    margin-top: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: rgba(15, 76, 129, 0.8);
      border: none;
      cursor: pointer;
    }
    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }

    & > a {
      text-decoration: none;
      color: white;
    }
  }
`,ei=({discussionId:n})=>{const e=fn((n=>n.auth.user)).user_id,[a,r]=(0,t.useState)(),[o,i]=(0,t.useState)(0),[l,s]=Ge("");return(0,t.useEffect)((()=>{Gr({url:`/bkusers/discussionreplies/${n}`,method:"get"}).then((n=>{if(n.data.data){const t=n.data.data.content,e=n.data.pagination.total_elements;i(e),r(t)}}))}),[]),t.createElement("div",null,t.createElement(Vo,null,t.createElement(Qo,null,t.createElement("div",null,"전체 댓글 ",t.createElement("span",null,o)),t.createElement(Zo,null,a?.map(((a,r)=>t.createElement(ai,{key:r,item:a,discussionId:n,currentId:e})))),t.createElement("span",null,"답글 쓰기"),t.createElement(ti,null,t.createElement("textarea",{value:l,onChange:s}),t.createElement("button",{onClick:t=>{Gr({url:`/users/discussionreplies/${n}?userId=${e}`,method:"post",data:{content:l}}).then((n=>{window.location.reload()}))}},"등록")))))},ai=({item:n,discussionId:e,currentId:a})=>{const{id:r,user_id:o,user_nick_name:i,content:l,create_at:s}=n,A=(0,t.useCallback)((n=>{yn().delete(`/api/users/discussionreplies/${e}?replyId=${r}&userId=${a}`,{withCredentials:!0}).then((()=>{window.location.reload()})).catch((n=>{console.dir(n)}))}),[e,r,a]);return t.createElement(Xo,null,t.createElement($o,null,t.createElement("i",{className:"fas fa-user-circle"}),t.createElement("div",null,t.createElement("div",{className:"nickName"},i),t.createElement("div",{className:"date"},s))),t.createElement(ni,null,o===a?t.createElement("button",{className:"delete",onClick:A},"×"):null,t.createElement("div",null,l)))},ri=({checkModalOpen:n,setCheckModalOpen:e,Id:a,userId:r})=>{const o=Q(),i=(0,t.useCallback)((n=>{Gr({url:`/users/discussions/del/${a}?userId=${r}`,method:"delete"}).then((n=>{o.push("/discussion")}))}),[a,r]);return t.createElement(t.Fragment,null,t.createElement(bo,{checkModal:n}),t.createElement(ko,{checkModal:n},t.createElement(yo,{onClick:()=>{e(!1)}},t.createElement(Co,null,"삭제하시겠습니까?"),t.createElement(wo,null),t.createElement(Eo,null,t.createElement(xo,{onClick:()=>{e(!1)}},"취소하기"),t.createElement(vo,{onClick:i},"삭제하기")))))},oi=n=>{const e=fn((n=>n.auth.user)).user_id,{id:a}=(Q(),n.match.params),[r,o]=(0,t.useState)(),[i,l]=(0,t.useState)(""),[s,A]=(0,t.useState)(""),[c,p]=(0,t.useState)(""),[d,u]=(0,t.useState)(""),[f,m]=(0,t.useState)(""),[h,g]=(0,t.useState)(!1),[b,E]=(0,t.useState)(0);return(0,t.useEffect)((()=>{Gr({url:`/bkusers/discussions/${a}?userId=${e}`,method:"get"}).then((n=>{const t=n.data.data;l(t.title),A(t.content),p(t.user_nick_name),u(t.create_at),o(t.id),m(t.user_id),E(t.readhit)}))}),[]),t.createElement("div",{style:{height:"100%"}},t.createElement(ri,{checkModalOpen:h,setCheckModalOpen:g,Id:r,userId:e}),t.createElement(jo,null,t.createElement(me,null),t.createElement(Ro,null,t.createElement(To,null,"토론 게시판"),t.createElement(Po,null,t.createElement(qo,null,i),t.createElement(Lo,null,t.createElement(Ho,null,t.createElement("span",{className:"date"},Jo(d)),"|",t.createElement("span",{className:"count"},"조회수 ",t.createElement("span",{className:"countNo"},b))),t.createElement(Wo,null,t.createElement("span",null,c),t.createElement("i",{className:"fas fa-user-circle"}))),t.createElement(Ko,null,s)),f===e?t.createElement(Yo,null,t.createElement(pe,{to:{pathname:`/discussion/edit/${a}`,state:{title:i,content:s}}},t.createElement("button",{className:"edit"},"수정하기")),t.createElement("button",{className:"delete",onClick:n=>{g(!0)}},"삭제하기")):null,t.createElement(ei,{discussionId:a}))),t.createElement(ke,null))},ii=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 200px;
`,li=Xt.h2`
  padding: 50px 30px;
`,si=Xt.div`
  margin: 0px 80px;
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
  font-size: 17px;
  color: #0f4c81;
  font-weight: bold;
  & div {
    margin-bottom: 20px;
  }

  & div#content {
    margin-top: 50px;
  }
`,Ai=Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 35px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;
  resize: none;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,ci=Xt.textarea`
  resize: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 12px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 300px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,pi=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`,di=({title:n,content:e,Id:a})=>{const r=fn((n=>n.auth.user)),[o,i]=(0,t.useState)(n),[l,s]=(0,t.useState)(e);return t.createElement("div",{style:{height:"100%"}},t.createElement(ii,null,t.createElement(li,null,"게시글 작성"),t.createElement(si,null,t.createElement("div",{id:"title"},"제목",t.createElement(Ai,{id:"title",name:"title",placeholder:"제목을 입력해주세요.",value:o,onChange:n=>{const t=n.target.value;i(t)}})),t.createElement("div",{id:"content"},"본문",t.createElement(ci,{id:"content",name:"content",placeholder:"내용을 입력해주세요.",onChange:n=>{const t=n.target.value;s(t)},value:l}))," ",t.createElement(pe,{to:{pathname:`/discussion/content/${a}`}},t.createElement(pi,{type:"submit",onClick:n=>{let t={content:l,title:o};Gr({url:`/users/discussions/edit/${a}?userId=${r.user_id}`,method:"patch",data:t})}},"수정하기")))))},ui=Xt.div`
  width: 1200px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`,fi=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,mi=n=>{console.log("EDIT");const e=n.location.state.title,a=n.location.state.content,r=n.match.params.id;return t.createElement("div",{style:{height:"100%"}},t.createElement(fi,null,t.createElement(me,null),t.createElement(ui,null,t.createElement(di,{Id:r,title:e,content:a}))),t.createElement(ke,null))},hi=Xt.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 0px;
  width: 1200px;
`,gi=Xt.h2`
  padding: 50px 30px;
`,bi=Xt.div`
  margin: 0px 80px;
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
  font-size: 17px;
  color: #0f4c81;
  font-weight: bold;
  & div {
    margin-bottom: 20px;
  }

  & div#content {
    margin-top: 50px;
  }
`,Ei=Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 35px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;
  resize: none;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,xi=Xt.textarea`
  resize: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 12px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 300px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,vi=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`,yi=()=>{const n=fn((n=>n.auth.user)),e=Q(),[a,r]=Ge(""),[o,i]=Ge("");return t.createElement("div",null,t.createElement(hi,null,t.createElement(gi,null,"게시글 작성"),t.createElement(bi,null,t.createElement("div",{id:"title"},"제목",t.createElement(Ei,{id:"title",name:"title",placeholder:"제목을 입력해주세요.",onChange:r,value:a})),t.createElement("div",{id:"content"},"본문",t.createElement(xi,{id:"content",name:"content",placeholder:"내용을 입력해주세요.",onChange:i,value:o})),t.createElement(vi,{type:"submit",onClick:t=>{let r={content:o,title:a};Gr({url:`/users/discussions/${n.user_id}`,method:"post",data:r}).then((n=>{e.push("disccussion")}))}},"작성하기"))))},Ci=Xt.div`
  /* width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px; */
  padding: 0px 30px;
  min-height: 100%;
`,wi=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
`,ki=()=>t.createElement("div",{style:{height:"100%"}},t.createElement(wi,null,t.createElement(me,null),t.createElement(Ci,null,t.createElement(yi,null))),t.createElement(ke,null)),Bi=Xt.div`
  margin-top: 40px;
  width: 200px;
  background-color: #fff;

  & h2 {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    margin: 0;
    margin-bottom: 20px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    overflow: auto;
  }

  & li {
    height: 40px;
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }

  & a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
  }

  & li.select {
    background-color: #778fa8;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
  }

  & li:last-child {
  }
`,Di=()=>t.createElement(Bi,null,t.createElement("h2",null,"마이 페이지"),t.createElement("ul",null,t.createElement(pe,{to:"/mypage/profile"},t.createElement("li",{className:"select"},"프로필")))),Ii=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-bottom: 100px;
`,zi=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,Fi=Xt.div`
  width: 950px;
  padding-top: 40px;
`,_i=Xt.div`
  width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 25px;

  & h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`,Si=Xt.div`
  width: 100vh;
  height: 200px;
  display: flex;
`,Oi=Xt.div`
  width: 225px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;

  & span {
    padding-left: 5px;
    margin: 5px;
    font-weight: normal;
  }
`,Ni=Xt.div`
  width: 225px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Mi=Xt.label`
  font-size: 16px;
  margin-bottom: 0px;

  & span {
    color: blue;
  }
`,Ji=Xt.form`
  margin-top: 20px;
`,Gi=Xt.div`
  margin-bottom: 20px;
`,Ui=Xt.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 460px;
  margin-top: 8px;
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Ri=Xt.div`
  font-size: 13px;
  color: #939597;
`,ji=Xt.button`
  font-size: 16px;
  color: white;
  background-color: #0f4c81;
  border: 0px;
  border-radius: 3px;
  width: 460px;
  height: 47px;
  margin-top: 25px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
`,Ti=Y((n=>{const e=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,a=/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{4,16}$/,r=fn((n=>n.auth.user.user_id)),[o,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),[A,c]=(0,t.useState)(""),[p,d,u]=Ge(""),[f,m]=(0,t.useState)(""),[h,g]=(0,t.useState)(""),[b,E]=(0,t.useState)(!1),x=(0,t.useCallback)((n=>{m(n.target.value),E(n.target.value!==h)}),[h]),v=(0,t.useCallback)((n=>{g(n.target.value),E(n.target.value!==f)}),[f]);(0,t.useEffect)((()=>{Gr({url:`/bkusers/mypage/${r}`,method:"get"}).then((n=>{const t=n.data.data;u(t.nick_name),i(t.email),s(t.name),c(t.phone_number)}))}),[]);const y=(0,t.useCallback)((t=>{if(t.preventDefault(),b)alert("비밀번호를 확인해주세요.");else if(e.test(f))if(a.test(p)){const t=wn(f);Gr({url:`/bkusers/mypage/edit/${r}`,method:"patch",data:{nick_name:p,password:t}}).then((t=>{alert("성공적으로 수정되었습니다."),n.history.push(`/mypage/profile/${r}`),window.location.reload()}))}else alert("닉네임을 확인해주세요.");else alert("비밀번호를 확인해주세요.")}),[b,f,p,e,a,r]);return o?t.createElement("div",{id:"mypage-profile",style:{height:"100%"}},t.createElement(zi,null,t.createElement(me,null),t.createElement(Ii,null,t.createElement(Di,null),t.createElement(Fi,null,t.createElement(_i,null,t.createElement("h2",null,"프로필"),t.createElement(Si,null,t.createElement(Oi,null,"이메일",t.createElement("span",null,o),"이름",t.createElement("span",null,l),"휴대폰",t.createElement("span",null,A)),t.createElement(Ni,null,t.createElement("i",{className:"fas fa-user-circle fa-8x"}))),t.createElement(Ji,{onSubmit:y},t.createElement(Gi,null,t.createElement(Mi,null,"닉네임"),t.createElement(Ui,{type:"text",placeholder:p,value:p,onChange:d}),!p&&t.createElement(ia,null,"닉네임을 입력해주세요.")),t.createElement(Gi,null,t.createElement(Mi,null,"비밀번호"),t.createElement(Ui,{placeholder:"비밀번호를 입력해주세요.",type:"password",value:f,onChange:x}),t.createElement(Ri,null,"비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.")),t.createElement(Gi,null,t.createElement(Mi,null,"비밀번호 확인"),t.createElement(Ui,{placeholder:"비밀번호를 다시 입력해주세요.",type:"password",value:h,onChange:v}),b&&t.createElement(ia,null,"비밀번호가 일치하지 않습니다.")),t.createElement(ji,{type:"submit"},"수정하기")))))),t.createElement(ke,null)):t.createElement("div",null,"Loading...")})),Pi=n=>{let e=n.title,a=n.bookTitle;return e.length>13&&(e=e.slice(0,10)+"..."),a.length>13&&(a=a.slice(0,10)+"..."),t.createElement(pr,{span:6},t.createElement(Oa,null,t.createElement(pe,{to:`/shareboard/detail/${n.boardId}`,style:{textDecoration:"none",color:"#000",hover:"none"}},t.createElement("div",{className:"card",style:{borderRadius:"5px"}},t.createElement("img",{style:{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",maxHeight:"250px"},src:"images/placeholder.png",alt:""}),t.createElement("div",{className:"card-body",style:{textAlign:"right"}},t.createElement(Na,null,e),t.createElement(Ma,null,t.createElement(Ja,null,a),t.createElement(Ga,null,n.writerNickName),t.createElement(Ua,null,n.createdBoard),t.createElement(Ra,null,n.bookTag)))))))},qi=Y((n=>{const[e,a]=(0,t.useState)(0),[r,o]=(0,t.useState)(0),[i,l]=(0,t.useState)([]),[s,A]=(0,t.useState)([]);(0,t.useEffect)((()=>{yn().get("/api/weekly-best",{withCredentials:!0}).then((n=>{A(n.data.data)})).catch((n=>{console.dir(n)})),c(e)}),[]);const c=n=>{yn().get("/api/sharings",{withCredentials:!0,params:{page:n-1}}).then((n=>{l(n.data.data);const t=n.data.pagination,{total_pages:e,total_elements:r,current_page:i,current_elements:s}=t;o(r),a(i),window.scrollTo(0,0)})).catch((n=>{console.dir(n)}))},p=(0,t.useCallback)((()=>{n.history.push("/shareboard/write")}),[]);return i.length&&s.length?t.createElement("div",{style:{height:"100%"}},t.createElement(Da,null,t.createElement(me,null),t.createElement(Ia,null,"공유 게시판"),t.createElement(za,null,t.createElement("h4",null,"인기 게시물"),t.createElement(Fa,null,t.createElement(Ir,{gutter:[16,32]},s&&s.map(((n,e)=>t.createElement(t.Fragment,{key:e},t.createElement(Pi,{title:n.title,createdBoard:n.created_at,boardId:n.id,likeCnt:n.like_cnt,bookTitle:n.book_title,writerNickName:n.writer_info.nick_name,bookTag:n.tag_content})))))),t.createElement("h4",null,"공유된 게시물"),t.createElement(_a,null,t.createElement(Ir,{gutter:[16,32]},i&&i.map(((n,e)=>t.createElement(t.Fragment,{key:e},t.createElement(mr,{share:!0,title:n.title,createdBoard:n.created_at,boardId:n.id,likeCnt:n.like_cnt,bookTitle:n.book_title,writerNickName:n.writer_info.nick_name,bookTag:n.tag_content}))))))),t.createElement("div",{style:{marginBottom:"50px"}},t.createElement(Sa,{onClick:p},"작성하기")),t.createElement("div",{style:{marginLeft:"150px"}},t.createElement(_r,{bookBoard:!0,totalElements:r,currentPage:e,handlePageChange:c}))),t.createElement(ke,null)):t.createElement("div",null,"loading...")})),Li=n=>{const[e,a]=Ge(""),[r,o]=Ge(""),[i,l]=Ge(""),[s,A]=Ge(""),[c,p]=(0,t.useState)(!1),d=fn((n=>n.auth.user)).user_id,u=(0,t.useCallback)((n=>{n.preventDefault(),e.length&&e.trim().length?r.length&&r.trim().length?i.length&&i.trim().length?Gr({url:"/users/sharings",method:"post",data:{book_title:r,content:i,sharing_board_tag:s,title:e,user_id:d}}).then((n=>{alert("성공적으로 작성되었습니다."),p(!0)})):alert("내용을 작성해주세요."):alert("책 제목을 작성해주세요."):alert("글 제목을 작성해주세요.")}),[e,r,i,s,d]);return c?t.createElement(P,{to:"/shareboard"}):t.createElement("div",null,t.createElement(Rr,null,t.createElement(jr,null,"게시글 작성"),t.createElement(Tr,{onSubmit:u},t.createElement(Pr,null,t.createElement("div",{id:"title"},"글 제목",t.createElement(qr,{id:"title",name:"title",placeholder:"제목을 입력해주세요.",value:e,onChange:a})),t.createElement("div",{id:"book_title"},"책 제목",t.createElement(qr,{id:"book_title",name:"book_title",placeholder:"제목을 입력해주세요.",value:r,onChange:o})),t.createElement("div",{id:"content"},"본문",t.createElement(Lr,{id:"content",name:"content",placeholder:"내용을 입력해주세요.",value:i,onChange:l})),t.createElement("div",{id:"tag"},"태그",t.createElement(qr,{id:"tag",name:"tag",placeholder:"#태그",value:s,onChange:A})),t.createElement(Hr,{type:"submit"},"작성하기")))))},Hi=Y((()=>t.createElement("div",{style:{height:"100%"}},t.createElement(Yr,null,t.createElement(me,null),t.createElement(Kr,null,t.createElement(Li,null))),t.createElement(ke,null)))),Wi=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`,Ki=Xt.h4`
  padding: 50px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
  font-weight: bold;
`,Yi=Xt.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`,Vi=Xt.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  padding-bottom: 25px;
  height: auto;
`,Qi=Xt.div`
  & div {
    text-align: right;
  }

  & div.title {
    font-weight: bold;
    font-size: 17px;
  }

  & div.author {
    color: #4e4e4e;
  }
`,Zi=Xt.div`
  margin-left: 100px;
  width: 100%;
  text-align: right;
`,Xi=Xt.div`
  margin-bottom: 15px;
`,$i=Xt.div`
  padding-bottom: 13px;
  border-bottom: 1px solid grey;

  & div.title {
    font-weight: bold;
    font-size: 19px;
    padding-bottom: 10px;
  }

  & div.date {
    color: #4e4e4e;
  }
`,nl=Xt.div`
  margin-top: 35px;
  font-size: 17px;
  line-height: 27px;

  & div {
    color: #0f4c81;
    padding-top: 30px;
  }
`,tl=(Xt.div``,Xt.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: space-between;

  & div i {
    font-size: 25px;
    cursor: pointer;
  }

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  & button.edit {
    background: #939597;
    :hover {
      background-color: rgba(147, 149, 151, 0.8);
    }
  }

  & button.delete {
    background: #900020;
    :hover {
      background-color: rgba(144, 0, 32, 0.8);
    }
  }
`),el=Y((n=>{const{boardId:e}=Z(),a=fn((n=>n.auth));let r=-1;null!==a.user&&(r=a.user.user_id);const o=(0,t.useCallback)((t=>{t.preventDefault(),n.setEditModalOpen(!0)}),[]),i=(0,t.useCallback)((t=>{t.preventDefault(),n.setDeleteModalOpen(!0)}),[]);return t.createElement("div",null,t.createElement(Vi,null,t.createElement(Qi,null,t.createElement(Xi,null,t.createElement("img",{src:"/images/placeholder.png"})),t.createElement("div",{className:"title"},n.bookTitle)),t.createElement(Zi,null,t.createElement($i,null,t.createElement("div",{className:"title"},n.title),t.createElement("div",{className:"date"},n.create)),t.createElement(nl,null,n.content,t.createElement("div",{id:"tag"},n.tag?n.tag:null)),n.writerId===r&&t.createElement(tl,null,t.createElement("button",{className:"edit",onClick:o},"수정하기"),t.createElement("button",{className:"delete",onClick:i},"삭제하기")))))})),al=Xt.form`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  & div {
  }
  & textarea {
    padding: 10px;
    resize: none;
    border-radius: 3px;
    border: 1px solid #ced4da;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    height: 74px;
    line-height: 1.33333333;
    font-size: 16px;
    margin-right: 15px;

    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }
  }
  & button {
    border: 0px;
    border-radius: 5px;
    background-color: #0f4c81;
    color: white;
    width: 97px;
    height: 42px;
    font-weight: bold;
    margin-top: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: rgba(15, 76, 129, 0.8);
      border: none;
      cursor: pointer;
    }
    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }

    & > a {
      text-decoration: none;
      color: white;
    }
  }
`,rl=n=>t.createElement(Xo,null,t.createElement($o,null,t.createElement("i",{className:"fas fa-user-circle"}),t.createElement("div",null,t.createElement("div",{className:"nickName"},n.writer),t.createElement("div",{className:"date"},n.create))),t.createElement(ni,null,t.createElement("div",null,n.comment))),ol=n=>{const e=fn((n=>n.auth));let a=-1;const r=n.boardId,[o,i]=Ge("");null!==e.user&&(a=e.user.user_id);const l=(0,t.useCallback)((n=>{n.preventDefault(),o.trim().length?Gr({url:`/users/sharing-reply?boardId=${r}`,method:"post",data:{comment:o,user_id:a}}).then((n=>{window.location.reload()})):alert("댓글을 작성해주세요")}),[o,r]);return t.createElement("div",null,t.createElement(Vo,null,t.createElement(Qo,null,t.createElement("div",null,t.createElement("span",{style:{fontSize:"1.2rem"}},"전체 댓글 ",n.replyCnt)),t.createElement(Zo,null,n.reply&&n.reply.map(((n,e)=>t.createElement(t.Fragment,{key:e},t.createElement(rl,{comment:n.comment,create:n.created_at,replyId:n.reply_id,writer:n.writer_info.nick_name,profileUrl:n.writer_info.profile_url}))))),t.createElement("span",{style:{fontSize:"1.2rem"}},"댓글"),t.createElement(al,{onSubmit:l},t.createElement("textarea",{id:"text",type:"text",value:o,onChange:i}),t.createElement("button",{type:"submit"},"등록")))))},il=Xt.div`
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  /* width: 1920px;
  height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
`,ll=Xt.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,sl=Xt.button`
  border-radius: 3px;
  border: none;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  background: #900020;
  :hover {
    background-color: rgba(144, 0, 32, 0.8);
  }
`,Al=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,cl=Xt.form`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  height: 100%;

  & h5 {
    font-weight: bold;
  }
`,pl=Xt.textarea`
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`,dl=Xt.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 350px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`,ul=Xt.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 500px;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`,fl=Xt.div`
  border: 3px solid #939597;
  width: 800px;
  height: 720px;
  background-color: white;
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,ml=n=>{const e=fn((n=>n.auth.user)),a=n.boardId,[r,o,i]=Ge(n.post.title),[l,s,A]=Ge(n.post.book_title),[c,p,d]=Ge(n.post.content),[u,f,m]=Ge(n.post.tag_content);(0,t.useEffect)((()=>{i(n.post.title),A(n.post.book_title),d(n.post.content),m(n.post.tag_content)}),[n]);const h=(0,t.useCallback)((t=>{t.preventDefault();let o={book_title:l,content:c,sharing_board_tag:u,title:r,user_id:e.user_id};Gr({url:`/users/sharings?id=${a}`,method:"patch",data:o}).then((t=>{alert("수정되었습니다."),n.setSuccessEdit(!0)}))}),[a,r,l,c,u,e,n]),g=(0,t.useCallback)((t=>{t.preventDefault(),n.setEditModalOpen(!1)}),[n]);return t.createElement(t.Fragment,null,t.createElement(il,{editModal:n.editModalOpen}),t.createElement(fl,{editModal:n.editModalOpen},t.createElement(cl,{onSubmit:h},t.createElement("h5",null,"글 제목"),t.createElement(pl,{id:"title",type:"text",placeholder:r,value:r,onChange:o}),t.createElement("h5",null,"책 제목"),t.createElement(pl,{id:"book_title",type:"text",placeholder:l,value:l,onChange:s}),t.createElement("h5",null,"내용"),t.createElement(dl,{id:"content",type:"text",placeholder:c,value:c,onChange:p}),t.createElement("h5",null,"태그"),t.createElement(ul,{id:"tag",type:"text",placeholder:u,value:u,onChange:f}),t.createElement(ll,null,t.createElement(sl,{type:"submit"},"수정"),t.createElement(Al,{onClick:g},"닫기")))))},hl=n=>{const e=(0,t.useCallback)((t=>{t.preventDefault(),Gr({url:`/users/sharings?boardId=${n.boardId}&userId=${n.userId}`,method:"delete"}).then((t=>{alert("삭제되었습니다."),n.setSuccessDelete(!0)}))}),[n]);return t.createElement(t.Fragment,null,t.createElement(bo,{checkModal:n.deleteModalOpen}),t.createElement(ko,{checkModal:n.deleteModalOpen},t.createElement(yo,null,t.createElement(Co,null,"삭제하시겠습니까?"),t.createElement(wo,null),t.createElement(Eo,null,t.createElement(xo,{onClick:()=>{n.setDeleteModalOpen(!1)}},"취소하기"),t.createElement(vo,{onClick:e},"삭제하기")))))},gl=Y((n=>{const{boardId:e}=Z(),[a,r,o]=Ge([]),[i,l]=(0,t.useState)([]),[s,A]=(0,t.useState)(""),[c,p]=(0,t.useState)(""),[d,u]=(0,t.useState)(!1),[f,m]=(0,t.useState)(!1),[h,g]=(0,t.useState)(!1),[b,E]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{Gr({url:`/bkusers/sharings?id=${e}`,method:"get"}).then((n=>{o(n.data.data),A(n.data.data.writer_info.writer_id),p(n.data.data.writer_info.nick_name)})),Gr({url:`/users/sharing-reply?boardId=${e}`,method:"get"}).then((n=>{l(n.data.data)}))}),[]),a?(h&&(u(!1),n.history.push(`/shareboard/detail/${e}`),window.location.reload(),g(!1)),b&&(m(!1),n.history.push("/shareboard"),window.location.reload(),E(!1)),t.createElement("div",{style:{height:"100%"}},t.createElement(ml,{boardId:e,post:a,editModalOpen:d,setEditModalOpen:u,setSuccessEdit:g}),t.createElement(hl,{deleteModalOpen:f,setDeleteModalOpen:m,boardId:e,setSuccessDelete:E,userId:s}),t.createElement(Wi,null,t.createElement(me,null),t.createElement(Ki,null,c,"님의 게시물"),t.createElement(Yi,null,t.createElement(el,{title:a.title,bookTitle:a.book_title,content:a.content,create:a.created_at,like:a.like_cnt,writerId:s,tag:a.tag_content,setEditModalOpen:u,setDeleteModalOpen:m}),t.createElement(ol,{boardId:e,userId:a.id,replyCnt:a.reply_cnt,reply:i,setReply:l}))),t.createElement(ke,null))):t.createElement("div",null,"Loading...")})),bl=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`,El=(Xt.div`
  display: flex;
  flex-direction: row;
  padding: 50px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`,Xt.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`),xl=Xt.div`
  margin: 0 0 0 30px;
  width: 330px;
  height: 100%;
  border: 1px solid #ced4da;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & h4 {
    margin: 0;
    font-size: 24px;
    padding: 30px 20px;
    border-bottom: 1px solid #ced4da;
  }
`,vl=Xt.button`
  width: 100%;
  height: 70px;
  padding: 15px;
  color: #939597;
  background-color: #fff;
  cursor: pointer;
  border: 0;
  outline: 0;

  &:focus {
    border: none;
    outline: none;
  }
`,yl=Xt.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & h5 {
    width: 50%;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    color: #222;
    text-align: left;
  }

  & span {
    font-size: 12px;
    text-align: right;
    width: 50%;
  }
`,Cl=Xt.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
`,wl=({partner:n,host:e,onClickMember:a,roomId:r,nickName:o})=>{const i=fn((t=>t.conversation[n][t.conversation[n].length-1]));return t.createElement("div",null,t.createElement(vl,{onClick:()=>{a(n,r,o)}},t.createElement(yl,null,t.createElement("h5",null,i.nick_name),t.createElement("span",null,i.send_at)),t.createElement(Cl,null,i.content)))},kl=Xt.div`
  width: 760px;
  margin-left: 10px;
  height: 100%;
  border: 1px solid #ced4da;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`,Bl=Xt.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ced4da;

  & h4 {
    width: 70%;
    margin: 0;
    font-size: 24px;
    padding: 30px 20px;
  }

  & div {
    width: 30%;
    font-size: 12px;
    text-align: right;
    padding: 30px 20px;
  }

  & div > i {
    padding: 0px 10px;
    color: #0f4c81;
    cursor: pointer;
  }
`,Dl=Xt.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 5px;
`,Il=Xt.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`,zl=Xt.textarea`
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  resize: none;
  border: none;

  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
  &:focus {
    outline: none;
  }
`,Fl=Xt.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,_l=Xt.button`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 5px;
  top: 5px;
`;var Sl,Ol,Nl="function"==typeof Map?new Map:(Sl=[],Ol=[],{has:function(n){return Sl.indexOf(n)>-1},get:function(n){return Ol[Sl.indexOf(n)]},set:function(n,t){-1===Sl.indexOf(n)&&(Sl.push(n),Ol.push(t))},delete:function(n){var t=Sl.indexOf(n);t>-1&&(Sl.splice(t,1),Ol.splice(t,1))}}),Ml=function(n){return new Event(n,{bubbles:!0})};try{new Event("test")}catch(Sl){Ml=function(n){var t=document.createEvent("Event");return t.initEvent(n,!0,!1),t}}function Jl(n){var t=Nl.get(n);t&&t.destroy()}function Gl(n){var t=Nl.get(n);t&&t.update()}var Ul=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((Ul=function(n){return n}).destroy=function(n){return n},Ul.update=function(n){return n}):((Ul=function(n,t){return n&&Array.prototype.forEach.call(n.length?n:[n],(function(n){return function(n){if(n&&n.nodeName&&"TEXTAREA"===n.nodeName&&!Nl.has(n)){var t,e=null,a=null,r=null,o=function(){n.clientWidth!==a&&A()},i=function(t){window.removeEventListener("resize",o,!1),n.removeEventListener("input",A,!1),n.removeEventListener("keyup",A,!1),n.removeEventListener("autosize:destroy",i,!1),n.removeEventListener("autosize:update",A,!1),Object.keys(t).forEach((function(e){n.style[e]=t[e]})),Nl.delete(n)}.bind(n,{height:n.style.height,resize:n.style.resize,overflowY:n.style.overflowY,overflowX:n.style.overflowX,wordWrap:n.style.wordWrap});n.addEventListener("autosize:destroy",i,!1),"onpropertychange"in n&&"oninput"in n&&n.addEventListener("keyup",A,!1),window.addEventListener("resize",o,!1),n.addEventListener("input",A,!1),n.addEventListener("autosize:update",A,!1),n.style.overflowX="hidden",n.style.wordWrap="break-word",Nl.set(n,{destroy:i,update:A}),"vertical"===(t=window.getComputedStyle(n,null)).resize?n.style.resize="none":"both"===t.resize&&(n.style.resize="horizontal"),e="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(e)&&(e=0),A()}function l(t){var e=n.style.width;n.style.width="0px",n.style.width=e,n.style.overflowY=t}function s(){if(0!==n.scrollHeight){var t=function(n){for(var t=[];n&&n.parentNode&&n.parentNode instanceof Element;)n.parentNode.scrollTop&&t.push({node:n.parentNode,scrollTop:n.parentNode.scrollTop}),n=n.parentNode;return t}(n),r=document.documentElement&&document.documentElement.scrollTop;n.style.height="",n.style.height=n.scrollHeight+e+"px",a=n.clientWidth,t.forEach((function(n){n.node.scrollTop=n.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function A(){s();var t=Math.round(parseFloat(n.style.height)),e=window.getComputedStyle(n,null),a="content-box"===e.boxSizing?Math.round(parseFloat(e.height)):n.offsetHeight;if(a<t?"hidden"===e.overflowY&&(l("scroll"),s(),a="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(n,null).height)):n.offsetHeight):"hidden"!==e.overflowY&&(l("hidden"),s(),a="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(n,null).height)):n.offsetHeight),r!==a){r=a;var o=Ml("autosize:resized");try{n.dispatchEvent(o)}catch(n){}}}}(n)})),n}).destroy=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],Jl),n},Ul.update=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],Gl),n});const Rl=Ul,jl=({chat:n,onChangeChat:e,onSubmitForm:a})=>{const r=(0,t.useRef)(null);(0,t.useEffect)((()=>{r.current&&Rl(r.current)}),[]);const o=(0,t.useCallback)((n=>{"Enter"===n.key&&(n.shiftKey||(n.preventDefault(),a(n)))}),[a]);return t.createElement(Dl,null,t.createElement(Il,{onSubmit:a},t.createElement(zl,{type:"text",id:"editor=chat",onKeyPress:o,ref:r,value:n,onChange:e}),t.createElement(Fl,null,t.createElement(_l,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(n?.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!n?.trim()},t.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))},Tl=Xt.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex: 1;
`;Xt.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`,Xt.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  & button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: white;
    border: none;
    outline: none;
  }
`;var Pl=e(1298);const ql=Xt.div`
  display: flex;
  padding: 8px 20px;
  &:hover {
    background: #eee;
  }
  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
    }
  }

  & span {
    font-size: 12px;
    margin-left: 5px;
  }
`,Ll=()=>t.createElement(ql,null,t.createElement("div",{className:"chat-img"},t.createElement("img",{className:"img"})),t.createElement("div",{className:"chat-text"},t.createElement("div",{className:"chat-user"},t.createElement("b",null,"nickName"),t.createElement("span",null,"시간")),t.createElement("p",null,"채팅내용"))),Hl=(0,t.memo)(Ll),Wl=()=>t.createElement(Tl,null,t.createElement(Pl.$B,{autoHide:!0},t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null),t.createElement(Hl,null))),Kl=({sendToMessage:n,userId:e,partner:a,roomId:r,nickName:o})=>{const[i,l,s]=Ge(""),A=(0,t.useCallback)((t=>{t.preventDefault(),console.log(i),n(e,a,r,i),s("")}),[e,i]);return t.createElement("div",null,t.createElement(kl,null,t.createElement(Bl,null,t.createElement("h4",null,"닉네임")),t.createElement(Wl,null),t.createElement(jl,{chat:i,onChangeChat:l,onSubmitForm:A})))},Yl="conversation/NEWPARTNER",Vl="conversation/NEWMESSAGE",Ql="conversation/RECEIVED",Zl=n=>({type:Yl,payload:n}),Xl=[],$l=({userId:n,sendToMessage:e})=>{const a=fn((n=>n.conversation)),[r,o]=(0,t.useState)([]),[i,l]=(0,t.useState)(null),[s,A]=(0,t.useState)(null),[c,p]=(0,t.useState)(null),d=cn();(0,t.useEffect)((()=>{u()}),[]);const u=(0,t.useCallback)((()=>{Gr({url:`/users/chats/${n}`,method:"get"}).then((n=>{if("조회성공"===n.data.message){console.log(n.data.data),o(n.data.data);for(const t in n.data.data)d(Zl({partner:n.data.data[t].the_other_user_id,list:[n.data.data[t]]}))}}))}),[n]),f=(0,t.useCallback)(((n,t,e)=>{console.log(n,t,e),l(n),A(t),p(e)}),[]);return t.createElement("div",null,t.createElement(El,null,t.createElement(xl,null,t.createElement("h4",null,"채팅목록"),Object.keys(a).map((e=>t.createElement(wl,{key:e,partner:e,host:n,onClickMember:f,roomId:a[e][0].message_room_id,nickName:a[e][0].nick_name})))),t.createElement(Kl,{sendToMessage:e,userId:n,partner:i,roomId:s,nickName:c})))},ns=Xt.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 50px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;var ts=e(8410);const es=({userId:n})=>{const e=(0,t.useRef)(null);let a=["/topic/"+n];const[r,o]=(0,t.useState)([]),i=cn();return t.createElement(ns,null,t.createElement(ts.Z,{url:"/chat",topics:a,onConnect:()=>console.log("onConnect"),onDisconnect:()=>console.log("onDisconnect"),onMessage:n=>(n=>{console.log(n),i((n=>({type:Ql,payload:n}))(n))})(n),ref:e}),t.createElement($l,{userId:n,sendToMessage:(n,t,a,r)=>{const o={sender_id:n,receiver_id:t,message_room_id:a,content:r};e.current.sendMessage("/app/chat/send",JSON.stringify(o)),i((n=>({type:Vl,payload:n}))(o))}}))},as=()=>{const n=fn((n=>n.auth.user.user_id));return t.createElement("div",{style:{height:"100%"}},t.createElement(bl,null,t.createElement(me,null),t.createElement(es,{userId:n})),t.createElement(ke,null))},rs=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,os=Xt.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;

  & i {
    font-size: 30px;
    color: #0f4c81;
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
    &:hover {
      color: blue;
      text-decoration: none;
    }
    & > a {
      text-decoration: none;
    }
  }
`,is=Xt.h3`
  padding: 50px 30px;
  font-weight: bold;
`,ls=Xt.ul`
  list-style: none;
  margin-bottom: 34px;
  & li {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #6a6a6a;
    font-weight: 400;
    cursor: pointer;
    line-height: 52px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-bottom: 1px solid #0f4c81;
  }
  & li.on {
    background: #fff;
    color: #000;
    font-weight: bold;
    border: 1px solid #0f4c81;
    border-bottom: 1px solid #fff;
  }
`,ss=Xt.div`
  display: flex;
  flex-wrap: wrap;
`,As=Xt.div`
  margin-top: 20px;
  text-align: center;
  :after {
    content: '';
    display: block;
    clear: both;
  }
  & span.evt_title {
    max-height: 40px;
    width: 100%;
    font-size: 18px;
    color: #4b4b4b;
    line-height: 20px;
    margin: 20px 0 0;
    font-weight: bold;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }

  & em {
    display: block;
    font-size: 14px;
    text-align: center;
  }
  & div {
    width: 590px;
    height: 320px;
    margin-top: 70px;
  }
`,cs=({history:n,props:e})=>{const a=fn((n=>n.auth.user)).user_grade,[r,o]=(0,t.useState)(),[i,l]=(0,t.useState)(),[s,A]=(0,t.useState)(0);return(0,t.useEffect)((()=>{yn().get("/api/events",{withCredentials:!0}).then((n=>{const t=n.data.data.content;o(t)})).catch((n=>{console.log(n)}))}),[]),t.createElement("div",{style:{height:"100%"}},t.createElement(rs,null,t.createElement(me,null),t.createElement(os,null,t.createElement(is,null,"이벤트"),"ADMIN"===a?t.createElement(pe,{to:"/event/write"},t.createElement("i",{className:"fas fa-plus"})):null,t.createElement(ls,null,t.createElement("li",{className:"on"},"진행중인 이벤트"),t.createElement("li",{onClick:t=>{n.push("/event/end")}},"종료된 이벤트")),t.createElement(ss,null,r?.map(((n,e)=>t.createElement(ps,{key:e,item:n})))))),t.createElement(_r,null),t.createElement(ke,null))},ps=({item:n})=>{const{title:e,start_date:a,end_date:r,id:o}=n;return t.createElement(As,null,t.createElement("div",null,t.createElement(pe,{to:{pathname:`/event/now/${o}`}},t.createElement("img",{src:"/images/placeholder.png"})),t.createElement("span",{className:"evt_title"},e),t.createElement("em",{className:"evt_date"},a,"~",r)))},ds=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,us=Xt.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`,fs=Xt.div`
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 50px;
  padding-bottom: 50px;
  margin-top: 100px;
`,ms=Xt.div`
  text-align: center;

  & button {
    border: 1px solid #0f4c81;
    background-color: white;
    width: 144px;
    height: 42px;
    color: #0f4c81;
    cursor: pointer;
  }

  & button > a {
    text-decoration: none;
    color: #0f4c81;
  }
`,hs=Xt.div`
  float: right;
  & i {
    font-size: 25px;
    color: #ccc;
    cursor: pointer;
  }

  & .delete {
    margin-left: 10px;
    background-color: white;
    border: 0px;
    font-size: 35px;
    color: red;
    cursor: pointer;
  }

  & .delete:focus {
    border: none;
    outline: none;
  }
`,gs=Xt.h3`
  padding: 50px 30px;
  font-weight: bold;
`,bs=(Xt.ul`
  list-style: none;
  margin-bottom: 34px;
  & li {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #6a6a6a;
    font-weight: 400;
    cursor: pointer;
    line-height: 52px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-bottom: 1px solid #0f4c81;
  }
  & li.on {
    background: #fff;
    color: #000;
    font-weight: bold;
    border: 1px solid #0f4c81;
    border-bottom: 1px solid #fff;
  }
`,Xt.div`
  display: flex;
  flex-wrap: wrap;
`,Xt.div`
  margin-top: 20px;
  text-align: center;
  :after {
    content: '';
    display: block;
    clear: both;
  }
  & span.evt_title {
    max-height: 40px;
    width: 100%;
    font-size: 18px;
    color: #4b4b4b;
    line-height: 20px;
    margin: 20px 0 0;
    font-weight: bold;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }

  & em {
    display: block;
    font-size: 14px;
    text-align: center;
  }
  & div {
    width: 590px;
    height: 320px;
    margin-top: 70px;
  }
`,Xt.div`
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  /* width: 1920px;
  height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
`),Es=Xt.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,xs=Xt.button`
  border-radius: 3px;
  border: none;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  background: #900020;
  :hover {
    background-color: rgba(144, 0, 32, 0.8);
  }
`,vs=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,ys=Xt.form`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  height: 100%;

  & h5 {
    font-weight: bold;
  }
`,Cs=Xt.textarea`
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`,ws=Xt.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 350px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`,ks=Xt.div`
  & label {
    display: inline-block;
    width: 100px;
    height: 45px;
    background-color: #4a4a4a;
    color: #fff;
    cursor: pointer;
    line-height: 45px;
    border-radius: 5px;
    text-align: center;
  }

  & input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0); /* 클립에 범위만큼만 노출시킴 */
    overflow: hidden;
    padding: 0;
  }
`,Bs=Xt.div`
  border: 3px solid #939597;
  width: 800px;
  height: 720px;
  background-color: white;
  display: ${n=>n.editModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,Ds=n=>{const e=n.eventId,[a,r,o]=Ge(n.post.title),[i,l,s]=Ge(n.post.content),[A,c,p]=Ge(n.post.img_url),[d,u,f]=Ge(n.post.coupon_id);(0,t.useEffect)((()=>{o(n.post.title),s(n.post.content),p(n.post.img_url),f(n.post.coupon_id)}),[n]);const m=(0,t.useCallback)((t=>{t.preventDefault(),Gr({url:`/admin/events/${e}`,method:"patch",data:{title:a,content:i,img_url:"a",coupon_id:d}}).then((t=>{alert("수정되었습니다."),n.setSuccessEdit(!0)}))}),[e,a,i,A,d,n]),h=(0,t.useCallback)((t=>{t.preventDefault(),n.setEditModalOpen(!1)}),[n]);return t.createElement(t.Fragment,null,t.createElement(bs,{editModal:n.editModalOpen}),t.createElement(Bs,{editModal:n.editModalOpen},t.createElement(ys,{onSubmit:m},t.createElement("h5",null,"제목"),t.createElement(Cs,{id:"title",type:"text",placeholder:a,value:a,onChange:r}),t.createElement("h5",null,"내용"),t.createElement(ws,{id:"content",type:"text",placeholder:i,value:i,onChange:l}),t.createElement("h5",null,"이미지"),t.createElement(ks,null,t.createElement("label",{for:"file"},"첨부파일"),t.createElement("input",{type:"file",id:"file"})),t.createElement(Es,null,t.createElement(xs,{type:"submit"},"수정"),t.createElement(vs,{onClick:h},"닫기")))))},Is=Xt.div`
  display: ${n=>n.deleteModal?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`,zs=Xt.div`
  display: flex;
`,Fs=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,_s=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`,Ss=Xt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Os=Xt.div`
  font-size: 18px;
  font-weight: bold;
`,Ns=Xt.div`
  padding-top: 5px;
  font-size: 12px;
  color: #c4c4c4;
`,Ms=Xt.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${n=>n.deleteModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,Js=n=>{const e=(0,t.useCallback)((t=>{t.preventDefault(),yn().delete(`/api/admin/events/${n.eventId}`,{withCredentials:!0}).then((t=>{alert("삭제되었습니다."),n.setSuccessDelete(!0)})).catch((n=>{console.dir(n)}))}),[n]);return t.createElement(t.Fragment,null,t.createElement(Is,{deleteModal:n.deleteModalOpen}),t.createElement(Ms,{deleteModal:n.deleteModalOpen},t.createElement(Ss,{onClick:()=>{n.setDeleteModalOpen(!1)}},t.createElement(Os,null,"삭제하시겠습니까?"),t.createElement(Ns,null),t.createElement(zs,null,t.createElement(Fs,{onClick:()=>{n.setDeleteModalOpen(!1)}},"취소하기"),t.createElement(_s,{onClick:e},"삭제하기")))))},Gs=n=>{const e=fn((n=>n.auth.user)).user_grade,a=n.match.params.id,[r,o]=(0,t.useState)([]),[i,l]=(0,t.useState)(),[s,A]=(0,t.useState)(0),[c,p]=(0,t.useState)(),[d,u]=(0,t.useState)(),[f,m]=(0,t.useState)(),[h,g]=(0,t.useState)(),[b,E]=(0,t.useState)(!1),[x,v]=(0,t.useState)(!1),[y,C]=(0,t.useState)(!1),[w,k]=(0,t.useState)(!1);(0,t.useEffect)((()=>{yn().get(`/api/events/${a}`,{withCredentials:!0}).then((n=>{const t=n.data.data;o(t),u(t.content),m(t.start_date),g(t.end_date),p(t.title)})).catch((n=>{console.log(n)}))}),[]);const B=(0,t.useCallback)((n=>{n.preventDefault(),E(!0)}),[]),D=(0,t.useCallback)((n=>{n.preventDefault(),v(!0)}),[]);return y&&(E(!1),n.history.push(`/event/now/${a}`),window.location.reload(),C(!1)),w&&(v(!1),n.history.push("/event/now"),window.location.reload(),k(!1)),t.createElement("div",{style:{height:"100%"}},t.createElement(Js,{eventId:a,deleteModalOpen:x,setDeleteModalOpen:v,setSuccessDelete:k}),t.createElement(Ds,{eventId:a,post:r,editModalOpen:b,setEditModalOpen:E,setSuccessEdit:C}),t.createElement(ds,null,t.createElement(me,null),t.createElement(us,null,t.createElement(gs,null,"이벤트"),"ADMIN"===e?t.createElement(hs,null,t.createElement("i",{className:"far fa-edit",onClick:B,setEditModalOpen:E}),t.createElement("button",{className:"delete",onClick:D,setDeleteModalOpen:v},"×")):null,t.createElement(fs,null,t.createElement("h3",null,c),d,t.createElement("br",null),f,"~",h),t.createElement(ms,null,t.createElement(pe,{to:"/event/now"},t.createElement("button",null,"목록"))))),t.createElement(_r,null),t.createElement(ke,null))},Us=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,Rs=Xt.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`,js=Xt.h3`
  padding: 50px 30px;
  font-weight: bold;
`,Ts=Xt.ul`
  list-style: none;
  margin-bottom: 34px;
  & li {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #6a6a6a;
    font-weight: 400;
    cursor: pointer;
    line-height: 52px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-bottom: 1px solid #0f4c81;
  }
  & li.on {
    background: #fff;
    color: #000;
    font-weight: bold;
    border: 1px solid #0f4c81;
    border-bottom: 1px solid #fff;
  }
`,Ps=Xt.div`
  display: flex;
  flex-wrap: wrap;
`,qs=Xt.div`
  margin-top: 20px;
  text-align: center;
  :after {
    content: '';
    display: block;
    clear: both;
  }
  & span.evt_title {
    max-height: 40px;
    width: 100%;
    font-size: 18px;
    color: #4b4b4b;
    line-height: 20px;
    margin: 20px 0 0;
    font-weight: bold;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }

  & em {
    display: block;
    font-size: 14px;
    text-align: center;
  }
  & div {
    width: 590px;
    height: 320px;
    margin-top: 70px;
  }
`,Ls=()=>{const[n,e]=(0,t.useState)(),[a,r]=(0,t.useState)(),[o,i]=(0,t.useState)(0);return(0,t.useEffect)((()=>{yn().get("/api/end-events",{withCredentials:!0}).then((n=>{const t=n.data.data.content;console.log(t),e(t)})).catch((n=>{console.log(n)}))}),[]),t.createElement("div",{style:{height:"100%"}},t.createElement(Us,null,t.createElement(me,null),t.createElement(Rs,null,t.createElement(js,null,"이벤트"),t.createElement(Ts,null,t.createElement("li",{onClick:n=>{window.location.replace("/event/now")}},"진행중인 이벤트"),t.createElement("li",{className:"on"},"종료된 이벤트")),t.createElement(Ps,null,n?.map(((n,e)=>t.createElement(Hs,{key:e,item:n})))))),t.createElement(_r,null),t.createElement(ke,null))},Hs=({item:n})=>{const{title:e,start_date:a,end_date:r,id:o}=n;return t.createElement(qs,null,t.createElement("div",null,t.createElement("img",{src:"/images/placeholder.png"}),t.createElement("span",{className:"evt_title"},e),t.createElement("em",{className:"evt_date"},a,"~",r)))},Ws=Xt.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 0px;
  width: 1200px;
`,Ks=Xt.h3`
  padding: 50px 30px;
  font-weight: bold;
`,Ys=Xt.div`
  margin-left: 30px;
  margin-right: 30px;
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
  font-size: 17px;
  color: #4a4a4a;
  font-weight: bold;
  & div {
    margin-bottom: 20px;
  }

  & .react-datepicker-wrapper {
    height: 0px;
  }

  & button.date-input {
    margin-left: 15px;
    border: 1px solid #ced4da;
    width: 240px;
    height: 30px;
    border-radius: 3px;
    background-color: white;
  }

  & span {
    color: #ced4da;
    margin: 5px 20px;
    font-size: 20px;
  }

  & div#content {
    margin-top: 20px;
  }

  & .file label {
    display: inline-block;
    width: 100px;
    height: 45px;
    background-color: #4a4a4a;
    color: #fff;
    cursor: pointer;
    line-height: 45px;
    border-radius: 5px;
    text-align: center;
  }

  & .file input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0); /* 클립에 범위만큼만 노출시킴 */
    overflow: hidden;
    padding: 0;
  }
`,Vs=Xt.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 35px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;
  resize: none;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Qs=Xt.textarea`
  resize: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 12px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 300px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`,Zs=Xt.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }

  & > a {
    text-decoration: none;
    color: white;
  }
`,Xs=Xt.select`
  border-radius: 3px;
  border: 1px solid #ced4da;
  height: 30px;
  margin-left: 15px;
`;var $s=e(9198),nA=e.n($s),tA={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},eA=e(9526);const aA={date:(0,eA.Z)({formats:{full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},defaultWidth:"full"}),time:(0,eA.Z)({formats:{full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,eA.Z)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var rA={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},oA=e(8486);const iA={ordinalNumber:function(n,t){var e=Number(n);switch(String((t||{}).unit)){case"minute":case"second":return e;case"date":return e+"일";default:return e+"번째"}},era:(0,oA.Z)({values:{narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},defaultWidth:"wide"}),quarter:(0,oA.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},defaultWidth:"wide",argumentCallback:function(n){return Number(n)-1}}),month:(0,oA.Z)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},defaultWidth:"wide"}),day:(0,oA.Z)({values:{narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},defaultWidth:"wide"}),dayPeriod:(0,oA.Z)({values:{narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},defaultWidth:"wide",formattingValues:{narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},defaultFormattingWidth:"wide"})};var lA=e(974),sA=e(6723);const AA={code:"ko",formatDistance:function(n,t,e){var a;return e=e||{},a="string"==typeof tA[n]?tA[n]:1===t?tA[n].one:tA[n].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?a+" 후":a+" 전":a},formatLong:aA,formatRelative:function(n,t,e,a){return rA[n]},localize:iA,match:{ordinalNumber:(0,lA.Z)({matchPattern:/^(\d+)(일|번째)?/i,parsePattern:/\d+/i,valueCallback:function(n){return parseInt(n,10)}}),era:(0,sA.Z)({matchPatterns:{narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(bc|기원전)/i,/^(ad|서기)/i]},defaultParseWidth:"any"}),quarter:(0,sA.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:(0,sA.Z)({matchPatterns:{narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,sA.Z)({matchPatterns:{narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},defaultMatchWidth:"wide",parsePatterns:{any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},defaultParseWidth:"any"}),dayPeriod:(0,sA.Z)({matchPatterns:{any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var cA=e(6721);ur()(cA.Z,{insert:"head",singleton:!1}),cA.Z.locals;const pA=({setSuccessWrite:n})=>{const e=fn((n=>n.auth.user)),a=Q(),r=({value:n,onClick:e})=>t.createElement("button",{className:"date-input",onClick:e},n),[o,i]=(0,t.useState)([null,null]),[l,s]=o,[A,c]=Ge(""),[p,d]=Ge(""),[u,f]=Ge(""),[m,h]=(0,t.useState)(),[g,b]=(0,t.useState)(),[E,x]=(0,t.useState)();return(0,t.useEffect)((()=>{Gr({url:"/admin/events/coupons",method:"get"}).then((n=>{h(n.data.data)})).catch((n=>{console.dir(n)}))}),[]),t.createElement("div",null,t.createElement(Ws,null,t.createElement(Ks,null,"이벤트 게시글 작성"),t.createElement(Ys,null,t.createElement("div",{id:"title"},"제목",t.createElement(Vs,{id:"title",name:"title",placeholder:"제목을 입력해주세요.",onChange:c,value:A})),t.createElement("div",{id:"coupon_id"},"쿠폰",t.createElement(Xs,{onChange:n=>{const{value:t}=n.target;x(t)},value:g},t.createElement("option",null,"선택"),m&&m.map(((n,e)=>t.createElement(t.Fragment,{key:e},t.createElement("option",{value:n.coupon_id},n.coupon_name)))))),t.createElement("div",{className:"date"},"기간",t.createElement(nA(),{fixedHeight:!0,selectsRange:!0,startDate:l,endDate:s,onChange:n=>i(n),locale:AA,dateFormat:"yyyy-MM-dd",placeholderText:"이벤트 날짜 선택",isClearable:!0,customInput:t.createElement(r,null)})),t.createElement("div",{id:"content"},"내용",t.createElement(Qs,{id:"content",name:"content",placeholder:"내용을 입력해주세요.",onChange:d,value:p})),t.createElement("div",{className:"file"},t.createElement("label",{for:"file"},"첨부파일"),t.createElement("input",{type:"file",id:"file"})),t.createElement(Zs,{type:"submit",onClick:t=>{if(console.log(e.user_id),A.length&&A.trim().length)if(p.length&&p.trim().length){let t={content:p,title:A,img_url:u,coupon_id:E,start_date:o[0],end_date:o[1]};Gr({url:"/admin/events",method:"post",data:t}).then((t=>{alert("성공적으로 작성되었습니다."),n(!0),a.push("/event/now")})).catch((n=>{console.dir(n)}))}else alert("내용을 작성해주세요.");else alert("제목을 작성해주세요.")}},"작성하기"))))},dA=n=>{const[e,a]=(0,t.useState)(!1);return e&&(n.history.push("/event/now"),window.location.reload(),a(!1)),t.createElement("div",{style:{height:"100%"}},t.createElement(wi,null,t.createElement(me,null),t.createElement(Ci,null,t.createElement(pA,{setSuccessWrite:a}))),t.createElement(ke,null))},uA=Xt.div`
  margin-top: 40px;
  width: 220px;
  background-color: #fff;

  & h2 {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    margin: 0;
    margin-bottom: 20px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    overflow: auto;
  }

  & li {
    height: 40px;
    width: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 40px;
  }

  & a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
  }

  & li.select {
    background-color: #000000;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
    cursor: pointer;
  }

  & li:last-child {
  }
`,fA=Xt.div`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  color: ${n=>n.isActive?"#ffffff":"#000000"};
  background-color: ${n=>n.isActive?"#000":"#fff"};
  :hover {
    background-color: #000000;
    color: white;
  }
`,mA=()=>{const n=window.location.pathname,e=Q();return t.createElement(uA,null,t.createElement("h2",null,"관리자 페이지"),t.createElement("ul",null,t.createElement(fA,{isActive:!n.includes("/admin/month")},t.createElement("li",{onClick:n=>{e.push("/admin"),window.location.reload()}},"회원 관리")),t.createElement(fA,{isActive:n.includes("/admin/month")},t.createElement("li",{onClick:n=>{e.push("/admin/monthly"),window.location.reload()}},"월별 회원가입 수"))))},hA=Xt.div`
  display: ${n=>n.checkModal?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.6);
`,gA=Xt.div`
  display: flex;
`,bA=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`,EA=Xt.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 100px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`,xA=Xt.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`,vA=Xt.div`
  font-size: 18px;
  font-weight: bold;
`,yA=Xt.div`
  padding-top: 5px;
  font-size: 12px;
  color: #c4c4c4;
`,CA=Xt.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${n=>n.checkModal?"block":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`,wA=({userId:n,...e})=>{console.log(n);const a=(0,t.useCallback)((t=>{t.preventDefault(),Gr({url:`/admin/bkuser/delete/${n}`,method:"delete"}).then((n=>{alert("탈퇴되었습니다."),e.setSuccessDelete(!0)}))}),[n,e]);return t.createElement(t.Fragment,null,t.createElement(hA,{checkModal:e.deleteModalOpen}),t.createElement(CA,{checkModal:e.deleteModalOpen},t.createElement(xA,null,t.createElement(vA,null,"탈퇴시키겠습니까?"),t.createElement(yA,null),t.createElement(gA,null,t.createElement(bA,{onClick:()=>{e.setDeleteModalOpen(!1)}},"취소하기"),t.createElement(EA,{onClick:a},"탈퇴하기")))))},kA=Xt.table`
  width: 900px;
  border-collapse: collapse;
  margin-top: 12px;
`,BA=Xt.thead`
  border: 0px;
  border-bottom: 1px solid #000;
  text-align: center;
  & th {
    border: 0px;
    padding: 5px;
    height: 60px;
    font-size: 15px;
    color: #000;
    width: 110px;
  }

  & th.textNo {
    width: 150px;
  }

  & th.title {
    width: 850px;
  }
`,DA=Xt.tbody`
  height: 60px;
  text-align: center;

  & tr {
    height: 60px;
    :hover {
      background-color: #e4e2e2;
    }
  }

  & td {
    border-bottom: 1px solid #939597;
  }

  & td.delete {
    color: red;
    font-weight: bold;
    cursor: pointer;
  }
`,IA=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,zA=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-bottom: 100px;
`,FA=Xt.div`
  margin-left: 70px;
  margin-top: 100px;
`,_A=Xt.div`
  display: flex;
  justify-content: flex-end;

  & i {
    position: absolute;
    font-size: 16px;
    color: #000000;
    top: 110px;
    right: 15px;
    z-index: 2;
    cursor: pointer;
  }

  & select {
    border-color: #000000;
    color: #000000;
    border-radius: 3px;
    margin-right: 10px;
  }

  & input {
    width: 298px;
    height: 34px;
    border: 1px solid #939597;
    border-radius: 3px;
  }
`,SA=function(n){return 11==n.length?n.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"):8==n.length?n.replace(/(\d{4})(\d{4})/,"$1-$2"):0==n.indexOf("02")?n.replace(/(\d{2})(\d{4})(\d{4})/,"$1-$2-$3"):n.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")},OA=()=>{const[n,e]=(0,t.useState)(0),[a,r]=(0,t.useState)(0),[o,i]=(0,t.useState)(!1),[l,s]=(0,t.useState)(!1),[A,c]=(0,t.useState)(),[p,d]=(0,t.useState)([]),[u,f]=(0,t.useState)(),[m,h]=(0,t.useState)(),[g,b]=Ge(""),E=Q();(0,t.useEffect)((()=>{x(a)}),[]);const x=n=>{yn().get("/api/admin/user/list",{withCredentials:!0,params:{page:n-1}}).then((n=>{const t=n.data.data.content;d(t),e(n.data.pagination.total_elements),r(n.data.pagination.current_page)}))};return l&&(i(!1),E.push("/admin"),window.location.reload(),s(!1)),t.createElement("div",{style:{height:"100%"}},t.createElement(wA,{deleteModalOpen:o,setDeleteModalOpen:i,setSuccessDelete:s,userId:A}),t.createElement(IA,null,t.createElement(me,null),t.createElement(zA,null,t.createElement(mA,null),t.createElement(FA,null,t.createElement(_A,null,t.createElement("select",{onChange:n=>{const{value:t}=n.target;h(t)},value:u},t.createElement("option",null,"선택"),t.createElement("option",{value:"email-search"},"이메일"),t.createElement("option",{value:"grade-search"},"유저 등급"),t.createElement("option",{value:"name-search"},"이름"),t.createElement("option",{value:"nick-search"},"닉네임")),t.createElement("i",{className:"fas fa-search",onClick:n=>{yn().get(`/api/admin/user/${m}/${g.toUpperCase()}`,{withCredentials:!0}).then((n=>{const t=n.data.data.content;d(t)})).catch((n=>{console.log(n)}))}}),t.createElement("input",{placeholder:"검색어를 입력해주세요.",onChange:b,value:g})),t.createElement(kA,null,t.createElement(BA,null,t.createElement("tr",null,t.createElement("th",null,"이메일"),t.createElement("th",null,"이름"),t.createElement("th",null,"닉네임"),t.createElement("th",null,"휴대폰"),t.createElement("th",null,"가입날짜"),t.createElement("th",null,"유저 등급"),t.createElement("th",null,"탈퇴"))),t.createElement(DA,null,p&&p.map(((n,e)=>t.createElement(NA,{key:e,item:n,deleteModalOpen:o,setDeleteModalOpen:i,setSuccessDelete:s,setUserId:c,history:E,formatPhoneNumber:SA}))))))),t.createElement("div",{style:{marginLeft:"150px"}},t.createElement(_r,{totalElements:n,currentPage:a,handlePageChange:x}))),t.createElement(ke,null))},NA=({item:n,setDeleteModalOpen:e,setUserId:a,history:r,formatPhoneNumber:o})=>{const{user_id:i,email:l,name:s,phone_number:A,nick_name:c,user_grade:p,created_at:d}=n,[u,f]=(0,t.useState)(),[m,h]=(0,t.useState)();let g;A&&(g=o(A));const b=(0,t.useCallback)((n=>{n.preventDefault(),e(!0),a(i)}),[]),E=(0,t.useCallback)((n=>{const{value:t}=n.target;n.preventDefault(),Gr({url:`/admin/user/change-grade/${i}`,method:"patch",data:{user_grade:t}}).then((n=>{alert("수정되었습니다."),window.location.reload(),r.push("/admin")}))}),[i]),x=()=>t.createElement("select",{onChange:E,value:u},t.createElement("option",null,p),t.createElement("option",{value:"BLACK"},"BLACK")),v=()=>t.createElement("select",{onChange:E,value:u},t.createElement("option",null,p),t.createElement("option",{value:"USER"},"USER"));return t.createElement(t.Fragment,null,t.createElement("tr",null,t.createElement("td",null,l),t.createElement("td",null,s),t.createElement("td",null,c),t.createElement("td",null,g),t.createElement("td",null,d),"USER"===p?t.createElement("td",null,t.createElement(x,null)):"BLACK"===p?t.createElement("td",null,t.createElement(v,null)):t.createElement("td",null,p),"BLACK"===p?t.createElement("td",{className:"delete",onClick:b},"탈퇴"):t.createElement("td",null)))},MA=Xt.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`,JA=Xt.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-bottom: 100px;
`,GA=Xt.div`
  margin-left: 70px;
  margin-top: 100px;
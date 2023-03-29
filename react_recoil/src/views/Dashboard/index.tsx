import React, { memo, useEffect, useState, useRef } from 'react';
interface Props {
}
const View: React.FC<Props> = (props) => {
    return (
      <React.Fragment>
        <div className="iconfont icon-152error40401">dsafasdfa</div>
      </React.Fragment>

    )
}
export default View;



// import React, { memo, useEffect, useState, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// interface Props {
// }
// const View: React.FC = (props: Props) => {
//   let timer = useRef<any>();
//   let timer2 = useRef<any>();
//   let pop = useRef<any>();
//   const [popList, setPopList] = useState({
//     left: 120,
//     top: 0,
//     display: 'none'
//   });
//   const showStopPopList = () => {
//     if (timer.current) {
//       clearInterval(timer.current);
//       timer.current = null
//     }
//   }
//   const showPopList = (e: any) => {
//     let pageHeight = document.documentElement.scrollHeight;
//     let tagHeight = e.target.offsetTop;
//     let popHeight = pop.current.offsetHeight;
//     let top = e.target.offsetTop;
//     console.log(pageHeight,tagHeight,popHeight)
//     if ( pageHeight - tagHeight < popHeight ) {
//       top = pageHeight - popHeight;
//     }
//     showStopPopList();
//     setPopList((popList)=>{
//       return {
//         ...popList,
//         display: 'block',
//         top: top,
//       }
//     });
//   };
//   const hidePopList = () => {
//     if (!timer.current) {
//       timer.current = setTimeout(()=>{
//         setPopList((popList)=>{
//           return {
//             ...popList,
//             display: 'none',
//           }
//         });
//       },300)
//     }
//   }
//   return (
//     <React.Fragment>
//       <header className="header"></header>
//       <section className="main">
//         <aside className="main_left">
//           <div className="left_menu">
//             <div className="bd">
//               <ul>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-gailan1"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye1"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye2"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-keaide"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="dashboard" className="title"><i className="iconfont icon-gailan1"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-yonghu"></i>用户</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye2"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-keaide"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye1"></i>概览</NavLink></li>
//               </ul>
//               <div className="menu_line"></div>
//               <ul>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye2"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-keaide"></i>概览</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye1"></i>概览</NavLink></li>
//               </ul>
//               <div className="menu_line"></div>
//               <ul>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-fuwu"></i>服务</NavLink></li>
//                 <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shezhi"></i>设置</NavLink></li>
//               </ul>
//             </div>
//             <div className="ft"></div>
//           </div>
//           <div className="right_menu">
//             <div className="dl_list">
//               <dl>
//                 <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
//                 <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
//                 <dd><NavLink to="">售后订单</NavLink></dd>
//                 <dd><NavLink to="">我的业绩订单</NavLink></dd>
//                 <dd><NavLink to="">业绩下单</NavLink></dd>
//               </dl>
//               <dl>
//                 <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-shangla"></i></dt>
//                 <dd><NavLink to="">代理商品订单</NavLink></dd>
//                 <dd><NavLink to="">售后订单</NavLink></dd>
//                 <dd><NavLink to="">我的业绩订单</NavLink></dd>
//                 <dd><NavLink to="">业绩下单</NavLink></dd>
//               </dl>
//             </div>
//           </div>
//         </aside>
//         <article className="main_right"></article>
//       </section>
//       <div className="popbox"
//       ref={pop}
//       style={{ ...popList }}
//       onMouseOver={showStopPopList}
//       onMouseOut={hidePopList}
//       >
//         <div className="pop_list">
//           <dl>
//             <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
//             <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
//             <dd><NavLink to="">售后订单</NavLink></dd>
//             <dd><NavLink to="">我的业绩订单</NavLink></dd>
//             <dd><NavLink to="">业绩下单</NavLink></dd>
//           </dl>
//           <dl>
//             <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
//             <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
//             <dd><NavLink to="">售后订单</NavLink></dd>
//             <dd><NavLink to="">我的业绩订单</NavLink></dd>
//             <dd><NavLink to="">业绩下单</NavLink></dd>
//           </dl>
//           <dl>
//             <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
//             <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
//             <dd><NavLink to="">售后订单</NavLink></dd>
//             <dd><NavLink to="">我的业绩订单</NavLink></dd>
//             <dd><NavLink to="">业绩下单</NavLink></dd>
//           </dl>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }
// export default memo(View);

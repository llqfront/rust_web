import React, { memo, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { menuData, menuChildData } from '@/static/MenuData/';
import PopBox from './popbox';
interface Props {
  children?: any;
}

const Com: React.FC<Props> = (props) => {
  const { children } = props;
  // console.log(children)
  let timer = useRef<any>();
  let popRef = useRef<any>(null);



  const kindChildData = ( data: any ) => {
    return data.map( ( item: any, index: number ) => {
      return (
        <li
        key={index}
        onMouseOver={(e)=>{
          showPopList(e, item.page)
        }}
        onMouseOut={hidePopList}
        >
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? 'title active' : 'title'
            }
            to={item.url}
            >
            <i className={`iconfont ${item.icon}`}></i>
            {item.title}
            </NavLink>
        </li>
      )
    })
  }


  const kindData = () => {
    return menuData.map( ( item, index ) => {
      return (
        <React.Fragment key={index}>
          {
            index !== 0 && <div className="menu_line"></div>
          }
          <ul>
            {kindChildData(item)}
          </ul>
        </React.Fragment>
      )
    })
  }


  const [popList, setPopList] = useState({
    left: 120,
    top: 0,
    display: 'none'
  });
  const showStopPopList = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null
    }
  }
  const showPopList = (e: any, page: string) => {
    let pageHeight = document.documentElement.scrollHeight;
    let tagHeight = e.target.offsetTop;
    let popHeight = 396;
    if ( popRef.current ) {
      popHeight = popRef.current.offsetHeight
    }
    let top = e.target.offsetTop;
    // console.log(pageHeight,tagHeight,popHeight)
    if ( pageHeight - tagHeight < popHeight ) {
      top = pageHeight - popHeight;
    }
    showStopPopList();
    setPopList((popList)=>{
      return {
        ...popList,
        display: 'block',
        top: top,
      }
    });
  };
  const hidePopList = () => {
    if (!timer.current) {
      timer.current = setTimeout(()=>{
        setPopList((popList)=>{
          return {
            ...popList,
            display: 'none',
          }
        });
      },300)
    }
  }
  return (
    <React.Fragment>
      <header className="header"></header>
      <section className="main">
        <aside className="main_left">
          <div className="left_menu">
            <div className="bd">
              {kindData()}
              {
                /**
                 *
                 * <ul>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink exact to="/service/dashboard" className="title"><i className="iconfont icon-gailan1"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-gailan1"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye1"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye2"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-keaide"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-shouye2"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-keaide"></i>概览</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="login" className="title"><i className="iconfont icon-hulianwangyingxiao-"></i>运营</NavLink></li>
              </ul>
              <div className="menu_line"></div>
              <ul>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="/service/member" className="title"><i className="iconfont icon-yonghu"></i>用户</NavLink></li>
              </ul>
              <div className="menu_line"></div>
              <ul>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink exact to="/service/dashboard/shop-pv" className="title"><i className="iconfont icon-shuju"></i>数据</NavLink></li>
              </ul>
              <div className="menu_line"></div>
              <ul>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="/service/prodservice" className="title"><i className="iconfont icon-fuwu"></i>服务</NavLink></li>
                <li onMouseOver={showPopList} onMouseOut={hidePopList}><NavLink to="/service/setting" className="title"><i className="iconfont icon-shezhi"></i>设置</NavLink></li>
              </ul>
                 */
              }
            </div>
            <div className="ft"></div>
          </div>
          <div className="right_menu">
            <div className="dl_list">
              <dl>
                <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
                <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
                <dd><NavLink to="">售后订单</NavLink></dd>
                <dd><NavLink to="">我的业绩订单</NavLink></dd>
                <dd><NavLink to="">业绩下单</NavLink></dd>
              </dl>
              <dl>
                <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-shangla"></i></dt>
                <dd><NavLink to="">代理商品订单</NavLink></dd>
                <dd><NavLink to="">售后订单</NavLink></dd>
                <dd><NavLink to="">我的业绩订单</NavLink></dd>
                <dd><NavLink to="">业绩下单</NavLink></dd>
              </dl>
            </div>
          </div>
        </aside>
        <article className="main_right">
          {children}
        </article>
      </section>
      <PopBox
          ref={popRef}
          popStyle={popList}
          showStopPopList={showStopPopList}
          hidePopList={hidePopList}
      />
    </React.Fragment>
  )
}
export default memo(Com);

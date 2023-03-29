import React, { memo } from 'react';
import { lazy } from '@loadable/component';
import { NavLink } from 'react-router-dom';
const HeaderOther = lazy(() => import('@com/HeaderOther'));
interface Props {
}
const View: React.FC = (props: Props) => {

    return (
      <React.Fragment>
        <div className="login_reg_bg">
          <HeaderOther/>
          <div className="login">
              <h4>密码登录</h4>
              <ul className="from_con">
                <li>
                  <label>用户名：</label>
                  <div className="label_ctrl">
                   <input className="inp" 
                   type="text" 
                   placeholder="请输入用户名"
                   value=""/>
                  </div>
                </li>
                <li>
                  <label>密<em>空</em>码：</label>
                  <div className="label_ctrl">
                   <input className="inp" 
                   type="text" 
                   placeholder="请输入密码"
                   value=""/>
                  </div>
                </li>
                <li className="sp">
                  <div className="label_ctrl">
                   <input className="btn" 
                   type="button" 
                   value="登录"/>
                  </div>
                </li>
                <li className="other">
                  <p>
                    <NavLink to="register">免费注册</NavLink>
                  </p>
                  <p>
                    <NavLink to="/">忘记密码</NavLink>
                  </p>
                </li>
              </ul>
          </div>
        </div>
      </React.Fragment>
    )
}
export default memo(View);

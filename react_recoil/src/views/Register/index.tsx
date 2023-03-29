import React, { memo } from 'react';
import { lazy } from '@loadable/component';
import { NavLink } from 'react-router-dom';
const HeaderOther = lazy(() => import('@com/HeaderOther'));
interface Props {
}
const View: React.FC<Props> = (props) => {

    return (
      <React.Fragment>
        <div className="login_reg_bg">
          <HeaderOther/>
          <div className="register">
              <h4>用户注册</h4>
              <ul className="from_con">
                <li>
                  <label>手机号：</label>
                  <div className="label_ctrl">
                    <span>+86</span>
                    <input className="inp"
                    type="text"
                    placeholder="请输入手机号"
                    value=""/>
                  </div>
                </li>
                <li>
                  <label>验证码：</label>
                  <div className="label_ctrl">
                    <input className="inp inp_sp"
                    type="text"
                    placeholder="请输入验证码"
                    value=""/>
                    <input className="btn2"
                    type="button"
                    value="获取验证码"/>
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
                <li>
                  <label>确认密码：</label>
                  <div className="label_ctrl">
                   <input className="inp"
                   type="text"
                   placeholder="请输入确认密码"
                   value=""/>
                  </div>
                </li>
                <li>
                  <label>邀请码：</label>
                  <div className="label_ctrl">
                   <input className="inp"
                   type="text"
                   placeholder="请输入邀请码"
                   value=""/>
                  </div>
                </li>
                <li className="sp">
                  <div className="label_ctrl">
                    <input className="btn"
                    type="button"
                    value="注册"/>
                  </div>
                </li>
                <li className="other2">
                  <p>
                    已有账号?
                    <NavLink to="login">立即登录</NavLink>
                  </p>
                </li>
              </ul>
          </div>
        </div>
      </React.Fragment>
    )
}
export default memo(View);

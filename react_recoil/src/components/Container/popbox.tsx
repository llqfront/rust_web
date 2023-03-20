import React, { memo, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

// import { useRef } from 'react';

// function MyInput(props) {
//   return <input {...props} />;
// }

// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });


// export default function MyForm() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

interface Props {
  popStyle: any;
  showStopPopList: () => void;
  hidePopList: () => void;
}
// const Com: React.FC<Props> = forwardRef<HTMLDivElement, Props>(( props, popRef ) => {
const Com  = ( props: Props, ref: any ) => {
  const {
    popStyle,
    showStopPopList,
    hidePopList
  } = props;
  return (
    <div className="popbox"
      ref={ref}
      style={{ ...popStyle }} 
      onMouseOver={showStopPopList}
      onMouseOut={hidePopList}
      >
        <div className="pop_list">
          <dl>
            <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
            <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
            <dd><NavLink to="">售后订单</NavLink></dd>
            <dd><NavLink to="">我的业绩订单</NavLink></dd>
            <dd><NavLink to="">业绩下单</NavLink></dd>
          </dl>
          <dl>
            <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
            <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
            <dd><NavLink to="">售后订单</NavLink></dd>
            <dd><NavLink to="">我的业绩订单</NavLink></dd>
            <dd><NavLink to="">业绩下单</NavLink></dd>
          </dl>
          <dl>
            <dt><NavLink to="">订单管理</NavLink><i className="iconfont icon-xiala"></i></dt>
            <dd className="cur"><NavLink to="">代理商品订单</NavLink></dd>
            <dd><NavLink to="">售后订单</NavLink></dd>
            <dd><NavLink to="">我的业绩订单</NavLink></dd>
            <dd><NavLink to="">业绩下单</NavLink></dd>
          </dl>
        </div>
      </div>
  )
}
// })
// export default memo(Com);
export default memo(forwardRef(Com));
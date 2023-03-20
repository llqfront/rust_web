import React, { memo } from 'react';
import Children from './Children';
import Inp from "@/islands/Form/Inp";
interface Props {
}

const View: React.FC<Props> = (props) => {

    return (
      <React.Fragment>
          Home page
          <br/>
          <Inp/>
          <br />
          这是子组件Child
          <br/>
          <Children/>
      </React.Fragment>
    )
}
export default memo(View);

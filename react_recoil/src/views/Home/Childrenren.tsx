import React, { memo,useContext } from 'react';
import { TestContext } from "@/hooks/useHome";
interface Props {
}

const View: React.FC<Props> = (props) => {
    const {
        test
    } = useContext(TestContext);
    return (
      <React.Fragment>
          这是子子组件Children ren

          -----
           <br/>
        {test}
          <br/>
           -----
      </React.Fragment>
    )
}
export default memo(View);

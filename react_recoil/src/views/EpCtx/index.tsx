import React, { memo } from "react";
import { createCtx } from "@com/CreateCtx/index";
/**
* 创建上下文和提供者的助手，没有预先的默认值，并且
* 无需一直检查未定义。
*/
interface Props {
}

// 用法：
// 我们仍然需要指定一个类型，但没有默认值！

const [useCurrentUserName, CurrentUserProvider] = createCtx<string>();
// const [useCurrentUserName, CurrentUserProvider] = createCtx<string>();
function EnthusasticGreeting() {
  const currentUser = useCurrentUserName();
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}
const View: React.FC<Props> = (props) => {
    return (
      <>
        dddd
        <CurrentUserProvider value="Anders">
          <EnthusasticGreeting />
        </CurrentUserProvider>
      </>
    )
}
export default memo(View);

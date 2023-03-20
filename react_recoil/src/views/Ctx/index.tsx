import React, { memo, createContext, useContext } from "react";
/**
* 创建上下文和提供者的助手，没有预先的默认值，并且
* 无需一直检查未定义。
*/
interface Props {
}
function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' 使 TypeScript 推断出一个元组
}
// 用法：
// 我们仍然需要指定一个类型，但没有默认值！
export const [useCurrentUserName, CurrentUserProvider] = createCtx<string>();
function EnthusasticGreeting() {
  const currentUser = useCurrentUserName();
  return <div>HELLO {currentUser.toUpperCase()}!</div>;
}

const View: React.FC<Props> = (props) => {
    return (
      <CurrentUserProvider value="Anders">
        <EnthusasticGreeting />
      </CurrentUserProvider>
    )
}
export default memo(View);

import React, { memo,useContext,useReducer } from 'react';import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "@/stores/index";
import { TestContext } from "@/hooks/useHome";
interface Props {
}

//	reducer 计数器
const initialState = {count: 0};
type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

const reducer = ( state: typeof initialState, action: ACTIONTYPE ) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload };
    case 'decrement':
      return {count: state.count - Number(action.payload)};
    default:
      throw new Error();
  }
};
const IsLand: React.FC = (props: Props) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const {
        setTest
    } = useContext(TestContext);
    const [text, setText] = useRecoilState(textState);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      setTest(event.target.value)
    };
    return (
      <React.Fragment>
        <input type="text" value={text} onChange={onChange} />


        Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement', payload: "5" })}>-</button>
      <button onClick={() => dispatch({type: 'increment', payload: 5 })}>+</button>
      </React.Fragment>
    )
}
export default IsLand;

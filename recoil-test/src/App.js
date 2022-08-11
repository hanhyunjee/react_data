import React from 'react'
import {
  RecoilRoot,atom,useRecoilState,
} from "recoil";

const countState = atom({
  key: "countState",
  // 기본값 0
  default: 0,
});

function App() {
  return (
      <RecoilRoot>
          <Counter></Counter>
      </RecoilRoot>
  );
}

function Counter() {
   const [count, setCount] = useRecoilState(countState);

   const addCount = () => {
     setCount(count + 1);
   };

   const subCount = () => {
     setCount(count - 1);
   }

   return (
     <div>
       <button onClick={addCount}>더하기</button>
       <button onClick={subCount}>빼기</button>
       <p>{count}</p>
     </div>
   )
}

export default App;
import React from "react";
import { add, sub,div,mult} from './Calc'

function App() {
  return (
    <>
      <ul>
      <li>Sum of Numbers is {add(20, 30)}</li>
      <li>Difference of Two numbers is{sub(40, 10)}</li>
      <li>Division of two Numbers is {div(15, 3)}</li>
      <li>Multiplication of two Numbers is {mult(4, 9)}</li>
    </ul>
    </>
  );
}

export default App;

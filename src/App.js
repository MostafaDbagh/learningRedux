import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from './actions';
 function App() {
   const count = useSelector((state)=>state.myreducer)
   const dispatch = useDispatch()
  return (
    <div className="App">
<button onClick={dispatch(increment())}>increment</button>
{count}
<button onClick={dispatch(decrement())}>decrement</button>


    </div>
  );
}

export default App;



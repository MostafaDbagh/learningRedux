import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
 import counteraction from './action/counter';
 import useraction from './action/user';

 function App() {
  const counter = useSelector(state => console.log(state.safi))
   const currentUser = useSelector(state =>console.log(state.reem) )

   const dispatch = useDispatch()
   const user = {name: "Rei"}

   useEffect(() => {
     dispatch(useraction.setUser(user))
   }, [])
  return (

<div className="App">
 
{/* {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(useraction.logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(useraction.setUser(user))}>Login as Rei</button>
        </>
        } */}

    </div>
  );
}

export default App;



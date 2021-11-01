import './style/App.css';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/action/actions'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  const users = useSelector(state => state.user.users)
  // Add loading
  // USEMEMO , USECALLBACK

  return (
    //USE GRAPHQL CLIENT
    <div className="App">
      {users ? <div>
        Users:{users.map((user => (<div className="card">
          <div className="name">{user.name}({user.username})</div>
          <div className="email">{user.email}</div>
          <div className="email"><a href={`tel:${user.phone}`}>Call</a></div>
        </div>)))}
      </div> : "No User Found"}
    </div>
  );
}

export default App;

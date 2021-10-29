import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFetch } from './actions'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.myFirstReducer.users)
  useEffect(() => { }, [])

  return (
    <div className="App">
      <button onClick={() => { console.log('vfdvd'); dispatch(getUsersFetch()) }}>Get Users</button>
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

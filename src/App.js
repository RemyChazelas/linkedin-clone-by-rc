import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Feed from './components/Feed';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/userSlice';
import { auth } from '../src/firebase_example';
// import Widgets from './components/Widgets';
import './styles/App.css';

function App() {


  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in.
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          }))
      }
      else {
        // User is logged out.
        dispatch(logout())
      }
    })
  }, [])


  return (
    <div className="App">

      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          {/* <Feed/>
        <Widgets/> */}
        </div>
      )}


    </div>
  );
}

export default App;

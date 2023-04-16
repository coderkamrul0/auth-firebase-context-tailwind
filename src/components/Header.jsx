import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {user && <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>}
        <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogOut} className="btn btn-sm">Sign Out</button>
          </> : <Link to='/login'>Login</Link>
 
        }
      </div>
    </div>
  );
};

export default Header;

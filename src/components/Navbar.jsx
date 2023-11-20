import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='containerWrap flex justify-between'>
        <a className='btn btn-ghost text-xl'>Thrive Chat</a>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ''}
      </div>
    </div>
  );
};

export default Navbar;

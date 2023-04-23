import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    alert("Successfully Logged Out");
    navigate("/auth");
  };

  return (
    <div id="navbar">
      <Link to="/"> Home </Link>
      {!cookies.access_token && <Link to="/auth"> Login/Register </Link>}
      <Link to="/create-workout"> Create Workout </Link>
      <Link to="/saved-workouts"> Available Workouts </Link>
      {cookies.access_token && <Link to="/my-workouts"> My Workouts </Link>}
      <Link to="/challenges"> Challenges </Link>
      <Link to="/fitness-goals"> Fitness Goals </Link>
      {cookies.access_token && <button onClick={logout}> Logout </button>}
    </div>
  );
};

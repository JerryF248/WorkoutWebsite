import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    alert("Successfully Log out");
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/create-workout"> Create Workout </Link>
      <Link to="/saved-workouts"> Saved Workouts </Link>
      {!cookies.access_token ? (
        <Link to="/auth"> Login/Register </Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
};

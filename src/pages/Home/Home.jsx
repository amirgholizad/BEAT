import { useNavigate } from "react-router";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;

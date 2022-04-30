import NavBar from "../layout/Nabvar";
import Banner from "./Banner";

function Dashboard() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Banner />
      <div className="h-screen" id="about"></div>
      <div className="h-screen bg-black" id="contact"></div>
    </div>
  );
}

export default Dashboard;

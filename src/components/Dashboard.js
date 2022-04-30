import NavBar from "../layout/Nabvar";
import Banner from "./Banner";
import About from "./About";

function Dashboard() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Banner />
      <About />
      <div className="h-screen bg-black" id="contact"></div>
    </div>
  );
}

export default Dashboard;

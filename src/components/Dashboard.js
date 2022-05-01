import NavBar from "../layout/Nabvar";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Footer from "../layout/Footer";

function Dashboard() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Dashboard;

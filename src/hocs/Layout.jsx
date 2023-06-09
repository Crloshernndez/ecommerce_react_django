import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

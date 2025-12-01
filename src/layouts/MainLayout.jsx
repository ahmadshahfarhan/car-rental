import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const mainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default mainLayout;

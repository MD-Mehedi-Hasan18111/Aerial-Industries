/* eslint-disable react/prop-types */
import MyNavbar from "../components/navbar";
import MyFooter from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <main>{children}</main>
      <MyFooter />
    </>
  );
};

export default Layout;

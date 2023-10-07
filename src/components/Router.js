import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { Home } from "./Home";

export function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

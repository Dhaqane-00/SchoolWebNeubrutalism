import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContactPageLaptop from "./pages/ContactPageLaptop";
import AcademicsPageLaptop from "./pages/AcademicsPageLaptop";
import AboutPageLaptop from "./pages/AboutPageLaptop";
import AdmissionPageLaptop from "./pages/AdmissionPageLaptop";
import HomePageLaptop from "./pages/HomePageLaptop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/academics-page-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/about-page-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/admission-page-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-laptop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ContactPageLaptop />} />
      <Route path="/academics-page-laptop" element={<AcademicsPageLaptop />} />
      <Route path="/about-page-laptop" element={<AboutPageLaptop />} />
      <Route path="/admission-page-laptop" element={<AdmissionPageLaptop />} />
      <Route path="/home-page-laptop" element={<HomePageLaptop />} />
    </Routes>
  );
}
export default App;

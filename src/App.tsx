import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";


import Referenzen from "./pages/referenzen";
import Kontakt from "./pages/kontakt";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/referenzen' element={<Referenzen />} />
        <Route path='/kontakt' element={<Kontakt />}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return  <RouterProvider router={router} />;

      {/* Navbar */}
      {/* <div className="w-full overflow-hidden max-w-7xl mx-auto">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/referenzen" element={<Referenzen />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="container-footer">
        <Footer />
      </div> */}
  
    };
export default App;

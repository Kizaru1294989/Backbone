import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route
            index
            path={"/"}
            element={<HomeComponent />}
          />

        </Routes>
    </BrowserRouter>
  );
};

export default Router;
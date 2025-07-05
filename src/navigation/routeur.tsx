import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "../components/pages/Home/HomeComponent";
import ScrollToTop from "@/components/Animation/Scroll/ScrollToTop";
import { TransitionWrapper } from "@/components/Animation/Transition";
import { ROUTES } from "@/const/routeconst";
import { useLocation } from "react-router-dom";

const getTransitionType = (pathname: string): "fade" | "wipe" | "dissolve" | "curtain" => {
  switch (pathname) {
    case ROUTES.HOME.PATH:
      return "dissolve"
    default:
      return "dissolve"
  }
}

const AnimatedRoutes = () => {
  const location = useLocation()
  const transitionType = getTransitionType(location.pathname)

  return (
    <>
        <Routes location={location} key={location.pathname}>
          <Route
            path={ROUTES.HOME.PATH}
            element={
              <TransitionWrapper type={transitionType}>
                <HomeComponent />
              </TransitionWrapper>
            }
          />
        </Routes>
    </>
  )
}

const AppRoutes = () => {
  const location = useLocation()
  const hideHeaderRoutes = [

  ]

  const hideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}

export const Router = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

export default Router
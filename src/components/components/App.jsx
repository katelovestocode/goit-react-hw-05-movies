import { Route, Routes} from "react-router-dom";
import { Layout } from "./Layout/Layout";
// import { Movies } from "../pages/Movies/Movies";
// import { Home } from "../pages/Home/Home";
import { lazy } from "react";

const Movies = lazy(() => import("../pages/Movies/Movies"));
const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
  return (
    <>
    <Routes> 
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
          
          <Route path="movies" element={<Movies />}/> 
          <Route path="/movies/:movieId/" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast/>}/>
            <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Home/>}  />
        </Route>
    </Routes>
    </>
    
    
  );
};

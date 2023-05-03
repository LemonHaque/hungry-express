import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/recipes',
                element:<ChefRecipes></ChefRecipes>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/recipes/:id',
                element:<ChefRecipes></ChefRecipes>
            },
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import About from "../pages/About/About";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/recipes/:id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),

            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;
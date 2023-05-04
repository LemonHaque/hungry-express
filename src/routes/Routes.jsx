import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import About from "../pages/About/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/error page/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hungry-express-server-lemonhaque.vercel.app/recipes/${params.id}`),

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;
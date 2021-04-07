import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../components/dashboard/Dashboard";
import CreatePost from '../components/CreatePost/CreatePost';

export const routes =  [
    {
        path: "/",
        component: Login,
        exact: true,
    },
    {
        path: "/sign-up",
        component: SignUp,
        exact: true,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact: true,
    },
    {
        path: "/create-post",
        component: CreatePost,
        exact: true,
    }
];

export default routes;
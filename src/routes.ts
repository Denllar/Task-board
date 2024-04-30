import { LOG_IN, HOME } from "./utils/consts"
import LogIn from "./pages/LogIn/LogIn"
import Home from "./pages/Home/Home"


export const publicRoutes = [
    {
        path: LOG_IN,
        Component: LogIn,
    },
]

export const privateRoutes = [
    {
        path: HOME,
        Component: Home,
    },
]
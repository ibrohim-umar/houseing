import Generic from "../pages/Generic"
import Home from '../pages/Home'
import Proporties from "../components/Proporties"
import Sign from "../pages/Signin"
import SelectedHouse from '../components/SelectedHouse/index'
export const navbar = [
    {
        id:1,
        title: 'Home',
        path: '/home',
        Element: <Home/>,
        search: '?',      //filterda kerak bo'ladi
        hidden: false,
        private: false
    },
    {
        id:2,
        title: 'Properties',
        path: '/properties',
        Element: <Proporties/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:2,
        title: 'Selected',
        path: '/properties/:id',
        Element: <SelectedHouse/>,
        search: '?',
        useParams: true,
        hidden: true,
        private: false
    },
    {
        id:3,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id:4,
        title: 'Signin',
        path: '/signin',
        Element: <Sign/>,
        search: '?',
        hidden: true,
        private: false
    },
    {
        id:5,
        title: 'Signup',
        path: '/signup',
        Element: <Generic/>,
        search: '?',
        hidden: true,
        private: false
    },
]
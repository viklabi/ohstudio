import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/profile", element: <Profile /> },
	{ path: "/contact", element: <Contact /> },
	{ path: "*", element: <NoPage/> },
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
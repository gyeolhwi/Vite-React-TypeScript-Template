import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";

const Routes = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/test',
                element: <>Test</>,
            },
        ],
    },
    {
      path: '*',
      element: <NotFound />
    }
]);

export default Routes;
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {App} from "./App";
import ErrorPage from "./error-page";
import {IconExample} from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "icon",
                element: <IconExample/>,
            },
            {
                path: "button",
                element: <ButtonExample/>,
            },
        ],
    }
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

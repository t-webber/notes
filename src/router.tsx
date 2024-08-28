
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/404";
import Index from "./routes/index"
import AddHard from "./routes/add-hard"
import AddSoft from "./routes/add-soft"
import Calendar from "./routes/calendar"
import HardList from "./routes/hard-list"
import SoftList from "./routes/soft-list"

const routes = {
  "/": <Index />,
  "/add-hard": <AddHard />,
  "/add-soft": <AddSoft />,
  "/calendar": <Calendar />,
  "/hard-list": <HardList />,
  "/soft-list": <SoftList />,
  "/error": <ErrorPage />
}

export default function Router() {
  return (
    <RouterProvider router={createBrowserRouter(Object.entries(routes).map(([key, value]) => ({ caseSensitive: false, path: key, element: value, errorElement: <ErrorPage /> })))} />
  )
}

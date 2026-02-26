import { createBrowserRouter, redirect } from "react-router";
import { CompanyProfile } from "./pages/CompanyProfile";
import { EmployeeProfile } from "./pages/EmployeeProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/profile/jana"),
  },
  {
    path: "/company/maxnet",
    Component: CompanyProfile,
  },
  {
    path: "/profile/:id",
    Component: EmployeeProfile,
  },
]);
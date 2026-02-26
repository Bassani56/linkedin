import { createBrowserRouter } from "react-router";
import { UserProfile } from "./pages/UserProfile";
import { CompanyProfile } from "./pages/CompanyProfile";
import { EmployeeProfile } from "./pages/EmployeeProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: UserProfile,
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
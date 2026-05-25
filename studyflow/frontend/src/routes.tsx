import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
// import { Dashboard } from "./pages/Dashboard";
// import { Upload } from "./pages/Upload";
// import { DocumentDetail } from "./pages/DocumentDetail";
// import { Documents } from "./pages/Documents";
// import { Settings } from "./pages/Settings";
// import { SearchResults } from "./pages/SearchResults";
// import { NotFound } from "./pages/NotFound";
// import { SignIn } from "./pages/SignIn";
// import { SignUp } from "./pages/SignUp";
// import { ForgotPassword } from "./pages/ForgotPassword";
// import { ResetPassword } from "./pages/ResetPassword";
// import { VerifyEmail } from "./pages/VerifyEmail";
// import { AppLayout } from "./components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  // {
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  // },
  // {
  //   path: "/reset-password",
  //   element: <ResetPassword />,
  // },
  // {
  //   path: "/verify-email",
  //   element: <VerifyEmail />,
  // },
  // {
  //   path: "/app",
  //   element: <AppLayout />,
  //   children: [
  //     { index: true, element: <Dashboard /> },
  //     { path: "upload", element: <Upload /> },
  //     { path: "documents", element: <Documents /> },
  //     { path: "document/:id", element: <DocumentDetail /> },
  //     { path: "settings", element: <Settings /> },
  //     { path: "search", element: <SearchResults /> },
  //   ],
  // },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mx-auto container py-16">
        <Outlet />
      </div>
    </>
  );
}

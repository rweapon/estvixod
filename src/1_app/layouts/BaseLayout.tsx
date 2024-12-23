import { LayoutFooter } from "@widgets/footer";
import { LayoutHeader } from "@widgets/header";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </>
  );
}

import { ParentComponent } from "solid-js";
import AppLayout from "~/components/layout/AppLayout";

const Layout: ParentComponent = (props) => {
  return <AppLayout>{props.children}</AppLayout>;
};

export default Layout;
import { Component, JSX } from "solid-js";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout: Component<{ children: JSX.Element }> = (props) => {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <DashboardContent open={open} />
    </>
  );
}

export default App;

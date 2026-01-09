import React from "react";
import { DataProvider } from "./GetContextData";
import Users from "./Users";

function MainApp() {
  // Eska code App me likha hai
  return (
    <div>
      <DataProvider>
        <Users />
      </DataProvider>
    </div>
  );
}

export default MainApp;

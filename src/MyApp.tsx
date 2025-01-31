import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export function MyApp() {
  return (
    <>
      <ShellBar
        logo={<img src="reactLogo.png" />}
        profile={
          <Avatar>
            <img src="profilePictureEx.png" />
          </Avatar>
        }
        primaryTitle="My Fiori App"
      >
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}

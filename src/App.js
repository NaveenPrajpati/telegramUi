import React from "react";
import ContactList from "./pages/ContactList";
import ChatWindow from "./pages/ChatWindow";

export default function App() {
  return (
    <div className="   h-screen flex ">
      <ContactList />
      <ChatWindow />
    </div>
  );
}

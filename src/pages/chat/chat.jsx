import React, { useState } from "react";
import ChatBox from "../../components/chatBox/chatBox";
import LeftSidebar from "../../components/leftSidebar/leftSidebar";
import RightSidebar from "../../components/rightSidebar/rightSidebar";

const Chat = () => {
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* LeftSidebar - Always visible */}
      <div className="w-1/4 flex-shrink-0">
        <LeftSidebar />
      </div>

      {/* ChatBox - Adjusts width based on sidebar */}
      <div
        className={`flex-grow transition-all duration-300 ease-in-out ${
          showRightSidebar ? "w-1/2" : "w-3/4"
        }`}
      >
        <ChatBox onMenuClick={() => setShowRightSidebar(!showRightSidebar)} />
      </div>

      {/* RightSidebar - Conditionally visible */}
      <div
        className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
          showRightSidebar ? "w-1/4" : "w-0"
        }`}
      >
        {showRightSidebar && <RightSidebar />}
      </div>
    </div>
  );
};
export default Chat;

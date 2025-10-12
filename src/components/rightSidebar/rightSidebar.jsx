import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState("contact");
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const navigate = useNavigate();

  const contact = {
    name: "Bob",
    avatar: "https://placehold.co/100x100/33C7FF/FFFFFF?text=B",
    status: "Online",
  };

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to login page
  };


  const sharedMedia = [
    { id: 1, url: "https://placehold.co/150x150/FF6666/FFFFFF?text=Photo+1" },
    { id: 2, url: "https://placehold.co/150x150/66FF66/FFFFFF?text=Photo+2" },
    { id: 3, url: "https://placehold.co/150x150/6666FF/FFFFFF?text=Photo+3" },
    { id: 4, url: "https://placehold.co/150x150/FFCC66/FFFFFF?text=Photo+4" },
    { id: 5, url: "https://placehold.co/150x150/9966FF/FFFFFF?text=Photo+5" },
    { id: 6, url: "https://placehold.co/150x150/CCFF66/FFFFFF?text=Photo+6" },
  ];

  const groupMembers = [
    {
      id: 1,
      name: "Alice",
      avatar: "https://placehold.co/40x40/FF6666/FFFFFF?text=A",
    },
    {
      id: 2,
      name: "Charlie",
      avatar: "https://placehold.co/40x40/FFCC66/FFFFFF?text=C",
    },
    {
      id: 3,
      name: "Dana",
      avatar: "https://placehold.co/40x40/9966FF/FFFFFF?text=D",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 border-l border-gray-200">
      {/* Header */}
      <div className="p-4 bg-white shadow-md text-center">
        <h3 className="text-xl font-semibold text-gray-800">Menu</h3>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b bg-white">
        <button
          onClick={() => setActiveSection("contact")}
          className={`flex-1 p-3 ${
            activeSection === "contact"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
        >
          👤 Contact
        </button>
        <button
          onClick={() => setActiveSection("settings")}
          className={`flex-1 p-3 ${
            activeSection === "settings"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* CONTACT SECTION */}
        {activeSection === "contact" && (
          <div className="space-y-6">
            {/* Profile Info */}
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <img
                src={contact.avatar}
                alt="Contact Avatar"
                className="w-24 h-24 rounded-full mb-3"
              />
              <h4 className="text-xl font-bold text-gray-900">
                {contact.name}
              </h4>
              <p className="text-sm text-green-500">● {contact.status}</p>
            </div>

            {/* Shared Media */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-lg font-semibold text-gray-800">
                  Shared Media
                </h5>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  See all
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sharedMedia.slice(0, 6).map((media) => (
                  <img
                    key={media.id}
                    src={media.url}
                    alt={`Shared media ${media.id}`}
                    className="w-full h-auto object-cover rounded-lg aspect-square"
                  />
                ))}
              </div>
            </div>

            {/* Group Members List */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold text-gray-800 mb-4">
                Group Members
              </h5>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <img
                    src={contact.avatar}
                    alt="Your Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">You</span>
                </li>
                {groupMembers.map((member) => (
                  <li
                    key={member.id}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <img
                      src={member.avatar}
                      alt={`${member.name}'s Avatar`}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-700 font-medium">
                      {member.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logout Button */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* SETTINGS SECTION */}
        {activeSection === "settings" && (
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold text-gray-800 mb-4">
                Settings
              </h5>
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="text-gray-700">Mute notifications</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.013 21H7.987a2 2 0 01-1.92-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="text-gray-700">Clear chat</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowThemeOptions(!showThemeOptions)}
                    className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src="https://img.icons8.com/?size=50&id=4922&format=png"
                      width="24"
                      height="24"
                      alt="Theme"
                      className="mr-3"
                      style={{
                        filter: "brightness(0.7) saturate(0) hue-rotate(0deg)",
                      }}
                    />
                    <span className="text-gray-700">Theme</span>
                  </button>
                </li>
                {showThemeOptions && (
                  <ul className="pl-6 space-y-2">
                    <li>
                      <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <img
                          src="https://img.icons8.com/?size=50&id=648&format=png"
                          width="24"
                          height="24"
                          alt="Sun icon"
                          className="w-6 h-6 mr-3"
                          style={{
                            filter:
                              "brightness(0.7) saturate(0) hue-rotate(0deg)",
                          }}
                        />
                        <span className="text-gray-700">Light Mode</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <img
                          src="https://img.icons8.com/?size=50&id=11377&format=png"
                          width="24"
                          height="24"
                          alt="Moon icon"
                          className="w-6 h-6 mr-3"
                          style={{
                            filter:
                              "brightness(0.7) saturate(0) hue-rotate(0deg)",
                          }}
                        />
                        <span className="text-gray-700">Dark Mode</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <img
                          src="https://img.icons8.com/?size=50&id=T2hlOs3PLcaY&format=png"
                          width="20"
                          height="20"
                          alt="System"
                          className="mr-3"
                          style={{
                            filter:
                              "brightness(0.7) saturate(0) hue-rotate(0deg)",
                          }}
                        />
                        <span className="text-gray-700">System Default</span>
                      </button>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;

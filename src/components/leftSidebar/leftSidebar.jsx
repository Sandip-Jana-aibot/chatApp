import React, { useState } from "react";

const contactsData = [
  {
    id: 1,
    name: "Alice",
    lastMessage: "Hey, are you free this weekend?",
    avatarUrl: "https://placehold.co/40x40/FF5733/FFFFFF?text=A",
  },
  {
    id: 2,
    name: "Bob",
    lastMessage: "Can you send me the report?",
    avatarUrl: "https://placehold.co/40x40/33C7FF/FFFFFF?text=B",
  },
  {
    id: 3,
    name: "Charlie",
    lastMessage: "That was a great meeting!",
    avatarUrl: "https://placehold.co/40x40/33FFC7/FFFFFF?text=C",
  },
  {
    id: 4,
    name: "David",
    lastMessage: "Got it, thanks.",
    avatarUrl: "https://placehold.co/40x40/FF33A1/FFFFFF?text=D",
  },
  {
    id: 5,
    name: "Eve",
    lastMessage: "What time are we meeting?",
    avatarUrl: "https://placehold.co/40x40/A133FF/FFFFFF?text=E",
  },
  {
    id: 6,
    name: "Frank",
    lastMessage: "Sure, I will be there.",
    avatarUrl: "https://placehold.co/40x40/FFD133/FFFFFF?text=F",
  },
  {
    id: 7,
    name: "Alice",
    lastMessage: "Hey, are you free this weekend?",
    avatarUrl: "https://placehold.co/40x40/FF5733/FFFFFF?text=A",
  },
  {
    id: 8,
    name: "Bob",
    lastMessage: "Can you send me the report?",
    avatarUrl: "https://placehold.co/40x40/33C7FF/FFFFFF?text=B",
  },
  {
    id: 9,
    name: "Charlie",
    lastMessage: "That was a great meeting!",
    avatarUrl: "https://placehold.co/40x40/33FFC7/FFFFFF?text=C",
  },
  {
    id: 10,
    name: "David",
    lastMessage: "Got it, thanks.",
    avatarUrl: "https://placehold.co/40x40/FF33A1/FFFFFF?text=D",
  },
  {
    id: 11,
    name: "Eve",
    lastMessage: "What time are we meeting?",
    avatarUrl: "https://placehold.co/40x40/A133FF/FFFFFF?text=E",
  },
  {
    id: 12,
    name: "Frank",
    lastMessage: "Sure, I will be there.",
    avatarUrl: "https://placehold.co/40x40/FFD133/FFFFFF?text=F",
  },
];

const LeftSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 sm:p-6">
      <div className="p-4 bg-white rounded-xl shadow-md mb-4 relative">
        <h2 className="text-xl font-bold text-gray-800 text-center">ChatApp</h2>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded"
        >
          ⋮
        </button>

        {showDropdown && (
          <div className="absolute right-4 top-12 bg-white shadow-lg rounded-lg p-2 z-10">
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
              Edit Profile
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="p-4 bg-white rounded-xl shadow-md mb-2">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.35-1.42 1.42-5.33-5.36zM8 14A6 6 0 108 2a6 6 0 000 12z" />
          </svg>
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-2 bg-white rounded-xl shadow-md mb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-2 py-1 text-sm rounded-full font-medium ${
              activeTab === "all"
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("groups")}
            className={`px-2 py-1 text-sm rounded-full font-medium ${
              activeTab === "groups"
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Groups
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-2 py-1 text-sm rounded-full font-medium ${
              activeTab === "favorites"
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Favorites
          </button>
        </div>
        <button className="p-0.5 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center p-3 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                src={contact.avatarUrl}
                alt={`${contact.name}'s avatar`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-800">
                  {contact.name}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {contact.lastMessage}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No contacts found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;

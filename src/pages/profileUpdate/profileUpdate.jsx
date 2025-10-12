import React, { useState } from "react";

// Reusable component for form fields
const FormField = ({
  label,
  id,
  type = "text",
  name,
  value,
  onChange,
  rows,
  error,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-24`}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
    )}
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

// Component for the profile image section
const ProfileImage = ({ profileImage, handleImageChange }) => (
  <div className="flex flex-col items-center space-y-3 flex-shrink-0 w-1/4 pt-4">
    <img
      src={profileImage}
      alt="Profile Avatar"
      className="w-28 h-28 rounded-full border-4 border-gray-200 object-cover"
    />
    <label className="cursor-pointer bg-blue-500 text-white text-xs font-medium py-1 px-3 rounded-full hover:bg-blue-600 transition-colors">
      Change Photo
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </label>
  </div>
);

const ProfileUpdate = () => {
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Software developer with a passion for clean code and good design. I love hiking and photography.",
    location: "San Francisco, CA",
    profileImage: "https://placehold.co/150x150/FF66CC/FFFFFF?text=JD",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData((prevData) => ({
        ...prevData,
        profileImage: imageUrl,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!userData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!userData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Profile updated:", userData);
      alert("Profile has been updated!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Edit Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="flex space-x-8">
          <ProfileImage
            profileImage={userData.profileImage}
            handleImageChange={handleImageChange}
          />

          <div className="flex-grow space-y-4">
            <FormField
              label="Name"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FormField
              label="Email"
              id="email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormField
              label="Location"
              id="location"
              name="location"
              value={userData.location}
              onChange={handleChange}
            />
            <FormField
              label="Bio"
              id="bio"
              type="textarea"
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              rows="3"
            />

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;

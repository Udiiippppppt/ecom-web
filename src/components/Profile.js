import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software Developer at ABC Corp.',
    avatar: 'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save user info logic here
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({
          ...userInfo,
          avatar: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-gray-100 rounded-lg shadow-2xl max-w-4xl text-gray-900">
      <div className="text-center relative mb-8">
        <label
          htmlFor="profile-image"
          className="block relative rounded-full overflow-hidden w-40 h-40 mx-auto cursor-pointer border-4 border-gray-300 shadow-lg"
        >
          <img
            className="w-full h-full object-cover rounded-full transition-transform transform hover:scale-110 duration-300"
            src={userInfo.avatar}
            alt="Profile"
          />
          {isEditing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              <FontAwesomeIcon icon={faPlus} size="2x" className="text-white" />
            </div>
          )}
        </label>
        {isEditing && (
          <input
            id="profile-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        )}
        <h2 className="text-4xl font-extrabold mt-4">{userInfo.name}</h2>
        <p className="text-gray-700">{userInfo.email}</p>
        <p className="mt-2 text-gray-600">{userInfo.bio}</p>
        <button
          onClick={handleEditToggle}
          className={`mt-6 px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 duration-300 ${isEditing ? 'bg-red-600 hover:bg-red-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
        >
          {isEditing ? (
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
          )}
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      {isEditing && (
        <div className="mt-8 bg-white text-black p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Bio</label>
            <textarea
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import User_Image from '../Assets/User_Image.jpg'

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: '',
    
    image: null,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
};

const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
    const selectedImage = e.target.files[0];
    setUserData({ ...userData, image: URL.createObjectURL(selectedImage) });
    }
};

const handleImageDelete = () => {
    setUserData({ ...userData, image: null });
};
  const handleSave = () => {
    // Check if new password and confirm password match
    if (userData.newPassword !== userData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Handle save functionality, you can send data to server or perform local storage operations
    console.log(userData);
    setEditMode(false);
    setPasswordMatchError(false);
  };

  return (
    <div className=" py-10 px-10 justify-center">
        <div className=" w-full ">
            <div className="flex-none p-4 ">

                <div className="relative">

                    <img
                    className="w-44 h-44 rounded-full object-cover ml-14 mb-6 shadow-xl border-2 border-gray-400"
                    src={userData.image || User_Image}
                    alt="user-avatar"
                    />

                    <div className=" text-center mb-5">
                        <h1 className="text-5xl font-bold">User Profile</h1>
                    </div>

                    {editMode && (
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="image-upload"
                            onChange={handleImageChange}
                        />

                        <label htmlFor="image-upload" className="cursor-pointer">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 transform transition duration-500 hover:scale-105 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => document.getElementById('image-upload').click()}
                        >
                        Upload Image
                        </button>
                        </label>
                        
                        <button
                            className="bg-red-500 hover:bg-red-700 transform transition duration-500 hover:scale-105 text-white font-bold py-2 px-4 rounded"
                            onClick={handleImageDelete}
                        >
                            Delete Image
                        </button>
                    </div>
                    )}
                </div>

            </div>

            <div className="mb-2 flex justify-end mr-6">
                {!editMode && (
                    <button
                        className="text-lg bg-blue-500 hover:bg-blue-700 transform transition duration-500 hover:scale-105 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setEditMode(true)}
                    >
                        Edit Profile
                    </button>
                )}
            </div>
            
            <div className=" p-5 font-calibri ">
                <div className=' border-4 border-gray-600 rounded-xl shadow-2xl p-10 bg-gray-500 bg-opacity-70'>
                    
                    <div className="mb-6 flex justify-between mt-6">
                        <div className="w-1/3">
                            <label className="text-3xl font-bold">User Name: </label>
                            {editMode ? (
                                <input
                                type="text"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="userName"
                                value={userData.userName}
                                onChange={handleInputChange}
                                />
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.userName}</span>
                            )}
                        </div>

                        <div className="w-1/3 mr-20">
                            <label className="text-3xl font-bold">First name:</label>
                            {editMode ? (
                                <input
                                type="text"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleInputChange}
                                />
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.firstName}</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-6 flex justify-between">
                        <div className="w-1/3">
                            <label className="text-3xl font-bold">Last name:</label>
                            {editMode ? (
                                <input
                                type="text"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3" 
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleInputChange}
                                />
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.lastName}</span>
                            )}
                        </div>

                        <div className="w-1/3 mr-20">
                            <label className="text-3xl font-bold">email:</label>
                            {editMode ? (
                                <input
                                type="text"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                />
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.email}</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-6 flex justify-between">
                        <div className=" w-1/3 mr-4">
                            <label className="text-3xl font-bold">Age:</label>
                            {editMode ? (
                                <input
                                type="text"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="age"
                                value={userData.age}
                                onChange={handleInputChange}
                                />
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.age}</span>
                            )}
                        </div>

                        <div className="w-1/3 mr-20">
                            <label className="text-3xl font-bold">Gender:</label>
                            {editMode ? (
                                <select
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="gender"
                                value={userData.gender}
                                onChange={handleInputChange}
                                >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                </select>
                            ) : (
                                <span className='flex mt-3 text-white text-2xl font-bold'>{userData.gender}</span>
                            )}
                        </div>
                    </div>

                    {editMode && (
                    <>
                        <div className="mb-6 w-1/3">
                            <label className=" text-3xl font-bold">Current Password:</label>
                            <input
                                type="password"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="currentPassword"
                                value={userData.currentPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <div className="mb-6 w-1/3">
                            <label className="text-3xl font-bold">New Password:</label>
                            <input
                                type="password"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="newPassword"
                                value={userData.newPassword}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className=" w-1/3">
                            <label className="text-3xl font-bold">Confirm Password:</label>
                            <input
                                type="password"
                                className="border border-gray-700 rounded w-full py-3 px-3 text-gray-700 mt-3"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleInputChange}
                                
                            />
                            {passwordMatchError && (
                                <p className="text-red-800 text-m mt-1">Password doesn't match</p>
                            )}
                        </div>
                        
                    </>
                    )}
                    <div className='text-right mt-2 text-white mr-10'>
                        {editMode && (
                        
                        <button
                            className="text-xl bg-green-500 hover:bg-green-600 transform transition duration-500 hover:scale-105 font-bold py-3 px-5 rounded "
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default UserProfile;

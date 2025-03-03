import React from "react";
import { faker } from "@faker-js/faker";

function UserCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <img
          className="w-24 h-24 rounded-full"
          src={faker.image.avatar()}
          alt="Avatar"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {faker.person.firstName()}
        </h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Додати до друзів
        </button>
      </div>
    </div>
  );
}

export default UserCard;

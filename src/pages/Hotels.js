import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

function Hotels() {
  const [startDate, setStartDate] = useState(null);
  const [location, setLocation] = useState(null);
  const [type, setType] = useState("");
  const [persons, setPersons] = useState("");
  const [rooms, setRooms] = useState("");

  const locations = [
    { value: "newyork", label: "New York" },
    { value: "losangeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "sanfrancisco", label: "San Francisco" },
    { value: "miami", label: "Miami" },
    { value: "seattle", label: "Seattle" },
  ];

  const handleLocationChange = (selectedOption) => {
    setLocation(selectedOption);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handlePersonsChange = (event) => {
    setPersons(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setRooms(event.target.value);
  };

  return (
    <div className=" bg-cover bg-center h-[30rem] flex items-center justify-center text-white text-2xl w-full ">
      <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-50 hotel-container h-[50rem]"></div>

      <div className="p-4 flex gap-3">
        <div className="flex-1">
          <div className="mb-4 ">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-black-700 mb-1"
            >
              Location
            </label>
            <Select
              options={locations}
              value={location}
              onChange={handleLocationChange}
              placeholder="Select location..."
              isSearchable
              className="text-sm w-[12rem] text-black"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-black-700"
            >
              Date
            </label>
            <DatePicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="mm/dd/yyyy"
              className="mt-1 p-2 border rounded w-[10rem] text-sm text-black "
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-black-700"
            >
              Type
            </label>
            <select
              id="type"
              className="mt-1 p-2 border rounded w-[10rem] text-sm text-black"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="" className="">
                Select Type
              </option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <label
              htmlFor="persons"
              className="block text-sm font-medium text-black-700"
            >
              Number of Persons
            </label>
            <input
              type="number"
              id="persons"
              className="mt-1 p-2 border rounded w-[10rem] text-sm text-black"
              value={persons}
              onChange={handlePersonsChange}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-black-700"
            >
              Number of Rooms
            </label>
            <input
              type="number"
              id="rooms"
              className="mt-1 p-2 border rounded w-[10rem] text-sm text-black"
              value={rooms}
              onChange={handleRoomsChange}
            />
          </div>
        </div>
        <div className="flex-1">
          <button className="bg-orange-600 font-bold text-white p-2 rounded mt-5 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotels;

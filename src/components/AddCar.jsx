import React, { useState } from "react";
import axios from "axios";
// import NavBar from "./NavBar";

const AddCar = () => {
  const [data, setData] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    axios
      .post("https://host-demo-app.onrender.com/api/add-car", data)
      .then((res) => {
        setMessage(res.data.message);

        setData({
          registration_number: "",
          brand: "",
          model: "",
          vehicle_type: "",
          fuel_type: "",
          transmission: "",
          seating_capacity: "",
          rent_per_day: "",
          city: "",
          availability_status: "Available",
        });
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Something went wrong!");
        }
      });
  };

  return (
    <div>
      {/* <NavBar /> */}

      <div className="container mt-5">
        <h2 className="mb-4">Add Car</h2>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="registration_number"
              value={data.registration_number}
              onChange={handleChange}
              placeholder="KL-01-AB-1234"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={data.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Model</label>
            <input
              type="text"
              className="form-control"
              name="model"
              value={data.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Vehicle Type</label>
            <select
              className="form-select"
              name="vehicle_type"
              value={data.vehicle_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Fuel Type</label>
            <select
              className="form-select"
              name="fuel_type"
              value={data.fuel_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="CNG">CNG</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Transmission</label>
            <select
              className="form-select"
              name="transmission"
              value={data.transmission}
              onChange={handleChange}
              required
            >
              <option value="">Select Transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Seating Capacity</label>
            <input
              type="number"
              className="form-control"
              name="seating_capacity"
              value={data.seating_capacity}
              onChange={handleChange}
              min="2"
              max="10"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Rent Per Day</label>
            <input
              type="number"
              className="form-control"
              name="rent_per_day"
              value={data.rent_per_day}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={data.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Availability Status</label>
            <select
              className="form-select"
              name="availability_status"
              value={data.availability_status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Add Car
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCar;
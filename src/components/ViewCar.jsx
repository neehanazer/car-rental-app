import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";


const ViewCar = () => {
  const [cars, setCars] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://host-demo-app.onrender.com/api/cars";

    const params = [];

    if (selectedCity) {
      params.push(`city=${encodeURIComponent(selectedCity)}`);
    }

    if (selectedVehicleType) {
      params.push(
        `vehicle_type=${encodeURIComponent(selectedVehicleType)}`
      );
    }

    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
        setLoading(false);
      });
  }, [selectedCity, selectedVehicleType]);

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View Cars</h1>

        <div className="row mb-4">

          <div className="col-md-4">
            <label className="form-label fw-bold">Filter by City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-bold">
              Filter by Vehicle Type
            </label>
            <select
              className="form-select"
              value={selectedVehicleType}
              onChange={(e) => setSelectedVehicleType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

        </div>

        {loading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : cars.length === 0 ? (
          <div className="alert alert-warning text-center">
            No Cars Found.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Reg No</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Fuel</th>
                  <th>Transmission</th>
                  <th>Seats</th>
                  <th>Rent/Day</th>
                  <th>City</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {cars.map((car, index) => (
                  <tr key={car.id || index}>
                    <td>{car.registration_number}</td>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.vehicle_type}</td>
                    <td>{car.fuel_type}</td>
                    <td>{car.transmission}</td>
                    <td>{car.seating_capacity}</td>
                    <td>₹{car.rent_per_day}</td>
                    <td>{car.city}</td>
                    <td>
                      <span
                        className={`badge ${
                          car.availability_status === "Available"
                            ? "bg-success"
                            : car.availability_status === "Booked"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {car.availability_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCar;
import React, { useContext, useEffect, useState } from "react";

import BookingsRow from "./BookingsRow";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [url]);

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/service-data/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted");
          const remaining = bookings.filter((book) => book._id !== id);
          setBookings(remaining);
        }
      });
  };

  const confirmHandler = (id) => {
    fetch(`http://localhost:5000/update-service/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((book) => book._id !== id);
          const updated = bookings.find((book) => book._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <h2>Total Bookings : {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {bookings.map((book) => (
            <BookingsRow
              key={book._id}
              book={book}
              deleteHandler={deleteHandler}
              confirmHandler={confirmHandler}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;

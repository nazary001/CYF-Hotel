import React, { useState } from "react";
import FakeBookings from "./data/fakeBookings.json";
const moment = require("moment");

function getDayDiff(start, end) {
  let date1 = moment(start);
  let date2 = moment(end);
  let result = date2.diff(date1, "days");
  return result;
}

function SearchResults() {
  const [selectedRow, setSelectedRow] = useState(null);

  const onRowClicked = id => {
    if (id === selectedRow) {
      setSelectedRow(null);
    } else {
      setSelectedRow(id);
    }
  };

  return (
    <div className="table_div">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room id</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map(booking => {
            return (
              <tr
                id={booking.id}
                onClick={() => onRowClicked(booking.id)}
                style={{
                  backgroundColor:
                    selectedRow === booking.id ? "#C0C0C0" : "white"
                }}
              >
                <th>{booking.id}</th>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{getDayDiff(booking.checkInDate, booking.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;

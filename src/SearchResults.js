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
  const [selectedRows, setSelectedRows] = useState([]);

  const onRowClicked = event => {
    if (event.ctrlKey) {
      if (selectedRows.includes(event.target.parentElement.id)) {
        setSelectedRows(
          [...selectedRows].splice(selectedRows.indexOf(event.target.id), 1)
        );
      } else {
        setSelectedRows([...selectedRows].push(event.target.parentElement.id));
      }
    } else {
      setSelectedRows([event.target.parentElement.id]);
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
                onClick={event => onRowClicked(event)}
                style={{
                  backgroundColor: selectedRows.includes(booking.id)
                    ? "#C0C0C0"
                    : "white"
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

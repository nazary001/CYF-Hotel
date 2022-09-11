import React from "react";

function Footer(props) {
  const footerArr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {footerArr.map(elem => {
          return <li>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;

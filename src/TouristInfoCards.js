import React from "react";

function TouristInfoCards() {
  return (
    <div className="info_cards">
      <div className="London_card">
        <img src="https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/London-5_0.jpg" />
        <div className="card_body">
          <h1>London</h1>
          <p>
            What is London? London is the capital city of the United Kingdom. It
            is the U.K.'s largest metropolis and its economic, transportation,
            and cultural centre. London is also among the oldest of the world's
            great cities, with its history spanning nearly two millennia.
          </p>
          <a href="https://visitlondon.com" target="_blank">
            More Information
          </a>
        </div>
      </div>
      <div className="Glasgow_card">
        <img src="https://www.tlt.com/-/media/tlt-solicitors/images/global/hero/location/glasgow-office.jpg?h=451&w=790&la=en&hash=A4E8841D0573897B1F9B2BC89A7FEFA4008DD88E" />
        <div className="card_body">
          <h1>Glasgow</h1>
          <p>
            Glasgow is Scotland's largest city, and it forms an independent
            council area that lies entirely within the historic county of
            Lanarkshire. The city occupies much of the lower Clyde valley, and
            its suburbs extend into surrounding districts. Most important
            commercial and administrative buildings lie north of the Clyde.
          </p>
          <a href="https://peoplemakeglasgow.com" target="_blank">
            More Information
          </a>
        </div>
      </div>
      <div className="Manchester_card">
        <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article24338807.ece/ALTERNATES/s615/0_Manchester-City-Centre-GVs.jpg" />
        <div className="card_body">
          <h1>Manchester</h1>
          <p>
            Manchester is the nucleus of the largest metropolitan area in the
            north of England, and it remains an important regional city, but it
            has lost the extraordinary vitality and unique influence that put it
            at the forefront of the Industrial Revolution.
          </p>
          <a href="https://visitmanchester.com" target="_blank">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;

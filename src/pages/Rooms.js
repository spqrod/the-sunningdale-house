import React from 'react';

function Rooms() {
  return (
    <main className="rooms">

      <section className="reservationForm">
        <h1>Reservation Form</h1>
        <div className="form placeholder">
            <p>Reservation form with dates and room types</p>
        </div>
      </section>

      <section className="rooms-list">
        <h2>Rooms</h2>
        {['Room A', 'Room B', 'Room C', 'Room D'].map((room, index) => (
          <div className="room" key={index}>
            <div className="main-photo">
              <div className="photo-placeholder">Photo</div>
              <div className="small-photos">
                {[1, 2, 3, 4].map((num) => (
                  <div className="photo-placeholder" key={num}>Photo</div>
                ))}
              </div>
            </div>
            <div className="description">
              <h3>{room}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button>Reserve Now</button>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

export default Rooms;
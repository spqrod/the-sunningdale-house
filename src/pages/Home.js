import React from 'react';

function Home() {
  return (
    <main className="home">

        <section className="hero">
            <h1>Hero Section</h1>
            <div className="placeholder">Hero image with a phrase</div>
        </section>

        <section className="hotel">
            <h2>Hotel</h2>
            <div className='placeholder'>
                <p>Hotel general info</p>
            </div>
        </section>

        <section className="rooms">
            <h2>Rooms</h2>
            <div className='placeholder'>
                <p>Room photos and info</p>
            </div>
        </section>

        <section className="rooms">
            <h2>Reviews</h2>
            <div className='placeholder'>
                <p>5 start guest reviews</p>
            </div>
        </section>

        <section className="reservation">
            <h2>Reservation</h2>
            <div className='placeholder'>
                <p>Reservation form with dates and room type</p>
            </div>
        </section>

        <section className="events">
            <h2>Events</h2>
            <div className='placeholder'>
                <p>Events info</p>
            </div>
        </section>

    </main>
  );
}

export default Home;
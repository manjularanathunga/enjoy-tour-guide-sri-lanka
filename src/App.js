import "./App.css";

export default function EnjoyTourGuideSriLanka() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Enjoy Tour Guide Sri Lanka</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#destinations">Destinations</a>
            <a href="#gallery">Gallery</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="section hero">
        <div className="container center">
          <h2>Welcome to Sri Lanka</h2>
          <p>
            Discover the history, tourism, natural beauty, diversity,
            entertainment, friendly hotels, and warm people of Sri Lanka.
          </p>
          <button>Explore Now</button>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container center">
          <h2>About Sri Lanka</h2>
          <p>
            Sri Lanka is a beautiful island nation with a long and rich history.
            It is famous for ancient kingdoms, cultural heritage, beaches,
            mountains, wildlife, and welcoming hospitality.
          </p>
        </div>
      </section>

      <section id="destinations" className="section">
        <div className="container center">
          <h2>Top Destinations</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Sigiriya</h3>
              <p>Ancient rock fortress and world-famous heritage site.</p>
            </div>
            <div className="card">
              <h3>Kandy</h3>
              <p>Cultural city with sacred temples and scenic views.</p>
            </div>
            <div className="card">
              <h3>Ella</h3>
              <p>Cool hills, tea estates, and beautiful train journeys.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section light">
        <div className="container center">
          <h2>Gallery</h2>
          <div className="card-grid">
            <div className="card">🏖️ Beaches</div>
            <div className="card">🏛️ Heritage</div>
            <div className="card">🌿 Nature</div>
          </div>
        </div>
      </section>

      <section id="booking" className="section">
        <div className="container center">
          <h2>Book Your Tour</h2>
          <form className="booking-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="date" />
            <select>
              <option>Select Destination</option>
              <option>Sigiriya</option>
              <option>Kandy</option>
              <option>Ella</option>
              <option>Galle</option>
            </select>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit Booking</button>
          </form>
        </div>
      </section>

      <section id="contact" className="section light">
        <div className="container center">
          <h2>Contact Us</h2>
          <p>Phone: +94 77 123 4567</p>
          <p>Email: info@enjoytourguidesrilanka.com</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container center">
          <p>© 2026 Enjoy Tour Guide Sri Lanka</p>
        </div>
      </footer>
    </div>
  );
}
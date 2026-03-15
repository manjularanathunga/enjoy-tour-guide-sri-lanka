import "./App.css";

export default function App() {
  const destinations = [
    {
      name: "Sigiriya",
      text: "An ancient rock fortress and one of Sri Lanka’s most famous historical attractions.",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Kandy",
      text: "A cultural city known for the Temple of the Tooth and beautiful mountain surroundings.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Ella",
      text: "A peaceful hill-country destination with tea estates, cool weather, and scenic train rides.",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Galle",
      text: "A charming coastal city with beaches, colonial buildings, and the famous Galle Fort.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Yala",
      text: "A top wildlife destination where travelers can enjoy safari adventures and see elephants and leopards.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Nuwara Eliya",
      text: "A cool and green highland town famous for tea plantations and breathtaking natural beauty.",
      image:
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const gallery = [
    {
      title: "Golden Beaches",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tea Hills",
      image:
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wildlife Safari",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Ancient Heritage",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Scenic Train Ride",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Friendly Hotels",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container header-row">
          <div className="logo-box">
            <h1>Enjoy Tour Guide Sri Lanka</h1>
            <p>History • Nature • Culture • Hospitality</p>
          </div>

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

      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="tag">Welcome to the Pearl of the Indian Ocean</span>
            <h2>Discover the beauty of Sri Lanka</h2>
            <p>
              Explore the rich history of Sri Lanka, its tourism, natural beauty,
              great diversity, entertainment, clean friendly hotels, and the warm
              welcome of its people.
            </p>

            <div className="hero-buttons">
              <a href="#destinations" className="btn btn-light">
                Explore Destinations
              </a>
              <a href="#booking" className="btn btn-outline">
                Book a Tour
              </a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="mini-card">Ancient History</div>
            <div className="mini-card">Natural Beauty</div>
            <div className="mini-card">Wildlife Adventure</div>
            <div className="mini-card">Friendly Hotels</div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-title center">
            <h2>About Sri Lanka</h2>
            <p>
              A beautiful island full of history, culture, nature, and unforgettable
              travel experiences.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-box">
              <h3>History of Sri Lanka</h3>
              <p>
                Sri Lanka has a proud history that stretches back more than 2,500 years.
                The island is known for ancient kingdoms such as Anuradhapura and
                Polonnaruwa, sacred temples, royal traditions, and cultural heritage
                sites that continue to attract visitors from around the world.
              </p>
              <p>
                From ancient civilizations to colonial influence and modern development,
                Sri Lanka offers a deep and fascinating historical journey.
              </p>
            </div>

            <div className="about-box green">
              <h3>Why tourists love Sri Lanka</h3>
              <ul>
                <li>Beautiful beaches and ocean views</li>
                <li>Green mountains and tea plantations</li>
                <li>Ancient temples and heritage sites</li>
                <li>Wildlife parks and safari adventures</li>
                <li>Clean friendly hotels and guest houses</li>
                <li>Warm and welcoming local people</li>
              </ul>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Tourism & Natural Beauty</h3>
              <p>
                Sri Lanka offers beaches, forests, waterfalls, hills, tea estates,
                and national parks all in one island.
              </p>
            </div>

            <div className="feature-card">
              <h3>Great Diversity</h3>
              <p>
                The country is rich in religions, languages, traditions, food, wildlife,
                and landscapes, giving every traveler a unique experience.
              </p>
            </div>

            <div className="feature-card">
              <h3>Entertainment</h3>
              <p>
                Enjoy safaris, surfing, hiking, cultural shows, whale watching,
                shopping, train rides, and local festivals.
              </p>
            </div>

            <div className="feature-card">
              <h3>Hotels & People</h3>
              <p>
                Sri Lanka is known for clean hotels, comfortable stays, and people
                who welcome visitors with kindness and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="section light">
        <div className="container">
          <div className="section-title center">
            <h2>Top Destinations</h2>
            <p>
              Discover some of the most popular travel places in Sri Lanka.
            </p>
          </div>

          <div className="card-grid">
            {destinations.map((place) => (
              <div className="place-card" key={place.name}>
                <img src={place.image} alt={place.name} />
                <div className="place-card-body">
                  <h3>{place.name}</h3>
                  <p>{place.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <div className="section-title center">
            <h2>Sri Lanka Gallery</h2>
            <p>
              A visual look at beaches, hills, wildlife, history, and hospitality.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section light">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-info">
              <h2>Book Your Dream Tour</h2>
              <p>
                Plan your Sri Lanka holiday with us. Choose your destination, date,
                and travel details, then send your request.
              </p>

              <div className="info-list">
                <div className="info-item">Custom travel packages</div>
                <div className="info-item">Beach, hill country, and cultural tours</div>
                <div className="info-item">Comfortable and clean stay options</div>
              </div>
            </div>

            <div className="booking-form-box">
              <h3>Tour Booking Form</h3>
              <form className="booking-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="date" />
                <select>
                  <option>Select Destination</option>
                  <option>Sigiriya</option>
                  <option>Kandy</option>
                  <option>Ella</option>
                  <option>Galle</option>
                  <option>Yala</option>
                  <option>Nuwara Eliya</option>
                </select>
                <select>
                  <option>Number of Travelers</option>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 - 5 People</option>
                  <option>6+ People</option>
                </select>
                <textarea placeholder="Tell us about your travel plan"></textarea>
                <button type="submit" className="btn btn-submit">
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                Contact us to learn more about Sri Lanka and plan your unforgettable
                holiday experience.
              </p>

              <div className="contact-details">
                <p><strong>Phone:</strong> +94 77 123 4567</p>
                <p><strong>Email:</strong> info@enjoytourguidesrilanka.com</p>
                <p><strong>Location:</strong> Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-box">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn-submit">
                  Send Message
                </button>
              </form>

              <div className="map-box">
                <iframe
                  title="Google Map Sri Lanka"
                  src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&z=11&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container center">
          <p>© 2026 Enjoy Tour Guide Sri Lanka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
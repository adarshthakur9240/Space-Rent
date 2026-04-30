import { Link } from 'react-router-dom';
import './PlotDetails.css';

export default function PlotDetails() {
  return (
    <div className="details-page">
      <main className="details-main">
        {/* Hero Header */}
        <header className="details-header">
          <div className="details-header-left">
            <div className="details-breadcrumb">
              <span className="material-symbols-outlined filled breadcrumb-icon">location_on</span>
              Sector 07-Alpha • Mare Tranquillitatis
            </div>
            <h1 className="details-title">Tranquility Base Alpha</h1>
            <p className="details-subtitle">
              A premier celestial estate featuring ancient basaltic plains and optimal Earth-line-of-sight for uninterrupted communication arrays.
            </p>
          </div>
          <div className="details-valuation">
            <span className="valuation-label">Current Market Valuation</span>
            <span className="valuation-price">4.82 M <span className="valuation-currency">LTC</span></span>
            <Link to="/checkout" className="valuation-btn">RESERVE NOW</Link>
          </div>
        </header>

        {/* Main Grid */}
        <div className="details-grid">
          {/* Left Column */}
          <div className="details-left">
            {/* Map */}
            <section className="map-section">
              <div className="map-overlay-top"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFK2Y6GbBx-XXxl8Gy-Av32rIIIE_fGSSbEvU21qowVrL0KX9gREdfj2P3kh72L3kelBPogeagDdFAkgik94J4dNkfgwMyE__lgpw_ZX6tSXq38XJd57oALf9F4n4YcWlKRkPBs0Wr9rsXfZ2budG2L10F_5Y7TaKUnM5P0fiOu6UqyI_8XwqIz5w4efCzkatrMEW_sBbhaEtRI7G_j9W5mSx05nmP0NBiY4OmyopQ2vBLPh-c__KiXM9ZJBycsJ0gBU8Hnn7F5ocO"
                alt="Lunar Topographical Map"
                className="map-image"
              />
              {/* Map Controls */}
              <div className="map-controls">
                <div className="map-control-btn">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <div className="map-control-btn">
                  <span className="material-symbols-outlined">zoom_in</span>
                </div>
              </div>
              {/* Survey Data */}
              <div className="map-survey">
                <div className="survey-header">
                  <div className="survey-dot"></div>
                  <span className="survey-label">Live Survey Data</span>
                </div>
                <div className="survey-data-grid">
                  <div>
                    <p className="survey-data-label">Coordinates</p>
                    <p className="survey-data-value">0.6741° N, 23.4730° E</p>
                  </div>
                  <div>
                    <p className="survey-data-label">Elevation</p>
                    <p className="survey-data-value">-2.34 km</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specs */}
            <div className="specs-grid">
              <div className="spec-card">
                <span className="material-symbols-outlined spec-icon">science</span>
                <div>
                  <h3 className="spec-title">Surface Composition</h3>
                  <div className="spec-bars">
                    <div className="spec-bar-row">
                      <span className="spec-bar-label">Regolith Depth</span>
                      <span className="spec-bar-value">4.2 m</span>
                    </div>
                    <div className="spec-bar-track">
                      <div className="spec-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <div className="spec-bar-row">
                      <span className="spec-bar-label">Ilmenite Conc.</span>
                      <span className="spec-bar-value">12.5%</span>
                    </div>
                    <div className="spec-bar-track">
                      <div className="spec-bar-fill" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spec-card">
                <span className="material-symbols-outlined spec-icon">thermostat</span>
                <div>
                  <h3 className="spec-title">Radiation Levels</h3>
                  <div className="spec-big-number">
                    <span className="spec-number">1.2</span>
                    <span className="spec-unit">mSv/yr</span>
                  </div>
                  <p className="spec-note">Shielding Grade: <span className="spec-highlight">Optimized Class-B</span></p>
                  <div className="spec-heat-bars">
                    <div className="heat-bar" style={{ opacity: 0.2 }}></div>
                    <div className="heat-bar" style={{ opacity: 0.4 }}></div>
                    <div className="heat-bar" style={{ opacity: 0.6 }}></div>
                    <div className="heat-bar" style={{ opacity: 0.1 }}></div>
                  </div>
                </div>
              </div>

              <div className="spec-card">
                <span className="material-symbols-outlined spec-icon">router</span>
                <div>
                  <h3 className="spec-title">Signal Fidelity</h3>
                  <p className="spec-big-text">99.98%</p>
                  <p className="spec-note">Earth-Direct Visual Line of Sight enabled.</p>
                  <div className="spec-tags">
                    <span className="spec-tag">5G LUNAR</span>
                    <span className="spec-tag">QUANTUM READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <aside className="details-right">
            {/* Proximity Archives */}
            <div className="proximity-card">
              <h2 className="proximity-title">
                <span className="material-symbols-outlined">diversity_3</span>
                PROXIMITY ARCHIVES
              </h2>
              <div className="proximity-list">
                <div className="proximity-item">
                  <div className="proximity-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6eyoh-a9Q_XBU39HhAI2CLMzY1fGjci24IukcBUndfaWhb4hCtPn8rQz066P4_OQRLiYyDU18vpVoVBCgTMH5sgh6eDizzDdE73TvayEbwZQ8wuGZ1xHqRSiKyQUu1Yqf7XEyAE70-mZlsoro7fvIEVQU0hErpuUrNJFEUspcMcGVTHdg6vJLhfI3XgXt_6J1jH_3MkNdG1-MaBElA1U2tIle6SyAXLYbT7nCQIsJ3SYugu7zPrk8yh-ecjWKDLBgzpiMfz_LM6O2"
                      alt="Zenith Mining Corp"
                    />
                  </div>
                  <div className="proximity-info">
                    <p className="proximity-name">Zenith Mining Corp</p>
                    <p className="proximity-desc">Industrial Outpost • 2.4 km</p>
                  </div>
                  <span className="material-symbols-outlined proximity-arrow">chevron_right</span>
                </div>

                <div className="proximity-item">
                  <div className="proximity-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAylgnWVYZjXN3IHqm1xaFMbGrX-kE3OyTeuVnl42hi67smxITsWSDbS9pq8WNBzQqsuQAlGIhrPtvKmmYExI8EEED7hbwVLXkOupbPsQSffAMS1S7yBQhHcjJ-F99hMLx_g6Ktmp7WgcuvUjzH-YaL2_-JJM4nFY5qoZL-ZJ9iHtWNzWB6KU68qUDhhtx9IlkIR2uJP9D0I3N2DYHlw3iVrSW2vTmVowFQQQXa14ivpeCfREKi_e1NvvMCzEJDtnAn06XajbiqicW5"
                      alt="Earthrise Villas"
                    />
                  </div>
                  <div className="proximity-info">
                    <p className="proximity-name">Earthrise Villas</p>
                    <p className="proximity-desc">Luxury Residential • 8.1 km</p>
                  </div>
                  <span className="material-symbols-outlined proximity-arrow">chevron_right</span>
                </div>

                <div className="proximity-item">
                  <div className="proximity-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJT6rPBEjCrdVFkVNHizil9x9uSXfymc--gr1_9u84Te9hugFgUlKnOCVhNHwSHNHd7w7MtZRNkf557FYP-O3w55_zBnOYDk5LyvXgaG_y1aR3kApi5hfn7RphVaPu7XAHl5Zz09hR0ktMrdwUxfkpYhRAqdC0Z-KRSYQ8-atsaz1fvIzsO9zsszviiptwUHJEfTLfPBcWWtpg1mruRcqa7sHCzpATjYEQTfydeLTl0sBwtSpxPlqInREW15gGOHv_WO3pKp1Zqg_"
                      alt="Unclaimed Lot"
                    />
                  </div>
                  <div className="proximity-info">
                    <p className="proximity-name">Unclaimed Lot 409</p>
                    <p className="proximity-desc">Available for Merger • 0.5 km</p>
                  </div>
                  <span className="material-symbols-outlined proximity-arrow">add_circle</span>
                </div>
              </div>

              {/* Ownership Privileges */}
              <div className="privileges">
                <h4 className="privileges-title">Ownership Privileges</h4>
                <ul className="privileges-list">
                  <li>
                    <span className="material-symbols-outlined filled privilege-check">check_circle</span>
                    Perpetual mining rights (non-radioactive)
                  </li>
                  <li>
                    <span className="material-symbols-outlined filled privilege-check">check_circle</span>
                    Low-gravity structural permit included
                  </li>
                  <li>
                    <span className="material-symbols-outlined filled privilege-check">check_circle</span>
                    Subterranean lava tube access potential
                  </li>
                </ul>
              </div>
            </div>

            {/* Transport Card */}
            <div className="transport-card">
              <div className="transport-glow"></div>
              <h3 className="transport-title">Transport Ready</h3>
              <p className="transport-desc">Secure transit for modular habitats from Earth Low Orbit via Orbit Status Protocol.</p>
              <button className="transport-btn">
                View Transit Options
                <span className="material-symbols-outlined transport-arrow">arrow_forward</span>
              </button>
            </div>
          </aside>
        </div>

        {/* Descriptive Content */}
        <section className="narrative-section">
          <div className="narrative-image-wrapper">
            <div className="narrative-orbit"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh-dYSxjvq11u4IPWMOjDSbrgIeNuU5-iDZhhL2c4yjCzKYxBLvZCpMEOfl4gbFU0M0nhhJiICzG-7p1Sk_u-jHOqcR-PnfwXaz9tWa4fS0agxK9uoDADGEl0vcYpLxTn8I6a8pgZ-MiL5REsIXRMRAytqfCSiFmzsbW0hBpyzLXPPgNA-OsO51AggthGlyPCkhKfASsvP85JnmVM26mutX2EVeEnt1_eVO9kmLaa-DkAkmL1k22I6egSMZMuFtc2R0l3pzb4zM1-s"
              alt="Lunar Horizon"
              className="narrative-image"
            />
          </div>
          <div className="narrative-text">
            <h2 className="narrative-title">The Future of Tranquillitatis</h2>
            <div className="narrative-body">
              <p>Tranquility Base Alpha represents a unique confluence of historical significance and future-state viability. Nestled on a relatively flat plateau, it avoids the extreme shadow zones of polar regions while maintaining a stable thermal profile suitable for permanent habitation.</p>
              <p>The subsurface composition reveals a high concentration of Helium-3 and iron-rich oxides, providing long-term resource independence for self-sustaining colonies. Every centimeter of this 4.8 hectare plot has been laser-mapped at sub-millimeter resolution.</p>
            </div>
            <div className="narrative-stats">
              <div className="stat">
                <span className="stat-value">4.8</span>
                <span className="stat-label">Hectares</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Solar Opt.</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">Alpha</span>
                <span className="stat-label">Sector Grade</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <div className="fab-wrapper">
        <button className="fab-btn glass-effect">
          <span className="material-symbols-outlined fab-icon">rocket_launch</span>
          <span className="fab-text">SCHEDULE VIRTUAL TOUR</span>
        </button>
      </div>
    </div>
  );
}

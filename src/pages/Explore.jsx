import { Link } from 'react-router-dom';
import './Explore.css';

const plots = [
  {
    id: 'zenith-ridge-01',
    name: 'Zenith Ridge 01',
    coords: '0.6741° N, 23.4730° E',
    price: '2,450,000',
    badge: 'PRIME SECTOR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZCokrgYylvkNWkaapKEc4ldafHCdvvupWWdAF0EAdq4CdbTYXCoQMT0XKaYJUqbgtCgRAGV1V0rcZcASF2sLv2WmxtnOQZNc4p7dnLncfle-iHBlinH33VeBZVG-8tIYQ2AxGwOXln4ln_Sn9xRJgt0eokBPVfMD-shfEDUSecXFHFGJ_qYeBMwOVXZ9AcUbB8N-cngwITMdE5HYVHSkhbHQtO4j8TPj23xpY0AMZbGJfUTYZVK6TXDJJKwTD9ANk5sYsToeqDdP',
  },
  {
    id: 'shackleton-outpost',
    name: 'Shackleton Outpost',
    coords: '89.9000° S, 0.0000° E',
    price: '4,120,000',
    badge: 'EARTHRISE VIEW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfTaIiTdgcd6oWtjDhoOSj0-jG0NnYVTSFs8PRnacGSfuthCZgrxsYmHcO65PeHLZ9MPLuJPd1k-UMFm53t1T7XIopLO--IDJIqcfGCiWXAHjiWKb4QdHKn02VjLHPivhFte1sW7kM4_pnzHsAMq_IyrSmFK6D2LEliUt6zYkwS6YH-NMHtue-11pw1CdXy0vOWtrdUs6ilD-jqARvpcNnXqCK6r4iUSVWuN1bnPcMq7WG2nN-Q_fPveV8--VR8JcEmz9AH4Ctjb6V',
  },
  {
    id: 'tranquility-basin',
    name: 'Tranquility Basin',
    coords: '0.6872° N, 23.4452° E',
    price: '1,890,000',
    badge: 'HERITAGE RADIUS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATjxoaCvu2JrhBtAwHuUCoxEG_pgYw9jS-WtUDiPmFPv_5_lw_eErh31-mul9X0f0xuweVrqbSrN0mB5WZIMP8LFehsQR_caTSoQ1InFYr0-bPudl0ozwalwHVh8PmdKQcrIxz7_rgjInOmt4QQ1NOCXC4uHecxG4ZZyafjJcCk9YtFJos2wt9yhUGbDGEbsuQNFkaJy0j-bYjquCypfoMgrGlC4JgL5fT-lq6ihudcxUyAsHdtQ84VJgNFh8C97jpJIix7atgdAzR',
  },
  {
    id: 'mare-nubium',
    name: 'Mare Nubium Site',
    coords: '19.1000° S, 15.0000° W',
    price: '950,000',
    badge: 'INDUSTRIAL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbQXz5x2aenj0qRfIJv9wu3hRdqrrwQ6YTIYVdR844cCaVXIc786MpI3C00YQp7KJZyIrYZzmzG3er1EMSnUzgP-sa15ugAnbmIg8fEs3gD8pOUGoV8IB_m_tt5PAT0BcbXsEn7oF1YihzIFQUYy-eQwqaZBp0wNef7_rutUZgi5halKOh_uIg9Xmo6iBg-a435yyTZNsARcKCa4VjuG6ZqRlKfZCTn1D_8lIpSwsh7EX_H93uoRmypyC1qrbbl_lqaGsIGi20-hOP',
  },
  {
    id: 'oceanus-procellarum',
    name: 'Oceanus Procellarum',
    coords: '18.4000° N, 57.4000° W',
    price: '3,700,000',
    badge: 'SOLAR OPTIMIZED',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrDlIvz_3A3ziFARdFWpIDYvzJcQw4V0Jl5iqzDob_hqOn3BzdcNoqukQmnemVgLqpTAjW61ZCjQvMeeCyfIEYMMdLZVtWSuZJUcvzw7MrxbB-dfDaS7RW2jTFUnj9e5-uMeHzhdC0QXikGrCr5Tc8WIEW1UMFJ8KX2EsYuDRtQylma4XMnxP9C4Nw5psH6N84uSUmvXVd2LkjGWENZ4w3PI9iRE3k-TJKHS3SrfX8Xbf0_KVfxF0_EDX-SriE0T3UNZD8GqLtBqq2',
  },
  {
    id: 'tycho-crater',
    name: 'Tycho Crater Rim',
    coords: '43.3000° S, 11.2000° W',
    price: '5,200,000',
    badge: 'ULTRA RARE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2NEHQ2vhamL_39UHtJbTKV9mYU6YD_GhvQ6f2VhTiERySEifex0s2if5LOpZb8Q7HVplWHg9KJv76xVSrNHG9Zh1j_P_RofzYTY3nDA2NKABtrPZ3WMF6PpevlhRpPdbyLNPtkQGunlc8XWc9oMcLZqFVsqlCnlFLyrRW1_udTuxHiFSoyM77SRf72HTIIRvpgQDylkOSSDtJ5TLTB1gUVRP-GvbUEuAXbdJbgGFemQFo9XHytawiZtjs4EkkjRYPdSUaIlVK68ar',
  },
];

export default function Explore() {
  return (
    <div className="explore-page">
      <main className="explore-main">
        {/* Hero */}
        <section className="explore-hero">
          <div className="explore-hero-content">
            <div className="explore-hero-text">
              <h1 className="explore-title">
                Lunar <span className="text-accent">Realms</span> Explorer
              </h1>
              <p className="explore-subtitle">
                Acquire your fragment of the celestial silent. From the heights of the Lunar Alps to the depth of the Mare Tranquillitatis, curate your extra-terrestrial legacy.
              </p>
            </div>
            <div className="explore-telemetry">
              <span className="material-symbols-outlined filled telemetry-icon">language</span>
              <span className="telemetry-info">
                <span className="telemetry-label">LIVE TELEMETRY</span>
                <span className="telemetry-value">SEA OF TRANQUILITY SECTOR 4</span>
              </span>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="explore-filters">
          <div className="filters-bar">
            <div className="filter-group">
              <label className="filter-label">Sunlight Exposure</label>
              <div className="filter-select-wrapper">
                <select className="filter-select">
                  <option>Perpetual Peak (90%+)</option>
                  <option>Standard Cycle</option>
                  <option>Shadowed Basin</option>
                </select>
                <span className="material-symbols-outlined filter-arrow">expand_more</span>
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <label className="filter-label">Earth View</label>
              <div className="filter-select-wrapper">
                <select className="filter-select">
                  <option>Full Disk Visible</option>
                  <option>Partial Horizon</option>
                  <option>Far Side (Dark)</option>
                </select>
                <span className="material-symbols-outlined filter-arrow">expand_more</span>
              </div>
            </div>

            <div className="filter-divider"></div>

            <div className="filter-group">
              <label className="filter-label">Proximity to Apollo Sites</label>
              <div className="filter-select-wrapper">
                <select className="filter-select">
                  <option>Heritage Zone (&lt;50km)</option>
                  <option>Outpost Reach</option>
                  <option>Wilderness</option>
                </select>
                <span className="material-symbols-outlined filter-arrow">expand_more</span>
              </div>
            </div>

            <div className="filter-advanced">
              <span className="material-symbols-outlined filter-advanced-icon">filter_list</span>
              ADVANCED FILTERS
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <div className="plots-grid">
          {plots.map((plot) => (
            <Link to={`/plot/${plot.id}`} key={plot.id} className="plot-card">
              <div className="plot-image-wrapper">
                <img src={plot.image} alt={plot.name} className="plot-image" />
                <div className="plot-vignette"></div>
                <div className="plot-badge">{plot.badge}</div>
              </div>
              <div className="plot-info">
                <div className="plot-header">
                  <div>
                    <h3 className="plot-name">{plot.name}</h3>
                    <p className="plot-coords">
                      <span className="material-symbols-outlined coords-icon">location_on</span>
                      {plot.coords}
                    </p>
                  </div>
                </div>
                <div className="plot-footer">
                  <div className="plot-price-block">
                    <span className="plot-price-label">Market Value</span>
                    <span className="plot-price">{plot.price} <span className="plot-currency">CRD</span></span>
                  </div>
                  <span className="plot-view-btn">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK6YFjBNiiXflgcHdfY8a9hhTab0xOzUxqM97mZdaxfXrcNx4zUKEjHXtAOwGTPLhUOVK2RYTSE515c2eAtrneINQezWWuQK49HkPpZ1qt49p32bX1QGdm2x3gmiT6liE6kiU9ksLwdBUxySDpCI_ZPSzpJvUAkLicOATTeAPVXrgMeOgwHbji-oZD1zJEEwCxmorVHlXkllc4AQtmMev5xtTLWbkH-zv5AF4j3Km84CPMB05CBq3q_Ko_eZClePQU_aAc9ZpxjeBE"
            alt="Earth from Moon"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
          <div className="hero-darken"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            SOVEREIGNTY <br /> <span className="hero-title-accent">BEYOND THE SKY</span>
          </h1>
          <p className="hero-subtitle">
            The next frontier of luxury real estate is no longer Earth-bound. Secure your legacy with curated lunar acreage in the most prestigious orbital sectors.
          </p>
          <div className="hero-actions">
            <Link to="/explore" className="btn-primary-lg">Claim Your Plot</Link>
            <Link to="/explore" className="btn-outline-lg">View Catalog</Link>
          </div>
        </div>
      </section>

      {/* Why the Moon Section */}
      <section className="why-section">
        <div className="why-header">
          <div className="why-header-left">
            <span className="section-label">Manifest Destiny</span>
            <h2 className="section-title">WHY THE MOON?</h2>
          </div>
          <p className="why-description">
            LunaTerra offers more than just land; we offer a strategic asset in the burgeoning cislunar economy, combining absolute privacy with unparalleled cosmic status.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card bento-large">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyRqDQFDdKaWyUP4S6zz5CUhWpxTyaE4kfkXXGNHw9eeKRm4-coDbhvoe3aXBi8e2Qo5OvVyBgWWWQap43nOYkKrCpuGT96gBJ0wHiPuI_lViXxw_jpUEc1nSU0W0Yxu1v1pcFOFA7koQNhvb1lTmR89zrpTyEcgn9LW332HV__SDBmTy9tF5bdjDWWnT3qUKKD-yRqstFnD8INGVRw_geYX3T0NY1BqgAR9FtdHQDdHQs2moF5mDd30ppxWEumPP95lsB9DdE9YU8"
              alt="Lunar Concept"
              className="bento-bg-image"
            />
            <div className="bento-content">
              <h3 className="bento-title">Resource Sovereignty</h3>
              <p className="bento-desc">Proprietary access to Helium-3 deposits and deep-crater water ice reserves for future-proof energy and life support.</p>
            </div>
          </div>

          <div className="bento-card bento-accent">
            <span className="material-symbols-outlined bento-icon">deployed_code</span>
            <div>
              <h3 className="bento-title">Strategic Location</h3>
              <p className="bento-desc-accent">Uninterrupted deep-space communications and optimal launch windows for Martian transit trajectories.</p>
            </div>
          </div>

          <div className="bento-card bento-small">
            <h3 className="bento-title-sm">Lunar Exclusivity</h3>
            <p className="bento-desc-sm">Only 0.001% of the lunar surface is designated for private luxury development. Own what others can only observe.</p>
          </div>

          <div className="bento-card bento-wide">
            <div className="bento-wide-content">
              <h3 className="bento-title-sm">Heritage Preservation</h3>
              <p className="bento-desc-sm">Every plot is registered within the LUNATERRA ARCHIVES, ensuring generational wealth transfer across planetary borders.</p>
            </div>
            <span className="material-symbols-outlined bento-watermark">verified_user</span>
          </div>
        </div>
      </section>

      {/* Prime Territories */}
      <section className="territories-section">
        <div className="territories-header">
          <h2 className="section-title">PRIME TERRITORIES</h2>
        </div>
        <div className="territories-scroll no-scrollbar">
          {/* Territory Card 1 */}
          <div className="territory-card">
            <div className="territory-card-inner">
              <div className="territory-image-wrapper">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMFWi7Ty1ZYnH3lkYWifHOb5pg2UK9JNbANmQ0Z8AiEgwifgbh1oy09yueQ8-iWAztpM-wTyvh8rutUUlHSUrS4oq96zz8eOZaCzgdL1iPAyJHx8m3-v0I5o0t7H55pYvn17OX2PM8q3jSuUZ1eTdu0y5xto5YD7OQCEAR1MO7QpozZ1Mr338KlpFLdgqG1sylGAe5tKno0KoPPY7D25yrHZ8Qgrn-xYpVZIuCi_WgwiqeAA7CBKAT-P8YS-5hz6EZ5zw_f4oDza2Z"
                  alt="Sea of Tranquility"
                  className="territory-image"
                />
                <div className="territory-image-overlay"></div>
                <div className="territory-image-info">
                  <span className="territory-badge">Apollo Heritage Site</span>
                  <h3 className="territory-name">Sea of Tranquility</h3>
                </div>
              </div>
              <div className="territory-details">
                <div className="territory-meta">
                  <span className="territory-meta-label">Available Plots</span>
                  <span className="territory-meta-value">04 Left</span>
                </div>
                <p className="territory-desc">
                  Historically significant and gravitationally stable. Ideal for first-generation villas and observation outposts.
                </p>
                <Link to="/explore" className="territory-btn">Explore Sector</Link>
              </div>
            </div>
          </div>

          {/* Territory Card 2 */}
          <div className="territory-card">
            <div className="territory-card-inner">
              <div className="territory-image-wrapper">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMC140dlO6QkQNIHT7_YT4zGpoxA4bBfwsZkBVfpsZd3hcCdnJ35vcUd7IAYkaXSnMFnmNBobF42MXVtmzPQIzJIlXpZ0CKPJOTaU0jmd8eJvkQTttkzGRiiNelwcFdz4J0C4yJsu7uZ0vqehB8W70ZSugWReCe_7VKedMb333RdF_q3eyT7SwCCaRNdKAxS7ARq6ciPlNqUpM5uBhelnsgVjVSHmeH2b4hKQmdIuPw2bwMh7vLy_WShiHl8EC7AAJCasardKBKTqW"
                  alt="Ocean of Storms"
                  className="territory-image"
                />
                <div className="territory-image-overlay"></div>
                <div className="territory-image-info">
                  <span className="territory-badge">Industrial Hub</span>
                  <h3 className="territory-name">Ocean of Storms</h3>
                </div>
              </div>
              <div className="territory-details">
                <div className="territory-meta">
                  <span className="territory-meta-label">Available Plots</span>
                  <span className="territory-meta-value">12 Left</span>
                </div>
                <p className="territory-desc">
                  The largest of the lunar maria. Expansive vistas and rich in mineral deposits for large-scale architectural projects.
                </p>
                <Link to="/explore" className="territory-btn">Explore Sector</Link>
              </div>
            </div>
          </div>

          {/* Territory Card 3 */}
          <div className="territory-card">
            <div className="territory-card-inner">
              <div className="territory-image-wrapper">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjT-EBWWM9xvj0DyA3tic1CN7cu5-vZXTvvwuiaGJ4rKzdJZF5G4Uu5vHlQpl0bn7TXmx38KDiaQAS96A_hrKDNsqOfhu3wBMNgHLyhT7GjXP8xcDa1b_o9l5WvdQHA_hT2X4ITZ5Nufj8ZfUZ0cl3goHplcHEpXFoLW5FaSCCm9wOawUF1rIB2ZGrFOaUzt_XK9oSAd-9yD8mX7V3vejzQ-afMGKhnBDmI6WiiBjYztyGMRDbttVzVeCbCBXKQ-drDRwUxCRnPx3f"
                  alt="Tycho Crater"
                  className="territory-image"
                />
                <div className="territory-image-overlay"></div>
                <div className="territory-image-info">
                  <span className="territory-badge">Highlands</span>
                  <h3 className="territory-name">Tycho Highlands</h3>
                </div>
              </div>
              <div className="territory-details">
                <div className="territory-meta">
                  <span className="territory-meta-label">Available Plots</span>
                  <span className="territory-meta-value">02 Left</span>
                </div>
                <p className="territory-desc">
                  Breathtaking topography with high-elevation vantage points. Perfect for secluded retreats and private observatories.
                </p>
                <Link to="/explore" className="territory-btn">Explore Sector</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership Protocol */}
      <section className="protocol-section">
        <div className="protocol-content">
          <h2 className="section-title protocol-title">OWNERSHIP PROTOCOL</h2>
          <div className="protocol-steps">
            <div className="protocol-step">
              <span className="protocol-number">01</span>
              <h3 className="protocol-step-title">SECTOR SELECTION</h3>
              <p className="protocol-step-desc">Utilize our high-resolution orbital telemetry to select your coordinates. Our team provides multispectral analysis of soil composition and sunlight cycles.</p>
            </div>
            <div className="protocol-step">
              <span className="protocol-number">02</span>
              <h3 className="protocol-step-title">LEGAL FRAMEWORK</h3>
              <p className="protocol-step-desc">Secure your title through the LunaTerra Archives—a decentralized registry recognized by terrestrial maritime law and orbital jurisdiction treaties.</p>
            </div>
            <div className="protocol-step">
              <span className="protocol-number">03</span>
              <h3 className="protocol-step-title">SOVEREIGN MINTING</h3>
              <p className="protocol-step-desc">Each plot is minted as a unique physical and digital certificate, authenticated by the Outer Space Treaty Compliance Board.</p>
            </div>
          </div>

          <div className="protocol-cta-box">
            <div className="protocol-cta-content">
              <div className="protocol-cta-text">
                <h4 className="protocol-cta-title">Ready to transcend?</h4>
                <p className="protocol-cta-desc">Speak with an Orbital Concierge today for a private portfolio review.</p>
              </div>
              <button className="btn-primary-sm">Consult Concierge</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

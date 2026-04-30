import { useState } from 'react';
import './Checkout.css';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('credits');

  return (
    <div className="checkout-page">
      <main className="checkout-main">
        {/* Stepper */}
        <div className="stepper">
          <div className="step completed">
            <span className="step-number">01</span>
            <span className="step-label">Selection</span>
          </div>
          <div className="step-line"></div>
          <div className="step active">
            <span className="step-number step-number-active">02</span>
            <span className="step-label step-label-active">Verification & Payment</span>
          </div>
          <div className="step-line"></div>
          <div className="step pending">
            <span className="step-number step-number-pending">03</span>
            <span className="step-label step-label-pending">Confirmation</span>
          </div>
        </div>

        <div className="checkout-grid">
          {/* Left Column */}
          <div className="checkout-left">
            {/* Deed Verification */}
            <section className="checkout-section">
              <div className="section-header">
                <div className="section-icon-wrapper">
                  <span className="material-symbols-outlined section-icon">verified_user</span>
                </div>
                <div>
                  <h2 className="section-heading">Deed Verification</h2>
                  <p className="section-subheading">Establishing sovereign link to Lunar Registry Archives</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label className="form-label">Full Legal Identity</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="CITIZEN NAME"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Registry ID / Passport</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="UID-000-XXXX-LT"
                  />
                </div>
              </div>

              <div className="info-box">
                <span className="material-symbols-outlined info-icon">info</span>
                <p className="info-text">
                  By proceeding, you authorize LunaTerra to perform a biometric hash verification against the Interstellar Citizen Database. This deed will be recorded on the Lunar Sovereignty Ledger (LSL) in perpetuity.
                </p>
              </div>
            </section>

            {/* Payment Options */}
            <section className="checkout-section">
              <div className="section-header">
                <div className="section-icon-wrapper">
                  <span className="material-symbols-outlined section-icon">account_balance_wallet</span>
                </div>
                <div>
                  <h2 className="section-heading">Settlement Method</h2>
                  <p className="section-subheading">Select your preferred transaction protocol</p>
                </div>
              </div>

              <div className="payment-grid">
                <div
                  className={`payment-option ${paymentMethod === 'credits' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('credits')}
                >
                  {paymentMethod === 'credits' && (
                    <span className="material-symbols-outlined filled payment-check">check_circle</span>
                  )}
                  <span className="material-symbols-outlined payment-type-icon">currency_bitcoin</span>
                  <h3 className="payment-name">Interstellar Credits</h3>
                  <p className="payment-desc">Instant Settlement</p>
                </div>

                <div
                  className={`payment-option ${paymentMethod === 'fiat' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('fiat')}
                >
                  {paymentMethod === 'fiat' && (
                    <span className="material-symbols-outlined filled payment-check">check_circle</span>
                  )}
                  <span className="material-symbols-outlined payment-type-icon secondary">payments</span>
                  <h3 className="payment-name">Quantum Fiat</h3>
                  <p className="payment-desc">Global Currencies</p>
                </div>

                <div
                  className={`payment-option ${paymentMethod === 'reserve' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('reserve')}
                >
                  {paymentMethod === 'reserve' && (
                    <span className="material-symbols-outlined filled payment-check">check_circle</span>
                  )}
                  <span className="material-symbols-outlined payment-type-icon secondary">account_balance</span>
                  <h3 className="payment-name">Luna Credit Reserve</h3>
                  <p className="payment-desc">Institutional Lines</p>
                </div>
              </div>

              {/* Wallet Info */}
              <div className="wallet-box">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdZbdxhLVkeiAiRESiIY3x1Rxob30qlfWUe4RKOOt5OHhMiBF5eeX75G_DE95LbwPSIGl3sD5_Jv5SCDCXNerdQyBd-KteOVjS1LN2IP0oxWE9Alz59xm6ihSZWAJRtn-hCtgC14A9jga7BOY_4cEsJruJxyuzhyO5XjJZ3LwjAcu0o2WS48QiGGflZCViDPyXaX2-efpi6mg4lD1-e87di7FHXoa4Tte9Z733rFjHqK8h58NIp9W0u_N-wAYT25xVXhGZqemrcwEa"
                  alt="Wallet"
                  className="wallet-thumb"
                />
                <div className="wallet-info">
                  <p className="wallet-address">Wallet Address: 0xLUNA...F74E</p>
                  <p className="wallet-balance">Balance: 1.428.000 ISC</p>
                </div>
                <button className="wallet-change">Change</button>
              </div>
            </section>
          </div>

          {/* Right Column / Summary */}
          <aside className="checkout-right">
            <div className="summary-card">
              <div className="summary-image-wrapper">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRogMqhEpuTHjKaZTt15rkzTwk8Cw7j31vA1yg_SKu21MI9CzppmyhSVAZp4aH137iBHN5OHzufrsMW8Op73aa_UVR4tRcuZkyeQ9gQ9Y3C9DckhqbDfD4Xi509QHBxhATF6gO79rMUk7HpP4I0QMSKmoGRPoUNWgq6FMO4jirOK6amK70bE0ZWttyenCTb7cw7Ei5Hjw9uHARttCL_bmsz4YuIwRGAlyLtaEHaZYc59WDoc_fMnWdRzJKlWTukgqpqJUrUkJJeOvM"
                  alt="Lunar Surface Plot"
                  className="summary-image"
                />
                <div className="summary-image-overlay"></div>
                <div className="summary-image-badge">Mare Tranquillitatis</div>
              </div>

              <div className="summary-body">
                <div className="summary-title-block">
                  <h3 className="summary-title">Sector 7-G | Prime Zenith</h3>
                  <p className="summary-coords">Coordinates: 0.6741° N, 23.4730° E</p>
                </div>

                <div className="summary-lines">
                  <div className="summary-line">
                    <span>Plot Size</span>
                    <span className="summary-value">2.4 Hectares</span>
                  </div>
                  <div className="summary-line">
                    <span>Mineral Rights</span>
                    <span className="summary-value">Level 3 (Titanium)</span>
                  </div>
                  <div className="summary-line">
                    <span>Lease Duration</span>
                    <span className="summary-value">99 Solar Years</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-line">
                    <span>Plot Value</span>
                    <span className="summary-value">850,000 ISC</span>
                  </div>
                  <div className="summary-line">
                    <span>Bureaucracy Fees</span>
                    <span className="summary-value">12,500 ISC</span>
                  </div>
                  <div className="summary-total">
                    <span>Total Due</span>
                    <span>862,500 ISC</span>
                  </div>
                </div>

                <div className="summary-actions">
                  <div className="terms-row">
                    <input type="checkbox" id="terms" className="terms-checkbox" />
                    <label htmlFor="terms" className="terms-label">
                      I acknowledge the LunaTerra Sovereign Protocol and the extraterrestrial land management act.
                    </label>
                  </div>

                  <button className="authorize-btn">
                    <span>Authorize Acquisition</span>
                    <span className="material-symbols-outlined authorize-icon">rocket_launch</span>
                  </button>

                  <p className="encrypt-notice">Transaction secured via 256-bit quantum encryption</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <span className="material-symbols-outlined trust-icon">verified</span>
              <span className="material-symbols-outlined trust-icon">shield_with_heart</span>
              <span className="material-symbols-outlined trust-icon">public</span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

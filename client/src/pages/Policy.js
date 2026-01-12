import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Policy.css";

const About = () => {
  return (
    <Layout title="Privacy Policy - Ecommerce App">
      <div className="about-container">
        <div className="about-wrapper">
          
          {/* LEFT IMAGE */}
          <div className="about-image">
            {/* Replace src with your own image */}
            <img
              src="/images/Policy.png"
              alt="Policy of Our Company "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <h1>Company Policy</h1>

            <p>
              We respect your privacy and are committed to protecting your personal information. 
              We collect details such as name, contact information, and shipping address only to process orders and improve our services.
               Your data is never sold and is shared only with trusted partners required to complete your purchase.
            </p>

            <p>
              Returns are accepted within 7–14 days of delivery. 
              Items must be unused, unwashed, and returned with original tags. 
              Refunds will be processed to the original payment method within 5–7 business days after inspection.
            </p>

            <ul>
              <li>✅ Return eligibility (days, condition, tags)</li>
              <li>✅ Non-returnable items (sale items , innerwear , customized pieces)</li>
              <li>✅ Refund method and time</li>
              <li>✅ Exchange Policy</li>
            </ul>

            <div className="about-actions">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/policy" className="btn-primary">
                About Us 
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;

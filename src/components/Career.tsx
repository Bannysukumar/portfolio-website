import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Developer (Intern)</h4>
                <h5>Sync AI Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Hands-on internship experience in Blockchain development, working
              with Solidity, Ethereum smart contracts, and Web3 technologies.
              Built and tested ERC-20 tokens and contributed to decentralized
              application (DApp) projects, focusing on smart contract logic and
              integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Chief Executive Officer (CEO)</h4>
                <h5>Trivexa Technologies Private Limited</h5>
                <h5>Kanchipuram, Tamil Nadu, India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Founded Trivexa Technologies Private Limited with a focus on
              delivering specialized software solutions and reliable IT
              maintenance services. Responsible for defining the company’s
              strategic vision, overseeing end-to-end business operations,
              managing capital and resources, and driving growth in the IT
              services sector. Led the team to ensure high-quality software
              support, efficient project execution, and the development of
              strong, long-term client relationships.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently seeking entry-level Blockchain Developer roles</h4>
                <h5>
                  to apply and grow my skills in real-world projects.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

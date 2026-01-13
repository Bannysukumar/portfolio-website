import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkImage from "./WorkImage";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Mana Code Playground</h4>
                  <p>Online Code Editor / Playground</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a
                  href="https://mana-code-playground.vercel.app/login"
                  target="_blank"
                >
                  https://mana-code-playground.vercel.app/login
                </a>
              </h4>
              <p>
                A browser-based code playground that allows users to write, test,
                and manage code projects in real time with a clean
                developer-focused interface.
              </p>
            </div>
            <iframe
              src="https://mana-code-playground.vercel.app/login"
              title="Mana Code Playground"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>JNTUH Results Platform</h4>
                  <p>Education Web Platform</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a
                  href="https://manajntuhresults.vercel.app/"
                  target="_blank"
                >
                  https://manajntuhresults.vercel.app/
                </a>
              </h4>
              <p>
                A results and information portal built for students with fast
                search, responsive UI, and ad-based monetization integration.
              </p>
            </div>
            <iframe
              src="https://manajntuhresults.vercel.app/"
              title="JNTUH Results Platform"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Decentralized Staking Platform</h4>
                  <p>Web3 / Blockchain Project</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a
                  href="https://decentralized-staking-whxq.vercel.app/"
                  target="_blank"
                >
                  https://decentralized-staking-whxq.vercel.app/
                </a>
              </h4>
              <p>
                A decentralized staking application allowing users to connect
                wallets, stake tokens, and interact with smart contracts securely.
              </p>
            </div>
            <WorkImage
              image="/images/react2.webp"
              alt="Decentralized Insurance Platform"
            />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Decentralized Insurance Platform</h4>
                  <p>Blockchain / DApp</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a
                  href="https://decentralized-insurance-platform-xn.vercel.app/"
                  target="_blank"
                >
                  https://decentralized-insurance-platform-xn.vercel.app/
                </a>
              </h4>
              <p>
                A blockchain-based insurance concept platform showcasing
                decentralized policies, transparency, and smart contract logic.
              </p>
            </div>
            <iframe
              src="https://decentralized-insurance-platform-xn.vercel.app/"
              title="Decentralized Insurance Platform"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Binary MLM Platform</h4>
                  <p>FinTech / Referral System</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a
                  href="https://binary-mlm-plan-frontend.vercel.app/login"
                  target="_blank"
                >
                  https://binary-mlm-plan-frontend.vercel.app/login
                </a>
              </h4>
              <p>
                A binary MLM-based web application with structured referral logic,
                dashboards, and authentication flow.
              </p>
            </div>
            <iframe
              src="https://binary-mlm-plan-frontend.vercel.app/login"
              title="Binary MLM Platform"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>SPA Website</h4>
                  <p>Single Page Application</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a href="https://spa-website-two.vercel.app/" target="_blank">
                  https://spa-website-two.vercel.app/
                </a>
              </h4>
              <p>
                A modern single-page website with smooth navigation, responsive
                layout, and optimized UI performance.
              </p>
            </div>
            <iframe
              src="https://spa-website-two.vercel.app/"
              title="SPA Website"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>07</h3>
                <div>
                  <h4>TrustNFT</h4>
                  <p>NFT & Web3 Platform</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a href="https://trustnft-live.vercel.app/" target="_blank">
                  https://trustnft-live.vercel.app/
                </a>
              </h4>
              <p>
                An NFT-focused platform designed to showcase digital assets with
                Web3 integration and decentralized concepts.
              </p>
            </div>
            <iframe
              src="https://trustnft-live.vercel.app/"
              title="TrustNFT"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>08</h3>
                <div>
                  <h4>Thanvish</h4>
                  <p>Business / Brand Website</p>
                </div>
              </div>
              <h4>
                🔗 <a href="https://thanvish.com" target="_blank">https://thanvish.com</a>
              </h4>
              <p>
                A professional business website focused on branding, services,
                and digital presence.
              </p>
            </div>
            <iframe
              src="https://thanvish.com"
              title="Thanvish"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>09</h3>
                <div>
                  <h4>Thanvish Travel</h4>
                  <p>Travel Website</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a href="https://thanvish.travel" target="_blank">
                  https://thanvish.travel
                </a>
              </h4>
              <p>
                A travel services website with clean design, service sections,
                and user-friendly navigation.
              </p>
            </div>
            <iframe
              src="https://thanvish.travel"
              title="Thanvish Travel"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>10</h3>
                <div>
                  <h4>S Web Bird Shop</h4>
                  <p>E-Commerce Website</p>
                </div>
              </div>
              <h4>
                🔗{" "}
                <a href="https://swebirdshop.com/" target="_blank">
                  https://swebirdshop.com/
                </a>
              </h4>
              <p>
                An e-commerce platform designed for product showcasing, business
                presence, and customer engagement.
              </p>
            </div>
            <iframe
              src="https://swebirdshop.com/"
              title="S Web Bird Shop"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

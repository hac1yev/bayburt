import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/footer-logo.svg";
import linkedin from "../../assets/images/link.svg";
import twitter from "../../assets/images/twit.svg";
import ytb from "../../assets/images/ytb.svg";
import butaLogo from "../../assets/images/buta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleTop = ()=>{
    window.scrollTo(0, 0);
  }
  return (
    <div className="main-footer-cont">
      <div className="inner-cont-1">
        <div className="footer-div-inner-2 row">
          <div className="col-lg-5 col-md-12">
            <p className="input-p">
              Yeniliklərdən xəbərdar olmaq üçün E-mail ünvanımıza qeydiyyatdan
              keçin.
            </p>
            <div className="footer-input">
              <input type="email" placeholder="YOUR@EMAIL.COM" />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                >
                  <path
                    d="M15.333 2.31396L23 10.5001M23 10.5001L15.333 18.6862M23 10.5001H1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 footer-ul-1">
            <ul>
              <li>
                <Link onClick={handleTop}>SAYT XƏRİTƏSİ</Link>
              </li>
              <li>
                <Link onClick={handleTop}>İSTİFADƏ ŞƏRTLƏRİ</Link>
              </li>
              <li>
                <Link onClick={handleTop}>İNFORMASİYA CƏMİYYƏTİ XİDMƏTLƏRİ</Link>
              </li>
              <li>
                <Link to='/about/politics' onClick={handleTop}>ŞİRKƏT SİYASƏTİMİZ</Link>
              </li>
              <li>
                <Link onClick={handleTop}>KARYERA</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 adress-info">
            <p>+90(312) 229 08 08</p>
            <a href="mailto:info@bayburtgrup.com.tr">
              İNFO@BAYBURTGRUP.COM.TR
            </a>{" "}
            <br />
            <span>Anıttepe Məh. Işık küç. No: 20 Çankaya /ANKARA</span>
          </div>
          <div className="col-lg-1 col-md-12 footer-logo-div">
            <img src={footerLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="inner-cont-2">
        <div className="footer-div-2">
          <div className="footer-div-inner">
            <div className="social-icons-footer">
              <div>
                <img src={linkedin} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
              <div>
                <img src={ytb} alt="" />
              </div>
            </div>
            <div className="comp-name-footer">
              <span>Bütün Hüquqlar Qorunur.</span>
              <a href="https://www.butagrup.com.tr/" target="_blank" rel="noreferrer">
                <img src={butaLogo} alt="buta-logo" />
              </a>
            </div>
            <div className="copyright-footer">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M7.8125 0.341309C3.5 0.341309 0 3.99633 0 8.49984C0 13.0033 3.5 16.6584 7.8125 16.6584C12.125 16.6584 15.625 13.0033 15.625 8.49984C15.625 3.99633 12.125 0.341309 7.8125 0.341309ZM7.8125 15.0267C4.375 15.0267 1.5625 12.0896 1.5625 8.49984C1.5625 4.91008 4.375 1.97301 7.8125 1.97301C11.25 1.97301 14.0625 4.91008 14.0625 8.49984C14.0625 12.0896 11.25 15.0267 7.8125 15.0267Z"
                  fill="white"
                />
                <path
                  d="M5.75 5.98678C6.03125 5.66044 6.375 5.39937 6.78125 5.2362C7.1875 5.04039 7.59375 4.94249 8.03125 4.94249C8.5625 4.94249 9.09375 5.07303 9.53125 5.36673C9.96875 5.62781 10.375 6.01942 10.6562 6.44366L11.7812 5.56254C11.3438 4.97512 10.8125 4.45298 10.1875 4.12664C9.53125 3.76766 8.84375 3.60449 8.0625 3.60449C7.4375 3.60449 6.8125 3.73503 6.25 3.9961C5.6875 4.25717 5.1875 4.61615 4.78125 5.04039C4.375 5.49727 4.03125 5.98678 3.78125 6.60683C3.53125 7.19424 3.40625 7.84693 3.40625 8.49961C3.40625 9.18492 3.53125 9.80497 3.78125 10.3924C4.03125 10.9798 4.34375 11.5019 4.78125 11.9588C5.1875 12.4157 5.6875 12.742 6.25 13.0031C6.8125 13.2642 7.40625 13.3947 8.0625 13.3947C8.84375 13.3947 9.5625 13.2316 10.1875 12.8726C10.8125 12.5136 11.375 12.0241 11.7812 11.4367L10.6562 10.5556C10.375 11.0124 10 11.3714 9.53125 11.6325C9.0625 11.8936 8.5625 12.0241 8.03125 12.0241C7.59375 12.0241 7.1875 11.9262 6.78125 11.7304C6.40625 11.5346 6.0625 11.2735 5.75 10.9798C5.46875 10.6535 5.21875 10.2945 5.0625 9.87024C4.90625 9.446 4.8125 8.98912 4.8125 8.49961C4.8125 8.0101 4.90625 7.55322 5.0625 7.12898C5.21875 6.70473 5.46875 6.31312 5.75 5.98678Z"
                  fill="white"
                />
              </svg>{" "}
              &nbsp;&nbsp;
              <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import footer1 from "../../assets/images/footer-1.svg";
import footerLogo from "../../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="footer-div-1">
        <div className="footer-div-1-inner row">
          <div className="col-md-5">
            <p>
              Bayburt Grup, başda tikinti sektoru olmaqla enerji, istehsal və
              xidmət sektorlarında yanacaq təchizatı, sığorta və broker
              xidmətləri, istixana becərilməsi, bərpa olunan enerji istehsalı,
              mədənçilik, heyvandarlıq, qida istehsalı və satışı sahələrində
              yarım əsrdir ki, uğurla fəaliyyət göstərir.
            </p>
          </div>
          <div className="col-md-7">
            <img src={footer1} alt="" className="col-md-6" />
          </div>
        </div>
        <div className="footer-div-inner-2 row">
          <div className="col-md-5">
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
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-md-3 footer-ul-1">
            <ul>
              <li>
                <Link>SAYT XƏRİTƏSİ</Link>
              </li>
              <li>
                <Link>İSTİFADƏ ŞƏRTLƏRİ</Link>
              </li>
              <li>
                <Link>İNFORMASİYA CƏMİYYƏTİ XİDMƏTLƏRİ</Link>
              </li>
              <li>
                <Link>ŞİRKƏT SİYASƏTİMİZ</Link>
              </li>
              <li>
                <Link>KARYERA</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 adress-info">
            <p>+90(312) 229 08 08</p>
            <a href="mailto:info@bayburtgrup.com.tr">İNFO@BAYBURTGRUP.COM.TR</a> <br />
            <span>Anıttepe Məh. Işık küç. No: 20 Çankaya /ANKARA</span>
          </div>
          <div className="col-md-1 footer-logo-div">
            <img src={footerLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-div-2">2</div>
    </div>
  );
};

export default Footer;

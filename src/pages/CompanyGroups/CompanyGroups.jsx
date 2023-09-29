import React from "react";
import Banner from "../../components/Banner/Banner";
import "./CompanyGroups.css";
import { companyGroupImgs } from "../../assets/dummyApi/companygroup";
import { useSelector } from "react-redux";
const CompanyGroups = () => {
  const isDark = useSelector((state) => state.modeReducer.mode);

  return (
    <div>
      <Banner
        title={"QRUP ŞİRKƏTLƏRİ"}
        description={"HAQQIMIZDA/QRUP ŞİRKƏTLƏRİ"}
      />
      <div className="container">
        <div className="company-container mx-auto">
          <div className="row mt-5">
            {companyGroupImgs.map((item) => (
              <div className="col-lg-2 col-md-6 company-col">
                <img
                  src={
                    isDark === "dark" ? item.img2.default : item.img1.default
                  }
                  alt="" className="company-logo"
                />
                    <img
                  src={
                    isDark === "dark" ? item.img4.default : item.img3.default
                  }
                  alt="" className="logo-hover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGroups;

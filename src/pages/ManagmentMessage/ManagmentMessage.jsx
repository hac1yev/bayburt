import React from "react";
import Banner from "../../components/Banner/Banner";
import "./ManagmentMessage.css";
import image from "../../assets/images/managment.svg";
const ManagmentMessage = () => {
  return (
    <div>
      <Banner
        title={"RƏHBƏRİN MESAJI"}
        description={"HAQQIMIZDA/ RƏHBƏRİN MESAJI"}
      />
      <div className="container">
        <div className="managmentmessage">
          <div className="message-container">
            <div className="img-container">
              <img src={image} alt="" />
              <div className="gradient-overlay"></div>
            </div>
            <div
              className="message-text"
              data-aos="zoom-in-down"
              data-aos-duration="700"
            >
              Bayburt Qrup, fəaliyyət göstərdiyi müxtəlif sahələrdə qlobal
              uğurlar əldə edərək hər zaman ölkəsini qürurlandırmağa çalışacaq
              və keyfiyyəti ilə fərqlənməyə və davamlı inkişaf yanaşması ilə
              gələcəyi inşa etməyə davam edəcəkdir.
            </div>
          </div>
          <div className="message" data-aos="fade-down" data-aos-duration="700">
            <p className="managment">Abdurrahman Şentürk</p>
            <p>Yön. Kurulu Başkanı</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagmentMessage;

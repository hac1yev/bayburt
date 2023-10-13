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
        <div className="message-container">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            Bayburt Qrup, fəaliyyət göstərdiyi müxtəlif sahələrdə qlobal uğurlar
            əldə edərək hər zaman ölkəsini qürurlandırmağa çalışacaq və
            keyfiyyəti ilə fərqlənməyə və davamlı inkişaf yanaşması ilə gələcəyi
            inşa etməyə davam edəcəkdir.
          </div>
        </div>
        <div className="message">
          <p className="managment">Abdurrahman Şentürk</p>
          <p>Yön. Kurulu Başkanı</p>
        </div>
      </div>
    </div>
  );
};

export default ManagmentMessage;

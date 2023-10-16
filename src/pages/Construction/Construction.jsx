import React from "react";
import { constructorApi } from "../../assets/dummyApi/ConstructorApi";
import Banner from "../../components/Banner/Banner";
import "./Construction.css";
import { useSelector } from 'react-redux';


const Construction = () => {
    const isDark = useSelector(state => state.modeReducer.mode);


  return (
    <div>
      <Banner title={"İNŞAAT"} description={"FƏALİYYƏT SAHƏLƏRİ/İNŞAAT"} />

      <div>
        <div className="container constructor-container">
          
            {constructorApi.map((item) => (
              <div className="row constructor mx-auto">
                <div className="col-lg-7 col-sm-12 ">
                  <div className="d-flex justify-content-between align-items-center"  data-aos="fade-down"
                        data-aos-duration="700">
                    <h1 className="title-constructor">{item.title}</h1>
                    <img src={isDark === 'dark' ? item.logo[1] : item.logo[0]} alt={item.title} className="logo-constructor"/>
                  </div>
                  <p className="describtion-constructor"  data-aos="zoom-in-down"
                        data-aos-duration="700"> {item.description} </p>
                </div>
                <div className="col-lg-5 col-sm-12 img-constructor " data-aos="zoom-in-down"
                        data-aos-duration="700">
                  <img src={isDark === 'dark' ? item.img[1] : item.img[0]} alt={item.title} className="img-fluid"/>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
   
    </div>
  );
};

export default Construction;

import React from "react";
import Banner from "../../components/Banner/Banner";
import logo from "../../assets/images/companygroup/logo 3.svg";
const CompanyGroups = () => {
  return (
    <div>
        <Banner title={"QRUP ŞİRKƏTLƏRİ"} description={"HAQQIMIZDA/QRUP ŞİRKƏTLƏRİ"} />
        <div className="container">
                      <img src={logo} alt="" />                                                                                                                                                                                                                                                               
        </div>
    </div>
  )
}

export default CompanyGroups

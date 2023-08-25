import React from 'react'
import footer1 from "../../assets/images/footer-1.svg";

const FooterContent = () => {
  return (
    <div className="container">
        <div className="footer-div-1-inner row">
            <div className="col-md-12 col-lg-5 px-0 d-flex align-items-center justify-content-center">
                <p>
                Bayburt Grup, başda tikinti sektoru olmaqla enerji, istehsal və
                xidmət sektorlarında yanacaq təchizatı, sığorta və broker
                xidmətləri, istixana becərilməsi, bərpa olunan enerji istehsalı,
                mədənçilik, heyvandarlıq, qida istehsalı və satışı sahələrində
                yarım əsrdir ki, uğurla fəaliyyət göstərir.
                </p>
            </div>
            <div className="col-md-12 col-lg-7 px-0 footer-div-1-inner-img">
                <img src={footer1} className="img-fluid" alt=""  />
            </div>
        </div>
    </div>
  )
}

export default FooterContent
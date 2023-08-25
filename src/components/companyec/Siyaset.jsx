import React from "react";
import "./Siyaset.css";
import { useState } from "react";

const Siyaset = () => {
    const [title , setTitle] = useState('Şirkət Siyasətimiz')

    const handleTitle = (e) =>{
        setTitle(e.target.innerHTML)
    }
  return (
    <div className="container accordion-container">
    <p>{title}</p>
      <div className="" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={handleTitle}
            >
              İNSAN RESURSLARI SİYASƏTİMİZ
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={handleTitle}
            >
              Keyfiyyət sİyasətİmİz
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
              onClick={handleTitle}
            >
              Ətraf mühİt sİyasətİmİz
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
              onClick={handleTitle}
            >
              İSG sİyasətİmİz
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="heading5"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="false"
              aria-controls="collapse6"
              onClick={handleTitle}
            >
              İnformasİya təhlükəsizlİyİ sİyasətİmİz
            </button>
          </h2>
          <div
            id="collapse6"
            className="accordion-collapse collapse"
            aria-labelledby="heading6"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading7">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7"
              aria-expanded="false"
              aria-controls="collapse7"
              onClick={handleTitle}
            >
              KVKK və məxfİlİk sİyasətİmİz
            </button>
          </h2>
          <div
            id="collapse7"
            className="accordion-collapse collapse"
            aria-labelledby="heading7"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sed assumenda labore cum dolor quibusdam exercitationem odio
                natus quae repellat minima quis eius voluptatibus similique enim
                maiores perferendis ducimus, voluptate quisquam quos culpa at.
                Fugit officia, illum ratione accusantium nisi consequatur totam
                sequi aperiam dolorum necessitatibus similique natus dolores
                animi amet quia voluptatem iure minus corporis veniam cumque
                dicta, molestiae laborum! Ullam ut deleniti tempora nisi
                voluptatibus debitis velit obcaecati optio mollitia dignissimos
                unde delectus libero maxime facilis error aperiam, possimus,
                voluptatum veritatis, dolores id ex. Dolores quos, vitae
                voluptatibus animi provident asperiores? Exercitationem totam
                eveniet similique tempore cupiditate dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siyaset;

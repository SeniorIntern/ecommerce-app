import React from "react";
import "./Home.css";
import Product from "./Product";
import bgimg from "./img/bgImg.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={bgimg} // "1500 x 600" px
          alt="background image"
        />

        {/* product listing/row */}
        <div className="home__row">
          <Product
            id="101"
            title="Men Beige & Black Printed Round Neck T-shirt"
            price={20.99}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg"
            rating={4}
          />
          <Product
            id="102"
            title="Women Black Ribbed Round Neck T-shirt"
            price={20.99}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221910/2020/8/12/8fc86de8-3aff-4a1b-a314-0e844f0370cd1597209200549-SASSAFRAS-Women-Black-Ribbed-Round-Neck-T-shirt-587159720919-1.jpg"
            rating={3}
          />
          <Product
            id="103"
            title="Men Maroon Printed Round Neck T-shirt"
            price={30.24}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg"
            rating={4}
          />
          <Product
            id="104"
            title="Men Blue Solid Polo Collar Slim Fit T-shirt"
            price={10.99}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802448/2021/5/24/e12564c1-fcdf-45f4-8e34-03966d6ebbf71621839379626ShirtsTommyHilfigerMenTshirtsTommyHilfigerMenTshirtsWROGNACT1.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="105"
            title="Women Olive Green Solid Boat Neck T-shirt"
            price={10.25}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1753418/2017/6/13/11497332680176-Roadster-Women-Tshirts-7081497332679930-1.jpg"
            rating={3}
          />
          <Product
            id="106"
            title="Dry N9 Antimicrobial Running T-shirt"
            price={30.99}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11640324/2020/7/14/4b7190c9-26e4-421e-8218-993f78f9da2c1594704430466-HRX-by-Hrithik-Roshan-Women-Tshirts-9581594704428847-1.jpg"
            rating={5}
          />
          <Product
            id="107"
            title="Men Blue Solid Scoop Neck T-shirt"
            price={30}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11632480/2020/7/15/b60c194e-8eeb-4bd5-8d37-5fd4486a2bf31594808825237-Roadster-Men-Tshirts-2581594808823559-1.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="108"
            title="Men Blue Printed Round Neck Slim Fit T-shirt"
            price={10.99}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277979/2018/3/16/11521191786459-Nautica-Men-Blue-Printed-Round-Neck-T-shirt-2471521191786287-1.jpg"
            rating={3}
          />
          <Product
            id="109"
            title="Women Navy Blue Solid Polo Collar T-shirt"
            price={10.45}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14013890/2021/5/25/865f12fe-bdfb-4d75-8711-c6d6c644aa681621929989993NikeOneIconClashWomensMid-RiseCroppedLeggingsTshirtsNauticaW1.jpg"
            rating={4}
          />
          <Product
            id="110"
            title="Men Blue Colourblocked Round Neck T-shirt"
            price={20.0}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg"
            rating={2}
          />
          <Product
            id="111"
            title="Men White Printed Polo T-shirt"
            price={10.7}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2300738/2018/4/25/11524631266122-Mast--Harbour-Men-White-Printed-Polo-T-shirt-1411524631265867-1.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

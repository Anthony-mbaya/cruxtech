import { services_data } from "../data/services_data";
const service1 = services_data[0];
const service2 = services_data[1];

export function Services_Page() {
  return (
    <div className="services_page">
        <h1 className="our_services_title">Our Services</h1>
      
      <div className="service1">
        <div className="details">
          <h1>{service1.name}</h1> 
          <h2>What We Offer</h2>
          <ul>
            <li>Custom Website Development</li>
            <li>eCommerce Website</li>
            <li>Website Modernization</li>
            <li>Full Stack Website</li> 
          </ul>
          <button
            onClick={() => {
              service1.link;
            }}
          >
            learn more
          </button>
        </div>
        <div className="service1_img"></div>
      </div>
    
    <div className="service2">
        <div className="service2_img"></div>
        <div className="details">
          <h1>{service2.name}</h1> 
          <h2>What We Offer</h2>
          <ul>
            <li>Custom Website Development</li>
            <li>eCommerce Website</li>
            <li>Website Modernization</li>
            <li>Full Stack Website</li> 
          </ul>
          <button
            onClick={() => {
              service2.link;
            }}
          >
            learn more
          </button>
        </div>
      </div>

    </div>
  );
}

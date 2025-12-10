import { services_data } from "../data/services_data"
export function Service({ name, content, link }){
    return (
        <div className="service">
            <h2>{name}</h2>
            <p>{content}</p>
            <button onClick={link}>learn more</button>
        </div>
    )
}

export function Services_Scroll(){
    return(
        <div className="service_scroll">
            {
                services_data.map((service) => (
                    <Service 
                    key={service.id}
                    name={service.name}
                    content={service.content}
                    />
                ))
            }
        </div>
    )
}
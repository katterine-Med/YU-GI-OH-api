import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{minWidth:"200px"}}>
                        <img src={item.image} alt="/>"/>
                        <div className="card-body">
                            <h5 className="card-title"> {item.id}</h5>
                            
                            <p>tipo: {item.type}</p>
                            <p>descripcion: {item.desc}</p>
                            <p>name: {item.name}</p>
                            <p>card_prices: {item.card_prices.amazon_price}</p>

                        </div>
                     </div>
                </div>

            ))}
        </div>


    );
};

export default Characters;
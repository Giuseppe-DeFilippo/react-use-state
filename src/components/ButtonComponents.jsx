import React, { useState } from 'react';



function Button({ language }) {
    const [activeIndex, setActiveIndex] = useState(null); //serve per tracciare l elemento utilizzato

    const handleClick = (index) => {
        setActiveIndex(index); // indice elemento seleizonato
    }
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-start">
                {language.map((element, index) => (
                    <div key={index} className="m-2">
                        <button

                            onClick={() => handleClick(index)}
                            className={`btn ${activeIndex === index ? "btn-warning" : 'btn-primary'}`}// 
                        >
                            {element.title}
                        </button>
                    </div>
                ))}
            </div>
            {
                activeIndex === null && (

                    <div>
                        <p>la carta non è selezionata</p>
                    </div>

                )
            }
            {/* va solo se si cliocca su un bottone */}
            {
                activeIndex !== null && (
                    <div className="p-3">
                        <div className="card-body">
                            <h2>{language[activeIndex].title}</h2>
                            <p>{language[activeIndex].description}</p>
                        </div>
                    </div>

                )
            }
        </div >
    );
}

export default Button;
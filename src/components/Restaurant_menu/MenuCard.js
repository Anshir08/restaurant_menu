import React from "react";

const MenuCard = ({menuData}) => {
    return (
    <>
    <section className="main-card--cointainer">{
        menuData.map((curElem) =>{
            // const {id, name, category, image, description} = curElem
            return (
                <>
                <div className='card-container' key={curElem.id}>
                    <div className="card">
                        <div className='card-body'>
                            <span className="card-number card-circle subtle"> {curElem.id} </span>
                            <span className="card-author subtle"> {curElem.name} </span>
                            <h2 className='card-title'> {curElem.name} </h2>
                            <span className='card-description subtle'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Qui nobis nisi saepe non velit nostrum, sit error quibusdam magnam incidunt, 
                                dolorem aperiam, ducimus itaque debitis voluptatum perferendis. Minima, 
                                necessitatibus expedita.
                            </span>
                            <div className='card-read'>Read</div>
                            {/* <span className="card-author subtle" style = {{color: "red"}}> Breaskfast </span>  inline css*/}
                            {/* <span className="card-author subtle" style = {myStyle}> Breaskfast </span>   internal css*/}
                        </div>
                        <img src = {curElem.image} alt="images" className="card-media" />
                        <span className='card-tag subtle'> Order Now</span>
                    </div>
                 </div>
                </>
                );
        }
    
        )   
    }
</section>
</>
    );
    };
export default MenuCard;

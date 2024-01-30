import "./Merchitem.css"


function Flip(props) {
    return <div className= "h-screen centered">
        <div className= "relative card">
            <div className= "front">
            <img className= "shirts" src= {props.img} alt="" />
            </div>
            <div className= "back">
                <div className= "shirts">
                    <h2>Shirt</h2>
                    <p>Available in: S, M, L, XL</p>
                    <p>$40.99 USD</p>
                    <button className= "butt">Buy</button>
                </div>
            </div>
        </div>  
    </div>  
    }
    export default Flip;
import "./index.css"

export default function ClickerContainer({ clicks, setClicks}){    
    return(
        <div className="clicker-container">
            <img src="./img/img-clicker/ela.jpg" className="clicker-img" 
            onClick={() => setClicks(clicks + 1)}/>
            <div className="show-clicks">CLICKS: { clicks }</div>
        </div>
    )
}
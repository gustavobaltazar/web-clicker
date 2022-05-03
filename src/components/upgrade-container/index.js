import "./index.css"

export default function UpgradeContainer({preco, setPreco, clicks,setClicks}){
    return(
        <div>
            <div>UPGRADE 1</div>
            <div>PRECO: {preco}</div>
            <button onClick={() => {
                if(clicks >= preco){
                    setClicks(clicks - preco)
                    setPreco(Math.floor((preco/2)*3))
                }else{
                    console.log("SEM MONEY")
                }
            }}>Comprar</button>
        </div>
    )
}
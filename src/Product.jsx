import Price from './Price.jsx';
import './Product.css'


export default function Product({title, idx}) {
    let oldPrices =  ["12495", "11900", "1599","599"]
    let newPrices =  ["8,999", "9,199", "899", "278"]
    let description = [["8000 DPI", "5 Programmable Buttons"], 
    ["Intutive touch surface", "Designed for iPad Pro"], 
    ["Intutive touch surface", "Designed for iPad Pro"], 
    ["Wireless Mouse 2.4GHz", "Optical Oriention"]]
    
    return (
        <div className="cards">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}



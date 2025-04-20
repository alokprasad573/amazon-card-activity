import  Product  from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    }
    return (
        // <> 
        //     <Product title="Logitech MX Master" idx={0} description={["8000DPI", "5 Programmable Butttons"]}/> 
        //     <Product title="Apple Pencil (2nd Gen)" idx={1} description={["Intuitive Touch Surface", "Designed iPad Pro"]}/> 
        //     <Product title="Zebronics Zeb-Transformer" idx={2} description={["Intutive touch surface", "Designed for iPad Pro"]}/> 
        //     <Product title="Portincs Toad 23" idx={3}  description={["Wireless Mouse 2.4GHz", "Optical Oriention"]}/> 
        // </>
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics Zeb-Transformer" idx={2} />
            <Product title="Portincs Toad 23" idx={3} />
        </div>
    );
}

export { ProductTab };

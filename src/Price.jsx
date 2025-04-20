export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecoration: "line-through",
        color: "black",
    };
    let newStyles = {
        fontWeight: "bold",
        fontSize: "1.5em",
        color: "balck",
    };
    let styles = {
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        backgroundColor: "#DDA853",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
    };
    
    return (
        <div className="price" style={styles}>
            <span style={oldStyles}><b>{oldPrice}</b></span>
            &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
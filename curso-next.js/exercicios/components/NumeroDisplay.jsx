export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#fff",
            color: "#373b44",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}
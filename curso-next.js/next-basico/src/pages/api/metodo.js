const metodo = (req, res) => {
    if(req.method === "GET") {
        res.status(200).json({ nome: "Breno" })
    } else {
        res.status(200).json({ nome: "Fran "})
    }
}

export default metodo
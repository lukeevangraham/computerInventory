import React, { useState } from "react";
import axios from "axios";

export const ComputerContext = React.createContext({
    computers: [],
    postComputer: () => {},
    getComputers: () => {}
})

const ComputerContextProvider = props => {
    const [computers, setComputers] = useState(null);

    const getComputersHandler = () => {
        let response = async () => await axios.get("/api/computer");

        setComputers(response)
    }

    const postComputerHandler = props => {
        const response = async () => await axios.post("/api/computer", props.computer)

        console.log("POST RES: ", response)
    }

    return (
        <ComputerContext.Provider value={{ getComputers: getComputersHandler }} >
            {props.children}
        </ComputerContext.Provider>
    )
}

export default ComputerContextProvider;
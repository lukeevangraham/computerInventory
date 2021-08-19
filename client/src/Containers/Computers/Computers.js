import React, { useEffect, useState } from "react"
import axios from "axios"

import "./Computers.css"

const Computers = () => {
    let [computers, setComputers] = useState("")

    useEffect(() => {
        const fetchMyComputers = async () => {
            let response = await fetch('api/computer')
            response = await response.json()
            console.log("RES: ", response)
            setComputers(response)
        }

        fetchMyComputers()
    }, [])

    return (
        <>
            <table className="computerTable">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>make</th>
                        <th>model</th>
                        <th>bits</th>
                        <th>cpu</th>
                        <th>ram</th>
                        <th>OS</th>
                        <th>MS Office</th>
                        <th>Adobe</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {computers.length > 0 ? computers.map(computer => (
                        <tr key={computer.id}>
                            <td>{computer.name}</td>
                            <td>{computer.make}</td>
                            <td>{computer.model}</td>
                            <td>{computer.bits}</td>
                            <td>{computer.cpu}</td>
                            <td>{computer.ram}</td>
                            <td>{computer.operating_system}</td>
                            <td>{computer.ms_office}</td>
                            <td>{computer.adobe}</td>
                            <td>{computer.note}</td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </>
    )
}

export default Computers;
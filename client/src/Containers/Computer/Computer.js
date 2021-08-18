import React, { useState, useContext, useCallback } from "react";
import { ComputerContext } from "../../context/computer-context"
import axios from "axios";

const Computer = (props) => {

    let [name, setName] = useState("")
    let [make, setMake] = useState("")
    let [model, setModel] = useState("")
    let [bits, setBits] = useState(null)
    let [cpu, setCpu] = useState("")
    let [ram, setRam] = useState("")
    let [operatingSystem, setoperatingSystem] = useState("")
    let [msOffice, setMsOffice] = useState("")
    let [adobe, setAdobe] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        const computerObject = {
            name: name,
            make: make,
            model: model,
            bits: bits,
            cpu: cpu,
            ram: ram,
            operating_system: operatingSystem,
            ms_office: msOffice,
            adobe: adobe,
        }
        axios.post("/api/computer", computerObject)
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="make">make</label>
                    <input type="text" id="make" value={make} onChange={(e) => {
                        setMake(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="model">model</label>
                    <input type="text" id="model" value={model} onChange={(e) => {
                        setModel(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="bits">bits</label>
                    <input type="text" id="bits" value={bits} onChange={(e) => {
                        setBits(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="cpu">cpu</label>
                    <input type="text" id="cpu" value={cpu} onChange={(e) => {
                        setCpu(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="ram">ram</label>
                    <input type="text" id="ram" value={ram} onChange={(e) => {
                        setRam(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="operatingSystem">operatingSystem</label>
                    <input type="text" id="operatingSystem" value={operatingSystem} onChange={(e) => {
                        setoperatingSystem(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="msOffice">msOffice</label>
                    <input type="text" id="msOffice" value={msOffice} onChange={(e) => {
                        setMsOffice(e.target.value)
                    }} />
                </div>
                <div className="form-control">
                    <label htmlFor="adobe">adobe</label>
                    <input type="text" id="adobe" value={adobe} onChange={(e) => {
                        setAdobe(e.target.value)
                    }} />
                </div>
                <div className="formActions">
                    <button type="submit">Add Computer</button>
                </div>
            </form>
        </div>
    )
}

export default Computer
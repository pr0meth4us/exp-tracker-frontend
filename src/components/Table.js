import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import axios from "axios";
export default function TableExp(){
    const [exp, setExp]= useState([])
    useEffect (()=>{
        loadExpenses();
    },[])

    const loadExpenses =async ()=>{
        const result = await axios.get("http://localhost:8080/exp")
        setExp(result.data);
    }

    return(
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {exp.map((ex, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{ex.date}</td>
                            <td>{ex.description}</td>
                            <td>{ex.amount}</td>
                            <td>{ex.currency}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <button className="btn btn-outline-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

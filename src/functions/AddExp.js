import React from "react";
import '../index.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddExp() {
    let navigate = useNavigate();
    const [income, setIncome] = React.useState({
        description: '',
        amount: '',
        date: '',
        currency: ''
    });
    const {description, amount, date, currency} = income;
    const onInputChange = e => {
        setIncome({...income, [e.target.name]: e.target.value});
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let requestBody = {
                description,
                amount,
                currency
            };
            if (date !== '') {
                requestBody.date = date;
            }
            const response = await axios.post("http://localhost:8080/exp", requestBody);
            const { generatedDate, ...rest } = response.data;
            setIncome({ ...rest, date: generatedDate });
            navigate("/");
        } catch (error) {
            console.error("Error adding income:", error);
        }
    }


    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow row'>
                <h1 className='text-4xl font-bold'>Add Expenditure</h1>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='py-4 flex-column'>
                        <label htmlFor='description' className="form-label">Description</label>
                        <input
                            type='text'
                            name="description"
                            placeholder='Enter Description'
                            className='border p-2 rounded-lg'
                            value={description} onChange={(e)=>onInputChange(e)}
                            required
                        />
                    </div>
                    <div className='py-4 flex-column'>
                        <label htmlFor='amount'>Amount</label>
                        <input type='number'
                               name="amount"
                               placeholder='Enter Amount'
                               className='border p-2 rounded-lg' value={amount}
                               onChange={(e)=>onInputChange(e)}
                               required
                        />
                    </div>
                    <div className='py-4 flex-column'>
                        <label htmlFor='date'>Date</label>
                        <input type='datetime-local'
                               name="date"
                               placeholder='Enter Date'
                               className='border p-2 rounded-lg'
                               value={date}
                               onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='py-4 flex-column'>
                        <label htmlFor='currency'>Currency</label>
                        <select name='currency'
                                placeholder='Enter Currency'
                                className='border p-2 rounded-lg'
                                value={currency} onChange={(e)=>onInputChange(e)}
                                required
                        >
                            <option value='USD'>$</option>
                            <option value='KHR'>៛</option>
                        </select>
                    </div>
                    <div className='py-4 px-6'>
                        <button type="submit" className="btn-success">Submit</button>
                        <button type="submit" className="btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );}
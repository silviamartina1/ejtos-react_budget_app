import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;


import React, {  useState  } from 'react';
const Budget = () => {
    const [budget, setbudget] = useState('');
    const submitEventBudget=() => {

        if (budget > 20000) {
            alert("The value cannot exceed 20000");
            setbudget("");
            return;
        }
    };
        return (
            <div className='alert alert-secondary'>
                <span>Budget: £{budget}</span>
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={(event) => setbudget(event.target.value)}>
                </input>

                <button className="btn btn-primary" onClick={submitEventBudget} style={{ marginLeft: '2rem' }}>
                 Save
                </button>
            </div>

        );
    }
export default Budget;

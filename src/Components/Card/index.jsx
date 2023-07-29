import React from 'react';
import './style.css';

function Card(props) {
    return (
        <>
            <div className='card'>
                <div className='heading-section'>
                    <div className='heading-section--heading'>
                        <div><h1>{props.name}</h1></div>
                        <div>{props.budgetName}</div>
                    </div>
                    <div className='heading-section--logo'>
                    <div> {props.card_type}</div>
                    </div>
                </div>
                <div className='values'>
                    <div><div>Amount</div><div>300 SGD</div></div>
                    <div><div>Frequency</div><div>Monthly</div></div>
                    <div><div>Expiry</div><div>{props.expiry}</div></div>
                </div>
                <div className='slider'></div>
                <div className='values-total'>
                    <div className='values--spend'><div>Spent</div><div>{props?.spent?.value} {props?.spent?.currency}</div></div>
                    <div className='values--balance'><div>Balance</div><div>{props.available_to_spend?.value} {props.available_to_spend.currency}</div></div>
                </div>

            </div>

        </>
    )
}

export default Card;
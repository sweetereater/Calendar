import s from './DateSelect.module.css';
import React from 'react';

function DateSelect({ value, items, onChange }) {

    const handleChange = event => onChange(Number(event.currentTarget.value))

    return (
        <select className={s.select} value={value} onChange={handleChange}>
            {
                items.map((item, index) => <option key={index} value={item.number}>{item.title}</option>)
            }
        </select>
    )
}

export default React.memo(DateSelect);
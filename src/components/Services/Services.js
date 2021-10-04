import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Services.css'

const Services = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./Items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div className="text-light my-5">
                <h1>All Courses</h1>
            </div>
            <div className="card-container">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Services;
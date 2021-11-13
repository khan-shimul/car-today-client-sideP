import { useState, useEffect } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://floating-beyond-24545.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return [
        cars,
        setCars
    ]
};

export default useCars;
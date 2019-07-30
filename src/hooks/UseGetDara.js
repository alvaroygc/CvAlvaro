import {useState, useEffect} from 'react';
const api = 'https://alvaro-gudiel-cv.firebaseio.com/.json';

const useGetData = () => {
    const [mydata, setData ] = useState([]);
    
    useEffect(() => {
    fetch(api)
    .then(response => response.json())
    .then(data => setData(data))    
    }, []);

    return mydata;
}

export default useGetData;
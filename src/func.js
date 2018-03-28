import axios from 'axios';

export const func = () => {
    return {
        name: 'Panupong',
        lastname: 'Chamsomboon'
    }
}


export const fetchData = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        return error.message;
    }
}



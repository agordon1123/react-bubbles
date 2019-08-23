import { axiosWithAuth } from '../utils/axiosWithAuth';

export const getColors = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

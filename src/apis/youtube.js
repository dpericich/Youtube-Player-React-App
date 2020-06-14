import axios from 'axios';

const KEY = 'AIzaSyCeaCyPQRq1lURTubBOnlpF1C_FIOB_3To'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
});
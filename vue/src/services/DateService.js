import axios from 'axios';

export default {
    GetPlayDatesForUser(userID){
        return axios.get(`/playdates/user/${userID}`)
    }
}
import { API_URL } from './../config';

export const listOfOrders = (userId, token) => {

    return fetch(`${API_URL}/order/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())


}
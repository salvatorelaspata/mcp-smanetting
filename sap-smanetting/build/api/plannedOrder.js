import axios from 'axios';
export async function getPlannedOrders({ USERNAME, PASSWORD, BASE_URL }) {
    try {
        const response = await axios({
            method: 'get',
            url: `${BASE_URL}/A_PlannedOrder`,
            params: {
                '$inlinecount': 'allpages',
                '$top': 50
            },
            headers: {
                // autenticate with user and password in authorization header
                'Authorization': `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
                'DataServiceVersion': '2.0',
                'Accept': 'application/json'
            }
        });
        return response.data.d;
    }
    catch (error) {
        console.error('Errore durante la richiesta:', error.message);
        throw error;
    }
}

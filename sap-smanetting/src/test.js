import axios from 'axios';

const API_KEY = 'pD3ND4a1Gn1XMFYH0LbAOjkF2CDKgjbv';
const BASE_URL = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_PLANNED_ORDERS';

async function getPlannedOrders() {
    try {
        const response = await axios({
            method: 'get',
            url: `${BASE_URL}/A_PlannedOrder`,
            params: {
                '$inlinecount': 'allpages',
                '$top': 1
            },
            headers: {
                'APIKey': API_KEY,
                'DataServiceVersion': '2.0',
                'Accept': 'application/json'
            }
        });
        return response.data.d;
    } catch (error) {
        console.error('Errore durante la richiesta:', error.message);
        throw error;
    }
}

// Esegui la funzione
getPlannedOrders();
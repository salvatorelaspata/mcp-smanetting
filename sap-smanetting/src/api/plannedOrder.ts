import axios from 'axios';

export async function getPlannedOrders({ USERNAME,
    PASSWORD,
    BASE_URL }: { USERNAME: string; PASSWORD: string; BASE_URL: string; }): Promise<{ __count: string, results: any[] }> {
    try {
        // Log that we're making a request (for debugging)
        console.error(`Making request to SAP API: ${BASE_URL}/A_PlannedOrder`);

        const response = await axios({
            method: 'get',
            url: `${BASE_URL}/A_PlannedOrder`,
            params: {
                '$inlinecount': 'allpages',
                '$top': 50
            },
            headers: {
                // authenticate with user and password in authorization header
                'Authorization': `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
                'DataServiceVersion': '2.0',
                'Accept': 'application/json'
            }
        });

        // Log successful response (non-sensitive)
        console.error(`Received response with ${response.data?.d?.results?.length || 0} records`);

        return response.data.d;
    } catch (error: any) {
        console.error('Error during API request:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        throw error;
    }
}
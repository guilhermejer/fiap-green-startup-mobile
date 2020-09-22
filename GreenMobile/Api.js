

const BASE_API = 'https://bd00f777-5247-4ede-8412-df3111db561e.mock.pstmn.io';

export default {
    login: async (email, password) => {
        const req = await fetch(`${BASE_API}/post_test`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await req.json();
        return json;},

    cadastro: async (form) => {
            const req = await fetch(`${BASE_API}/post_test`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ form })
            });
            const json = await req.json();
            return json;
        }
};
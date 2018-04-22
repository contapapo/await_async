class EasyHTTP{

    //HTTP Get Request
    async getUsers(url){
        const response = await fetch(url);
        const respData = await response.json();
        return respData;
    }

    //HTTP POST Request
    async postUser(url, data){
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        const respData = await response.json();
        return respData;
    }

    //HTTP PUT Request
    async putUser(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const respData = await response.json();
        return respData;
    }

    //HTTP DELETE Request
    async deleteUser(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const respData = await 'Deleted...';
        return respData;
    }
}
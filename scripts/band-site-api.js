class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL="https://unit-2-project-api-25c1595833b2.herokuapp.com/"
    }

    async getComments () {
        const response = await axios({
            method: 'get',
            url: this.baseURL + 'comments?api_key=' + this.apiKey
        });

        return response.data;
    }

    async postComment(comment) {
        const response = await axios({
            method: 'post',
            url: this.baseURL + 'comments?api_key=' + this.apiKey,
            data: comment,
            headers:{"Content-Type": "application/json"}
        });

        return response.data;
    }

    async getShows () {
        const response = await axios({
            method: 'get',
            url: this.baseURL + 'showdates?api_key=' + this.apiKey
        });

        return response.data;
    }

    async deleteComment(id) {
        const response = await axios({
            method: 'delete',
            url: this.baseURL + 'comments/' + id + '?api_key=' + this.apiKey,
        })
        return response.data;
    }
}


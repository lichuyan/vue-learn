const superagent = require('superagent');

const get = (options) => {
    return superagent.get(options.url)
        .withCredentials()
        .query(options.data)
        .then(
            resp => {
                return Promise.resolve(resp.body.data);
            },
            err => {
                return Promise.reject({ err, isAjaxError: true });
            }
        );
};

const post = (options) => {
    // const host = options.business === 'reconciliation' ? RECONCILIATION_HOST : HOST;
    let data;
    // const ajaxStartTime = Date.now();
    return superagent.post(options.url)
        .withCredentials()
        .send(data)
        .then(
            resp => {
                console.log(resp)
            },
            err => {
                console.log(err)
            }
        );
};

export default { get, post };

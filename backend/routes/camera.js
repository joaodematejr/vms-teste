const http = require('http');

module.exports = (app) => {
    let route = app.route('/queryRtspCamera');
    route.get((req, res) => {
        http.get('http://192.168.1.130/LAPI/V1.0/Channels/1/Media/Video/Streams/0/LiveStreamURL?TransType=0&TransProtocol=0', (resp) => {
            let data = '';
            resp.on('data', (chunk) => { data += chunk; });
            resp.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Context-Type', 'application/json');
                res.json(JSON.parse(data));
            });
        }).on("error", (err) => {
            app.utils.error.send(err.message, req, res);
        });
    });
}
const moment = require.requireActual('moment'); // mock moment

export default (timestamp = 0) => {
    return moment(timestamp);
};
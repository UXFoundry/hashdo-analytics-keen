/**
 * Requires
 *
 * @ignore
 */
var Keen = require('keen-js'),
  Client = new Keen({
    projectId: process.env.KEEN_PROJECT_ID,
    writeKey: process.env.KEEN_WRITE_KEY
  });

module.exports = {
  /**
   * Send new analytics data to Keen IO.
   *
   * @method addEvent
   * @async
   * @param {String}   key         The event key associated with this analytics data.
   * @param {Object}   [data]      Optional analytics data.
   * @param {Function} [callback]  Optional callback function to determine if the event was saved successfully.
   */
  addEvent: function (key, data, callback) {
    if (Client) {
      data = data || {};

      Client.addEvent(key, data, function (err, res) {
        if (err) {
          console.error('ANALYTICS: Add Event error.', err);
        }

        callback && callback(err, res);
      });
    }
    else {
      callback && callback();
    }
  }
};


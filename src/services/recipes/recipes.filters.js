/* eslint no-console: 1 */
console.warn('You are using the default filter for the recipes service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'); // eslint-disable-line no-console

module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  console.log(hook.params.user && hook.params.user._id.toString())
  // console.log(data)
  debugger
  return data;
};

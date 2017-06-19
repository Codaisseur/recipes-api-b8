// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function populateLiked(recipe, user) {
  // if !user return recipe (early exit)
  // if the user's _id is in recipe.likedBy (array), set recipe.liked = true
  // return recipe
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    console.log(hook.params)
    console.log(hook.params.user)
    console.log(hook.method)
    console.log(hook.result)

    // what type of request is this (hook.method)?
    // - 'find' ? -> data is an array of recipes in hook.result.data
    // - other -> data is one recipe in hook.result

    // change hook.result to what it should be, using the populateLiked
    // function above


    return Promise.resolve(hook);
  };
};

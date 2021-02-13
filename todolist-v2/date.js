// console.log(module);

// we used this if only one function exists
// module.exports = getDate;

//now for multiple functions

//module.exports can be written as exports only also
module.exports.getDate = getDate;

function getDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = getDay;

function getDay() {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}

/*************************************************************CODE REFRACTORING PART BELOW************************************************************/

// module.exports.getDate = function () {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//   };

//   return today.toLocaleDateString("en-US", options);
// };

// module.exports.getDay = function () {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//   };

//   return today.toLocaleDateString("en-US", options);
// };

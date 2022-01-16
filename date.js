module.exports.getDate = getDate;
// module.exports.anotherfunc = func to add function exports
// module.exports to export something directly 

function getDate(){
  var today = new Date().getDay();
  var day = "";


  switch (today) {
    case 0:
      day = "sunday"
      break;
    case 1:
      day = "monday"
      break
    case 2:
      day = "tuesday"
      break;
    case 3:
      day = "wednesday"
      break;
    case 4:
      day = "thursday"
      break;
    case 5:
      day = "friday"
      break;
    case 6:
      day = "saturday"
      break;

    default:
      console.log("an unexpected day index occurred");

  };

  return day;

}

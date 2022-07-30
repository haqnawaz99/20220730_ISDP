function showResult() {
  let numberObtain = document.getElementById("numberinput").value;
  let result;

  if (numberObtain > 39) {
    result = "مقبول";
  } else if (numberObtain > 49) {
    result = "جید ";
  } else if (numberObtain > 59) {
    result = "جید جدا";
  } else if (numberObtain > 79) {
    result = "ممتاز";
  } else {
    result = "راسب";
  }

  // if (numberObtain > 79) {
  //   result = "ممتاز";
  // } else if (numberObtain > 59) {
  //   result = "جید جدا";
  // } else if (numberObtain > 49) {
  //   result = "جید";
  // } else if (numberObtain > 39) {
  //   result = "مقبول";
  // } else {
  //   result = "راسب";
  // }

  document.getElementById("resultdetail").innerText = result;
}

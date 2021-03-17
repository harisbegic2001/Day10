function myFunction() {
  var myMusic = {
    001: {
      artist: "Bill Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      //Add a record here
      artist: "Halid Beslic",
      title: "Singer",
      release_year: 1953,
      id: 2805,
      formats: {
        1: "USB",
        2: "Bluetooth",
        3: "Mp3player",
      },
    },
  };
  return myMusic;
}

console.log(myFunction()[2]);
module.exports = myFunction;

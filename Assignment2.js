var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.unshift("I", "am", "a");
scrambledArray.splice(5, 4);
scrambledArray.splice(6, 1);
console.log(scrambledArray.join(" "));

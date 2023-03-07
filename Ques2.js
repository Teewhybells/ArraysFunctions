// QUES 2

let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

//Remove the first item in the array
languages.shift("C#");
console.log(languages);
// [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);
/*
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin'
]
 */


// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);
/*
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'Go',
  'Rust',       'Python',
  'Kotlin'
]
*/


// add Java after Ruby
languages.splice(3, 0, "Java");
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// add 'kotlin' to the end of the array
languages.push("Kotlin");
console.log(languages);
//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

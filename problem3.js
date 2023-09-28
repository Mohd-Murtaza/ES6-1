const input=["MA", "SA", "I", "SCH", "OOL"]
let lowerCaseFunction= (char)=>char.toLowerCase();

let convertWord=(word)=>{
    return word.split().map((latter)=>lowerCaseFunction(latter)).join("");
}
let convertArray= (input) => {
    return input.map(convertWord);
} 
console.log(convertArray(input));

export default function dictionary(string){
    const newString = string.replaceAll("Hello", "Goodbye");
    console.log(newString);
    return newString;
}
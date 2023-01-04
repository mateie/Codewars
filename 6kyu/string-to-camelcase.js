function toCamelCase(str){
    if(str.length === 0) return "";
    return str.split(/[-_]/g).map((word, i) => i === 0
        ? word
        : `${word[0].toUpperCase()}${word.slice(1)}`).join("");
}
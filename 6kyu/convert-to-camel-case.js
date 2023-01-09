String.prototype.camelCase = function () {
    return this.split(" ").map(str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`).join("");
}
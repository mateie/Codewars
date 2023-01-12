const toUnderscore = (string) => typeof string === "string"
    ? string.split(/(?=[A-Z])/).map(str => str.toLowerCase()).join("_")
    : `${string}`;
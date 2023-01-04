const likes = (names) => names.length === 0
    ? "no one likes this"
    : names.length === 1
        ? `${names[0]} likes this`
        : names.length > 3
            ? `${names.slice(0,2).join(", ")} and ${names.slice(2, names.length).length} others like this`
            : `${names.slice(0, -1).join(", ")}${names.length > 1 ? ` and ` : ""}${names.slice(-1)} like this`
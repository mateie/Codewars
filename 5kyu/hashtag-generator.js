function generateHashtag (str) {
    if(str.trim().length < 1) return false;
    const hashtag = `#${str.split(" ").map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}` ).join("")}`;
    if(hashtag.length > 140) return false;

    return hashtag;
}
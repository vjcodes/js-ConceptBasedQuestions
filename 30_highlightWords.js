const highlightWords = (str, keywords) => {
  const uniqueKeywords = new Set(keywords);

  const words = str.split(" ");

  const result = words.map((word) => {
    let output = "";
    if (uniqueKeywords.has(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);

        if (uniqueKeywords.has(prefix) && uniqueKeywords.has(suffix)) {
          output = `<strong>${prefix}${suffix}</strong>`;
          break;
        } else if (uniqueKeywords.has(prefix) && !uniqueKeywords.has(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (uniqueKeywords.has(suffix) && !uniqueKeywords.has(prefix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }

    return output ? output : word;
  });

  return result.join(" ");
};

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];
console.log(highlightWords(str, words));

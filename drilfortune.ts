const imported = await Deno.readTextFile("./drilquotes.json");
const parsed = await JSON.parse(imported);
const quote = parsed[Math.floor(Math.random() * parsed.length)];
console.log(quote);

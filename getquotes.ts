import unescape from "https://raw.githubusercontent.com/lodash/lodash/master/unescape.js";

/*
 * Get HTML.
 * NOTE: This might take a while to get; Depending on your connection.
 * It's a big HTML file, and it'll probably be a pain to handle.
 */
console.log("Getting tweets...");

let res = await fetch("https://cooltweets.herokuapp.com/dril/old");
let html = await res.text();

let tweets: string[] = [];

// I'm feeling dangerous today.
const regex: any = /\<div class='text'>(.*?)<\/div>/gm;
// Using regex because Cheerio was being a shit
let match: any = await regex.exec(html);

do {
  let tweet: any = unescape(`${match[1]}`);
  await tweets.push(tweet.replace(/<br\s*[\/]?>/gi, "\n"));
} while ((match = regex.exec(html)) !== null);

try {
  await Deno.writeTextFile("./drilquotes.json", JSON.stringify(tweets));
  console.log("Success!");
} catch (err) {
  console.log(err);
}

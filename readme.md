# DrilFortune

```
$ drilfortune | cowsay
_______________________________________
/ WHo else thinks that, without JACK at \
| the helm, this site is going to start |
\ Sucking FUCKING DICK!!!               /
 ---------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
## Installation
```sh
$ deno install --allow-net --allow-read 'https://raw.githubusercontent.com/prettykool/drilfortune/main/drilfortune.ts'
```

## Why?
Because I was bored, and wanted to mess around a bit.

## What's with `getquotes.ts`?
`getquotes.ts` is how we get Dril's tweets. It has no interaction with 
Twitter's native API, because it's complete dogshit. Instead, we're
relying on an external archive of Dril's tweets, scraping them by hand.

It's dumb.
## License
0BSD, because this doesn't deserve anything more.

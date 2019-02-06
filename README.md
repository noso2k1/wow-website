# Wisdom of Wombats website (wow-website)

Wisdom of Wombats website

Created with Gridsome, Bulma and headless Wordpress

**Wisdom of Wombats** is an improv theater group based in Zurich Switzerland

To do before go-live:

- [x] "About us" section

- [x] "Contacts" section

- [x] "News" section - List of posts (as calendar) and Posts pages

- [x] MailChimp, register and subscribe mail from the website

Next steps:

- [ ] Pagination of the "News" section

- [ ] Cookies - with [this](https://github.com/apertureless/vue-cookie-law) or [this](https://github.com/promosis/vue-cookie-accept-decline)

- [ ] Gallery of images

- [ ] "Get involved" section

- [ ] Make "Next show" a component

- [ ] Friends page

- [ ] Page with the group members

- [x] Instagram link

- [ ] Are statistics updated with this JAMstack solutions?

- [ ] Add more comments

- [ ] Random top image

- [ ] List of shows

- [ ] Archive of previous shows

- [ ] Review the "About us" section

- [ ] Messages in case of no events or no news

- [x] Update Gridsome WordPress plugin

## Ideas for content:

Who we are - OUR VISION

What kind of show we do - Why we do what we do - We push our boundaries - Experiment - Get out of our comfort zone

## Get involved

- I have a venue and I want you to play here

- I am a musician and I want to play with you

- I do other art forms and I want to collaborate with you

## Known problems

On Netlify or when installing node modules the following error message might appear:

```
(undefined) assets/js/app.748fd6eb.js from Terser
TypeError: Cannot read property 'minify' of undefined
```

The solution is [here](https://github.com/webpack-contrib/terser-webpack-plugin/issues/66#issuecomment-460083623).

1. run ```npm install --save-dev terser@3.14.1 --save-exact```

2. edit package-lock.json > locate: "terser-webpack-plugin" > inside it's tree: change: "terser": "^3.8.1" (or whatever), to "terser": "3.14.1" and make sure there is no “^” in front of the version
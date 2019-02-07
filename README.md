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

- [x] Instagram link

- [x] Update Gridsome WordPress plugin

- [ ] Add instagram feed - Waiting for a fix to the [vue-instagram plugin](https://github.com/kevinongko/vue-instagram/issues/21) - See below

- [ ] Pagination of the "News" section

- [x] Cookies - with [this](https://github.com/apertureless/vue-cookie-law) or [this](https://github.com/promosis/vue-cookie-accept-decline)

- [ ] "Get involved" section

- [ ] Friends page

- [ ] Page with the group members

- [ ] Are statistics updated with this solutions?

- [ ] Add more comments

- [ ] Random top image

- [ ] List of shows

- [ ] Archive of previous shows

- [ ] Review the "About us" section

- [ ] Messages in case of no events or no news

- [ ] Manage differently carousel and video in the insta feed

- [ ] ~~Gallery of images~~

- [ ] ~~Make "Next show" a component~~

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

##How to get Instagram token

Add a link in the website

``` <a href="https://api.instagram.com/oauth/authorize/?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code">Get Started</a> ```

An Instagram login screen will popup. Once the user is authenticated, Instagram will redirect the browser to the "YOUR_REDIRECT_URI" and the token is in the redirected URL

``` http://localhost:8080/#access_token=xxxxx.xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxx ```

To register the client follow the steps in this [Medium page](https://medium.com/@bkwebster/how-to-get-instagram-api-access-token-and-fix-your-broken-feed-c8ad470e3f02)


References: 

- [Stackoverflow post](https://stackoverflow.com/questions/16496511/how-to-get-an-instagram-access-token)

- [Instagram Developer page](https://www.instagram.com/developer/)

- [Official Instagram doc](https://www.instagram.com/developer/authentication/)


#vue-instagram error when building
Code to use when [issue #21](https://github.com/kevinongko/vue-instagram/issues/21) on vue-instagram is solved
```
      <!-- Impressions/Instagram feed -->
      <section class="section hero" id="impressions">
        <div class="hero-head">
          <div class="container">
            <h1 class="title">Impressions from our Instagram feed</h1>
          </div>
        </div>
        <div class="hero-body container">
          <vue-instagram :token="instaToken" :count="6" class="columns is-multiline is-mobile">
            <template slot="feeds" slot-scope="props">
              <div class="column is-4-desktop is-6-tablet is-6-mobile">
                <div class="card">
                  <a class="card-image" :href="props.feed.link" target="_blank">
                    <figure class="image is-square">
                      <img :src="props.feed.images.standard_resolution.url" alt="Image">
                    </figure>
                  </a>
                  <div class="card-content">
                    <div class="subtitle is-6" style="height: 100px; overflow: auto;" v-html="props.feed.caption.text"/>
                  </div>
                </div>
              </div>
            </template>
          </vue-instagram>
        </div>
        <div class="hero-foot level container">
          <div class="level-item">
            <a class="button is-dark is-medium is-fullwidth" href="https://www.instagram.com/wombatsimprov/" target="_blank">More on our Instagram</a>
          </div>
        </div>
      </section>
```
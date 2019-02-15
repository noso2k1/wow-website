<template>

  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup" class="box">
    <button class="delete" v-on:click="$emit('close-popup')"></button>
    <form action="https://wombats.us20.list-manage.com/subscribe/post?u=f5f567a14cc78ab184fb1efd1&amp;id=99b92ae2a5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <h2 class="title">Join our community</h2>
        <p class="content">Know in advance news about shows and perks by joining our mailing list. You will receive email related only to Wisdom of Wombats' events.</p>
        <div class="field">
          <label class="label" for="mce-EMAIL">Email Address </label>
          <div class="control has-icons-left">
            <input type="email" v-model="email" name="EMAIL" class="input is-info" id="mce-EMAIL" placeholder="Write here your email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary tooltip" type="submit" 
                    name="subscribe" id="mc-embedded-subscribe" v-bind:disabled="isSubscribeDisabled"
                    data-tooltip="Insert email and confirm that you agree">Subscribe</button>
          </div>
        </div>

        <div id="mergeRow-gdpr" class="field">
          <div class="control">
            <input class="is-checkradio is-info" type="checkbox" id="gdpr_3703" name="gdpr[3703]" value="Y" v-model="agree">
            <label for="gdpr_3703">
              I agree to receive emails from Wisdom of Wombats regarding their shows and their events
            </label>
          </div>
        </div>
        <div class="field help">
          <p>You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
          <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
        </div>
        <div id="mce-responses">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f5f567a14cc78ab184fb1efd1_df9e2174d7" tabindex="-1" value=""></div>
      </div>
    </form>
  </div>

  <!--End mc_embed_signup-->
  
</template>

<script>
export default {
  name: 'NewsletterSubscribeModal',
  data: function() {
    return {
      email: '',
      agree: false
    }
  },
  computed: {
    isSubscribeDisabled: function() {
      var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
      return !(this.agree && re.test(this.email))
    }
  }
}
</script>


<style>

</style>

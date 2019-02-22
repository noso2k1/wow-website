<template>

  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <div class="modal-background" id="popup-bkg"></div>
    <div class="modal-card">

      <header class="modal-card-head">
        <p class="modal-card-title">Join our community</p>
        <button class="delete" aria-label="close" v-on:click="$emit('close-popup')"></button>
      </header>    

      <form action="https://wombats.us20.list-manage.com/subscribe/post?u=f5f567a14cc78ab184fb1efd1&amp;id=99b92ae2a5" 
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate
            v-on:submit.prevent="onSubmit">


        <div id="mc_embed_signup_scroll" class="modal-card-body">
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
        </div>

        <footer class="modal-card-foot">
          <div class="field">
            <div class="control">
              <button class="button is-primary tooltip" type="submit" 
                      name="subscribe" id="mc-embedded-subscribe" v-bind:disabled="isSubscribeDisabled"
                      data-tooltip="Insert a valid email">Subscribe</button>         
            </div>
          </div>  
          <div class="control">
            <div class="help">
              <p>You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
              <p>We use Mailchimp as our marketing platform. Your information will be transferred to Mailchimp for processing.</p>
            </div>  
          </div>             
        </footer>

        <div id="mce-responses">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f5f567a14cc78ab184fb1efd1_df9e2174d7" tabindex="-1" value=""></div>

      </form>

    </div>
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
      return !re.test(this.email)
    }
  },
  methods: {
    onSubmit(event) {
      event.target.submit()
      this.$emit('close-popup')
    }
  }
}
</script>


<style>

</style>

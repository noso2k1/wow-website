import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGrin, faEnvelope, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faMeetup } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faFacebookF, faFacebookSquare, faInstagram, faMeetup, 
            faGrin, faEnvelope, faChevronCircleUp)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}

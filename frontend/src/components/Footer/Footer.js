import React from "react";
import { Container,Row,Col} from "react-bootstrap";
import "./footer.css";
import { AiOutlineMail } from 'react-icons/ai';


const Footer =()=>{
return(
<footer class="page-footer shadow bg-white rounded mt-4">
<div class="container">
<div class="row justify-content-between py-4 mt-4">
<div class="col-md-3 col-6 mt-3 mt-md-0">
<h6> About </h6>
<ul class="list-unstyled">
<li>
<a href="none" class="common-link"> Privacy policy </a>
</li>
<li>
<a href="none" class="common-link"> Terms Of Services </a>
</li>
<li>
<a href="none" class="common-link"> Contact Us </a>
</li>
</ul>
</div>
<div class="col-md-3 col-6 mt-3 mt-md-0">
<h6> Hosting </h6>
<ul class="list-unstyled">
<li>
<a href="none" class="common-link"> Why Host </a>
</li>
<li>
<a href="none" class="common-link"> Responsible hosting </a>
</li>
<li>
<a href="none" class="common-link"> Trust and Safety </a>
</li>
</ul>
</div>
<div class="col-md-3 col-6 mt-3 mt-md-0">
<h6> Community </h6>
<ul class="list-unstyled">
<li>
<a href="none" class="common-link"> Diversity &amp; Belonging </a>
</li>
<li>
<a href="none" class="common-link"> Accessibility </a>
</li>
<li>
<a href="none" class="common-link"> Frontline Stays </a>
</li>
</ul>
</div>
<div class="col-md-3 col-12 mt-3 mt-md-0">
<div class="d-flex flex-wrap store-section justify-content-center justify-content-md-end connect-image-wrapper">
</div>
<div class="social-media-links mt-3 mb-3 mb-md-0">
<div class="d-flex ">
<div class="social-links ">
<a href="https://www.facebook.com/Cron24-117062946355093" title="Facebook" rel="noreferrer">
<img class="img src-image-fadeIn" src="https://hyra.cron24.com/images/email/logo_facebook.png" alt="Facebook"/>
</a>
</div>
<div class="social-links">
<a href="https://www.instagram.com/cron24technologies" title="Instagram" rel="noreferrer">
<img class="img src-image-fadeIn" src="	https://hyra.cron24.com/images/email/logo_instagram.png" alt="Instagram"/>
</a>
</div>
<div class="social-links">
<a href="https://twitter.com/Cron24Tech" title="Twitter" rel="noreferrer">
<img class="img src-image-fadeIn" src="	https://hyra.cron24.com/images/email/logo_twitter.png" alt="Twitter"/>
</a>
</div>
<div class="social-links">
<a href="https://www.linkedin.com/company/cron24-technologies" title="Linkedin" rel="noreferrer">
<img class="img src-image-fadeIn" src="https://hyra.cron24.com/images/email/logo_linkedin.png" alt="Linkedin"/>
</a>
</div>
<div class="social-links">
<a href="https://www.pinterest.com/cron24Technologies" title="Pinterest" rel="noreferrer">
<img class="img src-image-fadeIn" src="https://hyra.cron24.com/images/email/logo_pinterest.png" alt="Pinterest"/>
</a>
</div>
<div class="social-links">
<a href="https://www.youtube.com/channel/UC9yYjwf0DPF8S5PLyO13g6w" title="Youtube" rel="noreferrer">
<img class="img src-image-fadeIn" src="https://hyra.cron24.com/images/email/logo_youtube.png" alt="Youtube"/>
</a>
</div>
</div>
</div>
<div class="support-container ms-3 mt-3 mb-3 mb-md-0">
<div class="mt-2 text-nowrap">
< AiOutlineMail/>
<a class="ms-2" href="tel"> alayedmohammed0@gmail.com </a>
</div>
<div class="mt-2 text-nowrap">
< AiOutlineMail/>
<a class="ms-2" href="tel"> hawamdey@gmail.com
 </a>
</div>
<div class="mt-2 text-nowrap">
< AiOutlineMail/>
<a class="ms-2" href="tel"> omar.haamdan@gmail.com
 </a>
</div>

</div>
</div>
</div>
<div class="footer-copyright py-3 d-flex justify-content-center flex-wrap">
<div class="col-md-4 order-2 order-md-1">
<a href="https://www.cron24.com/airbnb-clone" class="mb-0 mt-2 mt-0 theme-text"> © GoodNight 2022. All Rights Reserved </a>
</div>


</div>
</div>


</footer>
)
}
export default Footer
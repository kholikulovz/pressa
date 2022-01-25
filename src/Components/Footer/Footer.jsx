import React from 'react';
import './Footer.scss'

function AppRouter() {
  return(
    <>
    <footer className='footer'>
    <div className="svg__sprit">
    <svg width="0" height="0" class="hidden">
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg"  width="12"
            height="20" viewBox="0 0 12 20" id="facebook">
    <path d="M7.25 6.875V4.375C7.25 3.685 7.81 3.125 8.5 3.125H9.75V0H7.25C5.17875 0 3.5 1.67875 3.5 3.75V6.875H1V10H3.5V20H7.25V10H9.75L11 6.875H7.25Z" fill="white"></path>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 20 20" id="instagram">
    <g clip-path="url(#clip0_101_2294)">
    <path d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0924 0.0117516 12.7525 0 10.0371 0C7.32173 0 6.98185 0.0117516 5.91521 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48905 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812743 2.78573 0.562603 3.44992C0.316431 4.0868 0.144583 4.81341 0.0977295 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812743 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82089 19.2265 3.48508 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97789 19.9883 7.31792 19.9999 10.0333 19.9999C12.7487 19.9999 13.0885 19.9883 14.1552 19.9413C15.2179 19.8945 15.9484 19.7226 16.5814 19.4765C17.9255 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9727 14.1239C20.0195 13.0572 20.0313 12.7173 20.0313 10.002C20.0313 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8356 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.5851 17.9372 15.0538 18.1012 14.0809 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.05221 18.1911 6.00113 18.1441C5.02438 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31705 17.3862 2.9967 17.0541C2.66461 16.7298 2.41065 16.3391 2.2504 15.9055C2.11366 15.5539 1.94959 15.0225 1.90671 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.90671 5.96995C1.94959 4.99319 2.11366 4.46575 2.2504 4.11412C2.41065 3.68038 2.66461 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03232 1.9184 6.0051 1.87537C7.05999 1.82851 7.37652 1.81676 10.0449 1.81676C12.7174 1.81676 13.0338 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9407 2.21921C16.3742 2.37931 16.7689 2.63327 17.0893 2.96536C17.4214 3.28967 17.6753 3.68038 17.8356 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2263 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2263 12.9908 18.1794 14.0457Z" fill="white"></path>
    <path d="M10.0371 4.86426C7.20071 4.86426 4.89938 7.16543 4.89938 10.002C4.89938 12.8385 7.20071 15.1397 10.0371 15.1397C12.8737 15.1397 15.1748 12.8385 15.1748 10.002C15.1748 7.16543 12.8737 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19699 13.3347 6.70439 11.8422 6.70439 10.002C6.70439 8.16171 8.19699 6.66927 10.0371 6.66927C11.8774 6.66927 13.3698 8.16171 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z" fill="white"></path>
    <path d="M16.5777 4.66134C16.5777 5.3237 16.0406 5.86076 15.3781 5.86076C14.7158 5.86076 14.1787 5.3237 14.1787 4.66134C14.1787 3.99882 14.7158 3.46191 15.3781 3.46191C16.0406 3.46191 16.5777 3.99882 16.5777 4.66134Z" fill="white"></path>
    </g>
    <defs>
    <clipPath id="clip0_101_2294">
    <rect width="20" height="20" fill="white"></rect>
    </clipPath>
    </defs>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 20 20" id="telegram">
    <path d="M4.81232 11.396L7.2998 17.6143L10.5382 14.3759L16.0905 18.7891L20 1.21094L0 9.54163L4.81232 11.396ZM14.285 6.25427L8.1633 11.8379L7.40082 14.7116L5.99228 11.1896L14.285 6.25427Z" fill="white"></path>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 20 20" id="tik-tok">
    <path d="M18.7626 5.01562C17.6212 5.01562 16.5681 4.6375 15.7224 3.99961C14.7524 3.26836 14.0556 2.1957 13.8095 0.959375C13.7485 0.653906 13.7157 0.338672 13.7126 0.015625H10.452V8.925L10.4481 13.8051C10.4481 15.1098 9.59853 16.216 8.42079 16.6051C8.079 16.718 7.70986 16.7715 7.32548 16.7504C6.83486 16.7234 6.37509 16.5754 5.97548 16.3363C5.12509 15.8277 4.54853 14.9051 4.5329 13.8496C4.50829 12.2 5.84189 10.8551 7.49032 10.8551C7.81571 10.8551 8.12822 10.9082 8.42079 11.0047V8.56953V7.69414C8.1122 7.64844 7.79814 7.62461 7.48056 7.62461C5.67626 7.62461 3.98876 8.37461 2.78251 9.72578C1.87079 10.7469 1.32392 12.0496 1.23954 13.4156C1.129 15.2102 1.78564 16.916 3.05907 18.1746C3.24618 18.3594 3.44267 18.5309 3.64814 18.6891C4.73993 19.5293 6.0747 19.9848 7.48056 19.9848C7.79814 19.9848 8.1122 19.9613 8.42079 19.9156C9.73407 19.7211 10.9458 19.1199 11.902 18.1746C13.077 17.0133 13.7263 15.4715 13.7333 13.8305L13.7165 6.54297C14.277 6.97539 14.8899 7.3332 15.5477 7.61094C16.5708 8.04258 17.6556 8.26133 18.772 8.26094V5.89336V5.01484C18.7727 5.01562 18.7634 5.01562 18.7626 5.01562Z" fill="white"></path>
    </symbol>
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" width="26"
            height="26" viewBox="0 0 26 26" id="youtube">
    <path d="M24.6725 6.90778C24.3917 5.86354 23.5683 5.04038 22.5243 4.7592C20.6168 4.2373 12.987 4.2373 12.987 4.2373C12.987 4.2373 5.35747 4.2373 3.45005 4.73941C2.42604 5.0203 1.58265 5.86369 1.30177 6.90778C0.799805 8.81506 0.799805 12.7705 0.799805 12.7705C0.799805 12.7705 0.799805 16.7459 1.30177 18.6332C1.58295 19.6773 2.40596 20.5004 3.4502 20.7816C5.37756 21.3037 12.9873 21.3037 12.9873 21.3037C12.9873 21.3037 20.6168 21.3037 22.5243 20.8016C23.5685 20.5205 24.3917 19.6974 24.6728 18.6533C25.1747 16.7459 25.1747 12.7906 25.1747 12.7906C25.1747 12.7906 25.1947 8.81506 24.6725 6.90778ZM10.5578 16.4247V9.11632L16.9024 12.7705L10.5578 16.4247Z" fill="white"></path>
    </symbol>
    </svg>
    </div>
    <ul className='footer__nav container'>
    <li className="footer__nav-item">Pressa</li>
    <ul className="footer__nav-item footer__navlink">
    <li className="footer__navlink-item">Loyiha haqida</li>
    <li className="footer__navlink-item">Yordam</li>
    </ul>
    <ul className='footer__nav-item footer__social'>
    <li className='footer__social-item'>
      <svg className='icon footer__social-icon'>
    <use xlinkHref="#telegram"></use>
    </svg>
    </li>
    <li className='footer__social-item'>
      <svg className='icon footer__social-icon'>
    <use xlinkHref="#facebook"></use>
    </svg>
    </li>
    <li className='footer__social-item'>
      <svg className='icon footer__social-icon'>
    <use xlinkHref="#instagram"></use>
    </svg>
    </li>
    <li className='footer__social-item'>
      <svg className='icon footer__social-icon'>
    <use xlinkHref="#tik-tok"></use>
    </svg>
    </li>
    <li className='footer__social-item'>
      <svg className='icon footer__social-icon'>
    <use xlinkHref="#youtube"></use>
    </svg>
    </li>
    </ul>
    <li className="footer__item">+998 (90) 325-36-32</li>
    </ul>
    </footer>
    </>
    )
  }
  
  export default AppRouter;
  
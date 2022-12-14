import React from "react"
import { Link } from 'react-router-dom'
import "./Assets/css/footer.css"
import MatrixRain from "./MatrixRain"


const Footer = () => {
    return(
        <>
        <footer class="footer-20192 theme">
        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-sm logo">
                        <a href="#" class="footer-logo theme atmosphere">Info</a>
                        <a href="#" class="footer-logo theme atmosphere">Xpression</a>
                        <p class="copyright">
                            <small>&copy; 2022</small>
                        </p>
                        <img src={require('./Assets/img/384.png')} width='108px' alt="" srcset="" />
                    </div>
                    <div class="col-sm">
                        <h3 class="customer atmosphere">Schedule</h3>
                        <ul class="list-unstyled links">
                            <li class="customerList"><a class="customerListA" href="#">Dates</a></li>
                            <li class="customerList"><a class="customerListA" href="#">Venue</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <h3 class="company atmosphere">Teams</h3>
                        <ul class="list-unstyled links">
                            <li class = "companyFoot"><a class="footAcompany" href="#">About us</a></li>
                            {/* <li class = "companyFoot"><a class="footAcompany" href="#">Careers</a></li> */}
                            <li class = "companyFoot"><a class="footAcompany" href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <h3 class="furtherInfo atmosphere">Further Information</h3>
                        <ul class="list-unstyled links">
                            <li class="furtherInformation"><a class="furtherInformationA" href="#">Terms &amp; Conditions</a></li>
                            <li class="furtherInformation"><a class="furtherInformationA" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3 class="followUs atmosphere">Follow us</h3>
                        <ul class="list-unstyled social">
                            <li class="socialList"><a class="listSocialA" href="#"><i class="footerSocial fa-brands fa-instagram "></i></a></li>
                            <li class="socialList"><a class="listSocialA" href="#"><i class="footerSocial fa-brands fa-twitter "></i></a></li>
                            <li class="socialList"><a class="listSocialA" href="#"><i class="footerSocial fa-brands fa-facebook "></i></a></li>
                            <li class="socialList"><a class="listSocialA" href="#"><i class="footerSocial fa-brands fa-linkedin "></i></a></li>
                            <li class="socialList"><a class="listSocialA" href="#"><i class="footerSocial fa-brands fa-youtube "></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer

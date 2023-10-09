import React from 'react'

import { Link } from 'react-router-dom'

import '../Footer/Footer.scss'

export default function Footer() {
  return (
    <footer>
        <div id='foot'>
            <div id='foot1'>
                <h2>MTC</h2>
                <div>
                <div id='reseaux'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                </div>
                <i class="fa-regular fa-copyright">Hello</i>
                </div>
            </div>

            <div id='listes'>
                <div>
                    <h3>Teams</h3>
                    <ul>
                        <li>About</li>
                        <li>Newsroom</li>
                        <li>Brand Guideline</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Translator & Editors</li>
                        <li>Commercial</li>
                        <li>Audio Bisiness</li>
                        <li>Help and Service</li>
                        <li>DMCA Notification</li>
                        <li>Webnovel Forum</li>
                        <li>Online Service</li>
                        <li>bVulnerability Report</li>
                    </ul>
                </div>
                <div>
                    <h3>Ressources</h3>
                    <ul>
                        <li>Tags</li>
                        <li>Donwload App</li>
                        <li>Be an Author</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Keywords</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div>
                    <h3>Referrals</h3>
                    <ul>
                        <li>QiDian</li>
                        <li>Yuewen</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

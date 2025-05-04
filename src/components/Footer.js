"use client";

import React, { useState } from "react";
import "@/app/styles/Footer.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdCameraAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  const [showMettaMuse, setShowMettaMuse] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);

  const toggleMettaMuse = () => {
    setShowMettaMuse(!showMettaMuse);
  };

  const toggleQuickLinks = () => {
    setShowQuickLinks(!showQuickLinks);
  };

  const toggleFollowUs = () => {
    setShowFollowUs(!showFollowUs);
  };

  return (
    <div>
      <div className="footer">
        <div className="footerTop">
          <div className="topFooterLeftSide">
            <p className="tf1">BE THE FIRST TO KNOW</p>
            <p className="tf2">Sign up for updates from mettā muse</p>
            <div className="SearchInFooter">
              <div className="inputinfoooter">
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  aria-label="Email subscription"
                />
              </div>
              <div className="buttoninFooter">
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="topFooterRightSide">
            <p className="contacatusinfooter">CONTACT US</p>
            <p>+44 221 133 5360</p>
            <p className="custmermail">customercare@mettamuse.com</p>
            <p className="currensyinfooter">CURRENCY</p>
            <p className="usdinfooter">
              <div className="flag">
                <img
                  src="/FooterImages/usaflag.jpg"
                  alt="USA Flag"
                  width={60}
                  height={30}
                />
              </div>
              <div className="dot">
                <LuDot />
              </div>
              <div className="usdinTopFooterRightSide">USD</div>
            </p>
            <p className="aboutTransactionInFooter">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <div className="leftinbottomfooter">
            <p
              className="bottomfutterboldline resinfooter activebottomfutter"
              onClick={toggleMettaMuse}
            >
              <span>mettā muse </span>
              <span className="bottomfutterdownarrow">
                <MdOutlineKeyboardArrowDown
                  className={showMettaMuse ? "rotated" : ""}
                />
              </span>
            </p>
            <div
              className={`collapsible-content ${showMettaMuse ? "show" : ""}`}
            >
              <p className="bottomfooterbottomitems">
                <Link href="/about">About Us</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/stories">Stories</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/artisans">Artisans</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/boutiques">Boutiques</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/contact">Contact Us</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/eu-compliance">EU Compliances Docs</Link>
              </p>
            </div>
          </div>

          <div className="midinbottomfooter">
            <p
              className="bottomfutterboldline resinfooter resinfooter2"
              onClick={toggleQuickLinks}
            >
              <span>QUICK LINKS </span>
              <span className="bottomfutterdownarrow">
                <MdOutlineKeyboardArrowDown
                  className={showQuickLinks ? "rotated" : ""}
                />
              </span>
            </p>
            <div
              className={`collapsible-content ${showQuickLinks ? "show" : ""}`}
            >
              <p className="bottomfooterbottomitems">
                <Link href="/orders">Orders & Shipping</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/seller-login">Join/Login as a Seller</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/payment">Payment & Pricing</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/returns">Return & Refunds</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/faqs">FAQs</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/privacy">Privacy Policy</Link>
              </p>
              <p className="bottomfooterbottomitems">
                <Link href="/terms">Terms & Conditions</Link>
              </p>
            </div>
          </div>

          <div className="lastinbottomfooter">
            <p
              className="bottomfutterboldline bottomfutterboldlineFollowUs"
              onClick={toggleFollowUs}
            >
              FOLLOW US
              <span className="bottomfutterdownarrow follow-us-arrow">
                <MdOutlineKeyboardArrowDown
                  className={showFollowUs ? "rotated" : ""}
                />
              </span>
            </p>
            <div
              className={`collapsible-content ${showFollowUs ? "show" : ""}`}
            >
              <p className="bottomfootericons">
                <a
                  href="https://instagram.com/mettamuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <p>
                    <MdCameraAlt />
                  </p>
                </a>
                <a
                  href="https://linkedin.com/company/mettamuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <p>
                    <FaLinkedin />
                  </p>
                </a>
              </p>
              <p className="payment-title">mettā muse ACCEPTS</p>
              <p className="trans_images">
                <img src="/FooterImages/google-pay.svg" alt="Google Pay" />
                <img src="/FooterImages/master-card.svg" alt="MasterCard" />
                <img src="/FooterImages/paypal.png" alt="Paypal" />
                <img src="/FooterImages/amex.svg" alt="American Express" />
                <img src="/FooterImages/apple-pay.svg" alt="Apple Pay" />
                <img src="/FooterImages/opay.svg" alt="OPay" />
              </p>
            </div>
          </div>
        </div>

        <div className="copyrightfooter">
          <p>
            Copyright © {new Date().getFullYear()} mettamuse. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

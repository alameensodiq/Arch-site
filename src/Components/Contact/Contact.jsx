import React from "react";
import TopFooter from "../Reusables/TopFooter";
import BottomFooter from "../Reusables/BottomFooter";
import Navbar from "../Reusables/Navbar";
import ServiceHeader from "../Reusables/ServiceHeader";
import ContactSection from "./ContactSection";
import Contactpic from "../../assets/contactpic.png";
import ContactCard from "../Reusables/ContactCard";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServiceHeader
        name="Contact Us"
        header="We’d love to hear from you"
        statement="Contact us through phone, email, or the user-friendly contact form provided below. Your feedback is important to us."
      />
      <ContactSection
        pic={Contactpic}
        title="Learn more about us today,"
        title2=" book a consultation"
      />
      <div className="px-18 py-10 flex flex-col gap-10">
        <div className="flex flex-col items-start gap-2">
          <span className="text-[16px] text-[#2163C0]">Contact us</span>
          <span className="text-[36px] text-[#101828]">
            We’d love to hear from you
          </span>
          <span className="text-[16px] text-[#667085]">
            Our friendly team is always here to chat.
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-3 justify-between">
          <ContactCard
            text1="Chat to support"
            text2="We’re here to help."
            text4="archandbuildengineering@gmail.com"
          />
          <ContactCard
            text1="Visit us"
            text2="Visit our office HQ."
            text3="11, Soji Adepegba Close,Off Allen Avenue, Lagos."
          />
          <ContactCard
            text1="Call us"
            text2="Mon-Fri from 8am to 5pm."
            text4="08080312772, ‭0802 273 7896‬"
          />
        </div>
      </div>
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Contact;

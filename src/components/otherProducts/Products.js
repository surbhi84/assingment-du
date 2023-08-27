import React from "react";

const thumbnails = [
  {
    src: "/images/ppg.svg",
    alt: "privacy_policy_generator",
    heading: "Privacy Policy Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/tnc.svg",
    alt: "terms_and_conditions_generator",
    heading: "Terms & Conditions Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/dng.svg",
    alt: "domain_name_generator",
    heading: "Domain Name Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/ig.svg",
    alt: "invoice_generator",
    heading: "Invoice Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

export const Products = () => {
  return (
    <div className='pr-main'>
      <div className='pr-heading'>Try our other free products</div>
      <div className='pr-container'>
        {thumbnails.map((item) => (
          <div className='pr-item-div'>
            <img src={item.src} alt={item.alt} className='pr-img' />
            <span className='pr'>{item.heading}</span>
            <div className="gray-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

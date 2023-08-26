import React from "react";

const thumbnails = [
  {
    src: "/images/ppg.png",
    alt: "privacy_policy_generator",
    heading: "Privacy Policy Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/tnc.png",
    alt: "terms_and_conditions_generator",
    heading: "Terms & Conditions Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/dng.png",
    alt: "domain_name_generator",
    heading: "Domain Name Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    src: "/images/ig.png",
    alt: "invoice_generator",
    heading: "Invoice Generator",
    text: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

export const Products = () => {
  return (
    <div className='pr-main'>
      <h2 className='pr-heading'>Try our other free products</h2>
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

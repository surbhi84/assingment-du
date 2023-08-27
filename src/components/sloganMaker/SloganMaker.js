import React, { useState } from "react";
import { slogans } from "../slogans";

const SloganBlock = ({ item, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [ifCopied, setIfCopied] = useState(false);

  return (
    <div
      className='sm-slogan-tile flex-center'
      key={item.id}
      onClick={() => {
        navigator.clipboard.writeText(item.text);
        setIfCopied(true);
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIfCopied(false);
      }}
    >
      {item.text}
      {showTooltip && ifCopied ? (
        <div
          className={`sm-tooltip ${
            index % 2 === 0 ? "sm-copied" : "sm-copied-1"
          } `}
        >
          Copied!
        </div>
      ) : (
        showTooltip && (
          <div
            className={`sm-tooltip ${
              index % 2 === 0 ? "sm-copy" : "sm-copy-1"
            }`}
          >
            Click to copy
          </div>
        )
      )}
    </div>
  );
};

export const SloganMaker = ({ slogansNum = "1,023" }) => {
  const [slogan, setSlogan] = useState("cozy");

  return (
    <div className='sm-container'>
      <div className='sm-heading'>Free slogan maker</div>
      <span className='sm-text'>
        Simply enter a term that describes your business, and get up to 1,000
        relevant slogans for free.
      </span>
      <div className='sm-input-label'>Word for your slogan</div>
      <div className='sm-input-div'>
        <input
          className='sm-input'
          onChange={(e) => setSlogan(e.target.value)}
          value={slogan}
        />
        <img
          src='./icons/cross.svg'
          className='sm-input-cross'
          alt='cross-icon'
          onClick={() => setSlogan("")}
        />
      </div>
      <button className='sm-btn'>Generate slogans</button>
      <div className='sm-partition'></div>
      <div className='sm-result flex-center'>
        <span> We have generated {slogansNum} slogans for "cozy"</span>
        <button className='sm-btn-outline'>Download all</button>
      </div>
      <div className='slogan-container'>
        {slogans.map((item, index) => (
          <SloganBlock item={item} index={index} />
        ))}
      </div>
      <div className='sm-partition-1'></div>
      {/* pagination */}

      <div className='pagination-div flex-center'>
        <div className='current-page'>1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>21</div>
        <button className='flex-center pagination-btn'>
          Next <img src='/icons/arrow.svg' alt='arrow_icon' />
        </button>
      </div>
    </div>
  );
};

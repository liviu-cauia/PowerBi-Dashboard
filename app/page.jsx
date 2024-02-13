'use client';

import React, { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
import buttonData from './data/buttonData';
import Iframe from './components/Iframe';

const Page = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [iframeUrl, setIframeUrl] = useState(buttonData[0].buttons[0].src);

  const handleButtonClick = (url) => {
    setIframeUrl(url);
  };

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div>
      <div class="report-banner" id="reportBanner">
        IS Ops PowerBI Dashboard
      </div>

      <div className="flex">
        <div>
          <ButtonGroup
            buttonData={buttonData}
            onItemClick={handleButtonClick}
          />
        </div>
        <div>
          <Iframe src={iframeUrl} />
        </div>
      </div>
    </div>
  );
};

export default Page;

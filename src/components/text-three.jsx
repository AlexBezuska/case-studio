import React from 'react';

    export default function({textLeftSubheading,textLeftText,textMiddleSubheading,textMiddleText,textRightSubheading,textRightText}){
      return (

<section class="cs-three-across">
  <div class="cs-flex cs-justify-between page-width">
    <div class="cs-item cs-center-text">
      <h2>{textLeftSubheading}</h2>
      <p>{textLeftText}</p>
    </div>
    <div class="cs-item cs-center-text">
      <h2>{textMiddleSubheading}</h2>
      <p>{textMiddleText}</p>
    </div>
    <div class="cs-item cs-center-text">
      <h2>{textRightSubheading}</h2>
      <p>{textRightText}</p>
    </div>
  </div>
</section>

      );
    };

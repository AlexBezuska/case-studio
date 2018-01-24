import React from 'react';

    export default function({heading,leftSideSubheading,leftSideText,rightSideSubheading,rightSideText}){
      return (

<section>
  <div class="page-width">
    <div class="cs-grow-3 cs-justify-between">
      <h1 class="cs-pad-sides">{heading}</h1>
      <div class="cs-flex cs-flex-row">
        <div class="cs-grow-1 cs-pad-sides">
          <h4>{leftSideSubheading}</h4>
          <p>{leftSideText}</p>
        </div>
        <div class="cs-grow-1 cs-pad-sides">
          <h4>{rightSideSubheading}</h4>
          <p>{rightSideText}</p>
        </div>
      </div>
    </div>
  </div>
</section>

      );
    };

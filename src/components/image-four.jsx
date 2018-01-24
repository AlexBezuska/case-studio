import React from 'react';

export default function({imageLeftUrl,imageLeftAlt,imageMiddleLeftUrl,imageMiddleLeftAlt,imageMiddleRightUrl,imageMiddleRightAlt,imageRightUrl,imageRightAlt}){
  return (

    <section class="cs-four-across">
      <div class="cs-flex cs-justify-between page-width">
        <div class="cs-item"><img src={imageLeftUrl} alt={imageLeftAlt}/></div>
        <div class="cs-item"><img src={imageMiddleLeftUrl} alt={imageMiddleLeftAlt}/></div>
        <div class="cs-item"><img src={imageMiddleRightUrl} alt={imageMiddleRightAlt}/></div>
        <div class="cs-item"><img src={imageRightUrl} alt={imageRightAlt}/></div>
      </div>
    </section>

  );
};

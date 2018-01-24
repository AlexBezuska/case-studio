import React from 'react';

    export default function({textSubheading,text,imageUrl,imageAlt}){
      return (

<section class="cs-two-across">
  <div class="cs-flex cs-justify-between page-width">
    <div class="cs-item cs-flex cs-justify-center cs-align-center">
      <div class="cs-callout cs-callout-right">
        <h2>{textSubheading}</h2>
        <p>{text}</p>
      </div>
    </div>
    <div class="cs-item"><img src="{imageUrl}" alt="{imageAlt}"/></div>
  </div>
</section>

      );
    };

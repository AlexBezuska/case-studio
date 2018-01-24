import React from 'react';

    export default function({imageLeftUrl,imageLeftAlt,imageRightUrl,imageRightAlt}){
      return (

<section class="cs-two-across">
  <div class="cs-flex cs-justify-between page-width">
    <div class="cs-item"><img src="{imageLeftUrl}" alt="{imageLeftAlt}"/></div>
    <div class="cs-item"><img src="{imageRightUrl}" alt="{imageRightAlt}"/></div>
  </div>
</section>

      );
    };

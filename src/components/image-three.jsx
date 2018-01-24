import React from 'react';

    export default function({imageLeftUrl,imageLeftAlt,imageMiddleUrl,imageMiddleAlt,imageRightUrl,imageRightAlt}){
      return (
        
<section class="cs-three-across">
  <div class="cs-flex cs-justify-between page-width">
    <div class="cs-item"><img src="{imageLeftUrl}" alt="{imageLeftAlt}"/></div>
    <div class="cs-item"><img src="{imageMiddleUrl}" alt="{imageMiddleAlt}"/></div>
    <div class="cs-item"><img src="{imageRightUrl}" alt="{imageRightAlt}"/></div>
  </div>
</section>

      );
    };

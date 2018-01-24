import React from 'react';

    export default function({title,text}){
      return (
        
<section class="cs-two-across ">
  <div class="cs-flex cs-justify-between page-width">
    <div class="cs-grow-1 cs-item cs-pad">
      <h1 class="cs-side-title">{title}</h1>
    </div>
    <div class="cs-grow-3 cs-item cs-pad">
      <p>{text}</p>
    </div>
  </div>
</section>

      );
    };

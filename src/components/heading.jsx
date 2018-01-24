import React from 'react';

    export default function({heading,subheading}){
      return (

<section class="cs-heading">
  <div class="page-width cs-center-text">
    <h1>{heading}</h1>
    <h5 class="cs-subtitle">{subheading}</h5>
  </div>
</section>

      );
    };

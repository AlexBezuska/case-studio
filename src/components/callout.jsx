import React from 'react';

export default function({heading, text}){
  return (
    <section class="cs-single">
      <div class="cs-flex cs-justify-between page-width">
        <div class="cs-flex cs-item cs-flex cs-justify-center cs-align-center">
          <div class="cs-callout cs-center-text">
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export default function({keywords}){
  return (

    <section>
      <div class="page-width cs-flex cs-force-row cs-flex-wrap cs-justify-around">
        <div class="cs-circle-item">{keywords}</div>
      </div>
    </section>

  );
};

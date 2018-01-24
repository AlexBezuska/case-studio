import React from 'react';

export default function({keywords}){

  var keywordsList = keywords.map(function(keyword){
    return <div class="cs-circle-item">{keyword}</div>;
  });

  return  (
    <section>
      <div class="page-width cs-flex cs-force-row cs-flex-wrap cs-justify-around">
        { keywordsList }
      </div>
    </section>
  )

};

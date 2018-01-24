import React, { Component } from 'react';
import './App.css';
import Callout from './components/callout';
import Fullbleed from './components/fullbleed';
import Heading from './components/heading';
import ImageFour from './components/image-four';
import ImageText from './components/image-text';
import ImageThree from './components/image-three';
import ImageTwo from './components/image-two';
import Image from './components/image';
import Keywords from './components/keywords';
import Overview from './components/overview';
import TextImage from './components/text-image';
import TextThree from './components/text-three';
import TextTitle from './components/text-title';
import TitleText from './components/title-text';


class App extends Component {
  render() {

    var heading = "Lorem ipsum";
    var subheading = "Donec rutrum sapien nisi";
    var text = "In a vulputate arcu. Donec rutrum sapien nisi, et laoreet justo ullamcorper sit amet. Nam commodo sit amet nisi eu iaculis. Phasellus pharetra nibh ac libero auctor egestas non non ex. Nunc at fringilla metus, ut elementum erat. Ut vulputate suscipit magna ut porta. Curabitur sit amet dolor ullamcorper, maximus tortor nec, ullamcorper nisi.";
    var alt = "In a vulputate arcu.";
    var img = "https://picsum.photos/1613/900?random";
    var keywords = ["word1", "word2","word3", "word4","word5", "word6"];
    var gutter = {height: '250px'};

    return (
      <div className="cs-container">
        <Callout heading={heading} text={text}/>
        <div style={gutter}></div>
        <Fullbleed url={img} alt={alt}/>
        <div style={gutter}></div>
        <Heading heading={heading} subheading={subheading}/>
        <div style={gutter}></div>
        <ImageFour imageLeftUrl={img} imageLeftAlt={alt} imageMiddleLeftUrl={img} imageMiddleLeftAlt={alt} imageMiddleRightUrl={img} imageMiddleRightAlt={alt} imageRightUrl={img} imageRightAlt={alt}/>
        <div style={gutter}></div>
        <ImageText textSubheading={subheading} text={text} imageUrl={img} imageAlt={alt}/>
        <div style={gutter}></div>
        <ImageThree imageLeftUrl={img} imageLeftAlt={alt} imageMiddleUrl={img} imageMiddleAlt={alt} imageRightUrl={img} imageRightAlt={alt}/>
        <div style={gutter}></div>
        <ImageTwo imageLeftUrl={img} imageLeftAlt={alt} imageRightUrl={img} imageRightAlt={alt}/>
        <div style={gutter}></div>
        <Image url={img} alt={alt}/>
        <div style={gutter}></div>
        <Keywords keywords={keywords}/>
        <div style={gutter}></div>
        <Overview heading={heading} leftSideSubheading={subheading} leftSideText={text} rightSideSubheading={subheading} rightSideText={text}/>
        <div style={gutter}></div>
        <TextImage textSubheading={subheading} text={text} imageUrl={img} imageAlt={alt}/>
        <div style={gutter}></div>
        <TextThree textLeftSubheading={subheading} textLeftText={text} textMiddleSubheading={subheading}  textMiddleText={text} textRightSubheading={subheading}  textRightText={text}/>
        <div style={gutter}></div>
        <TextTitle  title={heading} text={text}/>
        <div style={gutter}></div>
        <TitleText  title={heading} text={text}/>
        <div style={gutter}></div>
      </div>
    );
  }
}

export default App;

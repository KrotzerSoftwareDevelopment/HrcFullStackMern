import React from 'react';
import '../App.css';
import daphblanket from '../../assets/PhotoGallery/daphblanket.png';

import Disclaimer from '../../components/Disclaimer';
const CairnCare = () => {

      return (

       
<div className="About">

<div className="">


<div className="">
<div id="Title"> Hair cutting</div>
<div className="headerImageContainer">
<img className="headerImage" src={daphblanket} />
</div>
<div id="AboutContent">
      


  I have gone to a professional groomer and had their haircut at home.
I have found that a hair cutting technic referred to as hand stripping allows the cairn to retain 
their wire hair-like texture and in doing so gives them a waterproof type layer of fur. 
<br />
    <br />
Every cairn is a little different when it comes to getting a hair buzzed hair cut. 
I had my sire hair buzzer haircut when he was younger in age. His hair was very soft afterward, but it is not as good at keeping him warm or waterproof.
<br />
<br />
I never got my sire hair cut with hand strippers. His hair now, after well over a year has become more wire type hair in some spots, despite only cutting with hair buzzers.
My dams are all hand stripped, but I had one hair buzz haircut when she was younger. It stunted her hair growth. Hand stripping is preferred for Carins but not necessary.

</div>

<div id="Title"> Nail Trimming </div>
<div id="AboutContent">

This is something I recommend for a groomer as well, 
 but you will know you're getting closer to the time to get nails cut when it has been a while. You can also hear their nails tap on floors or any in excessive amounts.
 Cairns has black nails, you can't see the nail quick. 
 <br />
 <br />
 Letting your puppies' nails grow out too long can actually be more painful for them than cutting them too short as well. your groomer will have a good guideline for you to follow about how long and when to get their nails cut.

 </div>
 <div id="Title"> Shedding </div>

 <div id="AboutContent">
 I have found when the season changes from winter to summer that Cairns will shed quite a bit.
 Brushing their coat during the seasons changing can significantly reduce shedding, normally around once a week, hair brushing well can help a lot, if not twice a week can help completely reduce shedding. 
 </div>



</div>
</div>
<br />
<br />
<Disclaimer />
</div>

      ); 
    
  }

  export default CairnCare;
  
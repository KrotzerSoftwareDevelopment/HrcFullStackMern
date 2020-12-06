import React from 'react';
import '../App.css';
import Diet from '../../assets/appimages/OpenFarm.png';

import Disclaimer from '../../components/Disclaimer';
const AboutDiet = () =>{
      return (
<div className="">
<div className="">
        
<div className="About">
  <div id="Title">Diet</div>
  <img className="headerImage" src={Diet} />
  <div id="AboutContent">

    Diet is just as important for dogs as it is for us and our overall health!
    I feed as natural and healthy as possible, 
    nothing but premium food such as Open farm and fresh organic foods that I cook and bake for them. 
    Before and during pregnancies I feed an organic blend of 
    prenatal vitamins to help ensure the best possible chance of a healthy 
    pregnancy and delivery for my dams and their puppies.
    <br />
    <br />
    Open Farm provides human-grade quality food, employs small farms, 
    and produces a very healthy dog food!
    I feed open farm food to all my adult dogs and puppies.
    One of the best parts of Open Farm is there ingredients list is 
    all able to be traced back to its source through their website. 
    With Open Farm you know exactly what's in our furry friend's food 
    and exactly where it came from.
    
  
    </div>
    
    <div className="">

    <div id="Title">What Not To Feed</div>
    <div id="AboutContent">
   



 My general rule of thumb for dog treats or any dog foods is if Walmart sells it I don't feed it. 
 Not because of Walmart but because of the food & treat quality. 
 <br />
 <br />
 The only food I would ever come close to recommending from Walmart is a fresh pet select. You should be safe with pretty much any of the fresh pet select food options. Most Human food is bad to feed your furry family member and one of the biggest reasons is sodium. Most human foods contain a significant amount of sodium and this can lead to heart failure and other serious health issues and significantly shorten a dog's life span. 
 <br />
 <br />Every puppy 
 comes with an informational guide on what human foods are good to feed your new family member and what foods are not!
 Even some vegetables and fruits can be not as good as others and the informational guide from AKC explains more about this.

    </div>
    <div id="Title">Other Foods</div>
    <div id="AboutContent">
 
 <div>
 The only other food type item I recommend is called no hide from Earth Animals. No hide is a rawhide alternative that won't wreak 
 havoc on your furry friend's digestive track as rawhides will. 
 No hide is a great healthy Chewying treat that I make sure I always have around, 
 It is one of the only things I can buy that they can't chew up in 20 mins and it's made with healthy ingredients!
 </div>

    </div>
    <br />
<br />
<Disclaimer />
    </div>

    </div>

</div>

</div>
      ); 
    
  }

  export default AboutDiet;
  
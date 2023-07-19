import React from 'react';

function HomePage(){
    return(    
    <main>
           <Card title="Welcome to PetLand!">
               <em>Find your dream pet</em>
           </Card>
           <Card title="What pets would you like to see?"/>
               <div className="card">
                   <h2>{props.title}</h2>
                   <Card>
                       <div>
                               <emojiButton emoji="😸" labelText="Cats"/>
                               <emojiButton emoji="🐕" labelText="Dogs"/>
                       </div> 
               </Card>
               </div>
     </main>)
   }
   export default HomePage;
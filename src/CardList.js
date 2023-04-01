// vedeo 306

// import React from 'react';
// import Card from './Card';

// const CardList = ({robots}) => {
//     return (
//       <div>
//         {
//           robots.map((user,i) => {  
//            return (
//             < Card 
//                 key ={i} 
//                 id={robots[i].id} 
//                 name={robots[i].name} 
//                 email={robots[i].email}
//                 />
//             );
//         })
//        }
//      </div>
//  );
// }

// export default CardList;




 // vedeo 308 styling
 //CardList.js

 import React from 'react';
 import Card from './Card';
 
 const CardList = ({robots}) => {
     return (
       <div>
         {
           robots.map((user,i) => {  
            return (
             < Card 
                 key ={i} 
                 id={robots[i].id} 
                 name={robots[i].name} 
                 email={robots[i].email}
                 />
             );
         })
        }
      </div>
  );
 }
 
 export default CardList;
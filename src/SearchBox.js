// vedeo 306
// searchbox.js 

// import React from 'react';

// const SearchBox = ({searchfield,SearchChange}) => {
//     return (
//         <div className='pa2'>
//             <input 
//                 className='pa3 ba b--green bg-lightest-blue'
//                 type = 'Search'
//                 placeholder='search robots' 
//                 onChange={SearchChange}
//             />
//         </div>
// );
// }
// export default SearchBox;


// vedeo 308 styling
// searchbox.js 

import React from 'react';

const SearchBox = ({searchfield,SearchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type = 'Search'
                placeholder='search robots' 
                onChange={SearchChange}
            />
        </div>
);
}
export default SearchBox;
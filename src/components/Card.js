import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?size=250x250`}/>
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
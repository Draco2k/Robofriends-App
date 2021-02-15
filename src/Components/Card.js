import React from 'react' ;

const Card = (props) => {
    const {id , name , email} =props;
    return (
    <div className='bg-light-blue dib br3 paa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?set=set3`} alt='robots' className='w5 h5'/>
        <div className='tc athelas'>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;
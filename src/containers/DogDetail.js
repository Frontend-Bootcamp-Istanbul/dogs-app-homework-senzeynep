import React from 'react';
import dogs from '../dogsdata';

const DogDetail = (props) => {
    const dogId = props.match.params.dogId;
    const foundDog = dogs.find((dog) => dog.id == dogId);
    return (
        <div>
            <div>
            {foundDog.name}
            </div>
            <div>
                {foundDog.description}
            <div>
                <img src={foundDog.image} alt="" />
            </div>
            </div>
        </div>
    );
};

export default DogDetail;
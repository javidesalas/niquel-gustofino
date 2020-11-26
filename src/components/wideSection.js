import React from 'react';
import Image from 'gatsby-image'

const wideSection = ({picture, title, text}) => {
    return (
        <section>
            <Image fluid={picture} />
            
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
                       
        </section>
    );
};

export default wideSection;
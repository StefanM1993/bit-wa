import React from 'react';
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//         max: 8,
//         min: 4
//     },
//     wordsPerSentence: {
//         max: 16,
//         min: 4
//     }
// });

const BlogPost = props => {
    return (
        <li className="BlogPost">
            <h3 className="BlogPost__Title">{props.title}</h3>
            <p className="BlogPost__Description">{props.description}</p>
        </li>
    );
}

export { BlogPost };
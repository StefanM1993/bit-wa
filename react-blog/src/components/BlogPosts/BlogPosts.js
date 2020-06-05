import React from 'react';

import { BlogPost } from '../BlogPost/BlogPost.js';
import uuid from 'react-uuid';

const BlogPosts = () => {

    const blogPosts = [
        { title: "sport", description: "sportlike" },
        { title: "wheater", description: "wheathery" },
        { title: "news", description: "boring" },
        { title: "cooking", description: "gastronomylike" },
        { title: "Blob", description: "blobby" },
        { title: "Glob", description: "globlike" },
        { title: "Personal", description: "It's personal" }
    ];

    return (
        <ul className="BlogPosts__Main">
            {blogPosts.map(blogPost => (
                <BlogPost key={uuid()}
                    title={blogPost.title}
                    description={blogPost.description}
                />
            ))}
        </ul>
    );
}

export { BlogPosts };
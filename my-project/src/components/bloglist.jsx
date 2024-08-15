import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Function component with default parameters
function BlogList({ posts = [] }) {
    return (
        <div>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );
}

BlogList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    )
};

export default BlogList;

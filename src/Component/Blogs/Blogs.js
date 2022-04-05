import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='QnA'>
            <h3 className='text-xl font-bold mt-12 mb-6'>What is Context API?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. 
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            <h3 className='text-xl font-bold mt-12 mb-6'>What is Semantic HTML tags?</h3>
            <p>Semantic HTML tags allow to add meaning to markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads content it doesn’t understand the context and meaning. Semantic HTML tags let you serve structured content to users, which is especially important for on-page SEO and accessibility. Although semantic tags existed in earlier HTML versions, the HTML5 specifications added several new semantic elements to the syntax—both on the block and inline levels.</p>
        </div>
    );
};

export default Blogs;
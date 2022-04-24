import React, { useState } from 'react';


const AddPostForm = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        }
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit} action='' method='post'>
            <div className='form-group'>
                <label for='Name'>Name:</label>
                <input type='name' className='form-control' id='exampleInputName' placeholder='Enter Name' value={post} onChange={(event) => setName(event.target.value) }/>
            </div>
            <div className='form-group'>
                <label for='Post'>Post:</label>
                <input type='post' className='form-control' id='exampleInputPost' placeholder='Enter Post' value={post} onChange={(event) => setPost(event.target.value) }/>   
            </div>
           <button type = 'submit'>Create</button>
        </form>
    
     
     );
}
 
export default AddPostForm;
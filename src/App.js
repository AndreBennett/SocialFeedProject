import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPostForm from './Components/AddPost/AddPostForm'
import './App.css';
function App() {

const [posts, setPost] = useState([{name: 'Andre', post: 'Hi'}])

function addNewPost(post){

  let tempPost = [post, ...posts];

  setPost(tempPost);
}

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayPosts parentPost={posts} />
          </div>
          <div className='col-md-6'>
            <div className='border-box'>
              <AddPostForm addNewPostProperty={addNewPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
    

  );
}

export default App;

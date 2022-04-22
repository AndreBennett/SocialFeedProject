import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPostForm from './Components/AddPost/AddPostForm'

function App() {

const [posts, setPost] = useState([{name: 'Andre', post: 'Hi'}])

function addNewPost(post){

  let tempPost = [post, ...posts];

  setPost(tempPost);
}

  return (
    <div>
      <DisplayPosts parentPost={posts} />
      <AddPostForm addNewPostProperty={addNewPost} />

    </div>
  );
}

export default App;

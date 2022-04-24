
const DisplayPosts = (props) => {
    return ( 
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
            <tbody>
              {props.parentPost.map((entry) => {
                return (
                  <tr>
                    <td>{entry.name}</td>
                  </tr>
                );
              })}
            </tbody>
        </thead>
        <thead>
            <tr>
              <th>Post</th>
            </tr>
              <tbody>
              {props.parentPost.map((entry) => {
                return (
                  <tr>
                    <td>{entry.post}</td>
                  </tr>
                );
              })}
            </tbody>
        </thead>
      </table>
     );
}
 
export default DisplayPosts;
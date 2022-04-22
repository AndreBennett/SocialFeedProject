
const DisplayEntries = (props) => {
    return ( 
              <table>
        <thead>
          <tr>
            <th>Name</th>
            <tbody>
              {props.parentEntries.map((entry) => {
                return (
                  <tr>
                    <td>{entry.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </tr>
          <tr>
            <th>Post</th>
            <tbody>
               {props.parentEntries.map((entry) => {
                return (
                  <tr>
                    <td>{entry.post}</td>
                  </tr>
                );
              })}
            </tbody>
          </tr> 
        </thead>
      </table>

     );
}
 
export default DisplayEntries;
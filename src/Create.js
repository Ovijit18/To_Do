import {useState} from 'react';
const Create = () => {
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
      //e.preventDefault();
        const x = { body }
        fetch('http://localhost:7000/lists', {
          method: "POST",
          headers: { "Content-Type" : "application/json"},
          body: JSON.stringify(x)
        }).then(() => {
    
        });
      }
    return (
        <div className="input-section">
        <form className='form' onSubmit={ handleSubmit }>
          <input
            type='text'
            required
            value={ body }
            onChange={(e) => setBody(e.target.value)}
          />        
          <button>Create</button>
        </form>
      </div>
    );
}
 
export default Create;
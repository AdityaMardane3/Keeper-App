import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isexpanded , setexpanded]= useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand()
  {
    return setexpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isexpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />: null}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isexpanded ? 3:1}
        />
       <zoom in={isexpanded}> <Fab onClick={submitNote}><AddIcon/></Fab></zoom>
      </form>
    </div>
  );
}

export default CreateArea;

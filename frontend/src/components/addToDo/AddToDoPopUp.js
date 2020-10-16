import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';


export default function AddToDoPopUp({onSubmit}) {

    const [description, setDescription] = useState('');

    return <Popup trigger={<button>New task</button>} position="right center">
        <div>
            <h5>
                Create Task
            </h5>
            <form>
                <label>
                    Add your description
                </label>
                <input type="text" name="description" onChange={event => setDescription(event.target.value)}/>
            </form>
            <button onClick={()=> onSubmit(description)}>
                Send
            </button>
        </div>
    </Popup>
}
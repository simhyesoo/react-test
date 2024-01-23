import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from './Mycontext';

function Write(props) {
    const {dispatch} = useContext(Store);

    const navi = useNavigate();

    function submit(e){
        e.preventDefault();
        let today = new Date();

        let year = today.getFullYear(),
            month = today.getMonth()+1,
            date = today.getDate();

        let formData = new FormData(e.target);
            formData.append('id',Date.now());
            formData.append('date',`${year}-${month}-${date}`)

            dispatch({type:'insert',d:Object.fromEntries(formData)})
            navi('/list');
    }
    return (
        <div>
            <h2>Contact uS</h2>
            <form onSubmit={submit}>
                <p><input type="text" name="name" /></p>
                <p><input type="text" name="email" /></p>
                <p><textarea name="contact"></textarea></p>
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>
    );
}

export default Write;
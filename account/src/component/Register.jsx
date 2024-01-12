import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Register({ changeData }) {

    function btn(e) {
        e.preventDefault(e.target.form.price.value);

        let price = e.target.form.price.value;
        let message = e.target.form.message.value;


        let date = new Date();
        let toDate = `${date.getMonth() + 1}.${date.getDate()}`
        let list = { date: toDate, message, price, id: Date.now() }
        changeData(list)
        console.log(list)
    }


    return (
        <div className='register'>
            <button className='close'>X</button>
            <h2>등록하기</h2>
            <form onSubmit={btn}>
                <div className='write'>

                    <input type='text' name='price' placeholder='금액'></input>
                    <input type='text' name='message' placeholder='메세지'></input>

                </div>

                <div className='btn'>
                    <button onClick={btn}>예금하기</button>
                    <button onClick={btn}>출금하기</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
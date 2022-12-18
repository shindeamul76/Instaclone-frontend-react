import React from 'react'
import { useState } from 'react'
import './Form.css'
import axios from "axios";

const apiURL = "https://instaclone-amul-backend.onrender.com/post";
function Form({ setForm }) {
    let [formData, setFormData] = useState({ name: '', location: '', description: '' })
    let [file, setFile] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target

        setFormData(prev => {
            return { ...prev, [name]: value }
        })
    }
    function handleFile(e) {
        const { files } = e.target;
        setFile(files[0])
    }


    async function handleSubmit(e) {
        e.preventDefault()
        setForm(prev => !prev)
        const formDat = new FormData();
        formDat.append('file', file);
        formDat.append('name', formData.name);
        formDat.append('location', formData.location);
        formDat.append('description', formData.description);
        try {
            const response = await axios({
                method: "post",
                url: apiURL,
                data: formDat,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container'>

            <form className='form-container' action="/post" method='POST' enctype="multipart/form-data">
                <h2>Post your Photo</h2>

                <input className='image m' type="file" onChange={ handleFile } name="image" id="image" />
                <div className="name-location">

                    <input className='name m p' onChange={ handleChange } type="text" value={ formData.name } name="name" id="" placeholder='Author' />
                    <input className='location m p' onChange={ handleChange } type="text" value={ formData.location } name='location' placeholder='Location' />
                </div>

                <input className='description m p' onChange={ handleChange } type="text" value={ formData.description } name='description' placeholder='Description' />
                <button className='btn m p' onClick={ handleSubmit }>Post</button>
            </form>
        </div>
    )
}

export default Form
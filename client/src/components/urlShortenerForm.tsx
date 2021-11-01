import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { SERVER_ENDPOINT } from '../config/config';
import '../css/urlShortenerForm.css';

const URLShortenerForm: React.FC = () => {

    const [url, setUrl] = useState<string>('');
    const [shortUrl, setShortUrl] = useState<string | null>();
    const [error, setError] = useState<string | null>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // This prevents the page from refreshing when we submit
        if (url.startsWith('https://')) {
            const result = await axios.post(`${SERVER_ENDPOINT}/url`, {url})
            .then((response) => response.data);
            setShortUrl(result.shortUrl);
            setError(null);
        } else {
            setError('URL is not valid');
            setShortUrl(null);
        }

    };

    return (
        <div className = "container">
            <form style = {{textAlign: "center", height: "100%"}} onSubmit = {handleSubmit}>
                <input className = 'input' style={{width: "80%", margin: "30px 0 20px 0"}} 
                onChange = {(e: any) => setUrl(e.target.value)} type='text' name='url' placeholder='Enter URL'/>

                <button className = 'submitButton' type="submit" >Create Short URL</button>
                {shortUrl  && <div style = {{width: "80%", marginBottom: "20px"}} className = 'shortUrl'>{SERVER_ENDPOINT}/{shortUrl}</div>}
                {shortUrl && <a href = {`${SERVER_ENDPOINT}/${shortUrl}`} style = {{width: "60%", textDecoration: "none"}} className = 'clickMeBtn'>Click Me</a>}
                {error  && <section style = {{width: "60%"}} className = 'error'>{error}</section>}
            </form>
        </div>
    );
};

export default URLShortenerForm;
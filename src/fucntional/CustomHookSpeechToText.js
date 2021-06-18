import React,{useState} from 'react'
import {useSpeechRecognition} from 'react-speech-kit'

export default function TextToSpeech(){
    const [text, setText] = useState();
    const {listen, stop} = useSpeechRecognition({
        onResult: r=>setText(r)
    });
    return (<div>
    <div>Text To speech...</div>
    <textarea value={text}></textarea>
    <p>
        <button onClick={listen}>Start</button>
        <button onClick={stop}>Stop</button>
    </p>
    </div>)
}
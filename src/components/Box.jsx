import { useState } from 'react'
import './Box.css'


// A component to display boxes for each section in the app. User can hide content on each box by clicking on the title of the box.
export default function Box({ title, content }) {
    const [isVisible, setIsVisible] = useState(true);


    return (
        <>
            <h2 id="boxTitle" onClick={() => setIsVisible(!isVisible)}>{title}</h2>
            {isVisible && <div>{content}</div>}
        </>
    )
}
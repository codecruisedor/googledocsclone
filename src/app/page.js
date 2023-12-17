"use client";
import styles from './page.module.css'
import TextEditor from './TextEditor'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'  


export default function Home() {
 return (
    //<TextEditor/>
    <Router>
        <Routes>
            <Route path="/" exact  element={ <Navigate to = {`/documents/${uuidV4()}`}/> }/> 
            <Route path="/documents/:id" element={ <TextEditor/> }/>
        </Routes>
    </Router> 
    )
}

import React, {useEffect, useState} from 'react';
import dictionary from './dictionary';

function PageTemplateTest({pageTitle, pageText}){

    const [renderedPageText, setRenderedPageText] = useState("Test");

    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

    useEffect(() =>{
        setRenderedPageText(dictionary(pageText))
    }, [])

    return <>
        <h1>{pageTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: renderedPageText}}></div>
    </>
}

export default PageTemplateTest;
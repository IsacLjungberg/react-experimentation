import React from 'react';
import Template from '../PageTemplateTest';

function TestPage(){
    const pageTitle = "Hello World Title";
    const pageText = "Hello World Hello"

    return <>
    <Template 
        pageTitle = {pageTitle}
        pageText = {pageText}/>
    </>
}

export default TestPage;
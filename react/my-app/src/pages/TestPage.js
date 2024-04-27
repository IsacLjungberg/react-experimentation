import React from 'react';
import Template from '../PageTemplateTest';

function TestPage(){
    const pageTitle = "Hello World Title";
    const pageText = "<b>Hello World Hello</b>"

    return <>
    <Template 
        pageTitle = {pageTitle}
        pageText = {pageText}/>
    </>
}

export default TestPage;
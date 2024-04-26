import React, {useEffect} from 'react';

function PageTemplateTest({pageTitle, pageText}){

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle])

    return <>
        <h1>{pageTitle}</h1>
        {pageText}
    </>
}

export default PageTemplateTest;
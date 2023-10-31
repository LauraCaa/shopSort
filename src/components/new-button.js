import React from 'react';
export default function NewButtton(){
    return(
        <div className="main-font d-flex justify-content-start align-items-center ml-3">
            <button type="button" className="btn btn-lg btn-primary rounded-4 px-4 py-3 mt-2 main-font fw-bolder d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                </svg>
                <p className='ps-2 mb-0'>NEW PRODUCT</p>
            </button>
        </div>

    )
}
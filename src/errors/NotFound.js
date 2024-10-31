import React from 'react'

export default function NotFound() {
    return (
        <div className="text-center error">
            <img src="../images/404.png" className=" error-code" alt="..."/>
            <h1 className="display-1">Oops!</h1>
            <p className="display-4">¡Page not found!</p>
            <a href="/" className="btn btn-outline-dark btn-lg" role="button" aria-disabled="true">Home</a>
        </div>
    )
}

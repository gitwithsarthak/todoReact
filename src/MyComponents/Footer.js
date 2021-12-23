import React from 'react'

export default function footer() {
    let footerStyle= {
        position:"relative",
        top:"100vh",
        width:"100%"
    }
    return (
        <div>
            <footer className="bg-dark text-light py-3" style={footerStyle}>
                <p className="text-center">Copyright &copy; react.com </p>
            </footer>
        </div>

    )
}

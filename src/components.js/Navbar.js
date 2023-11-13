import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ search,setSearch }) {

 


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white m-2 rounded">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold nav-hover" to="/">Library Management</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">

                                <Link
                                    to="/"
                                    className="nav-link active nav-hover text-info" aria-current="page"><b>Home</b>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link
                                    to="/Book-List"
                                    className="nav-link active nav-hover text-info" aria-current="page"><b>Book-List</b>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Addbook" className="nav-link active nav-hover text-info" ><b>Add Book</b></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='me-5'>
                        <nav className="navbar bg-body-tertiary">
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-5" type="text" placeholder="Author/name search" value={search} onChange={(e) => setSearch(e.target.value)} />
                                    <button className="btn btn-outline-success" disabled>Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>

                </div>
            </nav>


        </>

    )
}

export default Navbar
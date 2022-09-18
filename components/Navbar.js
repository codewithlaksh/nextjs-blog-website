import React from 'react'
import Link from 'next/link'

function Navbar() {
    const validateSearch = function () {
        let searchInp = document.querySelector("input[name='query']");
        if (searchInp.value == "") {
            window.alert("Please enter your search query!")
        } else if (searchInp.value.length < 3) {
            window.alert("Search query cannot be less than 3 characters!")
        } else {
            document.forms["searchForm"].submit();
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/"><a className="navbar-brand">HuntingCoder</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog"><a className="nav-link">Blog</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" action="/search" method="get" id="searchForm">
                    <input className="form-control mr-sm-2" type="search" name="query" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={validateSearch}>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
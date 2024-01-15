import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-black" style={{ backgroundColor: 'black' }}>
  <div class="container-fluid">
    <div class="navbar-brand" style={{ fontWeight: "bolder", color: 'red' }}>
        Product Management System</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /></Link>
        </li>

        <li class="nav-item">
          <Link to='addProduct'class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px', fontSize: '1.1em' }} /></Link>
        </li>

       

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
import'./styles/dashstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function ListSeller() {



    return(
      
        <body>
            <div className="grid">      
                <aside className="sidenav">
                  <div className="sidenav__brand">
                    <i className="fa fa-car sidenav__brand-icon"></i>
                    <a className="sidenav__brand-link" href="/">Pharma<span className="text-light">Place</span></a>
                    <i className="fas fa-times sidenav__brand-close"></i>
                  </div>
                  <div className="sidenav__profile">
                    <div className="sidenav__profile-avatar"></div>
                    <div className="sidenav__profile-title text-light">Yassine ch</div>
                  </div>
                  <div className="row row--align-v-center row--align-h-center">
                    <ul className="navList">
                      <li className="navList__heading">Admin<i className="far fa-file-alt"></i></li>
                        <li>
                        <a href="/AdminList"><li className="subList__item">List</li></a>
                        <a href="/addadmins"><li className="subList__item">ADD</li></a>
                      </li>
                      <li className="navList__heading">Seller<i className="far fa-file-alt"></i></li>
                      <li>
                      <a href="/ListSeller"><li className="subList__item">List</li></a>
                    </li>
                    </ul>
                  </div>
                </aside>
              
                <main className="main">
                  <div className="main-header">
                    <div className="main-header__intro-wrapper">
                      <div className="main-header__welcome">
                        <div className="main-header__welcome-title text-light">Welcome, Yassine</div>
                        <div className="main-header__welcome-subtitle text-light">How are you today?</div>
                      </div>
                      <div className="quickview">
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                        <div className="quickview__item">
                          <div className="quickview__item-description">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-overview">
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--document">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light"> Managment <strong>Seller</strong></h3>
                        <p className="overviewCard-subtitle">19</p>
                      </div>
                    </div>
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--calendar">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Admin</strong></h3>
                        <p className="overviewCard-subtitle">15</p>
                      </div>
                    </div>
                    
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--mail">
                        <i className="fa fa-user"></i>
                      </div>

                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Super Admin</strong></h3>
                        <p className="overviewCard-subtitle">50</p>
                      </div>

                    </div>
                    <div className="overviewCard">
                      <div className="overviewCard-icon overviewCard-icon--photo">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="overviewCard-description">
                        <h3 className="overviewCard-title text-light">Managment <strong>Seller</strong></h3>
                        <p className="overviewCard-subtitle">17</p>
                      </div>
                    </div>  
                  </div>
                  <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Sellers</b></h2>
					</div>
				</div>
			</div>
                  <table className="table table-striped table-hover">
				<thead>
					<tr>
            <th>Username</th>
						<th>Type</th>
						<th>Password</th>
						<th>Status</th>
            <th>Product</th>
            <th>Bought</th>
            <th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
          <td>Yassine</td>
						<td>Starter</td>
						<td>Yassine</td>
						<td>Inactive</td>
            <td>10</td>
            <td>2</td>
            <td>1000MAD</td>
						<td>
							<a href="/addadmins" className="edit" data-toggle="modal"><i className="fa fa-edit"></i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="fa fa-user-times"></i></a>
						</td>
					</tr>
				</tbody>
			</table>
      {/* <a className="table-a" variant="primary" href="/addadmins"><i className="fa fa-user-plus"></i>Button</a> */}

      </div>
      </div>
      </div>
                </main>
              </div>
        
        </body>
          )
        }
        export default ListSeller;
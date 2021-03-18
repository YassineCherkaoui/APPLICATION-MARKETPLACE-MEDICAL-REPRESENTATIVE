import'./Styles/Dashboard.css';
import user from './Styles/icon.png';
import './Styles/prolemorder.css';

function ProblemOrder() {


  return(
      
<body>
    <div className="grid">      
    <aside className="sidenav adminnav">
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
            <ul className="navList navlistadmin">
              <li className="navList__heading">Clients<i className="far fa-file-alt"></i></li>
                <li>
                <a href="/ProblemOrder"><li className="subList__item">List delivery problems</li></a>
                <a href="/ClientOrder"><li className="subList__item">Confirm orders</li></a>
                <a href="/Delivery"><li className="subList__item">Add delivery people</li></a>
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
         
        </main>
        <div id="app">
	<div id="app-content">
<h3>List of Delivry Problems</h3>
	<ul className="user-list">
		
  <li  style = {{position: 'relative'}} >
	<div className="user-image"><img src={user} alt=""/></div>
	<div className="user-data">
	  <h4>YASSINE</h4>
	  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com"><p>Yassin@gmail.com</p></a>
    <button className="btn-read-problem" data-toggle="modal" data-target="#exampleModal">Read Problem</button>
	  </div>	
  </li>
  <li  style = {{position: 'relative'}} >
	<div className="user-image"><img src={user} alt=""/></div>
	<div className="user-data">
	  <h4>YASSINE</h4>
	  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com"><p>Yassin@gmail.com</p></a>
    <button className="btn-read-problem" data-toggle="modal" data-target="#exampleModal">Read Problem</button>
	  </div>	
  </li>
  <li  style = {{position: 'relative'}} >
	<div className="user-image"><img src={user} alt=""/></div>
	<div className="user-data">
	  <h4>YASSINE</h4>
	  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Yassin@gmail.com"><p>Yassin@gmail.com</p></a>
    <button className="btn-read-problem" data-toggle="modal" data-target="#exampleModal">Read Problem</button>
	  </div>	
  </li>

	</ul>
</div>
</div>


{/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Client Name: Yassine</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Problem with Region
      </div>
      <div class="modal-footer">
        <button type="button" class="closemodel" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>

</body>
  )
}
export default ProblemOrder;
  

//   React.render(React.createElement(MultiSelector, { list: users }), document.getElementById('MultiSelectApp'));
  
  
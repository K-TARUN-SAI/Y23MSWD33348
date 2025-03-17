import React from 'react';

const IconTable = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: '250px', // Increased width
          fontSize: '16px', // Adjusted global font size
        }}
      >
        <h3
          className="text-center"
          style={{ fontSize: '22px', marginBottom: '25px' }}
        >
          Categories
        </h3>
        <nav className="nav flex-column">
          {/* Category 1 */}
          <div className="category mb-4">
            <h5
              className="text-white"
              style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-home" style={{ fontSize: '20px', marginRight: '12px' }}></i>
              Home
            </h5>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '20px', padding: '8px 0' }}
            >
              <i className="fas fa-home" style={{ fontSize: '20px', marginRight: '10px' }}></i>
              Dashboard
            </a>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '21px', padding: '8px 0' }}
            >
              <i className="fas fa-cogs" style={{ fontSize: '20px', marginRight: '10px' }}></i>
              Settings
            </a>
          </div>

          {/* Category 2 */}
          <div className="category mb-4">
            <h5
              className="text-white"
              style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
            >
              <i className="fas fa-bell" style={{ fontSize: '18px', marginRight: '12px' }}></i>
              Notifications
            </h5>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '20px', padding: '8px 0' }}
            >
              <i className="fas fa-bell" style={{ fontSize: '20px', marginRight: '10px' }}></i>
              New Alerts
            </a>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '20px', padding: '8px 0' }}
            >
              <i className="fas fa-envelope" style={{ fontSize: '20px', marginRight: '10px' }}></i>
              Messages
            </a>
          </div>

          {/* Category 3 */}
          <div className="category mb-4">
            <h5
              className="text-white"
              style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
            >
              <i
                className="fas fa-user-circle"
                style={{ fontSize: '20px', marginRight: '12px' }}
              ></i>
              Account
            </h5>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '20px', padding: '8px 0' }}
            >
              <i
                className="fas fa-user-circle"
                style={{ fontSize: '20px', marginRight: '10px' }}
              ></i>
              Profile
            </a>
            <a
              className="nav-link text-white"
              href="#"
              style={{ fontSize: '20px', padding: '8px 0' }}
            >
              <i
                className="fas fa-sign-out-alt"
                style={{ fontSize: '20px', marginRight: '10px' }}
              ></i>
              Logout
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mt-5" style={{ flexGrow: 1 }}>
        <h1 className="text-center mb-4">Icon Table</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="text-center">Serial Number</th>
                <th scope="col" className="text-center">Name</th>
                <th scope="col" className="text-center">Class</th>
                <th scope="col" className="text-center">Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">Notifications</td>
                <td className="text-center">fas fa-bell</td>
                <td className="text-center"><i className="fas fa-bell text-orange"></i></td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">Messages</td>
                <td className="text-center">fas fa-envelope</td>
                <td className="text-center"><i className="fas fa-envelope text-blue"></i></td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-center">Sentiment</td>
                <td className="text-center">fas fa-smile</td>
                <td className="text-center"><i className="fas fa-smile text-yellow"></i></td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td className="text-center">Account</td>
                <td className="text-center">fas fa-user-circle</td>
                <td className="text-center"><i className="fas fa-user-circle text-green"></i></td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td className="text-center">Assignment</td>
                <td className="text-center">fas fa-tasks</td>
                <td className="text-center"><i className="fas fa-tasks text-purple"></i></td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td className="text-center">Delete</td>
                <td className="text-center">fas fa-trash</td>
                <td className="text-center"><i className="fas fa-trash text-red"></i></td>
              </tr>
              <tr>
                <td className="text-center">7</td>
                <td className="text-center">Download</td>
                <td className="text-center">fas fa-download</td>
                <td className="text-center"><i className="fas fa-download text-teal"></i></td>
              </tr>
              <tr>
                <td className="text-center">8</td>
                <td className="text-center">GIF</td>
                <td className="text-center">fas fa-film</td>
                <td className="text-center"><i className="fas fa-film text-pink"></i></td>
              </tr>
              <tr>
                <td className="text-center">9</td>
                <td className="text-center">History</td>
                <td className="text-center">fas fa-history</td>
                <td className="text-center"><i className="fas fa-history text-brown"></i></td>
              </tr>
              <tr>
                <td className="text-center">10</td>
                <td className="text-center">Home</td>
                <td className="text-center">fas fa-home</td>
                <td className="text-center"><i className="fas fa-home text-limegreen"></i></td>
              </tr>
              <tr>
                <td className="text-center">11</td>
                <td className="text-center">Search</td>
                <td className="text-center">fas fa-search</td>
                <td className="text-center"><i className="fas fa-search text-black"></i></td>
              </tr>
              <tr>
                <td className="text-center">12</td>
                <td className="text-center">Settings</td>
                <td className="text-center">fas fa-cog</td>
                <td className="text-center"><i className="fas fa-cog text-gray"></i></td>
              </tr>
              <tr>
                <td className="text-center">13</td>
                <td className="text-center">Thumbs Up</td>
                <td className="text-center">fas fa-thumbs-up</td>
                <td className="text-center"><i className="fas fa-thumbs-up text-blue"></i></td>
              </tr>
              <tr>
                <td className="text-center">14</td>
                <td className="text-center">Zoom In</td>
                <td className="text-center">fas fa-search-plus</td>
                <td className="text-center"><i className="fas fa-search-plus text-darkgreen"></i></td>
              </tr>
              <tr>
                <td className="text-center">15</td>
                <td className="text-center">Zoom Out</td>
                <td className="text-center">fas fa-search-minus</td>
                <td className="text-center"><i className="fas fa-search-minus text-maroon"></i></td>
              </tr>
              <tr>
                <td className="text-center">16</td>
                <td className="text-center">Mic</td>
                <td className="text-center">fas fa-microphone</td>
                <td className="text-center"><i className="fas fa-microphone text-darkblue"></i></td>
              </tr>
              <tr>
                <td className="text-center">17</td>
                <td className="text-center">Play</td>
                <td className="text-center">fas fa-play</td>
                <td className="text-center"><i className="fas fa-play text-darkorange"></i></td>
              </tr>
              <tr>
                <td className="text-center">18</td>
                <td className="text-center">Stop</td>
                <td className="text-center">fas fa-stop</td>
                <td className="text-center"><i className="fas fa-stop text-crimson"></i></td>
              </tr>
              <tr>
                <td className="text-center">19</td>
                <td className="text-center">Mail</td>
                <td className="text-center">fas fa-envelope</td>
                <td className="text-center"><i className="fas fa-envelope text-skyblue"></i></td>
              </tr>
              <tr>
                <td className="text-center">20</td>
                <td className="text-center">Alarm</td>
                <td className="text-center">fas fa-clock</td>
                <td className="text-center"><i className="fas fa-clock text-gold"></i></td>
              </tr>
              <tr>
                <td className="text-center">21</td>
                <td className="text-center">Signal</td>
                <td className="text-center">fas fa-signal</td>
                <td className="text-center"><i className="fas fa-signal text-violet"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IconTable;

import {Component} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'

import './App.css'

class App extends Component {
  state = {pointA: '', pointB: '', date: '', vehicles: [], apiSuccess: false}

  handleSearch = event => {
    // Use the input values to fetch vehicle data from an API
    // replace with actual API call
    event.preventDefault()
    // dummy api data
    const vehicleData = [
      {
        id: 1,
        name: 'Bike',
      },
      {
        id: 2,
        name: 'Car',
      },
      {
        id: 3,
        name: 'Railway',
      },
      {
        id: 4,
        name: 'Airways',
      },
    ]
    this.setState({
      vehicles: vehicleData,
      apiSuccess: true,
    })
  }

  onChangePointA = event => {
    this.setState({pointA: event.target.value})
  }

  onChangePointB = event => {
    this.setState({pointB: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {pointA, pointB, date, vehicles, apiSuccess} = this.state
    return (
      <>
        <nav className="nav-bar">
          <ul className="unordered-list">
            <li className="list">
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2018/01/booking-com-vector-logo.png"
                alt="icon"
                className="icon"
              />
            </li>
            <li className="list">
              <GiHamburgerMenu size="30px" className="burger-icon" />
            </li>
          </ul>
        </nav>
        <div className="container">
          <img
            src="http://tech.eu/wp-content/uploads/2014/02/bookingx4a.jpg"
            className="img"
            alt="Airport Img"
          />
          <form className="form-container" onSubmit={this.handleSearch}>
            <h1 className="heading">Booking Tickets</h1>
            <input
              type="text"
              placeholder="Point A"
              value={pointA}
              onChange={this.onChangePointA}
              className="input-Element"
            />
            <input
              type="text"
              placeholder="Point B"
              value={pointB}
              onChange={this.onChangePointB}
              className="input-Element"
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={this.onChangeDate}
              className="input-Element"
            />
            <button className="button" type="submit">
              Search
            </button>
            {apiSuccess ? (
              <>
                <h1 className="v-head">Transport vehicles</h1>
                <ul className="vehicle-list">
                  {vehicles.map(each => (
                    <li key={each.id}>{each.name}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </form>
        </div>
      </>
    )
  }
}

export default App

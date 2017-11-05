var CONTACTS = [
  {
    id: 1,
    name: 'Sergei',
    phoneNumber: '+375291250826',
    image: 'http://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg'
  }, {
    id: 2,
    name: 'Alex',
    phoneNumber: '+375291230826',
    image: 'http://www.planwallpaper.com/static/images/9-credit-1.jpg'
  }, {
    id: 3,
    name: 'Gru',
    phoneNumber: '+3752923230826',
    image: 'http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg'
  }
];

var Contact = React.createClass ({
  render: function() {
    return (
      <li className='contact'>
        <image className='contact-image' src={this.props.image} />
        <div className='contact-info'>
          <div className='contact-name'>{this.props.name}</div>
          <div className='contact-number'>{this.props.phoneNumber}</div>
        </div>
      </li>);
  }
})

var ContactsList = React.createClass ({
  getInitialState: function() {
    return {
        displayedContacts: CONTACTS
    };
  },

  handleSearch: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedContacts: displayedContacts
    });
  },

  render: function() {
    return (
      <div className='contacts'>
        <input type='text' className="search-field" onChange={this.handleSearch} />
        <ul className='contact-list'>
          {this.state.displayedContacts.map(function(el){
            return <Contact
                      key={el.id}
                      image={el.image}
                      name={el.name}
                      phoneNumber={el.phoneNumber} />
            })
          }
        </ul>
      </div>);
  }
})

ReactDOM.render(
  < ContactsList />,
  document.getElementById('root')
);

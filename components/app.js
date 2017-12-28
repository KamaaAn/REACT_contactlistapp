
var contacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Snow',
        email: 'john.snow@wall.com',
    },
    {
        id: 2,
        firstName: 'Denerys',
        lastName: 'Targaryen',
        email: 'daenerys.targaryen@dragonqueen.com'
    },
    {
        id: 3,
        firstName: 'Khal',
        lastName: 'Drogo',
        email: 'khal.drogo@horseman.com'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});


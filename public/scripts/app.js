'use strict';

console.log('app.js is running');

// JSX = JavaScript XML

var app = {
    title: 'TrickBay',
    subTitle: 'Learn Share & Grow',
    name: 'Ritesh',
    age: 20,
    location: 'Chandigarh',
    options: ['one', 'two']

};

var template = React.createElement(
    'div',
    null,
    ' ',
    React.createElement(
        'p',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.name
        ),
        React.createElement(
            'li',
            null,
            'Learning React'
        ),
        React.createElement(
            'li',
            null,
            'Learning Java Script'
        ),
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options'
        ) : React.createElement(
            'p',
            null,
            'No Options'
        )
    )
);

function getLocation(abcLocation) {
    if (abcLocation) {
        return React.createElement(
            'p',
            null,
            ' location: ',
            abcLocation
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    ' ',
    React.createElement(
        'p',
        null,
        app.title
    ),
    React.createElement(
        'h5',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.name ? app.name : 'None'
        ),
        React.createElement(
            'li',
            null,
            app.age >= 15 && React.createElement(
                'p',
                null,
                'Age: ',
                app.age
            )
        ),
        getLocation(app.location)
    )
);

//if statements
//ternary operator
//logical and operateor

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

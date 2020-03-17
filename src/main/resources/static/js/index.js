requirejs.config({
    baseUrl: 'js'
})


function buildRoute(view) {
    return function() {
        webix.ui({
            id: 'root',
            rows: [
                view
            ]
        }, $$('root'))
    }
}

function buildButton(label,route) {
    return {
        view: 'button',
        value: label,
        align: 'center',
        click: function () {
            routie(route)
        },
    }
}

require(['views/main', 'views/cars','views/marks','util/resourceProxy'],
    function(main, cars,marks,resourseProxy) {
    webix.ready(function() {
        webix.ui({
            container: 'app',
            height : document.body.clientHeight,
            width: document.body.clientWidth,
            rows : [
                {
                   view:"toolbar",
                   cols: [
                       (buildButton('Home', '')),
                       (buildButton('Marks', 'marks'))
                   ]
                },
                {
                id: 'root'
                }
        ]
        })
    })

    routie({
        '': buildRoute(main),
        'cars': buildRoute(cars),
        'marks' : buildRoute(marks)
    })
})
import Gamepad from '../Gamepad/gamepad';

// some inputs
Gamepad['INPUTS'] = {
    'FORWARD': '0',
    'RIGHT': '1',
    'BACKWARD': '2',
    'LEFT': '3'
}

const tb_c = {
"XML":{"@id":"toolbox_c","@style":"display: none","CATEGORY":[{"@name":"Controls","@colour":"285","BLOCK":[{"@type":"avancer"},{"@type":"tourner"},{"@type":"tourner","FIELD":{"@name":"DIRECTION","#text":"3"}}]},{"@name":"Logic","@colour":"120","BLOCK":[{"@type":"repeter"},{"@type":"si_chemin"},{"@type":"si_chemin_sinon"}]}]}
}

const tb = {
"XML":{"@id":"toolbox","@style":"display: none","BLOCK":[{"@type":"avancer"},{"@type":"tourner"},{"@type":"tourner","FIELD":{"@name":"DIRECTION","#text":"3"}},{"@type":"repeter"},{"@type":"si_chemin"},{"@type":"si_chemin_sinon"}]}
}

const Blocks = {
    'repeter': {
        // the request will be { method: 'REPEAT', args: [] }
        method: 'REPEAT', // the method of the request
        statements: ['DO'], // the statement name*
        template: Gamepad['TEMPLATES']['WHILE'], // the template type
        json: {
            // type: 'repeat_until',    is automatically setted
            'message0': 'Répéter jusqu à %1 %2 faire %3',
            'args0': [{
                'type': 'field_image',
                'src': "https://toppng.com/uploads/preview/map-point-google-map-marker-gif-11562858751s4qufnxuml.png",
                'width': 15,
                'height': 15,
            },
            {
                'type': 'input_dummy'
            },
            {
                // the child blocks will be contained here
                'type': 'input_statement',
                'name': 'DO' // the statement name*
            }
            ],
            'previousStatement': null,
            'colour': 120,
        }
    },
    'si_chemin': {
        // the request will be { method: 'PATH', args: [ Gamepad['INPUTS']['...some direction'] ]}
        method: 'PATH',
        args: [{
            field: 'DIRECTION', // the field name
            get: parseInt // return the number instead of the string
        }],
        statements: ['DO'],
        template: Gamepad['TEMPLATES']['IF'],
        json: {
            'message0': 'Si le chemin est %1 %2 faire %3',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'DIRECTION', // the field name
                'options': [ // args[0] will be one of these options
                    ['tout droit', Gamepad['INPUTS']['FORWARD']],
                    ['à droite ↻', Gamepad['INPUTS']['RIGHT']],
                    ['à gauche ↺', Gamepad['INPUTS']['LEFT']]
                ]
            },
            {
                'type': 'input_dummy'
            },
            {
                'type': 'input_statement',
                'name': 'DO'
            }
            ],
            'previousStatement': null,
            'nextStatement': null,
            'colour': 210
        }
    },
    'si_chemin_sinon': {
        // the request will be { method: 'PATH', args: [ Gamepad['INPUTS']['...some direction'] ]}
        method: 'PATH',
        args: [{
            field: 'DIRECTION',
            get: parseInt
        }],
        statements: ['DO', 'ELSE'],
        template: Gamepad['TEMPLATES']['IF_ELSE'],
        json: {
            'message0': 'Si le chemin est %1 %2 faire %3 sinon %4',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'DIRECTION',
                'options': [
                    ['tout droit', Gamepad['INPUTS']['FORWARD']],
                    ['à droite ↻', Gamepad['INPUTS']['RIGHT']],
                    ['à gauche ↺', Gamepad['INPUTS']['LEFT']]
                ]
            },
            {
                'type': 'input_dummy'
            },
            {
                'type': 'input_statement',
                'name': 'DO'
            },
            {
                'type': 'input_statement',
                'name': 'ELSE'
            }
            ],
            'previousStatement': null,
            'nextStatement': null,
            'colour': 210
        }
    },
    'tourner': {
        // the request will be { method: 'TURN', args: [ Gamepad['INPUTS']['...some direction'] ]}
        method: 'TURN',
        args: [{
            field: 'DIRECTION',
            get: parseInt
        }],
        json: {
            'message0': 'tourner %1',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'DIRECTION',
                'options': [
                    ['à droite ↻', Gamepad['INPUTS']['RIGHT']],
                    ['à gauche ↺', Gamepad['INPUTS']['LEFT']]
                ]
            }],
            'previousStatement': null,
            'nextStatement': null,
            'colour': 285
        }
    },
    'avancer': {
        // the request will be { method: 'MOVE', args: [] ]}
        method: 'MOVE',
        json: {
            'message0': 'avancer tout  droit',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 285
        }
    }
}

export {tb_c, tb, Blocks};
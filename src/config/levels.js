/* --- Levels data --- */

const levels = [

    // level 1
    {
        id: 1,
        maxBlocks: 10,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 1,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
             },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 3, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ]     
    },
    // level 2
    {
        id: 2,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [1, 0],
                [2, 0],
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 3, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 3
    {
        id: 3,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 4,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0]
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 2, 2, 3, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 4
    {
        id: 4,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0]
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -485,// YOUUUUUHOUU ca cest a l'envers edit : mais pas tt le temps :'(
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 3, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 5
    {
        id: 5,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 1,
                y: -1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, -1],
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 0, 0, 0, 0 ],
            [0, 0, 0, 3, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 6
    {
        id: 6,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: -1,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [-1, 0],
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -335,
                y: 191
            },
            rect: {
                x: 251,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 3, 1, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 7
    {
        id: 7,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 3,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: -1,
                y: -1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [-1, 0],
                [-1, -1],
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -335,
                y: 191
            },
            rect: {
                x: 251,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 2, 1, 0, 0 ],
            [0, 0, 0, 0, 3, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 8
    {
        id: 8,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 3,
                y: 1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
                [3, 1]
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 3, 0, 0, 0, 0 ],
            [0, 0, 0, 2, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 9
    {
        id: 9,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: -2
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, -1],
                [2, -2]
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 1, 2, 2, 0, 0, 0 ],
            [0, 0, 0, 0, 2, 0, 0, 0 ],
            [0, 0, 0, 0, 3, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
    // level 10
    {
        id: 10,
        // the blocks to show in the toolbox
        blocks: [
            'avancer',
            'tourner'
        ],
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1]
            ]
        },
        //sprite viewports on start
        images: {
            pegman: {
                x: -95,
                y: 191
            },
            rect: {
                x: 101,
                y: 191
            },
        },
        tiles: [ 
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 2, 3, 0, 0, 0 ],
            [0, 0, 1, 2, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0 ]
        ] 
    },
]

export default levels;


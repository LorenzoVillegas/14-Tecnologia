const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "Goty": [
            {
                "anno": 2019,
                "nome": "Sekiro: Shadows Die Twice",
                "sviluppo": "FromSoftware",
                "wikipedia": "https://it.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice"
            },
            {
                "anno": 2020,
                "nome": "The Last of us Part II",
                "sviluppo": "Naughty Dog",
                "wikipedia": "https://it.wikipedia.org/wiki/The_Last_of_us_Part_II"
            },
            {
                "anno": 2021,
                "nome": "It Takes Two",
                "sviluppo": "HazeLight Studio",
                "wikipedia": "https://it.wikipedia.org/wiki/It_Take_Two"
            },
            {
                "anno": 2022,
                "nome": "Elden ring",
                "sviluppo": "FromSoftware",
                "wikipedia": "https://it.wikipedia.org/wiki/Elden_Ring"
            },
            {
                "anno": 2023,
                "nome": "Baldur's Gate III",
                "sviluppo": "Larian Studio",
                "wikipedia": "https://it.wikipedia.org/wiki/Baldur's_Gate_III"
            }
        ],
        "Top10": [
            {
                "posizione": 1,
                "sviluppo": "Nintendo",
                "paese": "Giappone",
                "link": "https://www.nintendo.co.jp/"
            },
            {
                "posizione": 2,
                "sviluppo": "Sony Interactive Entertainment",
                "paese": "Giappone",
                "link": "https://www.playstation.com/en-us/" 
            },
            {
                "posizione": 3,
                "sviluppo": "Microsoft",
                "paese": "Stati Uniti",
                "link": "https://www.microsoft.com/en-us/" 
            },
            {
                "posizione": 4,
                "sviluppo": "Activision Blizzard",
                "paese": "Stati Uniti",
                "link": "https://www.activisionblizzard.com/en-us/" 
            },
            {
                "posizione": 5,
                "sviluppo": "Ubisoft",
                "paese": "Francia",
                "link": "https://www.ubisoft.com/en-us/" 
            },
            {
                "posizione": 6,
                "sviluppo": "Square Enix",
                "paese": "Giappone",
                "link": "https://www.square-enix.com/en/" 
            },
            {
                "posizione": 7,
                "sviluppo": "Capcom",
                "paese": "Giappone",
                "link": "https://www.capcom.co.jp/en/" 
            },
            {
                "posizione": 8,
                "sviluppo": "Bethesda Game Studios",
                "paese": "Stati Uniti",
                "link": "https://www.bethesda.net/en//" 
            },
            {
                "posizione": 9,
                "sviluppo": "CD Projekt Red",
                "paese": "Polonia",
                "link": "https://www.cdprojektred.com/en/"
            },
            {
                "posizione": 10,
                "sviluppo": "Riot Games",
                "paese": "Stati Uniti",
                "link": "https://www.riotgames.com/en/" 
            }
        ]
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});
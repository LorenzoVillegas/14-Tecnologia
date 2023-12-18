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
                "wikipedia": "https://it.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice",
                "img": "https://assets1.ignimgs.com/2018/09/04/sekiro---button-1536103897438.jpg"
            },
            {
                "anno": 2020,
                "nome": "The Last of us Part II",
                "sviluppo": "Naughty Dog",
                "wikipedia": "https://it.wikipedia.org/wiki/The_Last_of_us_Part_II",
                "img": "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png"
            },
            {
                "anno": 2021,
                "nome": "It Takes Two",
                "sviluppo": "HazeLight Studio",
                "wikipedia": "https://it.wikipedia.org/wiki/It_Take_Two",
                "img": "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/0Xqi1LgRoEtJ5zlFprpd54Vu.png"
            },
            {
                "anno": 2022,
                "nome": "Elden ring",
                "sviluppo": "FromSoftware",
                "wikipedia": "https://it.wikipedia.org/wiki/Elden_Ring",
                "img": "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png"
            },
            {
                "anno": 2023,
                "nome": "Baldur's Gate III",
                "sviluppo": "Larian Studio",
                "wikipedia": "https://it.wikipedia.org/wiki/Baldur's_Gate_III",
                "img": "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg"
            }
        ],
        "Top10": [
            {
                "posizione": 1,
                "sviluppo": "Nintendo",
                "paese": "Giappone",
                "link": "https://www.nintendo.co.jp/",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/480px-Nintendo_switch_logo.png"

            },
            {
                "posizione": 2,
                "sviluppo": "Sony Interactive Entertainment",
                "paese": "Giappone",
                "link": "https://www.playstation.com/en-us/",
                "img": "https://banner2.cleanpng.com/20180529/hwk/kisspng-playstation-4-logo-sony-interactive-entertainment-5b0d124db9d994.6723270715275833097613.jpg"
            },
            {
                "posizione": 3,
                "sviluppo": "Microsoft",
                "paese": "Stati Uniti",
                "link": "https://www.microsoft.com/en-us/",
                "img": "https://www.unict.it/sites/default/files/images/logo_microsoft.png"
            },
            {
                "posizione": 4,
                "sviluppo": "Activision Blizzard",
                "paese": "Stati Uniti",
                "link": "https://www.activisionblizzard.com/en-us/",
                "img": "https://xboxera.com/wp-content/uploads/2023/10/activision-blizzard.jpg"
            },
            {
                "posizione": 5,
                "sviluppo": "Ubisoft",
                "paese": "Francia",
                "link": "https://www.ubisoft.com/en-us/",
                "img": "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" 
            },
            {
                "posizione": 6,
                "sviluppo": "Square Enix",
                "paese": "Giappone",
                "link": "https://www.square-enix.com/en/",
                "img": "https://play-lh.googleusercontent.com/x02P6sIMN1ApvwE2lNbRHkBa92ZdtrGZUt8krwDmwpk5pV_bTtdiY29IT4z6b3naGtw" 
            },
            {
                "posizione": 7,
                "sviluppo": "Capcom",
                "paese": "Giappone",
                "link": "https://www.capcom.co.jp/en/",
                "img": "https://www.cyberark.com/wp-content/uploads/2023/01/capcom-logo.png" 
            },
            {
                "posizione": 8,
                "sviluppo": "Bethesda Game Studios",
                "paese": "Stati Uniti",
                "link": "https://www.bethesda.net/en//",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bethesda_Game_Studios_logo.svg/1200px-Bethesda_Game_Studios_logo.svg.png" 
            },
            {
                "posizione": 9,
                "sviluppo": "CD Projekt Red",
                "paese": "Polonia",
                "link": "https://www.cdprojektred.com/en/",
                "img": "https://euwmmp8yg9n.exactdn.com/wp-content/uploads/2023/04/CD-Projekt-RED-The-Witcher-Cyberpunk-gaming.jpg?strip=all&lossy=1&quality=90&webp=90&avif=80&ssl=1"
            },
            {
                "posizione": 10,
                "sviluppo": "Riot Games",
                "paese": "Stati Uniti",
                "link": "https://www.riotgames.com/en/",
                "img": "https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg" 
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
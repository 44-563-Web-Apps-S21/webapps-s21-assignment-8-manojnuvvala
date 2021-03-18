const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const advices = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
                    "The way to get started is to quit talking and begin doing. -Walt Disney",
                    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
                    "Life is what happens when you're busy making other plans. -John Lennon",
                    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
                    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt.",
                    "Whoever is happy will make others happy too. -Anne Frank", "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson"
                ]
                let randomIndex = Math.floor(Math.random() * advices.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
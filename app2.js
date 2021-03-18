const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('<table style="width:30%">')
      res.write('<tr><th>Location</th><th>No Of Hours</th> <th>Amount Of Money To Spend</th></tr>')
      res.write('<tr><td>Delhi</td><td>48hrs</td><td>$1000</td></tr>')
      res.write('<tr><td>Agra</td><td>24hrs</td><td>$500</td></tr>')
      res.write('<tr><td>Goa</td><td>24hrs</td><td>$700</td></tr>')
      res.write('<tr><td>Munnar</td><td>12hrs</td><td>$300</td></tr>')
      res.write('</table>')
      res.end('</body></html>')

      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
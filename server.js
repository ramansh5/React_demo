import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import request from 'request';
 
const app = express();
const port = process.env.PORT || 8080;
const googleApikey = 'AIzaSyAG9vvQPxO1MtrZhwhP7j-CvXkYZidfmEE';
// Log with Morgan
app.use(morgan('dev'));
 
// Accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Static files
app.use(express.static(__dirname + '/dist'));

 app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',function(req,res){
     res.sendFile(__dirname+'/dist/index.html');
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.get('/getDestinations',function(req,res){
	var cityName = req.query.city;
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+places+in+' + cityName + '+&key=' + googleApikey, function(error, response, result) {
    	if (!error && response.statusCode == 200) {
    		var data = JSON.parse(result);
    		res.json({status:200,data:data.results});
    	}else{
    		res.json({status:400})
    	}
	});
});

 app.get('*',function(req,res){
     res.sendFile(__dirname+'/dist/index.html');
 });

app.listen(port);
console.log(`listening on port ${port}`);
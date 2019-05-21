const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDVwJ5FgkuLKLPlDnWgUUj8KEBBm1pNwJg',
    Promise: Promise
});

//const key = 'AIzaSyDVwJ5FgkuLKLPlDnWgUUj8KEBBm1pNwJg'

class GeocodeService {
    constructor(){

    }
    
    async geoCode(address) {
        let result;
        await googleMapsClient.geocode({
                address: 'проспект Александровский, 118, Харьков'
            })
            .asPromise()
            .then((response) => {
                console.log(response.json.results[0].geometry.location.lat);
                console.log(response.json.results[0].geometry.location.lng);
                result = {
                    'lat': response.json.results[0].geometry.location.lat,
                    'lng': response.json.results[0].geometry.location.lng
                }
                return result;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    }

    async testGeoCode(address){
        let result;
        await googleMapsClient.geocode({
                //address: 'проспект Александровский, 118, Харьков'
                address:address
            })
            .asPromise()
            .then((response) => {
                // console.log(response.json.results[0].geometry.location.lat);
                // console.log(response.json.results[0].geometry.location.lng);
                // result = {
                //     'lat': response.json.results[0].geometry.location.lat,
                //     'lng': response.json.results[0].geometry.location.lng
                // }
                result = response;
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    }
    
}

module.exports = GeocodeService;
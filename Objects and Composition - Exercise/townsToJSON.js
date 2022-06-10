function townsToJSON(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let [before, town, latitude, longitude] = arr[i].split('|');
        let obj = {};
        latitude = Number(latitude.trim());
        longitude = Number(longitude.trim());
        obj['Town'] = town.trim();
        obj['Latitude'] = Number(latitude.toFixed(2));
        obj['Longitude'] = Number(longitude.toFixed(2));
        result.push(obj);
    }

    console.log(JSON.stringify(result));

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])
function filterEmployees(data, criteria) {

    let employees = JSON.parse(data);
    let [type, value] = criteria.split('-');

    if (criteria === 'all') {
        for (let i = 0; i < employees.length; i++) {
            console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
        }
    } else {
        let filtered = employees.filter(i => i[type] === value);
        for (let i = 0; i < filtered.length; i++) {
            console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
        }
    }

}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

)
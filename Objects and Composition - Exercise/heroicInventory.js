function heroicInventory(arr) {

    let heroesArr = [];

    for (let element of arr) {
        let [hero, level, items] = element.split(' / ');
        let heroObj = {};
        heroObj.name = hero;
        heroObj.level = Number(level);
        if (items !== undefined) {
            heroObj.items = items.split(', ');
        } else {
            heroObj.items = [];
        }
        heroesArr.push(heroObj);
    }

    console.log(JSON.stringify(heroesArr));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
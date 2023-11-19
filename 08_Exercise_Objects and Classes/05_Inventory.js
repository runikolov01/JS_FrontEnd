function inventory(arr) {
    let heroes = [];
    arr.forEach((row) => {
        let splittedRow = row.split(' / ');
        let heroName = splittedRow[0];
        let heroLevel = Number(splittedRow[1]);
        let items = splittedRow[2];


        heroes.push({
            hero: heroName,
            level: heroLevel,
            items: items
        }

        );

    }
    );

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    );

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
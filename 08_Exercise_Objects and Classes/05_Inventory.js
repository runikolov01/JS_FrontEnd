function inventory(arr) {
    let heroes = [];
    arr.forEach((row) => {
        let [heroName, heroLevel, items] = row.split(' / ');

        let hero = {
            heroName,
            level: heroLevel,
            items: items

        }
        heroes.push(hero);

    }
    );

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.heroName}`);
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
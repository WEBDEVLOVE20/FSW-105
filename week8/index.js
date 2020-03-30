






let creatureOne = {
    name: "Swamp Nix",
    health: 100,
    power: 20,
    rewards: "Health Potion"
};

let creatureTwo = {
    name: "Wild Windigo",
    health: 100,
    power: 40,
    rewards: "Power Potion"
};

let creatureThree = {
    name: "Dark Demon",
    health: 100,
    power: 30,
    rewards: "Armor Potion"
};

let player = {
    name: "earl",
    health: 200,
    power: 50,
    rewards: []
};

const creatures = [creatureOne, creatureTwo, creatureThree];

const attack = (player, creature) => {

    let playerAttack = Math.floor(Math.random() + player.power);
    creature.health -= playerAttack
        console.log(`${player.name} hit with power of ${playerAttack}`);

    let creaturesAttack = Math.floor(Math.random() + creature.power);
    player.health -= creaturesAttack
        console.log(`${creature.name} hit with power of ${creaturesAttack}`);

    if (creature.health > 0 && player.health > 0) {
        attack(player, creature);
    } else {
        if (creature.health <= 0 && player.health <= 0) {
            console.log("You have both fallen in battle.");
        } else if (creature.health <= 0) {
            console.log("You have defeated the creature");
            let prize = Math.floor(Math.random())
            if (prize <= 4) {
                creature.rewards.push(player.rewards) }
            } else if (player.health <= 0){
            console.log("You have been defeated. Game Over!")};
        }
    }

attack();
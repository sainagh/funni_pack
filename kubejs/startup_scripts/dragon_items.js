// Listen to item registry event
StartupEvents.registry('item', event => {
    global.dragonData.forEach(dragon => {
        //Dragon Egg
        event.create(`${dragon.name}_dragon_egg`).texture('kubejs:item/dragon_egg').color(0, dragon.color)
        //Baby Dragon
        event.create(`${dragon.name}_dragon_hatchling`).texture('kubejs:item/baby_dragon').color(0, dragon.color)
        //Dragon
        event.create(`${dragon.name}_dragon`).texture('kubejs:item/dragon').color(0, dragon.color)
        dragon.passive.forEach(item => {
            //Dragon Scale
            event.create(`${dragon.name}_dragon_${item}`).texture(`kubejs:item/dragon_${item}`).color(0, dragon.color)
        })
    });
    
  })
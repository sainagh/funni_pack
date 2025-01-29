// server script
ServerEvents.recipes((event) => {
    // add recipes here
    /*
    event.recipes.mbd2.blender()
        // recipe id is optional, but we recommend to set a unique id
        .id("mbd2:recipe_id") 
        // duration in tick
        .duration(400)
        // hight priority will be handled first
        .priority(-1)
        // mark this recipe as a fuel recipe
        .isFuel(true)
        // item
        .inputItems("minecraft:apple", "4x minecraft:oak_log")
        .outputItems("4x minecraft:apple")
        // fluid
        .inputFluids("1000x water")
        .outputFluids("2000x lava")
        // forge energy
        .inputFE(1000)
        .outputFE(2000)
        // create stress
        .inputStress(1024)
        .outputStress(2048)
        // botaina mana
        .inputMana(100)
        .outputMana(200)
        // mek heat
        .inputHeat(100)
        .outputHeat(200)
        // gtm eu
        .inputEU(100)
        .outputEU(200)
        // mek chemicals
        .inputGases("100x mekanism:hydrogen")
        .outputGases("200x mekanism:oxygen")
            // .inputInfusions(...) 
            // .outputInfusions(...) 
            // .inputSlurries(...)
            // .outputSlurries(...)
            // .inputPigments(...)
            // .outputPigments(...)
        // per tick (consume / generate per tick)
        .perTick(builder => builder
            .inputFluids("10x lava") 
        )
        // chance
        .chance(0.5, builder => builder
            .inputFluids("10x lava")
        )
        // tier chance boost (the final chance = chance + tierChanceBoost * machineLevel)
        .tierChanceBoost(0.1, builder => builder
            .inputFluids("10x lava")
        )
        // slot name (ingredient can only be consumed/filled from given slot name (trait name))
        .slotName("input_tank", builder => builder
            .inputFluids("10x lava")
        )
        // ui name (ingredient displays in the xei recipe ui (widget id) by a given ui name)
        .uiName("input_tank", builder => builder
            .inputFluids("10x lava")
        )
        // condtions
        .dimension("minecraft:overworld") // dimension id
        .biome("minecraft:plains") // biome id
        .machineLevel(2) // min machine level
        .positionY(-10, 64) // min y, max y
        .raining(0.5, 1) // min level, max level
        .thundering(0.5, 1) // min level, max level
        .blocksInStructure(0, 100, "minecraft:stone") // min count, max count, blocks
        // custom data
        .addData("key", '{"temperature": 32}')
        .addDataString("key", "value")
        .addDataNumber("key", 32)
        .addDataBoolean("key", true)
        */
       
    global.dragonData.forEach(dragon => {
        event.recipes.epoch.dragon_lair()
        .id(`epoch:${dragon.name}_passive`) 
        .duration(200)
        //.isFuel(true)
        .slotName("dragon_slot", builder => builder
            .chance(0.0, builder => builder
                .inputItems(`kubejs:${dragon.name}_dragon`)
            )
        )
        .uiName("dragon_slot_ui", builder => builder
            .chance(0.0, builder => builder
                .inputItems(`kubejs:${dragon.name}_dragon`)
            )
        )
        
        //.inputItems("minecraft:apple")
        .outputItems(`kubejs:${dragon.name}_dragon_scale`)
        //.perTick(builder => builder
            //.inputEU(128)
        //)
        
    })

    event.recipes.epoch.dragon_lair()
    .id(`epoch:dragon_meal_fuel`) 
    .slotName("fuel_slot", builder => builder
        .inputItems('iceandfire:dragon_meal')
    )
    .uiName("fuel_slot_ui", builder => builder
        .inputItems('iceandfire:dragon_meal')
    )
    .duration(400)
    .isFuel(true)
    
})
# Roguelike built in React

[Click here to see it live.](https://roguelike.vercel.app/)

More about me and my work at [pdgper.com](https://pdgper.com/)

## Introduction

This coding challenge is based on freeCodeCamp's take home project ["Build a Roguelike Dungeon Crawler Game"](https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-roguelike-dungeon-crawler-game). It uses no external assets for the graphics, only CSS. It complies with most user stories but there are a few purposeful exceptions:
- There is no XP and leveling system because I wanted to make progression more item based, but each fight still makes a difference.
- The map is also random, because I wanted to challenge myself with randomized generation.
- There is no randomized damage. The way I designed the game, I think it's more fun if the players have greater control over whether they are making a good decision by going into combat. I hope the rest of the game is enough of an exercise in randomness that this can be overlooked.

## Lessons learned

- Step up in difficulty from my previous challenge, [Conway's Game of Life](https://github.com/PDGPer/conways-game-of-life).
- I did a lot more planning for this thing than for any other of my previous apps. Both because I now understand the technology better so I actually know what to consider, but also because I wanted to push myself in terms of keeping things modular and pure. It was extremely useful, as planning usually is, in keeping everything from devolving into a plate of spaghetti.
- I now see array grids everywhere.
- Many lessons in terms of what should or should not be in state and how React handles renders.
- Deep dive into useEffect to make it play nice with the movement and grid updates.
- I almost certainly did things wrong that I have no idea about.

## Technical design

The game is built on the classic grid made up of arrays inside an array, with the former filled with objects, thus giving us an x (objects) and y (arrays) axis. Each object represents something on the grid, like terrain, enemies, the player, etc. and holds properties relevant to that object. These include, for example, a terrain's background color, an enemy's HP, whether a tile is crossable or not, etc.

The initial grid is built by layers on load and then stored in state:
1. Based on the desired numbers of rows and columns, a set of functions builds a corresponding grid made up of terrain objects. Each of them gets a random color property within a certain gradient from a random RGB generator.
2. The grid is passed to a new set of functions that iterate and replace the original terrain tiles with "decor" tiles based on chance. These are functionally similar to the terrain tiles, they just have a different color gradient. The lower down the map (divided in thirds), the higher the chance of replacement. This is because I wanted the terrain to shift from greener to more arid as the player progresses north, to imply higher difficulty.
3. The grid is once again passed along to a new set of functions. These randomly add obstacle tiles, which are uncrossable and graphically transparent, showing the "water" background. The initial obstacles are isolated squares are first. Afterwards, there is another grid iteration that adds a chance to transform an obstacle's neighboring tiles into more obstacles, thereby growing them into "rivers" and "lakes".
4. The next grid pass "excavates inland" from the outer grid limits, replacing up to three tiles (with diminishing probability the more inland it goes) with obstacle tiles, thereby making a randomized shoreline.
5. Next, the enemies are peppered around the map, once again divided by thirds: easiest are more common at the bottom of the map where the player starts, average in the middle and the strongest are more common at the top. Afterwards, the topmost enemy is replaced by the final boss. Each enemy object contains info pertinent to itself like its HP, dmg, kind of enemy and flavor texts.
6. The player then replaces the first enemy found when iterating the grid from below. Unlike other objects, the player object is just used for graphical representation. Its stats are kept in separate variables.
7. The grid is now passed to functions that creat a new, separate grid that will represent fog tiles and graphically sits above the terrain graphics. The objects in this grid hold all the properties necessary for a "fog clearing" function to alter their opacity and generate new RGBA values as the player moves around. The initial fog grid is also "excavated" around the its edges, up two tiles in, wherever there is an obstacle tile in the terrain grid, so it conforms to the shape of the terrain.
8. The player's position is found by grid iteration and stored in state.
9. A terrain component reads the grid and gets the graphical components that correspond to each object, assembling the terrain graphics that the player sees.

With this, the board is set. The players can now move around with WASD. Each move they make possibly triggers:
- A change in position. The player object and a terrain object "switch" positions. In fact, a new object is generated for each one, passing along the background color rgb property from the object they replaced. This is always the procedure for changes in the terrain grid that have graphical repercussions and is valid for enemies, items, etc.
- Fog clearing around a new position. The reduction in opacity is more intense the closest the player is.
- An enemy is damaged. Its object HP property is updated along with the player's HP.
- An enemy is destroyed. The player's HP is updated. There is a chance that an item drop occurs. Items are enemy tier specific, except the healing item, which is general.
- Players move into an item. Player's stats are updated accordingly.
- Players' HP gets down to zero. Controls get locked and popup window informs of game over and invites to a do over.
- Players defeat final boss. Same effect as defeat, but different message.

Only the terrain grid, fog grid, player position and a special counter to trigger renders are kept in state. Everything else is regular variables. The UI reflects changes in these variables.

## Game design

It's a pretty run-of-the-mill roguelike. I removed the XP leveling system and replaced it with a flat +1 max HP bonus per defeated enemy because I wanted players to have an incentive to engage even weaker enemies after they become stronger and synergize the HP bonus with the fact that healing is always to maximum health. So a smart player has a good reason to wipe the board but must keep an eye on whether they can heal themselves at the end and face the boss. There are definitely a few balancing issues, which I cover in the "Things I would fidget with if I was immortal" section.

## Art and story direction

The art plays to the strenghts of CSS and the game's terrain randomness to create a sort of flat version of the look of old games that didn't use textures for terrain, like 4D Sports Driving. All the more complex elements like enemies, items and the player were made in CSS after figuring out how they would look on a 10x10 grid in Photoshop. Enemies and items are grouped by color, which indicates their level. The darker they are, the tougher.

For the setting and story (such as it is), I wanted to run away from the usual dungeon crawler motifs and do something more open skies. A tale of revenge is always a classic, so I went with the "naked guy wakes on a beach and must murder his nemesis", with high seas pirate life flavoring. Had a lot of fun writing those grim flavor texts.

## Things I would fidget with if I was immortal

- There are a few bugs I couldn't figure out that I imagine have something to do with JS and React's async nature (any ideas welcome):
  1. At the beginning of the coding process, if the player moved too quickly, sometimes it would get duplicated in the grid. It seems the faster the code executed, the higher the probability of this happening. I actually ended up using slower maps of the entire grid to replace objects instead of direct substitutions on a grid copy because of this. Then, as the program got more complex and slower overall, the bug went AWOL and I haven't seen it in awhile. Still, I would like to know what caused it.
  2. In a similar fashion to the first one, if the player moves against enemies too quickly, they might not be replaced graphically despite the fact they have been "killed". Moving against them again afterwards replaces the graphical tile normally.
  3. The fog always has a tile that doesn't clear correctly. I rechecked the coordinates used to calculate the positions around the player multiple times and they're solid. Weird thing is, there doesn't seem to be rhyme or reason to which tile doesn't get cleared. When the radius was two tiles, it was [1, 1]. With the current radius, it's [-1, 3]. Changing positions around in the array and repeating coordinates has no effect.
- Since the terrain generation is random, on rare occasions the player or boss might spawn on an isolated island without access to the rest of the map, with obvious consequences. I would have to add a further pass to the terrain generation grid to make sure it doesn't happen.
- The UI could use a few more CSS tricks to call the player's attention to important changes, like when HP goes up or down. This could be done through animations that change font size and color momentarily, for example.
- Combat on the terrain map could also use a graphical reminder that it happened besides just the HP changing, like the enemies flashing white on being damaged, for example. Same for other situations, like pickung up items, etc.
- The balacing is definitely funky, especially at the beginning of a run. If you don't get a health drop in your first few skellies, you're done. Afterwards you just have to play it smart with clearing the enemies by weakness and using the health pickups only when needed. To fix this, I would have to change the whole drop system so that each enemy type has different drop rates, or a system that guarantees at least one health pickup at the start.
- Speaking of health, I would replace the immediate healing on pickup to a button that has charges according to how many heals you've found. It gets boring moving up and down the map to pickup a distant heal.
- The UI could use some more stylized flavoring to go with the pirate theme.
- Rework the code that deals with player actions and their consequences to be more pure and modular. It's a bit of a mess because everything else I tidied up in mostly pure and modular functions in their own files before moving on to the next objective, but the main game logic was the last thing to be finished, has many particular cases to deal with and a ton of state calls that are easier to handle from the main file, so by the time I was finished, the app was also finished. There wasn't really any point in changing anything. Ship it!
- File organization and function categorization could also use a touch, but no need for it now. See above.

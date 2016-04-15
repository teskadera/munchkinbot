# MunchkinBot

*Important*: I am writing this README as an intentional guide in implementation of the bot. The bot is not complete yet and I will likely not mark it complete until 2.0.0. It will serve as a bit of a decision-making guide as I implement things.

An IRC bot to help play Munchkin, the ~~R~~PG from Steve Jackson Games! Munchkin is D&D taken to its reductionist end - a game without even the need for plot. The barest mechanics help you achieve the primary goal of leveling up to ten.

I'm not sure how much I will leave off. I think there will be some mechanism for committing a card to play in battle. This will have some basic state tracking (level tracking and turn cycle tracking), a card manager (with provisions for taking in a JSON file with cards), and some other stuff as I see fit.

# Design

Munchkinbot will be built using Tennu, built as a plugin and likely have some kind of plugin-support. Its sub-plugins will have requirements detailed below.

It only supports one game in one channel at a time. Eventually, it may be able to run one per channel.

## cardmanager

So far, I don't know that I necessarily need a non-in-memory store. Besides testing, I have no intent o rely on other packages here.
The plugin will handle storing and managing cards, decks, hands, and such.

## munchkin

This will hold some information as to the state of the game. Maybe what players have equipped and such. Fights and turn order. Win conditions and rules for advancement. Bid management and treasure disbursal. That manner of thing. I will probably use some kind of state machine lib to manage the turn order. That said, I may be able to register and deregister functions to handle things without using a state machine. That may be complete overkill.

# In-chat usage

## Setup commands

`start [optional: time]` - Begin a timer with announcements on the minute, trying to get six players. Autojoins person saying it. At the end of the timer, it will begin the game. Time is is integer minutes, defaults to five minutes.
`startwith [minimum]` - Tell the bot to start a game once a certain number of people have joined.
`kick [name]` - If said by admin or bot owner, kicks a given player from the queue and prevents them from rejoining that game.
`ban [name]` - If said by admin or bot owner, bans a player from even interacting with the bot.
`join [character sex] [color]` - If game queue is open and user is not already in it, adds them. Characters may only be woman or man; picking one of Red, Blue, Green, Orange, Yellow, or Purple as their color. Only one person may choose a given color. Invalid arguments will not be processed.
`quit` - If user is in game queue or in game, removes them from it. Configuration option allows maximum number of quits per time period; to prevent people from ragequitting too many times. *Unsure as to how this will be implemented.*

## Pre-Gameplay Setup commands
`imfirst` - Registers first player. 
`first [name]` - Game starter or admin or bot owner can register first player.
`imnext` - Registers next player.
`next [name]` - Game starter or admin or bot owner can register next player.

## Bickering-solvers that would be neat features
`coinflip [name]` - Performs a coinflip with the other person, allowing the other person to choose heads/tails. 
`drawcards highlow` -  Shuffle deck of cards, players start in order from highest to lowest.
`drawcards lowhigh` -  Shuffle deck of cards, players start in order from lowest to highest.
`rockpaperscissors [name]` - Players have an RPS showdown.

## Gameplay commands - always available
`discardclass [class name]` - Discards player's class; requires confirmation.
`discardrace [race name]` - Discards player's race; requires confirmation.
`play [card name]` - Certain cards (Curses, for example) can always be played.

## Gameplay commands - during player turn
`play [card name]` - Certain cards (Gain Class; etc.) are allowed to be played.
`equip [card name]` - Equip a given card you have in play.
`unequip [card name]` - Unequip a given card you have equipped, leaving it in play.
`sellitems [card name...]` - Sell items totalling more than 1000 gold pieces; for every 1000 gold pieces' worth sold, gain one level; no change given; requires confirmation.

## Gameplay commands - during player turn sequence
`kickthedoor` - Reveal a Door card, fight monster, get cursed, take the item, etc.
`loottheroom` - If Door kicked down and not attacked, draw a Door card into hand.
`lookfortrouble [card name.]` - Play a monster from your hand and fight it immediately.
`endturn` - Ends the player's turn; requires confirmation.

## Gameplay commands - during fight
`play [card name] [target]` - Play a card; if a target is needed, provide it.
`slayit` - Deliver a final blow, with a required wait period. Still haven't determined how to play this one.
`runaway` - Initiate the Runaway procedure.

## Gameplay commands - during fight, other player
`bid [number treasures] [card name...]` - Bid to help the player for the number of treatures listed, providing the following cards.
`bid [pattern treasures] [card name...]` - Bid to help the player for the treatures listed, providing the following cards. The pattern will be P/B repeated; P will mean Player, B will mean bidder.
`takebid [user name]` - Takes last bid from user name, applies it to combat.

# API

I intend to throw together some kind of API to make bot players. That's all for now.

# On Copyright & What Not To Do

I will not provide cards files. I will provide some of the more common mechnics and such as functions available to import for cards, but I am not sure how. Please don't PR cards files for this repo; I will not approve any such PR.

If I'm asked to take it down by Steve Jackson Games, I will comply as soon as is possible. I claim no copyright whatsoever over the game or its contents.
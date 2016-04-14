# MunchkinBot

*Important*: I am writing this README as an intention 

An IRC bot to help play Munchkin. Much of the game is going to be left off, as it is more fun as a dialogue than automated. This will have some basic state tracking (level tracking and turn cycle tracking), a card manager (with provisions for taking in a JSON file with cards; sorry, that'd put me on much more thin ice, copyright-speaking), and some other stuff as I see fit. 


# Design

Munchkinbot will be built using Tennu, built as a plugin and likely have some kind of plugin-support. Its sub-plugins will have requirements detailed below.

## cardmanager

So far, I don't know that I necessarily need a non-in-memory store. Besides testing, I have no intent o rely on other packages here.
The plugin will handle storing and managing cards, decks, hands, and such.

## munchkin

This will hold some information as to the state of the game. Maybe what players have equipped and such. Fights and turn order. Win conditions and rules for advancement. Bid management and treasure disbursal. That manner of thing. I will probably use some kind of state machine lib to manage the turn order. That said, I may be able to register and deregister functions to handle things without using a state machine. That may be complete overkill.

# API

I intend to throw together some kind of API to make bot players. That's all for now.

# On Copyright

If I'm asked to take it down by Steve Jackson Games, I will comply as soon as is possible. I claim no copyright whatsoever over the game or its contents.
var CardManagerPlugin = {
    init: function (client, imports) {
        return {
            handlers: {
                '!draw' : function (command) {
                    // add card to hand from deck
                },
                '!discard' : function (command) {
                    // put card in discard pile
                },
                '!play' : function (command) {
                    // remove card from hand
                    // add to on-board cards
                    // put in discard
                    // maybe activate it here
                },
                '!give' : function (command) {
                    // remove card from player a's hand
                    // put in player b's hand
                }
            },

            help: {},

            commands: ['draw', 'discard', 'play', 'give']
        }
    }
};

module.exports = CardManagerPlugin;
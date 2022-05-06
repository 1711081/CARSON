input.onButtonPressed(Button.A, function () {
	
})
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    # . . . #
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    # . . # .
    # # # # .
    # # . . .
    # . # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . .
    . # # # .
    . . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.forever(function () {
    soundExpression.happy.playUntilDone()
    basic.showString("Hello!")
    basic.showString("CARSON")
})

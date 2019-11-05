const shapes = {

    // HIDDEN
    hidden: function() {
       return { 
            width: '0px',
            height: '0px',
            x: '0px',
            y: '0px',
            rotate: '0deg',
            originX: '50%',
            originY: '50%',
            zIndex: '1',
       }
    },

    // SQUARES
    square: function() {
        return {
            width: '5px',
            height: '5px',
            zIndex: '3',
        }
    },
    squareMedium: function() {
        return {
            width: '15px',
            height: '15px',
            zIndex: '2',
        }
    },
    squareLarge: function() {
        return {
            width: '30px',
            height: '30px',
            zIndex: '1',
        }
    },

    // OFFSETS
    offsetRight: function(value = '15') {
        return {
            x: value + 'px',
        }
    },
    offsetDown: function(value = '15') {
        return {
            y: value + 'px',
        }
    },
    offsetLeft: function(value = '15') {
        return {
            x: '-' + value + 'px',
        }
    },
    offsetUp: function(value = '15') {
        return {
            y: '-' + value + 'px',
        }
    },

    // LINES 
    line: function(width = 100, thickness = 3) {
        return {
            width: width + 'px',
            height: thickness + 'px',
            originX: '0%',
            originY: '0%',
        }
    }

}

export default shapes;

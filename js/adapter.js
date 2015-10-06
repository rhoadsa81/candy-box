var GAME = {
    addButton: function(id, buttonText, clickFunction) {
        $(".candy-section").append("<button id=\"" + id + "\">" + buttonText + "</button>");
        $("#" + id).on("click", clickFunction)
    },
    addTextBox: function(id, text) {
        $(".candy-section").append("<p id=\"" + id + "\">" + text + "</p>");
    },
    hasItem: function(id) {
        return $("#" + id).length !== 0;
    },
    removeElement: function(id) {
        $("#" + id).remove();
    },
    removeHandler: function(id, handler) {
        $("#" + id).off("click", handler);
    },
    addHandler: function(id, handler) {
        $("#" + id).on("click", handler)
    },
    changeHandler: function(id, oldFunction, newFunction) {
        this.removeHandler(id, oldFunction);
        this.addHandler(id, newFunction);
    },
    setText: function(id, text) {
        $("#" + id).html(text);
    }
};

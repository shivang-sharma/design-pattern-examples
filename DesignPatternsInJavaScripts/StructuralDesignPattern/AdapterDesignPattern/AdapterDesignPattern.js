class LegacyBox {
    draw() {
        var box = document.createElement("p");
        box.innerText = "Hi I am Legacy Box"
        box.className = "box box-legacy";
        var root = document.getElementById("root");
        root.appendChild(box);
    }
}
class OrangeBox {
    render() {
        var box = document.createElement("p");
        box.innerText = "Hi Orange Box"
        box.className = "box box-orange"
        var root = document.getElementById("root");
        root.appendChild(box);
    }
}
class YellowBox {
    render() {
        var box = document.createElement("p");
        box.innerText = "Hi Yellow Box"
        box.className = "box box-yellow"
        var root = document.getElementById("root");
        root.appendChild(box);
    }
}
class BlueBox {
    render() {
        var box = document.createElement("p");
        box.innerText = "Hi Blue Box"
        box.className = "box box-blue"
        var root = document.getElementById("root");
        root.appendChild(box);
    }
}
// Without Adpater design
var boxRenders = {
    "legacy": new LegacyBox(),
    "orange": new OrangeBox(),
    "blue": new BlueBox(),
    "yellow": new YellowBox()
}
window.onload = function () {
    document.getElementById("button-container").addEventListener("click", (e) => {
        console.log("lolo")
        var boxType = e.target.attributes["box-type"]["value"]
        /**
         * Without adapter pattern client have to make the decision of calling the legacy method
         */
        if (boxType == "legacy") {
            boxRenders[boxType].draw();
        } else {
            boxRenders[boxType].render();
        }
    });   
}

// With Adapter Design Pattern
class LegacyBoxAdapter {
    constructor() {
        this.legacyBox =  new LegacyBox();
    }
    render() {
        this.legacyBox.draw();
    }
}
var boxRenders = {
    "legacy": new LegacyBoxAdapter(),
    "orange": new OrangeBox(),
    "blue": new BlueBox(),
    "yellow": new YellowBox()
}
window.onload = function () {
    document.getElementById("button-container").addEventListener("click", (e) => {
        console.log("lolo")
        var boxType = e.target.attributes["box-type"]["value"]
        /**
         * With adapter pattern client doesn't have to make the decision since we have provided 
         * uniform interface
         */
        boxRenders[boxType].render();
    });   
}
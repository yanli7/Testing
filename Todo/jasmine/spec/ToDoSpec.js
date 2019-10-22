describe("Testing DOM manipulation", function() {
  it("should check on the DOM element", function() {
    let todo = new ToDo();
    let li = document.createElement("li");
    let input = document.getElementById("input").value;
    let txts = document.createTextNode(input);
    li.appendChild(txts);
    expect(todo.addNew().li).toEqual(li);
  });
});
describe("Testing the functionalities of the ToDO List", () => {
  it("should validate the 'Enter' keypress", () => {
    let todo = new ToDo();
    let keyPressed = null;

    function keyPress(key) {
      let event = document.createEvent("Event");
      event.keyCode = key;
      event.initEvent("keydown");
      document.dispatchEvent(event);
    }
    document.addEventListener("keydown", function(e) {
      keyPressed = e.keyCode;
    });
    let press = keyPress(13);
    expect(todo.enterIt()).toEqual(press);
  });
});
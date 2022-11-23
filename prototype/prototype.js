var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue",
  },
  walk: function () {
    console.log("walking!");
  },
};

var child = Object.create(parent);
console.log("Child - child.value", child.value);
console.log("Child - child.obj.objValue", child.obj.objValue);
console.log("Child - parent.value", parent.value);
console.log("Child - parent.obj.objValue", parent.obj.objValue);
console.log("Child - child.value", child.value);

function Dog(name) {
  this.name = name;
  console.log("This is :", this);
}

var myDog = new Dog("Max");
console.log("my dog: ", myDog);

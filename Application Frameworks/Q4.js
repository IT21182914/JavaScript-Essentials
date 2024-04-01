name = "Firefox";

function printName() {
  console.log(this.name);
}

const chrome = {
  name: "Chrome",
  print: printName,
};

printName();
chrome.print();

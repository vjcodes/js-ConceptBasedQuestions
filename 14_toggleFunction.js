const toggle = (...list) => {
  let i = 0;

  return function () {
    console.log(list[i]);
    i = (i + 1) % list.length;
  };
};

let hello = toggle("hello");
hello(); // "hello";
hello(); // "hello";
let onOff = toggle("on", "off");
onOff(); // "on"
onOff(); // "off"
onOff(); // "on"

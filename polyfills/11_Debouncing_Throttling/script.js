console.log("hello");

const input = document.getElementById("input-field");

const triggerSearch = (event) => {
  console.log(event.target.value);
};

const myDebounce = (call, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      call(...args);
    }, delay);
  };
};

const debounceHandleInputChange = myDebounce(triggerSearch, 300);

input.addEventListener("input", debounceHandleInputChange);





const btn = document.getElementById("btn");

const callApiOnClick = () => {
    btn.disabled = false;
    console.log("Called");
  };

const throttle = (call, delay) => {
    return function(){
        btn.disabled = true;
        setTimeout(()=>{
            call()
        }, delay)
    }
}

const myThrottle = throttle(callApiOnClick, 5000)

btn.addEventListener("click", () => {
  myThrottle()
});

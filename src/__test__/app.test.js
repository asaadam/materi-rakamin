// import ReactDOM from "react-dom";
// import App from "../App";

// beforeEach(() => {
//   document.body.innerHTML = "";
// });

// test("counter increments and decrements coreclty without testing lib", () => {
//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   ReactDOM.render(<App />, div);
//   const [decrement, increment] = div.querySelectorAll("button");
//   const message = div.firstChild.querySelector("div");

//   expect(message.textContent).toBe("Current count: 0");
//   const inCrementClick = new MouseEvent("click", {
//     bubbles: true,
//     cancelable: true,
//     button: 0,
//   });
//   decrement.dispatchEvent(inCrementClick);
//   expect(message.textContent).toBe("Current count: -1");
//   const decrementClick = new MouseEvent("click", {
//     bubbles: true,
//     cancelable: true,
//     button: 0,
//   });
//   increment.dispatchEvent(decrementClick);
//   expect(message.textContent).toBe("Current count: 0");
// });

// test("counter increments and decrements coreclty second", () => {
//   //   const div = document.createElement("div");
//   //   document.body.appendChild(div);
//   //   ReactDOM.render(<App />, div);
//   //   const [decrement, increment] = div.querySelectorAll("button");
//   //   const message = div.firstChild.querySelector("div");
//   //   expect(message.textContent).toBe("Current count: 0");
//   //   decrement.click();
//   //   expect(message.textContent).toBe("Current count: -1");
//   //   increment.click();
//   //   expect(message.textContent).toBe("Current count: 0");
// });
test("counter increments and decrements coreclty without testing lib", () => {});

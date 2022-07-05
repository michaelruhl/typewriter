const sentence = "hello there from lighthouse labs";
let time = 50;
for (const char of sentence) {
  setTimeout(() => {
    console.log(char)
    // print the char here
  },time)
  time += 50;// <= 1s delay to make it noticeable. Can dial it down later.
}
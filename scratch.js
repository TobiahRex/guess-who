function sayHi() {
  console.log('hi');


  let subFunc = () => {
    console.log('im the child')
  };
}

subFunc();

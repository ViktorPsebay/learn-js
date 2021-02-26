function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }

  let work = spy((a, b) => a + b);

  work(1,2);
  work(3,4);
  work(5,7);
  console.log(work.calls);


  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

  function delay(func, timeout) {
      return function (...args) {
          return setTimeout(() => func.call(this, ...args), timeout);
      };
  }

  
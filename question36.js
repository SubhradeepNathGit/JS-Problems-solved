// 36. Left-to-right async function composition
function composeAsync(...funcs) {
  return async function(initialValue) {
    let result = initialValue;
    for (let func of funcs) {
      result = await func(result);
    }
    return result;
  };
}

async function add2(x) {
  return x + 2;
}

async function multiply3(x) {
  return x * 3;
}

async function subtract1(x) {
  return x - 1;
}

const composed = composeAsync(add2, multiply3, subtract1);
composed(10).then(result => console.log(result)); 



let connection;
const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    process.setMaxListeners(Infinity);
    
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
  
    

  });
};

// w = "Move: up"

// a = "Move: left"

// s = "Move: down"

// d = "Move: right"



const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
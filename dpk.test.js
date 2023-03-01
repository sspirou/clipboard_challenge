const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the existing partitionKey when event provides a valid key", () => {
    let event = {
      partitionKey: "42",
    };
    const nestedKey = deterministicPartitionKey(event);
    expect(nestedKey).toBe("42");
  });

  it("Returns a new partitionKey when event provides an invalid key", () => {
    let event = {
      partitionKey: 42,
    };
    const nestedKey = deterministicPartitionKey(event);
    expect(nestedKey).not.toBe(42);
  });

  it("Returns the same key when event has no partitionKey and is less than 256", () => {
    let event = "testEvent1";
    const eventKey1 = deterministicPartitionKey(event);
    const eventKey2 = deterministicPartitionKey(event);
    expect(eventKey1).toBe(eventKey2);
  });

  it("Returns the same key when event has no partitionKey and is greater than 256", () => {
    let event = "CZgnlrYYAPJGEhAZxNeOW29yHhDilXqbHO69ygHrDAieSnN2QtgzWB7bezwtmkpwqg2t2zHGAXMMdXThwQLjfwYu7AqCZGSATr6IEFxOJUOLc0zt4cZLHZuVI89CMKqy1Sw8O1RaQK5YeTiuSQPJSALtrMueLX9HYOpCUjoBhjkEuZrFpEgXoovUHigE5cLNX8g7giKtH3C0GdFZKjvnFiDKWHSfw5pye4gA4C9iviFa5dw6Dy2YJ7lM3tWXp5SEz9HRJ2HlGQBy1nkqo6y";
    const eventKey1 = deterministicPartitionKey(event);
    const eventKey2 = deterministicPartitionKey(event);
    expect(eventKey1).toBe(eventKey2);
  });

  it("Returns the same key when event has partitionKey and is less than 256", () => {
    let event = {
      partitionKey: "testNestedKeyShort",
    };
    const nestedKey1 = deterministicPartitionKey(event);
    const nestedKey2 = deterministicPartitionKey(event);
    expect(nestedKey1).toBe(nestedKey2);
  });

  it("Returns the same key when event has partitionKey and is less than 256", () => {
    let event = {
      partitionKey: "CZgnlrYYAPJGEhAZxNeOW29yHhDilXqbHO69ygHrDAieSnN2QtgzWB7bezwtmkpwqg2t2zHGAXMMdXThwQLjfwYu7AqCZGSATr6IEFxOJUOLc0zt4cZLHZuVI89CMKqy1Sw8O1RaQK5YeTiuSQPJSALtrMueLX9HYOpCUjoBhjkEuZrFpEgXoovUHigE5cLNX8g7giKtH3C0GdFZKjvnFiDKWHSfw5pye4gA4C9iviFa5dw6Dy2YJ7lM3tWXp5SEz9HRJ2HlGQBy1nkqo6y",
    };
    const nestedKey1 = deterministicPartitionKey(event);
    const nestedKey2 = deterministicPartitionKey(event);
    expect(nestedKey1).toBe(nestedKey2);
  });
});

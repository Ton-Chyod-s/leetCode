// Altere apenas o código abaixo desta linha
class Thermostat {
    constructor (fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(celsius) {
        return this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Altere apenas o código acima desta linha
  
  const thermos = new Thermostat(76); // Definição na escala Fahrenheit
  let temp = thermos.temperature; // 24,44 em Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 em Celsius
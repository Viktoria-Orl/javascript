//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, sec) => {
  let earthYears = sec / 31557600;
  switch (planet) {
    case 'earth':
    return Number(earthYears.toFixed(2));
      break;
  
    case 'mercury':
    return Number((earthYears / 0.2408467).toFixed(2));
      break;
  
    case 'venus':
    return Number((earthYears / 0.61519726).toFixed(2));
      break;
  
    case 'mars':
    return Number((earthYears / 1.8808158).toFixed(2));
      break;
  
    case 'jupiter':
    return Number((earthYears / 11.862615).toFixed(2));
      break;
  
    case 'saturn':
    return Number((earthYears / 29.447498).toFixed(2));
      break;
  
    case 'uranus':
    return Number((earthYears / 84.016846).toFixed(2));
      break;
  
    case 'neptune':
    return Number((earthYears / 164.79132).toFixed(2));
      break;
  }
};

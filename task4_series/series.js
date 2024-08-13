//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series
  }

  slices(sliceLength) {
    if (this.series === '') {
      throw Error('series cannot be empty');
    } else if (sliceLength === 0) {
        throw Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
        throw Error('slice length cannot be negative');
    } else if (sliceLength > this.series.length) {
        throw Error('slice length cannot be greater than series length');
    } else {
        const arrSeries = this.series.split('');
        const res = [];

        for (let i = 0; i <= (arrSeries.length - sliceLength); i++) {
          const item = [];

          for (let k = 0; k < sliceLength; k++) {
            item.push(Number(arrSeries[i + k]))
          }

          res.push(item);
        }

        return res;
    }
  }
}

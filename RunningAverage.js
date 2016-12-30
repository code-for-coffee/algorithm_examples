class RunningAverage {
  /***
   * Array of numbers
   * @param list
   */
  constructor(list) {
    this.data = list || [];
  }
  /***
   * Calculates the current running average of the provided list.
   * @returns {number|*}
   */
  average() {
    let avg;
    let len = this.data.length;
    let total = 0;
    for (var i = 0; i < len; i++) {
      console.log(this.data[i]);
      console.log(total);
      total = parseFloat(total) + parseFloat(this.data[i]);
    }
    console.log(total);
    avg = (parseFloat(total) / parseFloat(len));
    return avg;
  }
  /***
   * Add numeric to the list.
   * @param numeric
   */
  add(numeric) {
    this.data.push(numeric);
  }
}
module.exports = RunningAverage;

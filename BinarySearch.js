/***
 * BinarySearch. Performs a binary search on an array for a specific value.
 */
class BinarySearch {
  /***
   * Array, Value to find
   * @param list
   * @param item
   */
	constructor(list, item) {
		this.update(list, item);
	}
  /***
   * Performs a on the provided list and item. Returns int (location) or null.
   * @returns {*}
   */
	search() {
		while (this.low <= this.high) {
			this.mid = (this.low + this.high);
			this.guess = this.list[this.mid];
			if (this.guess == this.item) {
				return this.mid;
			}
			if (this.guess > this.item) {
				this.high = this.mid - 1;
			} else {
				this.low = this.mid + 1;
			}
		}
		return null;
	}
  /***
   * Setter for array & value
   * @param l
   * @param i
   */
	update(l, i) {
		this.list = l;
		this.item = i;
		this.low = 0;
		this.high = l.length - 1;
		this.guess;
	}
}
module.exports = BinarySearch;
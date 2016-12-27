
// var x = new BinarySearch([1,2,3,4], 2);
// console.log(x.search());

class BinarySearch {
	constructor(list, item) {
		this.update(list, item);
	}
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
	update(l, i) {
		this.list = l;
		this.item = i;
		this.low = 0;
		this.high = l.length - 1;
		this.guess;
	}
}

module.exports = BinarySearch;
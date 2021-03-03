const repeatString = function(str, num) {
	let s = "";
	if (num < 0)
		s = "ERROR";
	else {
	for (let i = 1; i <= num; i++)
	{
		s += str;
	}
	}
	return s;
}

module.exports = repeatString

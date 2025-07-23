module.exports = function reverse(n) {
  const arr = String(Math.abs(n)).split('');
  const reversed = arr.reverse().join('');
  return n >= 0 ? Number(reversed) : Number(reversed);
};

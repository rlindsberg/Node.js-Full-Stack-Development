try {
  throw new Error('Unable to decrypt account');
} catch (e) {
  console.log(e.message);
} finally {
  console.log('finally');
}

console.log('try catch ended');

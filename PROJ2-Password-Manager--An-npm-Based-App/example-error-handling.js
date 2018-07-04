function doWork(someTask) {
  if (someTask.status === 'undone') {
    throw new Error('WORK UNDONE!!!');
  }
}


var task1 = {
    'name': 'do the dishes',
    'status': 'undone'
};


try {
  doWork(task1);
} catch (e) {
  console.log(e.message);
}

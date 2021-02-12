async function doWork() {
  const getDataResolved = await getData();
  console.log(typeof getDataResolved);
}

doWork();

// console.log(typeof(doWork)); // function




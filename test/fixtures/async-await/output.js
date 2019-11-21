function doSomethingLater() {
  return new Promise(resolve => {
      console.log('This happens in 3 seconds');
      resolve();
  });
}

async function main() {
    try {
        await doSomethingLater();
        console.log('This will only happen after the await has returned');
    }
    catch(e) {
        // callback
    }

}

main().then(() => {});

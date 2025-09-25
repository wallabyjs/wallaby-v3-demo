export class Snail {
  async move() {
    console.log('this might take a while...');
    const journeyStart = Date.now();
    await new Promise((r) => {
      setTimeout(() => r(), 4500);
    });
    console.log(`moved for ${Date.now() - journeyStart}ms`);
  }
}
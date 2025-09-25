export class Snail {
  async move() {
    console.log('this might take a while...');
    const journeyStart = Date.now();
    await new Promise((r) => {
      // with default config, values from around 5000+ will result in timeouts
      setTimeout(() => r(), 4500);
    });
    console.log(`moved for ${Date.now() - journeyStart}ms`);
  }
}
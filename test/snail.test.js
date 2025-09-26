import { describe, it, expect, beforeEach } from 'vitest';
import { Snail } from '../src/snail';
import { helloWorld } from '../src/common';

// This test is slow.
// When the cache is cold, during execution the test will show as grey, with no ETA.
// When the cache is warm, during execution the test will show as green or red with an ETA
// (both based on the most recent execution).
// The "Wallaby.js: Reset Wallaby Cache" command can be used to clear
// the cache (Wallaby will restart automatically if running when this command is used).
describe('snail', () => {
  it('moves slowly', async () => {
    const snail = new Snail();
    const before = Date.now();
    await snail.move();
    const after = Date.now();
    expect(after - before > 4500).toBe(true);

    console.log(helloWorld());
  });
});
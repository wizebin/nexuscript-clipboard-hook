import { wrapHook } from 'nexusdk';
import clipboardy from 'clipboardy';

export default wrapHook((properties, messages) => {
  const { trigger } = messages;
  const { interval } = properties;

  let running = 0;
  let clipboardData = null;

  setInterval(() => {
    if (running === 0) {
      running += 1;
      const tempData = clipboardy.readSync();
      if (tempData !== clipboardData) {
        trigger({ interval, data: tempData });
        clipboardData = tempData;
      }
      running -= 1;
    }
  }, interval);
});


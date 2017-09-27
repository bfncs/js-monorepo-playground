import uuid from 'uuid/v4';
import pico from 'pico';

const fn = (str) => {
  console.log(`${pico(str)} - ${uuid()}`);
};

fn('foo');
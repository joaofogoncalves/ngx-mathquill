import {HelloWorld} from 'hwrld'
import * as $ from 'jquery'

HelloWorld.sayHello();

export namespace logJquery {
  export function logJquery () {
    console.log($, $.ajax);
  }
}

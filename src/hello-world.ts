import * as $ from 'jquery'

export namespace HelloWorld {
  export function sayHello() {
    console.log('hi')
  }
  export function sayGoodbye() {
    console.log('goodbye')
  }
  export function logJquery() {
    console.log($.ajax)
  }
}

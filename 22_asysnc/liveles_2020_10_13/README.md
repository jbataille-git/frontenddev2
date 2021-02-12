# Callbacks & promises

## Goals

I want to...

- Understand promises and their relation to callbacks
- Become familiar with the `fetch` method
- Know the difference between synchronous and asynchronous functions

## Definitions

<details >
<summary>Callback:</summary>

> A callback is a function which is:
>
> - accessible by another function `f`, and
> - is invoked _after_ the first function `f` (and if `f` completes)
>
> Or more generally:
>
> > A callback is a function you provide to another piece of code, allowing it to be called by that code.
>
> ```js
> // Where is f?
> // Where is the callback?
> // What would the callback implementation look like?
> fetch("example.com/photos/1").then(doSomething);
> ```

</details>

<details>
<summary>Promise:</summary>

> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
>
> A Promise is in one of these states:
>
> - pending: initial state, neither fulfilled nor rejected.
> - fulfilled: meaning that the operation was completed successfully.
> - rejected: meaning that the operation failed.
>
> Where is the `promise` in the `fetch` call?
>
> ![Promises](https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png)

</details>

## Why/how?

When we send a request (for example to an API), we often...

- Want to know if we got an error
- Do something _while_ the result is not yet available
- Do something _after_ the request returns some data
- Show a message about the result

## Use cases

<details>
<summary>Use these when:</summary>

- Uploading an image
- Showing the status of a chat message
- Fetching JSON data from an API

</details>

## (A)synchronous code

A synchronous/sequential function:

```js
const multiplyTwoNumbers = (one, two) => {
  return one * two;
};

var result = multiplyTwoNumbers(5, 10);
console.log(result);
// > 50
```

> While each operation is being processed, nothing else can happen — rendering is paused. This is because (...) JavaScript is single threaded. Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.
>
> \- [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

An asynchronous function:

```js
var photo = downloadPhoto("http://coolcats.com/cat.gif");
console.log(photo.timestamp);
// > photo.timestamp is 'undefined'!
```

## Callbacks

🔥 The callback hell:

```js
fs.readdir(source, function (err, files) {
  if (err) {
    console.log("Error finding files: " + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename);
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log("Error identifying file size: " + err);
        } else {
          console.log(filename + " : " + values);
          aspect = values.width / values.height;
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect);
              console.log(
                "resizing " + filename + "to " + height + "x" + height
              );
              this.resize(width, height).write(
                dest + "w" + width + "_" + filename,
                function (err) {
                  if (err) console.log("Error writing file: " + err);
                }
              );
            }.bind(this)
          );
        }
      });
    });
  }
});
```

A simple `fetch`:

```js
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## [Demo](lesson.js)

## Sources

- [Promise on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Fetch API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Callback Hell](http://callbackhell.com/)

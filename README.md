# Vanilla Node CRUD 
Basic CRUD on the file system with vanilla Node.js and old-skool callback style

## What this Repo Has to Offer
This repo can help beginners understand the fundamentals of CRUD operations on the file system using Node.js

* As vanilla as possible to understand the brass tacks
* NO promises, `async` `await`
* Read, update, create, delete
* CommonJS syntax for exports, imports
* Pretty print json :)

## What you could do next
* Use ES6 with promises, `async` `await` to enhance code for more clarity: hint: `utils.promisify()` for version 8
* Add better error handling
* Add more customization to functions


## Note
Callback hell? :)

```javascript
function create(dir, file, data, cb) {
  fs.open(baseDir+dir+'/'+file+'.json', 'wx', function(err, descriptor) {
    if (!err && descriptor) {
      const stringData = JSON.stringify(data, null, 2)

      fs.writeFile(descriptor, stringData, function(err) {
        if (!err) {
          fs.close(descriptor, function(err) {
            if (!err) {
              cb(false)
            } else {
              cb('There was an error closing the file')
            }
          })
        } else {
          cb('There was an error writing to the new file')
        }
      })
    } else {
      cb('There was an error, could not close the file it could already exist ')
    }
  })
}
```

I'm not saying don't use promises or `async` / `await` to clean up your code, but if you've never created vanilla callback
it would be worth your while to learn as it's the backbone of core JavaScript

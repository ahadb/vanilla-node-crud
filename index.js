const fs = require('fs')
const path = require('path')

const baseDir = path.join(__dirname, '/data/')

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

function read(dir, file, cb) {
  fs.readFile(baseDir+dir+'/'+file+'.json', 'utf-8', function(err, data) {
    cb(err, data)
  })
}

function update(dir, file, data, cb) {
  fs.open(baseDir+dir+'/'+file+'.json', 'r+', function(err, descriptor) {
    if (!err && descriptor) {
      const stringData = JSON.stringify(data, null, 4)

      fs.truncate(descriptor, function(err) {
        if (!err) {
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
              cb('There was an error writing to existing file')
            }
          })
        } else {
          cb('There was an error truncating file')
        }
      })
    } else {
      cb('There was an error, could not open the file for updating, it could already exist')
    }
  })
}

function del(dir, file, cb) {
  fs.unlink(baseDir+dir+'/'+file+'.json', function(err) {
    if (!err) {
      cb(false)
    } else {
      cb('There was an error or some problem deleting the file')
    }
  })
}


module.exports = {
  create,
  read,
  update,
  del
}

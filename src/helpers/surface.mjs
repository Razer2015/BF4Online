// Surface helpers
export const gt = (a, b) => {
  return a > b
}

export const eq = (a, b) => {
  return a == b
}

export const neq = (a, b) => {
  return a != b
}

export const sub = (a, b) => {
  return a - b
}

export const contains = (arr, str) => {
  for (var index in arr) {
    if (arr[index] == str && typeof arr[index] == typeof str) {
      return true
    }
  }

  return false
}

export const get = (obj, key, def) => {
  var result
  try {
    var isArray = Object.prototype.toString.call(obj) === '[object Array]'

    if (isArray) {
      if (typeof key == 'number') {
        if (key < 0) {
          /* Support negative indexing (as Python does) to start from end of array */
          result = obj[obj.length + key]
        } else {
          result = obj[key]
        }
      } else {
        /* To comply with python behavior, we cannot allow JS to
                     do indexing on anything else than a number */
      }
    } else {
      result = obj[key]
    }
  } catch {
    result = def
  }
  /* To comply with python behavior, we should return null instead of undefined */
  if (typeof result == 'undefined') {
    if (typeof def == 'undefined') {
      result = null
    } else {
      result = def
    }
  }
  return result
}

export const set = (obj, key, value) => {
  obj[key] = value

  return obj
}

export const timer = (subject, noHours) => {
  var hours, minutes, seconds

  seconds = parseInt(subject, 10)
  minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  if (!noHours) {
    hours = Math.floor(minutes / 60)
    minutes -= hours * 60
  }

  // Zero padding and stringilization
  seconds = (seconds < 10 ? '0' : '') + seconds
  minutes = (minutes < 10 ? '0' : '') + minutes
  if (!noHours) {
    hours = (hours < 10 ? '0' : '') + hours
    return [hours, minutes, seconds].join(':')
  } else {
    return [minutes, seconds].join(':')
  }
}

export const toint = (subject, _default) => {
  if (subject === true || subject === false) {
    return subject | 0
  }
  var n = parseInt(subject, 10)
  if (isNaN(n)) {
    if (typeof _default == 'undefined') {
      n = 0
    } else {
      n = _default
    }
  }
  return n
}

export const capitalize = (str) => {
  return str
    .toLowerCase()
    .replace(/((^.)|( |\n|\r|\t)(.))/g, function (match) {
      return match.toUpperCase()
    })
    .replace(/\n/, ' ')
}

export const multisort = (array, ...args) => {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    console.error('Only lists are sortable')
    return array
  }

  var multisortArgs = []
  if (args.length > 1) {
    multisortArgs = args

    if (multisortArgs.length % 2 != 0) {
      console.error(
        'Wrong number of arguments to modifier multisort. (sort_key1, sort_order1, ..., sort_keyN, sort_orderN)'
      )
      return array
    }
  }

  function getNestedAttr(obj, keys) {
    if (keys.length === 1) {
      return obj[keys[0]]
    } else {
      return getNestedAttr(obj[keys[0]], keys.slice(1))
    }
  }

  array.sort(function (a, b) {
    var args = multisortArgs.slice()

    var x, y

    while (args.length > 0) {
      var sortKey = args.shift()
      var order = args.shift()
      var keys = sortKey.split('.')
      var deep = keys.length > 1

      if (order === 'asc') {
        x = deep ? getNestedAttr(a, keys) : a[sortKey]
        y = deep ? getNestedAttr(b, keys) : b[sortKey]
      } else {
        y = deep ? getNestedAttr(a, keys) : a[sortKey]
        x = deep ? getNestedAttr(b, keys) : b[sortKey]
      }

      // Put undefined and null values last, just like cmp in Python
      if (typeof y === 'undefined' || y === null) {
        if (typeof x === 'undefined' || x === null) {
          // Intentionally left empty
        } else {
          return 1
        }
      } else if (typeof x === 'undefined' || x === null) {
        return -1
      }
      if (typeof x === 'string' && typeof y === 'string') {
        var lx = x.toLowerCase()
        var ly = y.toLowerCase()

        // If the lowered strings are equal we need to compare the original strings.
        if (lx !== ly) {
          x = lx
          y = ly
        }
      }
      // If the values of x and y are not the same, we break the loop, else we need to test the next sortKey
      if (x !== y) {
        break
      }
    }

    return x <= y ? -1 : x > y ? 1 : 0
  })

  return array
}

export const count = (obj) => {
  var i = 0

  if (obj) {
    /* make sure not null or undefined */ i = obj.length
    /* try to grab builtin length (will be wrong on objects with userdefined attribute 'length') */
    if (typeof obj == 'object' || i == 'undefined') {
      /* missing 'length', and objects need to be handled */ i = 0
      for (var index in obj) {
        if (typeof obj[index] != 'function') {
          i++
        }
      }
    }
  }

  return i
}

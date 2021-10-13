const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// npm run test ./ test/binary-search-tree.test.js
module.exports = class BinarySearchTree {
  constructor() {
    this.binaryRoot = null
  }

  root() {
    return this.binaryRoot
  }

  add(data) {
    if (!this.binaryRoot) {
      this.binaryRoot = new Node(data)
    } else {
      let current = this.binaryRoot
      let node = new Node(data)

      while (current) {
        if (data === current.data) {
          break
        }
        if (data > current.data) {
          if (!current.right) {
            break
          }
          current = current.right
        }
        if (data < current.data) {
          if (!current.left) {
            break
          }
          current = current.left
        }
      }
      if (data > current.data) {
        current.right = node
      }
      if (data < current.data) {
        current.left = node
      }
    }

    return this.binaryRoot
  }

  has(data) {
    let current = this.binaryRoot

    while (current) {
      if (current.data === data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  find(data) {
    let current = this.binaryRoot

    while (current) {
      if (current.data === data) {
        return current
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  remove(data) {
    let current = this.binaryRoot

    while (current) {
      if (data < current.data) {
        current = current.left
      }
      if (data > current.data) {
        current = current.right
      }
      if (data === current.data) {
        if (!current.left && !current.right) {
          current = null
          break
        }
        if (!current.left) {
          current = current.right
          break
        }
        if (!current.right) {
          current = current.left
          break
        }

        let maxRightData = current.left

        while (maxRightData.right) {
          maxRightData = maxRightData.right
        }

        current.data = maxRightData.data
        maxRightData = maxRightData.left

        // let minRightData = current.right

        // while (minRightData.left) {
        //   minRightData = minRightData.left
        // }

        // current.data = minRightData.data
        // minRightData = minRightData.right

        break
      }
    }

    return this.binaryRoot
  }

  min() {
    if (!this.binaryRoot) {
      return null
    }

    let current = this.binaryRoot

    while (current.left) {
      current = current.left
    }

    return current.data
  }

  max() {
    if (!this.binaryRoot) {
      return null
    }

    let current = this.binaryRoot

    while (current.right) {
      current = current.right
    }

    return current.data
  }
}

//npm run test ./ test/binary-search-tree.test.js

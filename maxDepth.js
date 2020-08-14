/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if(!root) {
//       return 0;
//   } else {
//       const left = maxDepth(root.left);
//       const right = maxDepth(root.right);
//       return Math.max(left, right) + 1;
//   }
// }

var maxDepth = function(root) {
  let max = 0
  if (!root) {
    return 0
  }
  let layer = [root]
  return getlayer(layer,max)
}
function getlayer(list,max) {
  max ++
  let newList = []
  for (let i in list) {
    if(list[i].left) {
      newList.push(list[i].left)
    }
    if(list[i].right) {
      newList.push(list[i].right)
    }
  }
  if (newList.length) {
    return getlayer(newList,max)
  } else {
    return max
  }
}

function getTree(list) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
   }
  function makeNode(i = 0,list) {
    if (list[i]) {
      let tree = new TreeNode(list[i])
      tree.left = makeNode(2 * i + 1,list)
      tree.right = makeNode(2 * i + 2,list)
      return tree
    } else {
      return null
    }
  }
  return makeNode(0,list)
}

// console.log(getTree([3,9,20,null,null,15,7]))

console.log(maxDepth(getTree([3,9,20,null,null,15,7])))
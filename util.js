
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

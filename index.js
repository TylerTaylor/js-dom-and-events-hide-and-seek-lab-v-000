function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0; i < rankedLists.length; i++) {
        let children = rankedLists[i].children

        for (let x = 0; x < children.length; x++) {
            children[x].innerHTML = parseInt(children[x].innerHTML) + n
        }
    }
}

function deepestChild() {
    let grandNode = document.getElementById('grand-node')
    let nextNode = grandNode.children[0]

    while (nextNode) {
        grandNode = nextNode
        nextNode = grandNode.children[0] 
    }

    return grandNode
}
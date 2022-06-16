// 各要素を取得
const box = document.querySelector('.box')
const maru = document.querySelector('.maru')
const batsu = document.querySelector('.batsu')
const comment = document.querySelector('.comment')


// activeクラスを追加・削除（○×のborder-bottomの行き来）
const changeActive = function() {
    maru.classList.toggle('active')
    batsu.classList.toggle('active')
}


// clickした時に○×要素を追加する
const cell = document.querySelectorAll('.cell')
let isTurnMaru = true
let clickCount = 0



// 勝ちパターンを定義
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]


const checkWinPatterns = function() {
    for(let i = 0; i < winPattern.length; i++) {
        const [first, second, third] = winPattern[i]
        
        // マス目の状態が勝ちパターンと一致した時にゲーム終了
        if(cell[first].textContent !== "" && cell[first].textContent === cell[second].textContent && cell[first].textContent === cell[third].textContent) {
            return true
        }
    }

    return false
}
cell.forEach(function(element) {
    element.addEventListener('click', function(e) {
        if (element.textContent !== '') {
            return
        }

        element.textContent = isTurnMaru ? '○' : '×'
        isTurnMaru = !isTurnMaru
        changeActive()
        
        // クリックカウント数を計算
        clickCount++

        // 勝ちパターンとマス目の比較判定をする
        const done = checkWinPatterns()
        if (done) {
            comment.textContent = isTurnMaru ? 'x win' : '◯ win'
            box.classList.add('click_none')
        } else if (clickCount === 9) {
            comment.textContent = 'draw'
        }
        
        
    })
})


// RESTARTボタン押下時のリセット処理
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    cell.forEach(function(element) {
        element.textContent = null
        element.classList.remove('click_none')
    })
    clickCount = 0
    maru.classList.add('active')
    batsu.classList.remove('active')
    box.classList.remove('click_none')
    comment.textContent = 'starting...'
    isTurnMaru = true
})
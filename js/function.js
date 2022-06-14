const box = document.querySelector('.box')
const maru = document.querySelector('.maru')
const batsu = document.querySelector('.batsu')
const comment = document.querySelector('.comment')



// activeクラスを追加・削除（○×のborder-bottomの行き来）
const change = function() {
    maru.classList.toggle('active')
    batsu.classList.toggle('active')
}


// clickした時に○×要素を追加する
const cell = document.querySelectorAll('.cell')

// 各要素をクリックした時、○と×のtextContentを追加する
let flag = true
let clickCount = 0

//【質問】↓↓これをfor文で書くことは可能か？ forEachとfor文の明確な違いとは？（forEachはarrayでしか使えないのは分かる）
// for(let i = 0; i < cell.length; i++) {
    //     cell[i].addEventListener('click', function() {
        //         cell.textContent = '○'
        //     })
        // }

    
cell.forEach(function(element) {
    element.addEventListener('click', function(e) {
        // ○と×交互に表示する（flagがtrueの時は○・falseの時は×のターン）
        if(flag && element.textContent === '') {
            element.textContent = '○'
            flag = false
            change()
            //既に○×が追加されているところはclickできないようにする
            element.classList.add('click_none')
        } else if(flag === false && element.textContent === '') {
            element.textContent = '×'
            flag = true
            change()
            element.classList.add('click_none')
        }
        // クリックカウント数を計算
        clickCount++

        

        // 勝ちパターンとマス目の比較判定をする
        const clickFunction = function() {
            
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
            
            for(let i = 0; i < winPattern.length; i++) {
                let winPattern0 = winPattern[i][0]
                let winPattern1 = winPattern[i][1]
                let winPattern2 = winPattern[i][2]
            
                // マス目の状態が勝ちパターンと一致した時にゲーム終了
                if(cell[winPattern0].textContent === '○' && cell[winPattern1].textContent === '○' && cell[winPattern2].textContent === '○') {
                    comment.textContent = '○ win!!'
                    //勝敗決定時以降はclick不可
                    box.classList.add('click_none')
                    return
                    
                } else if(cell[winPattern0].textContent === '×' && cell[winPattern1].textContent === '×' && cell[winPattern2].textContent === '×') {
                    comment.textContent = '× win!!'
                    box.classList.add('click_none')
                    return
                // returnがないと、1番目の条件に一致していても3番目の条件の方が優先されていた → 1,2,3と条件を順番に見ていく挙動？
                // if文は上から見にいって、一致したら以降の条件を見に行かないのでは？
                } else if(clickCount === 9 && element.textContent !== '') {
                    comment.textContent = 'draw'
                }

            }
        }
        clickFunction()

        // RESTARTボタン押下時のリセット処理
        const restart = document.querySelector('.restart');
        restart.addEventListener('click', function() {
            element.textContent = null
            //リセット後は○から開始
            maru.classList.add('active')
            batsu.classList.remove('active')
            flag = true
            comment.textContent = 'starting...'
            element.classList.remove('click_none')
            box.classList.remove('click_none')
            clickCount = 0
        })
    })
})
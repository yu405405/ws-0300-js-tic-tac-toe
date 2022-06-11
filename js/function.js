


const box = document.querySelector('.box')
const maru = document.querySelector('.maru')
const batsu = document.querySelector('.batsu')




// clickした時に○×要素を追加する
const cell = document.querySelectorAll('.cell')

//【質問】↓↓これをfor文で書くことは可能か？ forEachとfor文の明確な違いとは？（forEachはarrayでしか使えないのは分かる）
// for(let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener('click', function() {
//         cell.textContent = '○'
//     })
// }

// activeクラスを追加・削除
const change = function() {
    maru.classList.toggle('active')
    batsu.classList.toggle('active')
}
let flag = true
cell.forEach(function(element) {
    element.addEventListener('click', function(e) {
        // ○と×交互に表示する（flagがtrueの時は○・falseの時は×のターン）
        // ○→× ×→○書き換え不可
        if(flag && element.textContent === '') {
            element.textContent = '○'
            flag = false
            change()
            //既に○×が追加されているところはclickできないように
            element.classList.add('click_none')
        } else if(flag === false && element.textContent === '') {
            element.textContent = '×'
            flag = true
            change()
            element.classList.add('click_none')
        }
        


        const clickFunction = function() {
            
            // 勝ちパターンとマス目の比較判定
                // コメントの要素にアクセス
            let comment = document.querySelector('.comment')
            
                // 勝ちパターン（仮指定。他にもある）
            let winPattern = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [3, 4, 5],
                [6, 7, 8],
                [1, 4, 7]
            ]
            
                //勝ちパターンと現在のマスをどう判定させるか
            for(let i = 0; i < winPattern.length; i++) {
                
                let winPattern0 = winPattern[i][0]
                let winPattern1 = winPattern[i][1]
                let winPattern2 = winPattern[i][2]
            
                
                // 判定式をどう書くか・・・
                // DOM上のtextContentを条件対象にする 
                if(cell[winPattern0].textContent === '○' && cell[winPattern1].textContent === '○' && cell[winPattern2].textContent === '○') {
                    comment.textContent = '○ win!!'
                    //勝敗決定時以降はclick不可
                    box.classList.add('click_none')
                    
                } else if(cell[winPattern0].textContent === '×' && cell[winPattern1].textContent === '×' && cell[winPattern2].textContent === '×') {
                    comment.textContent = '× win!!'
                    //勝敗決定時以降はclick不可
                    box.classList.add('click_none')
                }

                // 9回目で勝負がつかなかったらコメントをdraw表示にする
            }



            


        }
        clickFunction()

        // RESTARTボタンを押した時 テーブルの○×要素を全て削除する
        const restart = document.querySelector('.restart');
        restart.addEventListener('click', function() {
            element.textContent = null

            //リセット後は○から開始
            maru.classList.add('active')
            batsu.classList.remove('active')
            flag = true
        })
    })
})
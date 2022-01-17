;(function (window, document) {
    let sizeUI = 390; // 定义设计图尺寸
    let remBase = 16 // 定义基准值
    let docEl = document.documentElement
    let bodyEl = document.querySelector('body')

    setRemUnit()

    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) setRemUnit()
    })

    function setRemUnit () {
        let docFontSize = docEl.clientWidth / sizeUI * remBase
        docEl.style.fontSize = docFontSize + 'px'
        bodyEl.style.fontSize = 16 / docFontSize + 'rem'
        handleRemAdapt()
    }

    function handleRemAdapt () {
        let currentFontSize = parseInt(docEl.style.fontSize)
        let temp = currentFontSize
        for (let i = 0; i < 100; i++) {
            let realFontSize = parseInt(window.getComputedStyle(docEl).fontSize)
            let differ = realFontSize - currentFontSize
            if (Math.abs(differ) >= 1) {
                if (differ > 0) {
                    temp--
                } else {
                    temp++
                }
                docEl.style.fontSize = temp + 'px'
            } else {
                break
            }
        }
    }
})(window, document)

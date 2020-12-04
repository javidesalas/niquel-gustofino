export const menuId = (string, words = 1) => {
    if(!string) string = ''
    const wordsArr = string.split(' ')
    let menuString = ''

    for (let i = 0; i < words; i++) {
        if (wordsArr.length <= i) break
        menuString += wordsArr[i]
        menuString += ' '
    }

    return menuString.trim()

}
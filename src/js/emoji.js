const string_emoji = "๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คช ๐คจ ๐ง ๐ค ๐ ๐คฉ ๐ฅณ ๐ ๐ ๐ ๐ ๐ ๐ ๐ โน๏ธ ๐ฃ ๐ ๐ซ ๐ฉ ๐ฅบ ๐ข ๐ญ ๐ค ๐  ๐ก ๐คฌ ๐คฏ ๐ณ ๐ฅต ๐ฅถ ๐ฑ ๐จ ๐ฐ ๐ฅ ๐ ๐ค ๐ค ๐คญ ๐คซ ๐คฅ ๐ถ ๐ ๐ ๐ฌ ๐ ๐ฏ ๐ฆ ๐ง ๐ฎ ๐ฒ ๐ฅฑ ๐ด ๐คค ๐ช ๐ต ๐ค ๐ฅด ๐คข ๐คฎ ๐คง ๐ท ๐ค ๐ค ๐ค ๐ค  ๐ ๐ฟ ๐น ๐บ ๐คก ๐ฉ ๐ป ๐ โ ๏ธ ๐ฝ ๐พ ๐ค ๐ ๐บ ๐ธ ๐น ๐ป ๐ผ ๐ฝ ๐ ๐ฟ ๐พ"
const arr_emoji = string_emoji.split(' ')
const tab1_emoji = document.querySelector('.tabEmotionPanel')
console.log(tab1_emoji);
const add_emoji = arr_emoji.forEach((value)=>{
    const my_span = document.createElement('span')
    my_span.append(value)
    tab1_emoji.append(my_span)
})

module.exports = add_emoji
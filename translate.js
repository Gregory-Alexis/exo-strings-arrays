let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let newStr = str.trim().toLowerCase().split(' ')


for (let element of newStr) {
  console.log('mot:'.toUpperCase() + element)
}

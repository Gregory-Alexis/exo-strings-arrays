let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
str = str.trim()

let findBob = 'bOb'

console.log(`${findBob} ${str.includes(findBob) ? 'is' : 'is not'} in the sentence`);


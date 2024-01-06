import {
  chapterOne,
  chapterTwo,
} from './tests'

try {
  [
    () => chapterOne('chapter one'),
    () => chapterTwo('chapter two'), 
  ].forEach((fn, index) => {
    if (index > 0) {
      console.log('\n')
    }
    fn()
  })
} catch(e) {
  console.error('Failed test. Error: ', e)
}


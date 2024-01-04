import {
  chapterOne
} from './tests'

try {
  chapterOne('chapter one')  
} catch(e) {
  console.error('Failed test. Error: ', e)
}


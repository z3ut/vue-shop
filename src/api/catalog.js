import Papa from 'papaparse'

export function getProducts () {
  return new Promise((resolve, reject) => {
    Papa.parse('static/price.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      keepEmptyRows: false,
      skipEmptyLines: true,
      complete: results => resolve(results.data),
      error: err => {
        reject(err)
      }
    })
  })
}

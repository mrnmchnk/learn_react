export const getPageCount = (totalCount, limit) => {
  return Math.ceil( totalCount / limit )
}


// TODO: написать это через useMemo
export const getPagesArray = (totalPages) => {
  let result =[];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  console.log('GET PAGES ARRAY WORKED')
  return result;
}
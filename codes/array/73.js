/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
   let [m,n] = [matrix.length, matrix[0].length];] 
   
   let temp = []
   for(let i= 0 ; i< m; i++){
     for(let j= 0 ; j< n; j++){
       if(matrix[i][j] === 0){
          temp.push([i,j])
       }
     }
   }

   for(let [r,c] of temp){
     for(let i=0 ; i< m; i++){
        matrix[r][i] = 0
     }
     for(let j=0; j< n; j++){
       matrix[j][c] = 0 
     }
   }

   return matrix
};
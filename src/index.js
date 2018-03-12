module.exports = function solveSudoku(a, x=0, y=0) {
     function next(x, y) {
         if (++y == 9) (x++, y=0);{
         if(x==9)
         return a;
         else
         return solveSudoku(a,x,y);
         
         }
     }
     function getFree(x, y) {
         let [i, j] = [Math.floor(x / 3) * 3, Math.floor(y / 3) * 3];
         let NUM = a[x].concat(a[0].map((_,i)=>a[i][y])).concat(a.slice(i,i+3).reduce((p,c)=>p.concat(c.slice(j,j+3)), []));
         return [1,2,3,4,5,6,7,8,9].filter(v=>!NUM.includes(v));
     }
     a = a.slice().map(x=>x.slice());
     if(a[x][y])
     return next(x,y);
     else
     return getFree(x,y).reduce((ans,n)=>(a[x][y]=n, ans||next(x,y)), 0);
 
 }

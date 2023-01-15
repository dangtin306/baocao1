// trong đoạn từ một đến mười code dùng để …
// chức năng trong dông mười một dùng để …
// hàm abc dùng để …
function abc(def) {
    // ...
  }

  function hamlaychugiua (dau,cuoi , toanbo){
    var vadghasbd = toanbo.split(dau)[0]; 
   // lấy string sau ký tự đầu
    var count = dau.split(dau).length - 1;
       var sadasdasdsad = cuoi.substring(toanbo.indexOf(cuoi) + 6); 
   // lấy string trước ký tự cuối 
       return sadasdasdsad
   }

   
   export function hamlaychutruoc (chulay,toanbo){
    var vadghasbd = toanbo.split(chulay)[0]; 
    return vadghasbd ; 
  }
  export function hamlaychusau (chulay,toanbo){
    var count = chulay.split(chulay).length - 1;
  
    var sadasdasdsad = toanbo.substring(toanbo.indexOf(chulay) + 6); 
    return sadasdasdsad
  }

  export function hamlaychugiua (dau,cuoi , toanbo){
    var sadasdasdsad = hamlaychutruoc(cuoi,toanbo) ;
    var sadasdasdsad = hamlaychusau(dau,toanbo) ;
    return sadasdasdsad
  }

  /**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    // ...
  }
  
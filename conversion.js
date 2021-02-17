function func1() {
    var input_message = document.getElementById("input_message").value;
    var ExclusiveFormat = document.getElementById("input_message").value;//読み取り
      
    ExclusiveArray = ExclusiveFormat.split(",");//配列に区切る
      
    var toneDate= [] ;//配列の作成
      
ExclusiveArray.forEach(function (value, index, array) {
parseInt(ExclusiveArray[index] = new Number (parseInt(ExclusiveArray[index], 16))) ;
});//入力された文字を数字にする
    
      
    toneDate[0] = ExclusiveArray[0] >> 5 ;//BO
    
    toneDate[1] = ExclusiveArray[0] - ((ExclusiveArray[0] >> 5) << 5);
    toneDate[1] = toneDate[1] - ((toneDate[1] >> 3) << 3) + ((toneDate[1] >> 3) << 6);;//ALG,LFO
   
      
    for(var i = 0 ; i < 4 ; i ++){
    
    toneDate[2 + (7 * i)] = (ExclusiveArray[4 + (i * 10)] << 4) + (((ExclusiveArray[1 + (i * 10)] - ((ExclusiveArray[1 + (i * 10)] >> 4) << 4)) >> 3) << 3) + ((ExclusiveArray[1 + (i * 10)] - ((ExclusiveArray[1 + (i * 10)] >> 3)<< 3)) >> 2);//SR, XOF, KSR
    
    toneDate[3 + (7 * i)] = ExclusiveArray[3+ (i * 10)] + (ExclusiveArray[5+ (i * 10)] << 4);//RR, DR
      
    toneDate[4 + (7 * i)] = ExclusiveArray[6+ (i * 10)] + (ExclusiveArray[2+ (i * 10)] << 4);//AR, SL
    
    toneDate[5 + (7 * i)] = ExclusiveArray[1+ (i * 10)] - ((ExclusiveArray[1+ (i * 10)] >> 2)<<2) + (ExclusiveArray[7+ (i * 10)] << 2);//TL, KSL
      
    toneDate[6 + (7 * i)] = ExclusiveArray[8];//DAM, EAM, DVB, EVB
    
    toneDate[7 + (7 * i)] = ((ExclusiveArray[9+ (i * 10)] - ((ExclusiveArray[9+ (i * 10)] >> 4)<< 4))<< 4) + (ExclusiveArray[9+ (i * 10)] >> 4);//MULTI, DT
      
    toneDate[8 + (7 * i)] = (ExclusiveArray[1+ (i * 10)] >> 4) + (ExclusiveArray[10+ (i * 10)] << 3);//WS, FB
    
    }
      
toneDate.forEach(function (value, index, array) {
toneDate[index] = toneDate[index].toString(16);
toneDate[index] = ( '00' + toneDate[index] ).slice( -2 );
toneDate[index] = "0x" + toneDate[index];
});//10進数を16新数へする

      
    toneDate[2] = "<BR>" + toneDate[2];  
    toneDate[9] = "<BR>" + toneDate[9]; 
    toneDate[16] = "<BR>" + toneDate[16]; 
    toneDate[23] = "<BR>" + toneDate[23]; 

    //alert(toneDate);
    document.getElementById("output_message").innerHTML = toneDate;
    //alert(ExclusiveArray.length);
      
  }
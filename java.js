prompt("Wie alt bist du?");

function berechnung(){
    let Name01, Name02, beideNamen;
    Name01=document.getElementById("Name01").value;
    Name02=document.getElementById("Name02").value;
    beideNamen=Name01+Name02;
    if(Name01.length===0||Name02.length===0){
        document.getElementById("berechnung").innerHTML=("Bitte gib zwei Namen ein!");
    }
    else{
        //Finde Ls, Os, Vs und Es in beideNamen
        let Ls, Os, Vs, Es;
        Ls=0;
        Os=0;
        Vs=0;
        Es=0;
        for(let i=0;i<beideNamen.length;i++){
            switch (beideNamen[i]){
                case "l":
                case "L":
                    Ls++;
                    break;
                case "o":
                case "O":
                    Os++;
                    break;
                case "v":
                case "V":
                    Vs++;
                    break;
                case "e":
                case "E":
                    Es++;
                    break;
            }
        }
        //
        let mainArray, holderArray, holderNumber;
        mainArray=[Ls,Os,Vs,Es];
        holderArray=[];
        holderNumber="";
        console.log(mainArray);
        while(mainArray.length>2){
            for(let i=0;i<mainArray.length-1;i++){

                //Ueberpruefung, ob die Summe beider Zahlen einstellig ist
                if(mainArray[i]+mainArray[i+1]>9){
                    holderNumber=mainArray[i]+mainArray[i+1];
                    holderNumber=String(holderNumber);
                    for(let j=0;j<holderNumber.length;j++){
                        holderArray.push(parseInt(holderNumber[j]));
                    }
                }
                else{
                    holderArray.push(mainArray[i]+mainArray[i+1]);
                }
            }
            //Uebertragung die Inhaberinformationen an das mainArray
            mainArray=holderArray;
            holderArray=[];
            holderNumber="";
            console.log(mainArray);
        }
        //Ergebnis zeigen
        document.getElementById("berechnung").innerHTML=(String(mainArray[0])+String(mainArray[1])+"%");
    }

}
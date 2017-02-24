export class G964 {

    public static movingShift = (s, shift) => {
        let chunkSize: number = Math.floor(s.length / 5);
        let chunk: string = '';
        let results: string[] = []; 

        console.log('enter...');
        for(let letter of [...s])
        {                   
            let char: number =  letter.charCodeAt();
            if(/^[a-z]+$/i.test(letter))
            {
                char += shift;
                console.log(letter.charCodeAt());
                console.log(char);
            }
            if(chunk.length < chunkSize) 
            {
                chunk += String.fromCharCode(char);
            }
            else
            {
                chunk += String.fromCharCode(char);
                results.push(chunk);
                chunk = '';
            }

            shift++;
        }

        if(chunk.length > 0)
        {
            results.push(chunk);
        }

        return results;
    }

    public static demovingShift = (arr, shift) => {
        // your code
    }

}


var u, sol, v;
        u = "I should have known that you would have a perfect answer for me!!!";
        sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
console.log(G964.movingShift(u, 1));
console.log(sol);
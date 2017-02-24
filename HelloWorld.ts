export class G964 {

    public static movingShift = (s, shift) => {
        let chunkSize: number = Math.ceil(s.length / 5);
        let chunk: string = '';
        let results: string[] = []; 
        let charScope: number = 'z'.charCodeAt(0) -'a'.charCodeAt(0) + 1;

        for(let letter of [...s])
        {                   
            let char: number =  letter.charCodeAt(0);
            if(/^[a-zA-Z]{1}$/.test(letter))
            {
                let isSmallCap: boolean = char > 'Z'.charCodeAt(0);              
                shift = shift % charScope;
                char += shift - (char+shift > (isSmallCap ? 'z': 'Z').charCodeAt(0) ? charScope: 0);
            }

            chunk += String.fromCharCode(char);            
            if(chunk.length == chunkSize) 
            {            
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

        let charScope: number = 'z'.charCodeAt(0) -'a'.charCodeAt(0) + 1;
        let output: string = '';

        for(let chunk of arr)
        {
            for(let letter of [...chunk])
            {
                let char: number =  letter.charCodeAt(0);
                if(/^[a-zA-Z]{1}$/.test(letter))
                {
                    let isSmallCap: boolean = char > 'Z'.charCodeAt(0);              
                    shift = shift % charScope;
                    char -= shift - (char-shift < (isSmallCap ? 'a': 'A').charCodeAt(0) ? charScope: 0);
                }
            
                output += String.fromCharCode(char);
                shift++;
            }
        }
        return output;
    }

}


var u, sol, v;
        u =    "I should have known that you would have a perfect answer for me!!!";
        sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
console.log(G964.movingShift(u, 1));
console.log(sol);
console.log(G964.demovingShift(sol, 1));
console.log(u);
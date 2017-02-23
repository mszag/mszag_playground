//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
    let rightFaces: number = 0;

    for(let face of arr)
    {
        if(face.match("^[:;][-~]?[\)D]$") )
        rightFaces++;
    }    

    return rightFaces;
}

console.log(countSmileys([':D',':~)',';~D',':)']));